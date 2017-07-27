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
// //TODO Make transleteable
// Blockly.Blocks['oxocard_turn_off'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc("TURN off ------",
//                                      "JAJA",
//                                      Blockly.Blocks.oxocard.COLOUR_SYSTEM)
// };
Blockly.Blocks['oxocard_turn_off'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
	}
};

// //TODO Make transleteable
// Blockly.Blocks['oxocard_reset_oxocard'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc('Reset OXOcard', 'Reboots the card', Blockly.Blocks.oxocard.COLOUR_SYSTEM)
// };
Blockly.Blocks['oxocard_reset_oxocard'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_RESET_OXOCARD_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_RESET_OXOCARD_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
	}
};

// //TODO Make transleteable
// Blockly.Blocks['oxocard_handle_autoturnoff_wp'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc('Handle auto turnoff', 'Enter sleep mode after 2 Minutes', Blockly.Blocks.oxocard.COLOUR_SYSTEM)
// };
Blockly.Blocks['oxocard_handle_autoturnoff_wp'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUTO_TURNOFF_WP_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUTO_TURNOFF_WP_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
	}
};

Blockly.Blocks['oxocard_handle_autoturnoff'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUTO_TURNOFF_TITLE);
		this.appendValueInput("TIMEOUT", 'Timeout')
			.appendField(Blockly.Msg.OXOCARD_AUTO_TURNOFF_TIMEOUT_FIELD)
			.setCheck('Number');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUTO_TURNOFF_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
	}
};

Blockly.Blocks['oxocard_button_ispressed'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OXOCARD_BUTTON_PRESSED_TITLE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OXOCARD_BUTTON_PRESSED_LEFT_FIELD, "Left"],
                      [Blockly.Msg.OXOCARD_BUTTON_PRESSED_MIDDLE_FIELD, "Middle"],
                      [Blockly.Msg.OXOCARD_BUTTON_PRESSED_RIGHT_FIELD, "Right"]]), "BUTTON")
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.OXOCARD_BUTTON_PRESSED_TIP);
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
        .appendField(Blockly.Msg.OXOCARD_GET_TIMER_SECONDS_TITLE)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.OXOCARD_GET_TIMER_SECONDS_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

// //TODO Make transleteable
// Blockly.Blocks['oxocard_reset_timer'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc('Reset timer', 'Resets the timer', Blockly.Blocks.oxocard.COLOUR_SYSTEM)
// };
Blockly.Blocks['oxocard_reset_timer'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_RESET_TIMER_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_RESET_TIMER_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
	}
};

Blockly.Blocks['oxocard_print'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendValueInput("LOG", 'Log')
        .appendField(Blockly.Msg.OXOCARD_PRINT_TITLE)
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OXOCARD_PRINT_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
  }
};

Blockly.Blocks['oxocard_println'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendValueInput("LOG", 'Log')
        .appendField(Blockly.Msg.OXOCARD_PRINTLN_TITLE)
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OXOCARD_PRINTLN_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_SYSTEM);
  }
};



/* ---------- Display ---------- */
//TODO Make transleteable
// Blockly.Blocks['oxocard_turn_display_on'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc('Turn display on', 'Turn the whole display on', Blockly.Blocks.oxocard.COLOUR_METHOD)
// };
Blockly.Blocks['oxocard_turn_display_on'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_TURN_DISPLAY_ON_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_TURN_DISPLAY_ON_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

// //TODO Make transleteable
// Blockly.Blocks['oxocard_clear_display'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc('Clear display', 'Turn the whole display off', Blockly.Blocks.oxocard.COLOUR_METHOD)
// };
Blockly.Blocks['oxocard_clear_display'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_CLEAR_DISPLAY_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_CLEAR_DISPLAY_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_fill_display'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.OXOCARD_FILL_DISPLAY_TITLE);
    this.appendValueInput("BRIGHTNESS", 'Brightness')
        .appendField("B:")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OXOCARD_FILL_DISPLAY_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  }
};

