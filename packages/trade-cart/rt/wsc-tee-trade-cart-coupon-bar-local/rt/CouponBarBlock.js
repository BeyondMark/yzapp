"use strict";
var r = require("~/r");
r(
  "9FZk",
  Object.assign({}, require("~/v.js").modules, {
    "9FZk": function (e, t, a) {
      a.r(t);
      var r = a("Fcif"),
        o = a("VmHG"),
        c = {
          name: "coupon-bar-block",
          data() {
            return Object(r.a)(
              {},
              Object(o.d)(this, [
                "showCouponBar",
                "themeStyle",
                "hasCheckedGoods",
                "dataLoaded",
              ])
            );
          },
        },
        d = a("9ZMt");
      t.default = d.default.component(c);
    },
  })
);
