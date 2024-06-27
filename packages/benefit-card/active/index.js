"use strict";
var r = require("~/r");
r(
  "m65e",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    m65e: function (e, r, a) {
      a.r(r);
      var s = a("qJXH");
      Object(s.b)({
        data: { alias: "", cardNo: 0, subType: "" },
        onLoad(e) {
          void 0 === e && (e = {});
          var {
            alias: r,
            card_no: a,
            sub_type: s,
            guideType: i,
            redirectUrl: d,
          } = e;
          this.setYZData({
            alias: r,
            cardNo: a,
            subType: s,
            guideType: i,
            redirectUrl: d,
          });
        },
      });
    },
  })
);
