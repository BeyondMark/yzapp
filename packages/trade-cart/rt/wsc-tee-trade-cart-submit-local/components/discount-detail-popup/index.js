"use strict";
var r = require("~/r");
r(
  "xF5K",
  Object.assign({}, require("~/v.js").modules, {
    xF5K: function (t, e, o) {
      o.r(e);
      var i = o("Fcif"),
        r = {
          name: "discount-detail",
          props: {
            totalPrice: { type: Number, default: 0 },
            totalDiscount: { type: Number, default: 0 },
            promotionDetails: { type: Array, default: () => [] },
            goodsTotalPrice: { type: Number, default: 0 },
            visible: Boolean,
            promotionInfo: { type: Object, default: () => {} },
          },
          computed: {
            goodsTotalPriceFormat() {
              return this.toFixedPrice(this.goodsTotalPrice);
            },
            totalDiscountFormat() {
              return this.toFixedPrice(this.totalDiscount);
            },
            promotionDetailsFormat() {
              return this.promotionDetails.map((t) =>
                Object(i.a)({}, t, {
                  preferentialValue: this.toFixedPrice(t.preferentialValue),
                })
              );
            },
            totalPriceFormat() {
              return this.toFixedPrice(this.totalPrice);
            },
            isBest() {
              var { promotionInfo: t } = this;
              return !!t.activityId;
            },
            recommendPromotion() {
              var { promotionInfo: t } = this;
              return t.promotionTag;
            },
          },
          methods: {
            onClose() {
              this.$emit("click-discount-detail", !1);
            },
            toFixedPrice: (t) => (t / 100).toFixed(2),
            select() {
              this.$emit("select");
            },
          },
          ud: !0,
        },
        a = o("9ZMt");
      e.default = a.default.component(r);
    },
  })
);
