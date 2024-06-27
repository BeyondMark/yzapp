"use strict";
var r = require("~/r");
r(
  "E/Iq",
  Object.assign({}, require("~/v.js").modules, {
    "E/Iq": function (e, r, a) {
      a.r(r);
      var d = a("2wjL");
      Page({
        onLoad(e) {
          void 0 === e && (e = {}),
            wx.redirectTo({
              url: d.a.add(
                "/packages/trade-buy-subpage/order/self-fetch-address/index",
                e
              ),
            });
        },
      });
    },
  })
);
