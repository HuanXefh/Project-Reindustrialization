/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_incinerator = require("lovec/temp/blk/BLK_incinerator");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dis0aux ------------------------------> */


    const dis0aux_itemIncinerator = extendBlock(
        BLK_B_incinerator, "dis0aux-item-incinerator",
        BLK_B_incinerator[0].build({
            craftEff: EFF.smogFurnace,
            updateEff: EFF.crackFurnace,
            updateEffP: 0.02,
        }),
    );


    /* <------------------------------ bliq0aux ------------------------------> */


    const bliq0aux_tailGasBurner = extendBlock(
        BLK_B_incinerator, "bliq0aux-tail-gas-burner",
        BLK_B_incinerator[0].build({
            hasExploIncineration: false,
            liqTargetFilter: func(function(liq) {
                return liq.flammability > 0.0;
            }),
            fldType: "gas",
        }),
    );
