/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_incinerator");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_itemIncinerator = extendBlock(
    TEMPLATE, "dis0aux-item-incinerator",
    TEMPLATE[0].build({
      craftEff: EFF.smogFurnace,
      updateEff: EFF.crackFurnace,
      updateEffP: 0.02,
    }),
  );


  /* <---------- bliq0aux ----------> */


  const bliq0aux_tailGasBurner = extendBlock(
    TEMPLATE, "bliq0aux-tail-gas-burner",
    TEMPLATE[0].build({
      hasExploIncineration: false,
      liqTgFilter: func(function(liq) {
        return liq.flammability > 0.0;
      }),
      fldType: "gas",
    }),
  );
