/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_messageBlock = require("lovec/temp/blk/BLK_messageBlock");
    const BLK_B_directionalSwitch = require("lovec/temp/blk/BLK_directionalSwitch");
    const BLK_B_resourceDisplay = require("lovec/temp/blk/BLK_resourceDisplay");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ log0aux ------------------------------> */


    const log0aux_messageBlock = extendBlock(
        BLK_B_messageBlock, "log0aux-message-block",
    );


    const log0aux_directionalSwitch = extendBlock(
        BLK_B_directionalSwitch, "log0aux-directional-switch",
    );


    const log0aux_resourceDisplayPanel = extendBlock(
        BLK_B_resourceDisplay, "log0aux-resource-display-panel",
    );


    const log0aux_largeResourceDisplayPanel = extendBlock(
        BLK_B_resourceDisplay, "log0aux-large-resource-display-panel",
    );
