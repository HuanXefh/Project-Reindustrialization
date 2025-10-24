/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_wireRelay");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_copperWireRelay = extend(BeamNode, "pow0trans-copper-wire-relay", TEMPLATE._std("copper"));
  pow0trans_copperWireRelay.buildType = () => extend(BeamNode.BeamNodeBuild, pow0trans_copperWireRelay, TEMPLATE._std_b(20.0, null));
  exports.pow0trans_copperWireRelay = pow0trans_copperWireRelay;
