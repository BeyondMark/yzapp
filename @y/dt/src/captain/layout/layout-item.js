"use strict";
var r = require("~/r");
r(
  "YbHU",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    YbHU: function (t, e, r) {
      r.r(e);
      var i = r("9ZMt"),
        u = r("EqB2"),
        s = r("rtA3"),
        { useTpx: d, useTvw: a } = i.default.style,
        n = {
          mixins: [Object(u.a)({ optDesc: s.a })],
          props: { itemIndex: { type: Number, default: 0 } },
          computed: {
            wrapStyle() {
              var { itemWidth: t, type: e } = this.opt;
              if ("hybrid" === e)
                return this.itemIndex % 3 == 0 ? "width: 100%;" : "width: 50%;";
              if ("string" == typeof t && /tvw$/.test(t.trim())) {
                var r = +t.replace("tvw", "");
                return "width: " + a(r);
              }
              return "number" == typeof t ? "width: " + d(t) : void 0;
            },
            itemStyle() {
              var { itemMargin: t } = this.opt;
              return "margin: " + d(t / 2) + ";";
            },
          },
          ud: !0,
        };
      e.default = i.default.component(n);
    },
  })
);
