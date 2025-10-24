/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_cogwheel");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0tor ----------> */


  const pow0tor_brassCogwheel = extend(Wall, "pow0tor-brass-cogwheel", TEMPLATE._std());
  pow0tor_brassCogwheel.buildType = () => extend(Wall.WallBuild, pow0tor_brassCogwheel, TEMPLATE._std_b());
  exports.pow0tor_brassCogwheel = pow0tor_brassCogwheel;


  const pow0tor_largeBrassCogwheel = extend(Wall, "pow0tor-large-brass-cogwheel", TEMPLATE._std());
  pow0tor_largeBrassCogwheel.buildType = () => extend(Wall.WallBuild, pow0tor_largeBrassCogwheel, TEMPLATE._std_b());
  exports.pow0tor_largeBrassCogwheel = pow0tor_largeBrassCogwheel;
