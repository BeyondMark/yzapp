"use strict";
var r = require("~/r");
r(
  "Uwpd",
  Object.assign({}, require("~/v.js").modules, {
    Uwpd: function (t, e, r) {
      r.r(e);
      var s = r("+66q"),
        i = {
          name: "LimitedSeckillPop",
          props: { currentActivity: Object },
          data: () => ({ showPop: !0 }),
          computed: {
            stockNum() {
              var { spuStock: t = {} } = this.currentActivity || {};
              return t.stockNum;
            },
            show() {
              var { type: t } = this.currentActivity || {};
              return t === s.a.LIMITED_SECKILL && this.stockNum && this.showPop;
            },
          },
          created() {
            setTimeout(() => {
              this.showPop = !1;
            }, 5e3);
          },
          ud: !0,
        },
        o = r("9ZMt");
      e.default = o.default.component(i);
    },
  })
);
