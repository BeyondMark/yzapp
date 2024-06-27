"use strict";
var r = require("~/r");
r(
  "1vYC",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "1vYC": function (t, e, i) {
      i.r(e);
      var a = i("Fcif"),
        r = i("X9+V"),
        u = {
          name: "tuan-pop",
          props: { activity: { type: Object, default: () => ({}) } },
          computed: {
            tuanIntroRules() {
              return (this.activity.allRules || [])
                .filter((t) => t.min > 0)
                .map(
                  (t) => (
                    ((t = Object(a.a)({}, t)).value = Object(r.a)(t.value)), t
                  )
                );
            },
            tuanIntroRulesDetail() {
              var { activity: t } = this;
              return 1 === t.isCash
                ? [
                    "1、通过【微信支付】付款，返现金额将通过 【微信退款】发放，请注意查收；",
                    "2、通过【银行卡】付款，返现金额将在3天内，原路发放至银行卡账户；",
                    "3、最高返现金额不超过你的现金支付金额；",
                  ]
                : 2 === t.isCash
                ? [
                    "1、订单支付完成" +
                      (0 !== t.limitedDays && t.limitedDays
                        ? t.limitedDays + "天"
                        : "") +
                      "后，且未发起退款才会收到返现金额；",
                    "2、返现金额将发放至储值卡余额，请前往个人中心查看",
                  ]
                : void 0;
            },
          },
          ud: !0,
        },
        s = i("9ZMt");
      e.default = s.default.component(u);
    },
  })
);
