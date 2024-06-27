"use strict";
var r = require("~/r");
r(
  "NH4M",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    NH4M: function (e, t, a) {
      a.r(t);
      var s = a("QLod"),
        o = Object(s.e)() || 0,
        i = getApp();
      Component({
        data: { isShowTip: !1, top: o + 7, isRetailShop: !1 },
        attached() {
          var e = this;
          i.on("feature_close_collect_tip", () => {
            e.setData({ isShowTip: !1 });
          }),
            i.getShopInfo().then((t) => {
              var a;
              e.setData({
                isRetailShop:
                  null == t || null == (a = t.shopType)
                    ? void 0
                    : a.isRetailShop,
              }),
                wx.getStorage({
                  key: "homepage:has_close_collect_tip",
                  success(t) {
                    e.setData({ isShowTip: !t.data });
                  },
                  fail() {
                    e.setData({ isShowTip: !0 });
                  },
                  complete() {
                    setTimeout(() => {
                      e.setData({ isShowTip: !1 }, () => {
                        wx.setStorage({
                          key: "homepage:has_close_collect_tip",
                          data: !0,
                        });
                      });
                    }, 5e3);
                  },
                });
            });
        },
      });
    },
  })
);
