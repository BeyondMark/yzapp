"use strict";
var r = require("~/r");
r(
  "Dmgm",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Dmgm: function (e, t, s) {
      s.r(t);
      var r = s("rqVN");
      Object(r.b)({
        properties: {
          startDate: { type: Number, observer: "checkShowStartTime" },
        },
        data: { countDownTime: 0, showStartTime: !1 },
        methods: {
          timeChange(e) {
            var { detail: t } = e;
            t.hours < 10 && (t.hours = "0" + t.hours),
              t.minutes < 10 && (t.minutes = "0" + t.minutes),
              t.seconds < 10 && (t.seconds = "0" + t.seconds),
              this.setYZData({ timeData: t }, { immediate: !0 });
          },
          checkShowStartTime(e) {
            var t = e - +new Date();
            this.setYZData({ showStartTime: t > 0, countDownTime: t });
          },
        },
      });
    },
  })
);
