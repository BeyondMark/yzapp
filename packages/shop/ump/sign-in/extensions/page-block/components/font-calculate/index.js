"use strict";
var r = require("~/r");
r(
  "Mz1L",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Mz1L: function (e, t, r) {
      r.r(t);
      var a = r("rqVN");
      Object(a.b)({
        properties: {
          amount: { type: Number },
          amountUnit: { type: String },
          type: { type: Number },
          maxFontSize: { type: Number, default: 30 },
        },
        data: { fontsize: 12 },
        ready() {
          this.calculate();
        },
        methods: {
          calculate() {
            var { maxFontSize: e, type: t, amountUnit: r } = this.properties,
              { length: a } = this.properties.amount.toString(),
              i = 12;
            if (1 === t) {
              var s = [e, e, e, 20, 17, 14];
              i = a > s.length ? 12 : s[a - 1];
            } else {
              var n = [e, e, e, 24, 18, 16, 14];
              "万元" === r && (a += 1), (i = a > n.length ? 12 : n[a - 1]);
            }
            this.setYZData({ fontsize: i });
          },
        },
      });
    },
  })
);
