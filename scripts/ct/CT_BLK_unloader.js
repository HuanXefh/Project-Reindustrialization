/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_unloader");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_primitiveUnloader = extendBlock(
    TEMPLATE, "dis0aux-primitive-unloader",
  );
  exports.dis0aux_primitiveUnloader = dis0aux_primitiveUnloader;
