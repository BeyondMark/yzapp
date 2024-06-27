"use strict";
var r = require("~/r");
r(
  "KAYF",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    KAYF: function (r, t, e) {
      e.r(t);
      var a = e("EqB2"),
        i = e("TOEM"),
        n = {
          mixins: [Object(a.a)({ optDesc: i.a })],
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
            btnWidth() {
              var { btnName: r } = this.opt;
              return r.length > 2 ? "88px" : "64px";
            },
          },
          ud: !0,
        },
        d = e("9ZMt");
      t.default = d.default.component(n);
    },
  })
);
