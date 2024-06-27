"use strict";
var r = require("~/r");
r(
  "yOsR",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    yOsR: function (a, t, e) {
      e.r(t);
      var s = e("qJXH"),
        i = e("xyw3"),
        o = e("RY8z"),
        n = e("a1Mm"),
        r = getApp();
      Object(s.b)({
        data: {
          bannerImg: "",
          alias: "",
          goodsList: [],
          isFetching: !0,
          pageNo: 1,
          pageSize: 8,
          nomore: !1,
        },
        onLoad(a) {
          r.getShopConfigData()
            .then((t) => {
              if (0 == +t.gift_plug_status)
                return wx.showModal(
                  {
                    content: "送礼活动已结束",
                    showCancel: !1,
                    confirmText: "返回",
                  },
                  () => wx.navigateBack()
                );
              var e = a.alias;
              this.setYZData({ alias: e }),
                r.getShopInfo().then((a) => {
                  wx.setNavigationBarTitle({ title: a.shop_name });
                }),
                wx.showLoading({ title: "加载中" }),
                Promise.all([this.fetchGoodsList(), this.fetchPageBanner()])
                  .then((a) => {
                    var [t, s] = a;
                    this.setYZData({
                      alias: e,
                      goodsList: t,
                      bannerImg: s,
                      isFetching: !1,
                    }),
                      wx.hideLoading();
                  })
                  .catch((a) => {
                    wx.showToast({
                      title: a.msg || "获取商品信息失败，请刷新重试",
                      icon: "none",
                    });
                  });
            })
            .catch(() => {
              wx.showToast({
                title: "获取店铺送礼插件配置失败，请重试",
                icon: "none",
              });
            });
        },
        fetchGoodsList() {
          var { pageNo: a, pageSize: t, alias: e } = this.data;
          return new Promise((s, i) => {
            r.request({
              path: "wscump/gift/giftgoodslist.json",
              data: { alias: e, pageNo: a, pageSize: t },
              success: (a) => {
                this.setYZData({ pageNo: this.data.pageNo + 1 }),
                  s(this.mapGoodsListData(a));
              },
              fail: (a) => {
                i(a);
              },
            }).catch((a) => {
              i(a);
            });
          });
        },
        fetchPageBanner() {
          return new Promise((a, t) => {
            r.request({
              path: "wscump/gift/giftgoodsbanner.json",
              data: { alias: this.data.alias },
              success: (t) => {
                var e = Object(n.a)(t.value, "!750x310.jpg");
                a(e);
              },
              fail: (a) => {
                t(a);
              },
            }).catch((a) => {
              t(a);
            });
          });
        },
        handleGoodsClick(a) {
          var { currentTarget: t } = a,
            { dataset: e = {} } = t;
          if (!e.available)
            return wx.showToast({ title: "该送礼商品已失效", icon: "none" });
          o.a.navigate({
            url: "/pages/goods/detail/index?alias=" + e.alias + "&type=gift",
          });
        },
        mapGoodsListData: (a) =>
          a.map((a) => {
            var {
              title: t,
              image_url: e,
              price: s,
              alias: o,
              stock: r,
              available: g,
            } = a;
            return {
              imgUrl: Object(n.a)(e, "!250x250.jpg"),
              price: Object(i.a)(s).toYuan(),
              title: t,
              alias: o,
              stock: r,
              available: g,
            };
          }),
        onReachBottom() {
          var { nomore: a, goodsList: t } = this.data;
          a ||
            this.fetchGoodsList().then((a) => {
              if (!a.length) return this.setYZData({ nomore: !0 });
              var e = t.concat(a);
              this.setYZData({ goodsList: e });
            });
        },
      });
    },
  })
);
