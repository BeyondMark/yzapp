"use strict";
var r = require("~/r");
r(
  "SpgZ",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      SpgZ: function (e, t, a) {
        a.r(t);
        var o = a("Fcif"),
          u = a("9ZMt"),
          i = a("ddKh"),
          r = {
            name: i.c,
            props: {
              show: { type: Boolean, value: !1 },
              detail: { type: Object, value: Object(o.a)({}, i.a) },
              time: { type: Number, value: 0 },
              formattedTime: { type: String, value: "" },
              liveIconData: {
                type: Object,
                default: () => ({ bottom: i.b, goaway: void 0 }),
              },
            },
            data: () => ({ bottom: i.b }),
            watch: {
              liveIconData(e) {
                (void 0 !== e.goaway && !1 !== e.goaway) ||
                  (this.bottom = u.default.style.useTpx(e.bottom));
              },
            },
            methods: {
              showPopup() {
                this.$emit("showPopup");
              },
            },
            ud: !0,
          };
        t.default = u.default.component(r);
      },
    }
  )
);
