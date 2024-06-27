"use strict";
var r = require("~/r");
r(
  "4lMP",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4lMP": function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          r = s("qJXH"),
          i = s("US/N"),
          c = s("GTd8"),
          o = s("2wjL"),
          n = s("lRMv"),
          h = s("snJB"),
          d = getApp();
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
            Promise.all([Object(h.a)(), d.getPointsName()])
              .then((e) => {
                var [t, { pointsName: s = "积分" }] = e;
                t || wx.setNavigationBarTitle({ title: s + "中心" });
              })
              .catch(() => {
                wx.setNavigationBarTitle({ title: "积分中心" });
              });
          },
          onLoad(e) {
            void 0 === e && (e = {});
            var t = o.a.add("/" + this.__route__, e);
            Object(n.g)(Object(a.a)({}, e, { redirectUrl: t })).then((t) => {
              Object(c.a)(e).then((e) => {
                Object(i.default)({
                  path: "/wscuser/scrm/useNewPointsMall.json",
                  query: { checkKdtId: t || e },
                })
                  .then((s) => {
                    var a = s
                      ? "/wscshop/point-mall-showcase"
                      : "/wscump/pointstore/pointcenter";
                    this.setYZData({ src: a + "?kdt_id=" + (t || e) });
                  })
                  .catch(() => {
                    this.setYZData({
                      src: "/wscshop/point-mall-showcase?kdt_id=" + (t || e),
                    });
                  });
              });
            });
          },
        });
      },
    }
  )
);
