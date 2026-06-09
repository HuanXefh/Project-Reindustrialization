const rc = {


  // craftTime: 60s


  base: {

    baseCi: [
      "loveclab-liq0ore-water", 0.25,
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


  ],


};


exports.rc = rc;
