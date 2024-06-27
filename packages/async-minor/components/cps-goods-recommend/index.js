"use strict";
var r = require("~/r");
r(
  "vhIb",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vhIb: function (e, t, a) {
      a.r(t);
      var s = a("Fcif"),
        r = a("rqVN"),
        i = a("OPDa"),
        n = a("1Uvd"),
        o = getApp(),
        d = { pageNum: 1, pageSize: 2, bizName: "promotion~cps" };
      Object(r.b)({
        properties: {
          kdtId: { type: Number, value: o.getKdtId() },
          buyerId: { type: Number, value: o.getBuyerId() },
          cpsConfigKey: { type: String, value: "" },
          wrapperType: { type: String, value: "card" },
        },
        data: { goods: [], visible: !1 },
        attached() {
          var { cpsConfigKey: e } = this.data;
          o.request({
            path: "/wscstatcenter/cps/queryCpsConfig.json",
            method: "GET",
            data: { params: JSON.stringify({ configKeys: [e] }) },
          })
            .then((t) => {
              if (t[e]) {
                var { enable: a } = JSON.parse(t[e]);
                a &&
                  (this.setYZData({ visible: !0 }),
                  this.getRecommendResultData());
              }
            })
            .catch((e) => {
              wx.showToast({
                title: e.msg || "店铺配置获取失败",
                icon: "none",
              });
            });
        },
        methods: {
          getRecommendResultData() {
            o.request({
              path: "wscstatcenter/recommend/getRecommendResultData.json",
              method: "GET",
              data: {
                params: Object(s.a)({}, d, {
                  kdtId: this.data.kdtId,
                  buyerId: this.data.buyerId,
                }),
              },
            })
              .then((e) => {
                var { list: t = [] } = e;
                this.setYZData({ goods: t }),
                  o.logger &&
                    o.logger.log({
                      et: "view",
                      ei: "component_view",
                      en: "周边好物入口展示",
                      params: { banner_id: this.getBannerId() },
                    });
              })
              .catch((e) => {
                this.setYZData({ visible: !1 }),
                  wx.showToast({
                    title: e.msg || "推荐列表获取失败",
                    icon: "none",
                  });
              });
          },
          getBannerId: () =>
            i.a.getPageSpmTypeId() + "~cpsShopRecommend.0~0~" + Object(n.a)(8),
          navigateToList() {
            wx.navigateTo({
              url:
                "/packages/statcenter/cps-goods-list/index?banner_id=" +
                this.getBannerId(),
            });
          },
        },
      });
    },
  })
);
