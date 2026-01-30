const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 10s


  base: {


    baseAux: [
      "loveclab-aux0aux-torque", 0.03333333,
      "loveclab-aux0aux-rpm", 0.16666667,
    ],


  },


  recipe: [


    /* <---------- aux ----------> */


    "AUX: liquid mixing", {

      icon: "loveclab-aux0aux-liquid-mixing",
      category: "aux",

      ci: [
        "loveclab-liq0ore-water", 0.1,
      ],

      co: [
        "loveclab-aux0aux-liquid-mixing", 0.01666667,
      ],

    },


  ],


};


TP_recipeGen._g_liquidMixer.run(rc, {
  time: 600.0,
  amtO: 10,
});


exports.rc = rc;
