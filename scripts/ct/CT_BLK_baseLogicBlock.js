/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_messageBlock");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_directionalSwitch");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- log0aux ----------> */


  const log0aux_messageBlock = extendBlock(
    TEMPLATE, "log0aux-message-block",
  );


  const log0aux_directionalSwitch = extendBlock(
    TEMPLATE_A, "log0aux-directional-switch",
  );
