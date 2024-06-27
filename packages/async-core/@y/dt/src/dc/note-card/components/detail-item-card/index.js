"use strict";
var r = require("~/r");
r(
  "acxG",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      acxG: function (t, e, i) {
        i.r(e);
        var r = i("sf8/"),
          a = i("R7Zb"),
          s = {
            mixins: [Object(a.a)({ optDesc: r.a })],
            computed: {
              infoData() {
                return this.opt.infoData;
              },
            },
            methods: {
              itemClick() {
                for (
                  var t = arguments.length, e = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  e[i] = arguments[i];
                if (e && e.length) {
                  var {
                    currentTarget: {
                      dataset: { alias: r },
                    },
                  } = e[0];
                  r
                    ? this.$emit("item-click", e[0])
                    : this.$emit("item-click", e[e.length - 1]);
                }
              },
            },
            ud: !0,
          },
          c = i("9ZMt");
        e.default = c.default.component(s);
      },
    }
  )
);
