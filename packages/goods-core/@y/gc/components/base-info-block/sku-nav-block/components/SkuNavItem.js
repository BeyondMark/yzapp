"use strict";
var r = require("~/r");
r(
  "TEIk",
  Object.assign({}, require("~/v.js").modules, {
    TEIk: function (e, t, r) {
      r.r(t);
      var u = {
          name: "SkuNavItem",
          props: { url: String, isActive: { type: Boolean, default: !1 } },
          methods: {
            handleSelectSkuNav() {
              this.$emit("click");
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(u);
    },
  })
);
