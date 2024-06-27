"use strict";
var r = require("~/r");
r(
  "49OC",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "49OC": function (e, r, t) {
        t.r(r);
        var s = t("Bt9F");
        Object(s.a)({
          properties: {
            customClass: { type: String },
            info: { type: Boolean, default: !1 },
          },
          data: {},
          attached() {},
          methods: {},
        });
      },
    }
  )
);
