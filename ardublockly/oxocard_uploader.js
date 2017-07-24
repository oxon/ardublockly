'use strict';

function OxocardUploader(){
	var self = this;
	this.COMPILE_URL = 'http://compile.oxocard.ch/compile/arduino';
	this.UPLOAD_URL = 'https://localhost:8992/upload';
	this.FLASH_COMMAND={
		"board": "arduino:avr:duo",
		"port": "/dev/ttyUSB0",
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

	self.compileAndUploadCurrentWorkspace = function(){
		var sourceCode = Blockly.Arduino.workspaceToCode(Ardublockly.workspace);
		this.compileAndUpload(sourceCode);
	}

	self.compileAndUpload = function(source){
		self.compile(source, function(response){
			if('hex' in response){
				self.upload(response['hex'], function(innerResponse){
					console.log(innerResponse);
				});
			}
		});
	}

	this.callbackCompile = function(){};
	this.callbackUpload = function(){};

	this.compile = function(inoContent, callback){
		callback = callback || this.callbackCompile;
		this.httpPostRequest(inoContent, this.COMPILE_URL, callback);
	};

	this.upload = function(hex, callback){
		callback = callback || this.callbackUpload;
		// hacky way to ensure we have a copy of the object
		var request = JSON.parse(JSON.stringify(this.FLASH_COMMAND));
		request['hex'] = hex;
		this.httpPostRequest(request, this.UPLOAD_URL, callback)
	};

	this.httpPostRequest = function(data, url, callback){
		var http = new XMLHttpRequest();
		http.open("POST", url, true);
		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status == 200) {
				if(http.responseText){
					var parsedResponse = http.responseText;
					try{
						parsedResponse= JSON.parse(http.responseText);
					} catch(e) {
						console.log("Failed to parse json: " + e);
					}
					callback(parsedResponse);
				}else{
					console.log('Something wrong with response in body of: ' + url);
				}
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

		http.setRequestHeader('Content-type',contentType);
		http.send(data);
	}
}

var oxocardUploader = oxocardUploader || new OxocardUploader();
