"use strict";
var r = require("~/r");
r(
  "KfNe",
  Object.assign({}, require("~/v.js").modules, {
    KfNe: function (t, e, r) {
      r.r(e);
      var s = r("Fcif"),
        a = r("9ZMt"),
        i = r("VmHG"),
        c = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(s.a)(
                {},
                Object(i.d)(this, [
                  "pointsName",
                  "themeStyle",
                  "pointsDescription",
                ])
              )
            );
          },
          methods: {
            onBack() {
              a.default.navigateBack();
            },
          },
        };
      e.default = a.default.component(c);
    },
  })
);
