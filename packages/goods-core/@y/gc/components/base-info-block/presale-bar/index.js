"use strict";
var r = require("~/r");
r(
  "ApUY",
  Object.assign({}, require("~/v.js").modules, {
    ApUY: function (e, t, r) {
      r.r(t);
      var u = {
          props: {
            opt: { type: Object, default: () => ({}) },
            themeTag: { type: Object, default: () => ({}) },
          },
          computed: {
            timeStr() {
              var e,
                { shipTimeStr: t = "", endTimeStr: r = "" } =
                  (null == (e = this.opt) ? void 0 : e.presale) || {};
              return "" + r + (r ? "，" : "") + t;
            },
          },
          ud: !0,
        },
        p = r("9ZMt");
      t.default = p.default.component(u);
    },
  })
);
