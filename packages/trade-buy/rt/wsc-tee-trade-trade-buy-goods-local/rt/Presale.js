"use strict";
var r = require("~/r");
r(
  "Yhbq",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      Yhbq: function (e, t, r) {
        r.r(t);
        var s = r("edpm"),
          a = r("YeA1"),
          i = {
            data: () => ({ pay: {}, goods: {}, tradeTag: {}, themeCSS: "" }),
            computed: {
              show() {
                var e, t;
                return (
                  (null == (e = this.goods) || null == (t = e.list)
                    ? void 0
                    : t.length) && this.tradeTag.hasDepositPreSaleGoods
                );
              },
              presaleItem() {
                var { phasePayment: e } = this.pay;
                if (e && e.phaseItems) {
                  var { phaseItems: t } = e;
                  return t.find((e) => 1 === e.phase);
                }
                return null;
              },
              price() {
                return (
                  this.presaleItem &&
                  "¥" + Object(s.c)(this.presaleItem.originPrice)
                );
              },
              text() {
                return this.presaleItem &&
                  this.presaleItem.valuePrice &&
                  this.presaleItem.valuePrice !== this.presaleItem.price
                  ? "（定金可抵 ¥ " +
                      Object(s.c)(Math.abs(this.presaleItem.valuePrice)) +
                      "）"
                  : "";
              },
            },
            created() {
              Object(a.b)(this, ["pay", "goods", "tradeTag", "themeCSS"]);
            },
            ud: !0,
          },
          l = r("9ZMt");
        t.default = l.default.component(i);
      },
    }
  )
);
