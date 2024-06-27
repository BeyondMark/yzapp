"use strict";
var r = require("~/r");
r(
  "oJS5",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      oJS5: function (e, r, u) {
        u.r(r);
        var t = { name: "DanmakuTextItem", mixins: [u("S0oj").a], ud: !0 },
          a = u("9ZMt");
        r.default = a.default.component(t);
      },
    }
  )
);
