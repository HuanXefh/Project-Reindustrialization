/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_stackConveyor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0conv ----------> */


  const dis0conv_multiPortConveyor = extendBlock(
    TEMPLATE, "dis0conv-multi-port-conveyor",
  );
  exports.dis0conv_multiPortConveyor = dis0conv_multiPortConveyor;
