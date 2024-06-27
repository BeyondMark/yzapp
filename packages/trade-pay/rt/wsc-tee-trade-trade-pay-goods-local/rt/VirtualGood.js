"use strict";
var r = require("~/r");
r(
  "PlVt",
  Object.assign({}, require("~/v.js").modules, {
    PlVt: function (e, t, r) {
      r.r(t);
      var o = r("YeA1"),
        s = {
          props: { good: { type: Object, default: () => ({}) } },
          data: () => ({ themeColors: {} }),
          computed: {
            themeStyle() {
              var { themeColors: e } = this;
              return (
                "--card-price-color: " +
                e.general +
                ";--tag-danger-color:" +
                e.general +
                "; "
              );
            },
          },
          created() {
            Object(o.b)(this, ["themeColors"]);
          },
          methods: {
            showGoodsMessage() {
              this.$emit("message");
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
