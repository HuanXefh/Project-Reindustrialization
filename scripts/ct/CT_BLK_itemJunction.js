/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_itemJunction");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_itemJunction = extend(Junction, "dis0aux-item-junction", TEMPLATE._std());
  dis0aux_itemJunction.buildType = () => extend(Junction.JunctionBuild, dis0aux_itemJunction, TEMPLATE._std_b());
  exports.dis0aux_itemJunction = dis0aux_itemJunction;
