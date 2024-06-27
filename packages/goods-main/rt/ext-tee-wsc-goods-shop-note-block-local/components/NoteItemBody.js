"use strict";
var r = require("~/r");
r(
  "lGtU",
  Object.assign({}, require("~/v.js").modules, {
    lGtU: function (e, t, r) {
      r.r(t);
      var i = {
          name: "note-item-body",
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
