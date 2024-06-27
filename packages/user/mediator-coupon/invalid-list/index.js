"use strict";
var r = require("~/r");
r(
  "0CeF",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "0CeF": function (e, t, r) {
      r.r(t);
      var a = r("2wjL"),
        s = r("qJXH");
      Object(s.b)({
        data: { src: "" },
        onLoad() {
          var e = getApp().getKdtId();
          this.setYZData({
            src: a.a.add(
              "https://h5.youzan.com/wscump/mediator-coupon/collection?type=invalid#/invalid",
              { kdtId: e }
            ),
          });
        },
      });
    },
  })
);
