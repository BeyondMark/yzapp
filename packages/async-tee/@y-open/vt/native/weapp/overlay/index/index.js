"use strict";
var r = require("~/r");
r(
  "TRTa",
  Object.assign({}, require("~/v.js").modules, {
    TRTa: function (t, e, n) {
      n.r(e);
      n("9ZMt").default.component({
        name: "t-overlay",
        props: {
          show: Boolean,
          customStyle: String,
          duration: { type: null, default: 300 },
          zIndex: { type: Number, default: 1 },
        },
        computed: {
          styles: function () {
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
          onClick: function (t) {
            this.$emit("click", t, { bubbles: !0, composed: !0 });
          },
        },
        ud: !0,
      });
    },
  })
);
