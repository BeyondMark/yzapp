"use strict";
var r = require("~/r");
r(
  "zbV2",
  Object.assign({}, require("~/v.js").modules, {
    zbV2: function (t, e, r) {
      r.r(e);
      var i = {
          name: "AwardContainer",
          props: {
            customStyle: { type: String, default: "" },
            isWxReceipt: { type: Boolean, default: () => !1 },
          },
          computed: {
            rootClass: () => ({ root: "award-container" }),
            rootStyle() {
              return (
                (this.isWxReceipt ? "width: 100%;padding: 0;" : "") +
                this.customStyle
              );
            },
          },
          methods: {
            click() {
              this.$emit("click");
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      e.default = o.default.component(i);
    },
  })
);
