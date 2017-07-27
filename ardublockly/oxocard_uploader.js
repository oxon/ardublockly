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
				self.upload(response['hex'], port, function(innerResponse){
					console.log(innerResponse);
				});
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
		OxocardAgent.httpPostRequest(request, self.uploadUrl, callback)
	};


}

function OxocardSocket(socketUrl){
	var self = this;

	self.socketUrl = socketUrl;
	self.socket = null;
	self.connected = false;
	self.currentCallback = function(){};

	self.init = function(){
		self.socket = io(self.socketUrl);
		self.socket.on('disconnect', function(evt){
			console.log('Websocket gone!!');
		});
		self.socket.on('message', self.onMessage);
	}

	self.onMessage = function(event){
		self.currentCallback(event);
	}

	self.isConnected = function(){
		return self.socket.connected;
	}

	self.sendCommand = function(command, callback){
		self.currentCallback = callback;
		self.socket.emit('command', command);
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
	
	self.connectionRetries = 0;
	self.connectedPorts = new Array();
	self.shouldShowNotRunning = true;
	self.shouldShowNotConnected = true;
	
	self.init = function(){
		self.connect();
		setInterval(self.updatePortList,200);

	}

	self.checkConnection = function(){
		if(self.oxocardSocket == null){
			self.connect();
			self.connectionRetries ++;
			if(self.shouldShowNotRunning && self.connectionRetries > 4){
				this.shouldShowNotRunning = false;
				$('#not_running_dialog').openModal({
					dismissible: true,
					opacity: .5,
					in_duration: 200,
					out_duration: 250
				});
			}
		}else{
			setTimeout(self.checkConnection,1000);
			self.connectionRetries = 0;
		}
		/*if(self.oxocardSocket != null && self.oxocardSocket.isConnected())
			self.shouldShowNotConnected = true;*/
	}

	self.connect = function(){
		console.log("connecting to agent");
		for(var i=self.portRangeStart; i<self.portRangeEnd; i++){
			OxocardAgent.httpRequest(self.connectUrl.replace('{{PORT}}', i), function(response){
				self.agentUrl = response['https'];
				self.oxocardUploader = new OxocardUploader(self.compileUrl, self.agentUrl + '/upload');
				self.oxocardSocket = new OxocardSocket(response['wss']);
				$('#not_running_dialog').closeModal();
				self.shouldShowNotRunning = true;
			})
		}
		setTimeout(self.checkConnection, 1000);
	}

	self.updatePortList = function(){
		if(self.oxocardSocket == null || !self.oxocardSocket.isConnected()){
			console.log("Cannot update list. Not connected.");
			return;
		}
		self.oxocardSocket.sendCommand('list', function(result){
			try{
				var ports = JSON.parse(result);
				if(ports['Network'] == false){
					self.connectedPorts = new Array();
					var list = document.getElementById('serial-port-dropdown');
					var html = '';
					for(var i=0, l=ports['Ports'].length; i<l; i++){
						var port = ports['Ports'][i];
						if(port['VendorID'].toUpperCase() != '0X1A86' || port['ProductID'].toUpperCase() != '0X7523') continue;
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
					}
					if(self.connectedPorts.length > 0 && !self.shouldShowNotConnected){

						$('#not_connected_dialog').closeModal();
						self.shouldShowNotConnected = true;
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
		if(self.connectedPorts.length != 1){
			console.log('Not unique port. Skipping compile&upload.');
			return;
		}
		self.oxocardUploader.compileAndUploadCurrentWorkspace(self.connectedPorts[0]);
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
		if(http.readyState == 4 && http.status > 199 && http.status < 300) {
			var parsedResponse = http.responseText;
			try{
				parsedResponse= JSON.parse(http.responseText);
			} catch(e) {
				console.log("Failed to parse json: " + e);
			}
			callback(parsedResponse);
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

