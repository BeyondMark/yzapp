"use strict";
var r = require("~/r");
r(
  "cZu4",
  Object.assign({}, require("~/v.js").modules, {
    cZu4: function (e, r, a) {
      a.r(r);
      var d = a("2wjL");
      Page({
        onLoad(e) {
          void 0 === e && (e = {}),
            wx.redirectTo({
              url: d.a.add(
                "/packages/trade-buy-subpage/order/self-fetch-address-city/index",
                e
              ),
            });
        },
      });
    },
  })
);
