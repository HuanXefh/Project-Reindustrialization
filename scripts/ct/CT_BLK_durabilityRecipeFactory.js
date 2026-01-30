/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_durabilityRecipeFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0mill ----------> */


  const fac0mill_jawCrusher = extendBlock(
    TEMPLATE, "fac0mill-jaw-crusher",
    TEMPLATE[0].build({
      durabCap: 5.0 * 60.0 * 60.0,
      rcMdl: "fac0mill-jaw-crusher",
      rcSourceMod: "projreind",
    }),
  );


  const fac0mill_mechanicalMill = extendBlock(
    TEMPLATE, "fac0mill-mechanical-mill",
    TEMPLATE[0].build({
      durabCap: 3.0 * 60.0 * 60.0,
      rcMdl: "fac0mill-mechanical-mill",
      rcSourceMod: "projreind",
    }),
  );


  const fac0mill_ballMill = extendBlock(
    TEMPLATE, "fac0mill-ball-mill",
    TEMPLATE[0].build({
      durabCap: 7.5 * 60.0 * 60.0,
      rcMdl: "fac0mill-ball-mill",
      rcSourceMod: "projreind",
    }),
  );


  /* <---------- fac0mix ----------> */


  const fac0mix_vMixer = extendBlock(
    TEMPLATE, "fac0mix-v-mixer",
    TEMPLATE[0].build({
      durabCap: 8.0 * 60.0 * 60.0,
      rcMdl: "fac0mix-v-mixer",
      rcSourceMod: "projreind",
    }),
  );
