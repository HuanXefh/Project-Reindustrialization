const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 3s


  base: {


    baseAux: [
      "loveclab-aux0aux-torque", 0.05,
    ],


  },


  recipe: [],


};


TP_recipeGen._g_pulverizer.run(rc, {
  amtI: 3,
  pI: 0.5,
  amtO: 3,
  pO: 0.5,
  maxHardness: 5,
  abrasionFactor: 1.2,
});


exports.rc = rc;
