const MDL_recipeGen = require("lovec/mdl/MDL_recipeGen");


const rc = {


  // craftTime: 15s


  "base": {

    "baseCi": [
      "loveclab-gas0misc-air", 0.2,
    ],

    "baseAux": [
      "loveclab-aux0aux-dust-recycling", 0.01666667,
    ],

  },


  "recipe": [],


};


Events.run(ClientLoadEvent, () => {
  MDL_recipeGen._gen_purifier_magnetic(rc, null, null, 15, 1.0);

  exports.rc = rc;
});
