"use strict";
var r = require("~/r");
r(
  "Ijk1",
  Object.assign({}, require("~/v.js").modules, {
    Ijk1: function (e, o, a) {
      a.r(o);
      var r = {
          name: "MainFrame",
          props: {
            show: Boolean,
            showGoodsDetail: Boolean,
            customStyle: String,
          },
          methods: {
            handleTogglePanel() {
              this.$emit("close-main-frame");
            },
          },
          ud: !0,
        },
        t = a("9ZMt");
      o.default = t.default.component(r);
    },
  })
);
