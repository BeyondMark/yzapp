"use strict";
var r = require("~/r");
r(
  "mWKu",
  Object.assign({}, require("~/v.js").modules, {
    mWKu: function (e, t, o) {
      o.r(t);
      var s = {
          props: { benefitDesc: Object },
          data: () => ({ showPop: !1 }),
          methods: {
            togglePop() {
              this.showPop = !this.showPop;
            },
          },
          ud: !0,
        },
        r = o("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
