'use strict';

var OxocardUploader = OxocardUploader || {};

OxocardUploader.COMPILE_URL='http://localhost:1337/compile';
OxocardUploader.UPLOAD_URL='https://localhost:8992/upload';
OxocardUploader.FLASH_COMMAND={
	"board": "arduino:avr:uno",
	"port": "/dev/ttyUSB0",
	"filename": "sketch_jul11a.hex",
	"commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -V -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\"",
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

OxocardUploader.init = function() {
	
};

OxocardUploader.compile = function(inoContent){
	var http = new XMLHttpRequest();
	http.open("POST", OxocardUploader.COMPILE_URL, true);

	http.setRequestHeader("Content-type", "text/plain");

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var response = JSON.parse(http.responseText);
			console.log(response);

			OxocardUploader.upload(response['hex']);
		}
	}

	http.send(inoContent);
}

OxocardUploader.upload = function(hex){

	var http = new XMLHttpRequest();
	http.open("POST", OxocardUploader.UPLOAD_URL, true);

	http.setRequestHeader("Content-type","application/json");

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			console.log("upload request finished.");
			var response = JSON.parse(http.responseText);
			console.log(response);
		}
	}

	var request = JSON.parse(JSON.stringify(OxocardUploader.FLASH_COMMAND));
	request['hex'] = hex;
	http.send(JSON.stringify(request));
}
