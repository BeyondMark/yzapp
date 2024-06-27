"use strict";
var r = require("~/r");
r(
  "mnks",
  Object.assign({}, require("~/v.js").modules, {
    mnks: function (e, s, t) {
      t.r(s);
      var n = t("Zqpg"),
        r = {
          name: "t-info",
          mixins: [Object(n.a)({ externalClasses: ["custom-class"] })],
          props: { dot: Boolean, info: String, customStyle: String },
          ud: !0,
        },
        o = t("9ZMt");
      s.default = o.default.component(r);
    },
  })
);
