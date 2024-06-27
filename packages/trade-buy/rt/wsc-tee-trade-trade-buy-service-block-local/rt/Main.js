"use strict";
var r = require("~/r");
r(
  "6bn9",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "6bn9": function (e, r, t) {
        t.r(r);
        var u = t("7+Ia"),
          s = {
            data() {
              return Object(u.a)(this), {};
            },
          },
          a = t("9ZMt");
        r.default = a.default.component(s);
      },
    }
  )
);
