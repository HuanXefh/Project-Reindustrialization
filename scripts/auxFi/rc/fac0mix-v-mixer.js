const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 6s


  base: {},


  recipe: [],


};


TP_recipeGen._g_mixer.run(rc, {
  amtO: 6,
  pO: 0.5,
});


exports.rc = rc;
