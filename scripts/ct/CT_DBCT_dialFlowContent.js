/*
  ========================================
  Section: Definition
  ========================================
*/


    const DBCT_dialFlowContent = require("lovec/temp/sta/DBCT_dialFlowContent");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dbct0dial ------------------------------> */


    const dbct0dial_atm002 = extendBase(
        DBCT_dialFlowContent, "dbct0dial-atm002",
        DBCT_dialFlowContent.build({
            nameDialFlow: "projreind-camp-atm002",
        }),
    );
