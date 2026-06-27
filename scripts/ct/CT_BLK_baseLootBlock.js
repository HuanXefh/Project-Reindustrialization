/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_lootHopper");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_lootPullerHopper");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_lootFilter");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0loot ----------> */


  const dis0loot_itemHopper = extendBlock(
    TEMPLATE, "dis0loot-item-hopper",
    TEMPLATE[0].build({
      lootCallCooldown: 5.0 * 60.0,
      lootCallAmt: 15,
    }),
  );


  const dis0loot_itemCollector = extendBlock(
    TEMPLATE_A, "dis0loot-item-collector",
    TEMPLATE_A[0].build({
      pullRad: 13 * 8.0,
      lootCallCooldown: 3.0 * 60.0,
      lootCallAmt: 18,
    }),
  );


  const dis0loot_itemPicker = extendBlock(
    TEMPLATE_B, "dis0loot-item-picker",
    TEMPLATE_B[0].build({
      lootCallCooldown: 5.0 * 60.0,
      lootCallAmt: 30,
    }),
  );
