/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_manualTimerPump");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_portableManualPump = extend(Pump, "bliq0pump-portable-manual-pump", TEMPLATE._std(0.0, 300.0));
  bliq0pump_portableManualPump.buildType = () => extend(Pump.PumpBuild, bliq0pump_portableManualPump, TEMPLATE._std_b(false, 1));
  exports.bliq0pump_portableManualPump = bliq0pump_portableManualPump;
