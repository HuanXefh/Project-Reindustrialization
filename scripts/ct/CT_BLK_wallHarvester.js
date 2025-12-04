/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_wallHarvester");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0harv ----------> */


  const min0harv_lumberjack = extendBlock(
    TEMPLATE, "min0harv-lumberjack",
    TEMPLATE[0].build({
      updateEff: Fx.mineWallSmall,
      updateEffP: 0.02,
    }),
  );
  exports.min0harv_lumberjack = min0harv_lumberjack;
