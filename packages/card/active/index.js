"use strict";
var r = require("~/r");
r(
  "cEJb",
  Object.assign({}, require("../c.js").modules, {
    cEJb: function (e, r, t) {
      t.r(r);
      var o = t("6t71");
      Page({
        onLoad(e) {
          Object(o.a)(this.route, e),
            getApp().onPageNotFound({ path: this.route, query: e });
        },
      });
    },
  })
);
