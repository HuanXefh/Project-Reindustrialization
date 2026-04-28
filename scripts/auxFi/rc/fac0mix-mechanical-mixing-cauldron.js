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

      co: [
        "loveclab-aux0aux-liquid-mixing", 0.01666667,
      ],

    },


  ],


};


TP_recipeGen._g_liquidMixer.run(rc, {
  amt: 10,
  time: 10.0 * 60.0,
});


exports.rc = rc;
