"use strict";
var r = require("~/r");
r(
  "qGkK",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      qGkK: function (e, t, r) {
        r.r(t);
        var s = r("c9d9"),
          c = r("R7Zb"),
          i = {
            name: "ShowcaseChangeBtn",
            mixins: [Object(c.a)({ optDesc: s.a })],
            methods: {
              handleClick() {
                this.$emit("click");
              },
            },
            ud: !0,
          },
          a = r("9ZMt");
        t.default = a.default.component(i);
      },
    }
  )
);
