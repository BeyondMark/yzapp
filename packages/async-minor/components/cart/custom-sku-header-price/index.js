"use strict";
var r = require("~/r");
r(
  "8ASt",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "8ASt": function (e, r, t) {
        t.r(r);
        var i = t("u8kV"),
          s = t("6i0Q"),
          c = t("taYb"),
          a = t("Y1sx"),
          o = t("zMoS");
        function n(e) {
          return "number" == typeof e ? Number(e / 100).toFixed(2) : e;
        }
        Object(i.c)({
          properties: {
            goods: { type: Object },
            sku: { type: Object, observer: "setPrice" },
            selectedSkuComb: { type: Object, observer: "setPrice" },
            extraData: { type: Object, observer: "setPrice" },
          },
          data: { themeGeneral: "", price: "", originPrice: "" },
          ready() {
            s.a.getThemeColor("general").then((e) => {
              this.setYZData({ themeGeneral: e });
            });
          },
          methods: {
            onAsyncPropPrice(e) {
              var { goods: r } = this.data;
              a.a
                .handleAsyncPropPriceApiDebounce({
                  itemId: r.goodsId,
                  kdtId: r.kdtId,
                  skuId: e.id,
                  itemSalePropList: JSON.stringify(
                    c.a.toCamelCase(e.properties || [])
                  ),
                  activity: "{}",
                })
                .then((e) => {
                  var r = Object(o.a)(e, "umpTotalPrice", 0),
                    t = Object(o.a)(e, "totalPrice", 0);
                  this.setYZData({ price: n(r), originPrice: n(t) });
                });
            },
            setPrice() {
              var {
                sku: e,
                selectedSkuComb: r,
                extraData: t,
              } = this.properties;
              if (t && t.asyncPropPrice && r) this.onAsyncPropPrice(r);
              else if (e) {
                var { price: i = "", originPrice: s = "" } = e;
                if (r) {
                  var { price: c, originPrice: a, oldPrice: o } = r;
                  c && (i = n(c)), (a || o) && (s = n(a || o));
                }
                this.setYZData({ price: i, originPrice: s });
              }
            },
          },
        });
      },
    }
  )
);
