/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_itemJunction = require("lovec/temp/blk/BLK_itemJunction");
    const BLK_B_router = require("lovec/temp/blk/BLK_router");
    const BLK_B_directionalRouter = require("lovec/temp/blk/BLK_directionalRouter");
    const BLK_B_filterGate = require("lovec/temp/blk/BLK_filterGate");
    const BLK_B_multiFilterGate = require("lovec/temp/blk/BLK_multiFilterGate");
    const BLK_B_overflowGate = require("lovec/temp/blk/BLK_overflowGate");
    const BLK_B_unloader = require("lovec/temp/blk/BLK_unloader");
    const BLK_B_directionalCoreUnloader = require("lovec/temp/blk/BLK_directionalUnloader");
    const BLK_B_remoteCoreUnloader = require("lovec/temp/blk/BLK_remoteCoreUnloader");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dis0aux ------------------------------> */


    const dis0aux_itemJunction = extendBlock(
        BLK_B_itemJunction, "dis0aux-item-junction",
    );


    const dis0aux_router = extendBlock(
        BLK_B_router, "dis0aux-router",
        BLK_B_router[0].build({
            forceUseDrawer: true,
            recacheForItem: true,
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
        BLK_B_directionalRouter, "dis0aux-primitive-directional-router",
    );


    const dis0aux_filterGate = extendBlock(
        BLK_B_filterGate, "dis0aux-filter-gate",
    );


    const dis0aux_multiFilterGate = extendBlock(
        BLK_B_multiFilterGate, "dis0aux-multi-filter-gate",
    );


    const dis0aux_intermediateFilterGate = extendBlock(
        BLK_B_filterGate, "dis0aux-intermediate-filter-gate",
        BLK_B_filterGate[0].build({
            filterScr: boolf3(function(b, b_f, item) {return MDL_cond.isIntermediate(item)}),
            hideSelection: true,
        }),
    );


    const dis0aux_wasteFilterGate = extendBlock(
        BLK_B_filterGate, "dis0aux-waste-filter-gate",
        BLK_B_filterGate[0].build({
            filterScr: boolf3(function(b, b_f, item) {return MDL_cond.isWaste(item)}),
            hideSelection: true,
        }),
    );


    const dis0aux_overflowGate = extendBlock(
        BLK_B_overflowGate, "dis0aux-overflow-gate",
    );


    const dis0aux_primitiveUnloader = extendBlock(
        BLK_B_unloader, "dis0aux-primitive-unloader",
    );


    const dis0aux_primitiveDirectionalUnloader = extendBlock(
        BLK_B_directionalCoreUnloader, "dis0aux-primitive-directional-unloader",
    );


    const dis0aux_primitiveCoreUnloader = extendBlock(
        BLK_B_remoteCoreUnloader, "dis0aux-primitive-core-unloader",
        BLK_B_remoteCoreUnloader[0].build({
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
        BLK_B_remoteCoreUnloader, "dis0aux-remote-core-unloader",
    );
