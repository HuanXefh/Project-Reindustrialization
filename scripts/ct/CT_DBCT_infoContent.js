/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/sta/DBCT_infoContent");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dbct0info ----------> */


  const dbct0info_atm001 = extendBase(
    TEMPLATE, "dbct0info-atm001",
    TEMPLATE.build({
      nmInfo: "atm001",
    }),
  );
  exports.dbct0info_atm001 = dbct0info_atm001;
