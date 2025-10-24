const rc = {


  // craftTime: 2s


  "base": {},


  "recipe": [


    /* <---------- aux ----------> */


    "AUX: dust recycling", {

      "icon": "loveclab-aux0aux-dust-recycling",
      "category": "aux",

      "co": [
        "loveclab-aux0aux-dust-recycling", 0.01666667,
      ],

    },


    /* <---------- misc ----------> */


    "MISC: sand", {

      "icon": "loveclab-item0ore-sand",
      "category": "misc",
      "ignoreItemFullness": true,

      "ci": [
        "loveclab-gas0misc-air", 0.1,
      ],

      "bo": [
        "loveclab-item0ore-sand", 1, 0.25,
      ],

    },


  ],


};


Events.run(ClientLoadEvent, () => {
  exports.rc = rc;
});
