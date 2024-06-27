"use strict";
var r = require("~/r");
r(
  "3v9Q",
  Object.assign({}, require("~/v.js").modules, {
    "3v9Q": function (t, e, r) {
      r.r(e);
      var o = r("Zqpg"),
        a = r("BZkp"),
        n = {
          name: "t-progress",
          mixins: [Object(o.a)({ externalClasses: ["custom-class"] })],
          props: {
            inactive: Boolean,
            percentage: Number,
            pivotText: String,
            pivotColor: String,
            trackColor: String,
            showPivot: { type: Boolean, default: !0 },
            color: { type: String, value: "#1989fa" },
            textColor: { type: String, default: "#fff" },
            strokeWidth: { type: null, default: 4 },
          },
          computed: {
            styles() {
              var {
                trackColor: t,
                strokeWidth: e,
                percentage: r,
                inactive: o,
                color: n,
                textColor: i,
                realPivotColor: c,
              } = this;
              return {
                root:
                  "\n          height: " +
                  Object(a.b)(e) +
                  ";\n          " +
                  (t ? "background: " + t : "") +
                  "\n        ",
                portion:
                  "\n          width: " +
                  r +
                  "%;\n          background: " +
                  (o ? "#cacaca" : n) +
                  "\n        ",
                pivot:
                  "\n          color: " +
                  i +
                  ";\n          background: " +
                  c +
                  "\n        ",
              };
            },
            realPivotColor() {
              var { inactive: t, color: e, pivotColor: r } = this;
              return r || (t ? "#cacaca" : e);
            },
            text() {
              return this.pivotText || this.percentage + "%";
            },
          },
          ud: !0,
        },
        i = r("9ZMt");
      e.default = i.default.component(n);
    },
  })
);
