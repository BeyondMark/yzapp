"use strict";
var r = require("~/r");
r(
  "V7BR",
  Object.assign({}, require("~/v.js").modules, {
    V7BR: function (e, t, r) {
      r.r(t);
      var u = {
          methods: {
            handleSubmit() {
              this.$emit("onSubmit");
            },
          },
          ud: !0,
        },
        i = r("9ZMt");
      t.default = i.default.component(u);
    },
  })
);
