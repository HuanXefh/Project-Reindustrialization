/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_boiler = require("lovec/temp/blk/BLK_boiler");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pow0boil ------------------------------> */


    const pow0boil_primitiveBoiler = extendBlock(
        BLK_B_boiler, "pow0boil-primitive-boiler",
        BLK_B_boiler[0].build({
            exploRad: 48.0,
            exploDmg: 1200.0,
            exploShake: 6.0,
            exploFldTarget: "loveclab-gas0int-steam-mp",
            presProd: 0.06666667,
            tempReq: 100.0,
            tempExtMtp: 0.25,
            heatA: 0.5,
        }),
    );
    setDrawer(pow0boil_primitiveBoiler, drawers => [
        drawers,
        extendSafe(LCDrawEffect, {
            effect: TP_effect.gasEmission({
                color: "d0d0d0",
                scl: 1.8,
            }),
            effectChance: 0.03,
        }),
    ]);
