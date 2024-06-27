"use strict";
var r = require("~/r");
r(
  "mQMO",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    mQMO: function (e, t, r) {
      r.r(t);
      var d = r("2wjL"),
        a = r("qJXH");
      Object(a.b)({
        data: { src: "" },
        onLoad(e) {
          var { verifyCode: t, activityId: r, type: a } = e,
            s = getApp().getKdtId();
          this.setYZData({
            src: d.a.add("https://h5.youzan.com/wscump/coupon/code?", {
              kdtId: s,
              verifyCode: t,
              activityId: r,
              type: a,
            }),
          });
        },
      });
    },
  })
);
