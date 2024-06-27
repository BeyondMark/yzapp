"use strict";
var r = require("~/r");
r(
  "uakW",
  Object.assign({}, require("../c.js").modules, {
    uakW: function (e, r, t) {
      t.r(r);
      var u = t("6t71");
      Page({
        onLoad(e) {
          Object(u.a)(this.route, e),
            getApp().onPageNotFound({ path: this.route, query: e });
        },
      });
    },
  })
);
