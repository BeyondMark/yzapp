"use strict";
var r = require("~/r");
r(
  "THO/",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "THO/": function (e, t, s) {
        s.r(t);
        var a = s("5P7O"),
          n = s("SEvj"),
          r = {
            props: {
              channel: { type: Object, required: !0 },
              instalment: { type: Object, required: !1, default: void 0 },
            },
            data: () => ({
              classnames: {
                selected: "" + Object(a.a)("selected-cell-selected"),
              },
            }),
            computed: {
              displayName() {
                return (
                  (n.e[this.channel.payChannel] ||
                    this.channel.payChannelName) +
                  (this.instalment ? "(" + this.instalment.num + "期)" : "")
                );
              },
            },
            ud: !0,
          },
          l = s("9ZMt");
        t.default = l.default.component(r);
      },
    }
  )
);
