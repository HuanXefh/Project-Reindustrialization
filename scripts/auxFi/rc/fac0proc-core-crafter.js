const rc = {


  // craftTime: 10s


  "base": {},


  "recipe": [


    /* <---------- misc ----------> */


    "MISC: timber", {

      "icon": "loveclab-item0bio-timber",
      "category": "misc",

      "bi": [
        "loveclab-item0bio-log", 10, 1.0,
      ],

      "bo": [
        "loveclab-item0bio-timber", 5, 1.0,
      ],

      "failP": 0.1,
      "fo": [],

    },


  ],


};


Events.run(ClientLoadEvent, () => {
  exports.rc = rc;
});
