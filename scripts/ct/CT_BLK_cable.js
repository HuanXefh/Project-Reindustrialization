/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_cable");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_armoredCable");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0trans ----------> */


  const pow0trans_copperCable = extendBlock(
    TEMPLATE, "pow0trans-copper-cable",
    TEMPLATE[0].build({
      maxPowProdAllowed: 5000.0 / 60.0,
    }),
  );


  const pow0trans_insulatedCopperCable = extendBlock(
    TEMPLATE_A, "pow0trans-insulated-copper-cable",
    TEMPLATE_A[0].build({
      maxPowProdAllowed: 3000.0 / 60.0,
    }),
  );
