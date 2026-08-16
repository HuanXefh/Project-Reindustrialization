/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_container");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_dumpContainer");
  const TEMPLATE_B = require("lovec/temp/blk/BLK_coreRelay");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0stor ----------> */


  const eff0stor_stackingArea = extendBlock(
    TEMPLATE, "eff0stor-stacking-area",
    TEMPLATE[0].build({
      forceUseDrawer: true,
      recacheForItm: true,
      singleTypeOnly: true,
    }),
  );
  setDrawer(eff0stor_stackingArea, drawers => [
    drawers,
    extendSafe(LCDrawItemPile, {
      radius: 10.0,
      itemF: func(b => b.items.first()),
      amount: 30,
    }),
  ]);


  const eff0stor_crate = extendBlock(
    TEMPLATE_A, "eff0stor-crate",
  );


  const eff0stor_remoteCoreRelay = extendBlock(
    TEMPLATE_B, "eff0stor-remote-core-relay",
    TEMPLATE_B[0].build({
      itmSendCooldown: 750.0,
    }),
  );
