'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.oxocard');

goog.require('Blockly.Blocks');


function createGenericOxocardInitFunc(name, tooltip){
	return function() {
		this.setColour(10);
		this.appendDummyInput()
			.appendField(name);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(tooltip);
	};
}


/* ---------- System ---------- */
Blockly.Blocks['oxocard_turn_off'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Turn off', 'Turns off the card.')
};

Blockly.Blocks['oxocard_reset_oxocard'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Reset OXOcard', 'Reboots the card.')
};

Blockly.Blocks['oxocard_handle_autoturnoff'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
	this.appendDummyInput()
        .appendField("Handle auto turnoff");
    this.appendValueInput("TIMEOUT", 'Timeout')
        .appendField("with timeout")
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Enter sleep mode after given timeout');
  }
};

Blockly.Blocks['oxocard_button_ispressed'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField("Button is pressed?")
        .appendField(new Blockly.FieldDropdown([["Left", "Left"], ["Middle", "Middle"], ["Right", "Right"]]), "BUTTON")
    this.setOutput(true, 'Boolean');
    this.setTooltip('Yes(?) if button pressed');
  }
};

Blockly.Blocks['oxocard_get_timer_seconds'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField("Get timer seconds")
    this.setOutput(true, 'Number');
    this.setTooltip('Return the seconds value uf the timer');
  }
};

Blockly.Blocks['oxocard_reset_timer'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Reset timer', 'Resets the timer')
};

Blockly.Blocks['oxocard_print'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
	// this.appendDummyInput()
  //       .appendField("Print");
    this.appendValueInput("LOG", 'Log')
        .appendField("Print")
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints the given number or string to the console');
  }
};



/* ---------- Display ---------- */
Blockly.Blocks['oxocard_turn_display_on'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('turnDisplayOn', 'Turn the whole display on')
};

Blockly.Blocks['oxocard_clear_display'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('clearDisplay', 'Turn the whole display off')
};

Blockly.Blocks['oxocard_fill_display'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(230);
	this.appendDummyInput()
        .appendField("Fill display");
    this.appendValueInput("BRIGHTNESS", 'Brightness')
        .appendField("with brightness")
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write value between 0 and 255');
  }
};

Blockly.Blocks['oxocard_draw_image'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.setColour(15);
		this.appendDummyInput()
			.appendField("Draw image");
		for(var i=0, l=8; i<l; i++){
			var input = this.appendDummyInput();
			for(var j=0, ll=8; j<ll; j++){
				input.appendField(new Blockly.FieldLed('FALSE'), i + '' + j);
			}
		}
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			.appendField("with brightness")
			.setCheck('Number');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Turn on specific pixels');
	}
};

Blockly.Blocks['oxocard_draw_pixel'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.setColour(15);
		this.appendDummyInput()
			.appendField("Draw pixel on X:")
			.appendField(new Blockly.FieldDropdown([["1", 0], ["2", 1], ["3", 2], ["4", 3], ["5", 4], ["6", 5], ["7", 6], ["8", 7]]), "X")
			.appendField(" Y:")
			.appendField(new Blockly.FieldDropdown([["1", 0], ["2", 1], ["3", 2], ["4", 3], ["5", 4], ["6", 5], ["7", 6], ["8", 7]]), "Y");
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			.appendField("with brightness")
			.setCheck('Number');

		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Turn on specific pixels');
	}
};

Blockly.Blocks['oxocard_draw_line'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		var matrix_list = [["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"], ["5", "4"], ["6", "5"], ["7", "6"], ["8", "7"]];
		this.setColour(15);
		this.appendDummyInput()
			.appendField("Draw line")
		this.appendDummyInput()
			.appendField("from X:")
			.appendField(new Blockly.FieldDropdown(matrix_list), "FROM_X")
			.appendField(" Y:")
			.appendField(new Blockly.FieldDropdown(matrix_list), "FROM_Y");
		this.appendDummyInput()
			.appendField("to X:")
			.appendField(new Blockly.FieldDropdown(matrix_list), "TO_X")
			.appendField(" Y:")
			.appendField(new Blockly.FieldDropdown(matrix_list), "TO_Y");
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			.appendField("with brightness")
			.setCheck('Number');

		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Draw a line');
	}
};

Blockly.Blocks['oxocard_smile'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Draw smile', 'A simple smile :)')
};


Blockly.Blocks['oxocard_wink'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Draw wink', 'A simple wink ;)')
};


/* ---------- Accelerometer ---------- */
Blockly.Blocks['oxocard_get_acceleration'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField("Get acceleration")
        .appendField(new Blockly.FieldDropdown([["X", "X"], ["Y", "Y"], ["Z", "Z"]]), "AXIS")
    this.setOutput(true, 'Number');
    this.setTooltip('Return the selected accelerometer axis value');
  }
};

Blockly.Blocks['oxocard_get_orientation'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField("Get orientation")
    this.setOutput(true, 'Number');
    this.setTooltip('Return the orientation of the OXOcard');
  }
};

Blockly.Blocks['oxocard_is_orientation'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField("Is orientation")
        .appendField(new Blockly.FieldDropdown([["Up", "Up"], ["Down", "Down"], ["Horizontally", "Horizontally"], ["Vertically", "Vertically"]]), "DIRECTION")
    this.setOutput(true, 'Boolean');
    this.setTooltip('Return if the OXOcard is in the given orientation');
  }
};
