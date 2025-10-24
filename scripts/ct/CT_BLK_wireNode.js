/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_wireNode");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_copperWireNode = extend(PowerNode, "pow0trans-copper-wire-node", TEMPLATE._std("copper", "cons", 0.35));
  pow0trans_copperWireNode.buildType = () => extend(PowerNode.PowerNodeBuild, pow0trans_copperWireNode, TEMPLATE._std_b(20.0, null));
  exports.pow0trans_copperWireNode = pow0trans_copperWireNode;


  const pow0trans_copperWireRemoteNode = extend(PowerNode, "pow0trans-copper-wire-remote-node", TEMPLATE._std("copper", "remote-node", 0.7));
  pow0trans_copperWireRemoteNode.buildType = () => extend(PowerNode.PowerNodeBuild, pow0trans_copperWireRemoteNode, TEMPLATE._std_b(30.0, null));
  exports.pow0trans_copperWireRemoteNode = pow0trans_copperWireRemoteNode;
