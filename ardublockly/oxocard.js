(function () {
	'use strict';
}());

var OXOcard = OXOcard || {};

OXOcard.VENDOR_ID = '0x1a86';
OXOcard.PRODUCT_ID = '0x7523';

OXOcard.SimulationManager = function(config){
	var self = this;
	config = config || {};
	self.containerId = config.containerId || null;
	self.containerElement = null;
	self.height = config['height'] || 500;
	self.width = self.height * 0.68;

	self.displayId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_display_wrapper');
	self.display = null;

	self.statusId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_status_wrapper');
	self.status = null;

	self.buttonRowId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row_wrapper');
	self.buttonRow = null;

	self.resetButtonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_reset_button_wrapper');
	self.resetButton = null;

	self.init = function(){
		if(self.containerId == null)
			throw 'No element ID provided!';
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw 'No valid element ID provided!';
		self.initStructure();

		self.display = new OXOcard.SimulationDisplay({'containerId':self.displayId, 'width':(self.height*0.26), 'height':self.height*0.26});
		self.status = new OXOcard.SimulationStatus({'containerId':self.statusId, 'size':self.height*0.035});
		self.buttonRow = new OXOcard.SimulationButtonRow({'containerId':self.buttonRowId, 'size':self.height*0.07});
		self.resetButton = new OXOcard.SimulationButton({'containerId':self.resetButtonId, 'height':self.height*0.07,'width':self.height*0.07});
	};
	
	self.initStructure = function(){
		var html = '<div class="oxocard_simulation_wrapper" style="';
		html += 'width:' + self.width +'px; height:' + self.height + 'px;">';
		html += '<div class="oxocard_simulation_status_wrapper" id="' + self.statusId + '"></div>';
		html += '<div class="oxocard_simulation_display_wrapper" id="' + self.displayId + '"></div>';
		html += '<div class="oxocard_simulation_button_wrapper" id="' + self.buttonRowId + '"></div>';
		html += '<div class="oxocard_simulation_button_wrapper" style="margin:50% 0 0 30%" id="' + self.resetButtonId + '"></div>';
		html += '</div>';
		self.containerElement.insertAdjacentHTML('afterbegin',html);
	};
	
	self.updateUI = function(){
		self.status.updateUI();
		self.display.updateUI();
		self.buttonRow.updateUI();
		self.resetButton.updateUI();
	};
	
	self.init();
};

OXOcard.SimulationStatus = function(config){
	var self = this;

	config = config || {};
	self.containerId = config.containerId || null;
	self.containerElement = null;
	self.displayId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_status');
	self.size = config.size || 25;

	self.powerLedId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_status_led_power');
	self.powerLed = null;

	self.chargingLedId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_status_led_charging');
	self.chargingLed = null;

	self.serialLedId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_status_led_serial');
	self.serialLed = null;

	self.bluetoothLedId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_status_led_bluetooth');
	self.bluetoothLed = null;

	self.init = function(){
		if(self.containerId == null)
			throw 'No element ID provided!';
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw 'No valid element ID provided!';

		self.initStructure();
		
		self.powerLed = new OXOcard.SimulationLed({'containerId':self.powerLedId, 'height':self.size, 'width':self.size});
		self.chargingLed = new OXOcard.SimulationLed({'containerId':self.chargingLedId, 'height':self.size, 'width':self.size, color:'#7AB41D'});
		self.serialLed = new OXOcard.SimulationLed({'containerId':self.serialLedId, 'height':self.size, 'width':self.size, color:'#7AB41D'});
		self.bluetoothLed = new OXOcard.SimulationLed({'containerId':self.bluetoothLedId, 'height':self.size, 'width':self.size, color:'#00f'});

		self.powerLed.setValue(255);
		self.chargingLed.setValue(255);
	};

	self.initStructure = function(){

		var style = [
			'height:' + self.size + 'px',
			'width:' + self.size + 'px',
			'-webkit-border-radius:' + self.size + 'px',
			'-moz-border-radius:' + self.size + 'px',
			'border-radius:' + self.size + 'px',
			'margin:0 ' + (self.size/8) + 'px',
			'background:#fff',
			'float:left',
			'overflow:hidden'
		].join('; ');

		var html = '<div style="width:' + (self.size*5) + 'px;margin: 0 auto;">';
		html += '<div style="' + style + '" id="' + self.powerLedId + '" ></div>';
		html += '<div style="' + style + '" id="' + self.chargingLedId + '"></div>';
		html += '<div style="' + style + '" id="' + self.serialLedId + '"></div>';
		html += '<div style="' + style + '" id="' + self.bluetoothLedId + '"></div>';
		html += '</div>';

		self.containerElement.insertAdjacentHTML('beforeend', html);
	};

	self.updateUI = function(){
		self.powerLed.updateUI();
		self.chargingLed.updateUI();
		self.serialLed.updateUI();
		self.bluetoothLed.updateUI();
	};

	self.init();
};

