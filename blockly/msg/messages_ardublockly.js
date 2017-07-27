/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview  Ardublockly specific English strings.
 *
 * After modifying this file, either run "build.py" from the blockly directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq_ardublockly.json, and they show up in the translation
 * console.
 * Note the strings have to be surrounded by single quotation marks: ''
 */

/**
 * Ardublockly Types
 */
/// Arduino Types - Character C type char
Blockly.Msg.ARD_TYPE_CHAR = 'Character';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_TEXT = 'Text';
/// Arduino Types - Boolean type
Blockly.Msg.ARD_TYPE_BOOL = 'Boolean';
/// Arduino Types - Short number C type char
Blockly.Msg.ARD_TYPE_SHORT = 'Short Number';
/// Arduino Types - Number C type integer
Blockly.Msg.ARD_TYPE_NUMBER = 'Number';
/// Arduino Types - Large number C type long integer
Blockly.Msg.ARD_TYPE_LONG = 'Large Number';
/// Arduino Types - Decimal number C type floating point
Blockly.Msg.ARD_TYPE_DECIMAL = 'Decimal';
/// Arduino Types - Array
Blockly.Msg.ARD_TYPE_ARRAY = 'Array';
/// Arduino Types - Null C type void
Blockly.Msg.ARD_TYPE_NULL = 'Null';
/// Arduino Types - Undefined type
Blockly.Msg.ARD_TYPE_UNDEF = 'Undefined';
/// Arduino Types - Place holder value, indicates block with type not connected
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = 'ChildBlockMissing';

