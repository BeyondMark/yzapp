"use strict";
var r = require("~/r");
r(
  "MvvQ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    MvvQ: function (e, r, s) {
      s.r(r);
      var t = s("qJXH");
      Object(t.b)({
        data: { src: "" },
        onLoad() {
          this.setYZData({
            src: "https://h5.youzan.com/wscuser/membercenter/setting",
          });
        },
      });
    },
  })
);
