const rc = {


  // craftTime: 10s


  base: {},


  recipe: [


    /* <---------- assembly ----------> */


    "ASSEMBLY: clay brick block", {
      icon: "loveclab-pay0mat-brick-clay",
      category: "assembly",

      bi: [
        "loveclab-item0buil-brick-clay", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-brick-clay", 1,
      ],
    },


    "ASSEMBLY: magnesia brick block", {
      icon: "loveclab-pay0mat-brick-magnesia",
      category: "assembly",

      bi: [
        "loveclab-item0buil-brick-magnesia", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-brick-magnesia", 1,
      ],
    },


    "ASSEMBLY: high-alumina brick block", {
      icon: "loveclab-pay0mat-brick-high-alumina",
      category: "assembly",

      bi: [
        "loveclab-item0buil-brick-high-alumina", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-brick-high-alumina", 1,
      ],
    },


    "ASSEMBLY: mullite brick block", {
      icon: "loveclab-pay0mat-brick-mullite",
      category: "assembly",

      bi: [
        "loveclab-item0buil-brick-mullite", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-brick-mullite", 1,
      ],
    },


    "ASSEMBLY: silica brick block", {
      icon: "loveclab-pay0mat-brick-silica",
      category: "assembly",

      bi: [
        "loveclab-item0buil-brick-silica", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-brick-silica", 1,
      ],
    },


    "ASSEMBLY: carbon brick block", {
      icon: "loveclab-pay0mat-brick-carbon",
      category: "assembly",

      bi: [
        "loveclab-item0buil-brick-carbon", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-brick-carbon", 1,
      ],
    },


    /* <---------- misc ----------> */


    "MISC: timber", {
      icon: "loveclab-item0bio-timber",
      category: "misc",
      lockedBy: [
        "loveclab-item0buil-brick-brick-clay",
      ],

      bi: [
        "loveclab-item0bio-log", 10, 1.0,
      ],

      bo: [
        "loveclab-item0bio-timber", 5, 1.0,
      ],
      failP: 0.1,
      fo: [],
    },


    "MISC: asbestos diaphragm", {
      icon: "loveclab-item0cons-asbestos-diaphragm",
      category: "misc",

      bi: [
        "loveclab-item0chem-asbestos-wool", 20, 1.0,
        "loveclab-item0chem-steel", 5, 1.0,
      ],

      bo: [
        "loveclab-item0cons-asbestos-diaphragm", 1, 1.0,
      ],
      failP: 0.1,
    },


    "MISC: wooden block", {
      icon: "loveclab-pay0mat-wooden-block",
      category: "misc",

      bi: [
        "loveclab-item0bio-timber", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-wooden-block", 1,
      ],
    },


    "MISC: rubber block", {
      icon: "loveclab-pay0mat-rubber-block",
      category: "misc",

      bi: [
        "loveclab-item0chem-rubber", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-rubber-block", 1,
      ],
    },


  ],


};


exports.rc = rc;
