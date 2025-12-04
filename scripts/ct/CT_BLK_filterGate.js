/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_filterGate");


  const MDL_cond = require("lovec/mdl/MDL_cond");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_filterGate = extendBlock(
    TEMPLATE, "dis0aux-filter-gate",
  );
  exports.dis0aux_filterGate = dis0aux_filterGate;


  const dis0aux_intermediateFilterGate = extendBlock(
    TEMPLATE, "dis0aux-intermediate-filter-gate",
    TEMPLATE[0].build({
      filterScrTup: [(b, b_f, itm) => MDL_cond._isIntermediate(itm)],
      hideSelection: true,
    }),
  );
  exports.dis0aux_intermediateFilterGate = dis0aux_intermediateFilterGate;


  const dis0aux_wasteFilterGate = extendBlock(
    TEMPLATE, "dis0aux-waste-filter-gate",
    TEMPLATE[0].build({
      filterScrTup: [(b, b_f, itm) => MDL_cond._isWaste(itm)],
      hideSelection: true,
    }),
  );
  exports.dis0aux_wasteFilterGate = dis0aux_wasteFilterGate;
