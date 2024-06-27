"use strict";
var r = require("~/r");
r(
  "EWYA",
  Object.assign({}, require("~/v.js").modules, {
    EWYA: function (e, r, t) {
      t.r(r);
      var u = {
          props: {
            prompt: { type: Object, default: () => ({}) },
            goods: { type: Array, default: () => [] },
          },
          ud: !0,
        },
        a = t("9ZMt");
      r.default = a.default.component(u);
    },
  })
);
