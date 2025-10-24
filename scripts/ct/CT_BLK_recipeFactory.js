/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_recipeFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0air ----------> */


  const fac0air_airFilter = extend(GenericCrafter, "fac0air-air-filter", TEMPLATE._std("fac0air-air-filter", null, null, null));
  fac0air_airFilter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0air_airFilter, TEMPLATE._std_b(null, false, false));
  exports.fac0air_airFilter = fac0air_airFilter;


  /* <---------- fac0heat ----------> */


  const fac0air_primitiveHeatExchanger = extend(GenericCrafter, "fac0heat-primitive-heat-exchanger", TEMPLATE._std("fac0heat-primitive-heat-exchanger", null, null, null));
  fac0air_primitiveHeatExchanger.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0air_primitiveHeatExchanger, TEMPLATE._std_b(null, false, false));
  exports.fac0air_primitiveHeatExchanger = fac0air_primitiveHeatExchanger;


  /* <---------- fac0proc ----------> */


  const fac0proc_coreCrafter = extend(GenericCrafter, "fac0proc-core-crafter", TEMPLATE._std("fac0proc-core-crafter", EFF.craftCrack, null, null));
  fac0proc_coreCrafter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0proc_coreCrafter, TEMPLATE._std_b(null, true, false));
  exports.fac0proc_coreCrafter = fac0proc_coreCrafter;


  /* <---------- fac0sep ----------> */


  const fac0sep_cycloneSeparator = extend(GenericCrafter, "fac0sep-cyclone-separator", TEMPLATE._std("fac0sep-cyclone-separator", null, null, null));
  fac0sep_cycloneSeparator.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0sep_cycloneSeparator, TEMPLATE._std_b(null, false, false));
  exports.fac0sep_cycloneSeparator = fac0sep_cycloneSeparator;


  const fac0sep_vibrationScreen = extend(GenericCrafter, "fac0sep-vibration-screen", TEMPLATE._std("fac0sep-vibration-screen", null, null));
  fac0sep_vibrationScreen.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0sep_vibrationScreen, TEMPLATE._std_b(null, false, false));
  exports.fac0sep_vibrationScreen = fac0sep_vibrationScreen;


  const fac0sep_dryMagneticSeparator = extend(GenericCrafter, "fac0sep-dry-magnetic-separator", TEMPLATE._std("fac0sep-dry-magnetic-separator", null, null, null));
  fac0sep_dryMagneticSeparator.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0sep_dryMagneticSeparator, TEMPLATE._std_b(null, false, false));
  exports.fac0sep_dryMagneticSeparator = fac0sep_dryMagneticSeparator;
