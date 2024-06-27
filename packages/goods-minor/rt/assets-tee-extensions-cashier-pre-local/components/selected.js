"use strict";
var r = require("~/r");
r(
  "mhyd",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      mhyd: function (e, t, n) {
        n.r(t);
        var a = n("5P7O"),
          s = n("SEvj"),
          r = {
            props: {
              channel: { type: Object, required: !0 },
              instalment: { type: Object, required: !1, default: void 0 },
            },
            data: () => ({
              classnames: {
                selected: Object(a.a)("selected") + " " + Object(a.b)("center"),
              },
            }),
            computed: {
              displayName() {
                return (
                  (s.e[this.channel.payChannel] ||
                    this.channel.payChannelName) +
                  (this.instalment ? "（" + this.instalment.num + "期）" : "")
                );
              },
            },
            ud: !0,
          },
          c = n("9ZMt");
        t.default = c.default.component(r);
      },
    }
  )
);
