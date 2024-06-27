"use strict";
var r = require("~/r");
r(
  "vQFa",
  Object.assign({}, require("~/v.js").modules, {
    vQFa: function (t, e, r) {
      r.r(e);
      var u = {
          props: { customStyle: { type: String, default: "" } },
          methods: {
            jumpOut() {
              this.$emit("jump");
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      e.default = s.default.component(u);
    },
  })
);
