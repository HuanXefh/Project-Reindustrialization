/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_baseFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0turb ----------> */


  const pow0turb_primitiveSteamTurbine = extendBlock(
    TEMPLATE, "pow0turb-primitive-steam-turbine",
  );
  setConsumer(pow0turb_primitiveSteamTurbine, conss => [
    conss,
    fetchConsumer("ConsumeLiquidEfficiencyMap", {
      amt: 0.25,
      liqEffcMap: [
        "loveclab-gas0int-steam-hp", 1.0,
        "loveclab-gas0int-steam-mp", 0.75,
        "loveclab-gas0int-steam-lp", 0.5,
      ],
    }),
  ]);


  /* <---------- fac0proc ----------> */


  const fac0proc_sawmill = extendBlock(
    TEMPLATE, "fac0proc-sawmill",
    TEMPLATE[0].build({
      updateEff: EFF.sawmillCrack,
      updateEffP: 0.02,
    }),
  );
