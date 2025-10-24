/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_lootHopper");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0loot ----------> */


  const dis0loot_itemHopper = extend(StorageBlock, "dis0loot-item-hopper", TEMPLATE._std());
  dis0loot_itemHopper.buildType = () => extend(StorageBlock.StorageBuild, dis0loot_itemHopper, TEMPLATE._std_b());
  exports.dis0loot_itemHopper = dis0loot_itemHopper;
