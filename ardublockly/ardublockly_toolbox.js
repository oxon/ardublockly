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
'  <category name="LOGIC">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="controls_repeat_ext">' +
'      <value name="Times">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'    <block type="procedures_defnoreturn"></block>' +
'    <block type="procedures_callnoreturn"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category   name="VARIABLES">' +
'    <block type="math_number"></block>' +
'    <block type="text"></block>' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'  </category>' +
'  <sep></sep>' +

'  <category name="TIME">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="oxocard_reset_timer"></block>' +
'    <block type="oxocard_get_timer_seconds"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category name="OXOCARD">' +
'    <block type="arduino_functions"></block>' +
'    <block type="oxocard_print"></block>' +
'    <block type="oxocard_println"></block>' +
'    <block type="oxocard_handle_autoturnoff_wp"></block>' +
'    <block type="oxocard_handle_autoturnoff">' +
'      <value name="TIMEOUT">' +
'        <block type="math_number">' +
'          <field name="NUM">120</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="oxocard_turn_off"></block>' +
'    <block type="oxocard_reset_oxocard"></block>' +

'    <block type="oxocard_button_ispressed"></block>' +
'  </category>' +
'  <category name="DISPLAY">' +
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
'  <category name="ACCELEROMETER">' +
'    <block type="oxocard_get_acceleration"></block>' +
'    <block type="oxocard_get_orientation"></block>' +
'    <block type="oxocard_is_orientation"></block>' +
'  </category>' +
'  <category name="BLUETOOTH">' +
'    <block type="oxocard_setup_as_ibeacon"></block>' +
'    <block type="oxocard_find_ibeacon"></block>' +
'  </category>' +
'  <category name="SPEAKER">' +
'    <block type="oxocard_tone"></block>' +
'    <block type="oxocard_no_tone"></block>' +
'  </category>' +
'  <category name="SHORTCUTS">' +
'    <block type="oxocard_smile"></block>' +
'    <block type="oxocard_wink"></block>' +
'  </category>' +
'</xml>';
