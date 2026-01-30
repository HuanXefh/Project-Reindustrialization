/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_boiler");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0boil ----------> */


  const pow0boil_primitiveBoiler = extendBlock(
    TEMPLATE, "pow0boil-primitive-boiler",
    TEMPLATE[0].build({
      exploRad: 48.0,
      exploDmg: 1200.0,
      exploShake: 6.0,
      exploFldTg: "loveclab-gas0int-steam-mp",
      presProd: 0.06666667,
      tempExtMtp: 0.25,
      furnHeatA: 0.5,
    }),
  );
  setDrawer(pow0boil_primitiveBoiler, drawers => [
    drawers,
    fetchDrawer("DrawEffect", {
      eff: TP_effect._gasEmission({
        color: "d0d0d0",
        scl: 1.8,
      }),
      effP: 0.03,
    }),
  ]);
