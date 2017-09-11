
var OXOcard = OXOcard || {};

OXOcard.SimulationManager = function(config){
	var self = this;
	config = config || {};
	self.containerId = config['containerId'] || null;
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
			throw "No element ID provided!";
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw "No valid element ID provided!"
		self.initStructure();

		self.display = new OXOcard.SimulationDisplay({'containerId':self.displayId, 'width':(self.height*.26), 'height':self.height*.26});
		self.status = new OXOcard.SimulationStatus({'containerId':self.statusId, 'size':self.height*0.035});
		self.buttonRow = new OXOcard.SimulationButtonRow({'containerId':self.buttonRowId, 'size':self.height*0.07});
		self.resetButton = new OXOcard.SimulationButton({'containerId':self.resetButtonId, 'height':self.height*0.07,'width':self.height*0.07});
	}
	
	self.initStructure = function(){
		var html = '<div class="oxocard_simulation_wrapper" style="';
		html += 'width:' + self.width +'px; height:' + self.height + 'px;">';
		html += '<div class="oxocard_simulation_status_wrapper" id="' + self.statusId + '"></div>';
		html += '<div class="oxocard_simulation_display_wrapper" id="' + self.displayId + '"></div>';
		html += '<div class="oxocard_simulation_button_wrapper" id="' + self.buttonRowId + '"></div>';
		html += '<div class="oxocard_simulation_button_wrapper" style="margin:50% 0 0 30%" id="' + self.resetButtonId + '"></div>';
		html += '</div>';
		self.containerElement.insertAdjacentHTML('afterbegin',html);
	}
	
	self.updateUI = function(){
		self.status.updateUI();
		self.display.updateUI();
		self.buttonRow.updateUI();
		self.resetButton.updateUI();
	}
	
	self.init();
}

OXOcard.SimulationStatus = function(config){
	var self = this;

	config = config || {};
	self.containerId = config['containerId'] || null;
	self.containerElement = null;
	self.displayId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_status');
	self.size = config['size'] || 25;

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
			throw "No element ID provided!";
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw "No valid element ID provided!"

		self.initStructure();
		
		self.powerLed = new OXOcard.SimulationLed({'containerId':self.powerLedId, 'height':self.size, 'width':self.size});
		self.chargingLed = new OXOcard.SimulationLed({'containerId':self.chargingLedId, 'height':self.size, 'width':self.size, color:'#7AB41D'});
		self.serialLed = new OXOcard.SimulationLed({'containerId':self.serialLedId, 'height':self.size, 'width':self.size, color:'#7AB41D'});
		self.bluetoothLed = new OXOcard.SimulationLed({'containerId':self.bluetoothLedId, 'height':self.size, 'width':self.size, color:'#00f'});

		self.powerLed.setValue(255);
		self.chargingLed.setValue(255);
	}

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
	}

	self.updateUI = function(){
		self.powerLed.updateUI();
		self.chargingLed.updateUI();
		self.serialLed.updateUI();
		self.bluetoothLed.updateUI();
	}

	self.init();
}

OXOcard.SimulationDisplay = function(config){
	var self = this;

	config = config || {};
	self.containerId = config['containerId'] || null;
	self.containerElement = null;
	self.displayId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_display');
	self.ledRows = config['ledRows'] || 8;
	self.ledColumns = config['ledColumns'] || 8;
	self.width = config['width'] || 160;
	self.height = config['height'] || 160;
	self.ledIds = new Array();
	self.leds = null;

	self.init = function(){
		if(self.containerId == null)
			throw "No element ID provided!";
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw "No valid element ID provided!"

		self.initStructure();
		self.leds = new Array();
		for(i=0; i<self.ledRows*self.ledColumns; i++){
			self.leds.push(new OXOcard.SimulationLed({'containerId':self.ledIds[i], 'height':(self.height/self.ledRows), 'width':(self.width/self.ledColumns)}));
		}

	}

	self.initStructure = function(){
		var html = '<table id="' + self.displayId + '" style="margin:0 auto; border-collapse:seperate; border-spacing:' + (self.width/self.ledColumns)/20 + 'px;"><tbody>';
		for(var y=0; y<self.ledRows; y++){
			html += '<tr>';
			for(var x=0; x<self.ledColumns; x++){
				var id = OXOcard.helper.findFreeHTMLId('oxocard_simulation_display_led');
				self.ledIds.push(id);
				html += '<td id="' + id + '" style="background:#fff;"></td>'
			}
			html += '</tr>';
		}
		html += '</tbody></table>';
		self.containerElement.insertAdjacentHTML('beforeend', html);
	}

	self.updateUI = function(){
		for(var i=0, l=self.leds.length; i<l; i++){
			self.leds[i].updateUI();
		}
	}

	self.init();
}

