"use strict";
var r = require("~/r");
r(
  "deNT",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    deNT: function (e, r, s) {
      s.r(r);
      var i = s("7/pW"),
        t = s("YeA1");
      Object(i.a)({
        attached() {
          Object(t.b)(this, ["winnerList", "showWinnerList"]);
        },
      });
    },
  })
);
