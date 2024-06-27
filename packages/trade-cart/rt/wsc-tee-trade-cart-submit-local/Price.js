"use strict";
var r = require("~/r");
r(
  "6TiB",
  Object.assign({}, require("~/v.js").modules, {
    "6TiB": function (r, t, e) {
      e.r(t);
      var i = e("xyw3"),
        s = {
          props: {
            price: { type: [String, Number], required: !0, default: 0 },
            themeVars: { type: String },
          },
          data() {
            return {
              rootClass: { root: "custom-class" },
              formatPriceArr: this.getFormatPriceArr(),
            };
          },
          externalClasses: ["custom-class"],
          watch: {
            price() {
              this.formatPriceArr = this.getFormatPriceArr();
            },
          },
          methods: {
            getFormatPriceArr() {
              var r = this.price.toString();
              -1 === r.indexOf(",") && (r = Object(i.a)(r).toYuan());
              var t = r.split("."),
                e = +t[1].split("").reverse().join("");
              return (
                (t[1] = e.toString().split("").reverse().join("")),
                +t[1] || t.splice(1, 1),
                t
              );
            },
          },
        },
        a = e("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
