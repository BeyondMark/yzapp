"use strict";
var r = require("~/r");
r(
  "taUb",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      taUb: function (e, t, a) {
        a.r(t);
        var r = a("rqVN"),
          s = a("AD9L");
        Object(r.b)({
          properties: {
            canJumpPrevious: { type: Boolean, value: !1 },
            canJumpNext: { type: Boolean, value: !1 },
            signDates: { type: Array, value: [], observer: "setMonthTable" },
            year: {
              type: Number,
              value: new Date(Date.now()).getFullYear(),
              observer: "setMonthTable",
            },
            month: {
              type: Number,
              value: new Date(Date.now()).getMonth() + 1,
              observer: "setMonthTable",
            },
            themeColor: { type: String },
            canReminderOpen: { type: Boolean },
          },
          data: {
            weeksMap: ["日", "一", "二", "三", "四", "五", "六"],
            monthTable: [],
          },
          methods: {
            setMonthTable() {
              var e = this.getWholeMonthDate(),
                t = this.processDatesToWeek(e);
              this.setYZData({ monthTable: t });
            },
            getWholeMonthDate() {
              for (
                var { year: e, month: t } = this.data,
                  a = s.a.calcPreviousMonth(e, t),
                  r = s.a.calcDateAmount(e, t),
                  o = [],
                  n = a + r + s.a.calcLastMonth(e, t, r),
                  i = 1;
                i <= n;
                i++
              ) {
                var h = { value: 0, hasSign: !1 };
                i > a &&
                  i <= a + r &&
                  ((h.value = i - a),
                  (h.hasSign = this.isSignDate(e, t, h.value))),
                  o.push(h);
              }
              return o;
            },
            isSignDate(e, t, a) {
              var r = JSON.stringify(this.data.signDates),
                s = JSON.stringify({ year: e, month: t, date: a });
              return -1 !== r.indexOf(s);
            },
            processDatesToWeek(e) {
              for (var t = [], a = 0; a < e.length / 7; a++) {
                var r = e.slice(7 * a, 7 * (a + 1));
                t.push(r);
              }
              return t;
            },
            showPreviousMonth() {
              this.triggerEvent("showAdjacent", -1);
            },
            showNextMonth() {
              this.triggerEvent("showAdjacent", 1);
            },
            toggleSubscribeMask(e) {
              this.triggerEvent("toggle-subscribe-mask", e.detail);
            },
          },
        });
      },
    }
  )
);
