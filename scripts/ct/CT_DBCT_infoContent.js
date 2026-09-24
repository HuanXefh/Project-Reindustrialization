/*
  ========================================
  Section: Definition
  ========================================
*/


    const DBCT_infoContent = require("lovec/temp/sta/DBCT_infoContent");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dbct0info ------------------------------> */


    const dbct0info_atm001 = extendBase(
        DBCT_infoContent, "dbct0info-atm001",
        DBCT_infoContent.build({
            nameInfo: "camp-atm001",
        }),
    );
