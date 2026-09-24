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
            bulW: 4.0,
            bulH: 6.0,
            shootEff: EFF.smogMassDriver,
            smokeEff: Fx.shootSmallSmoke,
        }),
    );


    const dis0mdr_standardMassDriver = extendBlock(
        BLK_B_massDriver, "dis0mdr-standard-mass-driver",
        BLK_B_massDriver[0].build({
            impactRad: 40.0,
            bulDmg: 450.0,
            bulW: 8.0,
            bulH: 11.0,
            shootEff: EFF.smogMassDriverLarge,
            smokeEff: Fx.shootBigSmoke,
        }),
    );
