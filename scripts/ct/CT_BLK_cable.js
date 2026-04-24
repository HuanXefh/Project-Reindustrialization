/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_cable");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_armoredCable");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_auxiliaryCable");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_copperCable = extendBlock(
    TEMPLATE, "pow0trans-copper-cable",
    TEMPLATE[0].build({
      maxPowProdAllowed: 6000.0 / 60.0,
    }),
  );


  const pow0trans_insulatedCopperCable = extendBlock(
    TEMPLATE_A, "pow0trans-insulated-copper-cable",
    TEMPLATE_A[0].build({
      maxPowProdAllowed: 4000.0 / 60.0,
    }),
  );


  const pow0trans_tinCable = extendBlock(
    TEMPLATE_B, "pow0trans-tin-cable",
    TEMPLATE_B[0].build({
      maxPowProdAllowed: 1000.0 / 60.0,
      transmitterOverloadDmgScl: 2.5,
    }),
  );
