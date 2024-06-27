"use strict";
var r = require("~/r");
r(
  "TjCD",
  Object.assign({}, require("~/v.js").modules, {
    TjCD: function (e, r, t) {
      t.r(r);
      var s = t("Zqpg"),
        a = {
          name: "t-cell-group",
          mixins: [Object(s.a)({ externalClasses: ["custom-class"] })],
          props: {
            title: String,
            border: { type: Boolean, value: !0 },
            inset: Boolean,
          },
          ud: !0,
        },
        l = t("9ZMt");
      r.default = l.default.component(a);
    },
  })
);
