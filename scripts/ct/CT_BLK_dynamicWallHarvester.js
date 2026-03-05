/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_dynamicWallHarvester");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0harv ----------> */


  const min0harv_treeTap = extendBlock(
    TEMPLATE, "min0harv-tree-tap",
    TEMPLATE[0].build({
      attrRsArr: DB_item.db["map"]["attr"]["tree"],
      liqProdRate: 0.1,
    }),
  );
