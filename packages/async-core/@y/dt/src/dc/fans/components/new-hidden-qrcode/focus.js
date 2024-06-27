"use strict";
var r = require("~/r");
r(
  "G3Ra",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    G3Ra: function (r, t, e) {
      e.r(t);
      var a = e("EqB2"),
        o = e("TOEM"),
        u = e("QlcU"),
        i = {
          mixins: [Object(a.a)({ optDesc: o.a })],
          data: () => ({}),
          computed: {
            containerStyle() {
              var { bgColor: r, pagePadding: t } = this.opt;
              return "background:" + r + "; padding:6px " + t + "px";
            },
            cardStyle() {
              var { cardBg: r, isFillet: t } = this.opt;
              return (
                "background:" +
                r +
                ";border-radius:" +
                (1 == +t ? "8px" : "0px")
              );
            },
            isCustom() {
              var { logoType: r } = this.opt;
              return +r === u.c.custom;
            },
          },
          ud: !0,
        },
        s = e("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
