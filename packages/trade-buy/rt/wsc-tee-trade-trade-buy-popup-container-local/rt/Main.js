"use strict";
var r = require("~/r");
r(
  "/tNx",
  Object.assign({}, require("~/v.js").modules, {
    "/tNx": function (e, t, r) {
      r.r(t);
      var a = r("9ZMt"),
        u = {
          methods: {
            onBack() {
              a.default.navigateBack();
            },
          },
          ud: !0,
        };
      t.default = a.default.component(u);
    },
  })
);
