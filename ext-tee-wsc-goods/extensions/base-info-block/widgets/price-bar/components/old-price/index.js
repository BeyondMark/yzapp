"use strict";
var r = require("~/r");
r(
  "wSAw",
  Object.assign({}, require("~/v.js").modules, {
    wSAw: function (r, e, i) {
      i.r(e);
      var t = i("Nvad"),
        c = {
          props: { originPrice: Object },
          computed: {
            price() {
              return Object(t.b)(this.originPrice.price);
            },
          },
          ud: !0,
        },
        u = i("9ZMt");
      e.default = u.default.component(c);
    },
  })
);
