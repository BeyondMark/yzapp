"use strict";
var r = require("~/r");
r(
  "D9d4",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      D9d4: function (e, o, s) {
        s.r(o);
        var r = s("rqVN"),
          t = s("RY8z"),
          a = s("Kf04"),
          i = getApp();
        Object(r.b)({
          behaviors: [a.a],
          properties: { shopInfo: Object },
          attached() {
            i.getShopInfo().then((e) => {
              this.setYZData({
                shopInfo: { shopLogo: e.logo, shopName: e.shop_name },
              });
            });
          },
          methods: {
            directToHome() {
              this.clickLog("enter_home"),
                t.a.switchTab({ url: "/packages/home/dashboard/index" });
            },
            linkMore() {
              this.clickLog("enter_more"),
                t.a.switchTab({ url: "/packages/shop/shopnote/list/index" });
            },
          },
        });
      },
    }
  )
);
