"use strict";
var r = require("~/r");
r(
  "D0Ml",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    D0Ml: function (r, s, e) {
      e.r(s);
      var t = e("qJXH");
      Object(t.b)({
        data: { src: "" },
        onLoad() {
          this.setYZData({
            src: "https://h5.youzan.com/wscuser/scrm/benefitcard/list",
          });
        },
      });
    },
  })
);
