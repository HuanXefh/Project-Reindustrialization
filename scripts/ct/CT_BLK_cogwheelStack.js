/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_cogwheelStack");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_brassCogwheelStack1to3 = extendBlock(
    TEMPLATE, "pow0tor-brass-cogwheel-stack-1to3",
    TEMPLATE[0].build({
      undCog: "projreind-pow0tor-brass-cogwheel",
      ovCog: "projreind-pow0tor-large-brass-cogwheel",
    }),
  );


  const pow0tor_brassCogwheelStack3to1 = extendBlock(
    TEMPLATE, "pow0tor-brass-cogwheel-stack-3to1",
    TEMPLATE[0].build({
      undCog: "projreind-pow0tor-large-brass-cogwheel",
      ovCog: "projreind-pow0tor-brass-cogwheel",
    }),
  );
