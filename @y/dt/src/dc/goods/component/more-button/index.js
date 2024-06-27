"use strict";
var r = require("~/r");
r(
  "xTZM",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    xTZM: function (t, e, i) {
      i.r(e);
      var r = i("Fcif"),
        a = i("9ZMt"),
        u = i("EqB2"),
        c = i("/XVY"),
        s = Object(c.a)({
          loading: { default: !1 },
          isSwipe: { default: !1 },
          text: { default: "" },
          corner: { default: "rect" },
          margin: { default: 0 },
        }),
        l = i("2Dtx"),
        { useTvw: n } = a.default.style,
        m = {
          mixins: [Object(u.a)({ optDesc: s })],
          computed: {
            wrapStyle() {
              var { margin: t, isSwipe: e } = this.opt;
              return e
                ? Object(l.a)(
                    Object(r.a)(
                      { "margin-right": 2 * t + "px" },
                      e ? { width: n(300) } : {}
                    )
                  )
                : Object(l.a)({
                    "margin-left": t + "px",
                    "margin-right": t + "px",
                  });
            },
            itemStyle() {
              return Object(l.a)({
                top: this.opt.margin + "px",
                bottom: this.opt.margin + "px;",
              });
            },
          },
          methods: {
            handleClick() {
              this.$emit("more-click");
            },
          },
          ud: !0,
        };
      e.default = a.default.component(m);
    },
  })
);
