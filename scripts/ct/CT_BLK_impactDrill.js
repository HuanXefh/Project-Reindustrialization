/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_impactDrill");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0drl ----------> */


  const min0drl_boulderClassImpactDrill = extendBlock(
    TEMPLATE, "min0drl-boulder-class-impact-drill",
    TEMPLATE[0].build({
      depthTierMtp: 0.5,
      impactRad: 6.0 * Vars.tilesize,
      drillEff: TP_effect._impactDrillCraft({
        blkSize: 2,
        rad: 6.0 * Vars.tilesize,
      }),
    }),
  );
  exports.min0drl_boulderClassImpactDrill = min0drl_boulderClassImpactDrill;
