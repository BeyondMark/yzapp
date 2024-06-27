"use strict";
var r = require("~/r");
r(
  "Aw2F",
  Object.assign({}, require("~/v.js").modules, {
    Aw2F: function (r, e, a) {
      a.r(e);
      var i = a("2wjL");
      Page({
        onLoad(r) {
          void 0 === r && (r = {});
          var e = i.a.add(
            "/packages/pay/unicashier/index",
            Object.assign(r, { from: "cashier" })
          );
          wx.redirectTo({ url: e });
        },
      });
    },
  })
);
