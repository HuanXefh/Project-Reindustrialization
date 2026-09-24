/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_wallHarvester = require("lovec/temp/blk/BLK_wallHarvester");
    const BLK_B_dynamicWallHarvester = require("lovec/temp/blk/BLK_dynamicWallHarvester");
    const BLK_B_rangeHarvester = require("lovec/temp/blk/BLK_rangeHarvester");
    // TODO: Range dynamic harvester
    const BLK_B_holeAttributeFactory = require("lovec/temp/blk/BLK_holeAttributeFactory");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ min0harv ------------------------------> */


    const min0harv_lumberjack = extendBlock(
        BLK_B_wallHarvester, "min0harv-lumberjack",
        BLK_B_wallHarvester[0].build({
            updateEff: Fx.mineWallSmall,
            updateEffP: 0.02,
        }),
    );


    const min0harv_treeTap = extendBlock(
        BLK_B_dynamicWallHarvester, "min0harv-tree-tap",
        BLK_B_dynamicWallHarvester[0].build({
            attrRsArr: DB_item.db["map"]["attr"]["tree"],
            liqProdRate: 0.05,
        }),
    );


    const min0harv_forestHarvester = extendBlock(
        BLK_B_rangeHarvester, "min0harv-forest-harvester",
        BLK_B_rangeHarvester[0].build({
            attrR: 7,
            attrMode: AttrModes.BLOCK,
            updateEff: EFF.particleHarvester,
            updateEffP: 0.02,
        }),
    );


    const min0harv_chomperMk2 = extendBlock(
        BLK_B_holeAttributeFactory, "min0harv-chomper-mk2",
        BLK_B_holeAttributeFactory[0].build({
            tempTags: ["non-fac"],
            holeOffPon: new Point2(1, 1),
            holeSize: 1,
            attribute: TP_attr.attr0blk_hardTree,
            holeUpdateEff: Fx.mineWallSmall,
            holeUpdateEffP: 0.1,
        }),
    );


    const min0harv_mycelialHarvester = extendBlock(
        BLK_B_rangeHarvester, "min0harv-mycelial-harvester",
        BLK_B_rangeHarvester[0].build({
            attrR: 5,
            attrMode: AttrModes.BLOCK,
            updateEff: EFF.particleHarvester,
            updateEffP: 0.02,
        }),
    );


    const min0harv_algaeHarvester = extendBlock(
        BLK_B_rangeHarvester, "min0harv-algae-harvester",
        BLK_B_rangeHarvester[0].build({
            attrR: 6,
            attrMode: AttrModes.BLOCK,
            isWaterborne: true,
            updateEff: EFF.particleHarvester,
            updateEffP: 0.02,
        }),
    );
