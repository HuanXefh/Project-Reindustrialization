/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_liquidPump");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_manualTimerPump");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_depthPump");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_portableManualPump = extendBlock(
    TEMPLATE_A, "bliq0pump-portable-manual-pump",
    TEMPLATE_A[0].build({
      manualTimerCap: 2.5 * 60.0 * 60.0,
      manualTimerClickInc: 180.0,
    }),
  );


  const bliq0pump_pistonLiquidPump = extendBlock(
    TEMPLATE, "bliq0pump-piston-liquid-pump",
    TEMPLATE[0].build({
      presProd: 0.01666667,
      presFldType: "liquid",
    }),
  );


  const bliq0pump_pistonDepthPump = extendBlock(
    TEMPLATE_B, "bliq0pump-piston-depth-pump",
    TEMPLATE_B[0].build({
      dynaAttrRsEffcMap: ObjectMap.of(
        "loveclab-liq0ore-brine", 0.5,
        "loveclab-liq0ore-crude-oil", 0.1,
      ),
      presProd: 0.03333333,
      liqProdRate: 0.5,
    }),
  );
