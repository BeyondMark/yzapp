"use strict";
var r = require("~/r");
r(
  "WB7Z",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    WB7Z: function (a, r, t) {
      t.r(r);
      var e = t("qJXH"),
        s = t("2wjL");
      Object(e.b)({
        data: { path: "/wscump/groupon/guide" },
        onLoad(a) {
          var r = s.a.add(this.data.path, a);
          this.setYZData({ path: r });
        },
      });
    },
  })
);
