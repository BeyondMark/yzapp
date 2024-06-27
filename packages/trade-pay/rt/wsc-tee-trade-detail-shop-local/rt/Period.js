"use strict";
var r = require("~/r");
r(
  "+y5+",
  Object.assign({}, require("~/v.js").modules, {
    "+y5+": function (e, r, i) {
      i.r(r);
      var t = i("YeA1"),
        o = {
          props: {
            titleColor: { type: String, default: () => "" },
            valueColor: { type: String, default: () => "#666" },
          },
          data: () => ({
            isPeriodBuy: !1,
            isSelfFetch: !1,
            isMultiPeriodBuy: !1,
            order: {},
          }),
          computed: {
            showPeriodBuyDelivery() {
              var {
                isPeriodBuy: e,
                isSelfFetch: r,
                isMultiPeriodBuy: i,
              } = this;
              return e && !r && !i;
            },
            periodTime() {
              var { order: e, isPeriodBuy: r } = this;
              return (r && e.periodDetail[0].periodAlias) || "";
            },
            periodDeliveryTime() {
              var { order: e, isPeriodBuy: r } = this;
              return (r && e.periodDetail[0].deliverTimeAlias) || "";
            },
            periodBuyTimeText() {
              var { order: e, isPeriodBuy: r } = this;
              return (r && e.periodDetail[0].periodBuyTimeText) || "";
            },
            customStyle() {
              return (
                "--cell-text-color: " +
                this.titleColor +
                "; --cell-value-color: " +
                this.valueColor +
                ";"
              );
            },
          },
          created() {
            Object(t.b)(this, [
              "isPeriodBuy",
              "isSelfFetch",
              "isMultiPeriodBuy",
              "order",
            ]);
          },
          ud: !0,
        },
        l = i("9ZMt");
      r.default = l.default.component(o);
    },
  })
);
