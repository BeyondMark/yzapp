"use strict";
var r = require("~/r");
r(
  "AeXT",
  Object.assign({}, require("~/v.js").modules, {
    AeXT: function (e, t, r) {
      r.r(t);
      var o = {
          props: {
            showArrow: { type: Boolean, default: !0 },
            customStyle: { type: Object, default: () => ({}) },
          },
          methods: { onClick() {} },
          ud: !0,
        },
        u = r("9ZMt");
      t.default = u.default.component(o);
    },
  })
);
