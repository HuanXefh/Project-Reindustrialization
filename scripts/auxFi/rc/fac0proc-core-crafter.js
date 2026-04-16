const rc = {


  // craftTime: 10s


  base: {},


  recipe: [


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


    "MISC: wooden block", {

      icon: "projreind-pay0mat-wooden-block",
      category: "misc",

      bi: [
        "loveclab-item0bio-timber", 10, 1.0,
      ],

      payo: [
        "projreind-pay0mat-wooden-block", 1,
      ],

    },


    "MISC: rubber block", {

      icon: "projreind-pay0mat-rubber-block",
      category: "misc",

      bi: [
        "loveclab-item0chem-rubber", 10, 1.0,
      ],

      payo: [
        "projreind-pay0mat-rubber-block", 1,
      ],

    },


    "MISC: clay brick block", {

      icon: "projreind-pay0mat-brick-clay",
      category: "misc",

      bi: [
        "loveclab-item0buil-brick-clay", 10, 1.0,
      ],

      payo: [
        "projreind-pay0mat-brick-clay", 1,
      ],

    },


    "MISC: magnesia brick block", {

      icon: "projreind-pay0mat-brick-magnesia",
      category: "misc",

      bi: [
        "loveclab-item0buil-brick-magnesia", 10, 1.0,
      ],

      payo: [
        "projreind-pay0mat-brick-magnesia", 1,
      ],

    },


    "MISC: high-alumina brick block", {

      icon: "projreind-pay0mat-brick-high-alumina",
      category: "misc",

      bi: [
        "loveclab-item0buil-brick-high-alumina", 10, 1.0,
      ],

      payo: [
        "projreind-pay0mat-brick-high-alumina", 1,
      ],

    },


    "MISC: mullite brick block", {

      icon: "projreind-pay0mat-brick-mullite",
      category: "misc",

      bi: [
        "loveclab-item0buil-brick-mullite", 10, 1.0,
      ],

      payo: [
        "projreind-pay0mat-brick-mullite", 1,
      ],

    },


    "MISC: silica brick block", {

      icon: "projreind-pay0mat-brick-silica",
      category: "misc",

      bi: [
        "loveclab-item0buil-brick-silica", 10, 1.0,
      ],

      payo: [
        "projreind-pay0mat-brick-silica", 1,
      ],

    },


    "MISC: carbon brick block", {

      icon: "projreind-pay0mat-brick-carbon",
      category: "misc",

      bi: [
        "loveclab-item0buil-brick-carbon", 10, 1.0,
      ],

      payo: [
        "projreind-pay0mat-brick-carbon", 1,
      ],

    },


  ],


};


exports.rc = rc;
