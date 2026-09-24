/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_groundDrill = require("lovec/temp/blk/BLK_groundDrill");
    const BLK_B_impactDrill = require("lovec/temp/blk/BLK_impactDrill");
    const BLK_B_terrainDynamicDrill = require("lovec/temp/blk/BLK_terrainDynamicDrill");
    const BLK_B_wallDrill = require("lovec/temp/blk/BLK_wallDrill");
    const BLK_B_rangeWallDrill = require("lovec/temp/blk/BLK_rangeWallDrill");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ min0drl ------------------------------> */


    const min0drl_survivorDrill = extendBlock(
        BLK_B_groundDrill, "min0drl-survivor-drill",
        BLK_B_groundDrill[0].build({
            durabCap: 2.0 * 60.0 * 60.0,
            drillEff: EFF.pulseDrillPack[3],
            updateEff: EFF.crackDrill,
            updateEffP: 0.01,
        }),
    );


    const min0drl_primitiveBurnerDrill = extendBlock(
        BLK_B_groundDrill, "min0drl-primitive-burner-drill",
        BLK_B_groundDrill[0].build({
            useAccel: false,
            canMineDepthOre: true,
            depthTierMtp: 0.75,
            maxDepthLvl: 0,
            drillItemDur: 120.0,
            drillEff: TP_effect.gasEmission({
                scl: 3.0,
            }),
            updateEff: EFF.crackDrill,
            updateEffP: 0.01,
            consEff: Fx.ballfire,
        }),
    );
    setConsumer(min0drl_primitiveBurnerDrill, conss => [
        conss,
        fetchConsumer("ConsumeItemEfficiencyMap", {
            itemEffcArr: [
                "loveclab-item0chem-peat", 0.5,
                "loveclab-item0chem-lignite", 0.5,
                "loveclab-item0ore-raw-coal", 0.5,
                "loveclab-item0bio-charcoal", 0.75,
                "loveclab-item0chem-coal", 0.75,
                "loveclab-item0chem-anthracite", 1.0,
                "loveclab-item0chem-semicoke", 1.0,
                "loveclab-item0chem-coke", 1.0,
            ],
        }),
    ]);


    const min0drl_progressClassDrill = extendBlock(
        BLK_B_groundDrill, "min0drl-progress-class-drill",
        BLK_B_groundDrill[0].build({
            drillEff: EFF.smogHeat,
            updateEff: EFF.crackDrill,
            updateEffP: 0.01,
        }),
    );


    const min0drl_boulderClassImpactDrill = extendBlock(
        BLK_B_impactDrill, "min0drl-boulder-class-impact-drill",
        BLK_B_impactDrill[0].build({
            impactRad: 6.0 * Vars.tilesize,
            depthTierMtp: 0.5,
            maxDepthLvl: 1,
            drillAmtMtp: 2.0,
            drillEff: TP_effect.impactDrillCraft({
                blkSize: 2,
                rad: 6.0 * Vars.tilesize,
            }),
        }),
    );


    const min0drl_topazClassSandMiner = extendBlock(
        BLK_B_terrainDynamicDrill, "min0drl-topaz-class-sand-miner",
        BLK_B_terrainDynamicDrill[0].build({
            terItemMapMap: ObjectMap.of(
                "loveclab-item0ore-sand", ObjectMap.of(
                    "bank", "loveclab-item0ore-sand-river",
                    "beach", "loveclab-item0ore-sand-sea",
                ),
            ),
            itemWhitelist: DB_item.db["group"]["sand"],
            noSandOutput: false,
            drillEff: EFF.smogHeat,
            updateEff: EFF.crackDrill,
            updateEffP: 0.01,
        }),
    );


    const min0drl_pangolinClassWallDrill = extendBlock(
        BLK_B_wallDrill, "min0drl-pangolin-class-wall-drill",
    );


    const min0drl_anteaterClassWallDrill = extendBlock(
        BLK_B_wallDrill, "min0drl-anteater-class-wall-drill",
        BLK_B_wallDrill[0].build({
            shouldDropPay: true,
        }),
    );


    const min0drl_scavengerClassDepositDrill = extendBlock(
        BLK_B_rangeWallDrill, "min0drl-scavenger-class-deposit-drill",
    );
