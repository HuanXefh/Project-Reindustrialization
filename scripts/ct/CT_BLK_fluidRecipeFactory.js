/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fluidRecipeFactory");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0furn ----------> */


  const fac0furn_combustionChamber = extendBlock(
    TEMPLATE, "fac0furn-combustion-chamber",
    TEMPLATE[0].build({
      rcMdl: "fac0furn-combustion-chamber",
      rcSourceMod: "projreind",
      inputDirs: [2],
    }),
  );


  /* <---------- fac0heat ----------> */


  const fac0heat_jetCondenser = extendBlock(
    TEMPLATE, "fac0heat-jet-condenser",
    TEMPLATE[0].build({
      rcMdl: "fac0heat-jet-condenser",
      rcSourceMod: "projreind",
    }),
  );


  const fac0heat_primitiveFreezeDryer = extendBlock(
    TEMPLATE, "fac0heat-primitive-freeze-dryer",
    TEMPLATE[0].build({
      rcMdl: "fac0heat-primitive-freeze-dryer",
      rcSourceMod: "projreind",
    }),
  );


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