/// Arduino Blocks
Blockly.Msg.ARD_HIGH = 'HIGH';
Blockly.Msg.ARD_LOW = 'LOW';
Blockly.Msg.ARD_ANALOGREAD = 'read analog pin#';
Blockly.Msg.ARD_ANALOGREAD_TIP = 'Return value between 0 and 1024';
Blockly.Msg.ARD_ANALOGWRITE = 'set analog pin#';
Blockly.Msg.ARD_ANALOGWRITE_TIP = 'Write analog value between 0 and 255 to a specific PWM Port';
Blockly.Msg.ARD_HIGHLOW_TIP = 'Set a pin state logic High or Low.';
Blockly.Msg.ARD_DIGITALREAD = 'read digital pin#';
Blockly.Msg.ARD_DIGITALREAD_TIP = 'Read digital value on a pin: HIGH or LOW';
Blockly.Msg.ARD_DIGITALWRITE = 'set digitial pin#';
Blockly.Msg.ARD_WRITE_TO = 'to';
Blockly.Msg.ARD_DIGITALWRITE_TIP = 'Write digital value HIGH or LOW to a specific Port';
Blockly.Msg.ARD_BUILTIN_LED = 'set built-in LED';
Blockly.Msg.ARD_BUILTIN_LED_TIP = 'Light on or off for the built-in LED of the Arduino';
Blockly.Msg.ARD_DEFINE = 'Define';
Blockly.Msg.ARD_TONE_PIN = 'Tone PIN#';
Blockly.Msg.ARD_TONE_FREQ = 'frequency';
Blockly.Msg.ARD_TONE_PIN_TIP = 'Generate audio tones on a pin';
Blockly.Msg.ARD_NOTONE_PIN = 'No tone PIN#';
Blockly.Msg.ARD_NOTONE_PIN_TIP = 'Stop generating a tone on a pin';
Blockly.Msg.ARD_MAP = 'Map';
Blockly.Msg.ARD_MAP_VAL = 'value to [0-';
Blockly.Msg.ARD_MAP_TIP = 'Re-maps a number from [0-1024] to another.';
Blockly.Msg.ARD_FUN_RUN_SETUP = 'Arduino run first:';
Blockly.Msg.ARD_FUN_RUN_LOOP = 'Arduino loop forever:';
Blockly.Msg.ARD_FUN_RUN_TIP = 'Defines the Arduino setup() and loop() functions.';
Blockly.Msg.ARD_PIN_WARN1 = 'Pin %1 is needed for %2 as pin %3. Already used as %4.';
Blockly.Msg.ARD_SERIAL_SETUP = 'Setup';
Blockly.Msg.ARD_SERIAL_SPEED = ':  speed to';
Blockly.Msg.ARD_SERIAL_BPS = 'bps';
Blockly.Msg.ARD_SERIAL_SETUP_TIP = 'Selects the speed for a specific Serial peripheral';
Blockly.Msg.ARD_SERIAL_PRINT = 'print';
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = 'add new line';
Blockly.Msg.ARD_SERIAL_PRINT_TIP = 'Prints data to the console/serial port as human-readable ASCII text.';
Blockly.Msg.ARD_SERIAL_PRINT_WARN = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SERVO_WRITE = 'set SERVO from Pin';
Blockly.Msg.ARD_SERVO_WRITE_TO = 'to';
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = 'Degrees (0~180)';
Blockly.Msg.ARD_SERVO_WRITE_TIP = 'Set a Servo to an specified angle';
Blockly.Msg.ARD_SERVO_READ = 'read SERVO from PIN#';
Blockly.Msg.ARD_SERVO_READ_TIP = 'Read a Servo angle';
Blockly.Msg.ARD_SPI_SETUP = 'Setup';
Blockly.Msg.ARD_SPI_SETUP_CONF = 'configuration:';
Blockly.Msg.ARD_SPI_SETUP_SHIFT = 'data shift';
Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = 'MSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = 'LSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_DIVIDE = 'clock divide';
Blockly.Msg.ARD_SPI_SETUP_MODE = 'SPI mode (idle - edge)';
Blockly.Msg.ARD_SPI_SETUP_MODE0 = '0 (Low - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE1 = '1 (Low - Rising)';
Blockly.Msg.ARD_SPI_SETUP_MODE2 = '2 (High - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE3 = '3 (High - Rising)';
Blockly.Msg.ARD_SPI_SETUP_TIP = 'Configures the SPI peripheral.';
Blockly.Msg.ARD_SPI_TRANS_NONE = 'none';
Blockly.Msg.ARD_SPI_TRANS_VAL = 'transfer';
Blockly.Msg.ARD_SPI_TRANS_SLAVE = 'to slave pin';
Blockly.Msg.ARD_SPI_TRANS_TIP = 'Send a SPI message to an specified slave device.';
Blockly.Msg.ARD_SPI_TRANS_WARN1 = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SPI_TRANS_WARN2 = 'Old pin value %1 is no longer available.';
Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = 'Send a SPI message to an specified slave device and get data back.';
Blockly.Msg.ARD_STEPPER_SETUP = 'Setup stepper motor';
Blockly.Msg.ARD_STEPPER_MOTOR = 'stepper motor:';
Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = 'MyStepper';
Blockly.Msg.ARD_STEPPER_NUMBER_OF_PINS = 'Number of pins';
Blockly.Msg.ARD_STEPPER_TWO_PINS = '2';
Blockly.Msg.ARD_STEPPER_FOUR_PINS = '4';
Blockly.Msg.ARD_STEPPER_PIN1 = 'pin1#';
Blockly.Msg.ARD_STEPPER_PIN2 = 'pin2#';
Blockly.Msg.ARD_STEPPER_PIN3 = 'pin3#';
Blockly.Msg.ARD_STEPPER_PIN4 = 'pin4#';
Blockly.Msg.ARD_STEPPER_REVOLVS = 'how many steps per revolution';
Blockly.Msg.ARD_STEPPER_SPEED = 'set speed (rpm) to';
Blockly.Msg.ARD_STEPPER_SETUP_TIP = 'Configures a stepper motor pinout and other settings.';
Blockly.Msg.ARD_STEPPER_STEP = 'move stepper';
Blockly.Msg.ARD_STEPPER_STEPS = 'steps';
Blockly.Msg.ARD_STEPPER_STEP_TIP = 'Turns the stepper motor a specific number of steps.';
Blockly.Msg.ARD_STEPPER_COMPONENT = 'stepper';
Blockly.Msg.ARD_COMPONENT_WARN1 = 'A %1 configuration block with the same %2 name must be added to use this block!';
Blockly.Msg.ARD_TIME_DELAY = 'wait';
Blockly.Msg.ARD_TIME_MS = 'milliseconds';
Blockly.Msg.ARD_TIME_DELAY_TIP = 'Wait specific time in milliseconds';
Blockly.Msg.ARD_TIME_DELAY_MICROS = 'microseconds';
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = 'Wait specific time in microseconds';
Blockly.Msg.ARD_TIME_MILLIS = 'current elapsed Time (milliseconds)';
Blockly.Msg.ARD_TIME_MILLIS_TIP = 'Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_MICROS = 'current elapsed Time (microseconds)';
Blockly.Msg.ARD_TIME_MICROS_TIP = 'Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_INF = 'wait forever (end program)';
Blockly.Msg.ARD_TIME_INF_TIP = 'Wait indefinitely, stopping the program.';
Blockly.Msg.ARD_VAR_AS = 'as';
Blockly.Msg.ARD_VAR_AS_TIP = 'Sets a value to a specific type';
/// IO blocks - pulseIn - Block for function pulseIn(), it measure a pulse duration in a given pin.
Blockly.Msg.ARD_PULSE_READ = 'measure %1 pulse on pin #%2';
/// IO blocks - pulseIn - Block similar to ARD_PULSE_READ, but it adds a time-out in microseconds.
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = 'measure %1 pulse on pin #%2 (timeout after %3 μs)';
/// IO blocks - pulseIn - Tooltip for pulseIn() block.
Blockly.Msg.ARD_PULSE_TIP = 'Measures the duration of a pulse on the selected pin.';
/// IO blocks - pulseIn - Tooltip for pulseIn() block when it uses the optional argument for time-out.
Blockly.Msg.ARD_PULSETIMEOUT_TIP = 'Measures the duration of a pulse on the selected pin, if it is within the time-out in microseconds.';
Blockly.Msg.ARD_SETTONE = 'Set tone on pin #';
Blockly.Msg.ARD_TONEFREQ = 'at frequency';
Blockly.Msg.ARD_TONE_TIP = 'Sets tone on pin to specified frequency within range 31 - 65535';
Blockly.Msg.ARD_TONE_WARNING = 'Frequency must be in range 31 - 65535';
Blockly.Msg.ARD_NOTONE = 'Turn off tone on pin #';
Blockly.Msg.ARD_NOTONE_TIP = 'Turns the tone off on the selected pin';

