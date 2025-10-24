/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_ventGenerator");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pow0gen ----------> */


  const pow0gen_ventGenerator = extend(ThermalGenerator, "pow0gen-vent-generator", TEMPLATE._std(true, EFF.powerParticle, 0.02, EFF.explosion));
  pow0gen_ventGenerator.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, pow0gen_ventGenerator, TEMPLATE._std_b());
  exports.pow0gen_ventGenerator = pow0gen_ventGenerator;


  const pow0gen_hpsvGenerator = extend(ThermalGenerator, "pow0gen-hpsv-generator", TEMPLATE._std(true, EFF.powerParticle, 0.04, EFF.explosion));
  pow0gen_hpsvGenerator.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, pow0gen_hpsvGenerator, TEMPLATE._std_b());
  exports.pow0gen_hpsvGenerator = pow0gen_hpsvGenerator;
