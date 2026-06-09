/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/sta/DBCT_techNodeContent");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dbct0tech ----------> */


  const dbct0tech_utilityCrafting = extendBase(
    TEMPLATE, "dbct0tech-utility-crafting",
  );


  const dbct0tech_oreSelection = extendBase(
    TEMPLATE, "dbct0tech-ore-selection",
  );


  const dbct0tech_heatTransfer = extendBase(
    TEMPLATE, "dbct0tech-heat-transfer",
  );


  const dbct0tech_heatExchange = extendBase(
    TEMPLATE, "dbct0tech-heat-exchange",
  );


  const dbct0tech_pressurization = extendBase(
    TEMPLATE, "dbct0tech-pressurization",
  );


  const dbct0tech_rotationalEnergy = extendBase(
    TEMPLATE, "dbct0tech-rotational-energy",
  );


  const dbct0tech_advancedFurnace = extendBase(
    TEMPLATE, "dbct0tech-advanced-furnace",
  );


  const dbct0tech_pollutionControl = extendBase(
    TEMPLATE, "dbct0tech-pollution-control",
  );
