"use strict";
var r = require("~/r");
r(
  "Ooav",
  Object.assign({}, require("~/v.js").modules, {
    Ooav: function (e, t, a) {
      a.r(t);
      var r = {
          props: {
            themeCss: { type: String, default: "" },
            env: { type: Object, default: () => ({}) },
            display: { type: Object, default: () => ({}) },
            tradeTag: { type: Object, default: () => ({}) },
            haitaoZeroOrder: { type: Boolean, default: !1 },
          },
          computed: {
            showTips() {
              return (
                this.tradeTag.hasOverseaGoods &&
                this.display.headPrompt &&
                !this.env.isPayPage
              );
            },
            headPrompt() {
              return this.haitaoZeroOrder
                ? "因海关清关需要，每件海淘商品最低支付0.01元"
                : this.display.headPrompt;
            },
          },
          ud: !0,
        },
        s = a("9ZMt");
      t.default = s.default.component(r);
    },
  })
);
