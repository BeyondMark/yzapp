"use strict";
var r = require("~/r");
r(
  "ulyS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ulyS: function (i, e, r) {
      r.r(e);
      var s = r("7/pW"),
        t = r("VmHG");
      Object(s.a)({
        attached() {
          Object(t.d)(this, [
            "goodsDetail",
            "bargainDetail",
            "minPriceYuan",
            "minPriceFen",
            "sloganCopywriting",
            "stampCopywriting",
            "isActionSuccess",
          ]);
        },
      });
    },
  })
);