OXOcard.SimulationLed = function(config){
	var self = this;

	config = config || {};

	self.containerId = config['containerId'] || null;
	self.containerElement = null;

	self.color = config['color'] || '#e42e87';
	self.value = 0;

	self.ledId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_led');
	self.ledElement = null;
	self.height = config['height'] || 20;
	self.width = config['width'] || 20;

	self.init = function(){
		if(self.containerId == null)
			throw "No element ID provided!";
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw "No valid element ID provided!"
		self.initStructure();
	}

	self.initStructure = function(){
		var html = '<div id="' + self.ledId + '" />';
		self.containerElement.insertAdjacentHTML('beforeend', html);
		self.ledElement = document.getElementById(self.ledId);
	}

	self.setValue = function(value){
		self.value = value;
	}

	self.updateUI = function(){
		self.ledElement.style.height = self.height + 'px';
		self.ledElement.style.width = self.width + 'px';
		self.ledElement.style.backgroundColor = self.color;
		self.ledElement.style.opacity = self.value/255;
		
	}

	self.init();
}

OXOcard.SimulationButtonRow = function(config){
	var self = this;

	config = config || {};
	self.containerId = config['containerId'] || null;
	self.containerElement = null;
	self.buttonRowId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row');
	self.size = config['size'] || 50;

	self.leftButtonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row_left_button');
	self.ledButton = null;

	self.middleButtonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row_middle_button');
	self.middleButton = null;

	self.rightButtonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button_row_right_button');
	self.rightButton = null;

	self.init = function(){
		if(self.containerId == null)
			throw "No element ID provided!";
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw "No valid element ID provided!"

		self.initStructure();
		
		self.leftButton = new OXOcard.SimulationButton({'containerId':self.leftButtonId, 'height':self.size, 'width':self.size});
		self.middleButton = new OXOcard.SimulationButton({'containerId':self.middleButtonId, 'height':self.size, 'width':self.size});
		self.rightButton = new OXOcard.SimulationButton({'containerId':self.rightButtonId, 'height':self.size, 'width':self.size});

	}

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
	}

	self.updateUI = function(){
		self.leftButton.updateUI();
		self.middleButton.updateUI();
		self.rightButton.updateUI();
	}

	self.init();
}

OXOcard.SimulationButton = function(config){
	var self = this;

	config = config || {};

	self.containerId = config['containerId'] || null;
	self.containerElement = null;


	self.buttonId = OXOcard.helper.findFreeHTMLId('oxocard_simulation_button');
	self.buttonElement = null;
	self.height = config['height'] || 50;
	self.width = config['width'] || 50;

	self.init = function(){
		if(self.containerId == null)
			throw "No element ID provided!";
		self.containerElement = document.getElementById(self.containerId);
		if(self.containerElement == null)
			throw "No valid element ID provided!"
		self.initStructure();
	}

	self.initStructure = function(){
		var radiusSize = (self.height > self.width) ? self.width : self.height;
		var html = '<div style="border:2px solid #969696; cursor:pointer;border-radius:' + radiusSize + 'px" id="' + self.buttonId + '" />';
		self.containerElement.insertAdjacentHTML('beforeend', html);
		self.buttonElement = document.getElementById(self.buttonId);
	}

	self.updateUI = function(){
		self.buttonElement.style.height = self.height + 'px';
		self.buttonElement.style.width = self.width + 'px';
	}

	self.init();
}

