"use strict";
var r = require("~/r");
r(
  "cbYr",
  Object.assign({}, require("~/v.js").modules, {
    cbYr: function (e, t, r) {
      r.r(t);
      var i = {
          props: { name: String, itemKey: String, selectedKey: String },
          computed: {
            choosed() {
              return this.selectedKey === this.itemKey;
            },
          },
          methods: {
            onSelect() {
              this.$emit("select", { key: this.itemKey, name: this.name });
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