OXOcard.SimulationDisplay = function(config){
	var self = this;

	config = config || {};
	self.containerId = config.containerId || null;
	self.containerElement = null;
	self.displayId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_display');
	self.ledRows = config.ledRows || 8;
	self.ledColumns = config.ledColumns || 8;
	self.width = config.width || 160;
	self.height = config.height || 160;
	self.ledIds = [];
	self.leds = null;

	self.init = function(){
		if(self.containerId == null)
			throw 'No element ID provided!';
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw 'No valid element ID provided!';

		self.initStructure();
		self.leds = [];
		for(var i=0; i<self.ledRows*self.ledColumns; i++){
			self.leds.push(new OXOcard.SimulationLed({'containerId':self.ledIds[i], 'height':(self.height/self.ledRows), 'width':(self.width/self.ledColumns)}));
		}
	};

	self.initStructure = function(){
		var html = '<table id="' + self.displayId + '" style="margin:0 auto; border-collapse:seperate; border-spacing:' + (self.width/self.ledColumns)/20 + 'px;"><tbody>';
		for(var y=0; y<self.ledRows; y++){
			html += '<tr>';
			for(var x=0; x<self.ledColumns; x++){
				var id = OXOcard.helper.findFreeHTMLId('oxocard_simulation_display_led');
				self.ledIds.push(id);
				html += '<td id="' + id + '" style="background:#fff;"></td>';
			}
			html += '</tr>';
		}
		html += '</tbody></table>';
		self.containerElement.insertAdjacentHTML('beforeend', html);
	};

	self.updateUI = function(){
		for(var i=0, l=self.leds.length; i<l; i++){
			self.leds[i].updateUI();
		}
	};

	self.init();
};

OXOcard.SimulationLed = function(config){
	var self = this;

	config = config || {};

	self.containerId = config.containerId || null;
	self.containerElement = null;

	self.color = config.color || '#e42e87';
	self.value = 0;

	self.ledId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_led');
	self.ledElement = null;
	self.height = config.height || 20;
	self.width = config.width || 20;

	self.init = function(){
		if(self.containerId == null)
			throw 'No element ID provided!';
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw 'No valid element ID provided!';
		self.initStructure();
	};

	self.initStructure = function(){
		var html = '<div id="' + self.ledId + '" />';
		self.containerElement.insertAdjacentHTML('beforeend', html);
		self.ledElement = document.getElementById(self.ledId);
	};

	self.setValue = function(value){
		self.value = value;
	};

	self.updateUI = function(){
		self.ledElement.style.height = self.height + 'px';
		self.ledElement.style.width = self.width + 'px';
		self.ledElement.style.backgroundColor = self.color;
		self.ledElement.style.opacity = self.value/255;
		
	};

	self.init();
};

OXOcard.SimulationButtonRow = function(config){
	var self = this;

	config = config || {};
	self.containerId = config.containerId || null;
	self.containerElement = null;
	self.buttonRowId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row');
	self.size = config.size || 50;

	self.leftButtonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row_left_button');
	self.ledButton = null;

	self.middleButtonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row_middle_button');
	self.middleButton = null;

	self.rightButtonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row_right_button');
	self.rightButton = null;

	self.init = function(){
		if(self.containerId == null)
			throw 'No element ID provided!';
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw 'No valid element ID provided!';

		self.initStructure();
		
		self.leftButton = new OXOcard.SimulationButton({'containerId':self.leftButtonId, 'height':self.size, 'width':self.size});
		self.middleButton = new OXOcard.SimulationButton({'containerId':self.middleButtonId, 'height':self.size, 'width':self.size});
		self.rightButton = new OXOcard.SimulationButton({'containerId':self.rightButtonId, 'height':self.size, 'width':self.size});
	};

	self.initStructure = function(){
		var margin = Math.floor(self.size/7)-2;
		var style = [
			'float:left;',
			'margin:0px ' + margin + 'px 0 ' + margin + 'px;'
		].join('');

		var html = '<div style="width:' + (self.size*4) + 'px;margin: ' + self.size + 'px auto;">';
		html += '<div style="' + style + '" id="' + self.leftButtonId + '" ></div>';
		html += '<div style="' + style + '" id="' + self.middleButtonId + '"></div>';
		html += '<div style="' + style + '" id="' + self.rightButtonId + '"></div>';
		html += '</div>';

		self.containerElement.insertAdjacentHTML('beforeend', html);
	};

	self.updateUI = function(){
		self.leftButton.updateUI();
		self.middleButton.updateUI();
		self.rightButton.updateUI();
	};

	self.init();
};

OXOcard.SimulationButton = function(config){
	var self = this;

	config = config || {};

	self.containerId = config.containerId || null;
	self.containerElement = null;


	self.buttonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button');
	self.buttonElement = null;
	self.height = config.height || 50;
	self.width = config.width || 50;

	self.init = function(){
		if(self.containerId == null)
			throw 'No element ID provided!';
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw 'No valid element ID provided!';
		self.initStructure();
	};

	self.initStructure = function(){
		var radiusSize = (self.height > self.width) ? self.width : self.height;
		var html = '<div style="border:2px solid #969696; cursor:pointer;border-radius:' + radiusSize + 'px" id="' + self.buttonId + '" />';
		self.containerElement.insertAdjacentHTML('beforeend', html);
		self.buttonElement = document.getElementById(self.buttonId);
	};

	self.updateUI = function(){
		self.buttonElement.style.height = self.height + 'px';
		self.buttonElement.style.width = self.width + 'px';
	};

	self.init();
};

