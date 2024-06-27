"use strict";
var r = require("~/r");
r(
  "Fh4X",
  Object.assign({}, require("~/v.js").modules, {
    Fh4X: function (e, t, r) {
      r.r(t);
      var o = r("YeA1"),
        n = {
          data: () => ({ themeColors: {}, points: {}, pointsName: "" }),
          computed: {
            point() {
              var { points: e } = this;
              return e.externalPoint || e.userPoints;
            },
            themeStyle() {
              return "--theme-general:" + this.themeColors.general;
            },
          },
          created() {
            Object(o.b)(this, ["points", "pointsName", "themeColors"]);
          },
          methods: {
            onBack() {
              this.$emit("onConfirm");
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(n);
    },
  })
);
