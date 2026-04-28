const rc = {


  // craftTime: 4s


  base: {

    baseCi: [
      "loveclab-liq0ore-water", 0.15,
    ],
    baseAux: [
      "loveclab-aux0aux-liquid-mixing", 0.01666667,
    ],

    baseCo: [
      "loveclab-liq0was-waste-water", 0.15,
    ],

  },


  recipe: [],


};


TP_recipeGen._g_purifier.run(rc, {
  amt: 24,
  pI: 0.5,
  tier: 1,
});


exports.rc = rc;
