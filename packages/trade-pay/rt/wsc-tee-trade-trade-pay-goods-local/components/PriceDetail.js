"use strict";
var r = require("~/r");
r(
  "FFF9",
  Object.assign({}, require("~/v.js").modules, {
    FFF9: function (r, e, t) {
      t.r(e);
      var i = {
          props: {
            price: String,
            itemList: { type: Array, default: () => [] },
          },
          ud: !0,
        },
        u = t("9ZMt");
      e.default = u.default.component(i);
    },
  })
);
