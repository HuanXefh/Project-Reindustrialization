/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidValve");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0aux ----------> */


  const bliq0aux_fluidValve = extendBlock(
    TEMPLATE, "bliq0aux-fluid-valve",
  );
  exports.bliq0aux_fluidValve = bliq0aux_fluidValve;