OXOcard.Helper = function(){
	var self = this;

	self.usedIds = [];

	self.findFreeHTMLId = function(prefix){
		prefix = prefix || 'id';
		for(var i=0; i<10000; i++){
			if(document.getElementById(prefix + '_' + i) == null && self.usedIds.indexOf(prefix + '_' + i) == -1){
				self.usedIds.push(prefix + '_' + i);
				return prefix + '_' + i;
			}
		}
		return false;
	};

	self.httpPostRequest = function(data, url, callback, failureCallback){
		OXOcard.helper.httpRequest(url, callback, data, failureCallback);
	};

	self.httpRequest = function(url, callback, data, failureCallback){
		failureCallback = failureCallback || function(){};
		var http = new XMLHttpRequest();
		if(data)
			http.open('POST', url, true);
		else
			http.open('GET', url, true);
		http.onreadystatechange = function() {
			if(http.readyState == 4 && (http.status==200 || http.status==202) ) {
				var parsedResponse = http.responseText;
				try{
					parsedResponse = JSON.parse(parsedResponse);
				} catch(e) {
					// ignore
				}
				callback(parsedResponse);
			}else if(http.readyState == 4 && http.status > 199 && http.status < 300){
				// we can ignore...
			}else if(http.readyState == 4 ){
				failureCallback(http);
				//console.log('Something wrong on the backend?! url: ' + url + ' / status: ' + http.status);
			}else{
				// ignore for now.
			}
		};

		var contentType = 'text/plain';

		if(typeof data === 'object'){
			data = JSON.stringify(data);
			contentType = 'application/json';
		}

		if(data){
			http.setRequestHeader('Content-type',contentType);
			http.send(data);
		}else{
			http.send();
		}
	};
};

OXOcard.helper = new OXOcard.Helper();

OXOcard.DisplayHelper = function(simulation){
	var self = this;

	self.simulation = simulation;

	self.init = function(){

	};

	self.drawImage = function(values){
		for(var y=0, l=values.length; y<l; y++){
			for(var x=0, ll=values[y].length; x<ll; x++){
				self.getPixel(x, y).setValue(self.getValue(values[y][x])*255);
			}
		}
		self.simulation.updateUI();
	};

	self.drawRect = function(x, y, x2, y2, value){
		value = self.getValue(value);
		if(x2<x){
			var tempX = x;
			x = x2;
			x2 = tempX;
		}
		if(y2<y){
			var tempY = y;
			y = y2;
			y2 = tempY;
		}
		for(var posY=y; posY<=y2; posY++){
			for(var posX=x; posX<=x2; posX++){
				self.getPixel(posX, posY).setValue(value);
			}
		}
		self.simulation.updateUI();
	};

	self.drawPixel = function(x, y, value){
		var pixel = self.getPixel(x, y);
		pixel.setValue(value);
		pixel.updateUI();
	};

	self.getPixel = function(x, y){
		var translatedX = x;
		var translatedY = y;
		var index = translatedY*self.simulation.display.ledRows + translatedX;
		return self.simulation.display.leds[index];
	};

	self.getValue = function(value){
		if(typeof value === 'undefined' || value > 255){
			return 255;
		}
		if(value < 0)
			return 0;
		return value;
	};

	self.init();
};

OXOcard.AnimationPlayer = function(simulation){
	var self = this;

	self.simulation = simulation;
	self.displayHelper = null;
	self.animation = null;
	self.currentFrame = null;

	self.init = function(){
		self.displayHelper = new OXOcard.DisplayHelper(self.simulation);
	};

	self.playAnimation = function(animation){
		self.animation = animation;
		self.playFrame();
	};

	self.playFrame = function(){
		self.currentFrame = self.animation.getNextFrame();
		if(self.currentFrame == null){
			self.stopAnimation();
			return;
		}
		self.displayHelper.drawImage(self.currentFrame.values);
		setTimeout(self.playOffFrame, self.currentFrame.onTime);
	};

	self.playOffFrame = function(){
		if(self.currentFrame == null){
			console.log('Empty Frame. NOT GOOD!');
			return;
		}
		setTimeout(self.playFrame, self.currentFrame.offTime);
	};

	self.stopAnimation = function(){
		
	};

	self.init();
};

OXOcard.Animation = function(){
	var self = this;

	self.frames = [];
	self.animationIndex = -1;
	self.loop = true;

	self.init = function(){
		
	};

	self.registerFrame = function(frame){
		self.frames.push(frame);
	};

	self.getNextFrame = function(){
		self.animationIndex++;
		if(self.frames.length <= self.animationIndex){
			if(self.loop)
				self.animationIndex = 0;
			else
				return null;
		}
		return self.frames[self.animationIndex];
	};

	self.init();
};

OXOcard.AnimationFrame = function(values){
	var self = this;
	
	self.height = 8;
	self.width = 8;
	self.onTime = 250;
	self.offTime = 0;

	self.values = values || null;

	self.init = function(){
		if(self.values == null){
			self.values = self.generateArray();
		}
	};

	self.drawPixel = function(x,y, value){
		self.values[y][x] = value;
	};

	self.generateArray = function(){
		var array = [];
		for(var y=0; y<self.height; y++){
			array.push([]);
			for(var x=0; x<self.width; x++){
				array[y].push(0);
			}
		}
		return array;
	};

	self.init();
};

OXOcard.AnimationHelper = function(containerId, size, url){
	var self = this;

	self.containerId = containerId || null;
	self.size = size || null;
	self.url = url || null;

	self.isProcessed = false;
	self.animation = null;

	self.simulation = null;
	self.player = null;

	self.init = function(){
		if(self.size == null || self.containerId == null || self.url == null)
			throw 'Animation needs a containerId, size and URL!';
			

		var config = {
			'containerId': self.containerId,
			'height': self.size
		};

		self.simulation = new OXOcard.SimulationManager(config);
		self.player = new OXOcard.AnimationPlayer(self.simulation);
		self.getAnimation(self.player.playAnimation);
	};

	self.processAnimation = function(callback){
		OXOcard.helper.httpRequest(url, function(data){
			if('f' in data && 't' in data){
				self.animation = new OXOcard.Animation();

				for(var i=0, l=data.f.length; i<l; i++){
					self.processFrame(data.f[i], data.t[i]);
				}
				callback();
			}
		});
	};

	self.processFrame = function(origValues, times){
		var values = [];
		for(var y=0; y<8; y++){
			var line = [];
			for(var x=0; x<8; x++){
				var index = Math.floor((y*8+x)/4);
				var value = origValues[index];
				value = (256+((value)<<(x%4*8)>>24))%256;
				value = value/255;
				line.push(value);
			}
			values.push(line);
		}
		var frame = new OXOcard.AnimationFrame(values);
		frame.onTime = times.on;
		frame.offTime = times.off;
		self.animation.registerFrame(frame);
	};

	self.getAnimation = function(callback){
		if(self.isProcessed){
			callback(self.animation);
			return;
		}
		self.processAnimation(function(){
			self.isProcessed = true;
			callback(self.animation);
		});
	};

	self.init();
};

