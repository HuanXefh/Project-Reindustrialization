/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_infoFactory");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0misc ----------> */


  const fac0misc_pollutionDetectionCenter = extendBlock(
    TEMPLATE, "fac0misc-pollution-detection-center",
    TEMPLATE[0].build({
      infoGetterTup: [function(b) {
        return "${1}: ${2} ${3}".format(MDL_bundle._term("lovec", "pollution"), Strings.fixed(MDL_pollution._glbPol(), 2), fetchStatUnit("lovec", "polunits").localized());
      }],
    }),
  );
