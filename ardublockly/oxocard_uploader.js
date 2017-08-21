'use strict';

function OxocardUploader(compileUrl, uploadUrl){
	var self = this;

	self.compileUrl = compileUrl;
	self.uploadUrl = uploadUrl;
	this.FLASH_COMMAND={
		"board": "arduino:avr:duo",
		"filename": "sketch_jul11a.hex",
		"commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\" -V", // -V nor reading back, half-time flash
		"extra": {
			"auth": {
				"password": null
			},
			"wait_for_upload_port": false,
			"use_1200bps_touch": false,
			"network": false,
			"params_verbose": "-v",
			"params_quiet": "-q -q",
			"verbose": false
		}
	};

	self.compileAndUploadCurrentWorkspace = function(port){
		var sourceCode = Blockly.Arduino.workspaceToCode(Ardublockly.workspace);
		self.compileAndUpload(sourceCode, port);
	}

	self.compileAndUpload = function(source, port){
		self.compile(source, function(response){
			if('hex' in response){
				self.upload(response['hex'], port);
			}
		});
	}

	self.callbackCompile = function(){};
	self.callbackUpload = function(){};

	self.compile = function(inoContent, callback){
		callback = callback || this.callbackCompile;
		OxocardAgent.httpPostRequest(inoContent, self.compileUrl, callback);
	};

	self.upload = function(hex, port, callback){
		callback = callback || self.callbackUpload;
		// hacky way to ensure we have a copy of the object
		var request = JSON.parse(JSON.stringify(self.FLASH_COMMAND));
		request['hex'] = hex;
		request['port'] = port;
		oxocardAgent.setUploadButtonText(Ardublockly.LOCALISED_TEXT.flashing);
		OxocardAgent.httpPostRequest(request, self.uploadUrl, callback)
	};


}

function OxocardSocket(socketUrl){
	var self = this;

	self.socketUrl = socketUrl;
	self.socket = null;
	self.connected = false;
	self.currentCallbackTTL = 0;
	self.currentCallback = null;

	self.init = function(){
		self.currentCallback =  self.defaultCallback;
		self.socket = io(self.socketUrl);
		self.socket.on('disconnect', function(evt){
			console.log('Websocket gone!!');
		});
		self.socket.on('message', self.onMessage);
	}

	self.onMessage = function(event){
		if(self.currentCallbackTTL > 0){

			self.currentCallbackTTL -= 1;
			self.currentCallback(event);
		}else{
			self.defaultCallback(event);
		}
	}

	self.isConnected = function(){
		return self.socket.connected;
	}

	self.sendCommand = function(command, ttl, callback){
		self.currentCallbackTTL = ttl;
		self.currentCallback = callback;
		self.socket.emit('command', command);
	}

	self.defaultCallback = function(event){
		try{
			var result = JSON.parse(event);
			if('Flash' in result && result['Flash'] == 'Ok'){
				console.log("We have detected successful upload!!")
				oxocardAgent.disableLoading();
			}
		} catch(e) {
			console.log(event);
			console.log("Failed to parse json: " + e);
		}
	}

	self.init();
}

