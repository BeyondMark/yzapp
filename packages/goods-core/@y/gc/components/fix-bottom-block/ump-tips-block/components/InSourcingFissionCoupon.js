"use strict";
var r = require("~/r");
r(
  "TMW2",
  Object.assign({}, require("~/v.js").modules, {
    TMW2: function (n, i, o) {
      o.r(i);
      var r = o("+66q"),
        u = {
          name: "InSourcingFissionCoupon",
          props: {
            currentActivity: { type: Object },
            fissionSku: { type: Object },
            showInSourcingSharePop: { type: Boolean },
          },
          computed: {
            needCoupon() {
              if (this.isInSourcingFission) {
                return (() => {
                  var n,
                    i = this.fissionSku;
                  if (
                    0 ===
                    (null == i || null == (n = i.list) ? void 0 : n.length)
                  )
                    return i.spuPrice.needInSourcingCouponNum || 0;
                  var o = i.list
                    .filter((n) => !n.notJoinActivity && n.stockNum > 0)
                    .sort(
                      (n, i) =>
                        n.needInSourcingCouponNum - i.needInSourcingCouponNum
                    )[0];
                  return (o && o.needInSourcingCouponNum) || 0;
                })();
              }
            },
            isEnoughCoupon() {
              if (this.isInSourcingFission) {
                var { currentActivity: n } = this,
                  { havingInSourcingCouponNum: i } = n;
                return i >= this.needCoupon;
              }
            },
            isInSourcingFission() {
              var { currentActivity: n } = this;
              if (!1 == !!n || n.type !== r.a.INSOURCING_FISSION) return !1;
              var { isStart: i, isEnd: o } = n;
              return !(!i || o);
            },
            inSourcingFissionTips() {
              if (this.isInSourcingFission) {
                var {
                  currentActivity: {
                    havingInSourcingCouponNum: n,
                    hasBuyThreshold: i,
                  },
                } = this;
                return this.isEnoughCoupon
                  ? i
                    ? "你有 " + n + " 张内购券，可直接使用内购价购买"
                    : "无需内购券，可直接内购价购买"
                  : "需使用 " +
                      this.needCoupon +
                      " 张内购券，剩余内购券 " +
                      n +
                      " 张";
              }
            },
            firstGrouponGoing() {
              var { ongoingGroup: n = [] } = this.currentActivity;
              return n.length ? n[0] : {};
            },
          },
          methods: {},
          ud: !0,
        },
        t = o("9ZMt");
      i.default = t.default.component(u);
    },
  })
);
