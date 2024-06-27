"use strict";
var r = require("~/r");
r(
  "ZxAV",
  Object.assign({}, require("~/v.js").modules, {
    ZxAV: function (r, e, t) {
      t.r(e);
      var a = t("+I+c"),
        c = t("YeA1"),
        o = ["route"];
      Page({
        onLoad(r) {
          var { route: e } = r,
            t = Object(a.a)(r, o);
          Object(c.a)().dmc.redirectTo(e, t);
        },
      });
    },
  })
);
