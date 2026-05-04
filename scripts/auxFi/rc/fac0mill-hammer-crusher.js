const rc = {


  // craftTime: 10s


  base: {


    baseAux: [
      "loveclab-aux0aux-vibration-screen", 0.03333333,
    ],


  },


  recipe: [],


};


TP_recipeGen._g_rockCrusher.run(rc, {
  amt: 20,
  minHardness: 3,
  maxHardness: 9,
  abrasionFactor: 0.75,
});
TP_recipeGen._g_rockCrusherRawOreBlock.run(rc, {
  payAmt: 1,
  abrasionFactor: 0.75,
});


exports.rc = rc;
