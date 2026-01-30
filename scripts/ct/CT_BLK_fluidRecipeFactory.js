/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidRecipeFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0mix ----------> */


  const fac0mix_mechanicalMixingCauldron = extendBlock(
    TEMPLATE, "fac0mix-mechanical-mixing-cauldron",
    TEMPLATE[0].build({
      rcMdl: "fac0mix-mechanical-mixing-cauldron",
      rcSourceMod: "projreind",
    }),
  );
  setDrawer(fac0mix_mechanicalMixingCauldron, drawers => [
    drawers[0],
    fetchDrawer("DrawMixedLiquid"),
    fetchDrawer("DrawRipple", {
      rad: 5.0,
      size: 2.0,
    }),
    drawers[1],
    drawers[2],
  ]);
