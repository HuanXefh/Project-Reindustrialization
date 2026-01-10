/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_rainCollector");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0misc ----------> */


  const fac0misc_rainCollector = extendBlock(
    TEMPLATE, "fac0misc-rain-collector",
    TEMPLATE[0].build({
      liqProdRate: 0.05,
    }),
  );
  setDrawer(fac0misc_rainCollector, drawers => [
    drawers,
    fetchDrawer("DrawDynamicLiquid"),
  ]);
