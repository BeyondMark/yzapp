"use strict";
var r = require("~/r");
r(
  "CImY",
  Object.assign({}, require("~/v.js").modules, {
    CImY: function (t, e, r) {
      r.r(e);
      var a = r("YeA1"),
        c = {
          data: () => ({ currentContact: {} }),
          created() {
            Object(a.b)(this, ["currentContact"]);
          },
          ud: !0,
        },
        u = r("9ZMt");
      e.default = u.default.component(c);
    },
  })
);
