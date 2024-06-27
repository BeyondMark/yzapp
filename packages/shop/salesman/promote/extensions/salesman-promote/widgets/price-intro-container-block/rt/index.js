"use strict";
var r = require("~/r");
r(
  "sm3C",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    sm3C: function (s, e, r) {
      r.r(e);
      var t = r("7/pW");
      Object(t.a)({
        name: "price-intro",
        data: { show: !1 },
        methods: {
          toggle() {
            this.setData({ show: !this.data.show });
          },
        },
      });
    },
  })
);
