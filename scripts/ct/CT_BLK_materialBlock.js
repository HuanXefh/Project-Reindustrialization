/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_materialBlock");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pay0mat ----------> */


  const pay0mat_woodenBlock = extendBlock(
    TEMPLATE, "pay0mat-wooden-block",
  );
  exports.pay0mat_woodenBlock = pay0mat_woodenBlock;


  const pay0mat_copperBlock = extendBlock(
    TEMPLATE, "pay0mat-copper-block",
  );
  exports.pay0mat_copperBlock = pay0mat_copperBlock;


  const pay0mat_leadBlock = extendBlock(
    TEMPLATE, "pay0mat-lead-block",
  );
  exports.pay0mat_leadBlock = pay0mat_leadBlock;


  const pay0mat_rubberBlock = extendBlock(
    TEMPLATE, "pay0mat-rubber-block",
  );
  exports.pay0mat_rubberBlock = pay0mat_rubberBlock;
