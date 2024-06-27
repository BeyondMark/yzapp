"use strict";
var r = require("~/r");
r(
  "gxXf",
  Object.assign({}, require("~/v.js").modules, {
    gxXf: function (t, e, i) {
      i.r(e);
      var o = {
          props: {
            activity: { type: Object, default: () => ({}) },
            showDetailButton: { type: Boolean, default: !1 },
          },
          methods: {
            goToActivityDetail(t) {
              this.$emit("goToActivityDetail", t);
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      e.default = a.default.component(o);
    },
  })
);
