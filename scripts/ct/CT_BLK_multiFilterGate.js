/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_multiFilterGate");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_multiFilterGate = extendBlock(
    TEMPLATE, "dis0aux-multi-filter-gate",
  );
  exports.dis0aux_multiFilterGate = dis0aux_multiFilterGate;