OXOcard.Helper = function(){
	var self = this;

	self.usedIds = new Array();

	self.findFreeHTMLId = function(prefix){
		prefix = prefix || 'id';
		for(var i=0; i<10000; i++){
			if(document.getElementById(prefix + '_' + i) == null && self.usedIds.indexOf(prefix + '_' + i) == -1){
				self.usedIds.push(prefix + '_' + i);
				return prefix + '_' + i;
			}
		}
		return false;
	}

	self.httpPostRequest = function(data, url, callback){
		OxocardAgent.httpRequest(url, callback, data)
	}

	self.httpRequest = function(url, callback, data){
		var http = new XMLHttpRequest();
		if(data)
			http.open("POST", url, true);
		else
			http.open("GET", url, true)
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
}

OXOcard.helper = new OXOcard.Helper();

OXOcard.DisplayHelper = function(simulation){
	var self = this;

	self.simulation = simulation;

	self.init = function(){

	}

	self.drawImage = function(values){
		for(var y=0, l=values.length; y<l; y++){
			for(var x=0, ll=values[y].length; x<ll; x++){
				self.getPixel(x, y).setValue(self.getValue(values[y][x])*255);
			}
		}
		self.simulation.updateUI();
	}

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
	}

	self.drawPixel = function(x, y, value){
		var pixel = self.getPixel(x, y);
		pixel.setValue(value);
		pixel.updateUI();
	}

	self.getPixel = function(x, y){
		var translatedX = x;
		var translatedY = y;
		var index = translatedY*self.simulation.display.ledRows + translatedX;
		return self.simulation.display.leds[index];
	}

	self.getValue = function(value){
		if(typeof value === 'undefined' || value > 255){
			return 255;
		}
		if(value < 0)
			return 0;
		return value;
	}

	self.init();
}

OXOcard.AnimationPlayer = function(simulation){
	var self = this;

	self.simulation = simulation;
	self.displayHelper = null;
	self.animation = null;
	self.currentFrame = null;

	self.init = function(){
		self.displayHelper = new OXOcard.DisplayHelper(self.simulation);
	}

	self.playAnimation = function(animation){
		self.animation = animation;
		self.playFrame();
	}

	self.playFrame = function(){
		self.currentFrame = self.animation.getNextFrame()
		if(self.currentFrame == null){
			self.stopAnimation();
			return;
		}
		self.displayHelper.drawImage(self.currentFrame.values);
		setTimeout(self.playOffFrame, self.currentFrame.onTime);
	}

	self.playOffFrame = function(){
		if(self.currentFrame == null){
			console.log("Empty Frame. NOT GOOD!");
			return;
		}
		setTimeout(self.playFrame, self.currentFrame.offTime);
	}

	self.stopAnimation = function(){
		
	}

	self.init();
}

OXOcard.Animation = function(){
	var self = this;

	self.frames = new Array();
	self.animationIndex = -1;
	self.loop = true;

	self.init = function(){
		
	}

	self.registerFrame = function(frame){
		self.frames.push(frame);
	}

	self.getNextFrame = function(){
		self.animationIndex++;
		if(self.frames.length <= self.animationIndex){
			if(self.loop)
				self.animationIndex = 0;
			else
				return null;
		}
		return self.frames[self.animationIndex];
	}

	self.init();
}

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
	}

	self.drawPixel = function(x,y, value){
		self.values[y][x] = value;
	}

	self.generateArray = function(){
		var array = new Array();
		for(var y=0; y<self.height; y++){
			array.push(new Array())
			for(var x=0; x<self.width; x++){
				array[y].push(0);
			}
		}
		return array;
	}
	self.init();
}

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
			throw "Animation needs a containerId, size and URL!"
			

		var config = {
			'containerId': self.containerId,
			'height': self.size
		};

		self.simulation = new OXOcard.SimulationManager(config);
		self.player = new OXOcard.AnimationPlayer(self.simulation);
		self.getAnimation(self.player.playAnimation)
	}

	self.processAnimation = function(callback){
		OXOcard.helper.httpRequest(url, function(data){
			if('f' in data && 't' in data){
				self.animation = new OXOcard.Animation();

				for(var i=0, l=data['f'].length; i<l; i++){
					self.processFrame(data['f'][i], data['t'][i]);
				}
				callback();
			}
		});
	}

	self.processFrame = function(origValues, times){
		var values = new Array();
		for(var y=0; y<8; y++){
			var line = new Array();
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
		frame.onTime = times['on'];
		frame.offTime = times['off'];
		self.animation.registerFrame(frame);
	}

	self.getAnimation = function(callback){
		if(self.isProcessed){
			callback(self.animation);
			return;
		}
		self.processAnimation(function(){
			self.isProcessed = true;
			callback(self.animation);
		});
	}

	self.init();
}
