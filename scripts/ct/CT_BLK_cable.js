/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_cable");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_copperCable = extend(ArmoredConveyor, "pow0trans-copper-cable", TEMPLATE._std());
  pow0trans_copperCable.buildType = () => extend(ArmoredConveyor.ArmoredConveyorBuild, pow0trans_copperCable, TEMPLATE._std_b());
  exports.pow0trans_copperCable = pow0trans_copperCable;
