"use strict";
var r = require("~/r");
r(
  "OzV1",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    OzV1: function (e, r, s) {
      s.r(r);
      var t = s("7/pW"),
        u = s("YeA1");
      Object(t.a)({
        properties: {
          browseCount: Number,
          thumbsUp: Number,
          showBrowseCount: Number,
          showThumbsUp: Number,
        },
        options: { addGlobalClass: !0 },
        data: {},
        attached() {
          Object(u.b)(this, ["noteData"]);
        },
      });
    },
  })
);
