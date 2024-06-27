"use strict";
var r = require("~/r");
r(
  "m+OS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "m+OS": function (e, r, s) {
      s.r(r);
      var t = s("u8kV");
      Object(t.b)({
        externalClasses: ["custom-class", "title-class"],
        options: { multipleSlots: !0 },
        properties: {
          imgUrl: String,
          title: String,
          desc: String,
          value: String,
          label: String,
        },
      });
    },
  })
);
