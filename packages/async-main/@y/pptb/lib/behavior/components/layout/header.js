"use strict";
var r = require("~/r");
r(
  "pSwH",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      pSwH: function (e, r, t) {
        t.r(r);
        var s = t("E6qs"),
          u = t("1rIA"),
          o = {
            mounted() {},
            methods: {
              onClose() {
                Object(s.c)({ vm: this, eventType: u.j.CANCEL });
              },
            },
            ud: !0,
          },
          n = t("9ZMt");
        r.default = n.default.component(o);
      },
    }
  )
);
