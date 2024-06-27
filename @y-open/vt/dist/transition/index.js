"use strict";
var r = require("~/r");
r(
  "BJcG",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    BJcG: function (e, t, i) {
      i.r(t);
      var r = i("Wnk8"),
        s = {
          name: "t-transition",
          mixins: [Object(r.a)(!0)],
          methods: {
            onClick(e) {
              this.$emit("click", e, { bubbles: !0, composed: !0 });
            },
          },
          ud: !0,
        },
        c = i("9ZMt");
      t.default = c.default.component(s);
    },
  })
);
