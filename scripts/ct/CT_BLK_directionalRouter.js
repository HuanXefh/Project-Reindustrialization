/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_directionalRouter");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_primitiveDirectionalRouter = extend(DuctRouter, "dis0aux-primitive-directional-router", TEMPLATE._std());
  dis0aux_primitiveDirectionalRouter.buildType = () => extend(DuctRouter.DuctRouterBuild, dis0aux_primitiveDirectionalRouter, TEMPLATE._std_b());
  exports.dis0aux_primitiveDirectionalRouter = dis0aux_primitiveDirectionalRouter;
