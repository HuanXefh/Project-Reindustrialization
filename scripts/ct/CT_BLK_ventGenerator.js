/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_ventGenerator");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0gen ----------> */


  const pow0gen_ventGenerator = extendBlock(
    TEMPLATE, "pow0gen-vent-generator",
    TEMPLATE[0].build({
      genEff: EFF.powerParticle,
      genEffP: 0.02,
      exploEff: EFF.explosion,
    }),
  );


  const pow0gen_hpsvGenerator = extendBlock(
    TEMPLATE, "pow0gen-hpsv-generator",
    TEMPLATE[0].build({
      genEff: EFF.powerParticle,
      genEffP: 0.04,
      exploEff: EFF.explosion,
    }),
  );
