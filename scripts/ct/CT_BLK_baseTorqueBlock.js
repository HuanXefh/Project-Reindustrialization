/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_cogwheel");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_gearBox");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_transmissionRod");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_brassGearBox = extendBlock(
    TEMPLATE_A, "pow0tor-brass-gear-box",
  );


  const pow0tor_brassCogwheel = extendBlock(
    TEMPLATE, "pow0tor-brass-cogwheel",
  );


  const pow0tor_largeBrassCogwheel = extendBlock(
    TEMPLATE, "pow0tor-large-brass-cogwheel",
  );
