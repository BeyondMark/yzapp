"use strict";
var r = require("~/r");
r(
  "5k6B",
  Object.assign({}, require("~/v.js").modules, {
    "5k6B": function (e, t, l) {
      l.r(t);
      var s = {
          props: {
            show: Boolean,
            value: String,
            isLink: Boolean,
            isSelected: Boolean,
          },
          computed: {
            valueClass() {
              var e = "self-fetch-time__value";
              return this.isSelected && (e += " self-fetch-time__selected"), e;
            },
          },
          methods: {
            onClickTime() {
              this.$emit("cell-click");
            },
          },
          ud: !0,
        },
        i = l("9ZMt");
      t.default = i.default.component(s);
    },
  })
);
