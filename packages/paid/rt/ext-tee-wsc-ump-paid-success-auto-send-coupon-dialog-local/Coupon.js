"use strict";
var r = require("~/r");
r(
  "mojY",
  Object.assign({}, require("~/v.js").modules, {
    mojY: function (e, t, o) {
      o.r(t);
      var r = o("q29p"),
        i = o.n(r),
        n = {
          name: "Coupon",
          props: {
            isReceived: { type: Boolean, default: !1 },
            themeColors: Object,
            info: {
              type: Object,
              default: () => ({
                startAt: "0",
                endAt: "0",
                valuesDesc: "",
                unitDesc: "",
                thresholdCopywriting: "",
                receiveStatus: 0,
                expireDate: 0,
                validStartTime: 0,
              }),
            },
          },
          data: () => ({ timeData: {}, downTime: 0 }),
          computed: {
            downTimeStr() {
              var e,
                t,
                o,
                r,
                { days: n, hours: a, minutes: m, seconds: s } = this.timeData;
              if (n > 1)
                return (
                  i()(
                    (null == (e = this.info) ? void 0 : e.validStartTime) ||
                      (null == (t = this.info) ? void 0 : t.startAt),
                    "YYYY.MM.DD"
                  ) +
                  "-" +
                  i()(
                    (null == (o = this.info) ? void 0 : o.expireDate) ||
                      (null == (r = this.info) ? void 0 : r.endAt),
                    "YYYY.MM.DD"
                  )
                );
              var u = [
                n + "天",
                this.timeFormat(a) +
                  ":" +
                  this.timeFormat(m) +
                  ":" +
                  this.timeFormat(s),
              ];
              return 0 === n && u.shift(), "距到期仅剩" + u.join("");
            },
            themeBackground5Style() {
              return (
                "background: " +
                (this.themeColors["ump-coupon-bg"] || "#F2F2FF") +
                ";"
              );
            },
            themeBackground10Style() {
              return (
                "background: " +
                (this.themeColors["ump-coupon-bg"] || "#F2F2FF") +
                ";"
              );
            },
            themeBorder10Style() {
              return (
                "border-color: " +
                (this.themeColors["ump-border"] || "#C9C9FF") +
                ";"
              );
            },
            themeBorder50Style() {
              return (
                "border-color: " +
                (this.themeColors["ump-border"] || "#C9C9FF") +
                ";"
              );
            },
            themeColorStyle() {
              return (
                "color: " + (this.themeColors["ump-icon"] || "#323233") + ";"
              );
            },
            themeColor50Style() {
              return (
                "color: " + (this.themeColors["ump-icon"] || "#323233") + ";"
              );
            },
          },
          watch: {
            info: {
              immediate: !0,
              handler(e) {
                var t;
                this.downTime =
                  (null != (t = e.expireDate) ? t : Date.now()) - Date.now();
              },
            },
          },
          methods: {
            timeFormat: (e) => (e < 10 ? "0" + e : e),
            onChange(e) {
              this.timeData = e;
            },
          },
          ud: !0,
        },
        a = o("9ZMt");
      t.default = a.default.component(n);
    },
  })
);
