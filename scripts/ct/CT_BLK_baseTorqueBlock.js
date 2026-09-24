/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_cogwheel = require("lovec/temp/blk/BLK_cogwheel");
    const BLK_B_gearBox = require("lovec/temp/blk/BLK_gearBox");
    const BLK_B_transmissionRod = require("lovec/temp/blk/BLK_transmissionRod");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pow0tor ------------------------------> */


    const pow0tor_brassGearBox = extendBlock(
        BLK_B_gearBox, "pow0tor-brass-gear-box",
    );


    const pow0tor_brassCogwheel = extendBlock(
        BLK_B_cogwheel, "pow0tor-brass-cogwheel",
    );


    const pow0tor_largeBrassCogwheel = extendBlock(
        BLK_B_cogwheel, "pow0tor-large-brass-cogwheel",
    );
