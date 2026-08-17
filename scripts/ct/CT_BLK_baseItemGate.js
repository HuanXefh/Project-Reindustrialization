/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_itemJunction");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_router");
  const TEMPLATE_AA = require("lovec/temp/blk/BLK_directionalRouter");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_filterGate");
  const TEMPLATE_BA = require("lovec/temp/blk/BLK_multiFilterGate");
  const TEMPLATE_C = require("lovec/temp/blk/BLK_overflowGate");
  const TEMPLATE_D = require("lovec/temp/blk/BLK_unloader");
  const TEMPLATE_DA = require("lovec/temp/blk/BLK_directionalUnloader");
  const TEMPLATE_DB = require("lovec/temp/blk/BLK_remoteCoreUnloader");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_itemJunction = extendBlock(
    TEMPLATE, "dis0aux-item-junction",
  );


  const dis0aux_router = extendBlock(
    TEMPLATE_A, "dis0aux-router",
    TEMPLATE_A[0].build({
      forceUseDrawer: true,
      recacheForItm: true,
    }),
  );
  setDrawer(dis0aux_router, drawers => [
    drawers,
    extendSafe(LCDrawContent, {
      regScl: 0.5,
      contentF: func(b => b.delegee.lastRs),
    }),
  ]);


  const dis0aux_primitiveDirectionalRouter = extendBlock(
    TEMPLATE_AA, "dis0aux-primitive-directional-router",
  );


  const dis0aux_filterGate = extendBlock(
    TEMPLATE_B, "dis0aux-filter-gate",
  );


  const dis0aux_multiFilterGate = extendBlock(
    TEMPLATE_BA, "dis0aux-multi-filter-gate",
  );


  const dis0aux_intermediateFilterGate = extendBlock(
    TEMPLATE_B, "dis0aux-intermediate-filter-gate",
    TEMPLATE_B[0].build({
      filterScr: boolf3(function(b, b_f, itm) {return MDL_cond.isIntermediate(itm)}),
      hideSelection: true,
    }),
  );


  const dis0aux_wasteFilterGate = extendBlock(
    TEMPLATE_B, "dis0aux-waste-filter-gate",
    TEMPLATE_B[0].build({
      filterScr: boolf3(function(b, b_f, itm) {return MDL_cond.isWaste(itm)}),
      hideSelection: true,
    }),
  );


  const dis0aux_overflowGate = extendBlock(
    TEMPLATE_C, "dis0aux-overflow-gate",
  );


  const dis0aux_primitiveUnloader = extendBlock(
    TEMPLATE_D, "dis0aux-primitive-unloader",
  );


  const dis0aux_primitiveDirectionalUnloader = extendBlock(
    TEMPLATE_DA, "dis0aux-primitive-directional-unloader",
  );


  const dis0aux_primitiveCoreUnloader = extendBlock(
    TEMPLATE_DB, "dis0aux-primitive-core-unloader",
    TEMPLATE_DB[0].build({
      forceUseDrawer: true,
    }),
  );
  setDrawer(dis0aux_primitiveCoreUnloader, drawers => [
    new DrawRegion(),
    new DrawSideRegion(),
    extendSafe(LCDrawColorRegion, {
      suffix: "-center",
      colorF: func(b => b.unloadItem == null ? Color.clear : b.unloadItem.color),
    }),
  ]);


  const dis0aux_remoteCoreUnloader = extendBlock(
    TEMPLATE_DB, "dis0aux-remote-core-unloader",
  );
