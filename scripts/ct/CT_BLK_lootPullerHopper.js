/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_lootPullerHopper");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0loot ----------> */


  const dis0loot_itemCollector = extend(StorageBlock, "dis0loot-item-collector", TEMPLATE._std(13));
  dis0loot_itemCollector.buildType = () => extend(StorageBlock.StorageBuild, dis0loot_itemCollector, TEMPLATE._std_b(8.0, 240.0, 240.0));
  exports.dis0loot_itemCollector = dis0loot_itemCollector;
