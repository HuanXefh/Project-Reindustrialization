const rc = {


  // craftTime: 5s


  "base": {


    "baseOpt": [
      "loveclab-item0bio-charcoal", 1, 0.6, 1.0,
    ],


  },


  "recipe": [


    /* <---------- misc ----------> */


    "MISC: air (clean)", {

      "icon": "loveclab-gas0int-air-clean",
      "category": "misc",
      "ignoreItemFullness": true,

      "ci": [
        "loveclab-gas0misc-air", 0.2,
      ],

      "reqOpt": true,

      "co": [
        "loveclab-gas0int-air-clean", 0.2,
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
