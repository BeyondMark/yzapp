"use strict";
var r = require("~/r");
r(
  "tGPX",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      tGPX: function (e, r, t) {
        t.r(r);
        var i = t("u8kV"),
          s = t("4k4N"),
          a = t("6i0Q");
        function c(e) {
          return "number" == typeof e ? Number(e / 100).toFixed(2) : e;
        }
        Object(i.c)({
          behaviors: [s.a],
          properties: {
            sku: { type: Object, observer: "setPrice" },
            selectedSkuComb: { type: Object, observer: "setPrice" },
            extraData: { type: Object, observer: "setPrice" },
          },
          data: { themeGeneral: "" },
          ready() {
            a.a.getThemeColor("general").then((e) => {
              this.setYZData({ themeGeneral: e });
            });
          },
          methods: {
            setPrice() {
              var {
                sku: e,
                selectedSkuComb: r,
                extraData: t,
              } = this.properties;
              if (e) {
                var { price: i = "", originPrice: s = "" } = e;
                if (r) {
                  var { price: a, oldPrice: o } = r;
                  a && (i = c(a)), o && (s = c(o));
                }
                t && t.displayPrice && (i = t.displayPrice),
                  this.setYZData({ price: i, originPrice: s });
              }
            },
          },
        });
      },
    }
  )
);
