/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_consumeGenerator = require("lovec/temp/blk/BLK_consumeGenerator");
    const BLK_B_ventGenerator = require("lovec/temp/blk/BLK_ventGenerator");
    const BLK_B_windGenerator = require("lovec/temp/blk/BLK_windGenerator");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pow0gen ------------------------------> */


    const pow0gen_ventGenerator = extendBlock(
        BLK_B_ventGenerator, "pow0gen-vent-generator",
        BLK_B_ventGenerator[0].build({
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
        BLK_B_ventGenerator, "pow0gen-hpsv-generator",
        BLK_B_ventGenerator[0].build({
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
        BLK_B_consumeGenerator, "pow0gen-lodestone-generator",
        BLK_B_consumeGenerator[0].build({
            overwriteExploParam: false,
            genEff: EFF.particlePower,
            genEffP: 0.02,
        }),
    );


    const pow0gen_windTurbogenerator = extendBlock(
        BLK_B_windGenerator, "pow0gen-wind-turbogenerator",
        BLK_B_windGenerator[0].build({
            bladeTouchRad: 26.0,
            bladeTouchDmg: 200.0,
            bladeTouchSelfDmg: 70.0,
            placeRestrictR: 7,
            genWarmupRate: 0.004,
            bladeVisualSpd: 3.5,
        }),
    );
