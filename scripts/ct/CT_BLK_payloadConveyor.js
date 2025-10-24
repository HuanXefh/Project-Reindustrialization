/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_payloadConveyor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pay0conv ----------> */


  const pay0conv_payloadExpressWay = extend(PayloadConveyor, "pay0conv-payload-express-way", TEMPLATE._std());
  pay0conv_payloadExpressWay.buildType = () => extend(PayloadConveyor.PayloadConveyorBuild, pay0conv_payloadExpressWay, TEMPLATE._std_b());
  exports.pay0conv_payloadExpressWay = pay0conv_payloadExpressWay;
