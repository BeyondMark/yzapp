"use strict";
var r = require("~/r");
r(
  "b0iw",
  Object.assign({}, require("~/v.js").modules, {
    b0iw: function (e, t, n) {
      n.r(t);
      var o = {
          name: "t-overlay",
          props: {
            show: Boolean,
            customStyle: String,
            duration: { type: null, default: 300 },
            zIndex: { type: Number, default: 1 },
          },
          computed: {
            styles() {
              return {
                root:
                  "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background-color: rgba(0, 0, 0, 0.7);\n          z-index: " +
                  this.zIndex +
                  ";\n          " +
                  this.customStyle +
                  "\n        ",
              };
            },
          },
          methods: {
            onClick(e) {
              this.$emit("click", e, { bubbles: !0, composed: !0 });
            },
          },
          ud: !0,
        },
        r = n("9ZMt");
      t.default = r.default.component(o);
    },
  })
);
