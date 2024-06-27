"use strict";
var r = require("~/r");
r(
  "z5Ff",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    z5Ff: function (e, t, a) {
      a.r(t);
      var s = a("rqVN"),
        h = a("9hl2"),
        r = a("zMoS"),
        o = getApp();
      Object(s.b)({
        properties: {
          value: {
            type: Boolean,
            observer(e) {
              this.data.show !== e && this.setYZData({ show: e });
            },
          },
          shopList: { type: Array, value: [] },
        },
        data: {
          selectedShop: {},
          show: !1,
          header: [{ name: "选择店铺", className: "action-shop-header" }],
          cancelVisible: !1,
          keyword: "",
          kdtId: o.getKdtId(),
        },
        methods: {
          onClose() {
            this.setYZData({ show: !1 }, () => {
              this.triggerEvent("close");
            });
          },
          toggleSelectedShop(e) {
            var t = e.target.dataset.shop;
            this.setYZData({ selectedShop: t });
          },
          handleConfirmSelected() {
            this.triggerEvent("select", this.data.selectedShop);
          },
          searchCardSellShop(e) {
            var t = e.detail.value;
            this.triggerEvent("refresh", t);
          },
          handleOnFocus() {
            this.setYZData({ cancelVisible: !0 });
          },
          handleCloseCancel() {
            this.setYZData({ cancelVisible: !1, keyword: "" }),
              this.triggerEvent("refresh", "");
          },
          handleInputChange(e) {
            this.setYZData({ keyword: e.detail.value });
          },
        },
        attached() {
          o.getShopInfo().then((e) => {
            var { chainStoreInfo: t, shop_name: a, kdt_id: s } = e;
            !t ||
              t.isRootShop ||
              Object(h.b)(Object(r.a)(e, "shopMetaInfo", {})) ||
              this.setYZData({ selectedShop: { shopName: a, kdtId: s } });
          });
        },
      });
    },
  })
);
