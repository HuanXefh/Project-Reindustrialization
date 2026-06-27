/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_directionalMender");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_radiusMender");


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


  const eff0proj_bayClassRepairer = extendBlock(
    TEMPLATE_A, "eff0proj-bay-class-repairer",
    TEMPLATE_A[0].build({
      bHealAmt: 10.0,
      bHealPerc: 0.125,
      unitHealAmt: 25.0,
      unitHealPerc: 0.025,
    }),
  );
