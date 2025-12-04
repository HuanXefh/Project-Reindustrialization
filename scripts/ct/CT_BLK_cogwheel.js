/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_cogwheel");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_brassCogwheel = extendBlock(
    TEMPLATE, "pow0tor-brass-cogwheel",
  );
  exports.pow0tor_brassCogwheel = pow0tor_brassCogwheel;


  const pow0tor_largeBrassCogwheel = extendBlock(
    TEMPLATE, "pow0tor-large-brass-cogwheel",
  );
  exports.pow0tor_largeBrassCogwheel = pow0tor_largeBrassCogwheel;
