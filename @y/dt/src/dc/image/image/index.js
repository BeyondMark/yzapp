"use strict";
var r = require("~/r");
r(
  "INf6",
  Object.assign({}, require("~/v.js").modules, {
    INf6: function (e, t, r) {
      r.r(t);
      var a = {
          props: {
            src: { type: String, default: "" },
            style: { type: String, default: "" },
            mode: { type: String, default: "" },
            minImg: { type: String, default: "" },
            shadow: { type: Boolean, default: !1 },
          },
          data: () => ({ hideMin: !1 }),
          created() {},
          methods: {
            minImageLoad() {
              this.$emit("load");
            },
            onImageLoadError(e) {
              this.$emit("error", e);
            },
            onMinImageLoadError() {
              this.hideMin = !0;
            },
            maxImageLoad() {
              (this.hideMin = !0), this.$emit("load");
            },
          },
          ud: !0,
        },
        i = r("9ZMt");
      t.default = i.default.component(a);
    },
  })
);
