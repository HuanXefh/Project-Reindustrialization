const rc = {


  // craftTime: 1s


  base: {


    baseUpdateScr: b => {
      // Crank should not store torque
      if(b.manualClickFrac < 0.01) b.liquids.clear();
    },


  },


  recipe: [


    /* <---------- misc ----------> */


    "MISC: torque", {

      icon: "loveclab-aux0aux-torque",
      category: "misc",

      co: [
        "loveclab-aux0aux-torque", 0.33333333,
      ],

    },


  ],


};


exports.rc = rc;
