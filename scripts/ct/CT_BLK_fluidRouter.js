/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidRouter");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0stor ----------> */


  /* liquid */


  const bliq0stor_bronzeLiquidRouter = extendBlock(
    TEMPLATE, "bliq0stor-bronze-liquid-router",
    TEMPLATE[0].build({
      fldTp: "liquid",
    }),
  );
  exports.bliq0stor_bronzeLiquidRouter = bliq0stor_bronzeLiquidRouter;


  const bliq0stor_steelLiquidTank = extendBlock(
    TEMPLATE, "bliq0stor-steel-liquid-tank",
    TEMPLATE[0].build({
      fldTp: "liquid",
    }),
  );
  exports.bliq0stor_steelLiquidTank = bliq0stor_steelLiquidTank;


  /* gas */


  const bliq0stor_steelGasCylinder = extendBlock(
    TEMPLATE, "bliq0stor-steel-gas-cylinder",
    TEMPLATE[0].build({
      fldTp: "gas",
    }),
  );
  exports.bliq0stor_steelGasCylinder = bliq0stor_steelGasCylinder;
