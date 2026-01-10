/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_lootPullerHopper");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0loot ----------> */


  const dis0loot_itemCollector = extendBlock(
    TEMPLATE, "dis0loot-item-collector",
    TEMPLATE[0].build({
      pullRad: 13 * 8.0,
      lootCallIntv: 3.0 * 60.0,
      lootCallAmt: 18,
    }),
  );
