"use strict";
var r = require("~/r");
r(
  "TQtP",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "4kmb": function (e, t, n) {
        n.r(t),
          n.d(t, "ADDRESS_TYPE", function () {
            return i;
          }),
          n.d(t, "ADDRESS_SOURCE", function () {
            return r;
          }),
          n.d(t, "ADDRESS_POI_TYPE", function () {
            return a;
          });
        var i = { INPUT: 1, POI: 2 },
          r = { YOUZAN: 1, WECHAT: 2 },
          a = { QQ: 1, BAIDU: 2, AMAP: 3 };
      },
      "5Mqe": function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            if (!(0, r.default)(e)) return [];
            return e.reduce(function (e, t) {
              return (e = [].concat(e, t));
            }, []);
          });
        var i,
          r = (i = n("ajWA")) && i.__esModule ? i : { default: i };
        e.exports = t.default;
      },
      "60MT": function (e, t, n) {
        function i(e) {
          e = e.replace(/[^-|\d]/g, "");
          var t = /^((\+86)|(86))?(1)\d{10}$/.test(e),
            n = /^0[0-9\-]{10,13}$/.test(e),
            i = /^((\+852)|(852))?(5|6|8|9)\d{7}$/.test(e),
            r = /^((\+886)|(886)|(0))?9\d{2}-?\d{3}-?\d{3}$/.test(e);
          return t || n || i || r;
        }
        n.d(t, "a", function () {
          return i;
        });
      },
      "64Ju": function (e, t, n) {
        n.d(t, "d", function () {
          return w;
        }),
          n.d(t, "c", function () {
            return k;
          }),
          n.d(t, "b", function () {
            return x;
          }),
          n.d(t, "a", function () {
            return F;
          }),
          n.d(t, "e", function () {
            return s;
          });
        var i = n("eijD"),
          r = n("6CzD"),
          a = n("NthX"),
          c = n.n(a),
          o = n("ns2s");
        function s(e) {
          var t = e.deliveryTimeBucket,
            n = void 0 === t ? {} : t,
            i = e.timeBucket,
            r = n.startTime,
            a = n.endTime,
            c = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
            s = a && new Date(a + c),
            u = r && new Date(r + c);
          if (!s || !u || !i) return null;
          for (
            var l = !1,
              d = function () {
                var e = o.c.time(u);
                o.a.getBusinessTimesByTimeBucket(u, i).some(function (t) {
                  return 1 !== o.b.time(e, t.closeTime);
                })
                  ? (l = !0)
                  : ((u = o.a.plusDay(u)), o.a.resetTime(u));
              };
            !l && 1 !== o.b.date(u, s);

          )
            d();
          return { max: s, min: u };
        }
        var u = n("mK0O"),
          l = n("yS26");
        function d(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(n), !0).forEach(function (t) {
                  Object(u.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function h(e) {
          if (!e || null == e || !e.length) return [];
          var t = [];
          e.forEach(function (e) {
            var n = new Date(e.startDateStr),
              i = new Date(e.endDateStr);
            0 === o.b.date(n, i) &&
              t.push({
                date: e.startDateStr,
                suspendTime: [
                  { startTime: e.startTimeStr, endTime: e.endTimeStr },
                ],
              });
            var r = o.a.copy(n);
            do {
              t.push({
                date: o.c.date(r),
                suspendTime: [
                  { startTime: e.startTimeStr, endTime: e.endTimeStr },
                ],
              }),
                o.a.plusDay(r);
            } while (1 !== o.b.date(r, i));
          });
          var n = new Map();
          return t.reduce(function (e, t) {
            var i,
              a = n.get(t.date);
            return a
              ? ((i = a.suspendTime).push.apply(i, Object(r.a)(t.suspendTime)),
                e)
              : (n.set(t.date, t), e.push(t), e);
          }, []);
        }
        function m(e, t) {
          return e.suspendTime.reduce(function (e, t) {
            var n = [],
              i = t.startTime,
              r = t.endTime;
            return (
              e.forEach(function (e) {
                var t = e.openTime,
                  a = e.closeTime;
                1 === o.b.time(t, i) &&
                  (o.b.time(t, r) >= 0 && 1 === o.b.time(a, r) && n.push(e),
                  -1 === o.b.time(t, r) &&
                    1 === o.b.time(a, r) &&
                    n.push(f(f({}, e), {}, { openTime: r }))),
                  0 === o.b.time(t, i) &&
                    1 === o.b.time(a, r) &&
                    n.push(f(f({}, e), {}, { openTime: r })),
                  -1 === o.b.time(t, i) &&
                    ((-1 !== o.b.time(a, i) && 0 !== o.b.time(a, i)) ||
                      n.push(e),
                    -1 === o.b.time(i, a) &&
                      -1 === o.b.time(a, r) &&
                      n.push(f(f({}, e), {}, { closeTime: i })),
                    0 === o.b.time(a, r) &&
                      n.push(f(f({}, e), {}, { closeTime: i })),
                    1 === o.b.time(a, r) &&
                      n.push(
                        f(f({}, e), {}, { closeTime: i }),
                        f(f({}, e), {}, { openTime: r })
                      ));
              }),
              n
            );
          }, t);
        }
        function p(e) {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = Object(i.a)(
            c.a.mark(function e(t) {
              var n, i, a, s, u, d, h, m, p, v;
              return c.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.bizType),
                          (i = t.offlineId),
                          (a = t.dispatchWarehouseId),
                          (s = t.timeOptions),
                          (u = t.timeSpan),
                          (d = []),
                          (h = s.filter(function (e) {
                            return e.value.instantTimePoint;
                          })),
                          (m = s.filter(function (e) {
                            return !e.value.instantTimePoint;
                          })).forEach(function (e, t) {
                            if (!e.disabled) {
                              var i = e.value,
                                r = i.startTime,
                                a = i.endTime;
                              1 === n &&
                                "day" === u &&
                                ((r = o.c.date(new Date(r)) + " 00:00:00"),
                                (a = o.c.date(new Date(a)) + " 23:59:00")),
                                d.push({ startTime: r, endTime: a, index: t });
                            }
                          }),
                          (e.prev = 5),
                          (e.next = 8),
                          Object(l.a)({
                            bizType: n,
                            offlineId: i,
                            dispatchWarehouseId: a,
                            timeBucketList: d,
                          })
                        );
                      case 8:
                        return (
                          (p = e.sent),
                          (v = !0),
                          p.forEach(function (e) {
                            var t = e.index;
                            0 === t && e.full && (v = !1),
                              (m[t] = f(
                                f({}, m[t]),
                                {},
                                {
                                  text: m[t].text + (e.full ? "  已约满" : ""),
                                  disabled: !!e.full,
                                  value: f(
                                    f({}, m[t].value),
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
                            [].concat(Object(r.a)(v ? h : []), Object(r.a)(m))
                          )
                        );
                      case 14:
                        return (
                          (e.prev = 14),
                          (e.t0 = e.catch(5)),
                          e.abrupt("return", s)
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
        var y = {
          morning: { text: "上午", startTime: "00:00:00", endTime: "11:59:00" },
          afternoon: {
            text: "下午",
            startTime: "12:00:00",
            endTime: "17:59:00",
          },
          evening: { text: "晚上", startTime: "18:00:00", endTime: "23:59:00" },
        };
        function T(e, t, n, i, r) {
          var a,
            c,
            s = y[e],
            u = !1;
          n.length &&
            n.forEach(function (e) {
              o.b.time(e.openTime, s.endTime) < 0 &&
                o.b.time(e.closeTime, s.startTime) > 0 &&
                (1 === o.b.date(t, i.min) ||
                  o.b.time(o.c.time(t), s.endTime) < 1) &&
                (u = !0);
            });
          var l = h(
            null == r ||
              null === (a = r.deliveryTimeBucket) ||
              void 0 === a ||
              null === (c = a.suspendTime) ||
              void 0 === c
              ? void 0
              : c.suspendTimeBuckets
          );
          if (u && (null == l ? void 0 : l.length) > 0) {
            var d = l.find(function (e) {
              return o.b.sameDay(t, new Date(e.date));
            });
            if (d)
              m(d, [{ openTime: s.startTime, closeTime: s.endTime }]).length ||
                (u = !1);
          }
          var f = o.c.date(t),
            p = o.c.advancedWeekday(t),
            v = "".concat(o.c.monthDay(t), " ").concat(s.text),
            T = ""
              .concat(o.c.monthDay(t, "yy-dd"), " (")
              .concat(p, ") ")
              .concat(s.text);
          return (
            o.b.isCurrentYear(t) ||
              ((v = t.getFullYear() + "年" + v),
              (T = t.getFullYear() + "年" + T)),
            {
              text: s.text,
              id: v,
              value: {
                text: v,
                textWithWeekday: T,
                startTime: f + " " + s.startTime,
                endTime: f + " " + s.endTime,
              },
              disabled: !u,
            }
          );
        }
        function g(e, t, n) {
          var i = o.a.businessTime(e, t);
          if (!i) return !0;
          var r = n.min,
            a = n.max;
          if ("meal" !== t.timeSpan)
            return -1 === o.b.day(e, r) || 1 === o.b.day(e, a);
          var c = t.timeBucket.some(function (e) {
              return o.b.time(e.closeTime, y.evening.startTime) > 0;
            }),
            s = y.morning.startTime,
            u = c ? y.evening.endTime : y.afternoon.endTime;
          return !(
            o.b.time(i.openTime, u) < 0 &&
            o.b.time(i.closeTime, s) > 0 &&
            (1 === o.b.date(e, r) || o.b.time(o.c.time(e), u) < 1)
          );
        }
        function b(e, t) {
          var n = t.min,
            i = t.max,
            r = [];
          if (!t || 1 === o.b.date(n, i)) return r;
          var a = o.a.copy(n);
          do {
            var c = o.c.advancedWeekday(a);
            r.push({
              text: ["今天", "明天"].includes(c)
                ? "".concat(c, "（").concat(o.c.weekday(a), "）")
                : "".concat(o.c.monthDay(a, "yy-dd"), "（").concat(c, "）"),
              id: a.getTime(),
              disabled: g(a, e, t),
              children: [],
            }),
              o.a.plusDay(a),
              o.a.resetTime(a);
          } while (1 !== o.b.date(a, i));
          return r;
        }
        function S(e, t, n) {
          switch (t.timeSpan) {
            case "day":
              return (function (e, t, n) {
                var i, r;
                if (g(e, t, n)) return [];
                var a = o.a.businessTime(e, t) || {},
                  c = h(
                    null == t ||
                      null === (i = t.deliveryTimeBucket) ||
                      void 0 === i ||
                      null === (r = i.suspendTime) ||
                      void 0 === r
                      ? void 0
                      : r.suspendTimeBuckets
                  );
                if ((null == c ? void 0 : c.length) > 0) {
                  var s = c.find(function (t) {
                    return o.b.sameDay(e, new Date(t.date));
                  });
                  if (s)
                    if (
                      !m(s, [
                        {
                          openTime:
                            o.b.sameDay(e, new Date(Date.now())) &&
                            -1 === o.b.time(a.openTime, o.a.time(Date.now()))
                              ? o.a.time(Date.now())
                              : a.openTime,
                          closeTime: a.closeTime,
                        },
                      ]).length
                    )
                      return [];
                }
                var u = o.c.date(e),
                  l = o.c.monthDay(e),
                  d = o.c.advancedWeekday(e),
                  f = "".concat(o.c.monthDay(e, "yy-dd"), " (").concat(d, ")");
                return (
                  o.b.isCurrentYear(e) ||
                    ((l = e.getFullYear() + "年" + l),
                    (f = e.getFullYear() + "年" + f)),
                  [
                    {
                      id: l,
                      text: "全天",
                      value: {
                        text: l,
                        textWithWeekday: f,
                        startTime: u + " " + a.openTime + ":00",
                        endTime: u + " " + a.closeTime + ":00",
                      },
                    },
                  ]
                );
              })(e, t, n);
            case "meal":
              return (function (e, t, n) {
                if (!n) return [];
                var i = o.a.getBusinessTimesByTimeBucket(e, t.timeBucket),
                  r = t.timeBucket.some(function (e) {
                    return o.b.time(e.closeTime, y.evening.startTime) > 0;
                  }),
                  a = [T("morning", e, i, n, t), T("afternoon", e, i, n, t)];
                return (
                  r && a.push(T("evening", e, i, n, t)),
                  a.filter(function (e) {
                    return !e.disabled;
                  })
                );
              })(e, t, n);
            default:
              return (function (e, t, n) {
                var i,
                  a,
                  c,
                  s = [];
                if (!e) return s;
                var u = "00:00:00";
                if (n.min && o.b.sameDay(n.min, e)) {
                  var l = o.c.time(n.min, "hh:mm:ss");
                  1 === o.b.fullTime(l, u) && (u = l);
                }
                var d = o.a.getBusinessTimesByTimeBucket(e, t.timeBucket);
                if (!d.length) return s;
                var f = h(
                  null == t ||
                    null === (i = t.deliveryTimeBucket) ||
                    void 0 === i ||
                    null === (a = i.suspendTime) ||
                    void 0 === a
                    ? void 0
                    : a.suspendTimeBuckets
                );
                if (f.length > 0) {
                  var p = f.find(function (t) {
                    return o.b.sameDay(e, new Date(t.date));
                  });
                  if (p) {
                    var v = m(p, d);
                    d = Object(r.a)(v);
                  }
                }
                var y = { halfhour: 30, hour: 60, "2hour": 120 },
                  T = null !== (c = y[t.timeSpan]) && void 0 !== c ? c : y.hour;
                return (
                  d.forEach(function (t) {
                    var i,
                      r = t.openTime,
                      a = t.closeTime,
                      c = r;
                    if (-1 === o.b.time(r, a))
                      for (; -1 === o.b.time(c, a); ) {
                        var l = c;
                        c = o.a.addTime(c, T);
                        var d = 1 === o.b.time(c, a) ? a : c,
                          f =
                            o.b.fullTime(
                              (i = d).indexOf(":") === i.lastIndexOf(":")
                                ? "".concat(i, ":00")
                                : i,
                              u
                            ) < 0 ||
                            (n.max && 1 === o.b.date(e, n.max)),
                          h = o.c.date(e),
                          m = o.c.advancedWeekday(e),
                          p = "".concat(l, "-").concat(d),
                          v = "".concat(o.c.monthDay(e), " ").concat(p),
                          y = ["今天", "明天"].includes(m)
                            ? "".concat(m).concat(p)
                            : ""
                                .concat(o.c.monthDay(e, "yy-dd"), " (")
                                .concat(m, ") ")
                                .concat(p);
                        o.b.isCurrentYear(e) ||
                          ((v = e.getFullYear() + "年" + v),
                          (y = e.getFullYear() + "年" + y)),
                          s.push({
                            id: v,
                            text: "".concat(p),
                            disabled: f,
                            value: {
                              text: v,
                              textWithWeekday: y,
                              startTime: h + " " + l + ":00",
                              endTime: h + " " + d + ":00",
                            },
                          });
                      }
                  }),
                  s.filter(function (e) {
                    return !e.disabled;
                  })
                );
              })(e, t, n);
          }
        }
        function w(e) {
          return O.apply(this, arguments);
        }
        function O() {
          return (O = Object(i.a)(
            c.a.mark(function e(t) {
              var n, i, a, s, u, l, d, f, h, m, v, y, T, g, b, w, O, k, D, x;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = t.bizType),
                        (a = t.offlineId),
                        (s = t.dispatchWarehouseId),
                        (u = t.day),
                        (l = t.isFirstDay),
                        (d = t.config),
                        (f = t.range),
                        (h = t.needFill),
                        (m = void 0 === h || h),
                        (v = t.isCalcLimit),
                        (y = void 0 === v || v),
                        (T = d.instantTimePoint),
                        (g = d.showAutoSelfTakeTime),
                        (b = void 0 !== g && g),
                        (w = d.timeSpan),
                        (O = 60 * (new Date().getTimezoneOffset() + 480) * 1e3),
                        (k = o.c.dateTime(new Date(T))),
                        (D = ""
                          .concat(b ? "立即自提" : "尽快送达", "（预计 ")
                          .concat(o.c.time(new Date(T + O)), "）")),
                        !y)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 8),
                        p({
                          bizType: i,
                          offlineId: a,
                          dispatchWarehouseId: s,
                          timeOptions: S(new Date(u.id), d, f),
                          timeSpan: w,
                        })
                      );
                    case 8:
                      (e.t0 = e.sent), (e.next = 12);
                      break;
                    case 11:
                      e.t0 = S(new Date(u.id), d, f);
                    case 12:
                      if (
                        ((x = e.t0),
                        !l ||
                          !T ||
                          (null !== (n = x[0]) && void 0 !== n && n.disabled))
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        b && x.shift(),
                        e.abrupt(
                          "return",
                          [
                            {
                              text: D,
                              id: k,
                              value: {
                                text: k,
                                textWithWeekday: D,
                                instantTimePoint: T,
                                startTime: null,
                                endTime: null,
                              },
                            },
                          ].concat(Object(r.a)(x))
                        )
                      );
                    case 16:
                      return e.abrupt(
                        "return",
                        m && 0 === x.length
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
        function k(e, t, n, i) {
          return D.apply(this, arguments);
        }
        function D() {
          return (D = Object(i.a)(
            c.a.mark(function e(t, n, i, r) {
              var a, o, s, u, l, d, f, h, m;
              return c.a.wrap(function (e) {
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
                        (o = n.max),
                        (s = r.bizType),
                        (u = r.offlineId),
                        (l = r.dispatchWarehouseId),
                        864e5,
                        o.getTime() - a.getTime() > 864e5 * i &&
                          (o = new Date(a.getTime() + 864e5 * i)),
                        (d = b(t, { min: a, max: o })),
                        (f = 0);
                    case 8:
                      if (!(f < d.length)) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (h = d[f]),
                        (e.next = 12),
                        w({
                          bizType: s,
                          offlineId: u,
                          dispatchWarehouseId: l,
                          day: h,
                          isFirstDay: 0 === f,
                          config: t,
                          range: n,
                          needFill: !1,
                          isCalcLimit: 0 === f,
                        })
                      );
                    case 12:
                      (m = e.sent),
                        (h.children = m),
                        (h.disabled = h.disabled || 0 === m.length);
                    case 15:
                      f++, (e.next = 8);
                      break;
                    case 18:
                      return e.abrupt("return", d);
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
              i = t.max,
              r = [];
            if (!t || 1 === o.b.date(n, i)) return r;
            var a = o.a.copy(n);
            do {
              var c = new Date(
                  a.getFullYear(),
                  a.getMonth() + 1,
                  0,
                  23,
                  59,
                  59
                ),
                s = b(e, { min: a, max: o.b.date(i, c) > 0 ? c : i });
              r.push({
                text: o.c.yearMonth(a),
                disabled: s.every(function (e) {
                  return e.disabled;
                }),
                id: a.getTime(),
                children: s,
              }),
                a.setDate(1),
                a.setMonth(a.getMonth() + 1),
                o.a.resetTime(a);
            } while (1 !== o.b.month(a, i));
            return r;
          })(e, t);
        }
        function F(e) {
          var t = s(e);
          if (!t || t.max < t.min) return null;
          var n = (b(e, t) || []).find(function (e) {
            return !e.disabled && e.text;
          });
          return null == n
            ? null
            : (S(new Date(n.id), e, t) || []).find(function (e) {
                return !e.disabled;
              });
        }
      },
      "6CzD": function (e, t, n) {
        n.d(t, "a", function () {
          return a;
        });
        var i = n("YZeP");
        var r = n("TJjZ");
        function a(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Object(i.a)(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            Object(r.a)(e) ||
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
          return r;
        });
        var i = n("9ZMt");
        t.b = function (e) {
          return new Promise(function (t, n) {
            i.default.$native.getSetting({
              success: function (r) {
                r.authSetting[e]
                  ? t()
                  : i.default.$native.authorize({
                      scope: e,
                      success: t,
                      fail: n,
                    });
              },
              fail: n,
            });
          });
        };
        var r = function (e) {
          return new Promise(function (t, n) {
            i.default.$native.getSetting({
              success: function (n) {
                n.authSetting[e] ? t(!0) : t(!1);
              },
              fail: n,
            });
          });
        };
      },
      ADTe: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        });
        var i = [
          "country",
          "province",
          "city",
          "county",
          "community",
          "addressDetail",
          "address_detail",
          "houseNumber",
        ];
        function r(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : i.length,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            a = i.slice(t, n);
          return (
            e[a[1]] && e[a[1]] === e[a[2]] && a.splice(1, 1),
            "中国" === e[a[0]] && a.shift(),
            a
              .filter(function (t) {
                return e[t];
              })
              .map(function (t) {
                return e[t];
              })
              .join(r)
          );
        }
      },
      TJjZ: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        });
        var i = n("YZeP");
        function r(e, t) {
          if (e) {
            if ("string" == typeof e) return Object(i.a)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Object(i.a)(e, t)
                : void 0
            );
          }
        }
      },
      TQtP: function (e, t, n) {
        n.r(t);
        var i = n("eijD"),
          r = n("Fcif"),
          a = n("9ZMt"),
          c = n("AGZf"),
          o = n("YeA1"),
          s = n("QBqv"),
          u = n("pMRe"),
          l = n("60MT"),
          d = n("VmHG"),
          f = n("ADTe"),
          h = n("haJi"),
          m = n("64Ju"),
          p = n("xeEc"),
          v = {
            props: { showAddressTab: Boolean },
            data() {
              return Object(r.a)(
                {
                  showContactList: !1,
                  showTimePicker: !1,
                  contact: { list: [] },
                  isRetailOrderScene: !1,
                  retailSelfFetchContact: {},
                  initContactList: !1,
                  selfFetch: {},
                  isScanCodeBuy: !1,
                  retailPhoneErrorMsg: "",
                },
                Object(d.d)(this, ["selfFetchShop", "themeTag"])
              );
            },
            logicData: () => ({ expressType: "", display: {}, periodBuy: {} }),
            computed: {
              showSelfFetchTime() {
                var e, t, n, i;
                return this.isRetailOrderScene
                  ? !(
                      (null != (n = this.periodBuy) && n.info) ||
                      (null != (i = this.periodBuy) && i.planTime) ||
                      (!this.canSelectSelfFetchTime && this.selfFetch.shop)
                    )
                  : !(
                      (null != (e = this.periodBuy) && e.info) ||
                      (null != (t = this.periodBuy) && t.planTime)
                    );
              },
              show() {
                return (
                  this.selfFetch.isAllow &&
                  "self-fetch" === this.expressType &&
                  !this.isScanCodeBuy
                );
              },
              canSelectSelfFetchAddress() {
                var e,
                  t,
                  n =
                    null == (e = this.order) || null == (t = e.seller)
                      ? void 0
                      : t.storeId;
                return this.display.openSelfFetchSwitch || !n;
              },
              selfFetchShopStringFormat() {
                return Object(f.a)(this.selfFetchShop);
              },
              selfFetchContactStringFormat() {
                var e,
                  t,
                  n = (null == (e = this.contact) ? void 0 : e.list) || [],
                  i = (null == (t = this.contact) ? void 0 : t.id) || "",
                  r = n.find((e) => e.id === i);
                if (r) return r.userName + " " + r.telephone;
                var { selfFetchContact: a } = this;
                return a
                  ? a.userName + " " + a.telephone
                  : n.length > 0
                  ? "选择提货人"
                  : "去创建提货人信息";
              },
              canSelectSelfFetchTime() {
                var { shop: e } = this.selfFetch;
                return (e && e.optionalSelfFetchTime) || !1;
              },
              selfFetchTimeStringFormat() {
                var { time: e, shop: t, timeWithWeekday: n } = this.selfFetch;
                return e && n
                  ? n || e
                  : !this.canSelectSelfFetchTime && t
                  ? "请按约定时间提货"
                  : "请选择提货时间";
              },
              useGeneralClass() {
                var { time: e, timeWithWeekday: t } = this.selfFetch;
                return e && t
                  ? "self-fetch__fetch-time"
                  : "self-fetch__fetch-time--general";
              },
            },
            watch: {
              expressType: {
                immediate: !0,
                handler(e) {
                  "self-fetch" !== e ||
                    this.isScanCodeBuy ||
                    this.pickDefaultSelfFetch();
                },
              },
            },
            created() {
              var e = this;
              Object(o.b)(this, [
                "display",
                "expressType",
                "contact",
                "kdtId",
                "isRetailOrderScene",
                "retailSelfFetchContact",
                "selfFetch",
                "periodBuy",
                "order",
                "goods",
                "isScanCodeBuy",
                "shop",
              ]),
                this.ctx.process.define(
                  "validateSelfFetch",
                  this.validateSelfFetch.bind(this)
                ),
                this.ctx.process.define(
                  "changeSelfFetchShop",
                  (function () {
                    var t = Object(i.a)(function* (t, n) {
                      yield e.changeShop(t, n);
                    });
                    return function (e, n) {
                      return t.apply(this, arguments);
                    };
                  })()
                ),
                this.ctx.process.define(
                  "setSelfFetchTime",
                  (function () {
                    var t = Object(i.a)(function* (t) {
                      yield e.setSelfFetchTime(t);
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                ),
                this.mapActions(),
                Object(o.d)(this, {
                  "trade-buy-core:validate-effect": (e) => {
                    var { type: t } = e;
                    switch (t) {
                      case "validateSelfFetch:selectPoint":
                        this.onClickAddress();
                        break;
                      case "validateSelfFetch:selectTime":
                        this.onClickTime();
                    }
                  },
                });
            },
            mounted() {
              (this.route = this.$getPageRoute()),
                (this.query = this.$getPageQuery());
            },
            methods: {
              onClickAddress() {
                var e = this;
                return Object(i.a)(function* () {
                  var t, n, i;
                  if (e.canSelectSelfFetchAddress) {
                    yield e.ctx.cloud.invoke("beforeSelfFetchListGoto");
                    var r = e.ctx.lambdas.setDb({
                        selfFetch: e.selfFetch,
                        shop: { kdtId: e.shop.kdtId || e.kdtId },
                        goods: e.goods,
                        crossStoreFetch:
                          e.display.openCrossStoreSelfFetchSwitch,
                        bookKey:
                          (null == (t = e.query) ? void 0 : t.bookKey) ||
                          (null == (n = e.query) ? void 0 : n.book_key),
                        buyerMsg:
                          (null == (i = e.order) ? void 0 : i.buyerMsg) || "",
                        contact: e.contact,
                        route: e.route,
                        query: e.query,
                      }),
                      { isRetailOrderScene: c } = e.ctx.data,
                      o =
                        "/packages/trade-buy-subpage/order/self-fetch-address/index?dbid=" +
                        r;
                    c && (o += "&isRetailOrderScene=" + +c),
                      a.default.navigate({ url: o, type: "navigateTo" }),
                      e.ctx.lambdas.onEventOnce(
                        "select-self-fetch-address",
                        (t, n) => {
                          e.ctx.logger &&
                            e.ctx.logger.log({
                              et: "custom",
                              ei: "trade_buy_set_self_fetch_address",
                              en: "切换自提点",
                              pt: "trade",
                              params: {
                                desc: JSON.stringify({ shop: t, params: n }),
                              },
                            }),
                            e.changeShop(t, n);
                        }
                      );
                  }
                })();
              },
              changeShop(e, t) {
                if (this.selfFetchShop.id !== e.id)
                  if (null != t && t.bookKey) {
                    var { redirectUrl: n } = t;
                    setTimeout(() => {
                      a.default.navigate({ url: n, type: "reLaunch" });
                    }, 0);
                  } else {
                    var i = {
                      shop: e,
                      cityCode: e.countyId,
                      cityName: e.city,
                      time: "",
                      selfFetchStartTime: "",
                      selfFetchEndTime: "",
                    };
                    e.optionalSelfFetchTime
                      ? this.setSelfFetchTime(e, i)
                      : this.ctx.process.invoke("setSelfFetch", i);
                  }
              },
              setSelfFetchTime(e, t) {
                var n = this;
                return Object(i.a)(function* () {
                  void 0 === t && (t = {});
                  var i = yield Object(s.b)(e);
                  n.ctx.process.invoke("setSelfFetch", Object(r.a)({}, t, i));
                })();
              },
              showSoldOutDialog(e) {
                var t = e.orderSoldStatus,
                  n = "";
                t === h.a.part
                  ? (n =
                      "订单部分商品在当前提货点缺货，此部分商品将不会购买下单")
                  : t === h.a.none &&
                    (n = "订单所有商品在当前提货点缺货，请重新选择商品下单"),
                  n && Object(c.a)(n);
              },
              onClickContact() {
                var e, t;
                (null == (e = this.contact) || null == (t = e.list)
                  ? void 0
                  : t.length) > 0
                  ? (this.initContactList || (this.initContactList = !0),
                    (this.showContactList = !0))
                  : this.onAddContact();
              },
              selectContact(e) {
                this.ctx.process.invoke("selectContact", e.id),
                  (this.showContactList = !1);
              },
              onEditContact(e) {
                var t =
                  "packages/trade-buy-subpage/order/contact/index?contactStr=" +
                  JSON.stringify(e) +
                  "&textRule=hidden_phone";
                try {
                  var { isRetailOrderScene: n, retailSelfFetchContact: i } =
                    this.ctx.data;
                  n &&
                    (t +=
                      "&isRetailOrderScene=" + +n + "&retailPhone=" + i.phone);
                } catch (e) {}
                a.default.navigate({ url: t, type: "navigateTo" }),
                  (this.showContactList = !1),
                  this.ctx.lambdas.onEventOnce("set_contact", (e) => {
                    var { method: t, contact: n } = e;
                    this.selectContact(n);
                  });
              },
              onAddContact() {
                var e =
                  "packages/trade-buy-subpage/order/contact/index?textRule=hidden_phone";
                try {
                  var { isRetailOrderScene: t, retailSelfFetchContact: n } =
                    this.ctx.data;
                  t &&
                    (e +=
                      "&isRetailOrderScene=" + +t + "&retailPhone=" + n.phone);
                } catch (e) {}
                a.default.navigate({ url: e, type: "navigateTo" }),
                  (this.showContactList = !1);
              },
              onCloseContactList() {
                this.showContactList = !1;
              },
              onClickTime() {
                if (this.canSelectSelfFetchTime) {
                  var { isRetailOrderScene: e } = this.ctx.data,
                    {
                      deliveryTimeBucket: {
                        startTime: t = "",
                        timeSpan: n = "",
                        deliveryConfig: i = {},
                      } = {},
                    } = this.selfFetch,
                    { autoBookSelfTakeTime: r } = i;
                  e &&
                    r === u.a.AUTO &&
                    ("hour" === n || "halfhour" === n) &&
                    t &&
                    new Date().getDate() === new Date(t).getDate() &&
                    ((this.selfFetch.instantTimePoint = t),
                    (this.selfFetch.showAutoSelfTakeTime = !0));
                  var a = Object(m.a)(this.selfFetch);
                  null != a
                    ? (this.showTimePicker = !0)
                    : (Object(c.a)("没有可选的自提时间"),
                      p.a.info("【clientProcessError】选择自提时间", {
                        config: JSON.stringify(this.selfFetch),
                        avaliableTime: JSON.stringify(a),
                      }));
                } else this.selfFetchShop.id || Object(c.a)("请先选择提货地址");
              },
              onCloseTimePicker() {
                this.showTimePicker = !1;
              },
              onTimePickerConfirm(e) {
                this.ctx.process.invoke("setSelfFetch", {
                  time: e.text,
                  timeWithWeekday: e.textWithWeekday,
                  selfFetchStartTime: e.startTime || "",
                  selfFetchEndTime: e.endTime || "",
                }),
                  this.onCloseTimePicker(),
                  this.ctx.logger &&
                    this.ctx.logger.log({
                      et: "custom",
                      ei: "trade_buy_set_self_fetch_time",
                      en: "切换自提时间",
                      pt: "trade",
                      params: { desc: JSON.stringify(e) },
                    });
              },
              getRetailPhone(e) {
                this.onChangeRetailPhone({ value: e });
              },
              onChangeRetailContact(e) {
                this.ctx.process.invoke("selectRetailContact", {
                  userName: e.value.trim(),
                });
              },
              onChangeRetailPhone(e) {
                this.ctx.process.invoke("selectRetailContact", {
                  phone: e.value,
                }),
                  (this.retailPhoneErrorMsg = "");
              },
              retailValidate() {
                var {
                  showName: e,
                  showPhone: t,
                  requirePhone: n,
                  phone: i,
                  name: r,
                } = this.retailSelfFetchContact;
                return e && !r
                  ? "请输入联系人"
                  : t && i && !Object(l.a)(i)
                  ? "请正确输入预留电话"
                  : n && !i
                  ? "请输入您的预留电话"
                  : void 0;
              },
              validateSelfFetch() {
                return new Promise((e, t) => {
                  var n;
                  if (
                    "self-fetch" === this.expressType &&
                    null != (n = this.display) &&
                    n.canSelfFetch
                  ) {
                    var { showName: i, showPhone: r } =
                      this.retailSelfFetchContact;
                    if (i ^ r || (this.isRetailOrderScene && !i && !r)) {
                      var o = this.retailValidate();
                      if (
                        "请正确输入预留电话" === o ||
                        "请输入您的预留电话" === o
                      )
                        return (
                          (this.retailPhoneErrorMsg = o),
                          a.default.$native
                            .pageScrollTo({ scrollTop: 0 })
                            .catch(() => {
                              Object(c.a)(o);
                            }),
                          void t(o)
                        );
                      if (o) return Object(c.a)(o), void t(o);
                    } else if (!this.contact.id)
                      return (
                        this.onClickContact(),
                        Object(c.a)("请选择提货人"),
                        void t("请选择提货人")
                      );
                    if (
                      this.isRetailOrderScene &&
                      !this.ctx.data.retailPickUpWayValue
                    ) {
                      return (
                        (this.ctx.data.showRetailPickUpWayErrorToast = !0),
                        a.default.$native
                          .pageScrollTo({ scrollTop: 0 })
                          .catch(() => {
                            Object(c.a)("请选择提货方式");
                          }),
                        Object(c.a)("请选择提货方式"),
                        void t("请选择提货方式")
                      );
                    }
                  }
                  (this.retailPhoneErrorMsg = ""), e(!0);
                });
              },
              mapActions() {
                Object(d.b)(this, ["pickDefaultSelfFetch"]);
              },
            },
          };
        t.default = a.default.component(v);
      },
      YZeP: function (e, t, n) {
        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
          return i;
        }
        n.d(t, "a", function () {
          return i;
        });
      },
      haJi: function (e, t, n) {
        t.a = { default: 0, full: 1, none: 2, part: 3 };
      },
      iKL5: function (e, t, n) {
        n.d(t, "a", function () {
          return i;
        });
        var i = function (e, t) {
          var n = (3e3 * Math.PI) / 180,
            i = e,
            r = t,
            a = Math.sqrt(i * i + r * r) + 2e-5 * Math.sin(r * n),
            c = Math.atan2(r, i) + 3e-6 * Math.cos(i * n);
          return {
            lng: (e = a * Math.cos(c) + 0.0065),
            lat: (t = a * Math.sin(c) + 0.006),
          };
        };
      },
      ns2s: function (e, t, n) {
        n.d(t, "a", function () {
          return u;
        }),
          n.d(t, "b", function () {
            return l;
          }),
          n.d(t, "c", function () {
            return d;
          });
        var i = n("q29p"),
          r = n.n(i);
        function a(e) {
          return (e < 10 ? "0" : "") + e;
        }
        var c = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
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
          u = {
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
              return d.time(new Date(e));
            },
            resetTime: function (e) {
              return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e;
            },
            maximizeDate: function (e) {
              return e.setHours(23), e.setMinutes(59), e.setSeconds(59), e;
            },
            addTime: function (e, t) {
              var n = e.split(":"),
                i = +n[0],
                r = +n[1] + t;
              return (
                r >= 60 && ((i += (r / 60) | 0), (r %= 60)),
                "".concat(a(i), ":").concat(a(r))
              );
            },
            businessTime: function (e, t) {
              var n,
                i = t.timeBucket,
                r = void 0 === i ? [] : i,
                a = t.timeSpan,
                c = void 0 === a ? "" : a,
                o = d.weekday(e);
              return (
                s(r).forEach(function (e) {
                  -1 !== e.weekdays.indexOf(o) &&
                    (n
                      ? "day" === c &&
                        (n = l.time(e.closeTime, n.closeTime) > 0 ? e : n)
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
                n = d.weekday(e),
                i = s(t);
              return i.filter(function (e) {
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
          l = {
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
                i = t.getFullYear(),
                r = e.getMonth(),
                a = t.getMonth();
              return n === i ? (r === a ? 0 : r > a ? 1 : -1) : n > i ? 1 : -1;
            },
            inBusiness: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n = d.weekday(e);
              return t.some(function (e) {
                return -1 !== e.weekdays.indexOf(n);
              });
            },
            isToday: function (e) {
              return l.sameDay(u.today(), e);
            },
            isCurrentYear: function (e) {
              return u.today().getFullYear() === e.getFullYear();
            },
            maxDate: function (e, t) {
              return t > e ? t : e;
            },
            day: function (e, t) {
              return (
                (e = new Date(d.date(e))),
                (t = new Date(d.date(t))),
                l.date(e, t)
              );
            },
          },
          d = {
            padZero: a,
            timeSpanToDate: function (e) {
              return new Date(e + c);
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
                : r()(e, n);
            },
            weekday: function (e) {
              return o[e.getDay()];
            },
            advancedWeekday: function (e) {
              var t = u.today(),
                n = l.sameDay;
              return n(t, e)
                ? "今天"
                : n(u.plusDay(t), e)
                ? "明天"
                : d.weekday(e);
            },
          };
      },
      xeEc: function (e, t, n) {
        var i,
          r = n("8mzt");
        i = r.a;
        var a = {
          info: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            this.log(e, t, n, "info");
          },
          error: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            this.log(e, t, n, "error");
          },
          log: function (e, t, n, r) {
            try {
              i.log({
                appName: "wsc-h5-trade",
                logIndex: "jserror_log",
                level: r,
                name: e,
                extra: n,
                message: "string" == typeof t ? t : JSON.stringify(t),
              });
            } catch (e) {}
          },
        };
        t.a = a;
      },
      yS26: function (e, t, n) {
        n.d(t, "b", function () {
          return a;
        }),
          n.d(t, "a", function () {
            return c;
          });
        var i = n("US/N"),
          r =
            (n("7lfQ"),
            n("4kmb"),
            n("iKL5"),
            { skipKdtId: !0, skipShopInfo: !0 });
        function a(e) {
          var t = e.id ? "update" : "add";
          return Object(i.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/uic/contact/".concat(t, "Contact.json"),
            data: e,
            config: r,
          });
        }
        function c(e) {
          return Object(i.default)({
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
