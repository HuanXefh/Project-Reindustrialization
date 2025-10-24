const MDL_recipeGen = require("lovec/mdl/MDL_recipeGen");


const rc = {


  // craftTime: 6s


  "base": {},


  "recipe": [],


};


Events.run(ClientLoadEvent, () => {
  MDL_recipeGen._gen_mixer(rc, null, null, 6, 0.5, false);

  exports.rc = rc;
});
