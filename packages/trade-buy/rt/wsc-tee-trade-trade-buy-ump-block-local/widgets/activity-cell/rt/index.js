"use strict";
var r = require("~/r");
r(
  "L0Yx",
  Object.assign({}, require("~/v.js").modules, {
    L0Yx: function (t, e, r) {
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
        a = r("9ZMt");
      e.default = a.default.component(o);
    },
  })
);
