const rc = {


  // craftTime: 5s


  base: {},


  recipe: [


    /* <---------- aux ----------> */


    "AUX: vibration screen", {

      icon: "loveclab-aux0aux-vibration-screen",
      category: "aux",

      co: [
        "loveclab-aux0aux-vibration-screen", 0.03333333,
      ],

    },


    /* <---------- misc ----------> */


    "MISC: asbestos wool", {

      icon: "loveclab-item0buil-asbestos-wool",
      category: "misc",

      ci: [
        "loveclab-gas0misc-air", 0.1,
      ],
      bi: [
        "loveclab-item0int0dust-asbestos", 5, 0.5,
      ],
      aux: [
        "loveclab-aux0aux-dust-recycling", 0.01666667,
      ],

      bo: [
        "loveclab-item0buil-asbestos-wool", 5, 0.5,
      ],

    },


  ],


};


exports.rc = rc;
