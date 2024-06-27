"use strict";
var r = require("~/r");
r(
  "f68e",
  Object.assign({}, require("~/v.js").modules, {
    f68e: function (e, t, r) {
      r.r(t);
      var o = {
          props: { opt: Object },
          methods: {
            onBtnClick(e) {
              this.$emit("auth-click", e);
            },
            onPopupShow(e) {
              this.$emit("user-authorize-show", e);
            },
          },
          ud: !0,
        },
        i = r("9ZMt");
      t.default = i.default.component(o);
    },
  })
);
