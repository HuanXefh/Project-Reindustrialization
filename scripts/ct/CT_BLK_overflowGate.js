/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_overflowGate");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_overflowGate = extend(OverflowGate, "dis0aux-overflow-gate", TEMPLATE._std());
  dis0aux_overflowGate.buildType = () => extend(OverflowGate.OverflowGateBuild, dis0aux_overflowGate, TEMPLATE._std_b());
  exports.dis0aux_overflowGate = dis0aux_overflowGate;
