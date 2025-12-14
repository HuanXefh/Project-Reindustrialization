/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_furnaceRecipeFactory");
  const EFF = require("lovec/glb/GLB_eff");


  const DB_item = require("lovec/db/DB_item");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0furn ----------> */


  const fac0furn_kiln = extendBlock(
    TEMPLATE, "fac0furn-kiln",
    TEMPLATE[0].build({
      blockedFuels: [
        "loveclab-item0chem-sulfur"
      ],
      rcMdl: "fac0furn-kiln",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );
  exports.fac0furn_kiln = fac0furn_kiln;


  const fac0furn_primitiveSmelter = extendBlock(
    TEMPLATE, "fac0furn-primitive-smelter",
    TEMPLATE[0].build({
      fuelConsMtp: 0.1,
      rcMdl: "fac0furn-primitive-smelter",
      rcSourceMod: "projreind",
      disableDump: true,
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );
  exports.fac0furn_primitiveSmelter = fac0furn_primitiveSmelter;


  const fac0furn_bloomery = extendBlock(
    TEMPLATE, "fac0furn-bloomery",
    TEMPLATE[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelConsMtp: 0.75,
      fuelLvlMtp: 1.35,
      rcMdl: "fac0furn-bloomery",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );
  exports.fac0furn_bloomery = fac0furn_bloomery;


  const fac0furn_primitiveCrucible = extendBlock(
    TEMPLATE, "fac0furn-primitive-crucible",
    TEMPLATE[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelLvlMtp: 1.35,
      fuelWarmupRate: 0.0002,
      rcMdl: "fac0furn-primitive-crucible",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );
  exports.fac0furn_primitiveCrucible = fac0furn_primitiveCrucible;


  const fac0furn_primitiveSinteringFurnace = extendBlock(
    TEMPLATE, "fac0furn-primitive-sintering-furnace",
    TEMPLATE[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelConsMtp: 0.75,
      fuelLvlMtp: 1.25,
      fuelWarmupRate: 0.0003,
      rcMdl: "fac0furn-primitive-sintering-furnace",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );
  exports.fac0furn_primitiveSinteringFurnace = fac0furn_primitiveSinteringFurnace;


  const fac0furn_primitiveCokeOven = extendBlock(
    TEMPLATE, "fac0furn-primitive-coke-oven",
    TEMPLATE[0].build({
      blockedFuels: DB_item.db["group"]["fuel"]["biotic"],
      fuelWarmupRate: 0.0002,
      rcMdl: "fac0furn-primitive-coke-oven",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );
  exports.fac0furn_primitiveCokeOven = fac0furn_primitiveCokeOven;


  /* <---------- fac0proc ----------> */


  const fac0proc_primitiveCaster = extendBlock(
    TEMPLATE, "fac0proc-primitive-caster",
    TEMPLATE[0].build({
      fuelConsMtp: 0.75,
      fuelLvlMtp: 1.35,
      fuelWarmupRate: 0.0004,
      rcMdl: "fac0proc-primitive-caster",
      rcSourceMod: "projreind",
    }),
  );
  exports.fac0proc_primitiveCaster = fac0proc_primitiveCaster;


  const fac0proc_primitiveForge = extendBlock(
    TEMPLATE, "fac0proc-primitive-forge",
    TEMPLATE[0].build({
      fuelConsMtp: 0.75,
      fuelLvlMtp: 1.35,
      fuelWarmupRate: 0.0004,
      rcMdl: "fac0proc-primitive-forge",
      rcSourceMod: "projreind",
    }),
  );
  exports.fac0proc_primitiveForge = fac0proc_primitiveForge;


  /* <---------- fac0heat ----------> */


  const fac0heat_combustionHeater = extendBlock(
    TEMPLATE, "fac0heat-combustion-heater",
    TEMPLATE[0].build({
      fuelWarmupRate: 0.0004,
      rcMdl: "fac0heat-combustion-heater",
      rcSourceMod: "projreind",
      craftEff: EFF.furnaceSmog,
      updateEff: EFF.furnaceCrack,
      updateEffP: 0.01,
    }),
  );
  exports.fac0heat_combustionHeater = fac0heat_combustionHeater;
