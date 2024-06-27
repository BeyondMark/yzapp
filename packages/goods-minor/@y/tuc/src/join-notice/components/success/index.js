"use strict";
var r = require("~/r");
r(
  "SIsU",
  Object.assign({}, require("~/v.js").modules, {
    SIsU: function (t, i, s) {
      s.r(i);
      var r = {
          props: { giftBag: { type: Object } },
          computed: {
            showCoupon() {
              return (
                this.giftBag.couponList &&
                Array.isArray(this.giftBag.couponList) &&
                this.giftBag.couponList.length > 0
              );
            },
            showGift() {
              return (
                this.giftBag.presentList &&
                Array.isArray(this.giftBag.presentList) &&
                this.giftBag.presentList.length > 0
              );
            },
            showPoint() {
              return this.giftBag.points && this.giftBag.points > 0;
            },
            couponCount() {
              return this.giftBag.couponList &&
                Array.isArray(this.giftBag.couponList) &&
                this.giftBag.couponList.length > 0
                ? this.giftBag.couponList.reduce(
                    (t, i) => t + (i.number || 0),
                    0
                  )
                : "";
            },
            giftCount() {
              return this.giftBag.presentList &&
                Array.isArray(this.giftBag.presentList) &&
                this.giftBag.presentList.length > 0
                ? this.giftBag.presentList.reduce(
                    (t, i) => t + (i.number || 0),
                    0
                  )
                : "";
            },
            pointCount() {
              return this.giftBag.points || "";
            },
          },
          methods: {
            handleConfirm() {
              this.$emit("onConfirm");
            },
          },
          ud: !0,
        },
        e = s("9ZMt");
      i.default = e.default.component(r);
    },
  })
);
