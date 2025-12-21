const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 5s


  base: {},


  recipe: [],


};


TP_recipeGen._g_electricHeater.run(rc, {
  minTemp: 50.0,
  maxTemp: 400.0,
  heatGap: 50.0,
});


exports.rc = rc;
