"use strict";
var r = require("~/r");
r(
  "bP2z",
  Object.assign({}, require("~/v.js").modules, {
    bP2z: function (e, t, r) {
      r.r(t);
      var s = {
          props: {
            show: { type: Boolean, default: !1 },
            tips: { type: String, default: "店铺太火爆啦，请稍后重试" },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      t.default = o.default.component(s);
    },
  })
);
