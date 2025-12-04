/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_directionalSwitch");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- log0aux ----------> */


  const log0aux_directionalSwitch = extendBlock(
    TEMPLATE, "log0aux-directional-switch",
  );
  exports.log0aux_directionalSwitch = log0aux_directionalSwitch;
