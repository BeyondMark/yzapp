"use strict";
var r = require("~/r");
r(
  "4GOl",
  Object.assign({}, require("~/v.js").modules, {
    "4GOl": function (e, o, r) {
      r.r(o);
      var t = r("py6f");
      Object(t.a)({
        props: {
          size: String,
          mark: Boolean,
          color: String,
          plain: Boolean,
          round: Boolean,
          textColor: String,
          type: { type: String, value: "default" },
          closeable: Boolean,
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
