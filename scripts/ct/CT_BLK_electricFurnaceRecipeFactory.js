/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_electricFurnaceRecipeFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0proc ----------> */


  const fac0proc_briquettePress = extendBlock(
    TEMPLATE, "fac0proc-briquette-press",
    TEMPLATE[0].build({
      powConsBase: 0.41666667,
      powConsPerFuelLvl: 1.41666667,
      fuelWarmupRate: 0.0003,
      furnHeatA: 0.5,
      rcMdl: "fac0proc-briquette-press",
      rcSourceMod: "projreind",
    }),
  );
