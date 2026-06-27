/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidJunction");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_fluidValve");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_fluidFilter");
  //const TEMPLATE_C = require("lovec/temp/blk/BLK_fluidOverflowGate");
  const TEMPLATE_D = require("lovec/temp/blk/BLK_fluidPressureValve");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0aux ----------> */


  const bliq0aux_fluidJunction = extendBlock(
    TEMPLATE, "bliq0aux-fluid-junction",
  );


  const bliq0aux_fluidValve = extendBlock(
    TEMPLATE_A, "bliq0aux-fluid-valve",
  );


  const bliq0aux_fluidFilterValve = extendBlock(
    TEMPLATE_B, "bliq0aux-fluid-filter-valve",
  );


  const bliq0aux_primitivePressureValve = extendBlock(
    TEMPLATE_D, "bliq0aux-primitive-pressure-valve",
  );
