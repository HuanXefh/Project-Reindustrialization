/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_cogwheelStack");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_brassCogwheelStack1to3 = extend(Wall, "pow0tor-brass-cogwheel-stack-1to3", TEMPLATE._std(3, "projreind-pow0tor-brass-cogwheel", "projreind-pow0tor-large-brass-cogwheel"));
  pow0tor_brassCogwheelStack1to3.buildType = () => extend(Wall.WallBuild, pow0tor_brassCogwheelStack1to3, TEMPLATE._std_b());
  exports.pow0tor_brassCogwheelStack1to3 = pow0tor_brassCogwheelStack1to3;


  const pow0tor_brassCogwheelStack3to1 = extend(Wall, "pow0tor-brass-cogwheel-stack-3to1", TEMPLATE._std(1, "projreind-pow0tor-large-brass-cogwheel", "projreind-pow0tor-brass-cogwheel"));
  pow0tor_brassCogwheelStack3to1.buildType = () => extend(Wall.WallBuild, pow0tor_brassCogwheelStack3to1, TEMPLATE._std_b());
  exports.pow0tor_brassCogwheelStack3to1 = pow0tor_brassCogwheelStack3to1;
