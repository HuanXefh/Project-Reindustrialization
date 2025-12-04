/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_conveyor");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_armoredConveyor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0conv ----------> */


  const dis0conv_primitiveConveyor = extendBlock(
    TEMPLATE_A, "dis0conv-primitive-conveyor",
  );
  exports.dis0conv_primitiveConveyor = dis0conv_primitiveConveyor;


  const dis0conv_standardConveyor = extendBlock(
    TEMPLATE_A, "dis0conv-standard-conveyor",
  );
  exports.dis0conv_standardConveyor = dis0conv_standardConveyor;
