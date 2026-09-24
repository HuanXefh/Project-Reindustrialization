/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_light = require("lovec/temp/blk/BLK_light");
    const BLK_B_fuelLight = require("lovec/temp/blk/BLK_fuelLight");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ eff0li ------------------------------> */


    const eff0li_bonfire = extendBlock(
        BLK_B_fuelLight, "eff0li-bonfire",
        BLK_B_fuelLight[0].build({
            fuelConsMtp: 0.15,
            heatWarmupRate: 0.0008,
            maxLightTemp: 800.0,
            lightRad: 136.0,
            fogRadFrac: 0.88235294,
        }),
    );
    setDrawer(eff0li_bonfire, drawers => [
        drawers,
        extendSafe(LCDrawEffect, {
            effect: EFF.smogFireExplo,
            effP: 0.4,
        }),
    ]);
