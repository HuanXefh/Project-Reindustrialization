const MDL_recipeGen = require("lovec/mdl/MDL_recipeGen");


const rc = {


  // craftTime: 3s


  "base": {


    "baseAux": [
      "loveclab-aux0aux-torque", 0.05,
    ],


  },


  "recipe": [],


};


Events.run(ClientLoadEvent, () => {
  MDL_recipeGen._gen_pulverizer(rc, null, null, 3, 0.5, 3, 0.5, 0, 5, 1.2);

  exports.rc = rc;
});
