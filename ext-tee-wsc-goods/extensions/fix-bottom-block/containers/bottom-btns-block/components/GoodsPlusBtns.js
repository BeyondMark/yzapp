"use strict";
var r = require("~/r");
r(
  "8o9A",
  Object.assign({}, require("~/v.js").modules, {
    "8o9A": function (t, s, e) {
      e.r(s);
      var i = {
          name: "goods-plus-btns",
          state: ["displayPop"],
          props: { buttons: Array, show: Boolean },
          methods: {
            maskClick() {
              this.$emit("hide");
            },
            minBtnClick(t) {
              this.$emit("btn-click", t);
            },
          },
          ud: !0,
        },
        o = e("9ZMt");
      s.default = o.default.component(i);
    },
  })
);
