"use strict";
var r = require("~/r");
r(
  "J0KD",
  Object.assign({}, require("~/v.js").modules, {
    J0KD: function (r, e, a) {
      a.r(e);
      var d = a("2wjL");
      Page({
        onLoad(r) {
          void 0 === r && (r = {}),
            wx.redirectTo({
              url: d.a.add(
                "/packages/trade-buy-subpage/order/address-edit/index",
                r
              ),
            });
        },
      });
    },
  })
);
