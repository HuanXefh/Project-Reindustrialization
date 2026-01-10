/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_incinerator");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_itemIncinerator = extendBlock(
    TEMPLATE, "dis0aux-item-incinerator",
    TEMPLATE[0].build({
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.02,
    }),
  );
