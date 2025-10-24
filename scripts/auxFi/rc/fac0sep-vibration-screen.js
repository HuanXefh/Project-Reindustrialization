const rc = {


  // craftTime: 5s


  "base": {},


  "recipe": [


    /* <---------- aux ----------> */


    "AUX: vibration screen", {

      "icon": "loveclab-aux0aux-vibration-screen",
      "category": "aux",

      "co": [
        "loveclab-aux0aux-vibration-screen", 0.03333333,
      ],

    },


    /* <---------- misc ----------> */


    // TODO: Asbestos


  ],


};


(() => {}).setTodo("Asbestos, and how to get asbestos wool in a vibration screen.");


Events.run(ClientLoadEvent, () => {
  exports.rc = rc;
});
