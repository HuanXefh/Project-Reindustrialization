const rc = {


  // craftTime: 2s


  base: {

    baseAux: [
      "loveclab-aux0aux-pressure", 0.05,
      "loveclab-aux0aux-heat-exchange", 0.01666667,
    ],

  },


  recipe: [],


};


TP_recipeGen._g_condenser.run(rc, {
  amt: 2,
  time: 2.0 * 60.0,
});


exports.rc = rc;
