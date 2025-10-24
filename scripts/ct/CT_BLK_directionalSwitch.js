/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_directionalSwitch");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- log0aux ----------> */


  const log0aux_directionalSwitch = extend(SwitchBlock, "log0aux-directional-switch", TEMPLATE._std());
  log0aux_directionalSwitch.buildType = () => extend(SwitchBlock.SwitchBuild, log0aux_directionalSwitch, TEMPLATE._std_b());
  exports.log0aux_directionalSwitch = log0aux_directionalSwitch;
