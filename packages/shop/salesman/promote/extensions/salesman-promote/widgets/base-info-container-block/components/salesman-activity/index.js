"use strict";
var r = require("~/r");
r(
  "AjNq",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      AjNq: function (e, r, s) {
        s.r(r);
        var t = s("Bt9F");
        Object(t.a)({
          name: "salesman-activity",
          properties: {
            salesmanActivityTags: { type: Array, value: [] },
            soldNumText: { type: String },
          },
        });
      },
    }
  )
);
