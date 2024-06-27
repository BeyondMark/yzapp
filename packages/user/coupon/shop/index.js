"use strict";
var r = require("~/r");
r(
  "Lk6k",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Lk6k: function (r, s, a) {
      a.r(s);
      var t = a("2wjL"),
        e = a("qJXH");
      Object(e.b)({
        data: { src: "" },
        onLoad(r) {
          var { activityId: s } = r || {};
          this.setYZData({
            src: t.a.add("/wscump/coupon/shop", { activityId: s }),
          });
        },
      });
    },
  })
);
