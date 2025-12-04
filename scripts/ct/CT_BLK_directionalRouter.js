/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_directionalRouter");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_primitiveDirectionalRouter = extendBlock(
    TEMPLATE, "dis0aux-primitive-directional-router",
  );
  exports.dis0aux_primitiveDirectionalRouter = dis0aux_primitiveDirectionalRouter;
