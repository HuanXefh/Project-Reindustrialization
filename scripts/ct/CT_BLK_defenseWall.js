/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_defenseWall = require("lovec/temp/blk/BLK_defenseWall");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ def0wall ------------------------------> */


    const def0wall_woodenBarricade = extendBlock(
        BLK_B_defenseWall, "def0wall-wooden-barricade",
    );


    const def0wall_scrapSteelBarricade = extendBlock(
        BLK_B_defenseWall, "def0wall-scrap-steel-barricade",
    );


    const def0wall_concreteBarricade = extendBlock(
        BLK_B_defenseWall, "def0wall-concrete-barricade",
    );
