/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_cogwheel");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_cogwheelStack");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_gearBox");
  const TEMPLATE_C = require("lovec/temp/blk/BLK_transmissionRod");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_brassGearBox = extendBlock(
    TEMPLATE_B, "pow0tor-brass-gear-box",
  );


  const pow0tor_brassCogwheel = extendBlock(
    TEMPLATE, "pow0tor-brass-cogwheel",
  );


  const pow0tor_largeBrassCogwheel = extendBlock(
    TEMPLATE, "pow0tor-large-brass-cogwheel",
  );


  const pow0tor_brassCogwheelStack1to3 = extendBlock(
    TEMPLATE_A, "pow0tor-brass-cogwheel-stack-1to3",
    TEMPLATE_A[0].build({
      undCog: "projreind-pow0tor-brass-cogwheel",
      ovCog: "projreind-pow0tor-large-brass-cogwheel",
    }),
  );


  const pow0tor_brassCogwheelStack3to1 = extendBlock(
    TEMPLATE_A, "pow0tor-brass-cogwheel-stack-3to1",
    TEMPLATE_A[0].build({
      undCog: "projreind-pow0tor-large-brass-cogwheel",
      ovCog: "projreind-pow0tor-brass-cogwheel",
    }),
  );
