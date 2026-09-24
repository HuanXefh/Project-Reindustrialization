/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_fluidPipeBridge = require("lovec/temp/blk/BLK_fluidPipeBridge");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ bliq0brd ------------------------------> */


    const bliq0brd_woodenFluidPipeBridge = extendBlock(
        BLK_B_fluidPipeBridge, "bliq0brd-wooden-fluid-pipe-bridge",
    );


    const bliq0brd_bronzeFluidPipeBridge = extendBlock(
        BLK_B_fluidPipeBridge, "bliq0brd-bronze-fluid-pipe-bridge",
        BLK_B_fluidPipeBridge[0].build({
            presThr: 1.0,
        }),
    );
