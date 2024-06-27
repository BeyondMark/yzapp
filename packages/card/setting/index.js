"use strict";
var r = require("~/r");
r(
  "at6u",
  Object.assign({}, require("../c.js").modules, {
    at6u: function (t, e, r) {
      r.r(e);
      var u = r("6t71");
      Page({
        onLoad(t) {
          Object(u.a)(this.route, t),
            getApp().onPageNotFound({ path: this.route, query: t });
        },
      });
    },
  })
);
