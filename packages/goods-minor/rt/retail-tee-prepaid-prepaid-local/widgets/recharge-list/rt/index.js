"use strict";
var r = require("~/r");
r(
  "he56",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      he56: function (e, a, r) {
        r.r(a);
        var t = r("Fcif"),
          i = r("9mFz"),
          s = r("JLg1"),
          l = (e) =>
            102 === e.cardType &&
            1001 === e.cardSubType &&
            e.summaryCardNo !== s.a,
          c = {
            props: {
              recommendDetaid: String,
              newRecommend: Boolean,
              originPay: Number,
              decrease: Number,
              valueCard: Object,
              realPay: Number,
              useStoredMemberCustomerDiscount: Boolean,
              useStoreBalancePayInFull: Boolean,
            },
            data: () => ({
              productGiftPacks: [],
              kdtId: 0,
              themeColors: {},
              balanceMkExclusion: !1,
              pay: null,
              miniprogram: null,
              display: null,
            }),
            computed: {
              product() {
                return this.recommendDetaid
                  ? JSON.parse(this.recommendDetaid)
                  : null;
              },
              isRecommend() {
                return (
                  this.product &&
                  Array.isArray(this.product.productInfos) &&
                  this.product.productInfos.length > 0
                );
              },
              isRechargeFree() {
                return this.product && this.product.rechargeDiscount;
              },
              show() {
                var { miniprogram: e, display: a } = this;
                if (!e || !a) return !1;
                var { isXhsApp: r = !1, isTTApp: t = !1, isKsApp: i = !1 } = e;
                return !(r || t || i);
              },
            },
            watch: {
              product: {
                handler() {
                  this.isRechargeFree ||
                    this.isRecommend ||
                    ((this.ctx.data.payRechargeInfo = null),
                    this.changeBalance({ val: -1, clear: !0 }));
                },
                immediate: !0,
              },
            },
            created() {
              Object(i.b)(this, [
                "themeColors",
                "kdtId",
                "balanceMkExclusion",
                "miniprogram",
                "display",
              ]);
            },
            methods: {
              changeBalance(e) {
                var { val: a, clear: r = !1 } = e;
                if (r)
                  this.$emit("updateValueCard", {
                    valueCard: this.ctx.data.valueCard,
                    isSelect: !1,
                  });
                else {
                  var i,
                    c = this.valueCard.list.filter((e) => !l(e)),
                    d = c.length !== this.valueCard.list.length,
                    u = this.valueCard.list.find((e) => l(e)) || {},
                    n = this.valueCard.list.filter(
                      (e) => e.summaryCardNo !== s.a
                    ),
                    o = n.length !== this.valueCard.list.length,
                    h = Number.isInteger(u.originBalance)
                      ? u.originBalance
                      : u.balance;
                  if (-1 === a)
                    i = Object(t.a)({}, this.valueCard, {
                      list: o ? n : [Object(t.a)({}, u, { balance: h }), ...c],
                      checked: this.valueCard.checked.filter(
                        (e) => e !== s.a && e !== u.summaryCardNo
                      ),
                    });
                  else {
                    var m = {
                      cardType: 102,
                      cardSubType: 1001,
                      balance: a,
                      summaryCardNo: s.a,
                      usable: !0,
                    };
                    i = Object(t.a)({}, this.valueCard, {
                      checked: [
                        ...this.valueCard.checked,
                        d ? u.summaryCardNo : s.a,
                      ],
                      list: d
                        ? [
                            ...c,
                            Object(t.a)({}, u, {
                              originBalance: h,
                              balance: h + a,
                            }),
                          ]
                        : [...n, m],
                    });
                  }
                  this.$emit("updateValueCard", {
                    valueCard: i,
                    isSelect: -1 !== a,
                  });
                }
              },
            },
            ud: !0,
          },
          d = r("9ZMt");
        a.default = d.default.component(c);
      },
    }
  )
);
