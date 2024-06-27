"use strict";
var r = require("~/r");
r(
  "TqM0",
  Object.assign({}, require("~/v.js").modules, {
    TqM0: function (e, i, r) {
      r.r(i);
      var s = r("py6f");
      Object(s.a)({
        classes: ["info-class"],
        props: {
          dot: Boolean,
          info: null,
          size: null,
          color: String,
          customStyle: String,
          classPrefix: { type: String, value: "van-icon" },
          name: String,
        },
        methods: {
          onClick() {
            this.$emit("click");
          },
        },
      });
    },
  })
);
