/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_manualRecipeFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_crank = extendBlock(
    TEMPLATE, "pow0tor-crank",
    TEMPLATE[0].build({
      rcMdl: "pow0tor-crank",
      rcSourceMod: "projreind",
    }),
  );
  exports.pow0tor_crank = pow0tor_crank;
