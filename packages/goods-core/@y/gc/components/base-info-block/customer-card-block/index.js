"use strict";
var r = require("~/r");
r(
  "F0RY",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      F0RY: function (e, t, i) {
        i.r(t);
        var r = i("9ZMt"),
          s = i("Ew4R"),
          a = i("Ysif"),
          o = i("Nvad"),
          u = {
            name: "benefit-card",
            mixins: [s.a, a.a],
            props: { opt: { type: Object, default: () => ({}) } },
            computed: {
              mainText() {
                return Object(o.b)(this.opt.mainText);
              },
            },
            watch: {
              "opt.show": {
                handler(e) {
                  e && this[this.opt.type + "LogView"]();
                },
                deep: !0,
              },
            },
            methods: {
              reload() {
                r.default.$native.startPullDownRefresh();
              },
              handleClick(e) {
                this[this.opt.type + "Click"](e, this.opt);
              },
            },
            ud: !0,
          };
        t.default = r.default.component(u);
      },
    }
  )
);
