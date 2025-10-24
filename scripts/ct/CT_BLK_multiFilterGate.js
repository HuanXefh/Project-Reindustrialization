/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_multiFilterGate");


  const MDL_cond = require("lovec/mdl/MDL_cond");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_multiFilterGate = extend(Sorter, "dis0aux-multi-filter-gate", TEMPLATE._std());
  dis0aux_multiFilterGate.buildType = () => extend(Sorter.SorterBuild, dis0aux_multiFilterGate, TEMPLATE._std_b(function(b, b_f, itm, rsTgs) {
    return rsTgs.includes(itm);
  }));
  exports.dis0aux_multiFilterGate = dis0aux_multiFilterGate;
