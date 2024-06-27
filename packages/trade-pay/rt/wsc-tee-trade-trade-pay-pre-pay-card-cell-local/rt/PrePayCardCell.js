"use strict";
var r = require("~/r");
r(
  "bXan",
  Object.assign({}, require("~/v.js").modules, {
    bXan: function (e, r, a) {
      a.r(r);
      var t = a("YeA1"),
        s = {
          name: "pre-pay-card-cell",
          data: () => ({
            valueCardPayPrice: 0,
            themeColors: {},
            showPrePayCards: !1,
          }),
          computed: {
            showPrepayCardCell() {
              return this.showPrePayCards && this.valueCardPayPrice;
            },
            prepayCardCellValue() {
              return "-￥" + (this.valueCardPayPrice / 100).toFixed(2);
            },
            cssVar() {
              return "--cell-value-color: " + this.themeColors.general;
            },
          },
          created() {
            Object(t.b)(this, [
              "valueCardPayPrice",
              "themeColors",
              "showPrePayCards",
            ]);
          },
          ud: !0,
        },
        l = a("9ZMt");
      r.default = l.default.component(s);
    },
  })
);
