const rc = {


  // craftTime: 2s


  base: {

    baseCi: [
      "loveclab-liq0ore-water", 0.1,
      "loveclab-gas0misc-air", 0.05,
    ],

    baseCo: [
      "loveclab-liq0was-waste-water", 0.1,
    ],

  },


  recipe: [],


};


TP_recipeGen._g_purifier.run(rc, {
  tier: 0,
  amt: 2,
  pI: 0.5,
});


exports.rc = rc;
