"use strict";
var r = require("~/r");
r(
  "9eVx",
  Object.assign({}, require("~/v.js").modules, {
    "9eVx": function (e, r, t) {
      t.r(r);
      var o = t("py6f");
      Object(o.a)({
        props: {
          show: Boolean,
          mask: Boolean,
          message: String,
          forbidClick: Boolean,
          zIndex: { type: Number, value: 1e3 },
          type: { type: String, value: "text" },
          loadingType: { type: String, value: "circular" },
          position: { type: String, value: "middle" },
        },
        methods: { noop() {} },
      });
    },
  })
);
