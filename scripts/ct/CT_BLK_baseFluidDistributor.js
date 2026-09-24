/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_fluidJunction = require("lovec/temp/blk/BLK_fluidJunction");
    const BLK_B_fluidValve = require("lovec/temp/blk/BLK_fluidValve");
    const BLK_B_fluidFilter = require("lovec/temp/blk/BLK_fluidFilter");
    const BLK_B_fluidOverflowGate = require("lovec/temp/blk/BLK_fluidOverflowGate");
    const BLK_B_directionalFluidRouter = require("lovec/temp/blk/BLK_directionalFluidRouter");
    const BLK_B_fluidUnloader = require("lovec/temp/blk/BLK_fluidUnloader");
    const BLK_B_fluidPressureValve = require("lovec/temp/blk/BLK_fluidPressureValve");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ bliq0aux ------------------------------> */


    const bliq0aux_fluidJunction = extendBlock(
        BLK_B_fluidJunction, "bliq0aux-fluid-junction",
    );


    const bliq0aux_fluidValve = extendBlock(
        BLK_B_fluidValve, "bliq0aux-fluid-valve",
    );


    const bliq0aux_fluidFilterValve = extendBlock(
        BLK_B_fluidFilter, "bliq0aux-fluid-filter-valve",
    );


    const bliq0aux_fluidOverflowValve = extendBlock(
        BLK_B_fluidOverflowGate, "bliq0aux-fluid-overflow-valve",
    );


    const bliq0aux_pressureRouter = extendBlock(
        BLK_B_directionalFluidRouter, "bliq0aux-pressure-router",
    );


    const bliq0aux_primitivePressureValve = extendBlock(
        BLK_B_fluidPressureValve, "bliq0aux-primitive-pressure-valve",
    );


    const bliq0aux_fluidUnloader = extendBlock(
        BLK_B_fluidUnloader, "bliq0aux-fluid-unloader",
    );
