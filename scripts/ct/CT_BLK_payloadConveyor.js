/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_payloadConveyor = require("lovec/temp/blk/BLK_payloadConveyor");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pay0conv ------------------------------> */


    const pay0conv_payloadExpressWay = extendBlock(
        BLK_B_payloadConveyor, "pay0conv-payload-express-way",
    );
