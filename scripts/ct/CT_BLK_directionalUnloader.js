/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_directionalUnloader");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_primitiveDirectionalUnloader = extend(DirectionalUnloader, "dis0aux-primitive-directional-unloader", TEMPLATE._std());
  dis0aux_primitiveDirectionalUnloader.buildType = () => extend(DirectionalUnloader.DirectionalUnloaderBuild, dis0aux_primitiveDirectionalUnloader, TEMPLATE._std_b());
  exports.dis0aux_primitiveDirectionalUnloader = dis0aux_primitiveDirectionalUnloader;
