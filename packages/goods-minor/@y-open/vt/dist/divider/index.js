"use strict";
var r = require("~/r");
r(
  "3xzO",
  Object.assign({}, require("~/v.js").modules, {
    "3xzO": function (e, t, r) {
      r.r(t);
      var s = r("Zqpg"),
        n = {
          name: "t-divider",
          mixins: [Object(s.a)({ externalClasses: ["custom-class"] })],
          props: {
            dashed: Boolean,
            hairline: Boolean,
            contentPosition: String,
            customStyle: String,
          },
          ud: !0,
        },
        i = r("9ZMt");
      t.default = i.default.component(n);
    },
  })
);
