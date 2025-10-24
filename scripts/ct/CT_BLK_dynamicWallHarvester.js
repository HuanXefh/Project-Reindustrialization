/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_dynamicWallHarvester");


  const DB_item = require("lovec/db/DB_item");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0harv ----------> */


  const min0harv_treeTap = extend(WallCrafter, "min0harv-tree-tap", TEMPLATE._std(DB_item.db["map"]["attr"]["tree"], 60.0, 0.1, true, null, null));
  min0harv_treeTap.buildType = () => extend(WallCrafter.WallCrafterBuild, min0harv_treeTap, TEMPLATE._std_b(null, false));
  exports.min0harv_treeTap = min0harv_treeTap;
