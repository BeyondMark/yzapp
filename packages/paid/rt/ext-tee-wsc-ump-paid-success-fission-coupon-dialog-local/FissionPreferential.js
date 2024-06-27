"use strict";
var r = require("~/r");
r(
  "omf8",
  Object.assign({}, require("../../c.js").modules, require("~/v.js").modules, {
    omf8: function (t, e, u) {
      u.r(e);
      var r = u("1yfI"),
        n = {
          name: "fission-perferential",
          props: {
            prefix: { type: String, default: "" },
            amount: { type: String, default: "" },
            unit: { type: String, default: "" },
            quantity: { type: Number, default: 0 },
          },
          data: () => ({ CouponType: r.a }),
          computed: {
            curAmount() {
              return isNaN(+this.amount) ? this.amount : +this.amount;
            },
            isShowOnlyText() {
              return "string" == typeof this.curAmount;
            },
          },
          ud: !0,
        },
        i = u("9ZMt");
      e.default = i.default.component(n);
    },
  })
);
