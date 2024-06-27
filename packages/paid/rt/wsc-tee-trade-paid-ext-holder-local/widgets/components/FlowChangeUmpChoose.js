"use strict";
var r = require("~/r");
r(
  "bLVY",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      bLVY: function (e, r, a) {
        a.r(r);
        var t = a("KozD"),
          o = {
            name: "flow-change-ump-choose",
            props: { originData: { type: Array, default: () => [] } },
            data: () => ({ adType: t.a }),
            created() {
              (this.originData || []).forEach((e, r) => {
                this.logger(e, r, "view");
              });
            },
            methods: {
              logger(e, r, a) {
                this.$emit("onLogger", {
                  data: e,
                  type: t.a.choose,
                  eventType: a,
                  index: r,
                });
              },
              handleClick(e, r) {
                this.logger(e, r, "click");
              },
            },
            ud: !0,
          },
          i = a("9ZMt");
        r.default = i.default.component(o);
      },
    }
  )
);
