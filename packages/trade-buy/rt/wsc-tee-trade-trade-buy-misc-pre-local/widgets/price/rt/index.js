"use strict";
var r = require("~/r");
r(
  "ya9/",
  Object.assign({}, require("~/v.js").modules, {
    "ya9/": function (r, e, i) {
      i.r(e);
      var t = i("xyw3"),
        n = {
          props: {
            price: { type: [String, Number], required: !0, default: 0 },
            originPrice: { type: [String, Number], default: 0 },
            originStyle: { type: String, default: "" },
            themeGeneralColor: { type: String, default: "" },
          },
          computed: {
            formatOriginPrice() {
              var r = this.originPrice;
              if (r) {
                if (!(r > this.price)) return "";
                var e = Object(t.a)(r).toYuan().split("."),
                  i = +e[1].split("").reverse().join("");
                return (
                  (e[1] = i.toString().split("").reverse().join("")),
                  +e[1] || e.splice(1, 1),
                  e.join(".")
                );
              }
            },
            formatPrice() {
              var r = this.price.toString();
              -1 === r.indexOf(",") && (r = Object(t.a)(r).toYuan());
              var e = r.split("."),
                i = +e[1].split("").reverse().join("");
              return (
                (e[1] = i.toString().split("").reverse().join("")),
                +e[1] || e.splice(1, 1),
                e
              );
            },
          },
          ud: !0,
        },
        o = i("9ZMt");
      e.default = o.default.component(n);
    },
  })
);
