/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_heatConductor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0heat ----------> */


  const pow0heat_copperHeatConductorPlate = extendBlock(
    TEMPLATE, "pow0heat-copper-heat-conductor-plate",
    TEMPLATE[0].build({
      fullHeatThr: 800.0,
      heatWarmupRate: 0.006,
      heatCooldownRate: 0.015,
    }),
  );


  const pow0heat_castIronHeatConductorPlate = extendBlock(
    TEMPLATE, "pow0heat-cast-iron-heat-conductor-plate",
    TEMPLATE[0].build({
      fullHeatThr: 600.0,
      heatWarmupRate: 0.0004,
      heatCooldownRate: 0.0012,
    }),
  );
