"use strict";
var r = require("~/r");
r(
  "zy46",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      zy46: function (e, a, t) {
        t.r(a);
        var r = t("Fcif"),
          s = t("xyw3"),
          o = t("DXqK"),
          i = t("YeA1"),
          n = t("US/N"),
          l = t("4vZ5");
        var p = {
            data: () => ({
              showAgreement: !1,
              showPayUmpDetail: !1,
              currentPhase: {},
              statusMap: l.a,
              agreement: [],
              env: {
                url: "",
                isPayPage: !1,
                takeoutAlias: "",
                successUrl: "",
                serverTime: Date.now(),
              },
              tradeTag: {},
              order: { showDepositAgreementVal: !0 },
              goods: { list: [] },
              pay: {
                prepay: !1,
                prepaySuccess: !1,
                multiPhase: !1,
                payParams: {},
                prePayParams: {},
                phasePayment: {},
                promotions: [],
                realPay: 0,
                itemPay: 0,
                postage: 0,
              },
              prepayCardDecrease: 0,
              couponDecreasedPhasePayment: 0,
              themeColors: {},
            }),
            computed: {
              showPrice() {
                var e,
                  a,
                  t,
                  r =
                    null == (e = this.tradeTag)
                      ? void 0
                      : e.hasDepositPreSaleGoods,
                  s =
                    null == (a = this.goods) || null == (t = a.list)
                      ? void 0
                      : t.length;
                return r && s > 0;
              },
              phasePayment() {
                return this.pay.phasePayment;
              },
              agreeDeposit() {
                return this.order.agreeDeposit;
              },
              showDepositAgreementVal() {
                return this.order.showDepositAgreementVal;
              },
              format: () => "YYYY-MM-DD HH:mm:ss",
              formattedGoods() {
                var e,
                  a,
                  t =
                    null == (e = this.goods) || null == (a = e.list)
                      ? void 0
                      : a.find((e) => e.presale);
                return {
                  startTime:
                    t &&
                    Object(o.d)(
                      new Date(t.presaleBalanceDueStartTime),
                      this.format
                    ),
                  endTime:
                    t &&
                    Object(o.d)(
                      new Date(t.presaleBalanceDueEndTime),
                      this.format
                    ),
                };
              },
              longPreSaleTailPayTimeStr() {
                var e, a;
                return (
                  (null == (e = this.goods) || null == (a = e.list)
                    ? void 0
                    : a.find((e) => e.presale)) || {}
                ).longPreSaleTailPayTimeStr;
              },
              phasePaymentExpandLabel() {
                var { pay: e } = this;
                return e.multiPhase
                  ? e.phasePayment.phaseItems.map((e) =>
                      e.valuePrice && e.valuePrice !== e.price
                        ? "（定金可抵 ¥ " +
                          ((e.valuePrice / 100).toFixed(2) + "）")
                        : ""
                    )
                  : [];
              },
              priceSpanWidth() {
                var { phasePayment: { phaseItems: e = [] } = {} } =
                    this.pay || {},
                  a = e.slice();
                return 0 === a.length
                  ? 0
                  : 12 +
                      7 *
                        (
                          a.sort((e, a) => a.buyerRealPay - e.buyerRealPay)[0]
                            .buyerRealPay / 100
                        )
                          .toFixed(2)
                          .toString().length;
              },
              finalPhasePayment() {
                var e,
                  a,
                  { pay: t } = this;
                if (!t.multiPhase) return [];
                if (this.env.isPayPage)
                  return null == t ||
                    null == (e = t.phasePayment) ||
                    null == (a = e.phaseItems) ||
                    null == a.map
                    ? void 0
                    : a
                        .map((e) => e.buyerRealPay)
                        .map((e) => Object(s.a)(e).toYuan());
                var { prepayCardDecrease: r } = this,
                  o = this.couponDecreasedPhasePayment,
                  i = [];
                return (
                  (i[1] = Math.max(0, o[1] - r)),
                  (r -= o[1] - i[1]),
                  (i[0] = Math.max(0, o[0] - r)),
                  i.map((e) => Object(s.a)(e).toYuan())
                );
              },
              styleVar() {
                var e = "";
                try {
                  e =
                    "--invoice-tag-active-color: " +
                    this.themeColors["main-bg"] +
                    ";";
                } catch (e) {}
                return e;
              },
            },
            created() {
              Object(i.b)(this, [
                "env",
                "tradeTag",
                "order",
                "goods",
                "pay",
                "prepayCardDecrease",
                "couponDecreasedPhasePayment",
                "themeColors",
              ]),
                this.getDepositPreSaleAgreement();
            },
            methods: {
              agreeDepositIcon() {
                this.ctx.process.invoke("mutateState", (e) => {
                  e.order.agreeDeposit = !this.agreeDeposit;
                });
              },
              onCloseAgreement() {
                this.showAgreement = !1;
              },
              onShowAgreement() {
                this.showAgreement = !0;
              },
              onClosePayUmpDetail() {
                this.showPayUmpDetail = !1;
              },
              onShowPayUmpDetail(e) {
                void 0 === e && (e = 1);
                var {
                    phasePayment: { phaseItems: a = [] },
                  } = this.data,
                  t = a[e - 1];
                t &&
                  ((this.showPayUmpDetail = !0),
                  (this.currentPhase = Object(r.a)({}, t, {
                    phase: e,
                    currentPrice: Object(s.a)(t.currentPrice).toYuan(),
                    payUmpDiscountMoney: Object(s.a)(
                      t.payUmpDiscountMoney
                    ).toYuan(),
                  })));
              },
              getDepositPreSaleAgreement() {
                Object(n.default)({
                  path: "/wsctrade/order/static-config.json",
                  method: "POST",
                  data: { keys: ["deposit_pre_sale_agreement"] },
                })
                  .then((e) => {
                    var a =
                      ((null == e ? void 0 : e.deposit_pre_sale_agreement) &&
                        JSON.parse(e.deposit_pre_sale_agreement)) ||
                      [];
                    this.agreement = a;
                  })
                  .catch((e) => {});
              },
            },
            ud: !0,
          },
          h = t("9ZMt");
        a.default = h.default.component(p);
      },
    }
  )
);
