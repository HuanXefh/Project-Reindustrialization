/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_gearBox");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_brassGearBox = extendBlock(
    TEMPLATE, "pow0tor-brass-gear-box",
  );
  exports.pow0tor_brassGearBox = pow0tor_brassGearBox;
