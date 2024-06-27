"use strict";
var r = require("~/r");
r(
  "fKHm",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      fKHm: function (t, e, a) {
        a.r(e);
        var r = a("N4qH"),
          s = a("m6kV"),
          n = Object(s.a)("t-calendar__day"),
          i = {
            props: {
              date: null,
              type: String,
              color: String,
              minDate: null,
              maxDate: null,
              showMark: Boolean,
              rowHeight: null,
              formatter: null,
              currentDate: null,
              allowSameDay: Boolean,
              showSubtitle: Boolean,
              showMonthTitle: Boolean,
            },
            data: () => ({ visible: !0 }),
            computed: {
              selectStyle() {
                return { background: this.color };
              },
              mark() {
                return new Date(this.date).getMonth() + 1;
              },
              monthTitle() {
                var t = new Date(this.date);
                return t.getFullYear() + "年" + (t.getMonth() + 1) + "月";
              },
              monthStyle() {
                var { visible: t, date: e, rowHeight: a } = this;
                if (!t) {
                  var s = new Date(e),
                    n = Object(r.h)(s.getFullYear(), s.getMonth() + 1),
                    i = new Date(s).getDay();
                  return "padding-bottom:" + Math.ceil((n + i) / 7) * a + "px";
                }
              },
              days: {
                get() {
                  for (
                    var t = [],
                      e = new Date(this.date),
                      a = e.getFullYear(),
                      s = e.getMonth(),
                      i = Object(r.h)(e.getFullYear(), e.getMonth() + 1),
                      l = 1;
                    l <= i;
                    l++
                  ) {
                    var o = new Date(a, s, l),
                      h = this.getDayType(o),
                      u = {
                        date: o,
                        type: h,
                        text: l,
                        bottomInfo: this.getBottomInfo(h),
                      };
                    this.formatter && (u = this.formatter(u)),
                      (u.style = this.getDayStyle(u.type, t.length)),
                      (u.class = n([u.type])),
                      t.push(u);
                  }
                  return t;
                },
                set() {},
              },
            },
            watch: {
              date() {
                this.setDays();
              },
              type() {
                this.setDays();
              },
              minDate() {
                this.setDays();
              },
              maxDate() {
                this.setDays();
              },
              formatter() {
                this.setDays();
              },
              currentDate() {
                this.setDays();
              },
            },
            mounted() {
              this.setDays();
            },
            methods: {
              onClick(t) {
                var { index: e } = t.currentTarget.dataset,
                  a = this.days[e];
                "disabled" !== a.type && this.$emit("click-day", a);
              },
              setDays() {
                for (
                  var t = [],
                    e = new Date(this.date),
                    a = e.getFullYear(),
                    s = e.getMonth(),
                    i = Object(r.h)(e.getFullYear(), e.getMonth() + 1),
                    l = 1;
                  l <= i;
                  l++
                ) {
                  var o = new Date(a, s, l),
                    h = this.getDayType(o),
                    u = {
                      date: o,
                      type: h,
                      text: l,
                      bottomInfo: this.getBottomInfo(h),
                    };
                  this.formatter && (u = this.formatter(u)),
                    (u.style = this.getDayStyle(u.type, t.length)),
                    (u.class = n([u.type])),
                    t.push(u);
                }
                this.days = t;
              },
              getDayStyle(t, e) {
                var { date: a, rowHeight: s, color: n } = this,
                  i = [],
                  l = new Date(a).getDay();
                return (
                  0 === e && i.push(["margin-left", (100 * l) / 7 + "%"]),
                  +s !== r.a && i.push(["height", s + "px"]),
                  n &&
                    ("start" === t ||
                    "end" === t ||
                    "multiple-selected" === t ||
                    "multiple-middle" === t ||
                    "start-end" === t
                      ? i.push(["background", n])
                      : "middle" === t && i.push(["color", n])),
                  i.map((t) => t.join(":")).join(";")
                );
              },
              getMultipleDayType(t) {
                var { currentDate: e } = this;
                if (!Array.isArray(e)) return "";
                var a = (t) => e.some((e) => 0 === Object(r.c)(e, t));
                if (a(t)) {
                  var s = Object(r.k)(t),
                    n = Object(r.j)(t),
                    i = a(s),
                    l = a(n);
                  return i && l
                    ? "multiple-middle"
                    : i
                    ? "end"
                    : l
                    ? "start"
                    : "multiple-selected";
                }
                return "";
              },
              getRangeDayType(t) {
                var { currentDate: e, allowSameDay: a } = this;
                if (!Array.isArray(e)) return "";
                var [s, n] = e;
                if (!s) return "";
                var i = Object(r.c)(t, s);
                if (!n) return 0 === i ? "start" : "";
                var l = Object(r.c)(t, n);
                return 0 === i && 0 === l && a
                  ? "start-end"
                  : 0 === i
                  ? "start"
                  : 0 === l
                  ? "end"
                  : i > 0 && l < 0
                  ? "middle"
                  : "";
              },
              getDayType(t) {
                var { type: e, minDate: a, maxDate: s, currentDate: n } = this;
                return Object(r.c)(t, a) < 0 || Object(r.c)(t, s) > 0
                  ? "disabled"
                  : "single" === e
                  ? 0 === Object(r.c)(t, n)
                    ? "selected"
                    : ""
                  : "multiple" === e
                  ? this.getMultipleDayType(t)
                  : "range" === e
                  ? this.getRangeDayType(t)
                  : "";
              },
              getBottomInfo(t) {
                if ("range" === this.type) {
                  if ("start" === t) return "开始";
                  if ("end" === t) return "结束";
                  if ("start-end" === t) return "开始/结束";
                }
                return "";
              },
            },
            ud: !0,
          },
          l = a("9ZMt");
        e.default = l.default.component(i);
      },
    }
  )
);
