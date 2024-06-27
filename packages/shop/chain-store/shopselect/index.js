"use strict";
var r = require("~/r");
r(
  "csC7",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    csC7: function (e, r, c) {
      c.r(r);
      var t = c("qJXH"),
        o = c("oLdL"),
        s = getApp();
      Object(t.b)({
        onLoad(e) {
          s.logger &&
            s.logger.log({
              et: "custom",
              ei: "shop_select_old",
              en: "店铺选择页面（旧）",
            }),
            wx.redirectTo({
              url:
                "/packages/shop-select/chain-store/shopselect/index?" +
                Object(o.a)(e),
            });
        },
      });
    },
    oLdL: function (e, r, c) {
      function t(e) {
        return Object.keys(e)
          .reduce((r, c) => r.concat(c + "=" + e[c]), [])
          .join("&");
      }
      c.d(r, "a", function () {
        return t;
      });
    },
  })
);
