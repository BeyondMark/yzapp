"use strict";
var r = require("~/r");
r(
  "5Pz5",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "5Pz5": function (e, r, i) {
        i.r(r);
        var s = i("u8kV"),
          u = i("4k4N");
        Object(s.c)({
          behaviors: [u.a],
          properties: { skuRow: Object, index: Number, lastChild: Boolean },
          relations: {
            "../sku-row-item/index": { type: "child" },
            "../sku-row-prop-item/index": { type: "child" },
          },
        });
      },
    }
  )
);
