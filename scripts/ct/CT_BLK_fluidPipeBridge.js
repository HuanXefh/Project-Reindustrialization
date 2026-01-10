/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidPipeBridge");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0brd ----------> */


  const bliq0brd_bronzeFluidPipeBridge = extendBlock(
    TEMPLATE, "bliq0brd-bronze-fluid-pipe-bridge",
    TEMPLATE[0].build({
      presThr: 1.0,
    }),
  );
