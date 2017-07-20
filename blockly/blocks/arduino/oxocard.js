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
  },
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
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
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
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
	init: createGenericOxocardInitFunc('Turn display on', 'Turn the whole display on', Blockly.Blocks.oxocard.COLOUR_METHOD)
};

Blockly.Blocks['oxocard_clear_display'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Clear display', 'Turn the whole display off', Blockly.Blocks.oxocard.COLOUR_METHOD)
};

Blockly.Blocks['oxocard_fill_display'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
	this.appendDummyInput()
        .appendField("Fill display");
    this.appendValueInput("BRIGHTNESS", 'Brightness')
        .appendField("Brightness")
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write value between 0 and 255');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  }
};

Blockly.Blocks['oxocard_draw_image'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField("Draw image");
		for(var i=0, l=8; i<l; i++){
			var input = this.appendDummyInput();
			for(var j=0, ll=8; j<ll; j++){
				input.appendField(new Blockly.FieldLed('FALSE'), i + '' + j);
			}
		}
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			.appendField("Brightness")
			.setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Turn on specific pixels');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_pixel'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField("Draw pixel");
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("Brightness")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Turn on specific pixels');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_line'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		  this.appendDummyInput()
			    .appendField("Draw line");
      this.appendValueInput('FROM_X')
          .appendField("From X:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput('FROM_Y')
          .appendField("Y:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput('TO_X')
          .appendField("To X:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput('TO_Y')
          .appendField("Y:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("Brightness")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Draw a line');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_rectangle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField("Draw rectangle");
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('W')
        .appendField("Width:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('H')
        .appendField("Height:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("Brightness")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Draw a rectangle');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_filled_rectangle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField("Draw filled rectangle");
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('W')
        .appendField("Width:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('H')
        .appendField("Height:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("Brightness")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Draw a filled rectangle');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_circle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField("Draw circle");
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('R')
        .appendField("Radius:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("Brightness")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Draw a circle');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_filled_circle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField("Draw filled circle");
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('R')
        .appendField("Radius:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("Brightness")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Draw a filled circle');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_triangle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField("Draw triangle");
    this.appendValueInput('X_ONE')
        .appendField("X1:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y_ONE')
        .appendField("Y1:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('X_TWO')
        .appendField("X2:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y_TWO')
        .appendField("Y2:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('X_THREE')
        .appendField("X3:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y_THREE')
        .appendField("Y3:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("Brightness")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Draw a triangle');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_filled_triangle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField("Draw filled triangle");
    this.appendValueInput('X_ONE')
        .appendField("X1:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y_ONE')
        .appendField("Y1:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('X_TWO')
        .appendField("X2:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y_TWO')
        .appendField("Y2:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('X_THREE')
        .appendField("X3:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y_THREE')
        .appendField("Y3:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("Brightness")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Draw a filled triangle');
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_char'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		var matrix_list = [["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"], ["5", "4"], ["6", "5"], ["7", "6"], ["8", "7"]];
      // this.appendDummyInput()
      //     .appendField("Draw char");
      //     .appendField(new Blockly.FieldTextInput('A'),'CHAR');
      this.appendValueInput('CHAR')
          .appendField("Draw char")
          .setCheck('Text', 'String')
          .setAlign(Blockly.ALIGN_LEFT);
      this.appendValueInput('X')
          .appendField("X:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput('Y')
          .appendField("Y:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput("BRIGHTNESS", 'Brightness')
          .appendField("Brightness")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      // this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Draw single character (A - Z)');
      this.setInputsInline(false);
      this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_digit'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		  this.appendValueInput("DIGIT", 'Digit')
          .appendField("Draw digit")
          .setCheck('Number');
      this.appendValueInput('X')
          .appendField("X:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput('Y')
          .appendField("Y:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput("BRIGHTNESS", 'Brightness')
          .appendField("Brightness")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      // this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Draw single digit (0 - 9)');
      this.setInputsInline(false);
      this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_number'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		var matrix_list = [["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"], ["5", "4"], ["6", "5"], ["7", "6"], ["8", "7"]];
      this.appendValueInput("NUM", 'Num')
          .appendField("Draw number")
          .setCheck('Number');
      this.appendValueInput("BRIGHTNESS", 'Brightness')
          .appendField("Brightness")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Draw a number (0 - 99)');
      this.setInputsInline(false);
      this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_smile'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Draw smile', 'A simple smile :)', Blockly.Blocks.oxocard.COLOUR_METHOD)
};


Blockly.Blocks['oxocard_wink'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('Draw wink', 'A simple wink ;)', Blockly.Blocks.oxocard.COLOUR_METHOD)
};


/* ---------- Accelerometer ---------- */
Blockly.Blocks['oxocard_get_acceleration'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField("Get acceleration")
        .appendField(new Blockly.FieldDropdown([["X", "X"], ["Y", "Y"], ["Z", "Z"]]), "AXIS")
    this.setOutput(true, 'Number');
    this.setTooltip('Return the selected accelerometer axis value');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['oxocard_get_orientation'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField("Get orientation")
    this.setOutput(true, 'Number');
    this.setTooltip('Return the orientation of the OXOcard');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['oxocard_is_orientation'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField("Is orientation")
        .appendField(new Blockly.FieldDropdown([["Up", "Up"], ["Down", "Down"], ["Horizontally", "Horizontally"], ["Vertically", "Vertically"]]), "DIRECTION")
    this.setOutput(true, 'Boolean');
    this.setTooltip('Return if the OXOcard is in the given orientation');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
  },
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
};


/* ---------- Bluetooth ---------- */
Blockly.Blocks['oxocard_setup_as_ibeacon'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField("Setup the OXOcard as iBeacon")
    this.appendValueInput("ID", 'Id')
        .appendField("With the ID")
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sets the OXOcard up as iBeacon with the given ID');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  }
};

Blockly.Blocks['oxocard_find_ibeacon'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField("Find iBeacon")
    this.appendValueInput("ID", 'Id')
        .appendField("With the ID")
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Serach for iBeacons with the given ID');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  }
};


/* ---------- Speaker ---------- */
Blockly.Blocks['oxocard_tone'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
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
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  }
};

Blockly.Blocks['oxocard_no_tone'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: createGenericOxocardInitFunc('No tone', 'Stops the tone', Blockly.Blocks.oxocard.COLOUR_METHOD)
};


/* ---------- Other ---------- */
Blockly.Blocks['oxocard_random'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField("Random 0 to ")
        .appendField(new Blockly.FieldTextInput('1', Blockly.FieldTextInput.numberValidator),'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip('Returns a random number between 0 an the given value');
    this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
