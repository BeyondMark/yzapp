"use strict";
var r = require("~/r");
r(
  "1ZmT",
  Object.assign({}, require("~/v.js").modules, {
    "1ZmT": function (e, o, r) {
      r.r(o);
      var t = r("YeA1"),
        a = {
          data: () => ({
            themeCSS: "",
            env: {},
            display: {},
            tradeTag: {},
            haitaoZeroOrder: !1,
            themeColors: {},
            grouponModel: {},
            isGrouponModelShow: !0,
          }),
          created() {
            Object(t.b)(this, [
              "env",
              "display",
              "tradeTag",
              "haitaoZeroOrder",
              "themeCSS",
              "grouponModel",
              "themeColors",
              "isGrouponModelShow",
            ]);
          },
          ud: !0,
        },
        d = r("9ZMt");
      o.default = d.default.component(a);
    },
  })
);
