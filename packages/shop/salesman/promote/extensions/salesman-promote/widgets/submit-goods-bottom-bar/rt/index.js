"use strict";
var r = require("~/r");
r(
  "Cn3p",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Cn3p: function (e, r, t) {
      t.r(r);
      var s = t("7/pW"),
        o = t("VmHG");
      Object(s.a)({
        name: "GoodsBottomBar",
        attached() {
          Object(o.d)(this, ["goodsBottomDisabledTip"]),
            Object(o.b)(this, ["reload"]);
        },
      });
    },
  })
);
