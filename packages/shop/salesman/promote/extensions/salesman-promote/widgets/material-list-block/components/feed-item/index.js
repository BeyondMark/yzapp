"use strict";
var r = require("~/r");
r(
  "T4vu",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      T4vu: function (t, e, r) {
        r.r(e);
        var i = r("Bt9F"),
          a = getApp();
        Object(i.a)({
          externalClasses: [
            "custom-class",
            "item-custom-class",
            "goods-title-class",
          ],
          options: { multipleSlots: !0 },
          properties: {
            itemId: Number,
            logo: String,
            title: String,
            text: String,
            item: Object,
            imageList: Array,
            video: { type: Object, value: {} },
            linkMaterial: { type: Object },
            materialType: { type: Number },
            materialId: { type: Number },
            loggerType: { type: String },
          },
          data: { videoKdtId: 0 },
          attached() {
            var t = a.getKdtId(),
              e = a.getShopInfoSync();
            e.chainStoreInfo &&
              e.chainStoreInfo.rootKdtId &&
              (t = e.chainStoreInfo.rootKdtId),
              this.setData({ videoKdtId: t });
          },
          methods: {
            handleGetSrc(t) {
              this.triggerEvent("get-src", t.detail);
            },
            _handleImageLoad() {
              this.triggerEvent("image-load", { id: this.data.itemId });
            },
          },
        });
      },
    }
  )
);
