const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 20s


  base: {},


  recipe: [],


};


TP_recipeGen._g_caster.run(rc, {
  amtO: 15,
  payAmtO: 1,
  maxTemp: 1800.0,
});


exports.rc = rc;
