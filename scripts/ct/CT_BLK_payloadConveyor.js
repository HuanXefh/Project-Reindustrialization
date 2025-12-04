/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_payloadConveyor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pay0conv ----------> */


  const pay0conv_payloadExpressWay = extendBlock(
    TEMPLATE, "pay0conv-payload-express-way",
  );
  exports.pay0conv_payloadExpressWay = pay0conv_payloadExpressWay;
