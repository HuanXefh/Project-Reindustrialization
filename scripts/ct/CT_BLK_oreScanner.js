/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_oreScanner");
  const TEMPLATE_A = require("lovec/temp/blk/BLK_manualTimerOreScanner");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0scan ----------> */


  const min0scan_portableOreScanner = extendBlock(
    TEMPLATE_A, "min0scan-portable-ore-scanner",
    TEMPLATE_A[0].build({
      manualTimerCap: 0.5 * 60.0 * 60.0,
      scanTier: 2,
      craftSe: "se-craft-ore-scanner",
      scanRad: 4.0 * Vars.tilesize,
      craftEff: EFF.drillPulsePack[1],
    }),
  );


  const min0scan_alphaClassOreScanner = extendBlock(
    TEMPLATE, "min0scan-alpha-class-ore-scanner",
    TEMPLATE[0].build({
      craftSe: "se-craft-ore-scanner",
      scanRad: 7.0 * Vars.tilesize,
      craftEff: EFF.drillPulsePack[2],
      durabCap: 2.5 * 60.0 * 60.0,
    }),
  );
