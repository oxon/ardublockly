var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "English",
  title: "OXOcard Blockly",
  blocks: "Blocks",
  /* Menu */
  compiling: "Compiling",
  flashing: "Flashing",
  upload: "Program",
  upload_done: 'Programmed!',
  open: "Open",
  save: "Save",
  copy: "Copy",
  deleteAll: "Delete All",
  settings: "Settings",
  documentation: "Documentation",
  reportBug: "Report Bug",
  exercises: "Exercises",
  examples: "Examples",
  /* Settings */
  compilerLocation: "Compiler Location",
  compilerLocationDefault: "Compiler Location unknown",
  sketchFolder: "Sketch Folder",
  sketchFolderDefault: "Sketch Folder unknown",
  arduinoBoard: "Arduino Board",
  arduinoBoardDefault: "Arduino Board unknown",
  comPort: "COM Port",
  comPortDefault: "COM Port unknown",
  defaultIdeButton: "Default IDE Button",
  defaultIdeButtonDefault: "IDE options unknown",
  language: "Language",
  languageDefault: "Language unknown",
  sketchName: "Sketch Name",
  /* Arduino console output */
  arduinoOpMainTitle: "Details of compilation",
  arduinoOpWaiting: "Waiting for the IDE output...",
  arduinoOpUploadedTitle: "Successfully Uploaded Sketch",
  arduinoOpVerifiedTitle: "Successfully Verified Sketch",
  arduinoOpOpenedTitle: "Sketch opened in IDE",
  arduinoOpOpenedBody: "The sketch should be loaded in the Arduino IDE.",
  arduinoOpErrorTitle: "There has been an error",
  arduinoOpErrorIdContext_0: "No error.",
  arduinoOpErrorIdContext_1: "Build or Upload failed.",
  arduinoOpErrorIdContext_2: "Sketch not found.",
  arduinoOpErrorIdContext_3: "Invalid command line argument.",
  arduinoOpErrorIdContext_4: "Preference passed to 'get-pref' flag does not exist.",
  arduinoOpErrorIdContext_5: "Not Clear, but Arduino IDE sometimes errors with this.",
  arduinoOpErrorIdContext_50: "Unexpected error code from Arduino IDE",
  arduinoOpErrorIdContext_51: "Could not create sketch file",
  arduinoOpErrorIdContext_52: "Invalid path to internally created sketch file",
  arduinoOpErrorIdContext_53: "Unable to find Arduino IDE<br>" +
                              "The compiler directory has not been set correctly.<br>" +
                              "Please ensure the path is correct in the Settings.",
  arduinoOpErrorIdContext_54: "What should we do with the Sketch?<br>" +
                              "The launch IDE option has not been set.<br>" +
                              "Please select an IDE option in the Settings.",
  arduinoOpErrorIdContext_55: "Serial Port unavailable<br>" +
                              "The Serial Port is not accessible.<br>" +
                              "Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdContext_56: "Unknown Arduino Board<br>" +
                              "The Arduino Board has not been set.<br>" +
                              "Please select the appropriate Arduino Board from the settings.",
  arduinoOpErrorIdContext_52: "Unexpected server error.",
  arduinoOpErrorIdContext_64: "Unable to parse sent JSON.",
  arduinoOpErrorUnknown: "Unexpected error",
  /* Modals */
  noServerTitle: "OXOcard-App not running",
  noServerBody: "<p>Please start the OXOcard-App.<br>If you have not installed the app yep you can download the installer under the following link. </p><p><a href=\"http:\/\/www.oxocard.ch/Arduino/Downloads/OxocardAgent-Installer.dmg\" target=\"_blank\" rel=\"noopener\">OXOcard-App Installer Mac OSX</a></p> <p>Windows Installer (will follow soon)</p><p>After the installation restart the browser and plug in the OXOcard.<br>If it’s not working, try the following steps:</p> <ul><li>- Restart your computer</li><li>- Try to connect the OXOcard to another USB port</li><li>- Make sure that only one window with Blockly is open</li><li>- Close all programs, that are using the serial interface</li></ul>",
  noOxocardTitle: "OXOcard not connected",
  noOxocardBody: "No OXOcard detected. Please make sure the card is connected properly.",
  noServerNoLangBody: "If the Ardublockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "Additional Blocks",
  /* Alerts */
  loadNewBlocksTitle: "Load new blocks?",
  loadNewBlocksBody: "Loading a new XML file will replace the current blocks from the workspace.<br>" +
                     "Are you sure you want to proceed?",
  discardBlocksTitle: "Delete blocks?",
  discardBlocksBody: "There are %1 blocks on the workspace.<br>" +
                     "Are you sure you want to delete them?",
  invalidXmlTitle: "Invalid XML",
  invalidXmlBody: "The XML file was not successfully parsed into blocks. Please review the XML code and try again.",
  /* Tooltips */
  uploadingSketch: "Uploading Sketch into Arduino...",
  uploadSketch: "Upload Sketch to the Arduino",
  verifyingSketch: "Verifying Sketch...",
  verifySketch: "Verify the Sketch",
  openingSketch: "Opening Sketch in the Arduino IDE...",
  openSketch: "Open Sketch in IDE",
  notImplemented: "Function not yet implemented",
  /* Prompts */
  ok: "OK",
  okay: "Okay",
  cancel: "Cancel",
  return: "Return",
  /* Cards */
  howto: "How To",
  examples: "Examples",
  arduinoSourceCode: "Arduino Source Code",
  blocksXml: "Blocks XML",
  /* Toolbox Categories*/
  catLoops: "LOOPS",
  catMath: "MATH",
  catText: "TEXT",
  catInputOutput: "Input/Output",
  catAudio: "Audio",
  catMotors: "Motors",
  catComms: "Comms",

  catLogic: "LOGIC",
  catVariables: "VARIABLES ",
  catFunctions: "FUNCTIONS",
  catTime: "TIME",
  catOXOcard: "OXOCARD",
  catDisplay: "DISPLAY",
  catAccelerometer: "ACCELEROMETER",
  catBluetooth: "BLUETOOTH",
  catSpeaker: "SPEAKER",
  catShortcuts: "SHORTCUTS",
};
