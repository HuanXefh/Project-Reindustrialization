/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_lootHopper = require("lovec/temp/blk/BLK_lootHopper");
    const BLK_B_lootPullerHopper = require("lovec/temp/blk/BLK_lootPullerHopper");
    const BLK_B_lootFilter = require("lovec/temp/blk/BLK_lootFilter");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dis0loot ------------------------------> */


    const dis0loot_itemHopper = extendBlock(
        BLK_B_lootHopper, "dis0loot-item-hopper",
        BLK_B_lootHopper[0].build({
            lootCallCooldown: 5.0 * 60.0,
            lootCallAmt: 20,
        }),
    );


    const dis0loot_itemCollector = extendBlock(
        BLK_B_lootPullerHopper, "dis0loot-item-collector",
        BLK_B_lootPullerHopper[0].build({
            pullRad: 13 * 8.0,
            lootCallCooldown: 3.0 * 60.0,
            lootCallAmt: 18,
        }),
    );


    const dis0loot_itemPicker = extendBlock(
        BLK_B_lootFilter, "dis0loot-item-picker",
        BLK_B_lootFilter[0].build({
            lootCallCooldown: 5.0 * 60.0,
            lootCallAmt: 30,
        }),
    );