function OxocardAgent(){
	var self = this;
	
	self.portRangeStart = 8990;
	self.portRangeEnd = 9000;
	self.connectUrl = 'http://localhost:{{PORT}}/info';

	self.compileUrl = 'http://compile.oxocard.ch/compile/arduino';
	self.agentUrl = null;
	self.oxocardUploader = null;
	self.oxocardSocket = null;
	

	self.connectedPorts = new Array();
	self.shouldShowNotRunning = true;
	self.shouldShowNotConnected = true;
	self.updatePortInterval = false;
	self.shouldTryPorts = false;

	self.canUpload = false;
	self.toolsDownloaded = false;
	self.isUploading = false;

	self.init = function(){
		self.connect();
		self.disableUpload();
	}

	self.checkConnection = function(){
		if(self.oxocardSocket == null){
			if(self.shouldTryPorts){
				self.connectTryPorts();
			}else{
				self.connect();
				self.shouldTryPorts = true;
			}
		}
		if(self.oxocardSocket == null || !self.oxocardSocket.isConnected()){
			if(self.shouldShowNotRunning){
				self.shouldShowNotRunning = false;
				$('#not_running_dialog').openModal({
					dismissible: true,
					opacity: .5,
					in_duration: 200,
					out_duration: 250
				});
			}
			setTimeout(self.checkConnection,1000);
		}else{
			if(self.updatePortInterval === false){
				self.updatePortInterval = setInterval(self.updatePortList,500);
			}
			setTimeout(self.checkConnection,1000);
			if(!self.shouldShowNotRunning){
				$('#not_running_dialog').closeModal();
				self.shouldShowNotRunning = true;
			}
		}
		
	}

	self.connect = function(){
		OxocardAgent.httpRequest(self.connectUrl.replace('{{PORT}}', 8991), function(response){
			self.agentUrl = response['http'];
			self.oxocardUploader = new OxocardUploader(self.compileUrl, self.agentUrl + '/upload');
			self.oxocardSocket = new OxocardSocket(response['ws']);
			$('#not_running_dialog').closeModal();
		});
		setTimeout(self.checkConnection, 1000);
	}

	self.connectTryPorts = function(){
		for(var i=self.portRangeStart; i<self.portRangeEnd; i++){
			OxocardAgent.httpRequest(self.connectUrl.replace('{{PORT}}', i), function(response){
				self.agentUrl = response['https'];
				self.oxocardUploader = new OxocardUploader(self.compileUrl, self.agentUrl + '/upload');
				self.oxocardSocket = new OxocardSocket(response['ws']);
				$('#not_running_dialog').closeModal();
				setTimeout(self.checkConnection, 1000);
			});
		}
	}

	self.updatePortList = function(){
		if(self.oxocardSocket == null || !self.oxocardSocket.isConnected()){
			console.log("Cannot update list. Not connected.");
			return;
		}
		self.oxocardSocket.sendCommand('list', 3, function(result){
			try{
				var ports = JSON.parse(result);
				if(ports['Network'] == false){
					self.connectedPorts = new Array();
					var list = document.getElementById('serial-port-dropdown');
					var html = '';
					for(var i=0, l=ports['Ports'].length; i<l; i++){
						var port = ports['Ports'][i];
						if(port['VendorID'].toLowerCase() != '0x1a86' || port['ProductID'].toLowerCase() != '0x7523') continue;
						self.connectedPorts.push(port['Name']);
						html += '<li><a href="#!">' + port['Name'] + '</a></li><li class="divider"></li>';
					}
					list.innerHTML = html;
					if(self.connectedPorts.length == 0 && self.shouldShowNotConnected){
						$('#not_connected_dialog').openModal({
							dismissible: true,
							opacity: .5,
							in_duration: 200,
							out_duration: 250
						});
						self.shouldShowNotConnected = false;
						self.disableUpload();
					}
					if(self.connectedPorts.length > 0 && !self.shouldShowNotConnected){
						$('#not_connected_dialog').closeModal();
						self.shouldShowNotConnected = true;
					}
					if(self.connectedPorts.length > 0 && !self.canUpload){
						self.enableUpload();
					}
				}
			}catch(e){}
		});
	}

	/*self.connectToSerialPort = function(){
		self.oxocardSocket.sendCommand('connect /dev/ttyUSB0 ', function(result){
		'<span class="arduino_dialog_out"></span>'
	}

	self.disconnectFromSerialPort = function(){

	}*/

	self.compileAndUpload = function(){
		if(self.connectedPorts.length == 0){
			console.log('No ports. Skipping compile&upload.');
			return;
		}
		if(!self.canUpload){
			console.log('Uplaod disabled because no connectivity to agent. Skipping compile&upload.');
			return;
		}
		if(self.isUploading){
			console.log('Uplaod disabled because no already uploading. Skipping compile&upload.');
			return;
		}
		if(self.toolsDownloaded){
			//self.oxocardUploader.callbackUpload = self.disableLoading;
			self.enableLoading();
			for(var i=0, l=self.connectedPorts.length; i<l; i++)
				self.oxocardUploader.compileAndUploadCurrentWorkspace(self.connectedPorts[i]);
		}else{
			self.downloadToolsIfNeeded(self.compileAndUpload)
		}
		
	}


	self.downloadToolsIfNeeded = function(callback){
		if(self.toolsDownloaded){
			callback();
			return;
		}
		self.oxocardSocket.sendCommand('downloadtool avrdude', 2, function(result){
			if(result == 'downloadtool avrdude') return;
			var result = JSON.parse(result);
			if(result['DownloadStatus'] == 'Success'){
				self.toolsDownloaded = true;
				callback();
			}else{
				console.log('NOT HANDLED! BUT AVRDUDE WAS NOT INSTALLED!');
			}

		});
	}

	self.disableUpload = function(){
		self.canUpload = false;
		$('#button_upload').addClass('disabled');
	}

	self.enableUpload = function(){
		self.setUploadButtonText(Ardublockly.LOCALISED_TEXT.upload);
		self.canUpload = true;
		$('#button_upload').removeClass('disabled');
	}

	self.setUploadButtonText = function(text){
		document.getElementById('upload_button_text').innerHTML = text;
	}

	self.enableLoading = function(){
		self.isUploading = true;
		self.setUploadButtonText(Ardublockly.LOCALISED_TEXT.compiling);
		$('#button_upload').addClass('disabled');
		$('#loading_icon_upload').css('display', 'inline');
		$('#upload_icon_upload').css('display', 'none');
	}

	self.disableLoading = function(){
		self.isUploading = false;
		$('#button_upload').removeClass('disabled');
		$('#loading_icon_upload').css('display', 'none');
		$('#upload_icon_upload').css('display', 'inline');
		self.setUploadButtonText(Ardublockly.LOCALISED_TEXT.upload);
	}

	self.init();
}



OxocardAgent.httpPostRequest = function(data, url, callback){
	OxocardAgent.httpRequest(url, callback, data)
}

OxocardAgent.httpRequest = function(url, callback, data){
	var http = new XMLHttpRequest();
	if(data)
		http.open("POST", url, true);
	else
		http.open("GET", url, true)
	http.onreadystatechange = function() {
		if(http.readyState == 4 && (http.status==200 || http.status==202) ) {
			console.log(http.responseJSON);
			var parsedResponse = http.responseText;
			//console.log(parsedResponse);
			//parsedResponse = parsedResponse.replace(/\\/, /\\\\/);
			console.log(parsedResponse);
			try{
				parsedResponse = JSON.parse(parsedResponse);
			} catch(e) {
				console.log("Failed to parse json: " + e);
			}
			callback(parsedResponse);
		}else if(http.readyState == 4 && http.status > 199 && http.status < 300){
			// we can ignore...
		}else if(http.readyState == 4 ){
			console.log('Something wrong on the backend?! url: ' + url);
		}else{
			// ignore for now.
		}
	}

	var contentType = 'text/plain';

	if(typeof data === 'object' || typeof data === 'array'){
		data = JSON.stringify(data);
		contentType = 'application/json';
	}

	if(data){
		http.setRequestHeader('Content-type',contentType);
		http.send(data);
	}else{
		http.send();
	}
}

var oxocardAgent = oxocardAgent || new OxocardAgent();

