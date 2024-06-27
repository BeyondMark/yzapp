"use strict";
var r = require("~/r");
r(
  "sTQ/",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "sTQ/": function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          r = a("2wjL"),
          s = a("qJXH"),
          c = a("w/Za"),
          d = a("WOkX");
        Object(s.b)({
          data: { src: "" },
          onLoad(e) {
            var t = Object(i.a)({}, e),
              { q: a } = e;
            if (a) {
              var s = (function (e) {
                void 0 === e && (e = "");
                try {
                  var t = e;
                  return (
                    ~e.indexOf("?") && (t = e.split("?")[1]),
                    t.split("&").reduce((e, t) => {
                      var [a, i] = t.split("=");
                      return (e[a] = i), e;
                    }, {})
                  );
                } catch (e) {
                  return {};
                }
              })(decodeURIComponent(a));
              t = Object(i.a)({}, t, s);
            }
            var {
                type: o,
                from: n,
                alias: p,
                sl: u = "",
                orderNo: h,
                activityId: l,
                id: g,
                isRetailHide: v,
                couponType: _ = "",
              } = t,
              k = getApp().getKdtId(),
              m = o;
            if (
              (("promocard" !== o && 7 != +o) || (m = "card"),
              "list" === n ||
                "points-cash" === n ||
                "points-cash-list" === n ||
                "levelcenter" === n)
            )
              return (
                !p && g
                  ? Object(c.b)({ id: g, kdtId: k })
                      .then((t) => {
                        var { alias: a } = t;
                        this.getCanShow(Object(i.a)({}, e, { alias: a }));
                      })
                      .catch(() => {})
                  : g && this.getCanShow(e),
                void this.setYZData({
                  src: r.a.add("https://h5.youzan.com/wscump/coupon/detail", {
                    from: n,
                    couponId: g,
                    groupType: m,
                    couponType: _,
                    isRetailHide: v,
                  }),
                })
              );
            if (h) {
              var b = { kdtId: k, order_no: h };
              return (
                l && (b.activityId = l),
                void this.setYZData({
                  src: r.a.add(
                    "https://h5.youzan.com/wscump/marketing/paidpromotion/take",
                    b
                  ),
                })
              );
            }
            !p && g
              ? Object(c.b)({ id: g, kdtId: k }).then((e) => {
                  var { alias: a } = e;
                  wx.redirectTo({
                    url: Object(d.a)({
                      url: r.a.add(
                        "/packages/user/coupon/fetch/index",
                        Object(i.a)({}, t, { alias: a })
                      ),
                      sl: u,
                    }),
                  });
                })
              : p &&
                wx.redirectTo({
                  url: Object(d.a)({
                    url: r.a.add(
                      "/packages/user/coupon/fetch/index",
                      Object(i.a)({}, t)
                    ),
                    sl: u,
                  }),
                });
          },
          getCanShow(e) {
            var {
              alias: t,
              sign: a,
              sl: r,
              sales_activity_id: s,
              store_kdt_id: d,
              guide_coupon_share_type: o,
              hq_kdt_id: n,
            } = e;
            if (t) {
              var p = { alias: t };
              r && (p = Object(i.a)({}, p, { sl: r })),
                a && (p = Object(i.a)({}, p, { sign: a })),
                s &&
                  d &&
                  o &&
                  n &&
                  (p = Object(i.a)({}, p, {
                    sales_activity_id: s,
                    store_kdt_id: d,
                    guide_coupon_share_type: o,
                    hq_kdt_id: n,
                  })),
                Object(c.d)(p)
                  .then((e) => {
                    var { isShare: t = !1 } = e;
                    t || wx.hideShareMenu();
                  })
                  .catch(() => {});
            }
          },
          onShareAppMessage() {
            var e = "/packages/home/dashboard/index";
            return (
              this.token &&
                (e =
                  "/packages/user/coupon/fetch/index?handselToken=" +
                  this.token),
              {
                path: e,
                title:
                  (this.nickname || "") +
                  "送你一张优惠" +
                  ("card" === this.groupType ? "券" : "码"),
                imageUrl:
                  "card" === this.groupType
                    ? "https://img01.yzcdn.cn/upload_files/2021/08/02/Fu4BheQMKbWt05TL8uBqnWRz5To0.png"
                    : "https://img01.yzcdn.cn/upload_files/2021/08/02/Fuvq_v9_WKWHjeuxImFf3TC9wZIG.png",
              }
            );
          },
          onPostMessage(e) {
            var t = (e.detail || {}).data || [];
            t.length &&
              t.forEach((e) => {
                var { type: t, config: a = {} } = e;
                "Handsel.share" === t &&
                  ((this.token = a.token),
                  (this.nickname = a.nickname || "你的好友"),
                  (this.groupType = a.groupType || "card"));
              });
          },
        });
      },
    }
  )
);
