"use strict";
var r = require("~/r");
r(
  "MWcg",
  Object.assign({}, require("~/v.js").modules, {
    MWcg: function (e, r, t) {
      t.r(r);
      var n = {
          name: "recommend-goods-title",
          props: { recommendTitle: String },
          ud: !0,
        },
        o = t("9ZMt");
      r.default = o.default.component(n);
    },
  })
);
