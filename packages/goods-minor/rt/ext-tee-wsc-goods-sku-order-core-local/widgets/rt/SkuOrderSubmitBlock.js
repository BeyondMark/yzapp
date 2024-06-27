"use strict";
var r = require("~/r");
r(
  "bid1",
  Object.assign({}, require("~/v.js").modules, {
    bid1: function (e, t, r) {
      r.r(t);
      var o = r("Fcif"),
        i = r("YeA1"),
        s = r("VmHG"),
        a = {
          data() {
            return Object(o.a)(
              { themeColors: {} },
              Object(s.d)(this, [
                "isFirstOpen",
                "isCanPay",
                "isLoading",
                "isOrderWarning",
                "payBtnDisabled",
                "freight",
                "payText",
                "isSelectedSkuComb",
                "payPriceFormat",
                "orderWarning",
                "prepareIsReady",
              ])
            );
          },
          computed: {
            btnStyle() {
              return this.themeColors
                ? "background: " +
                    this.themeColors.general +
                    "; color: " +
                    this.themeColors["main-text"]
                : "background: #f44; color: #fff";
            },
          },
          created() {
            Object(i.b)(this, ["themeColors"]);
          },
          methods: {
            onPay() {
              this.store.doSubmit();
            },
          },
        },
        n = r("9ZMt");
      t.default = n.default.component(a);
    },
  })
);
