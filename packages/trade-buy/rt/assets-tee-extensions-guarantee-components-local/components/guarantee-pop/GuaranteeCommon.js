"use strict";
var r = require("~/r");
r(
  "hblQ",
  Object.assign({}, require("~/v.js").modules, {
    hblQ: function (e, t, r) {
      r.r(t);
      var u = {
          props: {
            value: { type: Boolean, default: !1 },
            zIndex: { type: Number, default: 100 },
            content: { type: Object, default: () => {} },
          },
          data: () => ({}),
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(u);
    },
  })
);
