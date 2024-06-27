"use strict";
var r = require("~/r");
r(
  "+bWk",
  Object.assign({}, require("~/v.js").modules, {
    "+bWk": function (t, e, i) {
      i.r(e);
      var o = {
          name: "activity-price",
          props: {
            label: String,
            activityPrice: Array,
            priceTag: Object,
            preText: String,
            isRange: Boolean,
            originPrice: String,
            depositPriceText: String,
            isCoupon: Boolean,
            showOriginPrice: Boolean,
            isEstimate: Boolean,
            goodsStockOpt: Object,
            fontSizeText: String,
          },
          data: () => ({
            soldNumTagText: "",
            stockNumTagText: "",
            showTag: !0,
          }),
          watch: {
            goodsStockOpt: {
              handler(t) {
                var {
                  showSoldNum: e,
                  showStockNum: i,
                  soldNum: o,
                  stockNum: a,
                } = t;
                (this.soldNumTagText = o
                  ? e && o >= 100
                    ? "热销" + o + "件"
                    : "已售" + o + "件"
                  : ""),
                  (this.stockNumTagText = i && a < 10 ? "即将售罄" : "");
              },
              immediate: !0,
            },
            priceTag: {
              handler(t) {
                this.showTag = "timelimitedDiscount" !== t.type;
              },
              immediate: !0,
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      e.default = a.default.component(o);
    },
  })
);
