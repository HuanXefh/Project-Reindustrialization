const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 4s


  base: {


    baseAux: [
      "loveclab-aux0aux-vibration-screen", 0.01666667,
    ],


  },


  recipe: [],


};


TP_recipeGen._g_rockCrusher.run(rc, {
  amtI: 2,
  amtO: 2,
  maxHardness: 7,
});
TP_recipeGen._g_rockCrusherAggregate.run(rc, {
  amtI: 2,
  amtO: 2,
  maxHardness: 7,
  abrasionFactor: 1.25,
});


exports.rc = rc;
