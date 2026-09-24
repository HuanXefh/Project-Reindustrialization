/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_container = require("lovec/temp/blk/BLK_container");
    const BLK_B_dumpContainer = require("lovec/temp/blk/BLK_dumpContainer");
    const BLK_B_coreRelay = require("lovec/temp/blk/BLK_coreRelay");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ eff0stor ------------------------------> */


    const eff0stor_stackingArea = extendBlock(
        BLK_B_container, "eff0stor-stacking-area",
        BLK_B_container[0].build({
            forceUseDrawer: true,
            recacheForItem: true,
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
        BLK_B_dumpContainer, "eff0stor-crate",
    );


    const eff0stor_remoteCoreRelay = extendBlock(
        BLK_B_coreRelay, "eff0stor-remote-core-relay",
        BLK_B_coreRelay[0].build({
            itemSendCooldown: 750.0,
        }),
    );
