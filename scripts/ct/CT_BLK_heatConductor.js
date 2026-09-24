/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_heatConductor = require("lovec/temp/blk/BLK_heatConductor");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pow0heat ------------------------------> */


    const pow0heat_copperHeatConductorPlate = extendBlock(
        BLK_B_heatConductor, "pow0heat-copper-heat-conductor-plate",
        BLK_B_heatConductor[0].build({
            fullHeatThr: 800.0,
            heatWarmupRate: 0.006,
            heatCooldownRate: 0.012,
        }),
    );


    const pow0heat_castIronHeatConductorPlate = extendBlock(
        BLK_B_heatConductor, "pow0heat-cast-iron-heat-conductor-plate",
        BLK_B_heatConductor[0].build({
            fullHeatThr: 600.0,
            heatWarmupRate: 0.0008,
            heatCooldownRate: 0.0016,
        }),
    );
