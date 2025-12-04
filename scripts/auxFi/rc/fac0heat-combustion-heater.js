const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 5s


  base: {},


  recipe: [],


};


TP_recipeGen._g_heater.run(rc, {
  mode: "item",
  amtI: 10,
  pI: 0.5,
  mtpO: 0.5,
  maxTemp: 1300.0,
});


exports.rc = rc;
