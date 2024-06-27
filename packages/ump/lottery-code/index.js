"use strict";
var r = require("~/r");
r(
  "0Gul",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "0Gul": function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("Yt9W"),
          n = a("svh/"),
          r = a("qJXH"),
          o = a("7rEJ"),
          c = a("otsx"),
          I = a("lOyf"),
          h = getApp(),
          _ = Object(I.a)();
        Object(r.a)(
          Object(s.a)(
            {
              store: () => (
                (o.a.name = "lottery-code" + new Date() / 1e3), o.a
              ),
              mapData: Object(s.a)(
                {},
                Object(n.f)(["taskList", "showEnd"]),
                Object(n.h)({
                  shareLink: (e) => e.shareLink,
                  nickName: (e) => e.userInfo.nickName,
                  status: (e) => e.activity.status,
                  prizeDesc: (e) => e.activity.prizeDesc,
                  showRecommend: (e) => e.recommendGoods.length,
                  navigationInfo: (e) => e.navigationInfo,
                })
              ),
            },
            Object(n.g)([
              "INIT_PAGE_QUERY",
              "SET_SHOP_NAME",
              "INIT_NAVIGATION",
            ]),
            Object(n.e)(["GET_ACTIVITY", "GET_SLIDER_LIST"]),
            {
              data: { statusMap: Object.freeze(c.m), isIphoneX: _ },
              onLoad(e) {
                (this.$log = { act_type: "10006", act_id: e.alias }),
                  this.INIT_PAGE_QUERY(e),
                  this.getNaviationInfo(),
                  Promise.all([this.GET_ACTIVITY(), this.GET_SLIDER_LIST()]),
                  h.getShopInfo().then((e) => {
                    var t = e.shop_name;
                    this.SET_SHOP_NAME(t);
                  });
              },
              onShareAppMessage() {
                var { shareLink: e, nickName: t = "你的好友" } = this.data,
                  a = t + "送你一张抽奖码，免费抽大奖。";
                return i.b.processShareData({
                  title: a,
                  imageUrl:
                    "https://img01.yzcdn.cn/upload_files/2020/04/16/FnL4-A1zLZ7tnUpK3MW6sN0cXGHF.jpg",
                  path: e,
                });
              },
              getNaviationInfo() {
                var { statusBarHeight: e, system: t } = wx.getSystemInfoSync(),
                  a = t.indexOf("iOS") > -1 ? 44 : 48;
                this.INIT_NAVIGATION({ statusBarHeight: e, navHeight: a });
              },
            }
          )
        );
      },
    }
  )
);
