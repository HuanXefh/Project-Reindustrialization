const rc = {


  // craftTime: 6s


  base: {


    baseOpt: [
      "loveclab-item0cons-cast-iron-ball", 1, 0.4, 1.0,
      "loveclab-item0cons-mangalloy-ball", 1, 0.1, 1.0,
    ],
    baseReqOpt: true,


  },


  recipe: [],


};


TP_recipeGen._g_mixer.run(rc, {
  isBallMill: true,
  amt: 12,
  pO: 0.5,
  maxHardness: 7,
  abrasionFactor: 1.0,
});
TP_recipeGen._g_pulverizer.run(rc, {
  amtI: 18,
  pI: 0.5,
  amtO: 18,
  pO: 0.5,
  maxHardness: 7,
  abrasionFactor: 1.0,
});


exports.rc = rc;
