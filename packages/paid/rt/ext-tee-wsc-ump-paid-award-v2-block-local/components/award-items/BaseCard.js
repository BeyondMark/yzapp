"use strict";
var r = require("~/r");
r(
  "qx3S",
  Object.assign({}, require("~/v.js").modules, {
    qx3S: function (e, r, t) {
      t.r(r);
      var o = {
          name: "AwardBaseCard",
          props: {
            info: { type: Object, default: () => ({}) },
            themeColor: String,
            isWxReceipt: { type: Boolean, default: () => !1 },
          },
          computed: {
            themeBackground5Style: () =>
              "background: var(--ump-coupon-bg, #f2f2ff);",
            themeBackgroundStyle() {
              return "background: " + this.themeColor + ";";
            },
            themeBorderStyle() {
              return "border-color: " + this.themeColor + ";";
            },
          },
          methods: {
            selfClick() {
              this.$emit("click-handle");
            },
          },
          ud: !0,
        },
        u = t("9ZMt");
      r.default = u.default.component(o);
    },
  })
);
