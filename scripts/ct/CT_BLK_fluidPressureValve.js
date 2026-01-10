/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidPressureValve");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0aux ----------> */


  const bliq0aux_primitivePressureValve = extendBlock(
    TEMPLATE, "bliq0aux-primitive-pressure-valve",
  );
