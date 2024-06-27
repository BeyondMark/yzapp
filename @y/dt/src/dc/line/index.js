"use strict";
var r = require("~/r");
r(
  "b0no",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    b0no: function (e, t, r) {
      r.r(t);
      var a = r("9ZMt"),
        i = r("/XVY"),
        d = Object(i.a)({
          type: { default: "white" },
          height: { default: 30 },
          lineType: { default: "solid" },
          color: { default: "#e5e5e5" },
          hasPadding: { default: !1 },
        }),
        u = r("EqB2"),
        l = r("2Dtx"),
        { useTpx: o } = a.default.style,
        s = {
          mixins: [Object(u.a)({ optDesc: d })],
          computed: {
            borderStyle() {
              var { lineType: e, color: t } = this.opt;
              if (e) return Object(l.a)({ "border-top": "1px " + e + " " + t });
            },
            lineStyle() {
              var { type: e, height: t, hasPadding: r } = this.opt;
              return "white" === e
                ? Object(l.a)({ height: o(t) })
                : Object(l.a)({ padding: "0 " + (r ? o(15) : 0) });
            },
          },
          ud: !0,
        };
      t.default = a.default.component(s);
    },
  })
);
