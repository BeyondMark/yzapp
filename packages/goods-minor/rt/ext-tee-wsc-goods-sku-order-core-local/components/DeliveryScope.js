"use strict";
var r = require("~/r");
r(
  "MhzC",
  Object.assign({}, require("~/v.js").modules, {
    MhzC: function (e, r, t) {
      t.r(r);
      var s = {
          props: { delivery: Object },
          methods: {
            onClick() {
              this.$emit("showPopup");
            },
          },
          ud: !0,
        },
        i = t("9ZMt");
      r.default = i.default.component(s);
    },
  })
);
