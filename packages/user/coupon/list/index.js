"use strict";
var r = require("~/r");
r(
  "A00U",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    A00U: function (e, s, t) {
      t.r(s);
      var a = t("2wjL"),
        i = t("qJXH");
      Object(i.b)({
        data: { src: "" },
        onLoad(e) {
          var { isRetailHide: s, isExchange: t } = e,
            i = getApp().getKdtId();
          this.setYZData({
            src: a.a.add("https://h5.youzan.com/wscump/coupon/collection", {
              kdtId: i,
              isRetailHide: s,
              isExchange: t,
            }),
          });
        },
      });
    },
  })
);
