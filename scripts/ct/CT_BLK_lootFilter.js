/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_lootFilter");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0loot ----------> */


  const dis0loot_itemPicker = extendBlock(
    TEMPLATE, "dis0loot-item-picker",
    TEMPLATE[0].build({
      lootCallCooldown: 5.0 * 60.0,
      lootCallAmt: 30,
    }),
  );
