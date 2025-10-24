/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_impactDrill");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0drl ----------> */


  const min0drl_boulderClassImpactDrill = extend(BurstDrill, "min0drl-boulder-class-impact-drill", TEMPLATE._std(6, 0.5, TP_effect._impactDrillCraft(2, 48.0), 1.0));
  min0drl_boulderClassImpactDrill.buildType = () => extend(BurstDrill.BurstDrillBuild, min0drl_boulderClassImpactDrill, TEMPLATE._std_b(false));
  exports.min0drl_boulderClassImpactDrill = min0drl_boulderClassImpactDrill;
