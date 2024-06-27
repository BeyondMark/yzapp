"use strict";
var r = require("~/r");
r(
  "OpHg",
  Object.assign({}, require("~/v.js").modules, {
    OpHg: function (r, e, t) {
      t.r(e);
      var u = {
          props: { rewardModel: { type: Array, default: () => [] } },
          ud: !0,
        },
        a = t("9ZMt");
      e.default = a.default.component(u);
    },
  })
);
