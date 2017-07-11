
'use strict';

goog.provide('Blockly.Arduino.oxocard');

goog.require('Blockly.Arduino');


/* ---------- System ---------- */
Blockly.Arduino.oxocard_turn_off = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'turnOff();\n';
};

Blockly.Arduino.oxocard_reset_oxocard = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'resetOXOcard();\n';
};

Blockly.Arduino.oxocard_handle_autoturnoff_wp = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'handleAutoTurnOff();\n';
};

Blockly.Arduino.oxocard_handle_autoturnoff = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var timeout = Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'handleAutoTurnOff(' + timeout + ');\n';
};

Blockly.Arduino.oxocard_button_ispressed = function() {
  var dropdown_button = this.getFieldValue('BUTTON');
  var code = 'is' + dropdown_button + 'ButtonPressed()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_get_timer_seconds = function() {
  Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var code = 'getTimerSeconds()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_reset_timer = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'resetTimer);\n';
};

Blockly.Arduino.oxocard_print = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var log = Blockly.Arduino.valueToCode(this, 'LOG', Blockly.Arduino.ORDER_ATOMIC) || '';
	return 'print(' + log + ');\n';
};

Blockly.Arduino.oxocard_println = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var log = Blockly.Arduino.valueToCode(this, 'LOG', Blockly.Arduino.ORDER_ATOMIC) || '';
	return 'println(' + log + ');\n';
};


/* ---------- Display ---------- */
Blockly.Arduino.oxocard_clear_display = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'clearDisplay();\n';
};

Blockly.Arduino.oxocard_fill_display = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'fillDisplay(' + brightness + ');\n';
};

Blockly.Arduino.oxocard_turn_display_on = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'turnDisplayOn();\n';
};

Blockly.Arduino.oxocard_smile = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'drawImage( 0, 36, 36, 0, 66, 60, 0, 0);\n';
};

Blockly.Arduino.oxocard_wink = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'drawImage( 0, 44, 32, 0, 2, 60, 0, 0);\n';
};

Blockly.Arduino.oxocard_draw_image = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	var code = 'drawImage(';
	for(var i=0, l=8; i<l; i++){
		if(i!=0) code += '          ';
		code += '0b';
		for(var j=0, ll=8; j<l; j++){
			code += (this.getFieldValue(i + '' + j) == 'TRUE') ? '1' : '0';
		}
		 code += ',';
		if (i != l-1) code += '\n';
	}
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return code += ' ' + brightness + ');\n';
};

Blockly.Arduino.oxocard_draw_pixel = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	var posX = this.getFieldValue('X');
	var posY = this.getFieldValue('Y');
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return 'drawPixel(' + posX + ', ' + posY + ', ' + brightness + ');\n';
};

Blockly.Arduino.oxocard_draw_line = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	var fromX = this.getFieldValue('FROM_X');
	var fromY = this.getFieldValue('FROM_Y');
	var toX = this.getFieldValue('TO_X');
	var toY = this.getFieldValue('TO_Y');
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return 'drawLine(' + fromX + ', ' + fromY + ', ' + toX + ', ' + toY + ', ' + brightness + ');\n';
};

Blockly.Arduino.oxocard_draw_rectangle = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	var x = this.getFieldValue('X');
	var y = this.getFieldValue('Y');
	var w = this.getFieldValue('W');
	var h = this.getFieldValue('H');
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return 'drawRectangle(' + x + ', ' + y + ', ' + w + ', ' + h + ', ' + brightness + ');\n';
};

Blockly.Arduino.oxocard_draw_filled_rectangle = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	var x = this.getFieldValue('X');
	var y = this.getFieldValue('Y');
	var w = this.getFieldValue('W');
	var h = this.getFieldValue('H');
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return 'drawFilledRectangle(' + x + ', ' + y + ', ' + w + ', ' + h + ', ' + brightness + ');\n';
};

Blockly.Arduino.oxocard_draw_circle = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	var x = this.getFieldValue('X');
	var y = this.getFieldValue('Y');
	var r = this.getFieldValue('R');
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return 'drawCircle(' + x + ', ' + y + ', ' + r + ', ' + brightness + ');\n';
};

Blockly.Arduino.oxocard_draw_filled_circle = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	var x = this.getFieldValue('X');
	var y = this.getFieldValue('Y');
	var r = this.getFieldValue('R');
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return 'drawFilledCircle(' + x + ', ' + y + ', ' + r + ', ' + brightness + ');\n';
};


/* ---------- Accelerometer ---------- */
Blockly.Arduino.oxocard_get_acceleration = function() {
  Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var dropdown_button = this.getFieldValue('AXIS');
  var code = 'get' + dropdown_button + 'Acceleration()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_get_orientation = function() {
  Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var code = 'getOrientation()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_is_orientation = function() {
  Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var dropdown_button = this.getFieldValue('DIRECTION');
  var code = 'is' + 'Acceleration' + dropdown_button + '()' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* ---------- Bluetooth ---------- */
Blockly.Arduino.oxocard_setup_as_ibeacon = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var id = Blockly.Arduino.valueToCode(this, 'ID', Blockly.Arduino.ORDER_ATOMIC) || '';
	return 'setupAsIBeacon(' + id + ');\n';
};

Blockly.Arduino.oxocard_find_ibeacon = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var id = Blockly.Arduino.valueToCode(this, 'ID', Blockly.Arduino.ORDER_ATOMIC) || '';
	return 'findIBeacon(' + id + ');\n';
};


/* ---------- Speaker ---------- */
Blockly.Arduino.oxocard_tone = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
  var frequency = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC) || 0;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'tone(' + frequency + ',' + duration +');\n';
};

Blockly.Arduino.oxocard_no_tone = function() {
	Blockly.Arduino.includes_['oxocard_runner'] = '#include "OXOcardRunner.h"\n';
	return 'noTone();\n';
};
