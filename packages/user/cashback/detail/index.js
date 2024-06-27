"use strict";
var r = require("~/r");
r(
  "ek5s",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ek5s: function (r, e, o) {
      o.r(e);
      var s = o("qJXH");
      Object(s.b)({
        data: { orderNo: "" },
        onLoad(r) {
          var { order_no: e } = r;
          e
            ? this.setYZData({ orderNo: e })
            : wx.showToast({
                title: "页面数据错误",
                icon: "none",
                duration: 1e3,
              });
        },
      });
    },
  })
);
