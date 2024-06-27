"use strict";
var r = require("~/r");
r(
  "+yJu",
  Object.assign({}, require("~/v.js").modules, {
    "+yJu": function (e, o, r) {
      r.r(o);
      var t = r("py6f");
      Object(t.a)({
        props: {
          show: Boolean,
          customStyle: String,
          duration: { type: null, value: 300 },
          zIndex: { type: Number, value: 1 },
          lockScroll: { type: Boolean, value: !0 },
          rootPortal: { type: Boolean, value: !1 },
        },
        methods: {
          onClick() {
            this.$emit("click");
          },
          noop() {},
        },
      });
    },
  })
);
