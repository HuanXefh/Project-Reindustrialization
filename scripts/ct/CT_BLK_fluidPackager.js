/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidPackager");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0aux ----------> */


  const bliq0aux_fluidPackager = extendBlock(
    TEMPLATE, "bliq0aux-fluid-packager",
    TEMPLATE[0].build({
      isUnpacker: false,
      packageAmt: 2,
    }),
  );


  const bliq0aux_fluidUnpacker = extendBlock(
    TEMPLATE, "bliq0aux-fluid-unpacker",
    TEMPLATE[0].build({
      isUnpacker: true,
      packageAmt: 2,
    }),
  );
