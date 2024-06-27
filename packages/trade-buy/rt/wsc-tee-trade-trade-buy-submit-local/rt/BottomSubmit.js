"use strict";
var r = require("~/r");
r(
  "AGTO",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      AGTO: function (e, t, r) {
        r.r(t);
        var s = r("Fcif"),
          a = r("VmHG"),
          i = r("US/N"),
          o = r("z9IR"),
          c = r("AGZf"),
          n = r("KrsW"),
          l = r("ZIKc"),
          d = {
            mixins: [n.b.externalClassesMixin(["order-pay-class"])],
            data() {
              var e;
              return (
                (e = getApp().globalData.isRetailApp),
                Object(s.a)(
                  { isRetailApp: e },
                  Object(a.d)(this, [
                    "showComma",
                    "themeColors",
                    "isPayBtnLoading",
                    "display",
                    "memberCard",
                    "address",
                    "currentAddress",
                    "hasPostageToolTip",
                    "kdtId",
                    "disabled",
                    "siteTop",
                    "siteBottom",
                    "riskWarnShopPrompt",
                    "isShowRiskWarnShopPrompt",
                    "showPromotionBest",
                    "promotionBestContent",
                    "showPriorUseSummary",
                    "buttonText",
                    "orderFinalPrice",
                    "showPostage",
                    "priceLabel",
                    "formatPriceArray",
                    "pointStr",
                    "payPostage",
                    "displayPrice",
                    "showDisplayCardPrice",
                    "payRechargeInfo",
                    "state",
                    "enableUseUserAuthorize",
                  ])
                )
              );
            },
            methods: {
              setBestActivity() {
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "click",
                    ei: "trade_buy_best_price_click",
                    en: "下单页面最优价推荐条点击",
                  }),
                  this.ctx.process.invoke("setBestActivity");
              },
              handleMatchOffline() {
                this.MATCH_OFFLINE().then((e) => {
                  if (e) {
                    var [t] = this.ctx.process.invoke("confirmOrder", {
                      isStoreIdChange: !0,
                    });
                    t.then(() => {
                      o.a.confirm({
                        title: "已切换到附近可送门店",
                        message: "服务门店变更，请重新确认订单信息",
                        showCancelButton: !1,
                      });
                    });
                  } else
                    o.a.confirm({
                      message: "附近暂无可送门店",
                      showCancelButton: !1,
                    });
                });
              },
              MATCH_OFFLINE() {
                c.a.loading();
                var [e] = this.ctx.process.invoke("getDeliveryParam"),
                  t = Object(s.a)({}, this.ctx.data.order, { delivery: e });
                return Object(i.default)({
                  origin: "cashier",
                  withCredentials: !0,
                  path: "pay/wsctrade/order/buy/matchOffline.json",
                  data: t,
                  method: "POST",
                })
                  .then((e) => {
                    var t = "object" == typeof e ? e.value : e;
                    return (
                      c.a.clear(),
                      t &&
                        (this.ctx.process.invoke("mutateState", (e) => {
                          e.order.seller.storeId = t;
                        }),
                        l.a.call(this, { id: t }, 0)),
                      t
                    );
                  })
                  .catch((e) => {
                    c.a.clear(), c.a.fail(e.msg || "服务器开小差了");
                  });
              },
              submitOrder(e, t) {
                void 0 === e && (e = {}),
                  void 0 === t && (t = !1),
                  this.ctx.process.invoke("submitOrder", e, t);
              },
              noopFn() {},
            },
          },
          h = r("9ZMt");
        t.default = h.default.component(d);
      },
    }
  )
);
