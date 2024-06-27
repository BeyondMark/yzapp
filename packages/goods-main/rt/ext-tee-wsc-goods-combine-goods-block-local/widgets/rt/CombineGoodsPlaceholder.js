"use strict";
var r = require("~/r");
r(
  "a1d/",
  Object.assign({}, require("~/v.js").modules, {
    "a1d/": function (e, r, a) {
      a.r(r);
      var t = a("YeA1"),
        d = {
          data: () => ({ showPlaceholder: !1 }),
          created() {
            Object(t.b)(this, ["showPlaceholder"]);
          },
          ud: !0,
        },
        s = a("9ZMt");
      r.default = s.default.component(d);
    },
  })
);
