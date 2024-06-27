"use strict";
var r = require("~/r");
r(
  "9AIC",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "9AIC": function (e, r, s) {
        s.r(r);
        var u = s("u8kV"),
          i = s("4k4N");
        Object(u.c)({
          behaviors: [i.a],
          methods: {
            onPayPresale() {
              this.triggerEvent("sku:buy");
            },
          },
        });
      },
    }
  )
);
