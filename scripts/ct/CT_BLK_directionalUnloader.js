/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_directionalUnloader");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_primitiveDirectionalUnloader = extendBlock(
    TEMPLATE, "dis0aux-primitive-directional-unloader",
  );
  exports.dis0aux_primitiveDirectionalUnloader = dis0aux_primitiveDirectionalUnloader;
