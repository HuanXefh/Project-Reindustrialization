/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_groundDrill");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0drl ----------> */


  const min0drl_survivorDrill = extend(Drill, "min0drl-survivor-drill", TEMPLATE._std(EFF.drillPulsePack[3], 1.0, 0.0, EFF.drillCrack, 0.01));
  min0drl_survivorDrill.buildType = () => extend(Drill.DrillBuild, min0drl_survivorDrill, TEMPLATE._std_b(true, true));
  exports.min0drl_survivorDrill = min0drl_survivorDrill;


  const min0drl_progressClassDrill = extend(Drill, "min0drl-progress-class-drill", TEMPLATE._std(EFF.heatSmog, 1.0, 0.0, EFF.drillCrack, 0.01));
  min0drl_progressClassDrill.buildType = () => extend(Drill.DrillBuild, min0drl_progressClassDrill, TEMPLATE._std_b(false, true));
  exports.min0drl_progressClassDrill = min0drl_progressClassDrill;
