/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_manualTimerOreScanner");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0scan ----------> */


  const min0scan_portableOreScanner = extendBlock(
    TEMPLATE, "min0scan-portable-ore-scanner",
    TEMPLATE[0].build({
      manualTimerCap: 0.5 * 60.0 * 60.0,
      scanTier: 2,
      craftSe: "se-craft-ore-scanner",
      scanRad: 4.0 * Vars.tilesize,
      craftEff: EFF.drillPulsePack[1],
    }),
  );
