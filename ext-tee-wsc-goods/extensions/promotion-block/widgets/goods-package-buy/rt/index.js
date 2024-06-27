"use strict";
var r = require("~/r");
r(
  "mekk",
  Object.assign({}, require("~/v.js").modules, {
    mekk: function (e, r, t) {
      t.r(r);
      var u = { props: { opt: { type: Object, default: () => ({}) } }, ud: !0 },
        s = t("9ZMt");
      r.default = s.default.component(u);
    },
  })
);
