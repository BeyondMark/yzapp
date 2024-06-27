"use strict";
var r = require("~/r");
r(
  "zdEu",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    zdEu: function (e, t, r) {
      r.r(t);
      var o = r("WNIS"),
        i = r("rqVN");
      Object(i.b)({
        properties: {
          coupon: { type: Object, default: {} },
          btnText: { type: String, default: "" },
        },
        data: { isExchangeCoupon: !1 },
        attached() {
          var { preferentialMode: e } = this.properties.coupon,
            t = e === o.j.EXCHANGE;
          this.setYZData({ isExchangeCoupon: t });
        },
        methods: {
          handleCouponClick() {
            this.triggerEvent("clickCoupon", {
              coupon: this.properties.coupon,
            });
          },
          handleBtnClick() {
            this.triggerEvent("clickBtn", { coupon: this.properties.coupon });
          },
        },
      });
    },
  })
);
