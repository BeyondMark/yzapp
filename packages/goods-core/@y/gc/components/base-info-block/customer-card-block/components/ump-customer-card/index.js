"use strict";
var r = require("~/r");
r(
  "MuKx",
  Object.assign({}, require("~/v.js").modules, {
    MuKx: function (t, e, r) {
      r.r(e);
      var a = {
          name: "ump-customer-card",
          props: { opt: { type: Object, default: () => ({}) } },
          data() {
            return { countdown: this.opt.endAt - Date.now(), timeData: {} };
          },
          methods: {
            onChange(t) {
              this.timeData = t;
            },
          },
          computed: {
            bgStyle() {
              var { themeType: t } = this.opt;
              return (
                "background-image: var(--theme-page-ump-activity-card-background,url('https://su.yzcdn.cn/limitDiscount/memberGuide/" +
                (t + 1) +
                ".png'))"
              );
            },
            countDownText() {
              var { days: t, hours: e, minutes: r, seconds: a } = this.timeData;
              return (
                t +
                "天" +
                e +
                ":" +
                (r < 10 ? "0" + r : r) +
                ":" +
                (a < 10 ? "0" + a : a)
              );
            },
          },
        },
        u = r("9ZMt");
      e.default = u.default.component(a);
    },
  })
);
