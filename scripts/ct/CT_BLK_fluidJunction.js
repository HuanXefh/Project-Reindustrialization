/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_fluidJunction");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0aux ----------> */


  const bliq0aux_fluidJunction = extend(LiquidJunction, "bliq0aux-fluid-junction", TEMPLATE._std());
  bliq0aux_fluidJunction.buildType = () => extend(LiquidJunction.LiquidJunctionBuild, bliq0aux_fluidJunction, TEMPLATE._std_b());
  exports.bliq0aux_fluidJunction = bliq0aux_fluidJunction;
