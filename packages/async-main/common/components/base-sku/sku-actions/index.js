"use strict";
var r = require("~/r");
r(
  "rE6g",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      rE6g: function (e, r, t) {
        t.r(r);
        var u = t("u8kV"),
          o = t("4k4N");
        Object(u.c)({
          behaviors: [o.a],
          properties: {
            buyBtnText: String,
            cartBtnText: String,
            cartCount: Number,
            showBuyBtn: { type: Boolean, value: !0 },
            popupCustomStyle: { type: String, value: "" },
            showAddCartBtn: Boolean,
            allowDeny: { type: Boolean, value: !1 },
          },
          methods: {
            onAddCartClicked() {
              this.triggerEvent("sku:addCart");
            },
            onBuyClicked() {
              this.triggerEvent("sku:buy");
            },
          },
        });
      },
    }
  )
);
