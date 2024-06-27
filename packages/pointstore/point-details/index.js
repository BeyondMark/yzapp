"use strict";
var r = require("~/r");
r(
  "5nge",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "5nge": function (e, t, a) {
        a.r(t);
        var s = a("qJXH"),
          i = a("snJB"),
          r = getApp();
        Object(s.b)({
          data: { src: "" },
          onShareAppMessage() {
            return (
              this.__webviewMsg["ZNB.share"] || {
                path: "/packages/home/dashboard/index",
              }
            );
          },
          onShow() {
            Promise.all([Object(i.a)(), r.getPointsName()])
              .then((e) => {
                var [t, { pointsName: a = "积分" }] = e;
                t || wx.setNavigationBarTitle({ title: a + "明细" });
              })
              .catch(() => {
                wx.setNavigationBarTitle({ title: "积分明细" });
              });
          },
          onLoad(e) {
            void 0 === e && (e = {});
            var { kdt_id: t } = e;
            this.setYZData({
              src: "/wscump/pointstore/pointdetails?kdt_id=" + t,
            });
          },
        });
      },
    }
  )
);
