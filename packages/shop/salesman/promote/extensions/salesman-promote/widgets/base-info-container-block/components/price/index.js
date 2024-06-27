"use strict";
var r = require("~/r");
r(
  "15n4",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "15n4": function (e, r, s) {
        s.r(r);
        var i = s("Bt9F");
        Object(i.a)({
          name: "GoodsPrice",
          properties: {
            goods: { type: Object, value: {} },
            showOriginPrice: { type: Object, value: {} },
            commissionData: { type: Object },
          },
        });
      },
    }
  )
);
