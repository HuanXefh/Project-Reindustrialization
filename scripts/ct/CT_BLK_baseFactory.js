/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_baseFactory");
  const EFF = require("lovec/glb/GLB_eff");


  const FRAG_faci = require("lovec/frag/FRAG_faci");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0air ----------> */


  const fac0air_airCollector = extend(GenericCrafter, "fac0air-air-collector", mergeObj(TEMPLATE._std(null, null, null), {
    setStats() {
      this.super$setStats();
      TEMPLATE.setStats(this);
      // @SPEC
      FRAG_faci.comp_setStats_ter(this, ["sand"], "disable");
    },
    // @SPEC
    canPlaceOn: function(t, team, rot) {
      if(!this.super$canPlaceOn(t, team, rot)) return false;
      if(!FRAG_faci.comp_canPlaceOn_ter(this, t, team, rot, ["sand"], "disable")) return false;
      return true;
    },
  }));
  fac0air_airCollector.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0air_airCollector, TEMPLATE._std_b(null));
  exports.fac0air_airCollector = fac0air_airCollector;


  /* <---------- fac0proc ----------> */


  const fac0proc_sawmill = extend(GenericCrafter, "fac0proc-sawmill", TEMPLATE._std(null, EFF.sawmillCrack, 0.02));
  fac0proc_sawmill.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fac0proc_sawmill, TEMPLATE._std_b(null));
  exports.fac0proc_sawmill = fac0proc_sawmill;
