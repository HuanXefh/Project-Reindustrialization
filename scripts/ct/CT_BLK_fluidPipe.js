/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_fluidPipe = require("lovec/temp/blk/BLK_fluidPipe");
    const BLK_B_armoredFluidPipe = require("lovec/temp/blk/BLK_armoredFluidPipe");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ bliq0cond ------------------------------> */


    /* liquid */


    const bliq0cond_woodenLiquidPipe = extendBlock(
        BLK_B_fluidPipe, "bliq0cond-wooden-liquid-pipe",
        BLK_B_fluidPipe[0].build({
            fldType: "liquid",
        }),
    );


    const bliq0cond_bronzeLiquidPipe = extendBlock(
        BLK_B_fluidPipe, "bliq0cond-bronze-liquid-pipe",
        BLK_B_fluidPipe[0].build({
            fldType: "liquid",
            isShortCircuitPipe: true,
        }),
    );


    const bliq0cond_leadLiquidPipe = extendBlock(
        BLK_B_fluidPipe, "bliq0cond-lead-liquid-pipe",
        BLK_B_fluidPipe[0].build({
            fldType: "liquid",
            isShortCircuitPipe: true,
        }),
    );


    const bliq0cond_castIronLiquidPipe = extendBlock(
        BLK_B_armoredFluidPipe, "bliq0cond-cast-iron-liquid-pipe",
        BLK_B_armoredFluidPipe[0].build({
            fldType: "liquid",
            isShortCircuitPipe: true,
        }),
    );


    const bliq0cond_steelLiquidPipe = extendBlock(
        BLK_B_armoredFluidPipe, "bliq0cond-steel-liquid-pipe",
        BLK_B_armoredFluidPipe[0].build({
            fldType: "liquid",
            isShortCircuitPipe: true,
        }),
    );


    /* gas */


    const bliq0cond_woodenGasPipe = extendBlock(
        BLK_B_fluidPipe, "bliq0cond-wooden-gas-pipe",
        BLK_B_fluidPipe[0].build({
            fldType: "gas",
        }),
    );


    const bliq0cond_bronzeGasPipe = extendBlock(
        BLK_B_fluidPipe, "bliq0cond-bronze-gas-pipe",
        BLK_B_fluidPipe[0].build({
            fldType: "gas",
            isShortCircuitPipe: true,
        }),
    );


    const bliq0cond_castIronGasPipe = extendBlock(
        BLK_B_armoredFluidPipe, "bliq0cond-cast-iron-gas-pipe",
        BLK_B_armoredFluidPipe[0].build({
            fldType: "gas",
            isShortCircuitPipe: true,
        }),
    );


    const bliq0cond_steelGasPipe = extendBlock(
        BLK_B_armoredFluidPipe, "bliq0cond-steel-gas-pipe",
        BLK_B_armoredFluidPipe[0].build({
            fldType: "gas",
            isShortCircuitPipe: true,
        }),
    );
