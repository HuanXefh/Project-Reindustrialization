/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_wallDrill");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0drl ----------> */


  const min0drl_pangolinClassWallDrill = extend(BeamDrill, "min0drl-pangolin-class-wall-drill", TEMPLATE._std());
  min0drl_pangolinClassWallDrill.buildType = () => extend(BeamDrill.BeamDrillBuild, min0drl_pangolinClassWallDrill, TEMPLATE._std_b(false));
  exports.min0drl_pangolinClassWallDrill = min0drl_pangolinClassWallDrill;
