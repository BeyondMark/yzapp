"use strict";
var r = require("~/r");
r(
  "w1Gj",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      w1Gj: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          r = a("qJXH"),
          i = a("2wjL"),
          o = a("GTd8"),
          c = a("snJB"),
          n = getApp();
        Object(r.b)({
          data: { src: "" },
          onShareAppMessage() {
            return (
              this.__webviewMsg["ZNB.share"] || {
                path: "/packages/home/dashboard/index",
              }
            );
          },
          onShow() {
            Promise.all([Object(c.a)(), n.getPointsName()])
              .then((e) => {
                var [t, { pointsName: a = "积分" }] = e;
                t || wx.setNavigationBarTitle({ title: "花" + a });
              })
              .catch(() => {
                wx.setNavigationBarTitle({ title: "花积分" });
              });
          },
          onLoad(e) {
            void 0 === e && (e = {});
            var { tab: t } = e,
              a = {};
            t && (a.tab = t),
              Object(o.a)(e).then((e) => {
                this.setYZData({
                  src: i.a.add(
                    "/wscump/pointstore",
                    Object(s.a)({}, a, { kdt_id: e })
                  ),
                });
              });
          },
        });
      },
    }
  )
);
