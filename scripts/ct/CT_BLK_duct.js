/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_duct = require("lovec/temp/blk/BLK_duct");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dis0conv ------------------------------> */


    const dis0conv_standardDuct = extendBlock(
        BLK_B_duct, "dis0conv-standard-duct",
    );
