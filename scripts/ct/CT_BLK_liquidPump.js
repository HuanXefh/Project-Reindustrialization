/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_liquidPump");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_pistonLiquidPump = extend(Pump, "bliq0pump-piston-liquid-pump", TEMPLATE._std(0.01666667));
  bliq0pump_pistonLiquidPump.buildType = () => extend(Pump.PumpBuild, bliq0pump_pistonLiquidPump, TEMPLATE._std_b(false, 1));
  exports.bliq0pump_pistonLiquidPump = bliq0pump_pistonLiquidPump;
