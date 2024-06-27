"use strict";
var r = require("~/r");
r(
  "+lzM",
  Object.assign({}, require("~/v.js").modules, {
    "+lzM": function (e, t, r) {
      r.r(t);
      var s = r("Fcif"),
        c = r("VmHG"),
        d = {
          data() {
            return Object(s.a)(
              {},
              Object(c.d)(this, [
                "shopLink",
                "currentAddress",
                "kdtId",
                "themeColors",
              ])
            );
          },
          created() {
            Object(c.b)(this, ["reselectGoods"]);
          },
        },
        a = r("9ZMt");
      t.default = a.default.component(d);
    },
  })
);
