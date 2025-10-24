const MDL_recipeGen = require("lovec/mdl/MDL_recipeGen");


const rc = {


  // craftTime: 5s


  "base": {},


  "recipe": [],


};


Events.run(ClientLoadEvent, () => {
  MDL_recipeGen._gen_heater(rc, null, null, 10, 0.5, "item", 0.5, 1300.0);

  exports.rc = rc;
});
