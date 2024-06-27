"use strict";
var r = require("~/r");
r(
  "mNyG",
  Object.assign({}, require("~/v.js").modules, {
    mNyG: function (e, t, r) {
      r.r(t);
      var o = r("YeA1"),
        a = {
          data: () => ({ marginBottom: 0 }),
          mounted() {
            var e;
            if (this.createSelectorQuery) {
              var t = this.createSelectorQuery().select(".block-content");
              (e = () => {
                t.boundingClientRect((e) => {
                  this.marginBottom = e.height ? 10 : 0;
                }).exec();
              })();
              var r = setInterval(e, 1500);
              setTimeout(() => {
                clearInterval(r);
              }, 3e3);
            } else this.marginBottom = 10;
            Object(o.d)(this, {
              afterBlockToggle: () => {
                setTimeout(() => {
                  e && e();
                }, 1e3);
              },
            });
          },
          ud: !0,
        },
        i = r("9ZMt");
      t.default = i.default.component(a);
    },
  })
);
