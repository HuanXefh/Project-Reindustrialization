/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_terrainDynamicDrill");
  const EFF = require("lovec/glb/GLB_eff");


  const DB_item = require("lovec/db/DB_item");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0drl ----------> */


  const min0drl_topazClassSandMiner = extendBlock(
    TEMPLATE, "min0drl-topaz-class-sand-miner",
    TEMPLATE[0].build({
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
  exports.min0drl_topazClassSandMiner = min0drl_topazClassSandMiner;
