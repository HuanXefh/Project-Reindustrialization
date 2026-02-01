/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_fuelLight");
  const EFF = require("lovec/glb/GLB_eff");


  const DB_item = require("lovec/db/DB_item");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0li ----------> */


  const eff0li_bonfire = extendBlock(
    TEMPLATE, "eff0li-bonfire",
    TEMPLATE[0].build({
      allowedFuels: DB_item.db["group"]["fuel"]["biotic"].cpy().pushAll([
        "loveclab-item0bio-charcoal",
      ]),
      fuelConsMtp: 0.4,
      fuelWarmupRate: 0.0008,
      maxLightTemp: 800.0,
      lightRad: 136.0,
    }),
  );
  setDrawer(eff0li_bonfire, drawers => [
    drawers,
    fetchDrawer("DrawFire"),
    fetchDrawer("DrawEffect", {
      eff: EFF.fireExplodeSmog,
      effP: 0.4,
    }),
  ]);
