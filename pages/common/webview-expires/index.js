"use strict";
var r = require("~/r");
r(
  "3bar",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "3bar": function (e, r, a) {
      a.r(r);
      var c = a("qJXH"),
        i = a("hHpg"),
        o = getApp();
      Object(c.b)({
        onLoad(e) {
          void 0 === e && (e = {}),
            i.a.loading("登录中"),
            o
              .login()
              .then(() => {
                i.a.clear(),
                  wx.redirectTo({
                    url:
                      "/pages/common/webview-page/index?src=" + e.redirectUrl,
                  });
              })
              .catch(() => {
                Object(i.a)("登录失败，请稍后再试");
              });
        },
      });
    },
  })
);
