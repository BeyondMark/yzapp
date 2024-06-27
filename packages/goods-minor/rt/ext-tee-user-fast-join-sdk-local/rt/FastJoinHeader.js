"use strict";
var r = require("~/r");
r(
  "ksiR",
  Object.assign({}, require("~/v.js").modules, {
    ksiR: function (e, r, t) {
      t.r(r);
      var s = {
          props: {
            shopInfo: { type: Object },
            fastJoinHeaderInfo: { type: Object },
          },
          ud: !0,
        },
        o = t("9ZMt");
      r.default = o.default.component(s);
    },
  })
);
