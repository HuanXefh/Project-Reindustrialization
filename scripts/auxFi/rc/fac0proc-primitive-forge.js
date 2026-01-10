const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 20s


  base: {

    baseAux: [
      "loveclab-aux0aux-heat-exchange", 0.01666667,
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
