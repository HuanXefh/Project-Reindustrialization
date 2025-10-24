/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_conveyorBridge");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0brd ----------> */


  const dis0brd_conveyorBridge = extend(ItemBridge, "dis0brd-conveyor-bridge", TEMPLATE._std());
  dis0brd_conveyorBridge.buildType = () => extend(ItemBridge.ItemBridgeBuild, dis0brd_conveyorBridge, TEMPLATE._std_b());
  exports.dis0brd_conveyorBridge = dis0brd_conveyorBridge;
