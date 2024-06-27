"use strict";
var r = require("~/r");
r(
  "DPld",
  Object.assign({}, require("~/v.js").modules, {
    DPld: function (e, r, t) {
      t.r(r);
      var u = {
          props: {
            periodBuy: {
              type: Object,
              default: () => ({ chosenIndex: 0, options: [] }),
            },
          },
          ud: !0,
        },
        d = t("9ZMt");
      r.default = d.default.component(u);
    },
  })
);
