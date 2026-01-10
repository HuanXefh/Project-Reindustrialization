/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_groundDrill");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0drl ----------> */


  const min0drl_survivorDrill = extendBlock(
    TEMPLATE, "min0drl-survivor-drill",
    TEMPLATE[0].build({
      drillEff: EFF.drillPulsePack[3],
      updateEff: EFF.drillCrack,
      updateEffP: 0.01,
    }),
  );


  const min0drl_progressClassDrill = extendBlock(
    TEMPLATE, "min0drl-progress-class-drill",
    TEMPLATE[0].build({
      drillEff: EFF.heatSmog,
      updateEff: EFF.drillCrack,
      updateEffP: 0.01,
    }),
  );
