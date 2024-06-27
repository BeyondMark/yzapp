"use strict";
var r = require("~/r");
r(
  "1bZz",
  Object.assign({}, require("~/v.js").modules, {
    "1bZz": function (t, e, r) {
      r.r(e);
      var i = {
          name: "goods-action-icon",
          props: { btn: Object },
          methods: {
            onClick(t) {
              this.$emit("btn-click", t);
            },
          },
          ud: !0,
        },
        n = r("9ZMt");
      e.default = n.default.component(i);
    },
  })
);
