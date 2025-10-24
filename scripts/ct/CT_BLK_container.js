/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_container");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0stor ----------> */


  const eff0stor_crate = extend(StorageBlock, "eff0stor-crate", TEMPLATE._std());
  eff0stor_crate.buildType = () => extend(StorageBlock.StorageBuild, eff0stor_crate, TEMPLATE._std_b());
  exports.eff0stor_crate = eff0stor_crate;
