"use strict";
var r = require("~/r");
r(
  "lFJ2",
  Object.assign({}, require("~/v.js").modules, {
    lFJ2: function (t, e, i) {
      i.r(e);
      var o = {
          name: "IconOption",
          props: { option: { type: Object, default: {} } },
          methods: {
            handleOptionClick() {
              this.$emit("iconClick", this.option);
            },
          },
          ud: !0,
        },
        n = i("9ZMt");
      e.default = n.default.component(o);
    },
  })
);
