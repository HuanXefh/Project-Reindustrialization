const rc = {


  // craftTime: 5s


  base: {

    baseCi: [
      "loveclab-aux0aux-vacuum", 0.03333333,
    ],

  },


  recipe: [],


};


TP_recipeGen._g_dryerFreeze.run(rc, {
  amt: 5,
  time: 5.0 * 60.0,
});


exports.rc = rc;
