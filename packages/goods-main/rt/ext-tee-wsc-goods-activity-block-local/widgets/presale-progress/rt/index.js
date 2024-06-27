"use strict";
var r = require("~/r");
r(
  "5scK",
  Object.assign({}, require("~/v.js").modules, {
    "5scK": function (e, s, r) {
      r.r(s);
      var t = r("q29p"),
        o = r.n(t),
        a = {
          props: { opt: { type: Object, default: () => ({}) } },
          data: () => ({ showPresaleProgress: !0 }),
          computed: {
            showProgress() {
              return this.opt.show && this.showPresaleProgress;
            },
            progressPoint() {
              var e = this.opt.progressText.length - 1;
              return this.opt.progressText.slice(0, e);
            },
            depositPaymentTime() {
              var {
                  balanceDueStart: e,
                  balanceDueEnd: s,
                  balanceDueDayStart: r,
                  balanceDueDayEnd: t,
                  preSalePeriod: a,
                } = this.opt.presale || {},
                n = "";
              return (
                (n =
                  "支付尾款: " +
                  o()(e, "YYYY.MM.DD HH:mm:ss") +
                  " - " +
                  o()(s, "YYYY.MM.DD HH:mm:ss")),
                1 === a &&
                  (n =
                    "支付尾款: 定金支付" +
                    r +
                    "天后开始支付，" +
                    t +
                    "天内完成支付"),
                n
              );
            },
          },
          methods: {
            setShowDepositPresalInfo(e) {
              this.showPresaleProgress = !!e;
            },
          },
          ud: !0,
        },
        n = r("9ZMt");
      s.default = n.default.component(a);
    },
  })
);
