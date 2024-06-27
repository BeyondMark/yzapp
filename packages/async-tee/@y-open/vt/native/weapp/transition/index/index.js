"use strict";
var r = require("~/r");
r(
  "Nrat",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Nrat: function (e, t, r) {
      r.r(t);
      var i = r("9ZMt"),
        s = r("Wnk8");
      i.default.component({
        name: "t-transition",
        mixins: [Object(s.a)(!0)],
        methods: {
          onClick: function (e) {
            this.$emit("click", e, { bubbles: !0, composed: !0 });
          },
        },
        ud: !0,
      });
    },
  })
);
