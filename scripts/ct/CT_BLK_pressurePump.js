/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_pressurePump = require("lovec/temp/blk/BLK_pressurePump");
    const BLK_B_pipePump = require("lovec/temp/blk/BLK_pipePump");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ bliq0pump ------------------------------> */


    const bliq0pump_pistonPressurePump = extendBlock(
        BLK_B_pressurePump, "bliq0pump-piston-pressure-pump",
        BLK_B_pressurePump[0].build({
            presProd: 0.05,
        }),
    );


    const bliq0pump_pistonVacuumPump = extendBlock(
        BLK_B_pressurePump, "bliq0pump-piston-vacuum-pump",
        BLK_B_pressurePump[0].build({
            presProd: -0.03333333,
        }),
    );


    const bliq0pump_pistonPipePump = extendBlock(
        BLK_B_pipePump, "bliq0pump-piston-pipe-pump",
        BLK_B_pipePump[0].build({
            pumpSize: 2,
            presProd: 0.01666667,
        }),
    );
