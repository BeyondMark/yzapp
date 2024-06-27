"use strict";
var r = require("~/r");
r(
  "xkSC",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      xkSC: function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          r = a("St5l"),
          u = a("BZkp"),
          s = a("1pB4"),
          n = a("Bb/O"),
          h = a("Zqpg"),
          l = new Date().getFullYear(),
          m = (e, t) => t,
          o = {
            name: "t-datetime-picker",
            mixins: [
              Object(h.a)({
                externalClasses: [
                  "active-class",
                  "toolbar-class",
                  "column-class",
                ],
              }),
            ],
            props: Object(i.a)({}, r.a, {
              value: null,
              filter: null,
              type: { type: String, default: "datetime" },
              showToolbar: { type: Boolean, default: !0 },
              formatter: { type: null, default: m },
              minDate: {
                type: Number,
                default: new Date(l - 10, 0, 1).getTime(),
              },
              maxDate: {
                type: Number,
                default: new Date(l + 10, 11, 31).getTime(),
              },
              minHour: { type: Number, default: 0 },
              maxHour: { type: Number, default: 23 },
              minMinute: { type: Number, default: 0 },
              maxMinute: { type: Number, default: 59 },
            }),
            logicData: () => ({ innerValue: Date.now(), lastType: "" }),
            computed: {
              ranges() {
                if ("time" === this.type)
                  return [
                    { type: "hour", range: [this.minHour, this.maxHour] },
                    { type: "minute", range: [this.minMinute, this.maxMinute] },
                  ];
                var {
                    maxYear: e,
                    maxDate: t,
                    maxMonth: a,
                    maxHour: i,
                    maxMinute: r,
                  } = this.getBoundary("max", this.innerValue),
                  {
                    minYear: u,
                    minDate: s,
                    minMonth: n,
                    minHour: h,
                    minMinute: l,
                  } = this.getBoundary("min", this.innerValue),
                  m = [
                    { type: "year", range: [u, e] },
                    { type: "month", range: [n, a] },
                    { type: "day", range: [s, t] },
                    { type: "hour", range: [h, i] },
                    { type: "minute", range: [l, r] },
                  ];
                return (
                  "date" === this.type && m.splice(3, 2),
                  "year-month" === this.type && m.splice(2, 3),
                  m
                );
              },
              originColumns() {
                var { filter: e } = this;
                return this.ranges.map((t) => {
                  var { type: a, range: i } = t,
                    r = Object(n.c)(i[1] - i[0] + 1, (e) => {
                      var t = i[0] + e;
                      return (t = "year" === a ? "" + t : Object(u.h)(t));
                    });
                  return e && (r = e(a, r)), { type: a, values: r };
                });
              },
              columns() {
                var e =
                  "function" == typeof this.formatter ? this.formatter : m;
                return this.originColumns.map((t) => ({
                  values: t.values.map((a) => e(t.type, a)),
                }));
              },
            },
            watch: {
              value() {
                this.updateValue();
              },
              type() {
                this.updateValue();
              },
              minDate() {
                this.updateValue();
              },
              maxDate() {
                this.updateValue();
              },
              minHour() {
                this.updateValue();
              },
              maxHour() {
                this.updateValue();
              },
              minMinute() {
                this.updateValue();
              },
              maxMinute() {
                this.updateValue();
              },
            },
            created() {
              var e = this.correctValue(this.value);
              (this.safeCallBackList = []),
                this.updateColumnValue(e).then(() => {
                  this.$emit("input", e);
                });
            },
            methods: {
              onLink(e) {
                (this.picker = e),
                  e.setNeedReset(!1),
                  this.updateSafeCallBackList();
              },
              updateValue() {
                var e = this.correctValue(this.value);
                (e === this.innerValue && this.type === this.lastType) ||
                  ((this.lastType = this.type),
                  this.updateColumnValue(e).then(() => {
                    this.$emit("input", e);
                  }));
              },
              getPicker() {
                return this.picker;
              },
              correctValue(e) {
                var t = "time" !== this.type;
                if (t && !Object(s.i)(e)) e = this.minDate;
                else if (!t && !e) {
                  var { minHour: a } = this;
                  e = Object(u.h)(a) + ":00";
                }
                if (!t) {
                  var [i, r] = e.split(":");
                  return (
                    (i = Object(u.h)(
                      Object(u.j)(i, this.minHour, this.maxHour)
                    )) +
                    ":" +
                    (r = Object(u.h)(
                      Object(u.j)(r, this.minMinute, this.maxMinute)
                    ))
                  );
                }
                return (
                  (e = Math.max(e, this.minDate)),
                  (e = Math.min(e, this.maxDate))
                );
              },
              getBoundary(e, t) {
                var a = new Date(t),
                  i = new Date(this[e + "Date"]),
                  r = i.getFullYear(),
                  u = 1,
                  s = 1,
                  h = 0,
                  l = 0;
                return (
                  "max" === e &&
                    ((u = 12),
                    (s = Object(n.a)(a.getFullYear(), a.getMonth() + 1)),
                    (h = 23),
                    (l = 59)),
                  a.getFullYear() === r &&
                    ((u = i.getMonth() + 1),
                    a.getMonth() + 1 === u &&
                      ((s = i.getDate()),
                      a.getDate() === s &&
                        ((h = i.getHours()),
                        a.getHours() === h && (l = i.getMinutes())))),
                  {
                    [e + "Year"]: r,
                    [e + "Month"]: u,
                    [e + "Date"]: s,
                    [e + "Hour"]: h,
                    [e + "Minute"]: l,
                  }
                );
              },
              onCancel() {
                this.$emit("cancel");
              },
              onConfirm() {
                this.$emit("confirm", this.innerValue);
              },
              onChange() {
                var e,
                  t = this.getPicker(),
                  { originColumns: a } = this;
                if ("time" === this.type) {
                  var i = t.getIndexes();
                  e = +a[0].values[i[0]] + ":" + +a[1].values[i[1]];
                } else {
                  var r = t.getIndexes().map((e, t) => a[t].values[e]),
                    u = Object(n.b)(r[0]),
                    s = Object(n.b)(r[1]),
                    h = Object(n.a)(u, s),
                    l = Object(n.b)(r[2]);
                  "year-month" === this.type && (l = 1), (l = l > h ? h : l);
                  var m = 0,
                    o = 0;
                  "datetime" === this.type &&
                    ((m = Object(n.b)(r[3])), (o = Object(n.b)(r[4]))),
                    (e = new Date(u, s - 1, l, m, o));
                }
                (e = this.correctValue(e)),
                  this.updateColumnValue(e).then(() => {
                    this.$emit("input", e), this.$emit("change", t);
                  });
              },
              updateSafeCallBackList() {
                this.safeCallBackList.forEach((e) => {
                  var { fn: t, args: a } = e;
                  this.picker[t].apply(this.picker, a);
                }),
                  (this.safeCallBackList = []);
              },
              updateColumnValue(e) {
                var t = [],
                  { type: a } = this,
                  i = this.formatter || m;
                if ("time" === a) {
                  var r = e.split(":");
                  t = [i("hour", r[0]), i("minute", r[1])];
                } else {
                  var s = new Date(e);
                  (t = [
                    i("year", "" + s.getFullYear()),
                    i("month", Object(u.h)(s.getMonth() + 1)),
                  ]),
                    "date" === a && t.push(i("day", Object(u.h)(s.getDate()))),
                    "datetime" === a &&
                      t.push(
                        i("day", Object(u.h)(s.getDate())),
                        i("hour", Object(u.h)(s.getHours())),
                        i("minute", Object(u.h)(s.getMinutes()))
                      );
                }
                return (
                  (this.innerValue = e),
                  this.safeCallBackList.push({ fn: "setValues", args: [t] }),
                  this.picker &&
                    !this.picker.needReset &&
                    setTimeout(() => {
                      this.updateSafeCallBackList();
                    }, 30),
                  Promise.resolve()
                );
              },
            },
            ud: !0,
          },
          p = a("9ZMt");
        t.default = p.default.component(o);
      },
    }
  )
);
