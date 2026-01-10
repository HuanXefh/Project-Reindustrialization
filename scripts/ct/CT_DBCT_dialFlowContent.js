/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/sta/DBCT_dialFlowContent");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dbct0dial ----------> */


  const dbct0dial_atm002 = extendBase(
    TEMPLATE, "dbct0dial-atm002",
    TEMPLATE.build({
      nmDialFlow: "projreind-camp-atm002",
    }),
  );
