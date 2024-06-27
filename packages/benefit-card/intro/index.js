"use strict";
var r = require("~/r");
r(
  "3ylN",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "3ylN": function (a, r, s) {
      s.r(r);
      var e = s("qJXH");
      Object(e.b)({
        data: { alias: "" },
        onLoad(a) {
          void 0 === a && (a = {});
          var r = a.card_alias;
          this.setYZData({ alias: r });
        },
      });
    },
  })
);
