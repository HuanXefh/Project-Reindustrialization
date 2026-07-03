/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_conveyor");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_armoredConveyor");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_stackConveyor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0conv ----------> */


  const dis0conv_woodenConveyor = extendBlock(
    TEMPLATE, "dis0conv-wooden-conveyor",
  );


  const dis0conv_primitiveConveyor = extendBlock(
    TEMPLATE_A, "dis0conv-primitive-conveyor",
  );


  const dis0conv_standardConveyor = extendBlock(
    TEMPLATE_A, "dis0conv-standard-conveyor",
  );


  const dis0conv_multiPortConveyor = extendBlock(
    TEMPLATE_B, "dis0conv-multi-port-conveyor",
  );
