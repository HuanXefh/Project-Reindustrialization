/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_consumeGenerator");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_ventGenerator");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0gen ----------> */


  const pow0gen_ventGenerator = extendBlock(
    TEMPLATE_A, "pow0gen-vent-generator",
    TEMPLATE_A[0].build({
      genEff: EFF.powerParticle,
      genEffP: 0.02,
      exploEff: EFF.explosion,
    }),
  );


  const pow0gen_hpsvGenerator = extendBlock(
    TEMPLATE_A, "pow0gen-hpsv-generator",
    TEMPLATE_A[0].build({
      genEff: EFF.powerParticle,
      genEffP: 0.04,
      exploEff: EFF.explosion,
    }),
  );


  const pow0gen_lodestoneGenerator = extendBlock(
    TEMPLATE, "pow0gen-lodestone-generator",
    TEMPLATE[0].build({
      overwriteExploParam: false,
      genEff: EFF.powerParticle,
      genEffP: 0.02,
    }),
  );
