/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_directionalMender = require("lovec/temp/blk/BLK_directionalMender");
    const BLK_B_radiusMender = require("lovec/temp/blk/BLK_radiusMender");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ eff0proj ------------------------------> */


    const eff0proj_localRepairer = extendBlock(
        BLK_B_directionalMender, "eff0proj-local-repairer",
        BLK_B_directionalMender[0].build({
            bHealAmt: 5.0,
            bHealPerc: 0.08,
        }),
    );


    const eff0proj_bayClassRepairer = extendBlock(
        BLK_B_radiusMender, "eff0proj-bay-class-repairer",
        BLK_B_radiusMender[0].build({
            bHealAmt: 10.0,
            bHealPerc: 0.0625,
            unitHealAmt: 25.0,
            unitHealPerc: 0.025,
        }),
    );
