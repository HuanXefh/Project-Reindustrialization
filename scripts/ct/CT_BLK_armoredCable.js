/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_armoredCable");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_insulatedCopperCable = extendBlock(
    TEMPLATE, "pow0trans-insulated-copper-cable",
  );
  exports.pow0trans_insulatedCopperCable = pow0trans_insulatedCopperCable;
