/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_oreScanner");
  const EFF = require("lovec/glb/GLB_eff");


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
  exports.min0scan_alphaClassOreScanner = min0scan_alphaClassOreScanner;
