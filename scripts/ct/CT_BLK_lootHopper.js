/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_lootHopper");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0loot ----------> */


  const dis0loot_itemHopper = extendBlock(
    TEMPLATE, "dis0loot-item-hopper",
    TEMPLATE[0].build({
      lootCallIntv: 5.0 * 60.0,
      lootCallAmt: 15,
    }),
  );
