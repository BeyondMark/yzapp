"use strict";
var r = require("~/r");
r(
  "o7/l",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "o7/l": function (e, t, r) {
        r.r(t);
        var s = r("EqB2"),
          o = r("Nq99"),
          u = {
            mixins: [Object(s.a)({ optDesc: o.a })],
            props: {
              kdtId: { type: String },
              themeColors: { type: Object, default: () => ({}) },
            },
            ud: !0,
          },
          i = r("9ZMt");
        t.default = i.default.component(u);
      },
    }
  )
);
