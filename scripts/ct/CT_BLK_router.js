/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_router");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_router = extend(Router, "dis0aux-router", TEMPLATE._std());
  dis0aux_router.buildType = () => extend(Router.RouterBuild, dis0aux_router, TEMPLATE._std_b());
  exports.dis0aux_router = dis0aux_router;
