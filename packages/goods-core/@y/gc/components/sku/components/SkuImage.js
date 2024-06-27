"use strict";
var r = require("~/r");
r(
  "fFSP",
  Object.assign({}, require("~/v.js").modules, {
    fFSP: function (e, t, r) {
      r.r(t);
      var s = {
          props: { opt: Object },
          externalClasses: ["custom-class"],
          methods: {
            onImageClick() {
              this.$emit("preview", { type: "header" });
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
