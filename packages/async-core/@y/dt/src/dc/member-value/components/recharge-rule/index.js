"use strict";
var r = require("~/r");
r(
  "qbFI",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      qbFI: function (e, t, r) {
        r.r(t);
        var a = r("HlaY"),
          i = r("zMoS"),
          o = r("9ZMt"),
          s = ["", "red", "yellow", "white", "black", "green"];
        function c(e) {
          return parseFloat(Math.abs(e) / 100);
        }
        var n = {
          props: {
            rechargeRules: { type: Array, value: [] },
            kdtId: { type: String },
            ruleCardColor: { type: Number, value: 1 },
            memberTemplateType: { type: String, default: "0" },
            themeColors: Object,
            cardBgColor: String,
            pageMargin: Number,
            bgColor: String,
            cardBorderRadius: Number,
          },
          data: () => ({
            rechargeRuleList: [],
            isMode1: !1,
            className: "",
            balance: 0,
          }),
          computed: {
            firstItem() {
              return this.rechargeRuleList[0] || {};
            },
            rechargeText() {
              var { firstItem: e } = this;
              return (
                "充" + e.formatAmount + "元" + (e.slogan || e.giftPackContext)
              );
            },
          },
          watch: {
            memberTemplateType: {
              handler(e) {
                "0" !== e && this.fetchBalance();
              },
              immediate: !0,
            },
            kdtId(e, t) {
              e > 0 && +e != +t && this.init();
            },
          },
          mounted() {
            this.init();
          },
          methods: {
            init() {
              this.fetchRuleList();
            },
            fetchRuleList() {
              var e = this.rechargeRules;
              if (!e || 0 === e.length)
                return (this.rechargeRuleList = []), void (this.isMode1 = !1);
              a.a
                .getRechargeRuleList({
                  productNos: e.map((e) => e.productNos).join(","),
                })
                .then((t) => {
                  var r,
                    a,
                    i,
                    o = t;
                  o.forEach((t) => {
                    (t.productNos = t.productNo + "-" + t.giftPackId),
                      (t.formatAmount = c(t.amount)),
                      (t.giftPackContext = (function (e) {
                        if (e) {
                          return e.replace(/\d+(\.\d+)?元/g, (e) => {
                            var t = parseFloat(e.slice(0, -1) || 0);
                            return isNaN(t) ? e : t + e.slice(-1);
                          });
                        }
                      })(t.giftPackContext)),
                      e.every(
                        (e) =>
                          t.productNos !== e.productNos ||
                          !e.slogan ||
                          ((t.slogan = e.slogan), !1)
                      );
                  }),
                    (this.rechargeRuleList = o.filter(
                      (e) => "NORM" === e.status
                    )),
                    (this.className =
                      ((r = this.ruleCardColor),
                      (a = o.length),
                      (i = s[r]),
                      a <= 1
                        ? "mode1 " + i
                        : 2 === a
                        ? "mode2 " + i
                        : a >= 3
                        ? "mode3 " + i
                        : void 0)),
                    (this.isMode1 = 1 === o.length);
                });
            },
            clickRechageRule(e) {
              var t = Object(i.a)(e, "productNo", ""),
                r = Object(i.a)(e, "giftPackId", ""),
                a =
                  "https://cashier.youzan.com/pay/prepaid_balance_recharge?kdt_id=" +
                  this.kdtId +
                  "&product_no=" +
                  t +
                  "&giftpack_id=" +
                  r,
                s =
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(a + "&entry=10");
              o.default.navigate({ url: s });
            },
            fetchBalance() {
              a.a
                .getBalance()
                .then((e) => {
                  this.balance = c(e[0].denomination);
                })
                .catch(() => {});
            },
          },
          ud: !0,
        };
        t.default = o.default.component(n);
      },
    }
  )
);
