/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_massDriver = require("lovec/temp/blk/BLK_massDriver");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dis0mdr ------------------------------> */


    const dis0mdr_localMassDriver = extendBlock(
        BLK_B_massDriver, "dis0mdr-local-mass-driver",
        BLK_B_massDriver[0].build({
            impactRad: 28.0,
            bulDmg: 150.0,
            bulW: 5.0,
            bulH: 8.0,
            bulParamObj: {
                trailLen: 4,
                trailW: 2.0,
                offSha: -8.0,
            },
            shootEff: GLB_eff.smogMassDriver,
            smokeEff: Fx.shootSmallSmoke,
        }),
    );


    const dis0mdr_standardMassDriver = extendBlock(
        BLK_B_massDriver, "dis0mdr-standard-mass-driver",
        BLK_B_massDriver[0].build({
            impactRad: 40.0,
            bulDmg: 450.0,
            bulW: 10.0,
            bulH: 14.0,
            bulParamObj: {
                trailLen: 10,
                trailW: 3.5,
                offSha: -14.0,
            },
            shootEff: GLB_eff.smogMassDriverLarge,
            smokeEff: Fx.shootBigSmoke,
        }),
    );
