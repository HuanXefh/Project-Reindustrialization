/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_materialBlock");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pay0mat ----------> */


  const pay0mat_woodenBlock = extend(Wall, "pay0mat-wooden-block", TEMPLATE._std());
  pay0mat_woodenBlock.buildType = () => extend(Wall.WallBuild, pay0mat_woodenBlock, TEMPLATE._std_b());
  exports.pay0mat_woodenBlock = pay0mat_woodenBlock;


  const pay0mat_copperBlock = extend(Wall, "pay0mat-copper-block", TEMPLATE._std());
  pay0mat_copperBlock.buildType = () => extend(Wall.WallBuild, pay0mat_copperBlock, TEMPLATE._std_b());
  exports.pay0mat_copperBlock = pay0mat_copperBlock;


  const pay0mat_leadBlock = extend(Wall, "pay0mat-lead-block", TEMPLATE._std());
  pay0mat_leadBlock.buildType = () => extend(Wall.WallBuild, pay0mat_leadBlock, TEMPLATE._std_b());
  exports.pay0mat_leadBlock = pay0mat_leadBlock;


  const pay0mat_rubberBlock = extend(Wall, "pay0mat-rubber-block", TEMPLATE._std());
  pay0mat_rubberBlock.buildType = () => extend(Wall.WallBuild, pay0mat_rubberBlock, TEMPLATE._std_b());
  exports.pay0mat_rubberBlock = pay0mat_rubberBlock;
