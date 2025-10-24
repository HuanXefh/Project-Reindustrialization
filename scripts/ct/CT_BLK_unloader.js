/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_unloader");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_primitiveUnloader = extend(Unloader, "dis0aux-primitive-unloader", TEMPLATE._std());
  dis0aux_primitiveUnloader.buildType = () => extend(Unloader.UnloaderBuild, dis0aux_primitiveUnloader, TEMPLATE._std_b());
  exports.dis0aux_primitiveUnloader = dis0aux_primitiveUnloader;
