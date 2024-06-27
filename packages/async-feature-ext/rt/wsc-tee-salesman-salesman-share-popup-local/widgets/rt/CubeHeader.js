"use strict";
var r = require("~/r");
r(
  "F0s5",
  Object.assign({}, require("~/v.js").modules, {
    F0s5: function (e, t, n) {
      n.r(t);
      var s = {
          props: {
            shareData: { type: Object, default: () => ({}) },
            shareMoneyInfo: { type: Object, default: () => ({}) },
            shareMoney: Number,
            cloudShareMoneyInfo: { type: Object, default: () => ({}) },
          },
          computed: {
            shareMoneyRange() {
              return this.shareMoneyInfo.shareMoneyRange;
            },
            maxCommissionStr() {
              return this.shareMoneyInfo.maxCommissionStr;
            },
            hasHireFeeRange() {
              return (
                !this.shareMoneyRange.every((e) => 0 == +e) &&
                this.shareMoneyRange.length &&
                this.maxCommissionStr
              );
            },
            hireFeeStandardTextInfo() {
              return 2 === this.shareMoneyRange.length
                ? {
                    text: "分享后预计可赚 ",
                    commission: this.shareMoneyInfo.commissionRangeStr,
                  }
                : {
                    text: "分享后预计最高赚 ",
                    commission: this.maxCommissionStr,
                  };
            },
            hireFeeFinalTextInfo() {
              var e = this.hasHireFeeRange
                ? this.hireFeeStandardTextInfo.text
                : "立即分享给好友";
              return {
                text: this.cloudShareMoneyInfo.profitDesc || e,
                commission:
                  this.cloudShareMoneyInfo.profitText ||
                  this.hireFeeStandardTextInfo.commission,
              };
            },
          },
          methods: {
            handleCloseMainFrame() {
              this.$emit("close-main-frame");
            },
          },
          ud: !0,
        },
        r = n("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
