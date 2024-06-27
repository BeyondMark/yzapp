"use strict";
var r = require("~/r");
r(
  "+wrX",
  Object.assign({}, require("~/v.js").modules, {
    "+wrX": function (e, r, t) {
      t.r(r);
      var i = {
          props: {
            show: { type: Boolean, required: !0 },
            height: String,
            themeColor: { type: String, required: !0 },
            selected: { type: Object, required: !0 },
            channels: { type: Array, required: !0 },
          },
          computed: {
            customStyle() {
              return this.height ? "height: " + this.height : "";
            },
          },
          methods: {
            onChange() {
              for (
                var e = arguments.length, r = new Array(e), t = 0;
                t < e;
                t++
              )
                r[t] = arguments[t];
              this.$emit("change", ...r);
            },
          },
          ud: !0,
        },
        h = t("9ZMt");
      r.default = h.default.component(i);
    },
  })
);
