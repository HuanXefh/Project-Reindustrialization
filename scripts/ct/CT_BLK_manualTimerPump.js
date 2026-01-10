/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_manualTimerPump");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- bliq0pump ----------> */


  const bliq0pump_portableManualPump = extendBlock(
    TEMPLATE, "bliq0pump-portable-manual-pump",
    TEMPLATE[0].build({
      manualTimerCap: 2.5 * 60.0 * 60.0,
      manualTimerClickInc: 180.0,
    }),
  );
