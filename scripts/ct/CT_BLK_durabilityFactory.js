/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_durabilityFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0mill ----------> */


  const fac0mill_jawCrusher = extend(GenericCrafter, "fac0mill-jaw-crusher", TEMPLATE._std("fac0mill-jaw-crusher"));
  fac0mill_jawCrusher.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0mill_jawCrusher, TEMPLATE._std_b(null, false, false));
  exports.fac0mill_jawCrusher = fac0mill_jawCrusher;


  const fac0mill_mechanicalMill = extend(GenericCrafter, "fac0mill-mechanical-mill", TEMPLATE._std("fac0mill-mechanical-mill"));
  fac0mill_mechanicalMill.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0mill_mechanicalMill, TEMPLATE._std_b(null, false, false));
  exports.fac0mill_mechanicalMill = fac0mill_mechanicalMill;


  /* <---------- fac0mix ----------> */


  const fac0mix_vMixer = extend(GenericCrafter, "fac0mix-v-mixer", TEMPLATE._std("fac0mix-v-mixer"));
  fac0mix_vMixer.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0mix_vMixer, TEMPLATE._std_b(null, false, false));
  exports.fac0mix_vMixer = fac0mix_vMixer;
