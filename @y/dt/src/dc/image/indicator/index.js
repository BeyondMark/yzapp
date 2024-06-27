"use strict";
var r = require("~/r");
r(
  "SLfU",
  Object.assign({}, require("~/v.js").modules, {
    SLfU: function (r, e, t) {
      t.r(e);
      var i = {
          props: {
            imgs: Array,
            current: Number,
            zIndex: Number,
            type: Number,
            margin: Number,
            overlapHeight: Number,
          },
          computed: {
            style() {
              var {
                  type: r,
                  margin: e,
                  overlapHeight: t = 0,
                  zIndex: i,
                } = this,
                u = "--overlap-height: " + t + "px; z-index:" + i;
              return 2 === r || 1 === r ? u : "right: " + (e + 15) + "px; " + u;
            },
            cls() {
              return (
                "indicator-" + ({ 1: 1, 2: 2, 3: 3, 4: 4 }[this.type] || 1)
              );
            },
          },
          ud: !0,
        },
        u = t("9ZMt");
      e.default = u.default.component(i);
    },
  })
);
