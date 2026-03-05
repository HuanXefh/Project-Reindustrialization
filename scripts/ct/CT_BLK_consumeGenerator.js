/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_consumeGenerator");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0gen ----------> */


  const pow0gen_lodestoneGenerator = extendBlock(
    TEMPLATE, "pow0gen-lodestone-generator",
    TEMPLATE[0].build({
      overwriteExploParam: false,
      genEff: EFF.powerParticle,
      genEffP: 0.02,
    }),
  );
