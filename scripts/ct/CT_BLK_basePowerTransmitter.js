/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_wireRelay");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_wireNode");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_cable");
  const TEMPLATE_BA = require("lovec/temp/blk/BLK_armoredCable");
  const TEMPLATE_BB = require("lovec/temp/blk/BLK_auxiliaryCable");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_copperCable = extendBlock(
    TEMPLATE_B, "pow0trans-copper-cable",
    TEMPLATE_B[0].build({
      maxPowProdAllowed: 6000.0 / 60.0,
    }),
  );


  const pow0trans_insulatedCopperCable = extendBlock(
    TEMPLATE_BA, "pow0trans-insulated-copper-cable",
    TEMPLATE_BA[0].build({
      maxPowProdAllowed: 4000.0 / 60.0,
    }),
  );


  const pow0trans_tinCable = extendBlock(
    TEMPLATE_BB, "pow0trans-tin-cable",
    TEMPLATE_BB[0].build({
      maxPowProdAllowed: 1000.0 / 60.0,
      transmitterOverloadDmgScl: 2.5,
    }),
  );


  const pow0trans_copperWireRelay = extendBlock(
    TEMPLATE, "pow0trans-copper-wire-relay",
    TEMPLATE[0].build({
      wireMat: "copper",
      wireTouchDmg: 20.0,
      maxPowProdAllowed: 5000.0 / 60.0,
    }),
  );


  const pow0trans_copperWireNode = extendBlock(
    TEMPLATE_A, "pow0trans-copper-wire-node",
    TEMPLATE_A[0].build({
      wireMat: "copper",
      wireTouchDmg: 20.0,
      linkMode: "cons",
      minRadFrac: 0.35,
      maxPowProdAllowed: 5000.0 / 60.0,
    }),
  );


  const pow0trans_copperWireRemoteNode = extendBlock(
    TEMPLATE_A, "pow0trans-copper-wire-remote-node",
    TEMPLATE_A[0].build({
      wireMat: "copper",
      wireTouchDmg: 30.0,
      linkMode: "remote-node",
      minRadFrac: 0.7,
      maxPowProdAllowed: 5000.0 / 60.0,
    }),
  );
