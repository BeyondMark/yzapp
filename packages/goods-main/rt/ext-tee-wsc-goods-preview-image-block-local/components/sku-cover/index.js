"use strict";
var r = require("~/r");
r(
  "ULCg",
  Object.assign({}, require("~/v.js").modules, {
    ULCg: function (r, t, e) {
      e.r(t);
      var s = e("Fcif"),
        i = e("Nvad"),
        u = {
          name: "sku-cover",
          props: {
            current: Number,
            skuList: Array,
            goodsBaseInfo: Object,
            goodsPriceInfo: Object,
          },
          computed: {
            preSku() {
              var r;
              return (
                (Array.isArray(this.skuList) &&
                  this.current > 0 &&
                  (null == (r = this.skuList[this.current - 1])
                    ? void 0
                    : r.name)) ||
                ""
              );
            },
            nextSku() {
              var r;
              return (
                (Array.isArray(this.skuList) &&
                  this.current < this.skuList.length - 1 &&
                  (null == (r = this.skuList[this.current + 1])
                    ? void 0
                    : r.name)) ||
                ""
              );
            },
            isCurrentSoldOut: () => !1,
            curSku() {
              var r = this.skuList[this.current] || {};
              return Object(s.a)({}, r, {
                name: r.name || this.goodsBaseInfo.title || "",
                price: Object(i.b)(r.price || this.goodsPriceInfo.price || ""),
              });
            },
            showBorder() {
              return !!this.curSku.ks;
            },
          },
          methods: {
            toPre() {
              this.$emit("swipe", this.current - 1);
            },
            toNext() {
              this.$emit("swipe", this.current + 1);
            },
          },
          ud: !0,
        },
        n = e("9ZMt");
      t.default = n.default.component(u);
    },
  })
);
