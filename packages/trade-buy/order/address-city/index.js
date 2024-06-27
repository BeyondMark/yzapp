"use strict";
var r = require("~/r");
r(
  "+eCn",
  Object.assign({}, require("~/v.js").modules, {
    "+eCn": function (e, r, a) {
      a.r(r);
      var d = a("2wjL");
      Page({
        onLoad(e) {
          void 0 === e && (e = {}),
            wx.redirectTo({
              url: d.a.add(
                "/packages/trade-buy-subpage/order/address-city/index",
                e
              ),
            });
        },
      });
    },
  })
);
