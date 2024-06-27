"use strict";
var r = require("~/r");
r(
  "sSRx",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      sSRx: function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          i = s("u8kV"),
          u = s("4k4N"),
          r = s("Hhx2"),
          o = s("SdHa");
        Object(i.c)({
          behaviors: [u.a],
          properties: {
            skuValue: { type: Object, observer: "updateRowItemValue" },
            skuKeyStr: String,
            selectedSku: { type: Object, observer: "updateRowItemClass" },
            disableSoldoutSku: { type: Boolean, value: !0 },
            skuList: { type: Object },
          },
          data: { rowItemClass: "van-sku-row__item", isActive: !1, value: {} },
          relations: { "../sku-row/index": { type: "parent" } },
          methods: {
            updateRowItemValue() {
              var { skuValue: e } = this.data;
              e.imgUrl && (e.imgUrl = Object(o.a)(e.imgUrl)),
                this.setYZData({ value: e });
            },
            updateRowItemClass() {
              var e = "van-sku-row__item",
                t = !1;
              this.isChoosable()
                ? this.isChoosed() &&
                  ((e = "van-sku-row__item--active"), (t = !0))
                : (e = "van-sku-row__item--disabled"),
                this.setYZData({ rowItemClass: e, isActive: t });
            },
            isChoosed() {
              return (
                +this.data.skuValue.id ==
                +this.data.selectedSku[this.data.skuKeyStr]
              );
            },
            isChoosable() {
              var {
                skuList: e,
                selectedSku: t,
                skuKeyStr: s,
                skuValue: a,
              } = this.data;
              return (
                !this.data.disableSoldoutSku ||
                Object(r.i)(e, t, { key: s, valueId: a.id })
              );
            },
            onSkuSelect() {
              this.isChoosable() &&
                this.triggerEvent(
                  "sku:select",
                  Object(a.a)({}, this.data.skuValue, {
                    skuKeyStr: this.data.skuKeyStr,
                  })
                );
            },
          },
        });
      },
    }
  )
);
