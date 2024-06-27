"use strict";
var r = require("~/r");
r(
  "Buh5",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Buh5: function (o, s, t) {
      t.r(s);
      var e = t("7/pW"),
        a = t("VmHG");
      Object(e.a)({
        name: "GoodsCoupon",
        attached() {
          Object(a.d)(this, [
            "couponsList",
            "showGoodsCoupon",
            "couponsNumber",
            "optimalCouponData",
          ]);
        },
        data: { isShow: !1 },
        methods: {
          showPopUp(o) {
            var { currentTarget: s } = o,
              { couponsNumber: t } = s.dataset;
            t > 1 && this.setData({ isShow: !0 });
          },
          hidePopUp() {
            this.setData({ isShow: !1 });
          },
        },
      });
    },
  })
);
