"use strict";
var r = require("~/r");
r(
  "Bk6F",
  Object.assign({}, require("~/v.js").modules, {
    Bk6F: function (t, o, r) {
      r.r(o);
      var e = r("qo/7"),
        u = { mixins: [Object(e.a)("popup")], ud: !0 },
        n = r("9ZMt");
      o.default = n.default.component(u);
    },
    "qo/7": function (t, o, r) {
      r.d(o, "a", function () {
        return e;
      });
      function e(t) {
        return {
          data() {
            var { cloudDesignConfig: o } = this.ctx.data;
            return {
              protocolIsCloudSlot:
                !!o && o.replacedSlots.includes("user-auth-protocol-content"),
              protocolSource: "@ext/authorize/" + t + "_" + Date.now(),
            };
          },
        };
      }
    },
  })
);