OXOcard.OXOcard = function(config){
	var self = this;
	
	config = config || {};

	self.device = config.device || null;
	self.socket = config.socket || null;
	self.uploadURL = config.uploadURL || null;
	self.uploader = null;
	self.compiler = null;

	self.outputCallback = config.outputCallback || function(device, message){console.log('oxocard - ide: ' + message);};
	self.serialOutputCallback = config.serialOutputCallback || function(device, message){console.warn('oxocard (' + device.device.Name +') - serial: ' + message);};
	self.statusCompiledCallback = config.statusCompiledCallback || function(device){console.log('oxocard (' + device.device.Name +') - compiled');};
	self.statusUploadedCallback = config.statusUploadedCallback || function(device){console.log('oxocard (' + device.device.Name +') - uploaded ');};
	self.statusFlashedCallback = config.statusFlashedCallback || function(device){console.log('oxocard (' + device.device.Name +') - flashed');};
	self.statusCanceledCallback = config.statusCanceledCallback || function(device){console.log('oxocard (' + device.device.Name +') - flashing canceled');};
	self.statusPortChangedCallback = config.statusPortChangedCallback || function(device){console.log('oxocard (' + device.device.Name +') - portOpen: ' + self.isPortOpen);};
	self.statusFailedCompilationCallback = config.statusFailedCompilationCallback || function(device, compilation){console.log('oxocard (' + device.device.Name +') - compilation failed.');};

	self.shouldCancel = false;
	self.isCompiling = false;
	self.isFlashing = false;
	self.listenOnPort = false;
	self.isPortOpen = false;

	self.callbackId = -1;

	self.init = function(){
		self.callbackId = self.socket.registerCallback('message', self.serialMessage);
		self.uploader = new OXOcard.AgentUploader({
			'socket':self.socket,
			'uploadURL':self.uploadURL,
			'port':self.device.Name,
			'progressCallback':self.progressCallback,
			'uploadedCallback':self.uploadedCallback,
			'flashedCallback':self.flashedCallback,
			'canceledCallback':self.canceledCallback
		});
		self.closePort();
	};

	self.cleanUp = function(){
		self.closePort();
		if(self.callbackId != -1)
			self.socket.unregisterCallback('message', self.callbackId);
	};

	self.serialMessage = function(message){
		if(typeof message !== 'object') return;
		if('Ports' in message && 'Network' in message && message.Network == false){
			for(var i=0, l=message.Ports.length; i<l; i++){
				var port = message.Ports[i];
				if(!('Name' in port) || port.Name != self.device.Name) continue;
				if('IsOpen' in port){
					var notify = false;
					if(self.isPortOpen != port.IsOpen)
						notify = true;
					self.isPortOpen = port.IsOpen;
					if(notify) self.statusPortChangedCallback(self);
				}
			}
		}

		if(self.isPortOpen && 'D' in message){
			if(message.D != '\r')
				self.serialOutputCallback(self, message.D);
		}
	};

	self.compileAndUpload = function(code){
		self.compileCode(code, self.upload);
	};

	self.compileCode = function(code){
		self.isCompiling = true;
		self.compiler = new OXOcard.ArduinoCompiler({'callback':self.codeCompiled});
		self.compiler.setMainFileContent(code);
	};

	self.codeCompiled = function(compiler){
		if(!compiler.success){
			console.warn('Compilation failed.');
			self.outputCallback(self, compiler.output);
			self.statusFailedCompilationCallback(self, compiler);
			self.shouldCancel = false;
			return;
		}
		if(self.shouldCancel){
			self.shouldCancel = false;
			return;
		}
		self.outputCallback(self, compiler.output);
		self.isCompiling = false;
		self.statusCompiledCallback(self);
		self.upload(compiler.binary);
	};

	self.upload = function(binary){
		self.isFlashing = true;
		if(self.listenOnPort)
			self.closePort();
		
		self.uploader.upload(binary);
	};
	
	self.uploadedCallback = function(){
		self.statusUploadedCallback(self);
	};

	self.progressCallback = function(message){
		self.outputCallback(self, message);
	};

	self.flashedCallback = function(){
		self.isFlashing = false;
		if(self.listenOnPort)
			self.openPort();
		self.statusFlashedCallback(self);
	};

	self.canceledCallback = function(){
		self.isFlashing = false;
		if(self.listenOnPort)
			self.openPort();
		self.statusCanceledCallback(self);
	};

	self.closePort = function(){
		self.socket.sendCommand('close ' + self.device.Name);
	};

	self.openPort = function(){
		self.socket.sendCommand('open ' + self.device.Name + ' 115200');
	};

	self.enableSerialCommunication = function(){
		self.listenOnPort = true;
		if(!self.isFlashing)
			self.openPort();
	};

	self.disableSerialCommunication = function(){
		self.closePort();
	};

	self.cancelPendingActions = function(){
		if(self.isCompiling){
			self.shouldCancel = true;
			self.canceledCallback();
		}else{
			self.socket.sendCommand('killupload');
		}
	};

	self.init();
};

