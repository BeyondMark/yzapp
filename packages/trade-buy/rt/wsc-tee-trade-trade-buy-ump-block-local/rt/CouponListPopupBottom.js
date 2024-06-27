"use strict";
var r = require("~/r");
r(
  "VHxY",
  Object.assign({}, require("~/v.js").modules, {
    VHxY: function (t, e, r) {
      r.r(e);
      var o = {
          name: "coupon-list-popup-bottom",
          props: {
            firstBtnText: { type: String, default: "不使用优惠券" },
            secondBtnText: { type: String, default: "确定" },
          },
          methods: {
            onClear() {
              this.$emit("clear");
            },
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      e.default = s.default.component(o);
    },
  })
);
