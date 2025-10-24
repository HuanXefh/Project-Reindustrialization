/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_fluidPipeBridge");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0brd ----------> */


  const bliq0brd_bronzeFluidPipeBridge = extend(LiquidBridge, "bliq0brd-bronze-fluid-pipe-bridge", TEMPLATE._std("both", 1));
  bliq0brd_bronzeFluidPipeBridge.buildType = () => extend(LiquidBridge.LiquidBridgeBuild, bliq0brd_bronzeFluidPipeBridge, TEMPLATE._std_b());
  exports.bliq0brd_bronzeFluidPipeBridge = bliq0brd_bronzeFluidPipeBridge;
