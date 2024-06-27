"use strict";
var r = require("~/r");
r(
  "E8vb",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    E8vb: function (t, e, r) {
      r.r(e);
      var s = r("7/pW"),
        o = r("VmHG");
      Object(s.a)({
        data: { protocolIndex: 10001, noAutoAuth: !1 },
        attached() {
          Object(o.d)(this, ["isEmpty", "goodsOpt"]),
            Object(o.b)(this, ["setVal", "fetchProductList", "handleRootTap"]);
        },
      });
    },
  })
);
