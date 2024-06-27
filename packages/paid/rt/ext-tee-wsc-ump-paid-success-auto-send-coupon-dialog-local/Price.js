"use strict";
var r = require("~/r");
r(
  "RtBL",
  Object.assign({}, require("~/v.js").modules, {
    RtBL: function (e, r, t) {
      t.r(r);
      var i = t("jmjq"),
        l = t.n(i),
        u = {
          name: "fission-price",
          props: {
            price: { type: String || Number, default: "" },
            isBigText: Boolean,
            themeColors: { type: Object, default: () => ({}) },
          },
          computed: {
            integer() {
              var e, r;
              return null !=
                (e =
                  null == (r = (+l()(this.price, !0, !1) + "").split("."))
                    ? void 0
                    : r[0])
                ? e
                : "";
            },
            decimal() {
              var e, r;
              return null !=
                (e =
                  null == (r = (+l()(this.price, !0, !1) + "").split("."))
                    ? void 0
                    : r[1])
                ? e
                : "";
            },
            themeColorStyle() {
              return "color: " + this.themeColors["ump-price"];
            },
          },
          ud: !0,
        },
        o = t("9ZMt");
      r.default = o.default.component(u);
    },
  })
);
