const MDL_recipeGen = require("lovec/mdl/MDL_recipeGen");


const rc = {


  // craftTime: 20s


  "base": {


    "baseAux": [
      "loveclab-aux0aux-heat-exchange", 0.01666667,
    ],


  },


  "recipe": [],


};


Events.run(ClientLoadEvent, () => {
  MDL_recipeGen._gen_roastingFurnace(rc, null, null, 20, 0.5, 10, 1.0, 1800.0, 0.0);
  MDL_recipeGen._gen_sinteringFurnace(rc, null, null, false, 20, 0.5, 10, 1.0, 1800.0, 0.0);

  exports.rc = rc;
});
