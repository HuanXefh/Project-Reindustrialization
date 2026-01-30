const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 6s


  base: {


    baseOpt: [
      "loveclab-item0cons-mangalloy-ball", 1, 0.1, 1.0,
    ],


  },


  recipe: [],


};


TP_recipeGen._g_mixer.run(rc, {
  isBallMill: true,
  amtO: 12,
  pO: 0.5,
  maxHardness: 7,
});
TP_recipeGen._g_pulverizer.run(rc, {
  amtI: 18,
  pI: 0.5,
  amtO: 18,
  pO: 0.5,
  maxHardness: 7,
});


exports.rc = rc;
