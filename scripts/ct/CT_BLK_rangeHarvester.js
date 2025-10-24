/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_rangeHarvester");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0harv ----------> */


  const min0harv_mycelialHarvester = extend(AttributeCrafter, "min0harv-mycelial-harvester", TEMPLATE._std("blk", 5, null, EFF.harvesterParticle, 0.02));
  min0harv_mycelialHarvester.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, min0harv_mycelialHarvester, TEMPLATE._std_b(true));
  exports.min0harv_mycelialHarvester = min0harv_mycelialHarvester;
