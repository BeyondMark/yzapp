"use strict";
var r = require("~/r");
r(
  "IBh9",
  Object.assign({}, require("~/v.js").modules, {
    IBh9: function (r, e, a) {
      a.r(e);
      var d = a("2wjL");
      Page({
        onLoad(r) {
          void 0 === r && (r = {}),
            wx.redirectTo({
              url: d.a.add(
                "/packages/trade-buy-subpage/order/address-map/index",
                r
              ),
            });
        },
      });
    },
  })
);
