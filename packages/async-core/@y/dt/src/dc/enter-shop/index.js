"use strict";
var r = require("~/r");
r(
  "rp8m",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      rp8m: function (e, r, t) {
        t.r(r);
        var i = t("EqB2"),
          s = t("oJ0g"),
          u = {
            mixins: [Object(i.a)({ optDesc: s.a })],
            methods: {
              handleClick() {
                var { link: e } = this.opt;
                this.$emit("jumpToLink", e);
              },
            },
            ud: !0,
          },
          o = t("9ZMt");
        r.default = o.default.component(u);
      },
    }
  )
);
