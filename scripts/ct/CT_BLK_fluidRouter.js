/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_fluidRouter");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0stor ----------> */


  /* liquid */


  const bliq0stor_bronzeLiquidRouter = extend(LiquidRouter, "bliq0stor-bronze-liquid-router", TEMPLATE._std("liquid"));
  bliq0stor_bronzeLiquidRouter.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliq0stor_bronzeLiquidRouter, TEMPLATE._std_b());
  exports.bliq0stor_bronzeLiquidRouter = bliq0stor_bronzeLiquidRouter;


  const bliq0stor_steelLiquidTank = extend(LiquidRouter, "bliq0stor-steel-liquid-tank", TEMPLATE._std("liquid"));
  bliq0stor_steelLiquidTank.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliq0stor_steelLiquidTank, TEMPLATE._std_b());
  exports.bliq0stor_steelLiquidTank = bliq0stor_steelLiquidTank;


  /* gas */


  const bliq0stor_steelGasCylinder = extend(LiquidRouter, "bliq0stor-steel-gas-cylinder", TEMPLATE._std("gas"));
  bliq0stor_steelGasCylinder.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliq0stor_steelGasCylinder, TEMPLATE._std_b());
  exports.bliq0stor_steelGasCylinder = bliq0stor_steelGasCylinder;