Blockly.Blocks['oxocard_draw_image'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_DRAW_IMAGE_TITLE);
		for(var i=0, l=8; i<l; i++){
			var input = this.appendDummyInput();
			for(var j=0, ll=8; j<ll; j++){
				input.appendField(new Blockly.FieldLed('FALSE'), i + '' + j);
			}
		}
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			.appendField(Blockly.Msg.OXOCARD_DRAW_IMAGE_BRIGHTNESS_FIELD)
			.setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_IMAGE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_pixel'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField(Blockly.Msg.OXOCARD_DRAW_PIXEL_TITLE);
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("B:")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_PIXEL_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_line'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		  this.appendDummyInput()
			    .appendField(Blockly.Msg.OXOCARD_DRAW_LINE_TITLE);
      this.appendValueInput('FROM_X')
          .appendField("X1:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput('FROM_Y')
          .appendField("Y1:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput('TO_X')
          .appendField("X2:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput('TO_Y')
          .appendField("Y2:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("B:")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_LINE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_rectangle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField(Blockly.Msg.OXOCARD_DRAW_RECTANGLE_TITLE);
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('W')
        .appendField("W:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('H')
        .appendField("H:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("B:")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_RECTANGLE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_filled_rectangle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField(Blockly.Msg.OXOCARD_DRAW_FILLED_RECTANGLE_TITLE);
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('W')
        .appendField("W:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('H')
        .appendField("H:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("B:")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_FILLED_RECTANGLE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_circle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField(Blockly.Msg.OXOCARD_DRAW_CIRCLE_TITLE);
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('R')
        .appendField("R:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("B:")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_CIRCLE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_filled_circle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField(Blockly.Msg.OXOCARD_DRAW_FILLED_CIRCLE_TITLE);
    this.appendValueInput('X')
        .appendField("X:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField("Y:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('R')
        .appendField("R:")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("BRIGHTNESS", 'Brightness')
			  .appendField("B:")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_FILLED_CIRCLE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_triangle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField(Blockly.Msg.OXOCARD_DRAW_TRANGLE_TITLE);
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
			  .appendField("B:")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_TRANGLE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_filled_triangle'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			  .appendField(Blockly.Msg.OXOCARD_DRAW_FILLED_TRANGLE_TITLE);
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
			  .appendField("B:")
			  .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_FILLED_TRANGLE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_char'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		var matrix_list = [["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"], ["5", "4"], ["6", "5"], ["7", "6"], ["8", "7"]];
      this.appendValueInput('CHAR')
          .appendField(Blockly.Msg.OXOCARD_DRAW_CHAR_TITLE)
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
          .appendField("B:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.OXOCARD_DRAW_CHAR_TIP);
      this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_digit'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		  this.appendValueInput("DIGIT", 'Digit')
          .appendField(Blockly.Msg.OXOCARD_DRAW_DIGIT_TITLE)
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
          .appendField("B:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.OXOCARD_DRAW_DIGIT_TIP);
      this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

Blockly.Blocks['oxocard_draw_number'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		var matrix_list = [["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"], ["5", "4"], ["6", "5"], ["7", "6"], ["8", "7"]];
      this.appendValueInput("NUM", 'Num')
          .appendField(Blockly.Msg.OXOCARD_DRAW_NUMBER_TITLE)
          .setCheck('Number');
      this.appendValueInput("BRIGHTNESS", 'Brightness')
          .appendField("B:")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.OXOCARD_DRAW_NUMBER_TIP);
      this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

// //TODO Make transleteable
// Blockly.Blocks['oxocard_smile'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc('Draw smile', 'A simple smile :)', Blockly.Blocks.oxocard.COLOUR_METHOD)
// };
Blockly.Blocks['oxocard_smile'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_SMILE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_SMILE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};

// //TODO Make transleteable
// Blockly.Blocks['oxocard_wink'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc('Draw wink', 'A simple wink ;)', Blockly.Blocks.oxocard.COLOUR_METHOD)
// };
Blockly.Blocks['oxocard_wink'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_WINK_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_WINK_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};


/* ---------- Accelerometer ---------- */
Blockly.Blocks['oxocard_get_acceleration'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OXOCARD_GET_ACCELERATION_TITLE)
        .appendField(new Blockly.FieldDropdown([["X", "X"], ["Y", "Y"], ["Z", "Z"]]), "AXIS")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.OXOCARD_GET_ACCELERATION_TIP);
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
        .appendField(Blockly.Msg.OXOCARD_GET_ORIENTATION_TITLE)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.OXOCARD_GET_ORIENTATION_TIP);
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
        .appendField(Blockly.Msg.OXOCARD_IS_ORIENTATION_TITLE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OXOCARD_IS_ORIENTATION_UP_FIELD, "Up"],
                      [Blockly.Msg.OXOCARD_IS_ORIENTATION_DOWN_FIELD, "Down"],
                      [Blockly.Msg.OXOCARD_IS_ORIENTATION_HORIZONTALLY_FIELD, "Horizontally"],
                      [Blockly.Msg.OXOCARD_IS_ORIENTATION_VERTICALLY_FIELD, "Vertically"]]), "DIRECTION")
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.OXOCARD_IS_ORIENTATION_TIP);
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
        .appendField(Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_TITLE)
    this.appendValueInput("ID", 'Id')
        .appendField(Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_ID_FIELD)
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  }
};

Blockly.Blocks['oxocard_find_ibeacon'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendValueInput("ID", 'Id')
        .appendField(Blockly.Msg.OXOCARD_FIND_IBEACON_TITLE)
        .setCheck(['String', 'Number', 'Array', 'Text']);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.OXOCARD_FIND_IBEACON_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  },
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
};


/* ---------- Speaker ---------- */
Blockly.Blocks['oxocard_tone'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OXOCARD_TONE_TITLE)
    this.appendValueInput("FREQUENCY", 'Frequency')
        .appendField(Blockly.Msg.OXOCARD_TONE_FREQUENCY_FIELD)
        .setCheck('Number');
    this.appendValueInput("DURATION", 'Duration')
        .appendField(Blockly.Msg.OXOCARD_TONE_DURATION_FIELD)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OXOCARD_TONE_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  }
};

Blockly.Blocks['oxocard_tone_no_duration'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendValueInput("FREQUENCY", 'Frequency')
        .appendField(Blockly.Msg.OXOCARD_TONE_NO_DURATION_TITLE)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OXOCARD_TONE_NO_DURATION_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
  }
};

// //TODO Make transleteable
// Blockly.Blocks['oxocard_no_tone'] = {
// 	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
// 	init: createGenericOxocardInitFunc('No tone', 'Stops the tone', Blockly.Blocks.oxocard.COLOUR_METHOD)
// };
Blockly.Blocks['oxocard_no_tone'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_NO_TONE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_NO_TONE_TIP);
		this.setColour(Blockly.Blocks.oxocard.COLOUR_METHOD);
	}
};


/* ---------- Other ---------- */
Blockly.Blocks['oxocard_random'] = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OXOCARD_RANDOM_TITLE)
        .appendField(new Blockly.FieldTextInput('1', Blockly.FieldTextInput.numberValidator),'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.OXOCARD_RANDOM_TIP);
    this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
