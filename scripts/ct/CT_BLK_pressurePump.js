/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_pressurePump");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_pipePump");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_pistonPressurePump = extendBlock(
    TEMPLATE, "bliq0pump-piston-pressure-pump",
    TEMPLATE[0].build({
      presProd: 0.05,
    }),
  );


  const bliq0pump_pistonVacuumPump = extendBlock(
    TEMPLATE, "bliq0pump-piston-vacuum-pump",
    TEMPLATE[0].build({
      presProd: -0.03333333,
    }),
  );


  const bliq0pump_pistonPipePump = extendBlock(
    TEMPLATE_A, "bliq0pump-piston-pipe-pump",
    TEMPLATE_A[0].build({
      pumpSize: 2,
      presProd: 0.01666667,
    }),
  );
