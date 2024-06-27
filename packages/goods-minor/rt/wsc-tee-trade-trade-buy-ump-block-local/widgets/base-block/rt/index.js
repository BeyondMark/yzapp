"use strict";
var r = require("~/r");
r(
  "PyuY",
  Object.assign({}, require("~/v.js").modules, {
    PyuY: function (e, t, r) {
      r.r(t);
      var u = {
          props: {
            info: { type: Object, default: () => ({}) },
            postage: { type: Object, default: () => ({}) },
            showDisplayCardPrice: { type: Boolean, default: !1 },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(u);
    },
  })
);
