"use strict";
var r = require("~/r");
r(
  "JRLa",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      JRLa: function (e, r, t) {
        t.r(r);
        var u = t("EqB2"),
          s = t("STwf"),
          o = {
            mixins: [Object(u.a)({ optDesc: s.a })],
            computed: {
              showSoldNum() {
                return !!+this.opt.showSoldNum;
              },
            },
            ud: !0,
          },
          a = t("9ZMt");
        r.default = a.default.component(o);
      },
    }
  )
);
