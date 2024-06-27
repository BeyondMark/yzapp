"use strict";
var r = require("~/r");
r(
  "7a3E",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "7a3E": function (o, e, t) {
      t.r(e);
      var r = t("7/pW"),
        s = t("VmHG");
      Object(r.a)({
        name: "PromotionPop",
        properties: { show: Boolean },
        data: { isShow: !1 },
        attached() {
          Object(s.d)(this, [
            "displayPop",
            "accountInfo",
            "couponsList",
            "optimalCouponData",
            "showMoreCoupon",
          ]),
            Object(s.b)(this, [
              "toggleCouponPopUp",
              "handleGetCoupon",
              "showMoreOptimalCoupon",
            ]);
        },
        methods: {
          hidePopUp() {
            this.triggerEvent("close");
          },
          handleGetMore() {},
        },
      });
    },
  })
);
