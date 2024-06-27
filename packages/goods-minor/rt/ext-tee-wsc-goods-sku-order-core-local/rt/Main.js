"use strict";
var r = require("~/r");
r(
  "Duz+",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4kmb": function (e, t, n) {
        n.r(t),
          n.d(t, "ADDRESS_TYPE", function () {
            return r;
          }),
          n.d(t, "ADDRESS_SOURCE", function () {
            return i;
          }),
          n.d(t, "ADDRESS_POI_TYPE", function () {
            return a;
          });
        var r = { INPUT: 1, POI: 2 },
          i = { YOUZAN: 1, WECHAT: 2 },
          a = { QQ: 1, BAIDU: 2, AMAP: 3 };
      },
      "5Mqe": function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            if (!(0, i.default)(e)) return [];
            return e.reduce(function (e, t) {
              return (e = [].concat(e, t));
            }, []);
          });
        var r,
          i = (r = n("ajWA")) && r.__esModule ? r : { default: r };
        e.exports = t.default;
      },
      "64Ju": function (e, t, n) {
        n.d(t, "d", function () {
          return D;
        }),
          n.d(t, "c", function () {
            return O;
          }),
          n.d(t, "b", function () {
            return x;
          }),
          n.d(t, "a", function () {
            return j;
          }),
          n.d(t, "e", function () {
            return o;
          });
        var r = n("eijD"),
          i = n("6CzD"),
          a = n("NthX"),
          u = n.n(a),
          c = n("ns2s");
        function o(e) {
          var t = e.deliveryTimeBucket,
            n = void 0 === t ? {} : t,
            r = e.timeBucket,
            i = n.startTime,
            a = n.endTime,
            u = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
            o = a && new Date(a + u),
            s = i && new Date(i + u);
          if (!o || !s || !r) return null;
          for (
            var d = !1,
              l = function () {
                var e = c.c.time(s);
                c.a.getBusinessTimesByTimeBucket(s, r).some(function (t) {
                  return 1 !== c.b.time(e, t.closeTime);
                })
                  ? (d = !0)
                  : ((s = c.a.plusDay(s)), c.a.resetTime(s));
              };
            !d && 1 !== c.b.date(s, o);

          )
            l();
          return { max: o, min: s };
        }
        var s = n("mK0O"),
          d = n("yS26");
        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  Object(s.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function m(e) {
          if (!e || null == e || !e.length) return [];
          var t = [];
          e.forEach(function (e) {
            var n = new Date(e.startDateStr),
              r = new Date(e.endDateStr);
            0 === c.b.date(n, r) &&
              t.push({
                date: e.startDateStr,
                suspendTime: [
                  { startTime: e.startTimeStr, endTime: e.endTimeStr },
                ],
              });
            var i = c.a.copy(n);
            do {
              t.push({
                date: c.c.date(i),
                suspendTime: [
                  { startTime: e.startTimeStr, endTime: e.endTimeStr },
                ],
              }),
                c.a.plusDay(i);
            } while (1 !== c.b.date(i, r));
          });
          var n = new Map();
          return t.reduce(function (e, t) {
            var r,
              a = n.get(t.date);
            return a
              ? ((r = a.suspendTime).push.apply(r, Object(i.a)(t.suspendTime)),
                e)
              : (n.set(t.date, t), e.push(t), e);
          }, []);
        }
        function v(e, t) {
          return e.suspendTime.reduce(function (e, t) {
            var n = [],
              r = t.startTime,
              i = t.endTime;
            return (
              e.forEach(function (e) {
                var t = e.openTime,
                  a = e.closeTime;
                1 === c.b.time(t, r) &&
                  (c.b.time(t, i) >= 0 && 1 === c.b.time(a, i) && n.push(e),
                  -1 === c.b.time(t, i) &&
                    1 === c.b.time(a, i) &&
                    n.push(f(f({}, e), {}, { openTime: i }))),
                  0 === c.b.time(t, r) &&
                    1 === c.b.time(a, i) &&
                    n.push(f(f({}, e), {}, { openTime: i })),
                  -1 === c.b.time(t, r) &&
                    ((-1 !== c.b.time(a, r) && 0 !== c.b.time(a, r)) ||
                      n.push(e),
                    -1 === c.b.time(r, a) &&
                      -1 === c.b.time(a, i) &&
                      n.push(f(f({}, e), {}, { closeTime: r })),
                    0 === c.b.time(a, i) &&
                      n.push(f(f({}, e), {}, { closeTime: r })),
                    1 === c.b.time(a, i) &&
                      n.push(
                        f(f({}, e), {}, { closeTime: r }),
                        f(f({}, e), {}, { openTime: i })
                      ));
              }),
              n
            );
          }, t);
        }
        function h(e) {
          return p.apply(this, arguments);
        }
        function p() {
          return (p = Object(r.a)(
            u.a.mark(function e(t) {
              var n, r, a, o, s, l, m, v, h, p;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.bizType),
                          (r = t.offlineId),
                          (a = t.dispatchWarehouseId),
                          (o = t.timeOptions),
                          (s = t.timeSpan),
                          (l = []),
                          (m = o.filter(function (e) {
                            return e.value.instantTimePoint;
                          })),
                          (v = o.filter(function (e) {
                            return !e.value.instantTimePoint;
                          })).forEach(function (e, t) {
                            if (!e.disabled) {
                              var r = e.value,
                                i = r.startTime,
                                a = r.endTime;
                              1 === n &&
                                "day" === s &&
                                ((i = c.c.date(new Date(i)) + " 00:00:00"),
                                (a = c.c.date(new Date(a)) + " 23:59:00")),
                                l.push({ startTime: i, endTime: a, index: t });
                            }
                          }),
                          (e.prev = 5),
                          (e.next = 8),
                          Object(d.a)({
                            bizType: n,
                            offlineId: r,
                            dispatchWarehouseId: a,
                            timeBucketList: l,
                          })
                        );
                      case 8:
                        return (
                          (h = e.sent),
                          (p = !0),
                          h.forEach(function (e) {
                            var t = e.index;
                            0 === t && e.full && (p = !1),
                              (v[t] = f(
                                f({}, v[t]),
                                {},
                                {
                                  text: v[t].text + (e.full ? "  已约满" : ""),
                                  disabled: !!e.full,
                                  value: f(
                                    f({}, v[t].value),
                                    {},
                                    {
                                      orderCnt: e.orderCnt,
                                      remain: e.remain,
                                      isFull: e.full,
                                    }
                                  ),
                                }
                              ));
                          }),
                          e.abrupt(
                            "return",
                            [].concat(Object(i.a)(p ? m : []), Object(i.a)(v))
                          )
                        );
                      case 14:
                        return (
                          (e.prev = 14),
                          (e.t0 = e.catch(5)),
                          e.abrupt("return", o)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 14]]
              );
            })
          )).apply(this, arguments);
        }
        var b = {
          morning: { text: "上午", startTime: "00:00:00", endTime: "11:59:00" },
          afternoon: {
            text: "下午",
            startTime: "12:00:00",
            endTime: "17:59:00",
          },
          evening: { text: "晚上", startTime: "18:00:00", endTime: "23:59:00" },
        };
        function y(e, t, n, r, i) {
          var a,
            u,
            o = b[e],
            s = !1;
          n.length &&
            n.forEach(function (e) {
              c.b.time(e.openTime, o.endTime) < 0 &&
                c.b.time(e.closeTime, o.startTime) > 0 &&
                (1 === c.b.date(t, r.min) ||
                  c.b.time(c.c.time(t), o.endTime) < 1) &&
                (s = !0);
            });
          var d = m(
            null == i ||
              null === (a = i.deliveryTimeBucket) ||
              void 0 === a ||
              null === (u = a.suspendTime) ||
              void 0 === u
              ? void 0
              : u.suspendTimeBuckets
          );
          if (s && (null == d ? void 0 : d.length) > 0) {
            var l = d.find(function (e) {
              return c.b.sameDay(t, new Date(e.date));
            });
            if (l)
              v(l, [{ openTime: o.startTime, closeTime: o.endTime }]).length ||
                (s = !1);
          }
          var f = c.c.date(t),
            h = c.c.advancedWeekday(t),
            p = "".concat(c.c.monthDay(t), " ").concat(o.text),
            y = ""
              .concat(c.c.monthDay(t, "yy-dd"), " (")
              .concat(h, ") ")
              .concat(o.text);
          return (
            c.b.isCurrentYear(t) ||
              ((p = t.getFullYear() + "年" + p),
              (y = t.getFullYear() + "年" + y)),
            {
              text: o.text,
              id: p,
              value: {
                text: p,
                textWithWeekday: y,
                startTime: f + " " + o.startTime,
                endTime: f + " " + o.endTime,
              },
              disabled: !s,
            }
          );
        }
        function T(e, t, n) {
          var r = c.a.businessTime(e, t);
          if (!r) return !0;
          var i = n.min,
            a = n.max;
          if ("meal" !== t.timeSpan)
            return -1 === c.b.day(e, i) || 1 === c.b.day(e, a);
          var u = t.timeBucket.some(function (e) {
              return c.b.time(e.closeTime, b.evening.startTime) > 0;
            }),
            o = b.morning.startTime,
            s = u ? b.evening.endTime : b.afternoon.endTime;
          return !(
            c.b.time(r.openTime, s) < 0 &&
            c.b.time(r.closeTime, o) > 0 &&
            (1 === c.b.date(e, i) || c.b.time(c.c.time(e), s) < 1)
          );
        }
        function g(e, t) {
          var n = t.min,
            r = t.max,
            i = [];
          if (!t || 1 === c.b.date(n, r)) return i;
          var a = c.a.copy(n);
          do {
            var u = c.c.advancedWeekday(a);
            i.push({
              text: ["今天", "明天"].includes(u)
                ? "".concat(u, "（").concat(c.c.weekday(a), "）")
                : "".concat(c.c.monthDay(a, "yy-dd"), "（").concat(u, "）"),
              id: a.getTime(),
              disabled: T(a, e, t),
              children: [],
            }),
              c.a.plusDay(a),
              c.a.resetTime(a);
          } while (1 !== c.b.date(a, r));
          return i;
        }
        function k(e, t, n) {
          switch (t.timeSpan) {
            case "day":
              return (function (e, t, n) {
                var r, i;
                if (T(e, t, n)) return [];
                var a = c.a.businessTime(e, t) || {},
                  u = m(
                    null == t ||
                      null === (r = t.deliveryTimeBucket) ||
                      void 0 === r ||
                      null === (i = r.suspendTime) ||
                      void 0 === i
                      ? void 0
                      : i.suspendTimeBuckets
                  );
                if ((null == u ? void 0 : u.length) > 0) {
                  var o = u.find(function (t) {
                    return c.b.sameDay(e, new Date(t.date));
                  });
                  if (o)
                    if (
                      !v(o, [
                        {
                          openTime:
                            c.b.sameDay(e, new Date(Date.now())) &&
                            -1 === c.b.time(a.openTime, c.a.time(Date.now()))
                              ? c.a.time(Date.now())
                              : a.openTime,
                          closeTime: a.closeTime,
                        },
                      ]).length
                    )
                      return [];
                }
                var s = c.c.date(e),
                  d = c.c.monthDay(e),
                  l = c.c.advancedWeekday(e),
                  f = "".concat(c.c.monthDay(e, "yy-dd"), " (").concat(l, ")");
                return (
                  c.b.isCurrentYear(e) ||
                    ((d = e.getFullYear() + "年" + d),
                    (f = e.getFullYear() + "年" + f)),
                  [
                    {
                      id: d,
                      text: "全天",
                      value: {
                        text: d,
                        textWithWeekday: f,
                        startTime: s + " " + a.openTime + ":00",
                        endTime: s + " " + a.closeTime + ":00",
                      },
                    },
                  ]
                );
              })(e, t, n);
            case "meal":
              return (function (e, t, n) {
                if (!n) return [];
                var r = c.a.getBusinessTimesByTimeBucket(e, t.timeBucket),
                  i = t.timeBucket.some(function (e) {
                    return c.b.time(e.closeTime, b.evening.startTime) > 0;
                  }),
                  a = [y("morning", e, r, n, t), y("afternoon", e, r, n, t)];
                return (
                  i && a.push(y("evening", e, r, n, t)),
                  a.filter(function (e) {
                    return !e.disabled;
                  })
                );
              })(e, t, n);
            default:
              return (function (e, t, n) {
                var r,
                  a,
                  u,
                  o = [];
                if (!e) return o;
                var s = "00:00:00";
                if (n.min && c.b.sameDay(n.min, e)) {
                  var d = c.c.time(n.min, "hh:mm:ss");
                  1 === c.b.fullTime(d, s) && (s = d);
                }
                var l = c.a.getBusinessTimesByTimeBucket(e, t.timeBucket);
                if (!l.length) return o;
                var f = m(
                  null == t ||
                    null === (r = t.deliveryTimeBucket) ||
                    void 0 === r ||
                    null === (a = r.suspendTime) ||
                    void 0 === a
                    ? void 0
                    : a.suspendTimeBuckets
                );
                if (f.length > 0) {
                  var h = f.find(function (t) {
                    return c.b.sameDay(e, new Date(t.date));
                  });
                  if (h) {
                    var p = v(h, l);
                    l = Object(i.a)(p);
                  }
                }
                var b = { halfhour: 30, hour: 60, "2hour": 120 },
                  y = null !== (u = b[t.timeSpan]) && void 0 !== u ? u : b.hour;
                return (
                  l.forEach(function (t) {
                    var r,
                      i = t.openTime,
                      a = t.closeTime,
                      u = i;
                    if (-1 === c.b.time(i, a))
                      for (; -1 === c.b.time(u, a); ) {
                        var d = u;
                        u = c.a.addTime(u, y);
                        var l = 1 === c.b.time(u, a) ? a : u,
                          f =
                            c.b.fullTime(
                              (r = l).indexOf(":") === r.lastIndexOf(":")
                                ? "".concat(r, ":00")
                                : r,
                              s
                            ) < 0 ||
                            (n.max && 1 === c.b.date(e, n.max)),
                          m = c.c.date(e),
                          v = c.c.advancedWeekday(e),
                          h = "".concat(d, "-").concat(l),
                          p = "".concat(c.c.monthDay(e), " ").concat(h),
                          b = ["今天", "明天"].includes(v)
                            ? "".concat(v).concat(h)
                            : ""
                                .concat(c.c.monthDay(e, "yy-dd"), " (")
                                .concat(v, ") ")
                                .concat(h);
                        c.b.isCurrentYear(e) ||
                          ((p = e.getFullYear() + "年" + p),
                          (b = e.getFullYear() + "年" + b)),
                          o.push({
                            id: p,
                            text: "".concat(h),
                            disabled: f,
                            value: {
                              text: p,
                              textWithWeekday: b,
                              startTime: m + " " + d + ":00",
                              endTime: m + " " + l + ":00",
                            },
                          });
                      }
                  }),
                  o.filter(function (e) {
                    return !e.disabled;
                  })
                );
              })(e, t, n);
          }
        }
        function D(e) {
          return w.apply(this, arguments);
        }
        function w() {
          return (w = Object(r.a)(
            u.a.mark(function e(t) {
              var n, r, a, o, s, d, l, f, m, v, p, b, y, T, g, D, w, O, S, x;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.bizType),
                        (a = t.offlineId),
                        (o = t.dispatchWarehouseId),
                        (s = t.day),
                        (d = t.isFirstDay),
                        (l = t.config),
                        (f = t.range),
                        (m = t.needFill),
                        (v = void 0 === m || m),
                        (p = t.isCalcLimit),
                        (b = void 0 === p || p),
                        (y = l.instantTimePoint),
                        (T = l.showAutoSelfTakeTime),
                        (g = void 0 !== T && T),
                        (D = l.timeSpan),
                        (w = 60 * (new Date().getTimezoneOffset() + 480) * 1e3),
                        (O = c.c.dateTime(new Date(y))),
                        (S = ""
                          .concat(g ? "立即自提" : "尽快送达", "（预计 ")
                          .concat(c.c.time(new Date(y + w)), "）")),
                        !b)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 8),
                        h({
                          bizType: r,
                          offlineId: a,
                          dispatchWarehouseId: o,
                          timeOptions: k(new Date(s.id), l, f),
                          timeSpan: D,
                        })
                      );
                    case 8:
                      (e.t0 = e.sent), (e.next = 12);
                      break;
                    case 11:
                      e.t0 = k(new Date(s.id), l, f);
                    case 12:
                      if (
                        ((x = e.t0),
                        !d ||
                          !y ||
                          (null !== (n = x[0]) && void 0 !== n && n.disabled))
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        g && x.shift(),
                        e.abrupt(
                          "return",
                          [
                            {
                              text: S,
                              id: O,
                              value: {
                                text: O,
                                textWithWeekday: S,
                                instantTimePoint: y,
                                startTime: null,
                                endTime: null,
                              },
                            },
                          ].concat(Object(i.a)(x))
                        )
                      );
                    case 16:
                      return e.abrupt(
                        "return",
                        v && 0 === x.length
                          ? [{ id: "none", text: "暂停预约", disabled: !0 }]
                          : x
                      );
                    case 17:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function O(e, t, n, r) {
          return S.apply(this, arguments);
        }
        function S() {
          return (S = Object(r.a)(
            u.a.mark(function e(t, n, r, i) {
              var a, c, o, s, d, l, f, m, v;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (n) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", []);
                    case 2:
                      (a = n.min),
                        (c = n.max),
                        (o = i.bizType),
                        (s = i.offlineId),
                        (d = i.dispatchWarehouseId),
                        864e5,
                        c.getTime() - a.getTime() > 864e5 * r &&
                          (c = new Date(a.getTime() + 864e5 * r)),
                        (l = g(t, { min: a, max: c })),
                        (f = 0);
                    case 8:
                      if (!(f < l.length)) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (m = l[f]),
                        (e.next = 12),
                        D({
                          bizType: o,
                          offlineId: s,
                          dispatchWarehouseId: d,
                          day: m,
                          isFirstDay: 0 === f,
                          config: t,
                          range: n,
                          needFill: !1,
                          isCalcLimit: 0 === f,
                        })
                      );
                    case 12:
                      (v = e.sent),
                        (m.children = v),
                        (m.disabled = m.disabled || 0 === v.length);
                    case 15:
                      f++, (e.next = 8);
                      break;
                    case 18:
                      return e.abrupt("return", l);
                    case 19:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function x(e, t) {
          return (function (e, t) {
            var n = t.min,
              r = t.max,
              i = [];
            if (!t || 1 === c.b.date(n, r)) return i;
            var a = c.a.copy(n);
            do {
              var u = new Date(
                  a.getFullYear(),
                  a.getMonth() + 1,
                  0,
                  23,
                  59,
                  59
                ),
                o = g(e, { min: a, max: c.b.date(r, u) > 0 ? u : r });
              i.push({
                text: c.c.yearMonth(a),
                disabled: o.every(function (e) {
                  return e.disabled;
                }),
                id: a.getTime(),
                children: o,
              }),
                a.setDate(1),
                a.setMonth(a.getMonth() + 1),
                c.a.resetTime(a);
            } while (1 !== c.b.month(a, r));
            return i;
          })(e, t);
        }
        function j(e) {
          var t = o(e);
          if (!t || t.max < t.min) return null;
          var n = (g(e, t) || []).find(function (e) {
            return !e.disabled && e.text;
          });
          return null == n
            ? null
            : (k(new Date(n.id), e, t) || []).find(function (e) {
                return !e.disabled;
              });
        }
      },
      "6CzD": function (e, t, n) {
        n.d(t, "a", function () {
          return a;
        });
        var r = n("YZeP");
        var i = n("TJjZ");
        function a(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Object(r.a)(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            Object(i.a)(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
      },
      "7lfQ": function (e, t, n) {
        n.d(t, "a", function () {
          return i;
        });
        var r = n("9ZMt");
        t.b = function (e) {
          return new Promise(function (t, n) {
            r.default.$native.getSetting({
              success: function (i) {
                i.authSetting[e]
                  ? t()
                  : r.default.$native.authorize({
                      scope: e,
                      success: t,
                      fail: n,
                    });
              },
              fail: n,
            });
          });
        };
        var i = function (e) {
          return new Promise(function (t, n) {
            r.default.$native.getSetting({
              success: function (n) {
                n.authSetting[e] ? t(!0) : t(!1);
              },
              fail: n,
            });
          });
        };
      },
      "81cE": function (e, t, n) {
        n.d(t, "a", function () {
          return d;
        }),
          n.d(t, "b", function () {
            return l;
          }),
          n.d(t, "c", function () {
            return f;
          });
        var r,
          i = n("mK0O"),
          a = "NORMAL",
          u = "TOPAY",
          c = "MIXSURE",
          o =
            ((r = {}),
            Object(i.a)(r, a, function (e) {
              return 0 === e ? " 免运费" : " 运费 ¥" + (e / 100).toFixed(2);
            }),
            Object(i.a)(r, u, function () {
              return " 运费到付";
            }),
            Object(i.a)(r, c, function (e) {
              var t = o[a](e);
              return "".concat(t, "（不含运费到付）");
            }),
            r);
        function s(e) {
          switch (e) {
            case 1:
              return u;
            case 2:
              return c;
          }
          return a;
        }
        function d(e, t) {
          var n = s(t);
          return (o[n] || o[a])(e);
        }
        function l(e) {
          return s(e) === c ? "运费（不含运费到付）" : "运费";
        }
        function f(e, t) {
          return s(e) === u
            ? "运费到付"
            : (function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  n = t ? "".concat(t, " ¥") : "¥";
                return "".concat(n).concat((Math.abs(e) / 100).toFixed(2));
              })(t, "+");
        }
      },
      "9Eee": function (e, t, n) {
        n.d(t, "b", function () {
          return o;
        }),
          n.d(t, "a", function () {
            return s;
          }),
          n.d(t, "c", function () {
            return d;
          });
        var r = n("Fcif"),
          i = n("5Xe+"),
          a = n.n(i),
          u = n("TtQZ"),
          c = n("Bg0V");
        function o(e) {
          var { isSkuCombSelected: t, sku: n, selectedSkuEntries: i } = e;
          return t
            ? null != n && n.noneSku
              ? Object(r.a)(
                  {},
                  a()(n, ["price", "stockNum", "pointsPrice", "noneSku"]),
                  { id: n.collectionId }
                )
              : Object(u.e)(n.list, i)
            : null;
        }
        function s(e, t) {
          var {
              couponId: n,
              pluginsResult: i,
              module: a,
              activityName: c,
              tradeData: o,
              alias: s,
            } = e,
            { selectedSkuEntries: d, skuTree: l } = t || {},
            f = Object(u.b)(d, l);
          return {
            submitAction: null == e ? void 0 : e.submitAction,
            skuScene: null == e ? void 0 : e.skuScene,
            activityName: c,
            skuData: o,
            alias: s,
            couponId: n,
            pluginsResult: i,
            module: a,
            extraParams: Object(r.a)({}, e, { skuNameForLog: f }),
          };
        }
        function d(e) {
          var {
              btn: t,
              sku: n,
              goods: r,
              selectedSkuComb: i,
              skuTree: a,
              selectedNum: u,
              selectedSkuEntries: o,
              event: d,
              extraData: l,
              messageValues: f,
              birthdayVal: m,
            } = e,
            v = d.submitAction || t.submitAction,
            h = t.skuScene || d.skuScene;
          return s(
            {
              couponId: n.couponId,
              pluginsResult: null == l ? void 0 : l.pluginsResult,
              module: null == d ? void 0 : d.module,
              activityName: null == d ? void 0 : d.activityName,
              submitAction: v,
              skuScene: h,
              alias: r.alias,
              tradeData: {
                goodsId: r.id,
                selectedSkuComb: i,
                messages: Object(c.c)(f),
                birthdayVal: m,
                selectedNum: u || 1,
                cartMessages: Object(c.b)(f, n.messages),
              },
            },
            { skuTree: a, selectedSkuEntries: o }
          );
        }
      },
      Bg0V: function (e, t, n) {
        n.d(t, "a", function () {
          return a;
        }),
          n.d(t, "c", function () {
            return u;
          }),
          n.d(t, "b", function () {
            return c;
          });
        var r = n("JijB"),
          i = n.n(r);
        function a(e, t) {
          return (
            void 0 === t && (t = "date"),
            e
              ? "datetime" === t
                ? i()(e, "YYYY-MM-DD HH:mm")
                : i()(e, "YYYY-MM-DD")
              : ""
          );
        }
        function u(e) {
          return e.reduce((e, t, n) => ((e["message_" + n] = t.value), e), {});
        }
        function c(e, t) {
          return e.reduce(
            (e, n, r) => (t[r] && (e[t[r].name] = n.value), e),
            {}
          );
        }
      },
      "Duz+": function (e, t, n) {
        n.r(t);
        var r = n("RPi2"),
          i = n("GNYL"),
          a = {
            created() {
              (this.main = new r.a({ ctx: this.ctx })),
                Object(i.a)(this.main.store, this.ctx);
            },
            destroyed() {
              this.main.pageDestroyed();
            },
            ud: !0,
          },
          u = n("9ZMt");
        t.default = u.default.component(a);
      },
      GNYL: function (e, t, n) {
        function r(e) {
          Object.defineProperty(e, "store", {
            get: () => e.ctx.cacheStore || null,
          });
        }
        function i(e, t) {
          t.cacheStore = e;
        }
        n.d(t, "b", function () {
          return r;
        }),
          n.d(t, "a", function () {
            return i;
          });
      },
      Hrzu: function (e, t, n) {
        n.d(t, "a", function () {
          return c;
        });
        var r = n("US/N"),
          i = n("Uol7");
        function a() {
          return Object(r.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/uic/address/getAddressList.json",
            config: i.a,
          });
        }
        var u = [],
          c = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return !e && u.length > 0
              ? Promise.resolve(u)
              : a()
                  .then(function (e) {
                    return (u = e), e;
                  })
                  .catch(function () {
                    return (u = []), [];
                  });
          };
      },
      TJjZ: function (e, t, n) {
        n.d(t, "a", function () {
          return i;
        });
        var r = n("YZeP");
        function i(e, t) {
          if (e) {
            if ("string" == typeof e) return Object(r.a)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Object(r.a)(e, t)
                : void 0
            );
          }
        }
      },
      TtQZ: function (e, t, n) {
        n.d(t, "g", function () {
          return u;
        }),
          n.d(t, "e", function () {
            return c;
          }),
          n.d(t, "d", function () {
            return o;
          }),
          n.d(t, "h", function () {
            return s;
          }),
          n.d(t, "b", function () {
            return d;
          }),
          n.d(t, "c", function () {
            return l;
          }),
          n.d(t, "f", function () {
            return f;
          }),
          n.d(t, "a", function () {
            return m;
          });
        var r = n("Fcif"),
          i = n("xers"),
          a = n.n(i);
        function u(e) {
          var t;
          return !(null == e || null == (t = e[0]) || !t.largeImageMode);
        }
        var c = (e, t) =>
            e.find((e) =>
              (function (e, t) {
                for (var { keys: n, values: r } = t, i = 0; i < n.length; i++) {
                  if (+e[n[i]] != +r[i]) return !1;
                }
                return !0;
              })(e, t)
            ) || null,
          o = (e, t) => {
            var { keys: n, values: r } = t;
            return n.reduce((t, n, i) => {
              if ("" !== r[n]) {
                var a = e.find((e) => e.kS === n);
                if (a && a.v) {
                  var u = a.v.find((e) => e.id === +r[i]);
                  u && ((u.skuKeyStr = a.kS), t.push(u));
                }
              }
              return t;
            }, []);
          },
          s = (e, t, n) => {
            if (0 === e.length) return !1;
            var { key: i, valueId: a } = n,
              u = Object(r.a)({}, t, { [i]: a }),
              c = Object.keys(u).filter((e) => "" !== u[e]),
              o = e.filter((e) =>
                c.every((t) => String(u[t]) === String(e[t]))
              ),
              s = o.reduce((e, t) => (e += t.stockNum), 0),
              d = o.some((e) => !0 !== e.customDisableSell);
            return s > 0 && d;
          },
          d = (e, t) =>
            ((null == e ? void 0 : e.keys) || []).map((n, r) => {
              var i = t.find((e) => e.kS === n),
                a = i.v.find((t) => t.id === e.values[r]);
              return {
                k_s: n,
                k: i.k,
                k_id: i.kId,
                v: null == a ? void 0 : a.name,
                v_id: null == a ? void 0 : a.id,
              };
            });
        function l(e) {
          return { keys: Object.keys(e), values: Object.values(e) };
        }
        function f(e) {
          var { sku: t, selectedSkuEntries: n } = e,
            { noneSku: r, tree: i } = t;
          return !(
            !r &&
            !((e, t) => {
              var n = t.values.filter(Boolean);
              return e.length === n.length;
            })(i, n)
          );
        }
        function m(e, t, n) {
          if ((void 0 === t && (t = {}), n && !a()(n))) return n;
          var r = {};
          return (
            e.tree.forEach((n) => {
              for (var i = n.kS, a = 0, u = 0; u < n.v.length; u++) {
                var c = n.v[u].id;
                if (
                  (s(e.list, r, { key: i, valueId: c }) &&
                    ((r[i] = c), (a += 1)),
                  a > 1)
                ) {
                  (r[i] = t[i] || ""), t[i] || delete r[i];
                  break;
                }
              }
            }),
            r
          );
        }
      },
      Uol7: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        });
        var r = { skipKdtId: !0, skipShopInfo: !0 };
      },
      YZeP: function (e, t, n) {
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        n.d(t, "a", function () {
          return r;
        });
      },
      iKL5: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        });
        var r = function (e, t) {
          var n = (3e3 * Math.PI) / 180,
            r = e,
            i = t,
            a = Math.sqrt(r * r + i * i) + 2e-5 * Math.sin(i * n),
            u = Math.atan2(i, r) + 3e-6 * Math.cos(r * n);
          return {
            lng: (e = a * Math.cos(u) + 0.0065),
            lat: (t = a * Math.sin(u) + 0.006),
          };
        };
      },
      ns2s: function (e, t, n) {
        n.d(t, "a", function () {
          return s;
        }),
          n.d(t, "b", function () {
            return d;
          }),
          n.d(t, "c", function () {
            return l;
          });
        var r = n("q29p"),
          i = n.n(r);
        function a(e) {
          return (e < 10 ? "0" : "") + e;
        }
        var u = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
          c = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          o = function (e) {
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
          s = {
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
                i = +n[1] + t;
              return (
                i >= 60 && ((r += (i / 60) | 0), (i %= 60)),
                "".concat(a(r), ":").concat(a(i))
              );
            },
            businessTime: function (e, t) {
              var n,
                r = t.timeBucket,
                i = void 0 === r ? [] : r,
                a = t.timeSpan,
                u = void 0 === a ? "" : a,
                c = l.weekday(e);
              return (
                o(i).forEach(function (e) {
                  -1 !== e.weekdays.indexOf(c) &&
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
                r = o(t);
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
                i = e.getMonth(),
                a = t.getMonth();
              return n === r ? (i === a ? 0 : i > a ? 1 : -1) : n > r ? 1 : -1;
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
              return d.sameDay(s.today(), e);
            },
            isCurrentYear: function (e) {
              return s.today().getFullYear() === e.getFullYear();
            },
            maxDate: function (e, t) {
              return t > e ? t : e;
            },
            day: function (e, t) {
              return (
                (e = new Date(l.date(e))),
                (t = new Date(l.date(t))),
                d.date(e, t)
              );
            },
          },
          l = {
            padZero: a,
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
                .replace("mm", a(e.getMonth() + 1))
                .replace("dd", a(e.getDate()));
            },
            monthDay: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "yy月dd日";
              return t
                .replace("yy", a(e.getMonth() + 1))
                .replace("dd", a(e.getDate()));
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
                .replace("hh", a(e.getHours()))
                .replace("mm", a(e.getMinutes()))
                .replace("ss", a(e.getSeconds()));
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
                : i()(e, n);
            },
            weekday: function (e) {
              return c[e.getDay()];
            },
            advancedWeekday: function (e) {
              var t = s.today(),
                n = d.sameDay;
              return n(t, e)
                ? "今天"
                : n(s.plusDay(t), e)
                ? "明天"
                : l.weekday(e);
            },
          };
      },
      yS26: function (e, t, n) {
        n.d(t, "b", function () {
          return a;
        }),
          n.d(t, "a", function () {
            return u;
          });
        var r = n("US/N"),
          i =
            (n("7lfQ"),
            n("4kmb"),
            n("iKL5"),
            { skipKdtId: !0, skipShopInfo: !0 });
        function a(e) {
          var t = e.id ? "update" : "add";
          return Object(r.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/uic/contact/".concat(t, "Contact.json"),
            data: e,
            config: i,
          });
        }
        function u(e) {
          return Object(r.default)({
            origin: "cashier",
            withCredentials: !0,
            path: "/wsctrade/order/queryOrderLimit",
            method: "POST",
            data: e,
          });
        }
      },
    }
  )
);
