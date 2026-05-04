const rc = {


  // craftTime: 4s


  base: {},


  recipe: [],


};


TP_recipeGen._g_auxTemp.run(rc, {
  tg: "loveclab-aux0aux-tube-furnace",
  maxTemp: 1800.0,
});
TP_recipeGen._g_heaterGas.run(rc, {
  amt: 4,
  time: 4.0 * 60.0,
});


exports.rc = rc;
