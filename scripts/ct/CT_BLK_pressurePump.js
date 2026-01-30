/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_pressurePump");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_pistonPressurePump = extendBlock(
    TEMPLATE, "bliq0pump-piston-pressure-pump",
    TEMPLATE[0].build({
      presProd: 0.03333333,
    }),
  );


  const bliq0pump_pistonVacuumPump = extendBlock(
    TEMPLATE, "bliq0pump-piston-vacuum-pump",
    TEMPLATE[0].build({
      presProd: -0.03333333,
    }),
  );
