/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_radiusMender");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0proj ----------> */


  const eff0proj_bayClassRepairer = extendBlock(
    TEMPLATE, "eff0proj-bay-class-repairer",
    TEMPLATE[0].build({
      bHealAmt: 10.0,
      bHealPerc: 0.125,
      unitHealAmt: 25.0,
      unitHealPerc: 0.025,
    }),
  );
  exports.eff0proj_bayClassRepairer = eff0proj_bayClassRepairer;
