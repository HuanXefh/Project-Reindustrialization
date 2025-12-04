/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_container");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0stor ----------> */


  const eff0stor_crate = extendBlock(
    TEMPLATE, "eff0stor-crate",
  );
  exports.eff0stor_crate = eff0stor_crate;
