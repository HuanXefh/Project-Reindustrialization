/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_manualFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_crank = extend(GenericCrafter, "pow0tor-crank", TEMPLATE._std("pow0tor-crank", null, null, null));
  pow0tor_crank.buildType = () => extend(GenericCrafter.GenericCrafterBuild, pow0tor_crank, TEMPLATE._std_b(null, false, false));
  exports.pow0tor_crank = pow0tor_crank;
