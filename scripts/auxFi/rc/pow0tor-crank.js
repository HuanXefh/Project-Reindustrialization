const rc = {


  // craftTime: 1s


  "base": {


    "baseUpdateScr": b => {
      if(b.manualCharge < 0.0001) b.liquids.clear();
    },


  },


  "recipe": [


    /* <---------- misc ----------> */


    "MISC: torque", {

      "icon": "loveclab-aux0aux-torque",
      "category": "misc",

      "co": [
        "loveclab-aux0aux-torque", 0.33333333,
      ],

    },


  ],


};


Events.run(ClientLoadEvent, () => {
  exports.rc = rc;
});
