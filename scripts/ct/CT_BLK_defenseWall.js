/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_defenseWall");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pay0mat ----------> */


  const def0wall_woodenBarricade = extend(Wall, "def0wall-wooden-barricade", TEMPLATE._std());
  def0wall_woodenBarricade.buildType = () => extend(Wall.WallBuild, def0wall_woodenBarricade, TEMPLATE._std_b());
  exports.def0wall_woodenBarricade = def0wall_woodenBarricade;
