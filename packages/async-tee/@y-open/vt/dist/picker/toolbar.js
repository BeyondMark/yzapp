"use strict";
var r = require("~/r");
r(
  "VG8j",
  Object.assign({}, require("~/v.js").modules, {
    VG8j: function (t, e, r) {
      r.r(e);
      var i = r("Zqpg"),
        n = {
          name: "t-picker__toolbar",
          mixins: [Object(i.a)({ externalClasses: ["toolbar-class"] })],
          props: {
            cancelButtonText: String,
            confirmButtonText: String,
            confirmButtonStyle: String,
            title: String,
            simple: Boolean,
          },
          methods: {
            emit(t) {
              this.$emit("emit", t);
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      e.default = o.default.component(n);
    },
  })
);
