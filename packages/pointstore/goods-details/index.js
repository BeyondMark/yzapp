"use strict";
var r = require("~/r");
r(
  "rCS2",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      rCS2: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("qJXH"),
          r = a("2wjL"),
          o = a("GTd8"),
          d = a("snJB"),
          n = getApp();
        Object(i.b)({
          data: { src: "" },
          onShareAppMessage() {
            return (
              this.__webviewMsg["ZNB.share"] || {
                path: "/packages/home/dashboard/index",
              }
            );
          },
          onShow() {
            Promise.all([Object(d.a)(), n.getPointsName()])
              .then((e) => {
                var [t, { pointsName: a = "积分" }] = e;
                t
                  ? wx.setNavigationBarTitle({ title: "兑换详情" })
                  : wx.setNavigationBarTitle({ title: a + "商品详情" });
              })
              .catch(() => {
                wx.setNavigationBarTitle({ title: "积分商品详情" });
              });
          },
          onLoad(e) {
            void 0 === e && (e = {});
            var t = {},
              { goods_id: a } = e;
            a && (t.goods_id = a),
              Object(o.a)(e).then((e) => {
                this.setYZData({
                  src: r.a.add(
                    "/wscump/pointstore/goodsdetails",
                    Object(s.a)({}, t, { kdt_id: e })
                  ),
                });
              });
          },
        });
      },
    }
  )
);
