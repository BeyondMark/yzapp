"use strict";
var r = require("~/r");
r(
  "8DQO",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8DQO": function (e, t, r) {
      r.r(t);
      var s = r("KrsW"),
        a = r("9ZMt"),
        u = r("EqB2"),
        i = r("rtA3"),
        n = r("2Dtx"),
        { useTpx: l } = a.default.style,
        c = {
          mixins: [
            Object(u.a)({ optDesc: i.a }),
            s.b.externalClassesMixin(["custom-class"]),
          ],
          computed: {
            layoutStyle() {
              var { layoutMargin: e, itemMargin: t } = this.opt,
                r = l(-t / 2),
                s = l(e);
              return Object(n.a)({ padding: "0 " + s, margin: "0 " + r });
            },
          },
          ud: !0,
        };
      t.default = a.default.component(c);
    },
  })
);
