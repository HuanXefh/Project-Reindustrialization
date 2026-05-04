/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_electricFurnaceRecipeFactory");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0furn ----------> */


  const fac0furn_tubeFurnace = extendBlock(
    TEMPLATE, "fac0furn-tube-furnace",
    TEMPLATE[0].build({
      powConsBase: 1.33333333,
      powConsPerFuelLvl: 0.5,
      heatWarmupRate: 0.0005,
      heatA: 0.5,
      rcMdl: "fac0furn-tube-furnace",
      rcSourceMod: "projreind",
    }),
  );


  /* <---------- fac0proc ----------> */


  const fac0proc_briquettePress = extendBlock(
    TEMPLATE, "fac0proc-briquette-press",
    TEMPLATE[0].build({
      powConsBase: 0.41666667,
      powConsPerFuelLvl: 1.41666667,
      heatWarmupRate: 0.0003,
      heatA: 0.5,
      rcMdl: "fac0proc-briquette-press",
      rcSourceMod: "projreind",
    }),
  );
