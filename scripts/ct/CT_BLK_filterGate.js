/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_filterGate");


  const MDL_cond = require("lovec/mdl/MDL_cond");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0aux ----------> */


  const dis0aux_filterGate = extend(Sorter, "dis0aux-filter-gate", TEMPLATE._std());
  dis0aux_filterGate.buildType = () => extend(Sorter.SorterBuild, dis0aux_filterGate, TEMPLATE._std_b(function(b, b_f, itm) {
    return itm === b.sortItem;
  }, false));
  exports.dis0aux_filterGate = dis0aux_filterGate;


  const dis0aux_intermediateFilterGate = extend(Sorter, "dis0aux-intermediate-filter-gate", TEMPLATE._std());
  dis0aux_intermediateFilterGate.buildType = () => extend(Sorter.SorterBuild, dis0aux_intermediateFilterGate, TEMPLATE._std_b(function(b, b_f, itm) {
    return MDL_cond._isIntmd(itm);
  }, true));
  exports.dis0aux_intermediateFilterGate = dis0aux_intermediateFilterGate;


  const dis0aux_wasteFilterGate = extend(Sorter, "dis0aux-waste-filter-gate", TEMPLATE._std());
  dis0aux_wasteFilterGate.buildType = () => extend(Sorter.SorterBuild, dis0aux_wasteFilterGate, TEMPLATE._std_b(function(b, b_f, itm) {
    return MDL_cond._isWas(itm);
  }, true));
  exports.dis0aux_wasteFilterGate = dis0aux_wasteFilterGate;
