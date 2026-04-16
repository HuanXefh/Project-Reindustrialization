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
  amtI: 2,
  time: 120.0,
});


exports.rc = rc;
