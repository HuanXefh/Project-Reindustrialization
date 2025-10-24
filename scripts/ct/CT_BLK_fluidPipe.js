/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_fluidPipe");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0cond (liquid) ----------> */


  const bliq0cond_woodenLiquidPipe = extend(Conduit, "bliq0cond-wooden-liquid-pipe", TEMPLATE._std("liquid"));
  bliq0cond_woodenLiquidPipe.buildType = () => extend(Conduit.ConduitBuild, bliq0cond_woodenLiquidPipe, TEMPLATE._std_b());
  exports.bliq0cond_woodenLiquidPipe = bliq0cond_woodenLiquidPipe;


  const bliq0cond_bronzeLiquidPipe = extend(Conduit, "bliq0cond-bronze-liquid-pipe", TEMPLATE._std("liquid"));
  bliq0cond_bronzeLiquidPipe.buildType = () => extend(Conduit.ConduitBuild, bliq0cond_bronzeLiquidPipe, TEMPLATE._std_b());
  exports.bliq0cond_bronzeLiquidPipe = bliq0cond_bronzeLiquidPipe;


  const bliq0cond_leadLiquidPipe = extend(Conduit, "bliq0cond-lead-liquid-pipe", TEMPLATE._std("liquid"));
  bliq0cond_leadLiquidPipe.buildType = () => extend(Conduit.ConduitBuild, bliq0cond_leadLiquidPipe, TEMPLATE._std_b());
  exports.bliq0cond_leadLiquidPipe = bliq0cond_leadLiquidPipe;


  const bliq0cond_steelLiquidPipe = extend(ArmoredConduit, "bliq0cond-steel-liquid-pipe", TEMPLATE._std("liquid"));
  bliq0cond_steelLiquidPipe.buildType = () => extend(ArmoredConduit.ArmoredConduitBuild, bliq0cond_steelLiquidPipe, TEMPLATE._std_b());
  exports.bliq0cond_steelLiquidPipe = bliq0cond_steelLiquidPipe;


  /* <---------- bliq0cond (gas) ----------> */


  const bliq0cond_woodenGasPipe = extend(Conduit, "bliq0cond-wooden-gas-pipe", TEMPLATE._std("gas"));
  bliq0cond_woodenGasPipe.buildType = () => extend(Conduit.ConduitBuild, bliq0cond_woodenGasPipe, TEMPLATE._std_b());
  exports.bliq0cond_woodenGasPipe = bliq0cond_woodenGasPipe;


  const bliq0cond_bronzeGasPipe = extend(Conduit, "bliq0cond-bronze-gas-pipe", TEMPLATE._std("gas"));
  bliq0cond_bronzeGasPipe.buildType = () => extend(Conduit.ConduitBuild, bliq0cond_bronzeGasPipe, TEMPLATE._std_b());
  exports.bliq0cond_bronzeGasPipe = bliq0cond_bronzeGasPipe;


  const bliq0cond_steelGasPipe = extend(ArmoredConduit, "bliq0cond-steel-gas-pipe", TEMPLATE._std("gas"));
  bliq0cond_steelGasPipe.buildType = () => extend(ArmoredConduit.ArmoredConduitBuild, bliq0cond_steelGasPipe, TEMPLATE._std_b());
  exports.bliq0cond_steelGasPipe = bliq0cond_steelGasPipe;
