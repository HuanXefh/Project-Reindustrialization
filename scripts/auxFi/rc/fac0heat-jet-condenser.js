const rc = {


  // craftTime: 2s


  base: {


    baseCi: [
      "loveclab-gas0misc-air", 0.2,
    ],
    baseAux: [
      "loveclab-aux0aux-pressure", 0.03333333,
    ],


    baseCo: [
      "loveclab-gas0misc-air", 0.0,
    ],


  },


  recipe: [],


};


TP_recipeGen._g_condenser.run(rc, {
  amt: 4,
  time: 2.0 * 60.0,
});


exports.rc = rc;
