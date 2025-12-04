const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 60s


  base: {},


  recipe: [],


};


TP_recipeGen._g_alloyFurnace.run(rc, {
  amtO: 60,
  pO: 0.5,
  maxTemp: 1800.0,
});


exports.rc = rc;
