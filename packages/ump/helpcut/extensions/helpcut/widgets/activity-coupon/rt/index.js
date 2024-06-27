"use strict";
var r = require("~/r");
r(
  "XZT/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "XZT/": function (e, o, s) {
      s.r(o);
      var t = s("7/pW"),
        r = s("VmHG");
      Object(t.a)({
        attached() {
          Object(r.d)(this, ["showCouponPop", "couponResult", "userCutPrice"]),
            Object(r.b)(this, ["SET_SHOW_COUPON_POP"]);
        },
        methods: {
          closeCouponPop() {
            this.SET_SHOW_COUPON_POP(!1);
          },
          useCoupon() {
            wx.navigateTo({
              url: "/packages/user/coupon/list/index?type=promocard&title=我的优惠券",
            });
          },
        },
      });
    },
  })
);
