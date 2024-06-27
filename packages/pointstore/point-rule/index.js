"use strict";
var r = require("~/r");
r(
  "QKN3",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    QKN3: function (t, e, r) {
      r.r(e);
      var i = r("qJXH"),
        s = getApp();
      Object(i.b)({
        data: { src: "" },
        onShow() {
          s.getPointsName().then((t) => {
            var { pointsName: e = "积分" } = t;
            wx.setNavigationBarTitle({ title: e + "规则" });
          });
        },
        onLoad(t) {
          void 0 === t && (t = {});
          var { kdt_id: e } = t;
          this.setYZData({ src: "/wscump/pointstore/pointrule?kdt_id=" + e });
        },
      });
    },
  })
);
