/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_groundDrill");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_impactDrill");
  const TEMPLATE_AA = require("lovec/temp/blk/BLK_terrainDynamicDrill");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_wallDrill");
  const TEMPLATE_BA = require("lovec/temp/blk/BLK_rangeWallDrill");


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


  const min0drl_boulderClassImpactDrill = extendBlock(
    TEMPLATE_A, "min0drl-boulder-class-impact-drill",
    TEMPLATE_A[0].build({
      impactRad: 6.0 * Vars.tilesize,
      depthTierMtp: 0.5,
      maxDepthLvl: 1,
      drillAmtMtp: 2.0,
      drillEff: TP_effect._impactDrillCraft({
        blkSize: 2,
        rad: 6.0 * Vars.tilesize,
      }),
    }),
  );


  const min0drl_topazClassSandMiner = extendBlock(
    TEMPLATE_AA, "min0drl-topaz-class-sand-miner",
    TEMPLATE_AA[0].build({
      terItmMapMap: ObjectMap.of(
        "loveclab-item0ore-sand", ObjectMap.of(
          "bank", "loveclab-item0ore-sand-river",
          "beach", "loveclab-item0ore-sand-sea",
        ),
      ),
      itmWhitelist: DB_item.db["group"]["sand"],
      noSandOutput: false,
      drillEff: EFF.heatSmog,
      updateEff: EFF.drillCrack,
      updateEffP: 0.01,
    }),
  );


  const min0drl_pangolinClassWallDrill = extendBlock(
    TEMPLATE_B, "min0drl-pangolin-class-wall-drill",
  );


  const min0drl_anteaterClassWallDrill = extendBlock(
    TEMPLATE_B, "min0drl-anteater-class-wall-drill",
    TEMPLATE_B[0].build({
      shouldDropPay: true,
    }),
  );


  const min0drl_scavengerClassDepositDrill = extendBlock(
    TEMPLATE_BA, "min0drl-scavenger-class-deposit-drill",
  );
