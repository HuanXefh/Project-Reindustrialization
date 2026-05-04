/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_baseFactory");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0proc ----------> */


  const fac0proc_sawmill = extendBlock(
    TEMPLATE, "fac0proc-sawmill",
    TEMPLATE[0].build({
      updateEff: EFF.sawmillCrack,
      updateEffP: 0.02,
    }),
  );
