"use strict";
var r = require("~/r");
r(
  "PQWA",
  Object.assign({}, require("~/v.js").modules, {
    PQWA: function (t, e, o) {
      o.r(e);
      var i = {
          props: {
            show: { type: Boolean, default: !1 },
            title: { type: String, default: "" },
            whiteSpace: { type: String, default: "pre-line" },
            buttonText: { type: String, default: "我知道了" },
            btnTextColor: { type: String, default: "" },
            buttonColor: { type: String, default: "#ee0a24" },
            themeColors: { type: Object, default: () => ({}) },
          },
          data: () => ({ initialShow: !1 }),
          computed: {
            btnTextStyle() {
              return "color: " + (this.btnTextColor || "#fff");
            },
          },
          watch: {
            show(t) {
              t && !this.initialShow && (this.initialShow = !0);
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        r = o("9ZMt");
      e.default = r.default.component(i);
    },
  })
);
