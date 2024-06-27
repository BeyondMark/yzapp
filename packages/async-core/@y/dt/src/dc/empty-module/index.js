"use strict";
var r = require("~/r");
r(
  "T4Jd",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      T4Jd: function (e, a, r) {
        r.r(a);
        var d = r("9ZMt"),
          s = r("3zOV"),
          t = r("EqB2"),
          u = {
            mixins: [Object(t.a)({ optDesc: s.a })],
            methods: {
              handleGoHome() {
                d.default.navigate({ url: "packages/home/dashboard/index" });
              },
            },
            ud: !0,
          };
        a.default = d.default.component(u);
      },
    }
  )
);
