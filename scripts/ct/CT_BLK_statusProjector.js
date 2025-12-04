/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_statusProjector");


  const MDL_effect = require("lovec/mdl/MDL_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0proj ----------> */


  const eff0proj_hasteProjector = extendBlock(
    TEMPLATE, "eff0proj-haste-projector",
    TEMPLATE[0].build({
      staTg: "loveclab-sta-haste",
      staDur: 15.0 * 60.0,
      filterScrTup: [
        (b, ounit) => {
          if(ounit.team !== b.team) return false;
          MDL_effect.showBetween_line(b.x, b.y, null, ounit, Pal.accent);
          MDL_effect.showAt(ounit.x, ounit.y, Fx.dynamicWave, ounit.hitSize * 1.5, Pal.accent);
          return true;
        },
      ],
    }),
  );
  exports.eff0proj_hasteProjector = eff0proj_hasteProjector;
