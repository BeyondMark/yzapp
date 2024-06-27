"use strict";
var r = require("~/r");
r(
  "C8Xd",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    C8Xd: function (t, e, r) {
      r.r(e);
      var i = r("EqB2"),
        a = r("/XVY"),
        o = Object(a.a)({
          list: { default: () => [] },
          textAlign: { default: "left" },
          marginBottom: { default: "" },
          marginTop: { default: "6px" },
        }),
        n = r("2Dtx"),
        u = {
          mixins: [Object(i.a)({ optDesc: o })],
          computed: {
            style() {
              var {
                textAlign: t = "left",
                marginBottom: e = "",
                marginTop: r = "6px",
                height: i = "16px",
              } = this.opt;
              return Object(n.a)({
                "justify-content": t,
                "margin-bottom": e,
                "margin-top": r,
                height: i,
              });
            },
          },
          ud: !0,
        },
        l = r("9ZMt");
      e.default = l.default.component(u);
    },
  })
);
