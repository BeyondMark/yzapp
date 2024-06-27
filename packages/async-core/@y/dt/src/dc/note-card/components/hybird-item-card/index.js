"use strict";
var r = require("~/r");
r(
  "yaaL",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      yaaL: function (e, t, r) {
        r.r(t);
        var a = r("o0al"),
          i = r("R7Zb"),
          s = {
            mixins: [Object(i.a)({ optDesc: a.a })],
            methods: {
              itemClick() {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                if (t && t.length) {
                  var {
                    currentTarget: {
                      dataset: { alias: a },
                    },
                  } = t[0];
                  a
                    ? this.$emit("item-click", t[0])
                    : this.$emit("item-click", t[t.length - 1]);
                }
              },
            },
            ud: !0,
          },
          c = r("9ZMt");
        t.default = c.default.component(s);
      },
    }
  )
);
