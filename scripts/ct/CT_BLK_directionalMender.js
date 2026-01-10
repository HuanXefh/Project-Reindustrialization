/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_directionalMender");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0proj ----------> */


  const eff0proj_localRepairer = extendBlock(
    TEMPLATE, "eff0proj-local-repairer",
    TEMPLATE[0].build({
      bHealAmt: 5.0,
      bHealPerc: 0.08,
    }),
  );
