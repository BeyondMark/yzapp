"use strict";
var r = require("~/r");
r(
  "3UcY",
  Object.assign({}, require("~/c.js").modules, {
    "3UcY": function (e, t, r) {
      r.r(t);
      var s = r("0i4I");
      Object(s.a)({
        props: {
          value: { type: Boolean, default: !1 },
          zIndex: { type: Number, default: 100 },
          data: Object,
        },
        methods: {
          onClose() {
            this.$emit("close");
          },
        },
      });
    },
  })
);
