"use strict";
var r = require("~/r");
r(
  "eofS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    eofS: function (e, r, s) {
      s.r(r);
      var t = s("Rz+h"),
        u = {
          created() {
            this.ctx.process.define("jumpToLink", t.a);
          },
          ud: !0,
        },
        i = s("9ZMt");
      r.default = i.default.component(u);
    },
  })
);
