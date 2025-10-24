/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_incinerator");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_itemIncinerator = extend(GenericCrafter, "dis0aux-item-incinerator", TEMPLATE._std(EFF.furnaceSmog, EFF.furnaceCrack, 0.02));
  dis0aux_itemIncinerator.buildType = () => extend(GenericCrafter.GenericCrafterBuild, dis0aux_itemIncinerator, TEMPLATE._std_b(null));
  exports.dis0aux_itemIncinerator = dis0aux_itemIncinerator;
