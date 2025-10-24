const MDL_recipeGen = require("lovec/mdl/MDL_recipeGen");


const rc = {


  // craftTime: 60s


  "base": {},


  "recipe": [],


};


Events.run(ClientLoadEvent, () => {
  MDL_recipeGen._gen_alloyFurnace(rc, null, null, 60, 0.5, 1800.0);

  exports.rc = rc;
});
