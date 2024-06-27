"use strict";
var r = require("~/r");
r(
  "VwlP",
  Object.assign({}, require("~/v.js").modules, {
    VwlP: function (e, t, o) {
      o.r(t);
      var s = {
          props: {
            checked: Boolean,
            showTip: Boolean,
            protocols: { type: Array, default: () => [] },
          },
          computed: {
            disabled() {
              return !this.protocols || 0 === this.protocols.length;
            },
          },
          methods: {
            onChange() {
              this.disabled || this.$emit("check", { checked: !this.checked });
            },
            onItemTap(e) {
              this.$emit("item-tap", e);
            },
          },
          ud: !0,
        },
        r = o("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