/// OXOcard Blocks
// System
Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TITLE = 'Turn OXOcard off';
Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TIP = 'Turns off the card';
Blockly.Msg.OXOCARD_RESET_OXOCARD_TITLE = 'Reset OXOcard';
Blockly.Msg.OXOCARD_RESET_OXOCARD_TIP = 'Reboots the card';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_WP_TITLE = 'Handle auto turnoff';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_WP_TIP = 'Enter sleep mode after 2 Minutes';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_TITLE = 'Handle auto turnoff';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_TIMEOUT_FIELD = 'with timeout';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_TIP = 'Enter sleep mode after given timeout';
Blockly.Msg.OXOCARD_BUTTON_PRESSED_TITLE = 'Is button pressed?';
Blockly.Msg.OXOCARD_BUTTON_PRESSED_LEFT_FIELD = 'Left';
Blockly.Msg.OXOCARD_BUTTON_PRESSED_MIDDLE_FIELD = 'Middle';
Blockly.Msg.OXOCARD_BUTTON_PRESSED_RIGHT_FIELD = 'Right';
Blockly.Msg.OXOCARD_BUTTON_PRESSED_TIP = 'Yes(?) if button pressed';
Blockly.Msg.OXOCARD_GET_TIMER_SECONDS_TITLE = 'Get timer seconds';
Blockly.Msg.OXOCARD_GET_TIMER_SECONDS_TIP = 'Return the seconds value uf the timer';
Blockly.Msg.OXOCARD_RESET_TIMER_TITLE = 'Reset timer';
Blockly.Msg.OXOCARD_RESET_TIMER_TIP = 'Resets the timer';
Blockly.Msg.OXOCARD_PRINT_TITLE = 'Print';
Blockly.Msg.OXOCARD_PRINT_TIP = 'Prints the given number or string to the console';
Blockly.Msg.OXOCARD_PRINTLN_TITLE = 'Println';
Blockly.Msg.OXOCARD_PRINTLN_TIP = 'Prints the given number or string to the console (with new line)';
// Display
Blockly.Msg.OXOCARD_TURN_DISPLAY_ON_TITLE = 'Turn display on';
Blockly.Msg.OXOCARD_TURN_DISPLAY_ON_TIP = 'Turn the whole display on';
Blockly.Msg.OXOCARD_CLEAR_DISPLAY_TITLE = 'Clear display';
Blockly.Msg.OXOCARD_CLEAR_DISPLAY_TIP = 'Turn the whole display off';
Blockly.Msg.OXOCARD_FILL_DISPLAY_TITLE = 'Fill display';
Blockly.Msg.OXOCARD_FILL_DISPLAY_TIP = 'Write value between 0 and 255';
Blockly.Msg.OXOCARD_DRAW_IMAGE_TITLE = 'Draw image';
Blockly.Msg.OXOCARD_DRAW_IMAGE_BRIGHTNESS_FIELD = 'Brightness:';
Blockly.Msg.OXOCARD_DRAW_IMAGE_TIP = 'Turn on specific pixels';
Blockly.Msg.OXOCARD_DRAW_PIXEL_TITLE = 'Draw pixel';
Blockly.Msg.OXOCARD_DRAW_PIXEL_TIP = 'Turn on specific pixels';
Blockly.Msg.OXOCARD_DRAW_LINE_TITLE = 'Draw line';
Blockly.Msg.OXOCARD_DRAW_LINE_TIP = 'Draw a line';
Blockly.Msg.OXOCARD_DRAW_RECTANGLE_TITLE = 'Draw rectangle';
Blockly.Msg.OXOCARD_DRAW_RECTANGLE_TIP = 'Draw a rectangle';
Blockly.Msg.OXOCARD_DRAW_FILLED_RECTANGLE_TITLE = 'Draw filled rectangle';
Blockly.Msg.OXOCARD_DRAW_FILLED_RECTANGLE_TIP = 'Draw a filled rectangle';
Blockly.Msg.OXOCARD_DRAW_CIRCLE_TITLE = 'Draw circle';
Blockly.Msg.OXOCARD_DRAW_CIRCLE_TIP = 'Draw a circle';
Blockly.Msg.OXOCARD_DRAW_FILLED_CIRCLE_TITLE = 'Draw filled circle';
Blockly.Msg.OXOCARD_DRAW_FILLED_CIRCLE_TIP = 'Draw a filled circle';
Blockly.Msg.OXOCARD_DRAW_TRANGLE_TITLE = 'Draw triangle';
Blockly.Msg.OXOCARD_DRAW_TRANGLE_TIP = 'Draw a triangle';
Blockly.Msg.OXOCARD_DRAW_FILLED_TRANGLE_TITLE = 'Draw filled triangle';
Blockly.Msg.OXOCARD_DRAW_FILLED_TRANGLE_TIP = 'Draw a filled triangle';
Blockly.Msg.OXOCARD_DRAW_CHAR_TITLE = 'Draw char';
Blockly.Msg.OXOCARD_DRAW_CHAR_TIP = 'Draw single character (A - Z)';
Blockly.Msg.OXOCARD_DRAW_DIGIT_TITLE = 'Draw digit';
Blockly.Msg.OXOCARD_DRAW_DIGIT_TIP = 'Draw single digit (0 - 9)';
Blockly.Msg.OXOCARD_DRAW_NUMBER_TITLE = 'Draw number';
Blockly.Msg.OXOCARD_DRAW_NUMBER_TIP = 'Draw a number (0 - 99)';

