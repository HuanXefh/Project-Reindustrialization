/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_wallHarvester");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0harv ----------> */


  const min0harv_lumberjack = extend(WallCrafter, "min0harv-lumberjack", TEMPLATE._std(Fx.mineWallSmall, 0.02));
  min0harv_lumberjack.buildType = () => extend(WallCrafter.WallCrafterBuild, min0harv_lumberjack, TEMPLATE._std_b(true));
  exports.min0harv_lumberjack = min0harv_lumberjack;
