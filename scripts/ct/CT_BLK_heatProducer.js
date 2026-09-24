/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_heatProducer = require("lovec/temp/blk/BLK_heatProducer");
    const BLK_B_furnaceHeater = require("lovec/temp/blk/BLK_furnaceHeater");
    const BLK_B_electricHeater = require("lovec/temp/blk/BLK_electricHeater");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pow0heat ------------------------------> */


    const pow0heat_combustionHeater = extendBlock(
        BLK_B_furnaceHeater, "pow0heat-combustion-heater",
        BLK_B_furnaceHeater[0].build({
            heatProd: 800.0,
            fuelConsMtp: 0.5,
            heatWarmupRate: 0.0005,
        }),
    );


    const pow0heat_resistanceHeater = extendBlock(
        BLK_B_electricHeater, "pow0heat-resistance-heater",
        BLK_B_electricHeater[0].build({
            heatProd: 400.0,
            powConsBase: 0.5,
            powConsPerFuelLvl: 3.75,
            heatWarmupRate: 0.0005,
        }),
    );
