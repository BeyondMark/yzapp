"use strict";
var r = require("~/r");
r(
  "KBEL",
  Object.assign({}, require("~/v.js").modules, {
    KBEL: function (e, i, r) {
      r.r(i);
      var s = r("YeA1"),
        t = {
          data: () => ({
            themeColors: {},
            isPaying: !1,
            showQueueUpTips: !1,
            displayData: {
              label: "合计",
              price: "--",
              desc: "",
              buttonText: "去支付",
              disabled: !1,
              tips: "",
            },
            themeVars: "",
            finalPrice: "--",
            showPriorUseSummary: !1,
            preCashierChannel: {},
            isPreCashierPay: !1,
            isPriorUseChosen: !1,
            shop: {},
            prepare: {},
            btnCustomStyle:
              "color: var(--main-text, #fff); background: var(--main-bg, #323233); border: 1px solid var(--main-bg, #323233)",
          }),
          computed: {
            dynamicHeight() {
              var e = 50;
              return (
                this.displayData.tips && (e = 90),
                { barHeight: "50px", wrapperHeight: e + "px" }
              );
            },
            submitBarPrice() {
              return this.isPriorUse
                ? "0.00"
                : this.displayData.finalNeedPayPrice;
            },
            submitBtnText() {
              var e,
                i = this.displayData.buttonText;
              return (
                (this.isPreCashierPay &&
                  (null == (e = this.preCashierChannel)
                    ? void 0
                    : e.btnText)) ||
                i
              );
            },
            isPriorUse() {
              return this.isPreCashierPay
                ? this.isPriorUseChosen
                : this.showPriorUseSummary;
            },
            isTradeComponent3: () => !1,
          },
          created() {
            Object(s.b)(this, [
              "themeColors",
              "isPaying",
              "showQueueUpTips",
              "displayData",
              "themeVars",
              "finalPrice",
              "showPriorUseSummary",
              "preCashierChannel",
              "isPreCashierPay",
              "isPriorUseChosen",
              "shop",
              "prepare",
            ]);
          },
          methods: {
            onPayClick() {
              this.ctx.event.emit("payBtnClick");
            },
            toggleQueueUptips() {
              this.ctx.event.emit("toggleQueueUptips");
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      i.default = a.default.component(t);
    },
  })
);
