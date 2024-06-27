"use strict";
var r = require("~/r");
r(
  "DMOR",
  Object.assign({}, require("~/v.js").modules, {
    DMOR: function (e, t, r) {
      r.r(t);
      var s = r("EqB2"),
        i = r("/XVY"),
        o = Object(i.a)({
          percent: { default: 0 },
          infoAlign: { default: "" },
          infoList: { default: [] },
          showProgress: { default: !0 },
        }),
        n = {
          mixins: [Object(s.a)({ optDesc: o })],
          computed: {
            infoList() {
              var { showProgress: e, infoList: t } = this.opt;
              return 1 !== t.length || e
                ? (2 !== t.length || e || t.pop(), t)
                : [];
            },
          },
          ud: !0,
        },
        u = r("9ZMt");
      t.default = u.default.component(n);
    },
  })
);