OXOcard.DeviceManager = function(config){
	var self = this;
	
	config = config || {};

	self.wrapper = null;
	self.agent = null;
	self.socket = null;

	self.statusAgentConnectedCallback = config.statusAgentConnectedCallback || function(){};
	self.statusAgentDisonnectedCallback = config.statusAgentDisconnectedCallback || function(){};
	self.statusAgentNotFoundCallback = config.statusAgentNotFoundCallback || function(){};
	self.statusDeviceConnectedCallback = config.statusDeviceConnectedCallback || function(){};
	self.statusDeviceDisconnectedCallback = config.statusDeviceDisconnectedCallback || function(){};
	self.statusCompileFinishedCallback = config.statusCompileFinishedCallback || function(){};
	self.statusUploadFinishedCallback = config.statusUploadFinishedCallback || function(){};
	self.statusFlashingFinishedCallback = config.statusFlashingFinishedCallback || function(){};
	self.statusCanceledCallback = config.statusCanceledCallback || function(){};
	self.statusFailedCompilationCallback = config.statusFailedCompilationCallback || function(){};
	self.statusIDEOutputCallback = config.statusIDEOutputCallback || function(){};
	self.statusSerialOutputCallback = config.statusSerialOutputCallback || function(){};

	self.devices = {};

	self.init = function(){
		self.wrapper = new OXOcard.Agent({
			'agentFoundCallback':self.setAgent,
			'agentConnectedCallback':self.setSocket,
			'agentNotFoundCallback':self.statusAgentNotFoundCallback,
			'agentDisconnectedCallback':self.reset,
			'cardFoundCallback':self.addDevice,
			'cardLostCallback':self.removeDevice
		});
	};

	self.setAgent = function(agent){
		self.agent = agent;
	};

	self.setSocket = function(socket){
		self.socket = socket;
		self.statusAgentConnectedCallback();
	};

	self.reset = function(){
		self.statusAgentDisonnectedCallback();
	};

	self.addDevice = function(device){
		var card = new OXOcard.OXOcard({
			'device':device,
			'socket':self.socket,
			'uploadURL':self.agent.foundAgentURL + '/upload',
			'outputCallback':self.statusIDEOutputCallback,
			'serialOutputCallback':self.statusSerialOutputCallback,
			'statusCompiledCallback':self.statusCompileFinishedCallback,
			'statusUploadedCallback':self.statusUploadFinishedCallback,
			'statusFlashedCallback':self.statusFlashingFinishedCallback,
			'statusCanceledCallback':self.statusCanceledCallback,
			'statusFailedCompilationCallback':self.statusFailedCompilationCallback,
			'statusPortChangedCallback':self.portChanged
		});
		self.devices[device.Name] = card;
		if(Object.keys(self.devices).length == 1) setTimeout(card.enableSerialCommunication,100);
		self.statusDeviceConnectedCallback(card);
	};

	self.removeDevice = function(device){
		var removed = self.devices[device.Name];
		removed.cleanUp();
		delete self.devices[device.Name];
		self.statusDeviceDisconnectedCallback(removed);
	};

	self.portChanged = function(device){
		if(device.isPortOpen && device.device.Name != Object.keys(self.devices).sort()[0]){
			console.log('We need to close!');
			device.disableSerialCommunication();
		}
	};

	self.compileAndUploadAllDevices = function(code){
		var deviceNames = Object.keys(self.devices);
		for(var i=0, l=deviceNames.length; i<l; i++){
			self.devices[deviceNames[i]].compileAndUpload(code);
		}
	};

	self.cancelAllDevices = function(){
		var deviceNames = Object.keys(self.devices);
		for(var i=0, l=deviceNames.length; i<l; i++){
			self.devices[deviceNames[i]].cancelPendingActions();
		}
	};

	self.init();
};

OXOcard.Agent = function(config){
	var self = this;

	config = config || {};

	self.agentFoundCallback = config.agentFoundCallback || function(agent){ console.log('found agent!'); console.log(agent); };
	self.agentDisconnectedCallback = config.agentDisconnectedCallback || function(){ console.log('disconnected from agent!');};
	self.agentConnectedCallback = config.agentConnectedCallback || function(){ console.log('connected to agent!'); };
	self.agentNotFoundCallback = config.agentNotFoundCallback || function(){ console.log('agent not found!'); };

	self.deviceFoundCallback = config.cardFoundCallback || function(device){ console.log('found card!'); console.log(device); };
	self.deviceLostCallback = config.cardLostCallback || function(device){ console.log('lost card!'); console.log(device); };

	self.agentFinder = null;
	self.agentSocket = null;
	self.serialList = null;

	self.isToolInstalled = false;
	self.serialMessageCallbackId = -1;

	self.init = function(){
		self.agentFinder = new OXOcard.AgentFinder({
			'callback':self.agentFound,
			'notFoundCallback':self.agentNotFoundCallback
		});
		self.findAgent();
	};

	self.agentFound = function(agent){
		self.agentSocket = new OXOcard.AgentSocket({
			'url':self.agentFinder.foundAgentWS,
			'connectCallback':self.installTool,
			'disconnectCallback':self.agentDisconnected,
		});
		self.agentFoundCallback(agent);
	};

	self.agentDisconnected = function(){
		self.serialList.forceDisconnectAllDevices();
		self.serialList = null;
		self.agentSocket.disconnect();
		self.agentSocket = null;
		self.agentDisconnectedCallback();
		self.findAgent();
	};

	self.findAgent = function(){
		self.agentFinder.find();
	};

	self.agentConnected = function(){
		self.serialList = new OXOcard.AgentSerialList({
			'socket':self.agentSocket,
			'addedDeviceCallback':self.deviceFoundCallback,
			'removedDeviceCallback':self.deviceLostCallback,
		});
		self.agentConnectedCallback(self.agentSocket);
	};

	self.installTool = function(){
		if(self.isToolInstalled){
			self.agentConnected();
			return;
		}
		self.serialMessageCallbackId = self.agentSocket.registerCallback('message', self.serialMessage);
		self.agentSocket.sendCommand('downloadtool avrdude');
	};

	self.serialMessage = function(message){
		if(typeof message !== 'object') return;
		if('DownloadStatus' in message && message.DownloadStatus == "Success"){
			self.isToolInstalled = true;
			self.agentSocket.unregisterCallback('message', self.serialMessageCallbackId);
			self.agentConnected();
		}else if('DownloadStatus' in message && message.DownloadStatus != "Success"){
			console.warn("Tool couldn't be installed. Retrying in a second.");
			setTimeout(self.installTool, 1000);
		}
	};
	self.init();
};

