const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 60s


  base: {},


  recipe: [],


};


TP_recipeGen._g_alloyFurnace.run(rc, {
  objF: obj => {
    switch(obj.icon) {
      case "loveclab-item0chem-leaded-tin-bronze" :
        // Should not be produced in Sector Beta
        obj.lockedBy = [
          "loveclab-item0ore-hematite",
          "loveclab-item0ore-magnetite",
        ];
        break;
    };
  },
  amtO: 60,
  pO: 0.5,
  maxTemp: 1800.0,
});


exports.rc = rc;
