/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_remoteCoreUnloader");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_remoteCoreUnloader = extend(DirectionalUnloader, "dis0aux-remote-core-unloader", TEMPLATE._std());
  dis0aux_remoteCoreUnloader.buildType = () => extend(DirectionalUnloader.DirectionalUnloaderBuild, dis0aux_remoteCoreUnloader, TEMPLATE._std_b(true));
  exports.dis0aux_remoteCoreUnloader = dis0aux_remoteCoreUnloader;
