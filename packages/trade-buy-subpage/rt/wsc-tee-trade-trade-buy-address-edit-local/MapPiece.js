"use strict";
var r = require("~/r");
r(
  "GHpx",
  Object.assign({}, require("~/v.js").modules, {
    GHpx: function (e, t, r) {
      r.r(t);
      var a = {
          props: {
            map: { type: Object, default: () => ({}) },
            showMarkerLabel: { type: Boolean, default: !0 },
          },
          methods: {
            onClick() {
              this.$emit("click");
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      t.default = o.default.component(a);
    },
  })
);
