/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_baseFactory");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_recipeFactory");
  const TEMPLATE_AA = require("lovec/temp/blk/BLK_furnaceRecipeFactory");
  const TEMPLATE_AB = require("lovec/temp/blk/BLK_electricFurnaceRecipeFactory");
  const TEMPLATE_AC = require("lovec/temp/blk/BLK_durabilityRecipeFactory");
  const TEMPLATE_AD = require("lovec/temp/blk/BLK_fluidRecipeFactory");
  const TEMPLATE_AE = require("lovec/temp/blk/BLK_chemicalReactor");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_infoFactory");
  const TEMPLATE_C = require("lovec/temp/blk/BLK_rainCollector");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0air ----------> */


  const fac0air_airCollector = extendBlock(
    TEMPLATE, "fac0air-air-collector",
    TEMPLATE[0].build({
      ters: ["sand"],
      terMode: "disable",
    }),
  );


  const fac0air_airFilter = extendBlock(
    TEMPLATE_A, "fac0air-air-filter",
    TEMPLATE_A[0].build({
      rcMdl: "fac0air-air-filter",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  /* <---------- fac0furn ----------> */


  const fac0furn_kiln = extendBlock(
    TEMPLATE_AA, "fac0furn-kiln",
    TEMPLATE_AA[0].build({
      blockedFuels: [
        "loveclab-item0chem-sulfur"
      ],
      rcMdl: "fac0furn-kiln",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );


  const fac0furn_primitiveSmelter = extendBlock(
    TEMPLATE_AA, "fac0furn-primitive-smelter",
    TEMPLATE_AA[0].build({
      fuelConsMtp: 0.25,
      rcMdl: "fac0furn-primitive-smelter",
      rcSourceMod: "projreind",
      disableDump: true,
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );


  const fac0furn_bloomery = extendBlock(
    TEMPLATE_AA, "fac0furn-bloomery",
    TEMPLATE_AA[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelConsMtp: 0.75,
      fuelLvlMtp: 1.4,
      rcMdl: "fac0furn-bloomery",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );


  const fac0furn_brickedBlastFurnace = extendBlock(
    TEMPLATE_AA, "fac0furn-bricked-blast-furnace",
    TEMPLATE_AA[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelConsMtp: 1.25,
      fuelLvlMtp: 1.3,
      rcMdl: "fac0furn-bricked-blast-furnace",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmogLarge,
      updateEff: EFF.furnaceCrackLarge,
      updateEffP: 0.01,
    }),
  );


  const fac0furn_primitiveCrucible = extendBlock(
    TEMPLATE_AA, "fac0furn-primitive-crucible",
    TEMPLATE_AA[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelLvlMtp: 1.35,
      heatWarmupRate: 0.0002,
      rcMdl: "fac0furn-primitive-crucible",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );


  const fac0furn_primitiveSinteringFurnace = extendBlock(
    TEMPLATE_AA, "fac0furn-primitive-sintering-furnace",
    TEMPLATE_AA[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelConsMtp: 0.75,
      fuelLvlMtp: 1.375,
      heatWarmupRate: 0.0003,
      rcMdl: "fac0furn-primitive-sintering-furnace",
      rcSourceMod: "projreind",
      useAutoSelection: true,
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );


  const fac0furn_primitiveCokeOven = extendBlock(
    TEMPLATE_AA, "fac0furn-primitive-coke-oven",
    TEMPLATE_AA[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      heatWarmupRate: 0.0002,
      rcMdl: "fac0furn-primitive-coke-oven",
      rcSourceMod: "projreind",
      useAutoSelection: true,
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );


  const fac0furn_cokeOvenBattery = extendBlock(
    TEMPLATE_AA, "fac0furn-coke-oven-battery",
    TEMPLATE_AA[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelConsMtp: 1.75,
      fuelLvlMtp: 1.4,
      heatWarmupRate: 0.0004,
      rcMdl: "fac0furn-coke-oven-battery",
      rcSourceMod: "projreind",
      useAutoSelection: true,
      craftEff: EFF.furnaceSmogLarge,
      updateEff: EFF.furnaceCrackLarge,
      updateEffP: 0.02,
    }),
  );


  const fac0furn_tubeFurnace = extendBlock(
    TEMPLATE_AB, "fac0furn-tube-furnace",
    TEMPLATE_AB[0].build({
      powConsBase: 1.33333333,
      powConsPerFuelLvl: 0.5,
      heatWarmupRate: 0.0005,
      heatA: 0.5,
      rcMdl: "fac0furn-tube-furnace",
      rcSourceMod: "projreind",
    }),
  );


  const fac0furn_combustionChamber = extendBlock(
    TEMPLATE_AD, "fac0furn-combustion-chamber",
    TEMPLATE_AD[0].build({
      rcMdl: "fac0furn-combustion-chamber",
      rcSourceMod: "projreind",
      inputDirs: [2],
    }),
  );


  /* <---------- fac0heat ----------> */


  const fac0heat_primitiveHeatExchanger = extendBlock(
    TEMPLATE_A, "fac0heat-primitive-heat-exchanger",
    TEMPLATE_A[0].build({
      rcMdl: "fac0heat-primitive-heat-exchanger",
      rcSourceMod: "projreind",
    }),
  );


  const fac0heat_meltCoolingChamber = extendBlock(
    TEMPLATE_AD, "fac0heat-melt-cooling-chamber",
    TEMPLATE_AD[0].build({
      rcMdl: "fac0heat-melt-cooling-chamber",
      rcSourceMod: "projreind",
    }),
  );


  const fac0heat_jetCondenser = extendBlock(
    TEMPLATE_AD, "fac0heat-jet-condenser",
    TEMPLATE_AD[0].build({
      rcMdl: "fac0heat-jet-condenser",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  const fac0heat_hotAirDryer = extendBlock(
    TEMPLATE_A, "fac0heat-hot-air-dryer",
    TEMPLATE_A[0].build({
      rcMdl: "fac0heat-hot-air-dryer",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  const fac0heat_primitiveFreezeDryer = extendBlock(
    TEMPLATE_AD, "fac0heat-primitive-freeze-dryer",
    TEMPLATE_AD[0].build({
      rcMdl: "fac0heat-primitive-freeze-dryer",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  /* <---------- fac0mill ----------> */


  const fac0mill_jawCrusher = extendBlock(
    TEMPLATE_AC, "fac0mill-jaw-crusher",
    TEMPLATE_AC[0].build({
      durabCap: 5.0 * 60.0 * 60.0,
      rcMdl: "fac0mill-jaw-crusher",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  const fac0mill_hammerCrusher = extendBlock(
    TEMPLATE_AC, "fac0mill-hammer-crusher",
    TEMPLATE_AC[0].build({
      durabCap: 5.0 * 60.0 * 60.0,
      rcMdl: "fac0mill-hammer-crusher",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  const fac0mill_mechanicalMill = extendBlock(
    TEMPLATE_AC, "fac0mill-mechanical-mill",
    TEMPLATE_AC[0].build({
      durabCap: 3.0 * 60.0 * 60.0,
      rcMdl: "fac0mill-mechanical-mill",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  const fac0mill_ballMill = extendBlock(
    TEMPLATE_AC, "fac0mill-ball-mill",
    TEMPLATE_AC[0].build({
      durabCap: 7.5 * 60.0 * 60.0,
      rcMdl: "fac0mill-ball-mill",
      rcSourceMod: "projreind",
    }),
  );


  /* <---------- fac0mix ----------> */


  const fac0mix_vMixer = extendBlock(
    TEMPLATE_AC, "fac0mix-v-mixer",
    TEMPLATE_AC[0].build({
      durabCap: 8.0 * 60.0 * 60.0,
      rcMdl: "fac0mix-v-mixer",
      rcSourceMod: "projreind",
    }),
  );


  const fac0mix_mechanicalMixingCauldron = extendBlock(
    TEMPLATE_AD, "fac0mix-mechanical-mixing-cauldron",
    TEMPLATE_AD[0].build({
      rcMdl: "fac0mix-mechanical-mixing-cauldron",
      rcSourceMod: "projreind",
    }),
  );
  setDrawer(fac0mix_mechanicalMixingCauldron, drawers => [
    drawers[0],
    fetchDrawer("DrawMixedLiquid"),
    fetchDrawer("DrawRipple", {
      rad: 5.0,
      size: 2.0,
      noLiqCheck: true,
    }),
    drawers[1],
    drawers[2],
  ]);


  /* <---------- fac0proc ----------> */


  const fac0proc_coreCrafter = extendBlock(
    TEMPLATE_A, "fac0proc-core-crafter",
    TEMPLATE_A[0].build({
      rcMdl: "fac0proc-core-crafter",
      rcSourceMod: "projreind",
      craftEff: EFF.craftCrack,
    }),
  );


  const fac0proc_sawmill = extendBlock(
    TEMPLATE, "fac0proc-sawmill",
    TEMPLATE[0].build({
      ters: ["sand"],
      terMode: "disable",
      updateEff: EFF.sawmillCrack,
      updateEffP: 0.02,
    }),
  );


  const fac0proc_biomassCrusher = extendBlock(
    TEMPLATE_A, "fac0proc-biomass-crusher",
    TEMPLATE_A[0].build({
      rcMdl: "fac0proc-biomass-crusher",
      rcSourceMod: "projreind",
      ters: ["sand"],
      terMode: "disable",
      updateEff: EFF.sawmillCrack,
      updateEffP: 0.02,
    }),
  );


  const fac0proc_briquettePress = extendBlock(
    TEMPLATE_AB, "fac0proc-briquette-press",
    TEMPLATE_AB[0].build({
      powConsBase: 0.41666667,
      powConsPerFuelLvl: 1.41666667,
      heatWarmupRate: 0.0003,
      heatA: 0.5,
      rcMdl: "fac0proc-briquette-press",
      rcSourceMod: "projreind",
    }),
  );


  const fac0proc_primitiveCaster = extendBlock(
    TEMPLATE_AA, "fac0proc-primitive-caster",
    TEMPLATE_AA[0].build({
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
    TEMPLATE_AA, "fac0proc-primitive-forge",
    TEMPLATE_AA[0].build({
      fuelConsMtp: 0.75,
      fuelLvlMtp: 1.35,
      heatWarmupRate: 0.0004,
      heatA: 0.5,
      rcMdl: "fac0proc-primitive-forge",
      rcSourceMod: "projreind",
      payAmtCap: 4,
    }),
  );


  /* <---------- fac0sep ----------> */


  const fac0sep_cycloneSeparator = extendBlock(
    TEMPLATE_A, "fac0sep-cyclone-separator",
    TEMPLATE_A[0].build({
      rcMdl: "fac0sep-cyclone-separator",
      rcSourceMod: "projreind",
    }),
  );


  const fac0sep_oreWasher = extendBlock(
    TEMPLATE_A, "fac0sep-ore-washer",
    TEMPLATE_A[0].build({
      rcMdl: "fac0sep-ore-washer",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );
  setDrawer(fac0sep_oreWasher, drawers => [
    drawers[0],
    fetchDrawer("DrawMixedLiquid"),
    fetchDrawer("DrawRipple", {
      rad: 4.5,
      size: 2.5,
      scl: 40.0,
      recur: 3.0
    }),
    drawers[1],
    drawers[2],
  ]);


  const fac0sep_hydrocyclone = extendBlock(
    TEMPLATE_A, "fac0sep-hydrocyclone",
    TEMPLATE_A[0].build({
      rcMdl: "fac0sep-hydrocyclone",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  const fac0sep_vibrationScreen = extendBlock(
    TEMPLATE_A, "fac0sep-vibration-screen",
    TEMPLATE_A[0].build({
      rcMdl: "fac0sep-vibration-screen",
      rcSourceMod: "projreind",
    }),
  );


  const fac0sep_dryMagneticSeparator = extendBlock(
    TEMPLATE_A, "fac0sep-dry-magnetic-separator",
    TEMPLATE_A[0].build({
      rcMdl: "fac0sep-dry-magnetic-separator",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  /* <---------- fac0misc ----------> */


  const fac0misc_laboratory = extendBlock(
    TEMPLATE_A, "fac0misc-laboratory",
    TEMPLATE_A[0].build({
      rcMdl: "fac0misc-laboratory",
      rcSourceMod: "projreind",
    }),
  );


  const fac0misc_rainCollector = extendBlock(
    TEMPLATE_C, "fac0misc-rain-collector",
    TEMPLATE_C[0].build({
      liqProdRate: 0.05,
      ters: ["sand"],
      terMode: "disable",
    }),
  );
  setDrawer(fac0misc_rainCollector, drawers => [
    drawers,
    fetchDrawer("DrawMixedLiquid"),
  ]);


  const fac0misc_pollutionDetectionCenter = extendBlock(
    TEMPLATE_B, "fac0misc-pollution-detection-center",
    TEMPLATE_B[0].build({
      infoGetterTup: [function(b) {
        return "${1}: ${2} ${3}".format(MDL_bundle._term("lovec", "pollution"), Strings.fixed(MDL_pollution._glbPol(), 2), fetchStatUnit("lovec", "polunits").localized());
      }],
    }),
  );
