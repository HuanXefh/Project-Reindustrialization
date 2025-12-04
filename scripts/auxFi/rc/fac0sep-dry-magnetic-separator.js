const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 15s


  base: {

    baseCi: [
      "loveclab-gas0misc-air", 0.2,
    ],
    baseAux: [
      "loveclab-aux0aux-dust-recycling", 0.01666667,
    ],

  },


  recipe: [],


};


TP_recipeGen._g_purifierMagnetic.run(rc, {
  amtI: 15,
});


exports.rc = rc;
