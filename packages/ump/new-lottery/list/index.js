"use strict";
var r = require("~/r");
r(
  "pze/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "pze/": function (r, e, s) {
      s.r(e);
      var a = s("qJXH");
      Object(a.b)({
        data: { src: "" },
        onLoad(r) {
          var { alias: e } = r;
          this.setYZData({
            src: "https://h5.youzan.com/wscump/lottery/record?alias=" + e,
          });
        },
      });
    },
  })
);
