/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_terrainDynamicDrill");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0drl ----------> */


  const min0drl_topazClassSandMiner = extend(Drill, "min0drl-topaz-class-sand-miner", TEMPLATE._std(TEMPLATE.tempItms.sandItms, ObjectMap.of(
    "loveclab-item0ore-sand", ObjectMap.of(
      "bank", "loveclab-item0ore-sand-river",
      "beach", "loveclab-item0ore-sand-sea",
    ),
  ), EFF.heatSmog, 1.0, 0.0, EFF.drillCrack, 0.01));
  min0drl_topazClassSandMiner.buildType = () => extend(Drill.DrillBuild, min0drl_topazClassSandMiner, TEMPLATE._std_b(false));
  exports.min0drl_topazClassSandMiner = min0drl_topazClassSandMiner;
