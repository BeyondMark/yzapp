"use strict";
var r = require("~/r");
r(
  "3kKn",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "3kKn": function (a, e, r) {
      r.r(e);
      var s = r("qJXH");
      Object(s.b)({
        onLoad(a) {
          void 0 === a && (a = {});
          var { data: e } = a,
            r = JSON.parse(e);
          wx.addCard({
            cardList: r,
            success() {
              wx.navigateBack();
            },
            fail(a) {
              "addCard:fail cancel" !== a.errMsg &&
                wx.showToast({ title: "同步卡包失败", duration: 2e3 }),
                setTimeout(() => {
                  wx.navigateBack();
                }, 2e3);
            },
          });
        },
      });
    },
  })
);
