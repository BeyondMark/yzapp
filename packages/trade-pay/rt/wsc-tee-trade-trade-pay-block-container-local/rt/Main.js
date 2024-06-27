"use strict";
var r = require("~/r");
r(
  "pP9G",
  Object.assign({}, require("~/v.js").modules, {
    pP9G: function (e, t, r) {
      r.r(t);
      var a = r("YeA1"),
        i = {
          data: () => ({ marginBottom: 10, themeVars: "" }),
          mounted() {
            if ((Object(a.b)(this, ["themeVars"]), this.createSelectorQuery)) {
              var e = this.createSelectorQuery().select(".block-content"),
                t = () => {
                  e.boundingClientRect((e) => {
                    this.marginBottom = e.height ? 10 : 0;
                  }).exec();
                };
              t();
              var r = setInterval(t, 500);
              setTimeout(() => {
                clearInterval(r);
              }, 2500);
            } else this.marginBottom = 10;
          },
          ud: !0,
        },
        o = r("9ZMt");
      t.default = o.default.component(i);
    },
  })
);
