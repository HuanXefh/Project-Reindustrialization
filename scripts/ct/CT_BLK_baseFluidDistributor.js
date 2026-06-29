/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidJunction");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_fluidValve");
  const TEMPLATE_AA = require("lovec/temp/blk/BLK_fluidFilter");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_fluidOverflowGate");
  const TEMPLATE_BA = require("lovec/temp/blk/BLK_directionalFluidRouter");
  const TEMPLATE_C = require("lovec/temp/blk/BLK_fluidPressureValve");


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
    TEMPLATE_AA, "bliq0aux-fluid-filter-valve",
  );


  const bliq0aux_fluidOverflowValve = extendBlock(
    TEMPLATE_B, "bliq0aux-fluid-overflow-valve",
  );


  const bliq0aux_pressureRouter = extendBlock(
    TEMPLATE_BA, "bliq0aux-pressure-router",
  );


  const bliq0aux_primitivePressureValve = extendBlock(
    TEMPLATE_C, "bliq0aux-primitive-pressure-valve",
  );
