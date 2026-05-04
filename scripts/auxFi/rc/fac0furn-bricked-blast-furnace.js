const rc = {


  // craftTime: 60s


  base: {},


  recipe: [],


};


TP_recipeGen._g_reactorMelt.run(rc, {
  time: 60.0 * 60.0,
  amt: 240,
  maxTemp: 2000.0,
});
TP_recipeGen._g_smelter.run(rc, {
  isConcentrate: true,
  amt: 240,
  maxTemp: 2000.0,
});


exports.rc = rc;
