/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_rangeHarvester");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0harv ----------> */


  const min0harv_mycelialHarvester = extendBlock(
    TEMPLATE, "min0harv-mycelial-harvester",
    TEMPLATE[0].build({
      attrR: 5,
      attrMode: "block",
      updateEff: EFF.harvesterParticle,
      updateEffP: 0.02,
    }),
  );
