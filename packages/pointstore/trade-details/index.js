"use strict";
var r = require("~/r");
r(
  "Z9nA",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Z9nA: function (r, e, s) {
      s.r(e);
      var t = s("qJXH");
      Object(t.b)({
        data: { src: "" },
        onLoad(r) {
          void 0 === r && (r = {});
          var { kdt_id: e } = r;
          this.setYZData({
            src: "/wscump/pointstore/tradedetails?kdt_id=" + e,
          });
        },
      });
    },
  })
);