OXOcard.AgentFinder = function(config){
	var self = this;

	config = config || {};

	self.interval = config.interval || 1000;
	self.callback = config.callback || null;
	self.notFoundCallback = config.notFoundCallback || function(){console.log('Agent not found. Retries: ' + self.retries);};

	self.portRangeStart = 8990;
	self.portRangeEnd = 9000;
	self.defaultPort = 8991;
	self.baseURL = 'http://localhost:{{PORT}}/info';

	self.retries = 0;
	self.triedDefaultPort = false;
	self.triedAllPorts = false;
	self.foundPort = null;
	self.found = false;
	self.foundAgentURL = null;
	self.foundAgentWS = null;

	self.init = function(){
		if(self.callback == null)
			self.callback = self.defaultCallback;
	};

	self.getURL = function(port){
		port = port || self.currentPort;
		return self.baseURL.replace('{{PORT}}', port);
	};

	self.find = function(){
		self.triedDefaultPort = false;
		self.triedAllPorts = false;
		self.currentPort = null;
		self.found = false;
		self.foundAgentURL = null;
		self.foundAgentWS = null;
		self.tryPorts();
	};

	self.tryPorts = function(){
		if(self.found){ return;}
		if(self.triedDefaultPort && self.triedAllPorts){
			self.notFoundCallback();
		}
		if(!self.triedDefaultPort){
			self.triedDefaultPort = true;
			self.tryPort(self.defaultPort);
			setTimeout(self.tryPorts, self.interval);
			return;
		}
		for(var port=self.portRangeStart; port<=self.portRangeEnd; port++)
			self.tryPort(port);
		self.triedAllPorts = true;
		self.retries += 1;
		setTimeout(self.tryPorts, self.interval);
	};

	self.tryPort = function(port){
		OXOcard.helper.httpRequest(self.getURL(port), function(response){
			if(!('ws' in response) || !('http' in response)) return;
			self.foundAgentURL = response.http;
			self.foundAgentWS = response.ws;
			self.foundPort = port;
			self.found = true;
			self.callback(self);
		});
	};

	self.defaultCallback = function(){
		console.log(self);
	};

	self.init();
};

OXOcard.AgentSerialList = function(config){
	var self = this;

	config = config || {};

	self.socket = config.socket || null;
	self.interval = config.interval || 500;
	self.lastUpdate = 0;
	self.running = true;

	self.devices = [];

	self.addedDeviceCallback = config.addedDeviceCallback || function(device){ console.log('New device.'); console.log(device); };
	self.removedDeviceCallback = config.removedDeviceCallback || function(device){ console.log('Lost device.'); console.log(device); };

	self.init = function(){
		if(self.socket == null)
			throw 'No socket provided! We can\'t initialize SerialList';
		self.socket.registerCallback('message', self.handleResponse);
		self.start();
	};

	self.start = function(){
		self.running = true;
		self.updateList();
	};

	self.stop = function(){
		self.running = false;
	};

	self.updateList = function(){
		if(!self.socket.isConnected){
			setTimeout(self.updateList, 200);
			return;
		}
		if((new Date()).getTime() - self.lastUpdate > self.interval){
			self.socket.sendCommand('list');
		}
		if(self.running)
			setTimeout(self.updateList, self.interval);
	};

	self.handleResponse = function(response){
		if(typeof response !== 'object') return;
		if('Ports' in response && 'Network' in response && response.Network == false){
			self.last_update = (new Date()).getTime();
			self.markDevicesAsLost();
			for(var i=0, l=response.Ports.length; i<l; i++){
				var port = response.Ports[i];
				if(port.VendorID.toLowerCase() != OXOcard.VENDOR_ID) continue;
				if(port.ProductID.toLowerCase() != OXOcard.PRODUCT_ID) continue;
				self.addDevice(port);
			}
			self.removeLostDevices();
		}
	};

	self.markDevicesAsLost = function(){
		for(var i=0, l=self.devices.length; i<l; i++){
			self.devices[i].updated = false;
		}
	};

	self.removeLostDevices = function(){
		for(var i=0; i<self.devices.length; i++){
			if(!self.devices[i].updated){
				var device = self.devices.splice(i,1);
				self.removedDeviceCallback(device[0]);
				i--;
			}
		}
	};

	self.addDevice = function(device){
		var deviceIndex = -1;
		for(var i=0, l=self.devices.length; i<l; i++){
			if(self.devices[i].Name == device.Name){
				deviceIndex = i; break;
			}
		}
		device.updated = true;
		if(deviceIndex === -1){
			self.devices.push(device);
			self.addedDeviceCallback(device);
		}else{
			self.devices[deviceIndex] = device;
		}
	};

	self.forceDisconnectAllDevices = function(){
		for(var i=0; i<self.devices.length; i++){
			var device = self.devices.splice(i,1);
			self.removedDeviceCallback(device[0]);
			i--;
		}
	};

	self.init();
};

