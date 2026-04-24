const rc = {


  // craftTime: 60s


  base: {


    baseCi: [
      "loveclab-liq0ore-water", 0.2,
    ],
    baseCo: [
      "loveclab-liq0was-waste-water", 0.2,
    ],


  },


  recipe: [


    /* <---------- coking ----------> */


    "COKING: coke; FROM: coal", {

      icon: "loveclab-item0chem-coal",
      category: "coking",
      tempReq: 900.0,

      bi: [
        "loveclab-item0chem-coal", 240, 1.0,
      ],

      co: [
        "loveclab-liq0chem-coal-tar", 0.6,
        "loveclab-gas0was-coke-oven-gas", 0.4,
      ],
      bo: [
        "loveclab-item0chem-coke", 240, 0.75,
      ],

    },


    "COKING: coke; FROM: anthracite", {

      icon: "loveclab-item0chem-anthracite",
      category: "coking",
      tempReq: 900.0,

      bi: [
        "loveclab-item0chem-anthracite", 240, 1.0,
      ],

      co: [
        "loveclab-liq0chem-coal-tar", 0.3,
        "loveclab-gas0was-coke-oven-gas", 0.4,
      ],
      bo: [
        "loveclab-item0chem-coke", 240, 1.0,
      ],

    },


    "COKING: semicoke; FROM: peat", {

      icon: "loveclab-item0chem-peat",
      category: "coking",
      tempReq: 900.0,

      bi: [
        "loveclab-item0chem-peat", 240, 1.0,
      ],

      co: [
        "loveclab-liq0chem-coal-tar", 0.6,
        "loveclab-gas0was-coke-oven-gas", 0.4,
      ],
      bo: [
        "loveclab-item0chem-semicoke", 240, 0.5,
      ],

    },


    "COKING: semicoke; FROM: lignite", {

      icon: "loveclab-item0chem-lignite",
      category: "coking",
      tempReq: 900.0,

      bi: [
        "loveclab-item0chem-lignite", 240, 1.0,
      ],

      co: [
        "loveclab-liq0chem-coal-tar", 0.6,
        "loveclab-gas0was-coke-oven-gas", 0.4,
      ],
      bo: [
        "loveclab-item0chem-semicoke", 240, 0.75,
      ],

    },


  ],


};


exports.rc = rc;
