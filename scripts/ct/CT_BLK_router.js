/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_router");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_router = extendBlock(
    TEMPLATE, "dis0aux-router",
    TEMPLATE[0].build({
      forceUseDrawer: true,
    }),
  );
  setDrawer(dis0aux_router, drawers => [
    drawers,
    fetchDrawer("DrawContentIcon", {
      ctGetterTup: [b => b.delegee.lastRs],
      regScl: 0.5,
    }),
  ]);
