'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.oxocard');

goog.require('Blockly.Blocks');

Blockly.Blocks.oxocard.COLOUR_METHOD = '#24A5A7';
Blockly.Blocks.oxocard.COLOUR_SYSTEM = '#168183';
Blockly.Blocks.oxocard.COLOUR_VARIABLE = '#74B41D';

function createGenericOxocardInitFunc(name, tooltip, color){
	color = color || Blockly.Blocks.oxocard.COLOUR_METHOD;
	return function() {
		this.setColour(color);
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
	init: createGenericOxocardInitFunc('Turn OXOcard off', 'Turns off the card', Blockly.Blocks.oxocard.COLOUR_SYSTEM)
};

Blockly.Blocks['oxocard_reset_oxocard'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Reset OXOcard', 'Reboots the card', Blockly.Blocks.oxocard.COLOUR_SYSTEM)
};

Blockly.Blocks['oxocard_handle_autoturnoff_wp'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Handle auto turnoff', 'Enter sleep mode after 2 Minutes', Blockly.Blocks.oxocard.COLOUR_SYSTEM)
};

Blockly.Blocks['oxocard_handle_autoturnoff'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField("Handle auto turnoff");
		this.appendValueInput("TIMEOUT", 'Timeout')
			.appendField("with timeout")
			.setCheck('Number');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Enter sleep mode after given timeout');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
	}
};

Blockly.Blocks['oxocard_button_ispressed'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField("Is button pressed?")
        .appendField(new Blockly.FieldDropdown([["Left", "Left"], ["Middle", "Middle"], ["Right", "Right"]]), "BUTTON")
    this.setOutput(true, 'Boolean');
    this.setTooltip('Yes(?) if button pressed');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
  }
};

Blockly.Blocks['oxocard_get_timer_seconds'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField("Get timer seconds")
    this.setOutput(true, 'Number');
    this.setTooltip('Return the seconds value uf the timer');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
  }
};

Blockly.Blocks['oxocard_reset_timer'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Reset timer', 'Resets the timer', Blockly.Blocks.oxocard.COLOUR_SYSTEM)
};

Blockly.Blocks['oxocard_print'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendValueInput("LOG", 'Log')
        .appendField("Print")
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints the given number or string to the console');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
  }
};

Blockly.Blocks['oxocard_println'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendValueInput("LOG", 'Log')
        .appendField("Println")
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints the given number or string to the console (with new line)');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
  }
};



/* ---------- Display ---------- */
Blockly.Blocks['oxocard_turn_display_on'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Turn display on', 'Turn the whole display on')
};

Blockly.Blocks['oxocard_clear_display'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Clear display', 'Turn the whole display off')
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


/* ---------- Bluetooth ---------- */
Blockly.Blocks['oxocard_setup_as_ibeacon'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField("Setup the OXOcard as iBeacon")
    this.appendValueInput("ID", 'Id')
        .appendField("With the ID")
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sets the OXOcard up as iBeacon with the given ID');
  }
};

Blockly.Blocks['oxocard_find_ibeacon'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField("Find iBeacon")
    this.appendValueInput("ID", 'Id')
        .appendField("With the ID")
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Serach for iBeacons with the given ID');
  }
};


/* ---------- Speaker ---------- */
Blockly.Blocks['oxocard_tone'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField("Play tone")
    this.appendValueInput("FREQUENCY", 'Frequency')
        .appendField("with frequency")
        .setCheck('Number');
    this.appendValueInput("DURATION", 'Duration')
        .appendField("for the duration")
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Plays a tone for the givern time');
  }
};

Blockly.Blocks['oxocard_no_tone'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('No tone', 'Stops the tone')
};
