const rc = {


  // craftTime: 5s


  base: {},


  recipe: [


    "AUX: melt cooling; FROM: air", {
      icon: "loveclab-gas0misc-air",
      category: "aux",

      ci: [
        "loveclab-gas0misc-air", 0.2,
      ],
      aux: [
        "loveclab-aux0aux-melt-cooling", 0.0,
      ],

      co: [
        "loveclab-aux0aux-melt-cooling", 0.01666667,
        "loveclab-gas0misc-air", 0.0,
      ],
    },


    "AUX: melt cooling; FROM: water", {
      icon: "loveclab-liq0ore-water",
      category: "aux",

      ci: [
        "loveclab-liq0ore-water", 0.1,
      ],
      aux: [
        "loveclab-aux0aux-melt-cooling", 0.0,
      ],

      co: [
        "loveclab-aux0aux-melt-cooling", 0.01666667,
        "loveclab-gas0misc-steam", 0.1,
        "loveclab-liq0ore-water", 0.0,
      ],
    },


  ],


};


exports.rc = rc;
