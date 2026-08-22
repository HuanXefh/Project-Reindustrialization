/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_consumeGenerator");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_ventGenerator");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_windGenerator");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0gen ----------> */


  const pow0gen_ventGenerator = extendBlock(
    TEMPLATE_A, "pow0gen-vent-generator",
    TEMPLATE_A[0].build({
      genEff: EFF.particlePower,
      genEffP: 0.02,
      exploEff: EFF.explosion,
    }),
  );
  setDrawer(pow0gen_ventGenerator, drawers => [
    drawers,
    extendSafe(LCDrawEffect, {
      effect: TP_effect.gasEmission({
        color: "889cbf",
        size: 10.0,
        rad: 44.0,
        scl: 1.3,
        noWhiteSmog: true,
      }),
      effectChance: 0.05,
    }),
  ]);


  const pow0gen_hpsvGenerator = extendBlock(
    TEMPLATE_A, "pow0gen-hpsv-generator",
    TEMPLATE_A[0].build({
      genEff: EFF.particlePower,
      genEffP: 0.04,
      exploEff: EFF.explosion,
    }),
  );
  setDrawer(pow0gen_hpsvGenerator, drawers => [
    drawers,
    extendSafe(LCDrawEffect, {
      effect: TP_effect.gasEmission({
        color: "889cbf",
        size: 12.0,
        rad: 54.0,
        scl: 1.4,
        noWhiteSmog: true,
      }),
      effectChance: 0.05,
    }),
  ]);


  const pow0gen_lodestoneGenerator = extendBlock(
    TEMPLATE, "pow0gen-lodestone-generator",
    TEMPLATE[0].build({
      overwriteExploParam: false,
      genEff: EFF.particlePower,
      genEffP: 0.02,
    }),
  );


  const pow0gen_windTurbogenerator = extendBlock(
    TEMPLATE_B, "pow0gen-wind-turbogenerator",
    TEMPLATE_B[0].build({
      bladeTouchRad: 26.0,
      bladeTouchDmg: 120.0,
      bladeTouchSelfDmg: 70.0,
      placeRestrictR: 7,
    }),
  );
