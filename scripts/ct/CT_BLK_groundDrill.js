/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_groundDrill");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0drl ----------> */


  const min0drl_survivorDrill = extendBlock(
    TEMPLATE, "min0drl-survivor-drill",
    TEMPLATE[0].build({
      durabCap: 2.0 * 60.0 * 60.0,
      drillEff: EFF.drillPulsePack[3],
      updateEff: EFF.drillCrack,
      updateEffP: 0.01,
    }),
  );


  const min0drl_primitiveBurnerDrill = extendBlock(
    TEMPLATE, "min0drl-primitive-burner-drill",
    TEMPLATE[0].build({
      useAccel: false,
      canMineDepthOre: true,
      depthTierMtp: 0.75,
      maxDepthLvl: 0,
      drillItmDur: 120.0,
      drillEff: TP_effect._gasEmission({
        scl: 3.0,
      }),
      updateEff: EFF.drillCrack,
      updateEffP: 0.01,
    }),
  );
  setConsumer(min0drl_primitiveBurnerDrill, conss => [
    conss,
    fetchConsumer("ConsumeItemEfficiencyMap", {
      itmEffcArr: [
        "loveclab-item0chem-peat", 0.5,
        "loveclab-item0chem-lignite", 0.5,
        "loveclab-item0ore-raw-coal", 0.5,
        "loveclab-item0bio-charcoal", 0.75,
        "loveclab-item0chem-coal", 0.75,
        "loveclab-item0chem-anthracite", 1.0,
        "loveclab-item0chem-semicoke", 1.0,
        "loveclab-item0chem-coke", 1.0,
      ],
    }),
  ]);


  const min0drl_progressClassDrill = extendBlock(
    TEMPLATE, "min0drl-progress-class-drill",
    TEMPLATE[0].build({
      drillEff: EFF.heatSmog,
      updateEff: EFF.drillCrack,
      updateEffP: 0.01,
    }),
  );
