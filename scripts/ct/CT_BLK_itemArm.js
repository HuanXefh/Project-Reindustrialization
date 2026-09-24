/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_itemArm = require("lovec/temp/blk/BLK_itemArm");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ dis0arm ------------------------------> */


    const dis0arm_primitiveItemArm = extendBlock(
        BLK_B_itemArm, "dis0arm-primitive-item-arm",
        BLK_B_itemArm[0].build({
            moveTime: 36.0,
            moveStackAmt: 3,
            itemDrawOff: 9.5,
        }),
    );


    const dis0arm_primitiveLongItemArm = extendBlock(
        BLK_B_itemArm, "dis0arm-primitive-long-item-arm",
        BLK_B_itemArm[0].build({
            moveTime: 45.0,
            moveR: 2,
            moveStackAmt: 3,
            itemDrawOff: 16.5,
        }),
    );


    const dis0arm_heavyItemArm = extendBlock(
        BLK_B_itemArm, "dis0arm-heavy-item-arm",
        BLK_B_itemArm[0].build({
            moveTime: 36.0,
            pickCooldown: 528.0,
            moveStackAmt: 25,
            itemDrawOff: 9.5,
        }),
    );
