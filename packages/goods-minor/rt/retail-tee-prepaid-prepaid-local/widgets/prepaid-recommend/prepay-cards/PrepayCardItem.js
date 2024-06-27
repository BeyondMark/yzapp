"use strict";
var r = require("~/r");
r(
  "5yg6",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "5yg6": function (e, t, r) {
        r.r(t);
        var a = r("IfCE"),
          i = {
            props: {
              card: Object,
              checked: Boolean,
              disabled: Boolean,
              cardType: String,
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({ noticeText: "", showFreeze: !1 }),
            computed: {
              balanceFlexPriceIntFontSize() {
                var e = (this.card.balance / 100).toFixed(2).split(".")[0];
                return e.length < 6
                  ? "8vw"
                  : (144 / e.length / 375) * 100 + "vw";
              },
              balancePriceInt() {
                return (this.card.balance / 100).toFixed(2).split(".")[0];
              },
              balancePriceCent() {
                return (this.card.balance / 100).toFixed(2).split(".")[1];
              },
              freezingSumDnomPrice() {
                return this.card.freezingSumDnom;
              },
              themeMainColor() {
                return this.themeColors["main-bg"];
              },
            },
            mounted() {
              this.initState();
            },
            methods: {
              initState() {
                var { card: e, disabled: t, checked: r } = this;
                this.showFreeze = a.a.showFreeze(t, e, r);
              },
              onClick() {},
            },
            ud: !0,
          },
          n = r("9ZMt");
        t.default = n.default.component(i);
      },
    }
  )
);
