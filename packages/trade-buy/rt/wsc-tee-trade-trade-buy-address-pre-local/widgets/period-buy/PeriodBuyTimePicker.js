"use strict";
var r = require("~/r");
r(
  "WHb4",
  Object.assign({}, require("~/v.js").modules, {
    WHb4: function (e, t, n) {
      n.r(t);
      var r = n("ns2s"),
        a = {
          props: {
            show: Boolean,
            periodBuy: {
              type: Object,
              default: () => ({ chosenIndex: 0, options: [] }),
            },
            themeCss: { type: String, default: "" },
          },
          data: () => ({ initialShow: !1 }),
          computed: {
            dateList() {
              var { options: e = [], chosenIndex: t = 0 } = this.periodBuy;
              return [
                {
                  values: e.map((e) => this.formatWeekDate(e)),
                  defaultIndex: t,
                },
              ];
            },
          },
          watch: {
            show(e) {
              e && !this.initialShow && (this.initialShow = !0);
            },
          },
          methods: {
            selectDate(e) {
              var t = e.index[0];
              this.$emit("changeChosen", t), this.onClose();
            },
            onClose() {
              this.$emit("close");
            },
            formatWeekDate: (e) => (
              (e = new Date(e)),
              r.c.date(e, "yyyy年mm月dd日") + " （" + r.c.weekday(e) + "）"
            ),
          },
          ud: !0,
        },
        i = n("9ZMt");
      t.default = i.default.component(a);
    },
    ns2s: function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "c", function () {
          return l;
        });
      var r = n("q29p"),
        a = n.n(r);
      function i(e) {
        return (e < 10 ? "0" : "") + e;
      }
      var u = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
        o = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        s = function (e) {
          return Array.isArray(e)
            ? (e.forEach(function (e) {
                return (
                  Array.isArray(e.weekdays) ||
                    (e.switchs &&
                      (e.weekdays =
                        ((t = (t = e.switchs).split("")),
                        [
                          "周一",
                          "周二",
                          "周三",
                          "周四",
                          "周五",
                          "周六",
                          "周日",
                        ].filter(function (e, n) {
                          return "1" === t[n];
                        })))),
                  e
                );
                var t;
              }),
              e)
            : e;
        },
        c = {
          today: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Date.now(),
              t = new Date(e);
            return new Date(t.getFullYear(), t.getMonth(), t.getDate());
          },
          copy: function (e) {
            return new Date(e.getTime());
          },
          time: function (e) {
            return l.time(new Date(e));
          },
          resetTime: function (e) {
            return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e;
          },
          maximizeDate: function (e) {
            return e.setHours(23), e.setMinutes(59), e.setSeconds(59), e;
          },
          addTime: function (e, t) {
            var n = e.split(":"),
              r = +n[0],
              a = +n[1] + t;
            return (
              a >= 60 && ((r += (a / 60) | 0), (a %= 60)),
              "".concat(i(r), ":").concat(i(a))
            );
          },
          businessTime: function (e, t) {
            var n,
              r = t.timeBucket,
              a = void 0 === r ? [] : r,
              i = t.timeSpan,
              u = void 0 === i ? "" : i,
              o = l.weekday(e);
            return (
              s(a).forEach(function (e) {
                -1 !== e.weekdays.indexOf(o) &&
                  (n
                    ? "day" === u &&
                      (n = d.time(e.closeTime, n.closeTime) > 0 ? e : n)
                    : (n = e));
              }),
              n
            );
          },
          getBusinessTimesByTimeBucket: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              n = l.weekday(e),
              r = s(t);
            return r.filter(function (e) {
              return -1 !== e.weekdays.indexOf(n);
            });
          },
          plusDay: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return e.setDate(e.getDate() + t), e;
          },
          plusHour: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return e.setHours(e.getHours() + t), e;
          },
          plusMinute: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return e.setMinutes(e.getMinutes() + t), e;
          },
        },
        d = {
          sameDay: function (e, t) {
            return ["getFullYear", "getMonth", "getDate"].every(function (n) {
              return e[n]() === t[n]();
            });
          },
          date: function (e, t) {
            return (e = +e) === (t = +t) ? 0 : e > t ? 1 : -1;
          },
          time: function (e, t) {
            return (e = +e.slice(0, 5).replace(":", "")) ===
              (t = +t.slice(0, 5).replace(":", ""))
              ? 0
              : e > t
              ? 1
              : -1;
          },
          fullTime: function (e, t) {
            return (e = +e.replace(/\:/g, "")) === (t = +t.replace(/\:/g, ""))
              ? 0
              : e > t
              ? 1
              : -1;
          },
          month: function (e, t) {
            var n = e.getFullYear(),
              r = t.getFullYear(),
              a = e.getMonth(),
              i = t.getMonth();
            return n === r ? (a === i ? 0 : a > i ? 1 : -1) : n > r ? 1 : -1;
          },
          inBusiness: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              n = l.weekday(e);
            return t.some(function (e) {
              return -1 !== e.weekdays.indexOf(n);
            });
          },
          isToday: function (e) {
            return d.sameDay(c.today(), e);
          },
          isCurrentYear: function (e) {
            return c.today().getFullYear() === e.getFullYear();
          },
          maxDate: function (e, t) {
            return t > e ? t : e;
          },
          day: function (e, t) {
            return (
              (e = new Date(l.date(e))), (t = new Date(l.date(t))), d.date(e, t)
            );
          },
        },
        l = {
          padZero: i,
          timeSpanToDate: function (e) {
            return new Date(e + u);
          },
          date: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "yyyy-mm-dd";
            return t
              .replace("yyyy", e.getFullYear())
              .replace("mm", i(e.getMonth() + 1))
              .replace("dd", i(e.getDate()));
          },
          monthDay: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "yy月dd日";
            return t
              .replace("yy", i(e.getMonth() + 1))
              .replace("dd", i(e.getDate()));
          },
          yearMonth: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "yyyy年mm月";
            return t
              .replace("yyyy", e.getFullYear())
              .replace("mm", e.getMonth() + 1);
          },
          time: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "hh:mm";
            return t
              .replace("hh", i(e.getHours()))
              .replace("mm", i(e.getMinutes()))
              .replace("ss", i(e.getSeconds()));
          },
          dateTime: function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "YYYY年MM月DD日 HH:mm:ss";
            return !e ||
              isNaN(
                null == e || null === (t = e.getTime) || void 0 === t
                  ? void 0
                  : t.call(e)
              )
              ? ""
              : a()(e, n);
          },
          weekday: function (e) {
            return o[e.getDay()];
          },
          advancedWeekday: function (e) {
            var t = c.today(),
              n = d.sameDay;
            return n(t, e)
              ? "今天"
              : n(c.plusDay(t), e)
              ? "明天"
              : l.weekday(e);
          },
        };
    },
  })
);
