"use strict";
var r = require("~/r");
r(
  "qrf1",
  Object.assign({}, require("~/v.js").modules, {
    qrf1: function (r, e, s) {
      s.r(e);
      var i = s("YeA1"),
        a = {
          data: () => ({
            finalPrice: "",
            totalPriceList: [],
            useBeforePayData: [],
            themeColors: {},
            showPriorUseSummary: !1,
            isPreCashierPay: !1,
            isPriorUseChosen: !1,
          }),
          computed: {
            isPriorUse() {
              return this.isPreCashierPay
                ? this.isPriorUseChosen
                : this.showPriorUseSummary;
            },
          },
          created() {
            Object(i.b)(this, [
              "totalPriceList",
              "finalPrice",
              "useBeforePayData",
              "themeColors",
              "showPriorUseSummary",
              "isPreCashierPay",
              "isPriorUseChosen",
            ]);
          },
          ud: !0,
        },
        t = s("9ZMt");
      e.default = t.default.component(a);
    },
  })
);
