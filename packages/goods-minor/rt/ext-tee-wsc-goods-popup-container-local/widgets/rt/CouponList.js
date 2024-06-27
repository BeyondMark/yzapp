"use strict";
var r = require("~/r");
r(
  "lRFg",
  Object.assign({}, require("~/v.js").modules, {
    lRFg: function (e, s, t) {
      t.r(s);
      var i = t("ONqW"),
        o = {
          props: { detail: Object, source: Number },
          computed: {
            couponListClass() {
              return "visit-coupon-list-" + this.detail.showType;
            },
          },
          created() {
            Object(i.a)().log({
              et: "view",
              ei: "coupon_visit_view",
              en: "进店有礼优惠券曝光",
              params: {
                coupon_id: this.detail.fetchedCoupons
                  .map((e) => e.id)
                  .join(","),
              },
            });
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
            subscribeMessage(e) {
              this.$emit("subscribe-message", e);
            },
          },
          ud: !0,
        },
        r = t("9ZMt");
      s.default = r.default.component(o);
    },
  })
);
