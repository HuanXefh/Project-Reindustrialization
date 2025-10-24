/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_depthPump");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_pistonDepthPump = extend(AttributeCrafter, "bliq0pump-piston-depth-pump", TEMPLATE._std("liquid", 0.03333333, 0.5));
  bliq0pump_pistonDepthPump.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, bliq0pump_pistonDepthPump, TEMPLATE._std_b(false, 1, null));
  exports.bliq0pump_pistonDepthPump = bliq0pump_pistonDepthPump;
