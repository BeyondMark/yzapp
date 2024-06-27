"use strict";
var r = require("~/r");
r(
  "tHe/",
  Object.assign({}, require("../c.js").modules, {
    "tHe/": function (e, t, r) {
      r.r(t);
      var o = r("6t71");
      Page({
        onLoad(e) {
          Object(o.a)(this.route, e),
            getApp().onPageNotFound({ path: this.route, query: e });
        },
      });
    },
  })
);
