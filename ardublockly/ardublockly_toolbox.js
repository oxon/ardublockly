/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="math_number"></block>' +
'    <block type="text"></block>' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output">' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>'+
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catAudio" name="Audio">' +
'    <block type="io_tone">' +
'      <field name="TONEPIN">0</field>' +
'      <value name="FREQUENCY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">220</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone"></block>' +
'  </category>' +

'  <sep></sep>' +

'  <category name="Oxocard">' +
'    <block type="oxocard_turn_off"></block>' +
'    <block type="oxocard_reset_oxocard"></block>' +
'    <block type="oxocard_handle_autoturnoff_wp"></block>' +
'    <block type="oxocard_handle_autoturnoff">' +
'      <value name="TIMEOUT">' +
'        <block type="math_number">' +
'          <field name="NUM">120</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="oxocard_button_ispressed"></block>' +
'    <block type="oxocard_get_timer_seconds"></block>' +
'    <block type="oxocard_reset_timer"></block>' +
'    <block type="oxocard_print"></block>' +
'    <block type="oxocard_println"></block>' +
'  </category>' +
'  <category name="Display">' +
'    <block type="oxocard_clear_display"></block>' +
'    <block type="oxocard_turn_display_on"></block>' +
'    <block type="oxocard_fill_display">' +
'      <value name="BRIGHTNESS">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="oxocard_draw_pixel">' +
'      <field name="X">0</field>' +
'      <field name="Y">0</field>' +
'      <value name="BRIGHTNESS">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'       </value>' +
'    </block>' +
'    <block type="oxocard_draw_image">' +
'      <value name="BRIGHTNESS">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'       </value>' +
'    </block>' +
'    <block type="oxocard_draw_line">' +
'      <field name="FROM_X">0</field>' +
'      <field name="FROM_Y">0</field>' +
'      <field name="TO_X">0</field>' +
'      <field name="TO_Y">0</field>' +
'      <value name="BRIGHTNESS">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <category name="Accelerometer">' +
'    <block type="oxocard_get_acceleration"></block>' +
'    <block type="oxocard_get_orientation"></block>' +
'    <block type="oxocard_is_orientation"></block>' +
'  </category>' +
'  <category name="Bluetooth">' +
'    <block type="oxocard_setup_as_ibeacon"></block>' +
'    <block type="oxocard_find_ibeacon"></block>' +
'  </category>' +
'  <category name="Shortcuts">' +
'    <block type="oxocard_smile"></block>' +
'    <block type="oxocard_wink"></block>' +
'  </category>' +
'</xml>';
