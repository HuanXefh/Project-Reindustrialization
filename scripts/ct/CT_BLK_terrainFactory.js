/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_terrainFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0air ----------> */


  const fac0air_airCollector = extendBlock(
    TEMPLATE, "fac0air-air-collector",
    TEMPLATE[0].build({
      ters: ["sand"],
      terMode: "disable",
    }),
  );
