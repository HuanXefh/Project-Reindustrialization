/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_wireNode");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_copperWireNode = extendBlock(
    TEMPLATE, "pow0trans-copper-wire-node",
    TEMPLATE[0].build({
      wireMat: "copper",
      wireTouchDmg: 20.0,
      linkMode: "cons",
      minRadFrac: 0.35,
    }),
  );
  exports.pow0trans_copperWireNode = pow0trans_copperWireNode;


  const pow0trans_copperWireRemoteNode = extendBlock(
    TEMPLATE, "pow0trans-copper-wire-remote-node",
    TEMPLATE[0].build({
      wireMat: "copper",
      wireTouchDmg: 30.0,
      linkMode: "remote-node",
      minRadFrac: 0.7,
    }),
  );
  exports.pow0trans_copperWireRemoteNode = pow0trans_copperWireRemoteNode;
