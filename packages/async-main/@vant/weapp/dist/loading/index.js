"use strict";
var r = require("~/r");
r(
  "AHAP",
  Object.assign({}, require("~/v.js").modules, {
    AHAP: function (r, e, t) {
      t.r(e);
      var a = t("py6f");
      Object(a.a)({
        props: {
          color: String,
          vertical: Boolean,
          type: { type: String, value: "circular" },
          size: String,
          textSize: String,
        },
        data: { array12: Array.from({ length: 12 }) },
      });
    },
  })
);
