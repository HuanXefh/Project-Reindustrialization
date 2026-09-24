/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_baseFactory = require("lovec/temp/blk/BLK_baseFactory");
    const BLK_B_recipeFactory = require("lovec/temp/blk/BLK_recipeFactory");
    const BLK_B_furnaceRecipeFactory = require("lovec/temp/blk/BLK_furnaceRecipeFactory");
    const BLK_B_eletricFurnaceRecipeFactory = require("lovec/temp/blk/BLK_electricFurnaceRecipeFactory");
    const BLK_B_durabilityRecipeFactory = require("lovec/temp/blk/BLK_durabilityRecipeFactory");
    const BLK_B_fluidRecipeFactory = require("lovec/temp/blk/BLK_fluidRecipeFactory");
    const BLK_B_chemicalReactor = require("lovec/temp/blk/BLK_chemicalReactor");
    const BLK_B_infoFactory = require("lovec/temp/blk/BLK_infoFactory");
    const BLK_B_rainCollector = require("lovec/temp/blk/BLK_rainCollector");
    const BLK_B_multiBlockRecipeFactory = require("lovec/temp/blk/BLK_multiBlockRecipeFactory");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ fac0air ------------------------------> */


    const fac0air_airCollector = extendBlock(
        BLK_B_baseFactory, "fac0air-air-collector",
        BLK_B_baseFactory[0].build({
            ters: ["sand", "salt"],
            terMode: "disable",
        }),
    );


    const fac0air_airFilter = extendBlock(
        BLK_B_recipeFactory, "fac0air-air-filter",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0air-air-filter",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    /* <------------------------------ fac0bio ------------------------------> */


    const fac0bio_mossCultivator = extendBlock(
        BLK_B_baseFactory, "fac0bio-moss-cultivator",
    );


    /* <------------------------------ fac0furn ------------------------------> */


    const fac0furn_kiln = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0furn-kiln",
        BLK_B_furnaceRecipeFactory[0].build({
            blockedFuels: [
                "loveclab-item0chem-sulfur"
            ],
            heatWarmupRate: 0.0003,
            rcMdl: "fac0furn-kiln",
            rcSourceMod: "projreind",
            craftEff: EFF.smogFurnace,
            updateEff: EFF.crackFurnace,
            updateEffP: 0.01,
        }),
    );


    const fac0furn_primitiveSmelter = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0furn-primitive-smelter",
        BLK_B_furnaceRecipeFactory[0].build({
            fuelConsMtp: 0.25,
            heatWarmupRate: 0.001,
            rcMdl: "fac0furn-primitive-smelter",
            rcSourceMod: "projreind",
            disableDump: true,
            craftEff: EFF.smogFurnace,
            updateEff: EFF.crackFurnace,
            updateEffP: 0.01,
        }),
    );


    const fac0furn_bloomery = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0furn-bloomery",
        BLK_B_furnaceRecipeFactory[0].build({
            blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
            fuelConsMtp: 0.75,
            fuelLvlMtp: 1.4,
            heatWarmupRate: 0.0002,
            rcMdl: "fac0furn-bloomery",
            rcSourceMod: "projreind",
            craftEff: EFF.smogFurnace,
            updateEff: EFF.crackFurnace,
            updateEffP: 0.01,
        }),
    );


    const fac0furn_brickedBlastFurnace = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0furn-bricked-blast-furnace",
        BLK_B_furnaceRecipeFactory[0].build({
            blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
            fuelConsMtp: 1.25,
            fuelLvlMtp: 1.3,
            heatWarmupRate: 0.0001,
            rcMdl: "fac0furn-bricked-blast-furnace",
            rcSourceMod: "projreind",
            craftEff: EFF.smogFurnaceLarge,
            updateEff: EFF.crackFurnaceLarge,
            updateEffP: 0.01,
        }),
    );


    const fac0furn_primitiveCrucible = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0furn-primitive-crucible",
        BLK_B_furnaceRecipeFactory[0].build({
            blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
            fuelLvlMtp: 1.35,
            heatWarmupRate: 0.0002,
            rcMdl: "fac0furn-primitive-crucible",
            rcSourceMod: "projreind",
            craftEff: EFF.smogFurnace,
            updateEff: EFF.crackFurnace,
            updateEffP: 0.01,
        }),
    );


    const fac0furn_primitiveSinteringFurnace = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0furn-primitive-sintering-furnace",
        BLK_B_furnaceRecipeFactory[0].build({
            blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
            fuelConsMtp: 0.75,
            fuelLvlMtp: 1.375,
            heatWarmupRate: 0.0003,
            rcMdl: "fac0furn-primitive-sintering-furnace",
            rcSourceMod: "projreind",
            useAutoSelection: true,
            craftEff: EFF.smogFurnace,
            updateEff: EFF.crackFurnace,
            updateEffP: 0.01,
        }),
    );


    const fac0furn_primitiveCokeOven = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0furn-primitive-coke-oven",
        BLK_B_furnaceRecipeFactory[0].build({
            blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
            heatWarmupRate: 0.0002,
            rcMdl: "fac0furn-primitive-coke-oven",
            rcSourceMod: "projreind",
            useAutoSelection: true,
            craftEff: EFF.smogFurnace,
            updateEff: EFF.crackFurnace,
            updateEffP: 0.01,
        }),
    );


    const fac0furn_cokeOvenBattery = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0furn-coke-oven-battery",
        BLK_B_furnaceRecipeFactory[0].build({
            blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
            fuelConsMtp: 1.75,
            fuelLvlMtp: 1.4,
            heatWarmupRate: 0.0004,
            rcMdl: "fac0furn-coke-oven-battery",
            rcSourceMod: "projreind",
            useAutoSelection: true,
            craftEff: EFF.smogFurnaceLarge,
            updateEff: EFF.crackFurnaceLarge,
            updateEffP: 0.02,
        }),
    );


    const fac0furn_tubeFurnace = extendBlock(
        BLK_B_eletricFurnaceRecipeFactory, "fac0furn-tube-furnace",
        BLK_B_eletricFurnaceRecipeFactory[0].build({
            powConsBase: 1.33333333,
            powConsPerFuelLvl: 0.5,
            heatWarmupRate: 0.0005,
            heatA: 0.5,
            rcMdl: "fac0furn-tube-furnace",
            rcSourceMod: "projreind",
        }),
    );


    const fac0furn_combustionChamber = extendBlock(
        BLK_B_fluidRecipeFactory, "fac0furn-combustion-chamber",
        BLK_B_fluidRecipeFactory[0].build({
            rcMdl: "fac0furn-combustion-chamber",
            rcSourceMod: "projreind",
            inputDirs: [2],
        }),
    );


    /* <------------------------------ fac0heat ------------------------------> */


    const fac0heat_primitiveHeatExchanger = extendBlock(
        BLK_B_recipeFactory, "fac0heat-primitive-heat-exchanger",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0heat-primitive-heat-exchanger",
            rcSourceMod: "projreind",
        }),
    );


    const fac0heat_meltCoolingChamber = extendBlock(
        BLK_B_fluidRecipeFactory, "fac0heat-melt-cooling-chamber",
        BLK_B_fluidRecipeFactory[0].build({
            rcMdl: "fac0heat-melt-cooling-chamber",
            rcSourceMod: "projreind",
        }),
    );


    const fac0heat_jetCondenser = extendBlock(
        BLK_B_fluidRecipeFactory, "fac0heat-jet-condenser",
        BLK_B_fluidRecipeFactory[0].build({
            rcMdl: "fac0heat-jet-condenser",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    const fac0heat_hotAirDryer = extendBlock(
        BLK_B_recipeFactory, "fac0heat-hot-air-dryer",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0heat-hot-air-dryer",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    const fac0heat_primitiveFreezeDryer = extendBlock(
        BLK_B_fluidRecipeFactory, "fac0heat-primitive-freeze-dryer",
        BLK_B_fluidRecipeFactory[0].build({
            rcMdl: "fac0heat-primitive-freeze-dryer",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    /* <------------------------------ fac0mill ------------------------------> */


    const fac0mill_jawCrusher = extendBlock(
        BLK_B_durabilityRecipeFactory, "fac0mill-jaw-crusher",
        BLK_B_durabilityRecipeFactory[0].build({
            durabCap: 5.0 * 60.0 * 60.0,
            rcMdl: "fac0mill-jaw-crusher",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    const fac0mill_hammerCrusher = extendBlock(
        BLK_B_durabilityRecipeFactory, "fac0mill-hammer-crusher",
        BLK_B_durabilityRecipeFactory[0].build({
            durabCap: 5.0 * 60.0 * 60.0,
            rcMdl: "fac0mill-hammer-crusher",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    const fac0mill_mechanicalMill = extendBlock(
        BLK_B_durabilityRecipeFactory, "fac0mill-mechanical-mill",
        BLK_B_durabilityRecipeFactory[0].build({
            durabCap: 3.0 * 60.0 * 60.0,
            rcMdl: "fac0mill-mechanical-mill",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    const fac0mill_ballMill = extendBlock(
        BLK_B_durabilityRecipeFactory, "fac0mill-ball-mill",
        BLK_B_durabilityRecipeFactory[0].build({
            durabCap: 7.5 * 60.0 * 60.0,
            rcMdl: "fac0mill-ball-mill",
            rcSourceMod: "projreind",
        }),
    );


    /* <------------------------------ fac0mix ------------------------------> */


    const fac0mix_vMixer = extendBlock(
        BLK_B_durabilityRecipeFactory, "fac0mix-v-mixer",
        BLK_B_durabilityRecipeFactory[0].build({
            durabCap: 8.0 * 60.0 * 60.0,
            rcMdl: "fac0mix-v-mixer",
            rcSourceMod: "projreind",
        }),
    );


    const fac0mix_mechanicalMixingCauldron = extendBlock(
        BLK_B_fluidRecipeFactory, "fac0mix-mechanical-mixing-cauldron",
        BLK_B_fluidRecipeFactory[0].build({
            rcMdl: "fac0mix-mechanical-mixing-cauldron",
            rcSourceMod: "projreind",
        }),
    );


    /* <------------------------------ fac0proc ------------------------------> */


    const fac0proc_coreCrafter = extendBlock(
        BLK_B_recipeFactory, "fac0proc-core-crafter",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0proc-core-crafter",
            rcSourceMod: "projreind",
            craftEff: EFF.crackCraft,
        }),
    );


    const fac0proc_mechanicalAssembler = extendBlock(
        BLK_B_multiBlockRecipeFactory, "fac0proc-mechanical-assembler",
        BLK_B_multiBlockRecipeFactory[0].build({
            rcMdl: "fac0proc-mechanical-assembler",
            rcSourceMod: "projreind",
        }),
    );


    const fac0proc_sawmill = extendBlock(
        BLK_B_baseFactory, "fac0proc-sawmill",
        BLK_B_baseFactory[0].build({
            ters: ["sand", "salt"],
            terMode: "disable",
            updateEff: EFF.crackSawmill,
            updateEffP: 0.02,
        }),
    );


    const fac0proc_biomassCrusher = extendBlock(
        BLK_B_recipeFactory, "fac0proc-biomass-crusher",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0proc-biomass-crusher",
            rcSourceMod: "projreind",
            ters: ["sand", "salt"],
            terMode: "disable",
            updateEff: EFF.crackSawmill,
            updateEffP: 0.02,
        }),
    );


    const fac0proc_plantDecorticator = extendBlock(
        BLK_B_recipeFactory, "fac0proc-plant-decorticator",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0proc-plant-decorticator",
            rcSourceMod: "projreind",
            useAutoSelection: true,
            ters: ["sand", "salt"],
            terMode: "disable",
            updateEff: EFF.crackSawmill,
            updateEffP: 0.02,
        }),
    );


    const fac0proc_briquettePress = extendBlock(
        BLK_B_eletricFurnaceRecipeFactory, "fac0proc-briquette-press",
        BLK_B_eletricFurnaceRecipeFactory[0].build({
            powConsBase: 0.41666667,
            powConsPerFuelLvl: 1.41666667,
            heatWarmupRate: 0.0003,
            heatA: 0.5,
            rcMdl: "fac0proc-briquette-press",
            rcSourceMod: "projreind",
        }),
    );


    const fac0proc_primitiveCaster = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0proc-primitive-caster",
        BLK_B_furnaceRecipeFactory[0].build({
            fuelConsMtp: 0.75,
            fuelLvlMtp: 1.35,
            heatWarmupRate: 0.0004,
            heatA: 0.5,
            rcMdl: "fac0proc-primitive-caster",
            rcSourceMod: "projreind",
            payAmtCap: 4,
        }),
    );


    const fac0proc_primitiveForge = extendBlock(
        BLK_B_furnaceRecipeFactory, "fac0proc-primitive-forge",
        BLK_B_furnaceRecipeFactory[0].build({
            fuelConsMtp: 0.75,
            fuelLvlMtp: 1.35,
            heatWarmupRate: 0.0004,
            heatA: 0.5,
            rcMdl: "fac0proc-primitive-forge",
            rcSourceMod: "projreind",
            payAmtCap: 4,
        }),
    );


    /* <------------------------------ fac0sep ------------------------------> */


    const fac0sep_cycloneSeparator = extendBlock(
        BLK_B_recipeFactory, "fac0sep-cyclone-separator",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0sep-cyclone-separator",
            rcSourceMod: "projreind",
        }),
    );


    const fac0sep_oreWasher = extendBlock(
        BLK_B_recipeFactory, "fac0sep-ore-washer",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0sep-ore-washer",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    const fac0sep_hydrocyclone = extendBlock(
        BLK_B_recipeFactory, "fac0sep-hydrocyclone",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0sep-hydrocyclone",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    const fac0sep_vibrationScreen = extendBlock(
        BLK_B_recipeFactory, "fac0sep-vibration-screen",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0sep-vibration-screen",
            rcSourceMod: "projreind",
        }),
    );


    const fac0sep_dryMagneticSeparator = extendBlock(
        BLK_B_recipeFactory, "fac0sep-dry-magnetic-separator",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0sep-dry-magnetic-separator",
            rcSourceMod: "projreind",
            useAutoSelection: true,
        }),
    );


    /* <------------------------------ fac0misc ------------------------------> */


    const fac0misc_laboratory = extendBlock(
        BLK_B_recipeFactory, "fac0misc-laboratory",
        BLK_B_recipeFactory[0].build({
            rcMdl: "fac0misc-laboratory",
            rcSourceMod: "projreind",
        }),
    );


    const fac0misc_rainCollector = extendBlock(
        BLK_B_rainCollector, "fac0misc-rain-collector",
        BLK_B_rainCollector[0].build({
            liqProdRate: 0.05,
            ters: ["sand", "salt", "beach", "sea"],
            terMode: "disable",
        }),
    );


    const fac0misc_pollutionDetectionCenter = extendBlock(
        BLK_B_infoFactory, "fac0misc-pollution-detection-center",
        BLK_B_infoFactory[0].build({
            infoF: func(function(b) {
                return "${1}: ${2} ${3}".format(MDL_bundle.getTerm("lovec", "pollution"), Strings.fixed(MDL_pollution.getGlbPol(), 2), fetchStatUnit("lovec", "polunits").localized());
            }),
        }),
    );
