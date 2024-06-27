"use strict";
var r = require("~/r");
r(
  "wRq2",
  Object.assign({}, require("~/v.js").modules, {
    wRq2: function (e, t, r) {
      r.r(t);
      var a = r("EqB2"),
        i = r("/XVY"),
        o = Object(i.a)({
          iconType: { default: "arrow-down" },
          text: { default: "点击展开更多" },
        }),
        d = {
          mixins: [Object(a.a)({ optDesc: o })],
          methods: {
            handleClick() {
              this.$emit("load-more");
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(d);
    },
  })
);
