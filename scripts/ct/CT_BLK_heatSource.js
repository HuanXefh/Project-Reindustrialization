/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_heatSource = require("lovec/temp/blk/BLK_heatSource");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pow0heat ------------------------------> */


    const pow0heat_heatSource = extendBlock(
        BLK_B_heatSource, "pow0heat-heat-source",
    );
