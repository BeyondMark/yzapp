"use strict";
var r = require("~/r");
r(
  "hlZk",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    hlZk: function (t, e, a) {
      a.r(e);
      var s = a("rqVN"),
        h = a("tqDJ"),
        r = getApp();
      Object(s.b)({
        name: "external-sku",
        properties: {
          show: {
            type: Boolean,
            observer(t) {
              t && this.data.alias && this.fetchSkuData();
            },
          },
          alias: String,
        },
        data: { themeClass: r.themeClass },
        lifetimes: {
          attached() {
            this.on("component:sku:cart", this.handleAddCart);
          },
          detached() {
            this.off("component:sku:cart", this.handleAddCart);
          },
        },
        methods: {
          fetchSkuData() {
            var { alias: t } = this.data;
            Object(h.a)(t)
              .then((t) => {
                this.setYZData({ skuData: t });
              })
              .catch((t) => {
                var { msg: e = "" } = t;
                wx.showToast({ title: e || "请求数据失败", icon: "none" });
              });
          },
          handleAddCart(t) {
            "add" == t.type &&
              wx.showToast({ title: "添加购物车成功", icon: "none" });
          },
          handleSkuClose() {
            this.setYZData({ "skuData.showGoodsSku": !1 }),
              this.triggerEvent("close");
          },
        },
      });
    },
  })
);