OXOcard.AgentSocket = function(config){
	var self = this;

	config = config || {};
	self.socketUrl = config.url || null;
	
	self.socket = null;
	self.isConnected = false;

	self.callbacks = {
		'connect': new Array(config.connectCallback || function(){}),
		'message': [],
		'disconnect':  new Array(config.disconnectCallback || function(){})
	};

	self.init = function(){
		if(self.socketUrl == null)
			throw 'No socket-URL provided! We can\'t connect in AgentSocket.init()';

		self.socket = io.connect(self.socketUrl, {'forceNew': true, 'autoConnect': false });
		self.socket.on('connect', self.onConnect);
		self.socket.on('disconnect', self.onDisconnect);
		self.socket.on('message', self.onMessage);
		self.socket.connect();
	};

	self.onMessage = function(result){
		try{
			result = JSON.parse(result);
		}catch(e){ /* ignore */ }
		self.multiplexEvent('message', result);
	};

	self.onConnect = function(){
		self.isConnected = true;
		self.multiplexEvent('connect');
	};

	self.onDisconnect = function(){
		self.isConnected = false;
		self.multiplexEvent('disconnect');
	};

	self.registerCallback = function(type, callback){
		if(!(type in self.callbacks)) return -1;
		self.callbacks[type].push(callback);
		return (self.callbacks[type].length-1);
	};

	self.unregisterCallback = function(type, index){
		if(!(type in self.callbacks)) return false;
		if(index < 0 || index >= self.callbacks[type].length) return false;
		self.callbacks[type].splice(index, 1);
		return true;
	};

	self.multiplexEvent = function(type, event){
		for(var i=0; i<self.callbacks[type].length; i++){
			self.callbacks[type][i](event);
		}
	};

	self.sendCommand = function(command){
		self.socket.emit('command', command);
	};

	self.disconnect = function(){
		self.socket.close();
	};

	self.init();
};

OXOcard.ArduinoCompiler = function(config){
	var self = this;

	config = config || {};

	self.compileURL = config.compileURL || 'https://build.oxocard.ch/compile/arduino';
	self.callback = config.callback || null;
	self.mainSource = '';

	self.started = false;
	self.finished = false;
	self.success = false;
	self.binary = null;
	self.output = null;

	self.init = function(){
		if(self.callback == null)
			self.callback = self.defaultCallback;
	};

	self.setMainFileContent = function(mainSource){
		self.mainSource = mainSource;
		// For now we only support "mainSource", so lets compile.
		if(!self.started)
			self.compile();
	};

	self.compile = function(){
		self.started = true;
		OXOcard.helper.httpPostRequest(self.mainSource, self.compileURL, self.compileCallback, self.compileFailedCallback);
	};

	self.compileCallback = function(data){
		console.log(data);
		self.finished = true;
		if('binary' in data && 'id' in data){
			self.binary = data.binary;
			self.output = data.message || '';
			self.success = true;
		}
		self.callback(self);
	};

	self.compileFailedCallback = function(request){
		self.success = false;
		if(request.status == 400){
			try{
				var response = JSON.parse(request.responseText);
				self.output = response.message || 'Error.';
			}catch(err){
				console.warn("We have a serious issue in the compilation Backend.");
			}
		}
		self.callback(self);
	};

	self.defaultCallback = function(result){
		console.log(result);
	};

	self.init();
};

OXOcard.AgentUploader = function(config){
	var self = this;

	config = config || {};

	self.socketCallbackId = -1;
	self.socket = config.socket || null;
	self.uploadURL = config.uploadURL || null;
	self.port = config.port || null;
	
	self.progressCallback = config.progressCallback || function(message){console.log(message);};
	self.uploadedCallback = config.uploadedCallback || function(){console.log('uploaded');};
	self.flashedCallback = config.flashedCallback || function(success){console.log('flashed: '+ success);};
	self.canceledCallback = config.canceledCallback || function(){console.log('Flashing canceled.');};

	self.FLASH_COMMAND={
		'board': 'arduino:avr:duo',
		'filename': 'main.hex',
		'commandline': '"{runtime.tools.avrdude.path}/bin/avrdude" "-C{runtime.tools.avrdude.path}/etc/avrdude.conf" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -V -D "-Uflash:w:{build.path}/{build.project_name}.hex:i"' // -V nor reading back, half-time flash
	};

	self.init = function(){
		if(self.socket == null)
			throw 'No socket provided! We can\'t upload!';
		if(self.uploadURL == null)
			throw 'No upload-URL provided! We can\'t upload!';
		if(self.port == null)
			throw 'No port provided! We can\'t upload!';
	};

	self.upload = function(binary){
		var request = JSON.parse(JSON.stringify(self.FLASH_COMMAND));
		request.hex = binary;
		request.port = self.port;
		OXOcard.helper.httpPostRequest(request, self.uploadURL, self.requestCallback);
	};

	self.requestCallback = function(data){
		self.socketCallbackId = self.socket.registerCallback('message', self.detectFlashingEnd);
		self.uploadedCallback();
	};

	self.detectFlashingEnd = function(message){
		if(typeof message !== 'object') return;
		if(!('ProgrammerStatus' in message)) return;

		if(message.ProgrammerStatus == 'Busy' && message.Msg != '')
			self.progressCallback(message.Msg);

		if(message.ProgrammerStatus == 'Done')
			self.finish('Flash' in message && message.Flash == 'Ok');

		if(message.ProgrammerStatus == 'Error' && message.Msg.indexOf('killed')){
			self.socket.unregisterCallback('message', self.socketCallbackId);
			self.canceledCallback();
		}
	};

	self.finish = function(success){
		self.socket.unregisterCallback('message', self.socketCallbackId);
		self.flashedCallback(success);
	};

	self.init();
};

