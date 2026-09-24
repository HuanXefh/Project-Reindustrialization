/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_oreScanner = require("lovec/temp/blk/BLK_oreScanner");
    const BLK_B_manualTimerOreScanner = require("lovec/temp/blk/BLK_manualTimerOreScanner");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ min0scan ------------------------------> */


    const min0scan_portableOreScanner = extendBlock(
        BLK_B_manualTimerOreScanner, "min0scan-portable-ore-scanner",
        BLK_B_manualTimerOreScanner[0].build({
            manualTimerCap: 0.5 * 60.0 * 60.0,
            scanTier: 2,
            craftSe: "se-craft-ore-scanner",
            scanRad: 4.0 * Vars.tilesize,
            craftEff: EFF.pulseDrillPack[1],
        }),
    );


    const min0scan_alphaClassOreScanner = extendBlock(
        BLK_B_oreScanner, "min0scan-alpha-class-ore-scanner",
        BLK_B_oreScanner[0].build({
            craftSe: "se-craft-ore-scanner",
            scanRad: 7.0 * Vars.tilesize,
            craftEff: EFF.pulseDrillPack[2],
            durabCap: 2.5 * 60.0 * 60.0,
        }),
    );
