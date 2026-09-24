/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_conveyor = require("lovec/temp/blk/BLK_conveyor");
    const BLK_B_armoredConveyor = require("lovec/temp/blk/BLK_armoredConveyor");
    const BLK_B_stackConveyor = require("lovec/temp/blk/BLK_stackConveyor");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dis0conv ------------------------------> */


    const dis0conv_woodenConveyor = extendBlock(
        BLK_B_conveyor, "dis0conv-wooden-conveyor",
    );


    const dis0conv_primitiveConveyor = extendBlock(
        BLK_B_armoredConveyor, "dis0conv-primitive-conveyor",
    );


    const dis0conv_standardConveyor = extendBlock(
        BLK_B_armoredConveyor, "dis0conv-standard-conveyor",
    );


    const dis0conv_multiPortConveyor = extendBlock(
        BLK_B_stackConveyor, "dis0conv-multi-port-conveyor",
    );