Blockly.Msg.OXOCARD_SMILE_TITLE = 'Draw smile';
Blockly.Msg.OXOCARD_SMILE_TIP = 'A simple smile :)';
Blockly.Msg.OXOCARD_WINK_TITLE = 'Draw wink';
Blockly.Msg.OXOCARD_WINK_TIP = 'A simple wink ;)';
// Accelerometer
Blockly.Msg.OXOCARD_GET_ACCELERATION_TITLE = 'Get acceleration';
Blockly.Msg.OXOCARD_GET_ACCELERATION_TIP = 'Return the selected accelerometer axis value';
Blockly.Msg.OXOCARD_GET_ORIENTATION_TITLE = 'Get orientation';
Blockly.Msg.OXOCARD_GET_ORIENTATION_TIP = 'Return the orientation of the OXOcard';
Blockly.Msg.OXOCARD_IS_ORIENTATION_TITLE = 'Is orientation';
Blockly.Msg.OXOCARD_IS_ORIENTATION_UP_FIELD = 'Up';
Blockly.Msg.OXOCARD_IS_ORIENTATION_DOWN_FIELD = 'Down';
Blockly.Msg.OXOCARD_IS_ORIENTATION_HORIZONTALLY_FIELD = 'Horizontally';
Blockly.Msg.OXOCARD_IS_ORIENTATION_VERTICALLY_FIELD = 'Vertically';
Blockly.Msg.OXOCARD_IS_ORIENTATION_TIP = 'Return if the OXOcard is in the given orientation';
// Bluetooth
Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_TITLE = 'Setup the OXOcard as iBeacon';
Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_ID_FIELD = 'With the ID';
Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_TIP = 'Sets the OXOcard up as iBeacon with the given ID';
Blockly.Msg.OXOCARD_FIND_IBEACON_TITLE = 'Find iBeacon with the ID';
Blockly.Msg.OXOCARD_FIND_IBEACON_TIP = 'Serach for iBeacons with the given ID';
// Speaker
Blockly.Msg.OXOCARD_TONE_TITLE = 'Play tone';
Blockly.Msg.OXOCARD_TONE_FREQUENCY_FIELD = 'with frequency';
Blockly.Msg.OXOCARD_TONE_DURATION_FIELD = 'for the duration';
Blockly.Msg.OXOCARD_TONE_TIP = 'Plays a tone for the givern time';
Blockly.Msg.OXOCARD_TONE_NO_DURATION_TITLE = 'Play tone';
Blockly.Msg.OXOCARD_TONE_NO_DURATION_TIP = 'Plays a tone';
Blockly.Msg.OXOCARD_NO_TONE_TITLE = 'No tone';
Blockly.Msg.OXOCARD_NO_TONE_TIP = 'Stops the tone';
// Other
Blockly.Msg.OXOCARD_RANDOM_TITLE = 'Random 0 to ';
Blockly.Msg.OXOCARD_RANDOM_TIP = 'Returns a random number between 0 an the given value';

/**
 * Ardublockly instances
 */
/// Instances - Menu item to indicate that it will create a new instance
Blockly.Msg.NEW_INSTANCE = 'New instance...';
/// Instances - Menu item to rename an instance name
Blockly.Msg.RENAME_INSTANCE = 'Rename instance...';
/// Instances - Menu item to create a new instance name and apply it to that block
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
/// Instances - Confirmation message that a number of instances will be renamed to a new name
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';
