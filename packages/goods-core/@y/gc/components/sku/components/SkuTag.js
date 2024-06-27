"use strict";
var r = require("~/r");
r(
  "05kt",
  Object.assign({}, require("~/v.js").modules, {
    "05kt": function (t, e, r) {
      r.r(e);
      var a = {
          props: {
            tags: { type: Array, default: () => [] },
            round: { type: Boolean, default: !1 },
            plain: { type: Boolean, default: !1 },
            customTagStyle: String,
          },
          ud: !0,
        },
        u = r("9ZMt");
      e.default = u.default.component(a);
    },
  })
);
