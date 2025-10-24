/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_statusProjector");


  const MDL_effect = require("lovec/mdl/MDL_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0proj ----------> */


  const eff0proj_hasteProjector = extend(MendProjector, "eff0proj-haste-projector", TEMPLATE._std("loveclab-sta-haste", (b, unit) => {
    if(unit.team !== b.team) return false;
    MDL_effect.showBetween_line(b.x, b.y, null, unit, Pal.accent);
    MDL_effect.showAt(unit.x, unit.y, Fx.dynamicWave, unit.hitSize * 1.5, Pal.accent);
    return true;
  }));
  eff0proj_hasteProjector.buildType = () => extend(MendProjector.MendBuild, eff0proj_hasteProjector, TEMPLATE._std_b(true));
  exports.eff0proj_hasteProjector = eff0proj_hasteProjector;
