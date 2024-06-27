"use strict";
var r = require("~/r");
r(
  "xwbC",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      xwbC: function (e, r, i) {
        i.r(r);
        var t = i("rqVN"),
          s = i("AQkN"),
          c = (e) => null == e;
        Object(t.b)({
          data: { sloganPrice: "", price: "", priceSize: 0 },
          properties: {
            item: {
              type: Object,
              observer() {
                this.renderComputed();
              },
            },
            hasMonthNotCheapest: {
              type: Boolean,
              observer() {
                this.renderComputed();
              },
            },
            bestPrice: {
              type: Number,
              observer() {
                this.renderComputed();
              },
            },
          },
          methods: {
            sloganPrice() {
              var e,
                r = s.e,
                { item: i } = this.properties,
                t = null != (e = null == i ? void 0 : i.handlePrice) ? e : {};
              return c(t.startPrice)
                ? this.properties.hasMonthNotCheapest &&
                  i.originCycle !== r.MONTH &&
                  i.monthPirce &&
                  Number(this.properties.bestPrice) === Number(i.monthPirce)
                  ? "每" + r.MONTH + "低至" + i.monthPirce + "元"
                  : ""
                : "首" + i.originCycle + "仅" + t.startPrice + "元";
            },
            price() {
              var e,
                { item: r } = this.properties,
                i = null != (e = null == r ? void 0 : r.handlePrice) ? e : {};
              return c(i.startPrice)
                ? c(i.hasDiscount)
                  ? i.price
                  : i.consecutivePrice
                : i.startPrice;
            },
            priceSize() {
              return (
                28 - 6 * (Math.ceil(this.price().toString().length / 2) - 1)
              );
            },
            renderComputed() {
              this.setYZData({
                sloganPrice: this.sloganPrice(),
                price: this.price(),
                priceSize: this.priceSize(),
              });
            },
          },
        });
      },
    }
  )
);
