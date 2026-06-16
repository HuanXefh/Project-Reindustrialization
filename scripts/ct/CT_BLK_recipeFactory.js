/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_recipeFactory");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0air ----------> */


  const fac0air_airFilter = extendBlock(
    TEMPLATE, "fac0air-air-filter",
    TEMPLATE[0].build({
      rcMdl: "fac0air-air-filter",
      rcSourceMod: "projreind",
    }),
  );


  /* <---------- fac0heat ----------> */


  const fac0heat_primitiveHeatExchanger = extendBlock(
    TEMPLATE, "fac0heat-primitive-heat-exchanger",
    TEMPLATE[0].build({
      rcMdl: "fac0heat-primitive-heat-exchanger",
      rcSourceMod: "projreind",
    }),
  );


  const fac0heat_hotAirDryer = extendBlock(
    TEMPLATE, "fac0heat-hot-air-dryer",
    TEMPLATE[0].build({
      rcMdl: "fac0heat-hot-air-dryer",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  /* <---------- fac0proc ----------> */


  const fac0proc_coreCrafter = extendBlock(
    TEMPLATE, "fac0proc-core-crafter",
    TEMPLATE[0].build({
      rcMdl: "fac0proc-core-crafter",
      rcSourceMod: "projreind",
      craftEff: EFF.craftCrack,
    }),
  );


  const fac0proc_biomassCrusher = extendBlock(
    TEMPLATE, "fac0proc-biomass-crusher",
    TEMPLATE[0].build({
      rcMdl: "fac0proc-biomass-crusher",
      rcSourceMod: "projreind",
      updateEff: EFF.sawmillCrack,
      updateEffP: 0.02,
    }),
  );


  /* <---------- fac0sep ----------> */


  const fac0sep_cycloneSeparator = extendBlock(
    TEMPLATE, "fac0sep-cyclone-separator",
    TEMPLATE[0].build({
      rcMdl: "fac0sep-cyclone-separator",
      rcSourceMod: "projreind",
    }),
  );


  const fac0sep_oreWasher = extendBlock(
    TEMPLATE, "fac0sep-ore-washer",
    TEMPLATE[0].build({
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
    TEMPLATE, "fac0sep-hydrocyclone",
    TEMPLATE[0].build({
      rcMdl: "fac0sep-hydrocyclone",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  const fac0sep_vibrationScreen = extendBlock(
    TEMPLATE, "fac0sep-vibration-screen",
    TEMPLATE[0].build({
      rcMdl: "fac0sep-vibration-screen",
      rcSourceMod: "projreind",
    }),
  );


  const fac0sep_dryMagneticSeparator = extendBlock(
    TEMPLATE, "fac0sep-dry-magnetic-separator",
    TEMPLATE[0].build({
      rcMdl: "fac0sep-dry-magnetic-separator",
      rcSourceMod: "projreind",
      useAutoSelection: true,
    }),
  );


  /* <---------- fac0misc ----------> */


  const fac0misc_laboratory = extendBlock(
    TEMPLATE, "fac0misc-laboratory",
    TEMPLATE[0].build({
      rcMdl: "fac0misc-laboratory",
      rcSourceMod: "projreind",
    }),
  );
