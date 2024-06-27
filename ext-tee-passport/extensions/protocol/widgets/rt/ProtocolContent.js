"use strict";
var r = require("~/r");
r(
  "FLTL",
  Object.assign({}, require("~/v.js").modules, {
    "+Qok": function (t, r, o) {
      o.d(r, "a", function () {
        return e;
      });
      var e = "user-auth-protocol-content";
    },
    FLTL: function (t, r, o) {
      o.r(r);
      var e = o("+Qok"),
        u = {
          data() {
            var t;
            return {
              protocolIsCloudSlot: !(
                null == (t = this.ctx.data.cloudDesignConfig) ||
                !t.replacedSlots.includes(e.a)
              ),
            };
          },
        },
        n = o("9ZMt");
      r.default = n.default.component(u);
    },
  })
);
