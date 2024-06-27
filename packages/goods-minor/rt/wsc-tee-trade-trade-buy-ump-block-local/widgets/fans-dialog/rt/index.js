"use strict";
var r = require("~/r");
r(
  "Z+I6",
  Object.assign({}, require("~/v.js").modules, {
    "Z+I6": function (e, t, r) {
      r.r(t);
      var s = r("YeA1"),
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
            Object(s.b)(this, ["fansBenefit", "themeColors"]);
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(o);
    },
  })
);
