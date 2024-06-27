"use strict";
var r = require("~/r");
r(
  "gTAd",
  Object.assign({}, require("~/v.js").modules, {
    gTAd: function (e, t, o) {
      o.r(t);
      var l = o("ONqW"),
        c = o("YeA1"),
        r = {
          props: {
            shopMpInfo: Object,
            multistore: Object,
            kdtId: Number,
            isIconInBottom: { type: Boolean, default: !1 },
            spm: { type: String, default: "" },
          },
          computed: {},
          methods: {
            followShop() {
              Object(l.a)().log({
                et: "click",
                ei: "seller_follow",
                en: "点击关注店铺",
              }),
                this.$emit("follow-shop");
            },
            clickShopBtn() {
              Object(l.a)().log({
                et: "click",
                ei: "seller_enter",
                en: "点击进店逛逛",
              });
              Object(c.a)().dmc.switchTab("Home", {});
            },
          },
          ud: !0,
        },
        s = o("9ZMt");
      t.default = s.default.component(r);
    },
  })
);
