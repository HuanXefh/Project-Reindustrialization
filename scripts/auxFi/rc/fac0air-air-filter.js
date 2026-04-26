const rc = {


  // craftTime: 5s


  base: {},


  recipe: [


    /* <---------- misc ----------> */


    "MISC: air (clean)", {

      icon: "loveclab-gas0int-air-clean",
      category: "misc",
      ignoreItemFullness: true,

      ci: [
        "loveclab-gas0misc-air", 0.2,
      ],
      reqOpt: true,
      opt: [
        "loveclab-item0bio-charcoal", 1, 0.6, 1.0,
        "loveclab-item0chem-activated-carbon", 1, 0.3, 2.0,
      ],

      co: [
        "loveclab-gas0int-air-clean", 0.2,
      ],
      bo: [
        "loveclab-item0ore-sand", 1, 0.25,
      ],

    },


  ],


};


exports.rc = rc;
