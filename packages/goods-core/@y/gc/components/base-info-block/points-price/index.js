"use strict";
var r = require("~/r");
r(
  "ciMZ",
  Object.assign({}, require("~/v.js").modules, {
    ciMZ: function (e, r, t) {
      t.r(r);
      var u = {
          props: { priceInfo: { type: Object, default: () => ({}) } },
          ud: !0,
        },
        c = t("9ZMt");
      r.default = c.default.component(u);
    },
  })
);
