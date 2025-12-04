const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 20s


  base: {


    baseAux: [
      "loveclab-aux0aux-heat-exchange", 0.01666667,
    ],


  },


  recipe: [],


};


TP_recipeGen._g_roastingFurnace.run(rc, {
  amtI: 20,
  pI: 0.5,
  amtO: 10,
  maxTemp: 1800.0,
  maxFlam: 0.0,
});
TP_recipeGen._g_sinteringFurnace.run(rc, {
  amtI: 20,
  pI: 0.5,
  amtO: 10,
  maxTemp: 1800.0,
  maxFlam: 0.0,
});


exports.rc = rc;
