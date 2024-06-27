"use strict";
var r = require("~/r");
r(
  "hAQR",
  Object.assign({}, require("~/v.js").modules, {
    hAQR: function (e, r, t) {
      t.r(r);
      var i = {
          props: { loading: Boolean },
          methods: {
            clickHandler() {
              this.$emit("click");
            },
          },
          ud: !0,
        },
        o = t("9ZMt");
      r.default = o.default.component(i);
    },
  })
);
