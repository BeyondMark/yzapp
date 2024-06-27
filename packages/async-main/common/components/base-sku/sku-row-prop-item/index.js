"use strict";
var r = require("~/r");
r(
  "0WWT",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "0WWT": function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          r = s("u8kV"),
          i = s("4k4N");
        Object(r.c)({
          behaviors: [i.a],
          properties: {
            skuValue: Object,
            skuKeyStr: String,
            selectedProp: { type: Object, observer: "updateRowItemClass" },
            multiple: Boolean,
            disabled: Boolean,
          },
          data: { rowItemClass: "van-sku-row__item", isActive: !1 },
          relations: { "../sku-row/index": { type: "parent" } },
          methods: {
            updateRowItemClass() {
              var e = "van-sku-row__item",
                t = !1;
              this.isChoosed() && ((e = "van-sku-row__item--active"), (t = !0)),
                this.data.disabled && (e = "van-sku-row__item--disabled"),
                this.setYZData({ rowItemClass: e, isActive: t });
            },
            isChoosed() {
              var {
                selectedProp: e,
                skuKeyStr: t,
                skuValue: s = {},
              } = this.data;
              return e && (e[t] || []).indexOf(s.id) > -1;
            },
            onPropSelect() {
              this.data.disabled ||
                this.triggerEvent(
                  "sku:propSelect",
                  Object(a.a)({}, this.data.skuValue, {
                    skuKeyStr: this.data.skuKeyStr,
                    multiple: this.data.multiple,
                  })
                );
            },
          },
        });
      },
    }
  )
);
