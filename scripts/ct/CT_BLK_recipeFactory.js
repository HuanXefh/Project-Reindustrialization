/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_recipeFactory");
  const EFF = require("lovec/glb/GLB_eff");


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
  exports.fac0air_airFilter = fac0air_airFilter;


  /* <---------- fac0heat ----------> */


  const fac0heat_primitiveHeatExchanger = extendBlock(
    TEMPLATE, "fac0heat-primitive-heat-exchanger",
    TEMPLATE[0].build({
      rcMdl: "fac0heat-primitive-heat-exchanger",
      rcSourceMod: "projreind",
    }),
  );
  exports.fac0heat_primitiveHeatExchanger = fac0heat_primitiveHeatExchanger;


  /* <---------- fac0proc ----------> */


  const fac0proc_coreCrafter = extendBlock(
    TEMPLATE, "fac0proc-core-crafter",
    TEMPLATE[0].build({
      rcMdl: "fac0proc-core-crafter",
      rcSourceMod: "projreind",
      craftEff: EFF.craftCrack,
    }),
  );
  exports.fac0proc_coreCrafter = fac0proc_coreCrafter;


  const fac0proc_biomassCrusher = extendBlock(
    TEMPLATE, "fac0proc-biomass-crusher",
    TEMPLATE[0].build({
      rcMdl: "fac0proc-biomass-crusher",
      rcSourceMod: "projreind",
      updateEff: EFF.sawmillCrack,
      updateEffP: 0.02,
    }),
  );
  exports.fac0proc_biomassCrusher = fac0proc_biomassCrusher;


  /* <---------- fac0sep ----------> */


  const fac0sep_cycloneSeparator = extendBlock(
    TEMPLATE, "fac0sep-cyclone-separator",
    TEMPLATE[0].build({
      rcMdl: "fac0sep-cyclone-separator",
      rcSourceMod: "projreind",
    }),
  );
  exports.fac0sep_cycloneSeparator = fac0sep_cycloneSeparator;


  const fac0sep_vibrationScreen = extendBlock(
    TEMPLATE, "fac0sep-vibration-screen",
    TEMPLATE[0].build({
      rcMdl: "fac0sep-vibration-screen",
      rcSourceMod: "projreind",
    }),
  );
  exports.fac0sep_vibrationScreen = fac0sep_vibrationScreen;


  const fac0sep_dryMagneticSeparator = extendBlock(
    TEMPLATE, "fac0sep-dry-magnetic-separator",
    TEMPLATE[0].build({
      rcMdl: "fac0sep-dry-magnetic-separator",
      rcSourceMod: "projreind",
    }),
  );
  exports.fac0sep_dryMagneticSeparator = fac0sep_dryMagneticSeparator;
