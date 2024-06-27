"use strict";
var r = require("~/r");
r(
  "w27t",
  Object.assign({}, require("~/v.js").modules, {
    w27t: function (e, r, t) {
      t.r(r);
      var a = t("YeA1"),
        d = {
          data: () => ({ rewardModel: {} }),
          created() {
            Object(a.b)(this, ["rewardModel"]);
          },
          ud: !0,
        },
        u = t("9ZMt");
      r.default = u.default.component(d);
    },
  })
);
