const MDL_recipeGen = require("lovec/mdl/MDL_recipeGen");


const rc = {


  // craftTime: 4s


  "base": {


    "baseAux": [
      "loveclab-aux0aux-vibration-screen", 0.01666667,
    ],


  },


  "recipe": [],


};


Events.run(ClientLoadEvent, () => {
  MDL_recipeGen._gen_rockCrusher(rc, null, null, 2, 1.0, 2, 1.0, 0, 7, 1.0);
  MDL_recipeGen._gen_rockCrusher_aggregate(rc, null, null, 2, 1.0, 2, 1.0, 0, 7, 1.25);

  exports.rc = rc;
});
