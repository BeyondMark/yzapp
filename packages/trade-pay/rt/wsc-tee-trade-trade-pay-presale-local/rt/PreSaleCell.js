"use strict";
var r = require("~/r");
r(
  "RrNk",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    RrNk: function (e, t, a) {
      a.r(t);
      var r = a("Fcif"),
        s = a("US/N"),
        i = a("uzJ0"),
        n = a.n(i),
        o = a("YeA1");
      function h(e) {
        return (e / 100).toFixed(2);
      }
      var l = {
          WAIT_PAY: "待付款",
          WAIT_PAY_START: "未开始",
          PAID: "已付",
          CLOSE: "已关闭",
          SUCCESS: "已完成",
        },
        p = {
          data: () => ({
            pay: {},
            themeColors: {},
            order: {},
            showDeposit: !1,
            showAgreement: !1,
            showPayDetail: !1,
            currentPayItem: {},
            agreement: [],
            STATUS_MAP: l,
            currentPhase: {},
          }),
          computed: {
            phaseItems() {
              var e, t;
              return (
                (null == (e = this.pay) || null == (t = e.phasePayment)
                  ? void 0
                  : t.phaseItems) || []
              );
            },
            phasePaymentExpandLabel() {
              var { pay: e } = this;
              return e.multiPhase
                ? this.phaseItems.map((e) =>
                    e.valuePrice && e.valuePrice !== e.price
                      ? "（定金可抵 ¥ " + h(e.valuePrice) + "）"
                      : ""
                  )
                : [];
            },
            finalPhasePayment() {
              var { pay: e } = this;
              return e.multiPhase
                ? this.phaseItems.map((e) => e.buyerRealPay).map((e) => n()(e))
                : [];
            },
            priceSpanWidth() {
              var e = this.phaseItems
                .slice()
                .sort((e, t) => t.buyerRealPay - e.buyerRealPay)[0];
              return e ? 15 + 7 * h(e.buyerRealPay).toString().length : 0;
            },
          },
          created() {
            Object(o.b)(this, ["showDeposit", "order", "pay", "themeColors"]),
              this.getDepositPreSaleAgreement();
          },
          methods: {
            getExpandLabel: (e) =>
              e.valuePrice && e.valuePrice !== e.price
                ? "（可抵 ¥ " + h(e.valuePrice) + "）"
                : "",
            onShowPayUmpDetail(e) {
              (this.showPayDetail = !0),
                (this.currentPayItem = Object(r.a)({}, e, {
                  currentPriceStr: h(e.currentPrice),
                  payUmpDiscountMoneyStr: h(e.payUmpDiscountMoney),
                }));
            },
            closePayDetail() {
              this.showPayDetail = !1;
            },
            onShowAgreement() {
              this.showAgreement = !0;
            },
            onCloseAgreement() {
              this.showAgreement = !1;
            },
            onClosePayUmpDetail() {
              this.showPayUmpDetail = !1;
            },
            getDepositPreSaleAgreement() {
              Object(s.default)({
                path: "/wsctrade/order/static-config.json",
                method: "POST",
                data: { keys: ["deposit_pre_sale_agreement"] },
              })
                .then((e) => {
                  var t =
                    ((null == e ? void 0 : e.deposit_pre_sale_agreement) &&
                      JSON.parse(e.deposit_pre_sale_agreement)) ||
                    [];
                  this.agreement = t;
                })
                .catch((e) => {});
            },
          },
          ud: !0,
        },
        u = a("9ZMt");
      t.default = u.default.component(p);
    },
  })
);
