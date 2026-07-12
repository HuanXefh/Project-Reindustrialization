/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_turbineFactory");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_manualTurbine");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_manualCrank = extendBlock(
    TEMPLATE_A, "pow0tor-manual-crank",
    TEMPLATE_A[0].build({
      manualTimerCap: 15.0 * 60.0,
    }),
  );


  const pow0tor_waterwheel = extendBlock(
    TEMPLATE, "pow0tor-waterwheel",
    TEMPLATE[0].build({
      ters: ["river"],
      isWaterborne: true,
    }),
  );
  setDrawer(pow0tor_waterwheel, drawers => [
    drawers,
    fetchDrawer("DrawEffect", {
      eff: TP_effect._circleWave({
        size_f: 2.0,
        rad: 10.0,
        scl: 3.5,
      }),
      effP: 0.01,
      rad: 8.0,
      colorGetterTup: [(b, x, y) => {
        let ot = Vars.world.tileWorld(x, y);
        return ot == null || !ot.floor().isLiquid ?
          Color.clear :
          Tmp.c1.set(ot.getFloorColor()).mul(1.5);
      }],
      z: VAR.layer.effFlr - 0.01,
    }),
  ]);


  const pow0tor_primitiveElectricMotor = extendBlock(
    TEMPLATE, "pow0tor-primitive-electric-motor",
  );


  /* <---------- pow0tor ----------> */


  const pow0tor_primitiveSteamTurbine = extendBlock(
    TEMPLATE, "pow0tor-primitive-steam-turbine",
  );
  setDrawer(pow0tor_primitiveSteamTurbine, drawers => [
    drawers,
    fetchDrawer("DrawEffect", {
      eff: TP_effect._gasEmission({
        size: 14.0,
        rad: 50.0,
        color: "d0d0d0",
        scl: 1.5,
      }),
      effP: 0.03,
    }),
  ]),
  setConsumer(pow0tor_primitiveSteamTurbine, conss => [
    conss,
    fetchConsumer("ConsumeLiquidEfficiencyMap", {
      amt: 0.25,
      liqEffcArr: [
        "loveclab-gas0int-steam-hp", 1.0,
        "loveclab-gas0int-steam-mp", 0.75,
        "loveclab-gas0int-steam-lp", 0.5,
      ],
    }),
  ]);
