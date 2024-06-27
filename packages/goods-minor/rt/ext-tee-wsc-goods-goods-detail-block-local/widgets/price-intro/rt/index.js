"use strict";
var r = require("~/r");
r(
  "8XsW",
  Object.assign({}, require("~/v.js").modules, {
    "8XsW": function (e, t, r) {
      r.r(t);
      var o = {
          name: "haitao-notification",
          props: {
            shopName: String,
            goodsPriceIntro: { type: Object, default: () => ({}) },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(o);
    },
  })
);
