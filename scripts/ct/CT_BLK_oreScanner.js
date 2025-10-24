/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_oreScanner");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0scan ----------> */


  const min0scan_alphaClassOreScanner = extend(GenericCrafter, "min0scan-alpha-class-ore-scanner", TEMPLATE._std(7, EFF.drillPulsePack[2], null, null));
  min0scan_alphaClassOreScanner.buildType = () => extend(GenericCrafter.GenericCrafterBuild, min0scan_alphaClassOreScanner, TEMPLATE._std_b("se-craft-ore-scanner"));
  exports.min0scan_alphaClassOreScanner = min0scan_alphaClassOreScanner;
