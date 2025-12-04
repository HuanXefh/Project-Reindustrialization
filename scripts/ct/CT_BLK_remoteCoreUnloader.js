/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_remoteCoreUnloader");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_remoteCoreUnloader = extendBlock(
    TEMPLATE, "dis0aux-remote-core-unloader",
  );
  exports.dis0aux_remoteCoreUnloader = dis0aux_remoteCoreUnloader;
