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
  exports.bliq0cond_woodenLiquidPipe = bliq0cond_woodenLiquidPipe;


  const bliq0cond_bronzeLiquidPipe = extendBlock(
    TEMPLATE, "bliq0cond-bronze-liquid-pipe",
    TEMPLATE[0].build({
      fldTp: "liquid",
      isShortCircuitPipe: true,
    }),
  );
  exports.bliq0cond_bronzeLiquidPipe = bliq0cond_bronzeLiquidPipe;


  const bliq0cond_leadLiquidPipe = extendBlock(
    TEMPLATE, "bliq0cond-lead-liquid-pipe",
    TEMPLATE[0].build({
      fldTp: "liquid",
      isShortCircuitPipe: true,
    }),
  );
  exports.bliq0cond_leadLiquidPipe = bliq0cond_leadLiquidPipe;


  const bliq0cond_steelLiquidPipe = extendBlock(
    TEMPLATE_A, "bliq0cond-steel-liquid-pipe",
    TEMPLATE_A[0].build({
      fldTp: "liquid",
      isShortCircuitPipe: true,
    }),
  );
  exports.bliq0cond_steelLiquidPipe = bliq0cond_steelLiquidPipe;


  /* gas */


  const bliq0cond_woodenGasPipe = extendBlock(
    TEMPLATE, "bliq0cond-wooden-gas-pipe",
    TEMPLATE[0].build({
      fldTp: "gas",
    }),
  );
  exports.bliq0cond_woodenGasPipe = bliq0cond_woodenGasPipe;


  const bliq0cond_bronzeGasPipe = extendBlock(
    TEMPLATE, "bliq0cond-bronze-gas-pipe",
    TEMPLATE[0].build({
      fldTp: "gas",
      isShortCircuitPipe: true,
    }),
  );
  exports.bliq0cond_bronzeGasPipe = bliq0cond_bronzeGasPipe;


  const bliq0cond_steelGasPipe = extendBlock(
    TEMPLATE_A, "bliq0cond-steel-gas-pipe",
    TEMPLATE_A[0].build({
      fldTp: "gas",
      isShortCircuitPipe: true,
    }),
  );
  exports.bliq0cond_steelGasPipe = bliq0cond_steelGasPipe;
