"use strict";
var r = require("~/r");
r(
  "SMtk",
  Object.assign({}, require("~/v.js").modules, {
    SMtk: function (e, t, s) {
      s.r(t);
      var o = {
          props: { goods: { type: Object } },
          methods: {
            openDetail() {
              this.$emit("open-goods-message");
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      t.default = r.default.component(o);
    },
  })
);
