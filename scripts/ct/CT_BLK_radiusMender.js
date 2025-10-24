/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_radiusMender");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0proj ----------> */


  const eff0proj_bayClassRepairer = extend(MendProjector, "eff0proj-bay-class-repairer", TEMPLATE._std());
  eff0proj_bayClassRepairer.buildType = () => extend(MendProjector.MendBuild, eff0proj_bayClassRepairer, TEMPLATE._std_b(false));
  exports.eff0proj_bayClassRepairer = eff0proj_bayClassRepairer;
