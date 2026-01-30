/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_massDriver");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0mdr ----------> */


  const dis0mdr_localMassDriver = extendBlock(
    TEMPLATE, "dis0mdr-local-mass-driver",
    TEMPLATE[0].build({
      impactRad: 28.0,
      bulDmg: 150.0,
      bulW: 4.0,
      bulH: 6.0,
      shootEff: EFF.massDriverSmog,
      smokeEff: Fx.shootSmallSmoke,
    }),
  );


  const dis0mdr_standardMassDriver = extendBlock(
    TEMPLATE, "dis0mdr-standard-mass-driver",
    TEMPLATE[0].build({
      impactRad: 40.0,
      bulDmg: 450.0,
      bulW: 8.0,
      bulH: 11.0,
      shootEff: EFF.massDriverSmogLarge,
      smokeEff: Fx.shootBigSmoke,
    }),
  );
