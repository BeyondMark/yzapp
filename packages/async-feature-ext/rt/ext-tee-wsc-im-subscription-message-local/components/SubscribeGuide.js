"use strict";
var r = require("~/r");
r(
  "VUlC",
  Object.assign({}, require("~/v.js").modules, {
    VUlC: function (e, t, r) {
      r.r(t);
      var o = {
          props: {
            show: Boolean,
            zIndex: { type: Number, default: 100011 },
            imgTop: { type: String, default: "30%" },
          },
          methods: {
            handleClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(o);
    },
  })
);
