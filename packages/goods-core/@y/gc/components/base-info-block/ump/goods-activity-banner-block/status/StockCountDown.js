"use strict";
var r = require("~/r");
r(
  "ltG6",
  Object.assign({}, require("~/v.js").modules, {
    ltG6: function (t, e, r) {
      r.r(e);
      var i = {
          name: "StockCountDown",
          props: { remainObj: Object, activity: Object },
          computed: {
            countDownText() {
              var {
                remainDesc: t,
                day: e,
                hour: r,
                minute: i,
                second: n,
                milliseconds: o,
              } = this.remainObj;
              return (
                t +
                " " +
                (e ? e + "天" : "") +
                " " +
                r +
                ":" +
                i +
                ":" +
                n +
                "." +
                o
              );
            },
            remainNum() {
              var t, e;
              return (
                (null == (t = this.activity) || null == (e = t.spuStock)
                  ? void 0
                  : e.stockNum) || 0
              );
            },
            totalStock() {
              var t, e;
              return (
                (null == (t = this.activity) || null == (e = t.spuStock)
                  ? void 0
                  : e.totalActivityStockNum) || 0
              );
            },
            percentage() {
              return this.totalStock
                ? (this.remainNum / this.totalStock) * 100
                : 0;
            },
          },
          ud: !0,
        },
        n = r("9ZMt");
      e.default = n.default.component(i);
    },
  })
);
