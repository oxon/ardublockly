var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "Deutsch",
  title: "OXOcard Blockly",
  blocks: "Blocks",
  /* Menu */
  compiling: "Kompilieren",
  flashing: "Übertragen",
  upload: "Programmieren",
  open: "Öffnen",
  save: "Speichern",
  copy: "Kopieren",
  deleteAll: "Alles löschen",
  settings: "Einstellungen",
  documentation: "Dokumentation",
  reportBug: "Fehler melden",
  examples: "Beispiele",
  /* Settings */
  compilerLocation: "d Compiler Location",
  compilerLocationDefault: "d Compiler Location unknown",
  sketchFolder: "d Sketch Folder",
  sketchFolderDefault: "d Sketch Folder unknown",
  arduinoBoard: "d Arduino Board",
  arduinoBoardDefault: "d Arduino Board unknown",
  comPort: "d COM Port",
  comPortDefault: "d COM Port unknown",
  defaultIdeButton: "d Default IDE Button",
  defaultIdeButtonDefault: "d IDE options unknown",
  language: "d Language",
  languageDefault: "d Language unknown",
  sketchName: "d Sketch Name",
  /* Arduino console output */
  arduinoOpMainTitle: "Details zur Kompilierung",
  arduinoOpWaiting: "d Waiting for the IDE output...",
  arduinoOpUploadedTitle: "d Successfully Uploaded Sketch",
  arduinoOpVerifiedTitle: "d Successfully Verified Sketch",
  arduinoOpOpenedTitle: "d Sketch opened in IDE",
  arduinoOpOpenedBody: "d The sketch should be loaded in the Arduino IDE.",
  arduinoOpErrorTitle: "d There has been an error",
  arduinoOpErrorIdContext_0: "d No error.",
  arduinoOpErrorIdContext_1: "d Build or Upload failed.",
  arduinoOpErrorIdContext_2: "d Sketch not found.",
  arduinoOpErrorIdContext_3: "d Invalid command line argument.",
  arduinoOpErrorIdContext_4: "d Preference passed to 'get-pref' flag does not exist.",
  arduinoOpErrorIdContext_5: "d Not Clear, but Arduino IDE sometimes errors with this.",
  arduinoOpErrorIdContext_50: "d Unexpected error code from Arduino IDE",
  arduinoOpErrorIdContext_51: "d Could not create sketch file",
  arduinoOpErrorIdContext_52: "d Invalid path to internally created sketch file",
  arduinoOpErrorIdContext_53: "d Unable to find Arduino IDE<br>" +
                              "d The compiler directory has not been set correctly.<br>" +
                              "d Please ensure the path is correct in the Settings.",
  arduinoOpErrorIdContext_54: "d What should we do with the Sketch?<br>" +
                              "d The launch IDE option has not been set.<br>" +
                              "d Please select an IDE option in the Settings.",
  arduinoOpErrorIdContext_55: "d Serial Port unavailable<br>" +
                              "d The Serial Port is not accessible.<br>" +
                              "d Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdContext_56: "d Unknown Arduino Board<br>" +
                              "d The Arduino Board has not been set.<br>" +
                              "d Please select the appropriate Arduino Board from the settings.",
  arduinoOpErrorIdContext_52: "d Unexpected server error.",
  arduinoOpErrorIdContext_64: "d Unable to parse sent JSON.",
  arduinoOpErrorUnknown: "d Unexpected error",
  /* Modals */
  noServerTitle: "OXOcard-App läuft nicht",
  noServerBody: "<p>Damit du die Karte aus dem Browser direkt programmieren kannst, musst du die OXOcard-App starten. Hast du sie noch nicht installiert, so kannst du die Installationsdatei unter folgendem Link herunterladen:</p><ul><li><a href=\"http://oxocard.ch/download/OxocardAgent.dmg\" target=\"_blank\" rel=\"noopener\">OXOcard-App Installationsdatei für MacOS</a></li><li><a href=\"http://oxocard.ch/download/OxocardAgent.zip\" target=\"_blank\" rel=\"noopener\">OXOcard-App Installationsdatei für Windows</a></li></ul><p>Starte danach den Browser neu und stecke die OXOcard an einen freien USB-Port.<br>Falls es nicht funktioniert, hilft häufig folgendes:</p><ul><li>- Starte den Computer neu</li><li>- Versuche, die OXOcard an einem anderen USB-Anschluss einzustecken</li><li>- Stell sicher, dass nur ein Browserfenster mit Blockly offen ist</li><li>- Beende alle Programme, die automatisch die serielle Schnittstelle nutzen, wie z.B. MakerWare</li></ul>",
  noOxocardTitle: "OXOcard nicht verbunden",
  noOxocardBody: "Es wurde keine OXOcard erkannt. Bitte überprüfe, ob die OXOcard richtig angeschlossen ist.",
  noServerNoLangBody: "d If the Ardublockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "d Additional Blocks",
  /* Alerts */
  loadNewBlocksTitle: "Neue Blöcke laden?",
  loadNewBlocksBody: "Das Laden eines neuen XML Files ersetzt die aktuellen Blöcke im Arbeitsbereich.<br>" +
                     "Bist du sicher, dass du fortfahren willst?",
  discardBlocksTitle: "Blöcke löschen?",
  discardBlocksBody: "Es sind %1 Blöcke im Arbeitsbereich.<br>" +
                     "Bist du sicher, dass du sie löschen willst?",
  invalidXmlTitle: "Ungülltiges XML",
  invalidXmlBody: "Das XML File wurde nicht erfolgreich in Blöcke umgewandelt. Bitte überprüfe den XML code nochmals.",
  /* Tooltips */
  uploadingSketch: "d Uploading Sketch into Arduino...",
  uploadSketch: "d Upload Sketch to the Arduino",
  verifyingSketch: "d Verifying Sketch...",
  verifySketch: "d Verify the Sketch",
  openingSketch: "d Opening Sketch in the Arduino IDE...",
  openSketch: "d Open Sketch in IDE",
  notImplemented: "d Function not yet implemented",
  /* Prompts */
  ok: "OK",
  okay: "Okay",
  cancel: "Abbrechen",
  return: "Zurück",
  /* Cards */
  howto: "Anleitung",
  examples: "Beispiele",
  arduinoSourceCode: "Arduino Source Code",
  blocksXml: "Block XML",
  /* Toolbox Categories*/
  catLoops: "LOOPS",
  catMath: "MATH",
  catText: "TEXT",
  catInputOutput: "Input/Output",
  catAudio: "Audio",
  catMotors: "Motors",
  catComms: "Comms",

  catLogic: "LOGIK",
  catVariables: "VARIABLEN ",
  catFunctions: "FUNKTIONEN",
  catTime: "ZEIT",
  catOXOcard: "OXOCARD",
  catDisplay: "DISPLAY",
  catAccelerometer: "BESCHLEUNIGUNGSSENSOR",
  catBluetooth: "BLUETOOTH",
  catSpeaker: "LAUTSPRECHER",
  catShortcuts: "VORLAGEN",
};
