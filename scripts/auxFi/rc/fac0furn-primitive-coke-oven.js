const rc = {


  // craftTime: 20s


  base: {


    baseCi: [
      "loveclab-liq0ore-water", 0.1,
    ],
    baseCo: [
      "loveclab-liq0was-waste-water", 0.1,
    ],


  },


  recipe: [


    /* <---------- coking ----------> */


    "COKING: coke; FROM: coal", {

      icon: "loveclab-item0chem-coal",
      category: "coking",
      tempReq: 900.0,

      bi: [
        "loveclab-item0chem-coal", 10, 1.0,
      ],

      co: [
        "loveclab-gas0was-coke-oven-gas", 0.05,
      ],
      bo: [
        "loveclab-item0chem-coke", 10, 0.75,
      ],

    },


    "COKING: coke; FROM: anthracite", {

      icon: "loveclab-item0chem-anthracite",
      category: "coking",
      tempReq: 900.0,

      bi: [
        "loveclab-item0chem-anthracite", 10, 1.0,
      ],

      co: [
        "loveclab-gas0was-coke-oven-gas", 0.05,
      ],
      bo: [
        "loveclab-item0chem-coke", 10, 1.0,
      ],

    },


    "COKING: semicoke; FROM: peat", {

      icon: "loveclab-item0chem-peat",
      category: "coking",
      tempReq: 900.0,

      bi: [
        "loveclab-item0chem-peat", 10, 1.0,
      ],

      co: [
        "loveclab-gas0was-coke-oven-gas", 0.05,
      ],
      bo: [
        "loveclab-item0chem-semicoke", 10, 0.5,
      ],

    },


    "COKING: semicoke; FROM: lignite", {

      icon: "loveclab-item0chem-lignite",
      category: "coking",
      tempReq: 900.0,

      bi: [
        "loveclab-item0chem-lignite", 10, 1.0,
      ],

      co: [
        "loveclab-gas0was-coke-oven-gas", 0.05,
      ],
      bo: [
        "loveclab-item0chem-semicoke", 10, 0.75,
      ],

    },


  ],


};


exports.rc = rc;
