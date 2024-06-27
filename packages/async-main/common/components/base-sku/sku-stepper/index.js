"use strict";
var r = require("~/r");
r(
  "MgSP",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      MgSP: function (e, t, a) {
        a.r(t);
        var u = a("Fcif"),
          i = a("u8kV"),
          r = a("4k4N"),
          s = a("dYp/");
        Object(i.b)({
          behaviors: [r.a],
          properties: {
            hideStock: Boolean,
            stepperTitle: String,
            quotaText: String,
            quota: Number,
            quotaUsed: Number,
            quotaCycle: Number,
            selectedNum: Number,
            selectedSkuComb: { type: Object, observer: "updateStockNum" },
            sku: { type: Object, observer: "updateStockNum" },
            startSaleNum: {
              type: Number,
              observer: "updateStockNum",
              value: 1,
            },
            calendarStock: { type: null, observer: "updateStockNum" },
          },
          data: {
            min: 1,
            max: Number.MAX_VALUE,
            stockNum: Number.MAX_VALUE,
            limitType: s.a.STOCK_LIMIT,
          },
          methods: {
            updateStockNum() {
              var { selectedSkuComb: e, sku: t, calendarStock: a } = this.data,
                i = 0;
              if (
                "number" ==
                typeof (i =
                  "number" == typeof a
                    ? a
                    : (e && e.stockNum) || (t && t.stockNum))
              ) {
                var r = this.updateStepperLimit(i);
                this.setYZData(Object(u.a)({ stockNum: i }, r));
              }
            },
            updateStepperLimit(e) {
              var t,
                a,
                {
                  quota: u,
                  quotaUsed: i,
                  selectedNum: r,
                  startSaleNum: m = 1,
                } = this.data,
                o = u - i,
                d = m < 1 ? 1 : m;
              return (
                u > 0 && o <= e
                  ? ((t = o < 0 ? 0 : o), (a = s.a.QUOTA_LIMIT))
                  : ((t = e), (a = s.a.STOCK_LIMIT)),
                r < d || d > t
                  ? this.updateSelectedNum(d)
                  : r > t && this.updateSelectedNum(t),
                this.onInitState({
                  valid: d <= t,
                  min: d,
                  max: t,
                  limitType: a,
                }),
                { min: d, max: t, limitType: a }
              );
            },
            updateSelectedNum(e) {
              this.triggerEvent("sku:numChange", e);
            },
            onSelectNumChange(e) {
              var t = e.detail;
              this.updateSelectedNum(t);
            },
            onOverLimit(e) {
              var t = e.detail,
                {
                  quota: a,
                  quotaUsed: u,
                  quotaCycle: i,
                  limitType: r,
                  startSaleNum: s,
                } = this.data;
              this.triggerEvent("sku:overlimit", {
                action: t,
                quota: a,
                quotaUsed: u,
                quotaCycle: i,
                limitType: r,
                startSaleNum: s,
              });
            },
            onInitState(e) {
              var {
                quota: t,
                quotaUsed: a,
                quotaCycle: i,
                limitType: r,
                startSaleNum: s,
              } = this.data;
              this.triggerEvent(
                "sku:initstate",
                Object(u.a)(
                  {
                    quota: t,
                    quotaUsed: a,
                    quotaCycle: i,
                    limitType: r,
                    startSaleNum: s,
                  },
                  e
                )
              );
            },
          },
        });
      },
    }
  )
);
