"use strict";
var r = require("~/r");
r(
  "eh10",
  Object.assign({}, require("~/v.js").modules, {
    eh10: function (e, t, r) {
      r.r(t);
      var i = {
          name: "note-item-head",
          props: { note: Object },
          methods: {
            handleItemClick() {
              this.$emit("handle-click");
            },
          },
          ud: !0,
        },
        n = r("9ZMt");
      t.default = n.default.component(i);
    },
  })
);
