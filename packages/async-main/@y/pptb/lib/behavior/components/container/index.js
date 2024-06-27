"use strict";
var r = require("~/r");
r(
  "X8Dx",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      X8Dx: function (r, c, t) {
        t.r(c);
        var e = t("SyLL"),
          o = {
            mounted() {},
            methods: {
              onTouchStart(r) {
                e.c.clickOrTouch.startRecordTouchStart(r);
              },
              onTouchEnd(r) {
                e.c.clickOrTouch.startRecordTouchEnd(r);
              },
            },
            ud: !0,
          },
          u = t("9ZMt");
        c.default = u.default.component(o);
      },
    }
  )
);
