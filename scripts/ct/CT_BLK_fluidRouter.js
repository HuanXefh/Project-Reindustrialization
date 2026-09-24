/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_fluidRouter = require("lovec/temp/blk/BLK_fluidRouter");
    const BLK_B_multiBlockFluidRouter = require("lovec/temp/blk/BLK_multiBlockFluidRouter");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ bliq0stor ------------------------------> */


    /* liquid */


    const bliq0stor_bronzeLiquidRouter = extendBlock(
        BLK_B_fluidRouter, "bliq0stor-bronze-liquid-router",
        BLK_B_fluidRouter[0].build({
            fldType: "liquid",
        }),
    );


    const bliq0stor_woodenBarrel = extendBlock(
        BLK_B_fluidRouter, "bliq0stor-wooden-barrel",
        BLK_B_fluidRouter[0].build({
            fldType: "liquid",
        }),
    );


    const bliq0stor_steelLiquidTank = extendBlock(
        BLK_B_fluidRouter, "bliq0stor-steel-liquid-tank",
        BLK_B_fluidRouter[0].build({
            fldType: "liquid",
        }),
    );


    const bliq0stor_concreteReservoir = extendBlock(
        BLK_B_multiBlockFluidRouter, "bliq0stor-concrete-reservoir",
        BLK_B_multiBlockFluidRouter[0].build({
            fldType: "liquid",
        }),
    );


    /* gas */


    const bliq0stor_steelGasCylinder = extendBlock(
        BLK_B_fluidRouter, "bliq0stor-steel-gas-cylinder",
        BLK_B_fluidRouter[0].build({
            fldType: "gas",
        }),
    );
