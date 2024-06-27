"use strict";
var r = require("~/r");
r(
  "oXp9",
  Object.assign({}, require("~/v.js").modules, {
    oXp9: function (t, e, o) {
      o.r(e);
      var u = {
          props: {
            styleType: String,
            coupon: { type: Object, default: () => ({}) },
          },
          data: () => ({ valueStyle: "" }),
          mounted() {
            var t = 0;
            (t += this.coupon.unit.length), (t += this.coupon.prefix.length);
            var e = -3 * (t += this.coupon.value.length) + 38;
            e > 26 && (e = 26),
              13 === this.coupon.activityType && (e = 18),
              (this.valueStyle = "font-size: " + e + "px");
          },
          ud: !0,
        },
        n = o("9ZMt");
      e.default = n.default.component(u);
    },
  })
);
