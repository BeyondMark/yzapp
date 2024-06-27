"use strict";
var r = require("~/r");
r(
  "YenP",
  Object.assign({}, require("~/v.js").modules, {
    YenP: function (e, t, s) {
      s.r(t);
      var i = {
          props: {
            desc: { type: Object, default: () => ({}) },
            themeColors: { type: Object, default: () => ({}) },
          },
          data: () => ({ timeData: {} }),
          computed: {
            text() {
              var e,
                t = null == (e = this.desc) ? void 0 : e.template;
              if (!t) return [];
              return (t = t.split(/(\${field1}|\${field2}|\${expireTime})/g));
            },
            remianingSeconds() {
              var e;
              if (null != (e = this.desc) && e.expireTime)
                return Math.round(this.desc.expireTime - Date.now());
            },
          },
          methods: {
            onChangeTime(e) {
              var { days: t, hours: s, minutes: i, seconds: r } = e;
              (this.timeData = {
                days: t,
                hours: s >= 10 ? s : "0" + s,
                minutes: i >= 10 ? i : "0" + i,
                seconds: r >= 10 ? r : "0" + r,
              }),
                0 === s && 0 === i && 0 === r && this.$emit("close");
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      t.default = r.default.component(i);
    },
  })
);
