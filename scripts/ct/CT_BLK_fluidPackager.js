/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_fluidPackager = require("lovec/temp/blk/BLK_fluidPackager");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ bliq0aux ------------------------------> */


    const bliq0aux_fluidPackager = extendBlock(
        BLK_B_fluidPackager, "bliq0aux-fluid-packager",
        BLK_B_fluidPackager[0].build({
            isUnpacker: false,
            packageAmt: 2,
        }),
    );


    const bliq0aux_fluidUnpacker = extendBlock(
        BLK_B_fluidPackager, "bliq0aux-fluid-unpacker",
        BLK_B_fluidPackager[0].build({
            isUnpacker: true,
            packageAmt: 2,
        }),
    );
