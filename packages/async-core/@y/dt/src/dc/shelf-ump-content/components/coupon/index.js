"use strict";
var r = require("~/r");
r(
  "TtGS",
  Object.assign({}, require("~/v.js").modules, {
    TtGS: function (t, e, r) {
      r.r(e);
      var o = {
          props: { item: Object },
          methods: {
            takeCoupon(t) {
              this.$emit("takeCoupon", t);
            },
          },
          ud: !0,
        },
        u = r("9ZMt");
      e.default = u.default.component(o);
    },
  })
);
