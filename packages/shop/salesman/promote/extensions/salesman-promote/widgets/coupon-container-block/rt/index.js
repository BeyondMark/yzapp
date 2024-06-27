"use strict";
var r = require("~/r");
r(
  "SZqu",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    SZqu: function (e, o, r) {
      r.r(o);
      var s = r("7/pW"),
        u = r("VmHG");
      Object(s.a)({
        name: "CouponBlock",
        attached() {
          Object(u.d)(this, ["goods", "showGoodsCoupon"]);
        },
      });
    },
  })
);
