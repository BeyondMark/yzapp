"use strict";
var r = require("~/r");
r(
  "BJ1B",
  Object.assign({}, require("~/v.js").modules, {
    BJ1B: function (o, e, t) {
      t.r(e);
      var i = t("ONqW"),
        l = t("YeA1"),
        s = {
          props: {
            shopInfo: { type: Object, default: () => ({}) },
            shopConfig: Object,
            multistore: Object,
            customStyle: String,
            showOldShopBadge: Boolean,
            themeVars: String,
            goodsDetailLogoUrl: String,
          },
          computed: {
            shopName() {
              var o = this.shopInfo.name,
                { name: e, hideStore: t } = this.multistore;
              return t ? o : e || o;
            },
            goodShopLogo() {
              return this.goodsDetailLogoUrl || this.shopInfo.logo;
            },
          },
          methods: {
            gotoShop() {
              Object(l.a)().dmc.switchTab("Home", {});
            },
            gotoShopInfo() {
              Object(l.a)().dmc.navigate("ShopInfo", {
                kdt_id: this.shopInfo.kdtId,
              });
            },
            followShop() {
              Object(i.a)().log({
                et: "click",
                ei: "seller_follow",
                en: "点击关注店铺",
              }),
                this.$emit("follow-shop");
            },
            clickShopLogo() {
              Object(i.a)().log({
                et: "click",
                ei: "seller_pic",
                en: "点击店铺头像",
              }),
                this.gotoShop();
            },
            clickShopBtn() {
              Object(i.a)().log({
                et: "click",
                ei: "seller_enter",
                en: "点击进店逛逛",
              }),
                this.gotoShop();
            },
          },
          ud: !0,
        },
        h = t("9ZMt");
      e.default = h.default.component(s);
    },
  })
);
