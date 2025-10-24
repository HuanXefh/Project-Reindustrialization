/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_fluidValve");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0aux ----------> */


  const bliq0aux_fluidValve = extend(LiquidJunction, "bliq0aux-fluid-valve", TEMPLATE._std());
  bliq0aux_fluidValve.buildType = () => extend(LiquidJunction.LiquidJunctionBuild, bliq0aux_fluidValve, TEMPLATE._std_b());
  exports.bliq0aux_fluidValve = bliq0aux_fluidValve;
