
'use strict';

goog.provide('Blockly.Arduino.oxocard');

goog.require('Blockly.Arduino');



Blockly.Arduino.oxocard_button_ispressed = function() {
  var dropdown_button = this.getFieldValue('BUTTON');
  var code = 'is' + dropdown_button + 'ButtonPressed()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_turn_off = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	return 'turnOff();\n';
};

Blockly.Arduino.oxocard_reset_oxocard = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	return 'resetOXOcard();\n';
};

Blockly.Arduino.oxocard_fill_display = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'fillDisplay(' + brightness + ');\n';
};

Blockly.Arduino.oxocard_turn_display_on = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	return 'turnDisplayOn();\n';
};

Blockly.Arduino.oxocard_clear_display = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	return 'clearDisplay();\n';
};

Blockly.Arduino.oxocard_smile = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	return 'drawImage( 0, 36, 36, 0, 66, 60, 0, 0);\n';
};

Blockly.Arduino.oxocard_wink = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	return 'drawImage( 0, 44, 32, 0, 2, 60, 0, 0);\n';
};

Blockly.Arduino.oxocard_draw_image = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	var code = 'drawImage(';
	for(var i=0, l=8; i<l; i++){
		var val = 0;
		for(var j=0, ll=8; j<l; j++){
			if(this.getFieldValue(i + '' + j) == 'TRUE')
				val += Math.pow(2,ll-j-1);
		}
		code += val;
		if(i != l-1)
			code += ', ';
	}
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return code += ', ' + brightness + ');\n';
};

Blockly.Arduino.oxocard_draw_pixel = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	var posX = this.getFieldValue('X');
	var posY = this.getFieldValue('Y');
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return 'drawPixel(' + posX + ', ' + posY + ', ' + brightness + ');\n';
};

Blockly.Arduino.oxocard_draw_line = function() {
	Blockly.Arduino.definitions_['define_servo'] = '#include "OXOcardRunner.h"\n';
	var fromX = this.getFieldValue('FROM_X');
	var fromY = this.getFieldValue('FROM_Y');
	var toX = this.getFieldValue('TO_X');
	var toY = this.getFieldValue('TO_Y');
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	return 'drawLine(' + fromX + ', ' + fromY + ', ' + toX + ', ' + toY + ', ' + brightness + ');\n';
};
