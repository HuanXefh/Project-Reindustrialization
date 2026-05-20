const rc = {


  // craftTime: 5s


  base: {

    baseCi: [
      "loveclab-gas0misc-air", 0.1,
    ],

  },


  recipe: [],


};


TP_recipeGen._g_reactorBurn.run(rc, {
  fuelType: FuelTypes.ITEM,
  time: 5.0 * 60.0,
  amt: 5,
  p: 0.5,
  heatOScl: 0.5,
});


exports.rc = rc;
