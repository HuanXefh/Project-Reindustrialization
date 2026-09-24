/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_liquidPump = require("lovec/temp/blk/BLK_liquidPump");
    const BLK_B_manualTimerPump = require("lovec/temp/blk/BLK_manualTimerPump");
    const BLK_B_depthPump = require("lovec/temp/blk/BLK_depthPump");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ bliq0pump ------------------------------> */


    const bliq0pump_portableManualPump = extendBlock(
        BLK_B_manualTimerPump, "bliq0pump-portable-manual-pump",
        BLK_B_manualTimerPump[0].build({
            manualTimerCap: 2.5 * 60.0 * 60.0,
            manualTimerClickInc: 180.0,
        }),
    );


    const bliq0pump_pistonLiquidPump = extendBlock(
        BLK_B_liquidPump, "bliq0pump-piston-liquid-pump",
        BLK_B_liquidPump[0].build({
            presProd: 0.01666667,
            presFldType: "liquid",
        }),
    );


    const bliq0pump_pistonDepthPump = extendBlock(
        BLK_B_depthPump, "bliq0pump-piston-depth-pump",
        BLK_B_depthPump[0].build({
            dynaAttrRsEffcMap: ObjectMap.of(
                "loveclab-liq0ore-brine", 0.5,
                "loveclab-liq0ore-crude-oil", 0.1,
            ),
            presProd: 0.03333333,
            liqProdRate: 0.5,
        }),
    );
