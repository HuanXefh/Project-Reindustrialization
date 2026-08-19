/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_itemArm");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- dis0arm ----------> */


  const dis0arm_primitiveItemArm = extendBlock(
    TEMPLATE, "dis0arm-primitive-item-arm",
    TEMPLATE[0].build({
      moveTime: 36.0,
      moveStackAmt: 3,
      itmDrawOff: 9.5,
    }),
  );


  const dis0arm_primitiveLongItemArm = extendBlock(
    TEMPLATE, "dis0arm-primitive-long-item-arm",
    TEMPLATE[0].build({
      moveTime: 45.0,
      moveR: 2,
      moveStackAmt: 3,
      itmDrawOff: 16.5,
    }),
  );


  const dis0arm_heavyItemArm = extendBlock(
    TEMPLATE, "dis0arm-heavy-item-arm",
    TEMPLATE[0].build({
      moveTime: 36.0,
      pickCooldown: 528.0,
      moveStackAmt: 25,
      itmDrawOff: 9.5,
    }),
  );
