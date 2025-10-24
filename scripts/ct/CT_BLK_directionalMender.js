/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_directionalMender");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0proj ----------> */


  const eff0proj_localRepairer = extend(MendProjector, "eff0proj-local-repairer", TEMPLATE._std());
  eff0proj_localRepairer.buildType = () => extend(MendProjector.MendBuild, eff0proj_localRepairer, TEMPLATE._std_b(false));
  exports.eff0proj_localRepairer = eff0proj_localRepairer;
