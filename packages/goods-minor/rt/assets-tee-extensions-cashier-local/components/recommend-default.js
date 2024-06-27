"use strict";
var r = require("~/r");
r(
  "9CiB",
  Object.assign({}, require("~/v.js").modules, {
    "9CiB": function (e, r, t) {
      t.r(r);
      var i = {
          props: {
            channel: { type: Object, required: !0 },
            themeColor: String,
          },
          ud: !0,
        },
        u = t("9ZMt");
      r.default = u.default.component(i);
    },
  })
);
