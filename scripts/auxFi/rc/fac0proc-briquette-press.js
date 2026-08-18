const rc = {


  // craftTime: 20s


  base: {

    baseCi: [
      "loveclab-liq0ore-water", 0.15,
    ],

    baseCo: [
      "loveclab-gas0misc-steam", 0.1,
    ],

  },


  recipe: [


    /* <---------- misc ----------> */


    "MISC: briquette", {
      icon: "loveclab-item0cons-briquette",
      category: "misc",
      tempReq: 100.0,

      bi: [
        [
          "loveclab-item0chem-coal", 30, 0.5,
          "loveclab-item0int0dust-raw-coal", 45, 0.5,
        ], -1.0, -1.0,
        [
          "loveclab-item0ore-clay", 40, 0.5,
          "loveclab-item0was-dust", 80, 0.5,
          "loveclab-item0was-dregs", 80, 0.5,
        ], -1.0, -1.0,
      ],
      aux: [
        "loveclab-aux0aux-pressure", 0.05,
      ],
      reqOpt: false,
      opt: [
        "loveclab-item0chem-slaked-lime", 20, 0.25, 1.5,
      ],

      bo: [
        "loveclab-item0cons-briquette", 30, 1.0,
      ],
      failP: 0.05,
    },


    "MISC: coke briquette", {
      icon: "loveclab-item0cons-coke-briquette",
      category: "misc",
      tempReq: 150.0,

      bi: [
        [
          "GROUP: coke", 60, 0.5,
          "loveclab-item0chem-anthracite", 90, 0.5,
        ], -1.0, 1.0,
        [
          "loveclab-item0ore-clay", 40, 0.5,
          "loveclab-item0was-dust", 80, 0.5,
          "loveclab-item0was-dregs", 80, 0.5,
        ], -1.0, -1.0,
      ],
      aux: [
        "loveclab-aux0aux-pressure", 0.08333333,
      ],
      reqOpt: false,
      opt: [
        "loveclab-item0chem-slaked-lime", 20, 0.25, 1.5,
      ],

      bo: [
        "loveclab-item0cons-coke-briquette", 15, 1.0,
      ],
      failP: 0.05,
    },


    "MISC: charcoal", {
      icon: "loveclab-item0bio-charcoal",
      category: "misc",
      tempReq: 400.0,

      bi: [
        [
          "loveclab-item0bio-timber", 60, 0.5,
          "loveclab-item0bio-sawdust", 60, 0.75,
          "loveclab-item0bio-biomass-powder", 60, 0.75,
        ], -1.0, -1.0,
        [
          "loveclab-item0ore-clay", 20, 0.5,
          "loveclab-item0was-dust", 40, 0.5,
          "loveclab-item0was-dregs", 40, 0.5,
        ], -1.0, -1.0,
      ],
      aux: [
        "loveclab-aux0aux-pressure", 0.03333333,
      ],

      bo: [
        "loveclab-item0bio-charcoal", 30, 1.0,
      ],
      failP: 0.05,
    },


  ],


};


exports.rc = rc;
