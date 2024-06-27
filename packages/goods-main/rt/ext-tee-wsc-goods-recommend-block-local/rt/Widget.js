"use strict";
var r = require("~/r");
r(
  "UYwx",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    UYwx: function (o, e, t) {
      t.r(e);
      var s = t("YeA1"),
        i = t("Shdd"),
        n = {
          name: "recommend-block",
          data: () => ({
            disableGoodsRecommend: !1,
            themeVars: "",
            multistore: {},
            shopBaseInfo: {},
            shopConfig: {},
            shopMetaInfo: {},
            goodsBaseInfo: {},
            goodsPriceInfo: {},
            currentActivity: {},
            isFastBuy: !1,
            appConfig: {},
            layoutConfig: { type: "two", layoutMargin: 16, itemMargin: 8 },
            more: { url: "", text: "进店逛逛", title: "更多精选商品" },
            recommendGoods: [],
          }),
          computed: {
            hasRecommendGoods() {
              return this.recommendGoods.length > 0;
            },
            showRecommend() {
              return (
                !this.disableGoodsRecommend &&
                !this.isFastBuy &&
                this.shopConfig.showRecommendGoods
              );
            },
            showGroupon() {
              var o;
              return (
                "groupOn" ===
                (null == (o = this.currentActivity) ? void 0 : o.type)
              );
            },
          },
          created() {
            Object(s.b)(this, [
              "themeVars",
              "multistore",
              "shopBaseInfo",
              "shopConfig",
              "shopMetaInfo",
              "goodsPriceInfo",
              "disableGoodsRecommend",
              "currentActivity",
            ]),
              Object(s.b)(this, { goodsBaseInfo: () => this.init() }),
              Object(s.b)(this, {
                openAppConfig: (o) => {
                  this.appConfig = o.appConfig || {};
                },
              }),
              Object(s.e)(this, {
                getNavItemTop: Object(i.b)(
                  this,
                  "#js-nav-recommend",
                  "recommendBlock"
                ),
              }),
              Object(s.d)(this, {
                loadSuccess: (o) => {
                  this.recommendGoods = [...this.recommendGoods, ...o];
                },
              });
          },
          methods: {
            init() {
              Object.assign(this.ctx.data, {
                recommendTitle: "",
                bizName: "g~bottom",
                layoutConfig: {
                  showRecommendTags: !0,
                  imageFillStyle: 1,
                  showBuyButton: 1,
                },
                requestExtraParams: ["note", "coupon"],
                extraParams: { goodsIds: this.goodsBaseInfo.id },
              });
            },
            goToPage() {
              this.ctx.dmc.switchTab("Home", {
                kdt_id: this.shopBaseInfo.kdtId,
              });
            },
          },
          ud: !0,
        },
        d = t("9ZMt");
      e.default = d.default.component(n);
    },
  })
);
