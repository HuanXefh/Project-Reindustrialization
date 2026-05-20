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


  const min0harv_forestHarvester = extendBlock(
    TEMPLATE, "min0harv-forest-harvester",
    TEMPLATE[0].build({
      attrR: 7,
      attrMode: AttrModes.BLOCK,
      updateEff: EFF.harvesterParticle,
      updateEffP: 0.02,
    }),
  );


  const min0harv_mycelialHarvester = extendBlock(
    TEMPLATE, "min0harv-mycelial-harvester",
    TEMPLATE[0].build({
      attrR: 5,
      attrMode: AttrModes.BLOCK,
      updateEff: EFF.harvesterParticle,
      updateEffP: 0.02,
    }),
  );


  const min0harv_algaeHarvester = extendBlock(
    TEMPLATE, "min0harv-algae-harvester",
    TEMPLATE[0].build({
      attrR: 6,
      attrMode: AttrModes.BLOCK,
      isWaterborne: true,
      updateEff: EFF.harvesterParticle,
      updateEffP: 0.02,
    }),
  );
