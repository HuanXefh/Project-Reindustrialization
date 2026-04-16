/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_rangeHarvester");


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
      attrMode: MDL_attr.AttrModes.BLOCK,
      updateEff: EFF.harvesterParticle,
      updateEffP: 0.02,
    }),
  );
