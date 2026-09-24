/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_statusProjector = require("lovec/temp/blk/BLK_statusProjector");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ eff0proj ------------------------------> */


    const eff0proj_hasteProjector = extendBlock(
        BLK_B_statusProjector, "eff0proj-haste-projector",
        BLK_B_statusProjector[0].build({
            staTarget: "loveclab-sta-haste",
            staDur: 15.0 * 60.0,
            filterScr: boolf2(function(b, ounit) {
                if(ounit.team !== b.team) return false;
                MDL_effect.line(b.x, b.y, null, ounit, Pal.accent);
                MDL_effect.showAt(ounit.x, ounit.y, Fx.dynamicWave, ounit.hitSize * 1.5, Pal.accent);
                return true;
            }),
        }),
    );
