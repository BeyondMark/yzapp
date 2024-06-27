"use strict";
var r = require("~/r");
r(
  "pch/",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "pch/": function (e, r, t) {
        t.r(r);
        var s = t("rqVN"),
          a = t("pIjP");
        Object(s.b)({
          properties: { time: Number },
          options: { addGlobalClass: !0 },
          attached() {
            var e = a.a.formatTime(1e3 * this.data.time);
            this.setYZData({ formatedTime: e });
          },
        });
      },
    }
  )
);
