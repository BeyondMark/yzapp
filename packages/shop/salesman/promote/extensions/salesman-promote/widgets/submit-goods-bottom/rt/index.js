"use strict";
var r = require("~/r");
r(
  "vtoE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vtoE: function (e, t, r) {
      r.r(t);
      var o = r("7/pW"),
        s = r("VmHG"),
        a = r("lOyf");
      Object(o.a)({
        name: "GoodsBottom",
        attached() {
          Object(s.d)(this, ["env", "shopConfig"]);
        },
        data: { deviceType: Object(a.a)() ? "iPhone-X" : "" },
      });
    },
  })
);
