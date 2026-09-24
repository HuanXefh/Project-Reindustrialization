/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_turbineFactory = require("lovec/temp/blk/BLK_turbineFactory");
    const BLK_B_manualTurbine = require("lovec/temp/blk/BLK_manualTurbine");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pow0tor ------------------------------> */


    const pow0tor_manualCrank = extendBlock(
        BLK_B_manualTurbine, "pow0tor-manual-crank",
        BLK_B_manualTurbine[0].build({
            manualTimerCap: 15.0 * 60.0,
        }),
    );


    const pow0tor_waterwheel = extendBlock(
        BLK_B_turbineFactory, "pow0tor-waterwheel",
        BLK_B_turbineFactory[0].build({
            ters: ["river"],
            terMode: "enable",
            isWaterborne: true,
        }),
    );
    setDrawer(pow0tor_waterwheel, drawers => [
        drawers,
        extendSafe(LCDrawEffect, {
            effect: TP_effect.waveCircle({
                size_f: 2.0,
                rad: 10.0,
                scl: 3.5,
                z: VAR.layer.effFlr - 0.01,
            }),
            effectChance: 0.01,
            spread: 8.0,
            colorF: func3((b, x, y) => {
                let ot = Vars.world.tileWorld(x, y);
                return ot == null || !ot.floor().isLiquid ?
                    Color.clear :
                    Tmp.c1.set(ot.getFloorColor()).mul(1.5);
            }),
        }),
    ]);


    const pow0tor_primitiveElectricMotor = extendBlock(
        BLK_B_turbineFactory, "pow0tor-primitive-electric-motor",
    );


    /* <---------- pow0tor ----------> */


    const pow0tor_primitiveSteamTurbine = extendBlock(
        BLK_B_turbineFactory, "pow0tor-primitive-steam-turbine",
    );
    setDrawer(pow0tor_primitiveSteamTurbine, drawers => [
        drawers,
        extendSafe(LCDrawEffect, {
            effect: TP_effect.gasEmission({
                size: 14.0,
                rad: 50.0,
                color: "d0d0d0",
                scl: 1.5,
            }),
            effectChance: 0.03,
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
