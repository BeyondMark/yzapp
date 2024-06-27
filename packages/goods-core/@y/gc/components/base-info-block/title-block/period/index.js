"use strict";
var r = require("~/r");
r(
  "v6/3",
  Object.assign({}, require("~/v.js").modules, {
    "v6/3": function (e, r, t) {
      t.r(r);
      var u = {
          name: "Period",
          props: { themeTag: { type: Object, default: () => ({}) } },
          ud: !0,
        },
        a = t("9ZMt");
      r.default = a.default.component(u);
    },
  })
);
