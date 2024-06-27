"use strict";
var r = require("~/r");
r(
  "YSD+",
  Object.assign({}, require("~/v.js").modules, {
    "YSD+": function (t, e, r) {
      r.r(e);
      var o = {
          props: {
            loading: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            color: { type: String, default: "" },
            textColor: String,
            large: Boolean,
          },
          computed: {
            textStyle() {
              return "color: " + (this.textColor || "#fff");
            },
            customCls() {
              var t = "submit-bar__button";
              return this.large ? t + " submit-bar__button-l" : t;
            },
          },
          methods: {
            onClick() {
              this.$emit("submit-click");
            },
          },
          ud: !0,
        },
        l = r("9ZMt");
      e.default = l.default.component(o);
    },
  })
);
