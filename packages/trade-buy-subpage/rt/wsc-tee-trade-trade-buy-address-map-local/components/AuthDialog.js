"use strict";
var r = require("~/r");
r(
  "dTO2",
  Object.assign({}, require("~/v.js").modules, {
    dTO2: function (e, t, o) {
      o.r(t);
      var r = {
          props: { show: { type: Boolean, default: !1 } },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        s = o("9ZMt");
      t.default = s.default.component(r);
    },
  })
);
