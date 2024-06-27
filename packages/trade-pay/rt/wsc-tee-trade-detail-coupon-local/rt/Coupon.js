"use strict";
var r = require("~/r");
r(
  "sCVL",
  Object.assign({}, require("~/v.js").modules, {
    sCVL: function (e, t, o) {
      o.r(t);
      var r = o("Fcif"),
        u = o("VmHG"),
        c = {
          data() {
            return Object(r.a)(
              {},
              Object(u.d)(this, [
                "coupon",
                "couponCode",
                "display",
                "rootStyle",
                "couponInfo",
              ])
            );
          },
        },
        n = o("9ZMt");
      t.default = n.default.component(c);
    },
  })
);
