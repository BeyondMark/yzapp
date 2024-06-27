"use strict";
var r = require("~/r");
r(
  "Rsy7",
  Object.assign({}, require("~/v.js").modules, {
    Rsy7: function (e, t, s) {
      s.r(t);
      var r = s("YeA1"),
        o = {
          name: "fans-dialog",
          props: { show: Boolean, title: String },
          data: () => ({ fansBenefit: { value: 0 }, themeColors: {} }),
          computed: {
            price() {
              var { value: e } = this.fansBenefit;
              return (e / 100).toFixed(2);
            },
          },
          created() {
            Object(r.b)(this, ["fansBenefit", "themeColors"]);
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        a = s("9ZMt");
      t.default = a.default.component(o);
    },
  })
);
