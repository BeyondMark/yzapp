"use strict";
var r = require("~/r");
r(
  "56lY",
  Object.assign({}, require("~/v.js").modules, {
    "56lY": function (t, e, r) {
      r.r(e);
      var i = r("Fcif"),
        s = r("VmHG"),
        c = r("YeA1"),
        o = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(i.a)(
                { themeColors: {} },
                Object(s.d)(this, ["activityValue"])
              )
            );
          },
          created() {
            Object(c.b)(this, ["themeColors"]);
          },
          methods: {
            onClick() {
              this.store.onActivityCellClick();
            },
          },
        },
        l = r("9ZMt");
      e.default = l.default.component(o);
    },
  })
);
