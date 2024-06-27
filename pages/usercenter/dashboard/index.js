"use strict";
var r = require("~/r");
r(
  "zDq5",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    zDq5: function (e, r, a) {
      a.r(r);
      var s = a("LvFB"),
        { isRetailApp: i } = getApp().globalData;
      Page(
        i
          ? {
              onLoad() {
                wx.redirectTo({
                  url: "/packages/retail/usercenter/dashboard-v2/index",
                });
              },
            }
          : s.a
      );
    },
  })
);
