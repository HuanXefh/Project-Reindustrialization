/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_heatProducer");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_furnaceHeater");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_electricHeater");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0heat ----------> */


  const pow0heat_combustionHeater = extendBlock(
    TEMPLATE_A, "pow0heat-combustion-heater",
    TEMPLATE_A[0].build({
      heatProd: 800.0,
      fuelConsMtp: 0.5,
      heatWarmupRate: 0.0005,
    }),
  );


  const pow0heat_resistanceHeater = extendBlock(
    TEMPLATE_B, "pow0heat-resistance-heater",
    TEMPLATE_B[0].build({
      heatProd: 400.0,
      powConsBase: 0.5,
      powConsPerFuelLvl: 3.75,
      heatWarmupRate: 0.0005,
    }),
  );
