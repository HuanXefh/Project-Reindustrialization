/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_dynamicWallHarvester");


  const DB_item = require("lovec/db/DB_item");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0harv ----------> */


  const min0harv_treeTap = extendBlock(
    TEMPLATE, "min0harv-tree-tap",
    TEMPLATE[0].build({
      attrRsMap: DB_item.db["map"]["attr"]["tree"],
      liqProdRate: 0.1,
    }),
  );
  exports.min0harv_treeTap = min0harv_treeTap;
