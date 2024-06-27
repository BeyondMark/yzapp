"use strict";
var r = require("~/r");
r(
  "UZDd",
  Object.assign({}, require("~/v.js").modules, {
    UZDd: function (e, r, t) {
      t.r(r);
      var i = t("xyw3");
      function n(e) {
        var r = e.toString();
        -1 === r.indexOf(",") && (r = Object(i.a)(r).toYuan());
        var t = r.split("."),
          n = +t[1].split("").reverse().join("");
        return (
          (t[1] = n.toString().split("").reverse().join("")),
          +t[1] || t.splice(1, 1),
          t
        );
      }
      var a = {
          props: {
            price: { type: [String, Number], required: !0, default: 0 },
            originPrice: { type: [String, Number], default: 0 },
            originStyle: { type: String, default: "" },
            themeGeneralColor: { type: String, default: "" },
            isPop: { type: Boolean, default: !1 },
            estimatedPrice: { type: [Number, String] },
            needFlex: { type: Boolean, default: !0 },
            themeCss: String,
          },
          computed: {
            formatOriginPrice() {
              var e = this.originPrice;
              if (e) {
                if (!(e > this.price)) return "";
                var r = Object(i.a)(e).toYuan().split("."),
                  t = +r[1].split("").reverse().join("");
                return (
                  (r[1] = t.toString().split("").reverse().join("")),
                  +r[1] || r.splice(1, 1),
                  r.join(".")
                );
              }
            },
            formatPrice() {
              return n(this.price);
            },
            hasEstimatedPrice() {
              return !!+this.estimatedPrice;
            },
            formatEstimatedPrice() {
              var { estimatedPrice: e } = this;
              if ("number" == typeof e) return n(e).join(".");
            },
          },
          ud: !0,
        },
        s = t("9ZMt");
      r.default = s.default.component(a);
    },
  })
);
