"use strict";
var r = require("~/r");
r(
  "KwPP",
  Object.assign({}, require("~/v.js").modules, {
    KwPP: function (e, t, a) {
      a.r(t);
      var i = {
          name: "haitao-notification",
          props: {
            isHaitao: Boolean,
            haitaoDesc: { type: Object, default: () => {} },
          },
          ud: !0,
        },
        o = a("9ZMt");
      t.default = o.default.component(i);
    },
  })
);
