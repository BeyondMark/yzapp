"use strict";
var r = require("~/r");
r(
  "ErWR",
  Object.assign({}, require("~/v.js").modules, {
    ErWR: function (t, e, r) {
      r.r(e);
      var o = r("Fcif"),
        s = r("VmHG"),
        i = {
          name: "coupon-bar",
          data() {
            return Object(o.a)({}, Object(s.d)(this, ["topCouponList"]));
          },
          methods: {
            setPopupVisible(t) {
              t && this.ctx.event.emit("showCouponList");
            },
          },
        },
        u = r("9ZMt");
      e.default = u.default.component(i);
    },
  })
);
