const rc = {


  // craftTime: 20s


  base: {},


  recipe: [


    /* <---------- misc ----------> */


    "MISC: briquette", {

      icon: "loveclab-item0cons-briquette",
      category: "misc",
      tempReq: 100.0,

      ci: [
        "loveclab-liq0ore-water", 0.15,
      ],
      bi: [
        [
          "loveclab-item0bio-sawdust", 80, 0.5,
          "loveclab-item0int0dust-raw-coal", 40, 0.5,
        ], -1.0, -1.0,
        [
          "loveclab-item0ore-clay", 40, 0.5,
          "loveclab-item0was-dust", 80, 0.5,
        ], -1.0, -1.0,
      ],
      aux: [
        "loveclab-aux0aux-pressure", 0.05,
      ],
      reqOpt: false,
      opt: [
        "loveclab-item0chem-slaked-lime", 20, 0.25, 1.5,
      ],

      co: [
        "loveclab-gas0misc-steam", 0.1,
      ],
      bo: [
        "loveclab-item0cons-briquette", 30, 1.0,
      ],

    },


  ],


};


exports.rc = rc;
