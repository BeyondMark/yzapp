"use strict";
var r = require("~/r");
r(
  "Qzga",
  Object.assign({}, require("~/v.js").modules, {
    Qzga: function (r, e, a) {
      a.r(e);
      var c = {
          props: {
            item: { type: Object, require: !0 },
            theme: { type: Object, require: !0 },
            themeTag: { type: Object, require: !0 },
          },
          data: () => ({
            dashStyle:
              "linear-gradient(\n          to bottom,\n          var(--ump-border, #c9c9ff) 20%,\n          var(--ump-border, #c9c9ff) 20%,\n          var(--ump-border, #c9c9ff) 20%,\n          rgba(255, 255, 255, 0) 20%,\n          rgba(255, 255, 255, 0) 35%,\n          rgba(136, 76, 255, 1) 35%,\n          var(--ump-border, #c9c9ff) 35%,\n          var(--ump-border, #c9c9ff) 35%,\n          var(--ump-border, #c9c9ff) 60%,\n          rgba(255, 255, 255, 0) 60%,\n          rgba(255, 255, 255, 0) 55%,\n          rgba(255, 255, 255, 0) 75%,\n          var(--ump-border, #c9c9ff) 75%,\n          var(--ump-border, #c9c9ff) 75%,\n          var(--ump-border, #c9c9ff) 100%\n        )",
          }),
          ud: !0,
        },
        n = a("9ZMt");
      e.default = n.default.component(c);
    },
  })
);
