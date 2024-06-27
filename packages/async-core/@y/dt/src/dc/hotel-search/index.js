"use strict";
var r = require("~/r");
r(
  "W6AS",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      W6AS: function (e, t, r) {
        r.r(t);
        var a = r("R7Zb"),
          s = r("LrYe"),
          i = r("wElU"),
          u = {
            mixins: [Object(a.a)({ optDesc: i.a }), s.a],
            props: {
              pageShowKey: {
                type: String,
                default: "showcase-container:page-show",
              },
              kdtId: Number,
              alias: String,
              city: { type: String, default: "全国" },
              themeColors: {
                type: Object,
                default: () => ({
                  general: "#f44",
                  "vice-bg": "#f85",
                  "vice-text": "#fff",
                }),
              },
            },
            computed: {
              serachType() {
                var { serachType: e } = this.opt;
                return 1 == +e;
              },
            },
            ud: !0,
          },
          c = r("9ZMt");
        t.default = c.default.component(u);
      },
    }
  )
);
