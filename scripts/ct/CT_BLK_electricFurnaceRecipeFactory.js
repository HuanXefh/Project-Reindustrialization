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


  /* <---------- fac0heat ----------> */


  const fac0heat_resistanceHeater = extendBlock(
    TEMPLATE, "fac0heat-resistance-heater",
    TEMPLATE[0].build({
      powConsBase: 0.5,
      powConsPerFuelLvl: 1.25,
      maxOverheatScl: 0.66666667,
      fuelWarmupRate: 0.0002,
      rcMdl: "fac0heat-resistance-heater",
      rcSourceMod: "projreind",
    }),
  );
  exports.fac0heat_resistanceHeater = fac0heat_resistanceHeater;
