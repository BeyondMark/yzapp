"use strict";
var r = require("~/r");
r(
  "NvtD",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      NvtD: function (e, t, a) {
        a.r(t);
        var r = a("Fcif"),
          u = a("S0oj"),
          s = a("JEAk"),
          n = a("ZLeP"),
          i = {
            name: "DanmakuItem",
            mixins: [u.a],
            data: () => Object(r.a)({}, n.a),
            computed: {
              type() {
                return this.sourceData.type;
              },
              themeClass: () => s.a[~~(Math.random() * s.a.length)],
            },
            ud: !0,
          },
          m = a("9ZMt");
        t.default = m.default.component(i);
      },
    }
  )
);
