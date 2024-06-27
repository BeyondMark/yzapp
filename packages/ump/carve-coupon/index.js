"use strict";
var r = require("~/r");
r(
  "1yKP",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "1yKP": function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("qJXH"),
          r = a("2wjL"),
          c = a("a1Mm"),
          o = a("Yt9W"),
          n = a("svh/"),
          u = a("QrL0"),
          h = a("5tio"),
          I = Object(h.a)("native_custom"),
          _ = getApp();
        Object(s.a)(
          Object(i.a)(
            {
              store: () => (
                (u.a.name = "split-coupon" + new Date() / 1e3), u.a
              ),
              mapData: Object(i.a)(
                {},
                Object(n.h)([
                  "backgroundStyle",
                  "showShare",
                  "nickName",
                  "activity",
                  "customConfig",
                  "queryOptions",
                ]),
                Object(n.f)(["activityCardInfo"])
              ),
              onLoad(t) {
                void 0 === t && (t = {}),
                  (this.$log = { act_type: "10006", act_id: t.activityId }),
                  this.initData(t);
              },
            },
            Object(n.e)(["GET_USER_LIST", "INIT_ACTIVITY_INFO"]),
            Object(n.g)([
              "SET_SHARE_VISIBLE",
              "SET_QUERY_OPTIONS",
              "SET_SHOP_NAME",
            ]),
            {
              initData(t) {
                _.getShopInfo().then((t) => {
                  var e = t.shop_name;
                  wx.setNavigationBarTitle({ title: e }), this.SET_SHOP_NAME(e);
                }),
                  this.SET_QUERY_OPTIONS(t),
                  this.fetchActivityInfo();
              },
              fetchActivityInfo() {
                this.INIT_ACTIVITY_INFO(), this.GET_USER_LIST();
              },
              onShareAppMessage() {
                var {
                    queryOptions: t,
                    customConfig: e,
                    activity: a,
                  } = this.data,
                  {
                    shareCardType: s,
                    shareCardImage: n,
                    isCustomShareCardDesc: u,
                    shareCardDesc: h,
                  } = e,
                  { totalMoney: _, hordeId: d } = a,
                  p = d ? { hordeId: d } : {},
                  O =
                    2 === s
                      ? n
                      : "https://img01.yzcdn.cn/public_files/11837ba17ab7cb986b50377c50f4be81.png",
                  T =
                    (this.data.nickName || "你的好友") +
                    "邀你瓜分" +
                    _ +
                    "元礼包，快来！",
                  b = Object(c.a)(O, "!730x0.jpg"),
                  S = u ? h : T;
                return o.b.processShareData({
                  title: S,
                  path: r.a.add(
                    "packages/ump/carve-coupon/index",
                    Object(i.a)({}, t, p, I)
                  ),
                  imageUrl: b,
                  success: () => {
                    wx.showToast({ title: "邀请发送成功", icon: "success" });
                  },
                });
              },
              onPullDownRefresh() {
                this.INIT_ACTIVITY_INFO();
              },
            }
          )
        );
      },
      "5tio": function (t, e, a) {
        a.d(e, "a", function () {
          return r;
        });
        var i = a("8B9M"),
          s = Object(i.a)(),
          r = (t) => {
            var e = (s.logger.getGlobal() || {}).user || {},
              a = { is_share: 1, share_cmpt: t };
            return e.uuid && (a.from_uuid = e.uuid || ""), a;
          };
      },
    }
  )
);
