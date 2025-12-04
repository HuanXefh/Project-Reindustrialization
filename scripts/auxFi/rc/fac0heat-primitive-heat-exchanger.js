const rc = {


  // craftTime: 1s


  base: {},


  recipe: [


    /* <---------- aux ----------> */


    "AUX: heat exchange; FROM: air", {

      icon: "loveclab-gas0misc-air",
      category: "aux",

      ci: [
        "loveclab-gas0misc-air", 0.1,
      ],
      aux: [
        "loveclab-aux0aux-pressure", 0.05,
      ],

      co: [
        "loveclab-aux0aux-heat-exchange", 0.01666667,
      ],

    },


    "AUX: heat exchange; FROM: water", {

      icon: "loveclab-liq0ore-water",
      category: "aux",

      ci: [
        "loveclab-liq0ore-water", 0.1,
      ],

      co: [
        "loveclab-aux0aux-heat-exchange", 0.01666667,
        "loveclab-gas0misc-steam", 0.1,
      ],

    },


  ],


};


exports.rc = rc;
