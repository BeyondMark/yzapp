"use strict";
var r = require("~/r");
r(
  "wwnV",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      wwnV: function (e, t, a) {
        a.r(t);
        var s = a("DXKY"),
          o = a("6i0Q"),
          i = a("MCNm"),
          d = a("7/pW"),
          h = a("VmHG"),
          n = a("1Uvd"),
          r = getApp();
        Object(d.a)({
          attached() {
            Object(h.d)(this, [
              "goodsDetailTabs",
              "activeDetailTabIndex",
              "shopLogo",
            ]),
              Object(h.d)(this, ["goodsDetail"]),
              Object(h.d)(this, {
                goods: (e) => e.goods || {},
                shop: (e) => e.shop || {},
                showcaseExtra() {
                  var { token: e = {}, shop: t = {} } = r.$store.state,
                    { chainStoreInfo: a = {} } = r.getShopInfoSync(),
                    { isMultiOnlineShop: s } = a,
                    o = s ? r.getHQKdtId() : r.getKdtId(),
                    i = {
                      appId: r.getAppId(),
                      kdtId: t.kdtId,
                      lsKdtId: o,
                      buyerId: e.userId,
                      offlineId: t.offlineId || "",
                    };
                  return (
                    null != this && this.ctx && (this.ctx.data.extraData = i), i
                  );
                },
              }),
              Object(h.b)(this, [
                "getShowcaseComponents",
                "getMaterialList",
                "getShopAbility",
                "SET_FEATURE_LOADED",
              ]),
              o.a.getThemeColor("main-bg").then((e) => {
                this.setData({ mainColor: e });
              });
          },
          data: {
            mainColor: "",
            selectedId: 0,
            selectedType: "material",
            showcaseBuyData: {},
            showShowcaseBuy: !1,
            uniqueKey: "",
            componentsLength: 0,
          },
          observers: {
            "goodsDetail.**": function (e) {
              this.initShowCase(e);
            },
          },
          ready() {
            var e = r.getKdtId();
            this.getShowcaseComponents(),
              this.getMaterialList().then((e) => {
                e > 0
                  ? this.handleTabChange({ detail: { index: 0 } })
                  : this.handleTabChange({ detail: { index: 1 } });
              }),
              this.getShopAbility(e);
          },
          detached() {
            var { uniqueKey: e } = this.data;
            i.a.clearShowcaseComponents(e);
          },
          methods: {
            onFeatureLoaded() {
              this.SET_FEATURE_LOADED();
            },
            handleTabChange(e) {
              var { detail: t } = e;
              this.setData({ selectedId: t.index });
            },
            initShowCase(e) {
              var { showcaseComponents: t } = e,
                a = this.data.goods.alias + Object(n.a)(8),
                o = new RegExp("feature-load:.+" + a);
              Object.keys(s.a._events).forEach((e) => {
                o.test(e) && s.a.off(e);
              }),
                i.a.setShowcaseComponents(t, !1, !1, a),
                this.ctx && (this.ctx.data.featureComponents = t),
                this.setData({ componentsLength: t.length, uniqueKey: a });
            },
            showcaseHandleGoodsBuy(e) {
              var { detail: t } = e,
                a = t.preSale || t.pre_sale,
                { alias: s } = t;
              1 != +a
                ? this.setData({
                    showShowcaseBuy: !0,
                    showcaseBuyData: { alias: s },
                  })
                : wx.navigateTo({
                    url: "/pages/goods/detail/index?alias=" + s,
                  });
            },
            handleSkuHide() {
              this.setData({ showShowcaseBuy: !1 });
            },
          },
        });
      },
    }
  )
);
