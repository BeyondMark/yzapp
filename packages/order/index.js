"use strict";
var r = require("~/r");
r(
  "79g7",
  Object.assign({}, require("~/v.js").modules, {
    "79g7": function (e, r, o) {
      o.r(r);
      var a = o("PKOW"),
        b = o("9DIb"),
        i = o.n(b);
      Page({
        onLoad(e) {
          void 0 === e && (e = {});
          var { bookKey: r = "", orderNo: o = "" } = i()(e);
          Object(a.f)({
            pageType: !r && o ? a.b.PAY : a.b.ORDER,
            type: a.a.REDIRECT,
            query: e,
          });
        },
      });
    },
  })
);
