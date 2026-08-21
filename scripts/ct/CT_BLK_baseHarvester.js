/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_wallHarvester");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_dynamicWallHarvester");
  // TODO: AA for range dynamic
  const TEMPLATE_B = require("lovec/temp/blk/BLK_rangeHarvester");
  const TEMPLATE_C = require("lovec/temp/blk/BLK_holeAttributeFactory");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0harv ----------> */


  const min0harv_lumberjack = extendBlock(
    TEMPLATE, "min0harv-lumberjack",
    TEMPLATE[0].build({
      updateEff: Fx.mineWallSmall,
      updateEffP: 0.02,
    }),
  );


  const min0harv_treeTap = extendBlock(
    TEMPLATE_A, "min0harv-tree-tap",
    TEMPLATE_A[0].build({
      attrRsArr: DB_item.db["map"]["attr"]["tree"],
      liqProdRate: 0.05,
    }),
  );


  const min0harv_forestHarvester = extendBlock(
    TEMPLATE_B, "min0harv-forest-harvester",
    TEMPLATE_B[0].build({
      attrR: 7,
      attrMode: AttrModes.BLOCK,
      updateEff: EFF.particleHarvester,
      updateEffP: 0.02,
    }),
  );


  const min0harv_chomperMk2 = extendBlock(
    TEMPLATE_C, "min0harv-chomper-mk2",
    TEMPLATE_C[0].build({
      tempTags: ["non-fac"],
      holeOffPon: new Point2(1, 1),
      holeSize: 1,
      attribute: TP_attr.attr0blk_hardTree,
      holeUpdateEff: Fx.mineWallSmall,
      holeUpdateEffP: 0.1,
    }),
  );


  const min0harv_mycelialHarvester = extendBlock(
    TEMPLATE_B, "min0harv-mycelial-harvester",
    TEMPLATE_B[0].build({
      attrR: 5,
      attrMode: AttrModes.BLOCK,
      updateEff: EFF.particleHarvester,
      updateEffP: 0.02,
    }),
  );


  const min0harv_algaeHarvester = extendBlock(
    TEMPLATE_B, "min0harv-algae-harvester",
    TEMPLATE_B[0].build({
      attrR: 6,
      attrMode: AttrModes.BLOCK,
      isWaterborne: true,
      updateEff: EFF.particleHarvester,
      updateEffP: 0.02,
    }),
  );
