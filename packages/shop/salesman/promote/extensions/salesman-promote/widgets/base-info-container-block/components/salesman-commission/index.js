"use strict";
var r = require("~/r");
r(
  "XP/D",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "XP/D": function (e, r, s) {
        s.r(r);
        var i = s("Bt9F");
        Object(i.a)({
          name: "SalesmanCommission",
          properties: { commissionData: { type: Object, value: {} } },
        });
      },
    }
  )
);
