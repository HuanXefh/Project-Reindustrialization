/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_furnaceFactory");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0furn ----------> */


  const fac0furn_kiln = extend(GenericCrafter, "fac0furn-kiln", TEMPLATE._std("fac0furn-kiln", "item", ["loveclab-item0chem-sulfur"], EFF.furnaceSmog, EFF.furnaceCrack, 0.01));
  fac0furn_kiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0furn_kiln, TEMPLATE._std_b(null, false, false, 0.0001));
  exports.fac0furn_kiln = fac0furn_kiln;


  const fac0furn_primitiveSmelter = extend(GenericCrafter, "fac0furn-primitive-smelter", TEMPLATE._std("fac0furn-primitive-smelter", "item", [], EFF.furnaceSmog, EFF.furnaceCrack, 0.01));
  fac0furn_primitiveSmelter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0furn_primitiveSmelter, TEMPLATE._std_b(null, false, true, 0.0001));
  exports.fac0furn_primitiveSmelter = fac0furn_primitiveSmelter;


  const fac0furn_bloomery = extend(GenericCrafter, "fac0furn-bloomery", TEMPLATE._std("fac0furn-bloomery", "item", TEMPLATE.tempFuels.bioFuelItms, EFF.furnaceSmog, EFF.furnaceCrack, 0.01));
  fac0furn_bloomery.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0furn_bloomery, TEMPLATE._std_b(null, false, false, 0.0001));
  exports.fac0furn_bloomery = fac0furn_bloomery;


  const fac0furn_primitiveCrucible = extend(GenericCrafter, "fac0furn-primitive-crucible", TEMPLATE._std("fac0furn-primitive-crucible", "item", TEMPLATE.tempFuels.bioFuelItms, EFF.furnaceSmog, EFF.furnaceCrack, 0.01));
  fac0furn_primitiveCrucible.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0furn_primitiveCrucible, TEMPLATE._std_b(null, false, false, 0.0002));
  exports.fac0furn_primitiveCrucible = fac0furn_primitiveCrucible;


  const fac0furn_primitiveSinteringFurnace = extend(GenericCrafter, "fac0furn-primitive-sintering-furnace", TEMPLATE._std("fac0furn-primitive-sintering-furnace", "item", TEMPLATE.tempFuels.bioFuelItms, EFF.furnaceSmog, EFF.furnaceCrack, 0.01));
  fac0furn_primitiveSinteringFurnace.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0furn_primitiveSinteringFurnace, TEMPLATE._std_b(null, false, false, 0.0003));
  exports.fac0furn_primitiveSinteringFurnace = fac0furn_primitiveSinteringFurnace;


  const fac0furn_primitiveCokeOven = extend(GenericCrafter, "fac0furn-primitive-coke-oven", TEMPLATE._std("fac0furn-primitive-coke-oven", "item", TEMPLATE.tempFuels.bioFuelItms, EFF.furnaceSmog, EFF.furnaceCrack, 0.01));
  fac0furn_primitiveCokeOven.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0furn_primitiveCokeOven, TEMPLATE._std_b(null, false, false, 0.0002));
  exports.fac0furn_primitiveCokeOven = fac0furn_primitiveCokeOven;


  /* <---------- fac0heat ----------> */


  const fac0heat_combustionHeater = extend(GenericCrafter, "fac0heat-combustion-heater", TEMPLATE._std("fac0heat-combustion-heater", "item", [], EFF.furnaceSmog, EFF.furnaceCrack, 0.01));
  fac0heat_combustionHeater.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0heat_combustionHeater, TEMPLATE._std_b(null, false, false, 0.0004));
  exports.fac0heat_combustionHeater = fac0heat_combustionHeater;
