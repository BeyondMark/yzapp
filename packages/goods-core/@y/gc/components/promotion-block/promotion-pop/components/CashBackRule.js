"use strict";
var r = require("~/r");
r(
  "+PuM",
  Object.assign({}, require("~/v.js").modules, {
    "+PuM": function (a, t, r) {
      r.r(t);
      var e = {
          name: "CashBackRule",
          props: {
            promotionActivity: Object,
            isCashbackPro: Boolean,
            cashbackProData: Boolean,
            cashbackPro: { type: Object, default: () => ({}) },
          },
          data: () => ({ testData: "111" }),
          computed: {
            feedbackLimitDays() {
              if (!this.isCashbackPro) return null;
              var { promotion: a = {} } = this.cashbackPro,
                { key: t } = a,
                { feedbackLimitDays: r } = this.promotionActivity[t];
              return r;
            },
            isCashbackProStoredValue() {
              if (!this.isCashbackPro) return null;
              var { promotion: a = {} } = this.cashbackPro,
                { key: t } = a,
                { cashbackType: r } = this.promotionActivity[t];
              return "storedValue" === r;
            },
            getCashbackProPopupDesc() {
              if (!this.isCashbackPro) return "";
              var { promotion: a = {} } = this.cashbackPro,
                { limitType: t, cashbackLimit: r, activityLimit: e } = a,
                s = "";
              switch (t) {
                case "mix":
                  s =
                    "所有在本店支付的订单中前" +
                    e +
                    "笔订单，同时也是你在本店支付的前" +
                    r +
                    "笔订单，";
                  break;
                case "buyer":
                  s = "你在本店支付的前" + r + "笔订单，";
                  break;
                case "none":
                default:
                  s = "在本店支付";
              }
              return s;
            },
            cashBackProRuleStr() {
              if (!this.isCashbackPro) return "";
              var { cashbackProTitle: a, promotion: t = {} } = this.cashbackPro,
                {
                  startTime: r,
                  endTime: e,
                  cashbackStart: s,
                  cashbackEnd: i,
                  cashbackMethod: c,
                } = t,
                o = s === i ? s + "%" : s + "%-" + i + "%",
                h = "random" === c ? "随机" : "",
                n =
                  r +
                  " 至 " +
                  e +
                  " 期间，" +
                  this.getCashbackProPopupDesc +
                  "可" +
                  h +
                  "获得订单实付金额" +
                  o +
                  "的" +
                  a +
                  "，运费不参与计算";
              return (this.testData = n), n;
            },
            cashBackRuleStr() {
              var { promotion: a = {} } = this.cashbackPro,
                {
                  type: t,
                  limit: r,
                  startTime: e,
                  endTime: s,
                  maxCashBack: i,
                } = a,
                c = "";
              i &&
                (c =
                  e +
                  "至" +
                  s +
                  "期间，在本店" +
                  (1 === r ? "首" : "前" + r) +
                  "笔订单支付成功，" +
                  ("fixed" === t ? "可获得" : "可随机获得") +
                  "返现；");
              return (this.testData = c), c;
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(e);
    },
  })
);
