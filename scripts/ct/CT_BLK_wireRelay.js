/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_wireRelay");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_copperWireRelay = extendBlock(
    TEMPLATE, "pow0trans-copper-wire-relay",
    TEMPLATE[0].build({
      wireMat: "copper",
      wireTouchDmg: 20.0,
    }),
  );
  exports.pow0trans_copperWireRelay = pow0trans_copperWireRelay;
