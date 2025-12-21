const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 20s


  base: {

    baseCi: [
      "loveclab-liq0ore-water", 0.1,
    ],

    baseCo: [
      "loveclab-gas0misc-steam", 0.1,
    ],

  },


  recipe: [],


};


TP_recipeGen._g_forge.run(rc, {
  amtO: 10,
  payAmtO: 1,
  maxTemp: 1800.0,
  sizeCap: 2,
});


exports.rc = rc;
