/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidPipe");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_armoredFluidPipe");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0cond ----------> */


  /* liquid */


  const bliq0cond_woodenLiquidPipe = extendBlock(
    TEMPLATE, "bliq0cond-wooden-liquid-pipe",
    TEMPLATE[0].build({
      fldTp: "liquid",
    }),
  );


  const bliq0cond_bronzeLiquidPipe = extendBlock(
    TEMPLATE, "bliq0cond-bronze-liquid-pipe",
    TEMPLATE[0].build({
      fldTp: "liquid",
      isShortCircuitPipe: true,
    }),
  );


  const bliq0cond_leadLiquidPipe = extendBlock(
    TEMPLATE, "bliq0cond-lead-liquid-pipe",
    TEMPLATE[0].build({
      fldTp: "liquid",
      isShortCircuitPipe: true,
    }),
  );


  const bliq0cond_steelLiquidPipe = extendBlock(
    TEMPLATE_A, "bliq0cond-steel-liquid-pipe",
    TEMPLATE_A[0].build({
      fldTp: "liquid",
      isShortCircuitPipe: true,
    }),
  );


  /* gas */


  const bliq0cond_woodenGasPipe = extendBlock(
    TEMPLATE, "bliq0cond-wooden-gas-pipe",
    TEMPLATE[0].build({
      fldTp: "gas",
    }),
  );


  const bliq0cond_bronzeGasPipe = extendBlock(
    TEMPLATE, "bliq0cond-bronze-gas-pipe",
    TEMPLATE[0].build({
      fldTp: "gas",
      isShortCircuitPipe: true,
    }),
  );


  const bliq0cond_steelGasPipe = extendBlock(
    TEMPLATE_A, "bliq0cond-steel-gas-pipe",
    TEMPLATE_A[0].build({
      fldTp: "gas",
      isShortCircuitPipe: true,
    }),
  );
