"use strict";
var r = require("~/r");
r(
  "KHEC",
  Object.assign({}, require("~/v.js").modules, {
    KHEC: function (e, t, r) {
      r.r(t);
      var o = {
          props: {
            normalTextList: { default: () => [], type: Array },
            boldTextList: { default: () => [], type: Array },
            themeColor: String,
          },
          computed: {
            themeBackgroundStyle() {
              return "background-color: " + (this.themeColor || "#ee0d27");
            },
            themeColorStyle() {
              return "color: " + (this.themeColor || "#ee0d27");
            },
          },
          methods: {
            click() {
              this.$emit("click");
            },
          },
          ud: !0,
        },
        l = r("9ZMt");
      t.default = l.default.component(o);
    },
  })
);
