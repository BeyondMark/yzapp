"use strict";
var r = require("~/r");
r(
  "KqDQ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    KqDQ: function (e, t, a) {
      a.r(t);
      var r = a("py6f"),
        n = a("6S0u"),
        u = a("vtdp"),
        i = new Date().getFullYear();
      function s(e, t, a) {
        return Math.min(Math.max(e, t), a);
      }
      function l(e) {
        return ("00" + e).slice(-2);
      }
      function m(e) {
        for (void 0 === e && (e = "1"); isNaN(parseInt(e, 10)); )
          e = e.slice(1);
        return parseInt(e, 10);
      }
      function o(e, t) {
        return 32 - new Date(e, t - 1, 32).getDate();
      }
      var p = (e, t) => t;
      Object(r.a)({
        classes: ["active-class", "toolbar-class", "column-class"],
        props: Object.assign(Object.assign({}, u.a), {
          value: { type: null, observer: "updateValue" },
          filter: null,
          type: { type: String, value: "datetime", observer: "updateValue" },
          showToolbar: { type: Boolean, value: !0 },
          formatter: { type: null, value: p },
          minDate: {
            type: Number,
            value: new Date(i - 10, 0, 1).getTime(),
            observer: "updateValue",
          },
          maxDate: {
            type: Number,
            value: new Date(i + 10, 11, 31).getTime(),
            observer: "updateValue",
          },
          minHour: { type: Number, value: 0, observer: "updateValue" },
          maxHour: { type: Number, value: 23, observer: "updateValue" },
          minMinute: { type: Number, value: 0, observer: "updateValue" },
          maxMinute: { type: Number, value: 59, observer: "updateValue" },
        }),
        data: { innerValue: Date.now(), columns: [] },
        methods: {
          updateValue() {
            var { data: e } = this,
              t = this.correctValue(e.value),
              a = t === e.innerValue;
            this.updateColumnValue(t).then(() => {
              a || this.$emit("input", t);
            });
          },
          getPicker() {
            if (null == this.picker) {
              this.picker = this.selectComponent(".van-datetime-picker");
              var { picker: e } = this,
                { setColumnValues: t } = e;
              e.setColumnValues = function () {
                for (
                  var a = arguments.length, r = new Array(a), n = 0;
                  n < a;
                  n++
                )
                  r[n] = arguments[n];
                return t.apply(e, [...r, !1]);
              };
            }
            return this.picker;
          },
          updateColumns() {
            var { formatter: e = p } = this.data,
              t = this.getOriginColumns().map((t) => ({
                values: t.values.map((a) => e(t.type, a)),
              }));
            return this.set({ columns: t });
          },
          getOriginColumns() {
            var { filter: e } = this.data;
            return this.getRanges().map((t) => {
              var { type: a, range: r } = t,
                n = (function (e, t) {
                  for (var a = -1, r = Array(e < 0 ? 0 : e); ++a < e; )
                    r[a] = t(a);
                  return r;
                })(r[1] - r[0] + 1, (e) => {
                  var t = r[0] + e;
                  return "year" === a ? "" + t : l(t);
                });
              return e && (n = e(a, n)), { type: a, values: n };
            });
          },
          getRanges() {
            var { data: e } = this;
            if ("time" === e.type)
              return [
                { type: "hour", range: [e.minHour, e.maxHour] },
                { type: "minute", range: [e.minMinute, e.maxMinute] },
              ];
            var {
                maxYear: t,
                maxDate: a,
                maxMonth: r,
                maxHour: n,
                maxMinute: u,
              } = this.getBoundary("max", e.innerValue),
              {
                minYear: i,
                minDate: s,
                minMonth: l,
                minHour: m,
                minMinute: o,
              } = this.getBoundary("min", e.innerValue),
              p = [
                { type: "year", range: [i, t] },
                { type: "month", range: [l, r] },
                { type: "day", range: [s, a] },
                { type: "hour", range: [m, n] },
                { type: "minute", range: [o, u] },
              ];
            return (
              "date" === e.type && p.splice(3, 2),
              "year-month" === e.type && p.splice(2, 3),
              p
            );
          },
          correctValue(e) {
            var t,
              { data: a } = this,
              r = "time" !== a.type;
            if (r && ((t = e), !Object(n.b)(t) || isNaN(new Date(t).getTime())))
              e = a.minDate;
            else if (!r && !e) {
              var { minHour: u } = a;
              e = l(u) + ":00";
            }
            if (!r) {
              var [i, m] = e.split(":");
              return (
                (i = l(s(i, a.minHour, a.maxHour))) +
                ":" +
                (m = l(s(m, a.minMinute, a.maxMinute)))
              );
            }
            return (e = Math.max(e, a.minDate)), (e = Math.min(e, a.maxDate));
          },
          getBoundary(e, t) {
            var a = new Date(t),
              r = new Date(this.data[e + "Date"]),
              n = r.getFullYear(),
              u = 1,
              i = 1,
              s = 0,
              l = 0;
            return (
              "max" === e &&
                ((u = 12),
                (i = o(a.getFullYear(), a.getMonth() + 1)),
                (s = 23),
                (l = 59)),
              a.getFullYear() === n &&
                ((u = r.getMonth() + 1),
                a.getMonth() + 1 === u &&
                  ((i = r.getDate()),
                  a.getDate() === i &&
                    ((s = r.getHours()),
                    a.getHours() === s && (l = r.getMinutes())))),
              {
                [e + "Year"]: n,
                [e + "Month"]: u,
                [e + "Date"]: i,
                [e + "Hour"]: s,
                [e + "Minute"]: l,
              }
            );
          },
          onCancel() {
            this.$emit("cancel");
          },
          onConfirm() {
            this.$emit("confirm", this.data.innerValue);
          },
          onChange() {
            var e,
              { data: t } = this,
              a = this.getPicker(),
              r = this.getOriginColumns();
            if ("time" === t.type) {
              var n = a.getIndexes();
              e = +r[0].values[n[0]] + ":" + +r[1].values[n[1]];
            } else {
              var u = a.getIndexes().map((e, t) => r[t].values[e]),
                i = m(u[0]),
                s = m(u[1]),
                l = o(i, s),
                p = m(u[2]);
              "year-month" === t.type && (p = 1), (p = p > l ? l : p);
              var h = 0,
                v = 0;
              "datetime" === t.type && ((h = m(u[3])), (v = m(u[4]))),
                (e = new Date(i, s - 1, p, h, v));
            }
            (e = this.correctValue(e)),
              this.updateColumnValue(e).then(() => {
                this.$emit("input", e), this.$emit("change", a);
              });
          },
          updateColumnValue(e) {
            var t = [],
              { type: a } = this.data,
              r = this.data.formatter || p,
              n = this.getPicker();
            if ("time" === a) {
              var u = e.split(":");
              t = [r("hour", u[0]), r("minute", u[1])];
            } else {
              var i = new Date(e);
              (t = [
                r("year", "" + i.getFullYear()),
                r("month", l(i.getMonth() + 1)),
              ]),
                "date" === a && t.push(r("day", l(i.getDate()))),
                "datetime" === a &&
                  t.push(
                    r("day", l(i.getDate())),
                    r("hour", l(i.getHours())),
                    r("minute", l(i.getMinutes()))
                  );
            }
            return this.set({ innerValue: e })
              .then(() => this.updateColumns())
              .then(() => n.setValues(t));
          },
        },
        created() {
          var e = this.correctValue(this.data.value);
          this.updateColumnValue(e).then(() => {
            this.$emit("input", e);
          });
        },
      });
    },
  })
);
