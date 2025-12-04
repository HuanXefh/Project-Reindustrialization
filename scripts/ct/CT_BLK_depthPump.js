/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_depthPump");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_pistonDepthPump = extendBlock(
    TEMPLATE, "bliq0pump-piston-depth-pump",
    TEMPLATE[0].build({
      presProd: 0.03333333,
      liqProdRate: 0.5,
    }),
  );
  exports.bliq0pump_pistonDepthPump = bliq0pump_pistonDepthPump;
