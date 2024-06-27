"use strict";
var r = require("~/r");
r(
  "qoo6",
  Object.assign({}, require("~/v.js").modules, {
    qoo6: function (r, e, o) {
      o.r(e);
      var t = {
          props: { comboDetail: { type: [Array], required: !0 } },
          ud: !0,
        },
        u = o("9ZMt");
      e.default = u.default.component(t);
    },
  })
);
