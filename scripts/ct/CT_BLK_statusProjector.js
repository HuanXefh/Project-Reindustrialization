/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_statusProjector");


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
          MDL_effect._e_line(b.x, b.y, null, ounit, Pal.accent);
          MDL_effect.showAt(ounit.x, ounit.y, Fx.dynamicWave, ounit.hitSize * 1.5, Pal.accent);
          return true;
        },
      ],
    }),
  );
