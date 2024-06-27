"use strict";
var r = require("~/r");
r(
  "MTS1",
  Object.assign({}, require("~/v.js").modules, {
    MTS1: function (e, t, o) {
      o.r(t);
      var s = o("Fcif"),
        i = o("VmHG"),
        r = o("YeA1"),
        a = {
          props: {
            useCustomTitleSlot: Boolean,
            showAmount: { type: Boolean, default: !0 },
          },
          data() {
            return (
              (this.store = this.ctx.store),
              Object(s.a)(
                {
                  customFreightTitle: "运费券",
                  deliveryCouponGroupType: 16,
                  dataLoaded: !1,
                  postage: {},
                  formatPostageData: {},
                  orderFinalPrice: "0.00",
                },
                Object(i.d)(this, [
                  "themeColors",
                  "points",
                  "pointDesc",
                  "orderCreated",
                  "kdtId",
                  "orderPromotions",
                  "couponOpt",
                  "deliveryCouponOpt",
                  "isShowCouponCell",
                  "isShowDeliveryCouponCell",
                  "showPlusBuy",
                  "showPlusPop",
                  "plusBuyGoodsList",
                  "selectedCount",
                  "payPrice",
                  "hasReward",
                  "promotionInfo",
                  "umpBlockBase",
                  "showDisplayCardPrice",
                ])
              )
            );
          },
          computed: {
            isShow() {
              var { expressType: e } = this.selected;
              return 0 === e || 2 === e;
            },
            selected() {
              var e,
                { currentExpressType: t } = this.postage,
                o = "number" == typeof t ? t : this.defaultExpressType,
                i =
                  (
                    (null == (e = this.postage) ? void 0 : e.postageItems) || []
                  ).find((e) => e.expressType === o) || {},
                { originPostage: r = 0, postage: a = 0 } = i,
                p = (r - a) / 100;
              return Object(s.a)({}, i, {
                discount: p,
                discountPrice: p.toFixed(2),
                originPostage: r ? (r / 100).toFixed(2) : "0.00",
                postage: a ? (a / 100).toFixed(2) : "0.00",
                postageTitle: "同城配送" === i.postageTitle ? "配送费" : "运费",
              });
            },
          },
          created() {
            Object(r.b)(this, [
              "dataLoaded",
              "postage",
              "orderFinalPrice",
              "valueCard",
            ]),
              this.initActions(),
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "view",
                  ei: "trade_ump_block_view",
                  en: "下单页面ump模块曝光",
                });
          },
          methods: {
            initActions() {
              Object(i.b)(this, [
                "onActivityCellClick",
                "showRewardPopup",
                "confirmBestPrice",
                "closePlusSwipe",
              ]);
            },
          },
        },
        p = o("9ZMt");
      t.default = p.default.component(a);
    },
  })
);
