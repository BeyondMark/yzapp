"use strict";
var r = require("~/r");
r(
  "j7eI",
  Object.assign({}, require("~/v.js").modules, {
    j7eI: function (e, a, r) {
      r.r(a);
      var d = r("/XVY"),
        t = Object(d.a)({
          text: { default: "" },
          color: { default: "#646566" },
          background: { default: "#fff8e9" },
          speed: { default: 50 },
          scrollable: { default: !0 },
          leftIcon: { default: "volume" },
          cardBgColor: { default: "#fff8e9" },
          cardBorderRadius: { default: 0 },
          pageMargin: { default: 0 },
          cardVerticalPadding: { default: 0 },
        }),
        o = r("EqB2"),
        l = {
          mixins: [Object(o.a)({ optDesc: t })],
          props: { themeColors: { type: Object, default: () => {} } },
          computed: {
            rootStyle() {
              var {
                cardBorderRadius: e,
                cardBgColor: a,
                pageMargin: r,
                cardVerticalPadding: d,
              } = this.opt;
              return (
                "\n        --cardBorderRadius: " +
                e +
                "px;\n        padding: " +
                (d ? 6 : 0) +
                "px " +
                r +
                "px;\n        background-color: " +
                a +
                ";\n      "
              );
            },
          },
          ud: !0,
        },
        u = r("9ZMt");
      a.default = u.default.component(l);
    },
  })
);
