/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_liquidPump");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_pistonLiquidPump = extendBlock(
    TEMPLATE, "bliq0pump-piston-liquid-pump",
    TEMPLATE[0].build({
      presProd: 0.01666667,
      presFldTp: "liquid",
    }),
  );