OXOcard.ArdublocklyIntegration = function(){
	var self = this;

	self.deviceManager = null;
	self.isConnected = false;
	self.canUpload = false;
	self.showingCardDialog = false;
	self.showingAgentDialog = false;

	self.init = function(){
		self.deviceManager = new OXOcard.DeviceManager({
			'statusAgentConnectedCallback':function(){self.checkAgentState(false);},
			'statusAgentDisconnectedCallback':function(){self.checkAgentState(true);},
			'statusAgentNotFoundCallback':function(){self.checkAgentState(true);},
			'statusDeviceDisconnectedCallback':self.checkDeviceState,
			'statusDeviceConnectedCallback':self.checkDeviceState,
			'statusCompileFinishedCallback':function(){self.setUploadButtonText(Ardublockly.LOCALISED_TEXT.flashing)},
			'statusUploadFinishedCallback':function(){self.setUploadButtonText(Ardublockly.LOCALISED_TEXT.upload)},
			'statusFlashingFinishedCallback':self.flashingFinished,
			'statusCanceledCallback':function(device){self.checkDeviceState(); self.addIDEOutput(null, 'Canceled by user!'); self.flashingFinished(device, 'Abgebrochen!');},
			'statusFailedCompilationCallback':function(device, compilation){self.flashingFinished(device,'Fehlerhaft!')},
			'statusIDEOutputCallback':self.addIDEOutput,
			'statusSerialOutputCallback':function(device, message){self.addSerialOutput('serial_output',message);},
		});

		self.disableUpload();
	};

	self.checkDeviceState = function(device){
		if(Object.keys(self.deviceManager.devices).length > 0){
			self.enableUpload();
			if(self.showingCardDialog)
				self.hideCardDialog();
		}else{
			self.disableUpload();
			self.showCardDialog();
		}
	};

	self.checkAgentState = function(showPopup){
		if(showPopup){
			self.disableUpload();
			self.showAgentDialog();
		}else{
			self.hideAgentDialog();
			self.checkDeviceState();
		}
	};

	self.compileAndUpload = function(){
		self.disableUpload();
		var code = Blockly.Arduino.workspaceToCode(Ardublockly.workspace);
		self.deviceManager.compileAndUploadAllDevices(code);
		self.setUploadButtonText(Ardublockly.LOCALISED_TEXT.compiling);
		$('#loading_icon_upload').css('display', 'inline');
		$('#upload_icon_upload').css('display', 'none');
		$('#button_cancel').css('display', 'block');
		var outputElement = document.getElementById('serial_output');
		outputElement.innerHTML = '';
	};

	self.cancel = function(){
		self.deviceManager.cancelAllDevices();
	};

	self.flashingFinished = function(device, message){
		message = message || Ardublockly.LOCALISED_TEXT.upload_done;
		self.enableUpload();
		self.setUploadButtonText(message);
		$('#loading_icon_upload').css('display', 'none');
		$('#upload_icon_upload').css('display', 'inline');
		$('#button_cancel').css('display', 'none');
		setTimeout(self.enableUpload, 2000);
	};

	self.addIDEOutput = function(device, message){
		var outputElement = document.getElementById('content_ide_output');
		var outputWithNewlines = message.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(new RegExp(/\s\|\|\|\s/, 'g'), '<br />');
		outputElement.innerHTML += outputWithNewlines;
		outputElement.scrollTop = outputElement.scrollHeight;
	};

	self.addSerialOutput = function(device, message){
		var outputElement = document.getElementById('serial_output');
		outputElement.innerHTML += message;
		outputElement.innerHTML = outputElement.innerHTML.substr(outputElement.innerHTML.length-5000);
		outputElement.scrollTop = outputElement.scrollHeight;
	}

	self.disableUpload = function(){
		self.canUpload = false;
		$('#button_upload').addClass('disabled');
	};

	self.enableUpload = function(){
		self.setUploadButtonText(Ardublockly.LOCALISED_TEXT.upload);
		self.canUpload = true;
		$('#button_upload').removeClass('disabled');
	};

	self.setUploadButtonText = function(text){
		document.getElementById('button_upload_text').innerHTML = text;
	};

	self.showCardDialog = function(){
		if(self.showingCardDialog || self.showingAgentDialog) return;
		self.showingCardDialog = true;
		$('#not_connected_dialog').openModal({
			dismissible: true,
			opacity: .5,
			in_duration: 200,
			out_duration: 250
		});
	};

	self.hideCardDialog = function(){
		$('#not_connected_dialog').closeModal();
		self.showingCardDialog = false;
	};
	
	self.showAgentDialog = function(){
		if(self.showingCardDialog) self.hideCardDialog();
		if(self.showingAgentDialog) return;
		self.showingAgentDialog = true;
		$('#not_running_dialog').openModal({
			dismissible: true,
			opacity: .5,
			in_duration: 200,
			out_duration: 250
		});
	};

	self.hideAgentDialog = function(){
		$('#not_running_dialog').closeModal();
		self.showingAgentDialog = false;
	};

	self.init();
};

