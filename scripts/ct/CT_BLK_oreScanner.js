/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_oreScanner");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0scan ----------> */


  const min0scan_alphaClassOreScanner = extendBlock(
    TEMPLATE, "min0scan-alpha-class-ore-scanner",
    TEMPLATE[0].build({
      craftSe: "se-craft-ore-scanner",
      scanRad: 7.0 * Vars.tilesize,
      craftEff: EFF.drillPulsePack[2],
    }),
  );
