"use strict";
var r = require("~/r");
r(
  "1ozL",
  Object.assign({}, require("~/v.js").modules, {
    "1ozL": function (e, t, o) {
      o.r(t);
      var r = o("YeA1"),
        u = {
          name: "ump-tips",
          props: {
            opt: Object,
            baseInfo: Object,
            priceInfo: Object,
            hideGroupBargin: Boolean,
            cloudConfig: { type: Object, default: () => ({}) },
          },
          data: () => ({ userInfo: {} }),
          created() {
            Object(r.b)(this, ["userInfo"]);
          },
          methods: {
            umpClick() {
              this.$emit("ump-click");
            },
          },
          ud: !0,
        },
        c = o("9ZMt");
      t.default = c.default.component(u);
    },
  })
);
