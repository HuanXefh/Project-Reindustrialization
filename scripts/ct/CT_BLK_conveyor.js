/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_conveyor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0conv ----------> */


  const dis0conv_primitiveConveyor = extend(ArmoredConveyor, "dis0conv-primitive-conveyor", TEMPLATE._std());
  dis0conv_primitiveConveyor.buildType = () => extend(ArmoredConveyor.ArmoredConveyorBuild, dis0conv_primitiveConveyor, TEMPLATE._std_b());
  exports.dis0conv_primitiveConveyor = dis0conv_primitiveConveyor;


  const dis0conv_standardConveyor = extend(ArmoredConveyor, "dis0conv-standard-conveyor", TEMPLATE._std());
  dis0conv_standardConveyor.buildType = () => extend(ArmoredConveyor.ArmoredConveyorBuild, dis0conv_standardConveyor, TEMPLATE._std_b());
  exports.dis0conv_standardConveyor = dis0conv_standardConveyor;
