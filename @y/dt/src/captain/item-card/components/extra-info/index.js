"use strict";
var r = require("~/r");
r(
  "uwp1",
  Object.assign({}, require("~/v.js").modules, {
    uwp1: function (e, t, u) {
      u.r(t);
      var r = u("EqB2"),
        a = u("/XVY"),
        i = Object(a.a)({
          align: { default: "left" },
          list: { default: () => [] },
        }),
        s = { mixins: [Object(r.a)({ optDesc: i })], ud: !0 },
        l = u("9ZMt");
      t.default = l.default.component(s);
    },
  })
);
