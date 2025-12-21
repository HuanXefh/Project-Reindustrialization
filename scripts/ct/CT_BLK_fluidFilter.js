/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidFilter");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0aux ----------> */


  const bliq0aux_fluidFilterValve = extendBlock(
    TEMPLATE, "bliq0aux-fluid-filter-valve",
  );
  exports.bliq0aux_fluidFilterValve = bliq0aux_fluidFilterValve;
