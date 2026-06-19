const rc = {


  // craftTime: 60s


  base: {

    baseCi: [
      "loveclab-liq0ore-water", 0.25,
    ],

    baseCo: [
      "loveclab-liq0ore-water", 0.0,
    ],

  },


  recipe: [


    /* <---------- misc ----------> */


    "generic tech point t1", {
      icon: "loveclab-item0misc-generic-tech-point-t1",
      category: "misc",

      bo: [
        "loveclab-item0misc-generic-tech-point-t1", 1, 1.0,
      ],
    },


    "generic tech point t2", {
      icon: "loveclab-item0misc-generic-tech-point-t2",
      category: "misc",

      bi: [
        "loveclab-item0misc-generic-tech-point-t1", 1, 1.0,
        "loveclab-item0chem-mangalloy", 30, 1.0,
        "loveclab-item0chem-rubber", 30, 1.0,
      ],

      bo: [
        "loveclab-item0misc-generic-tech-point-t2", 1, 1.0,
      ],
    },


    "engineering tech point t1", {
      icon: "loveclab-item0misc-engineering-tech-point-t1",
      category: "misc",

      bi: [
        "loveclab-item0misc-generic-tech-point-t1", 1, 1.0,
        "loveclab-item0chem-brass", 30, 1.0,
        "loveclab-item0chem-cast-iron", 30, 1.0,
      ],

      bo: [
        "loveclab-item0misc-engineering-tech-point-t1", 1, 1.0,
      ],
    },


    "engineering tech point t2", {
      icon: "loveclab-item0misc-engineering-tech-point-t2",
      category: "misc",

      bi: [
        "loveclab-item0misc-generic-tech-point-t2", 1, 1.0,
        "loveclab-item0buil-cement", 30, 1.0,
      ],
      payi: [
        "projreind-pow0tor-brass-cogwheel", 4,
      ],

      bo: [
        "loveclab-item0misc-engineering-tech-point-t2", 1, 1.0,
      ],
    },


    "chemistry tech point t1", {
      icon: "loveclab-item0misc-chemistry-tech-point-t1",
      category: "misc",

      bi: [
        "loveclab-item0misc-generic-tech-point-t1", 1, 1.0,
        "loveclab-item0chem-tin-bronze", 30, 1.0,
        "loveclab-item0chem-graphite", 30, 1.0,
      ],

      bo: [
        "loveclab-item0misc-chemistry-tech-point-t1", 1, 1.0,
      ],
    },


    "chemistry tech point t2", {
      icon: "loveclab-item0misc-chemistry-tech-point-t2",
      category: "misc",

      bi: [
        "loveclab-item0misc-generic-tech-point-t2", 1, 1.0,
        "loveclab-item0chem-stainless-steel", 30, 1.0,
        "loveclab-item0chem-talcum-powder", 60, 1.0,
      ],

      bo: [
        "loveclab-item0misc-chemistry-tech-point-t2", 1, 1.0,
      ],
    },


    "agriculture tech point t2", {
      icon: "loveclab-item0misc-agriculture-tech-point-t2",
      category: "misc",

      bi: [
        "loveclab-item0misc-generic-tech-point-t2", 1, 1.0,
        "loveclab-item0bio-hypha-rod", 120, 1.0,
        "loveclab-item0bio-algae", 120, 1.0,
      ],

      bo: [
        "loveclab-item0misc-agriculture-tech-point-t2", 1, 1.0,
      ],
    },


  ],


};


exports.rc = rc;
