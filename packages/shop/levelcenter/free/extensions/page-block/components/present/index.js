"use strict";
var r = require("~/r");
r(
  "AeTp",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    AeTp: function (e, r, t) {
      t.r(r);
      var s = t("rqVN");
      Object(s.b)({
        properties: { present: { type: Object } },
        data: { statusStr: "" },
        observers: {
          present(e) {
            var { status: r } = e || {},
              t = 0 === r ? " 抢完" : r > 0 ? "已发" : "";
            this.setYZData({ statusStr: t });
          },
        },
      });
    },
  })
);
