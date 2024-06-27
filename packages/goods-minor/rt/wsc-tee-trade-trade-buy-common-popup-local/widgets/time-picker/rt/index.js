"use strict";
var r = require("~/r");
r(
  "Jskw",
  Object.assign({}, require("~/v.js").modules, {
    "4kmb": function (e, t, n) {
      n.r(t),
        n.d(t, "ADDRESS_TYPE", function () {
          return i;
        }),
        n.d(t, "ADDRESS_SOURCE", function () {
          return a;
        }),
        n.d(t, "ADDRESS_POI_TYPE", function () {
          return r;
        });
      var i = { INPUT: 1, POI: 2 },
        a = { YOUZAN: 1, WECHAT: 2 },
        r = { QQ: 1, BAIDU: 2, AMAP: 3 };
    },
    "64Ju": function (e, t, n) {
      n.d(t, "d", function () {
        return D;
      }),
        n.d(t, "c", function () {
          return k;
        }),
        n.d(t, "b", function () {
          return I;
        }),
        n.d(t, "a", function () {
          return S;
        }),
        n.d(t, "e", function () {
          return d;
        });
      var i = n("eijD"),
        a = n("6CzD"),
        r = n("NthX"),
        u = n.n(r),
        c = n("ns2s");
      function d(e) {
        var t = e.deliveryTimeBucket,
          n = void 0 === t ? {} : t,
          i = e.timeBucket,
          a = n.startTime,
          r = n.endTime,
          u = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
          d = r && new Date(r + u),
          s = a && new Date(a + u);
        if (!d || !s || !i) return null;
        for (
          var o = !1,
            l = function () {
              var e = c.c.time(s);
              c.a.getBusinessTimesByTimeBucket(s, i).some(function (t) {
                return 1 !== c.b.time(e, t.closeTime);
              })
                ? (o = !0)
                : ((s = c.a.plusDay(s)), c.a.resetTime(s));
            };
          !o && 1 !== c.b.date(s, d);

        )
          l();
        return { max: d, min: s };
      }
      var s = n("mK0O"),
        o = n("yS26");
      function l(e, t) {
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
      function m(e) {
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
      function f(e) {
        if (!e || null == e || !e.length) return [];
        var t = [];
        e.forEach(function (e) {
          var n = new Date(e.startDateStr),
            i = new Date(e.endDateStr);
          0 === c.b.date(n, i) &&
            t.push({
              date: e.startDateStr,
              suspendTime: [
                { startTime: e.startTimeStr, endTime: e.endTimeStr },
              ],
            });
          var a = c.a.copy(n);
          do {
            t.push({
              date: c.c.date(a),
              suspendTime: [
                { startTime: e.startTimeStr, endTime: e.endTimeStr },
              ],
            }),
              c.a.plusDay(a);
          } while (1 !== c.b.date(a, i));
        });
        var n = new Map();
        return t.reduce(function (e, t) {
          var i,
            r = n.get(t.date);
          return r
            ? ((i = r.suspendTime).push.apply(i, Object(a.a)(t.suspendTime)), e)
            : (n.set(t.date, t), e.push(t), e);
        }, []);
      }
      function h(e, t) {
        return e.suspendTime.reduce(function (e, t) {
          var n = [],
            i = t.startTime,
            a = t.endTime;
          return (
            e.forEach(function (e) {
              var t = e.openTime,
                r = e.closeTime;
              1 === c.b.time(t, i) &&
                (c.b.time(t, a) >= 0 && 1 === c.b.time(r, a) && n.push(e),
                -1 === c.b.time(t, a) &&
                  1 === c.b.time(r, a) &&
                  n.push(m(m({}, e), {}, { openTime: a }))),
                0 === c.b.time(t, i) &&
                  1 === c.b.time(r, a) &&
                  n.push(m(m({}, e), {}, { openTime: a })),
                -1 === c.b.time(t, i) &&
                  ((-1 !== c.b.time(r, i) && 0 !== c.b.time(r, i)) || n.push(e),
                  -1 === c.b.time(i, r) &&
                    -1 === c.b.time(r, a) &&
                    n.push(m(m({}, e), {}, { closeTime: i })),
                  0 === c.b.time(r, a) &&
                    n.push(m(m({}, e), {}, { closeTime: i })),
                  1 === c.b.time(r, a) &&
                    n.push(
                      m(m({}, e), {}, { closeTime: i }),
                      m(m({}, e), {}, { openTime: a })
                    ));
            }),
            n
          );
        }, t);
      }
      function v(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(i.a)(
          u.a.mark(function e(t) {
            var n, i, r, d, s, l, f, h, v, p;
            return u.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.bizType),
                        (i = t.offlineId),
                        (r = t.dispatchWarehouseId),
                        (d = t.timeOptions),
                        (s = t.timeSpan),
                        (l = []),
                        (f = d.filter(function (e) {
                          return e.value.instantTimePoint;
                        })),
                        (h = d.filter(function (e) {
                          return !e.value.instantTimePoint;
                        })).forEach(function (e, t) {
                          if (!e.disabled) {
                            var i = e.value,
                              a = i.startTime,
                              r = i.endTime;
                            1 === n &&
                              "day" === s &&
                              ((a = c.c.date(new Date(a)) + " 00:00:00"),
                              (r = c.c.date(new Date(r)) + " 23:59:00")),
                              l.push({ startTime: a, endTime: r, index: t });
                          }
                        }),
                        (e.prev = 5),
                        (e.next = 8),
                        Object(o.a)({
                          bizType: n,
                          offlineId: i,
                          dispatchWarehouseId: r,
                          timeBucketList: l,
                        })
                      );
                    case 8:
                      return (
                        (v = e.sent),
                        (p = !0),
                        v.forEach(function (e) {
                          var t = e.index;
                          0 === t && e.full && (p = !1),
                            (h[t] = m(
                              m({}, h[t]),
                              {},
                              {
                                text: h[t].text + (e.full ? "  已约满" : ""),
                                disabled: !!e.full,
                                value: m(
                                  m({}, h[t].value),
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
                          [].concat(Object(a.a)(p ? f : []), Object(a.a)(h))
                        )
                      );
                    case 14:
                      return (
                        (e.prev = 14),
                        (e.t0 = e.catch(5)),
                        e.abrupt("return", d)
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
        afternoon: { text: "下午", startTime: "12:00:00", endTime: "17:59:00" },
        evening: { text: "晚上", startTime: "18:00:00", endTime: "23:59:00" },
      };
      function b(e, t, n, i, a) {
        var r,
          u,
          d = y[e],
          s = !1;
        n.length &&
          n.forEach(function (e) {
            c.b.time(e.openTime, d.endTime) < 0 &&
              c.b.time(e.closeTime, d.startTime) > 0 &&
              (1 === c.b.date(t, i.min) ||
                c.b.time(c.c.time(t), d.endTime) < 1) &&
              (s = !0);
          });
        var o = f(
          null == a ||
            null === (r = a.deliveryTimeBucket) ||
            void 0 === r ||
            null === (u = r.suspendTime) ||
            void 0 === u
            ? void 0
            : u.suspendTimeBuckets
        );
        if (s && (null == o ? void 0 : o.length) > 0) {
          var l = o.find(function (e) {
            return c.b.sameDay(t, new Date(e.date));
          });
          if (l)
            h(l, [{ openTime: d.startTime, closeTime: d.endTime }]).length ||
              (s = !1);
        }
        var m = c.c.date(t),
          v = c.c.advancedWeekday(t),
          p = "".concat(c.c.monthDay(t), " ").concat(d.text),
          b = ""
            .concat(c.c.monthDay(t, "yy-dd"), " (")
            .concat(v, ") ")
            .concat(d.text);
        return (
          c.b.isCurrentYear(t) ||
            ((p = t.getFullYear() + "年" + p),
            (b = t.getFullYear() + "年" + b)),
          {
            text: d.text,
            id: p,
            value: {
              text: p,
              textWithWeekday: b,
              startTime: m + " " + d.startTime,
              endTime: m + " " + d.endTime,
            },
            disabled: !s,
          }
        );
      }
      function T(e, t, n) {
        var i = c.a.businessTime(e, t);
        if (!i) return !0;
        var a = n.min,
          r = n.max;
        if ("meal" !== t.timeSpan)
          return -1 === c.b.day(e, a) || 1 === c.b.day(e, r);
        var u = t.timeBucket.some(function (e) {
            return c.b.time(e.closeTime, y.evening.startTime) > 0;
          }),
          d = y.morning.startTime,
          s = u ? y.evening.endTime : y.afternoon.endTime;
        return !(
          c.b.time(i.openTime, s) < 0 &&
          c.b.time(i.closeTime, d) > 0 &&
          (1 === c.b.date(e, a) || c.b.time(c.c.time(e), s) < 1)
        );
      }
      function g(e, t) {
        var n = t.min,
          i = t.max,
          a = [];
        if (!t || 1 === c.b.date(n, i)) return a;
        var r = c.a.copy(n);
        do {
          var u = c.c.advancedWeekday(r);
          a.push({
            text: ["今天", "明天"].includes(u)
              ? "".concat(u, "（").concat(c.c.weekday(r), "）")
              : "".concat(c.c.monthDay(r, "yy-dd"), "（").concat(u, "）"),
            id: r.getTime(),
            disabled: T(r, e, t),
            children: [],
          }),
            c.a.plusDay(r),
            c.a.resetTime(r);
        } while (1 !== c.b.date(r, i));
        return a;
      }
      function x(e, t, n) {
        switch (t.timeSpan) {
          case "day":
            return (function (e, t, n) {
              var i, a;
              if (T(e, t, n)) return [];
              var r = c.a.businessTime(e, t) || {},
                u = f(
                  null == t ||
                    null === (i = t.deliveryTimeBucket) ||
                    void 0 === i ||
                    null === (a = i.suspendTime) ||
                    void 0 === a
                    ? void 0
                    : a.suspendTimeBuckets
                );
              if ((null == u ? void 0 : u.length) > 0) {
                var d = u.find(function (t) {
                  return c.b.sameDay(e, new Date(t.date));
                });
                if (d)
                  if (
                    !h(d, [
                      {
                        openTime:
                          c.b.sameDay(e, new Date(Date.now())) &&
                          -1 === c.b.time(r.openTime, c.a.time(Date.now()))
                            ? c.a.time(Date.now())
                            : r.openTime,
                        closeTime: r.closeTime,
                      },
                    ]).length
                  )
                    return [];
              }
              var s = c.c.date(e),
                o = c.c.monthDay(e),
                l = c.c.advancedWeekday(e),
                m = "".concat(c.c.monthDay(e, "yy-dd"), " (").concat(l, ")");
              return (
                c.b.isCurrentYear(e) ||
                  ((o = e.getFullYear() + "年" + o),
                  (m = e.getFullYear() + "年" + m)),
                [
                  {
                    id: o,
                    text: "全天",
                    value: {
                      text: o,
                      textWithWeekday: m,
                      startTime: s + " " + r.openTime + ":00",
                      endTime: s + " " + r.closeTime + ":00",
                    },
                  },
                ]
              );
            })(e, t, n);
          case "meal":
            return (function (e, t, n) {
              if (!n) return [];
              var i = c.a.getBusinessTimesByTimeBucket(e, t.timeBucket),
                a = t.timeBucket.some(function (e) {
                  return c.b.time(e.closeTime, y.evening.startTime) > 0;
                }),
                r = [b("morning", e, i, n, t), b("afternoon", e, i, n, t)];
              return (
                a && r.push(b("evening", e, i, n, t)),
                r.filter(function (e) {
                  return !e.disabled;
                })
              );
            })(e, t, n);
          default:
            return (function (e, t, n) {
              var i,
                r,
                u,
                d = [];
              if (!e) return d;
              var s = "00:00:00";
              if (n.min && c.b.sameDay(n.min, e)) {
                var o = c.c.time(n.min, "hh:mm:ss");
                1 === c.b.fullTime(o, s) && (s = o);
              }
              var l = c.a.getBusinessTimesByTimeBucket(e, t.timeBucket);
              if (!l.length) return d;
              var m = f(
                null == t ||
                  null === (i = t.deliveryTimeBucket) ||
                  void 0 === i ||
                  null === (r = i.suspendTime) ||
                  void 0 === r
                  ? void 0
                  : r.suspendTimeBuckets
              );
              if (m.length > 0) {
                var v = m.find(function (t) {
                  return c.b.sameDay(e, new Date(t.date));
                });
                if (v) {
                  var p = h(v, l);
                  l = Object(a.a)(p);
                }
              }
              var y = { halfhour: 30, hour: 60, "2hour": 120 },
                b = null !== (u = y[t.timeSpan]) && void 0 !== u ? u : y.hour;
              return (
                l.forEach(function (t) {
                  var i,
                    a = t.openTime,
                    r = t.closeTime,
                    u = a;
                  if (-1 === c.b.time(a, r))
                    for (; -1 === c.b.time(u, r); ) {
                      var o = u;
                      u = c.a.addTime(u, b);
                      var l = 1 === c.b.time(u, r) ? r : u,
                        m =
                          c.b.fullTime(
                            (i = l).indexOf(":") === i.lastIndexOf(":")
                              ? "".concat(i, ":00")
                              : i,
                            s
                          ) < 0 ||
                          (n.max && 1 === c.b.date(e, n.max)),
                        f = c.c.date(e),
                        h = c.c.advancedWeekday(e),
                        v = "".concat(o, "-").concat(l),
                        p = "".concat(c.c.monthDay(e), " ").concat(v),
                        y = ["今天", "明天"].includes(h)
                          ? "".concat(h).concat(v)
                          : ""
                              .concat(c.c.monthDay(e, "yy-dd"), " (")
                              .concat(h, ") ")
                              .concat(v);
                      c.b.isCurrentYear(e) ||
                        ((p = e.getFullYear() + "年" + p),
                        (y = e.getFullYear() + "年" + y)),
                        d.push({
                          id: p,
                          text: "".concat(v),
                          disabled: m,
                          value: {
                            text: p,
                            textWithWeekday: y,
                            startTime: f + " " + o + ":00",
                            endTime: f + " " + l + ":00",
                          },
                        });
                    }
                }),
                d.filter(function (e) {
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
        return (w = Object(i.a)(
          u.a.mark(function e(t) {
            var n, i, r, d, s, o, l, m, f, h, p, y, b, T, g, D, w, k, O, I;
            return u.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((i = t.bizType),
                      (r = t.offlineId),
                      (d = t.dispatchWarehouseId),
                      (s = t.day),
                      (o = t.isFirstDay),
                      (l = t.config),
                      (m = t.range),
                      (f = t.needFill),
                      (h = void 0 === f || f),
                      (p = t.isCalcLimit),
                      (y = void 0 === p || p),
                      (b = l.instantTimePoint),
                      (T = l.showAutoSelfTakeTime),
                      (g = void 0 !== T && T),
                      (D = l.timeSpan),
                      (w = 60 * (new Date().getTimezoneOffset() + 480) * 1e3),
                      (k = c.c.dateTime(new Date(b))),
                      (O = ""
                        .concat(g ? "立即自提" : "尽快送达", "（预计 ")
                        .concat(c.c.time(new Date(b + w)), "）")),
                      !y)
                    ) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.next = 8),
                      v({
                        bizType: i,
                        offlineId: r,
                        dispatchWarehouseId: d,
                        timeOptions: x(new Date(s.id), l, m),
                        timeSpan: D,
                      })
                    );
                  case 8:
                    (e.t0 = e.sent), (e.next = 12);
                    break;
                  case 11:
                    e.t0 = x(new Date(s.id), l, m);
                  case 12:
                    if (
                      ((I = e.t0),
                      !o ||
                        !b ||
                        (null !== (n = I[0]) && void 0 !== n && n.disabled))
                    ) {
                      e.next = 16;
                      break;
                    }
                    return (
                      g && I.shift(),
                      e.abrupt(
                        "return",
                        [
                          {
                            text: O,
                            id: k,
                            value: {
                              text: k,
                              textWithWeekday: O,
                              instantTimePoint: b,
                              startTime: null,
                              endTime: null,
                            },
                          },
                        ].concat(Object(a.a)(I))
                      )
                    );
                  case 16:
                    return e.abrupt(
                      "return",
                      h && 0 === I.length
                        ? [{ id: "none", text: "暂停预约", disabled: !0 }]
                        : I
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
        return O.apply(this, arguments);
      }
      function O() {
        return (O = Object(i.a)(
          u.a.mark(function e(t, n, i, a) {
            var r, c, d, s, o, l, m, f, h;
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
                    (r = n.min),
                      (c = n.max),
                      (d = a.bizType),
                      (s = a.offlineId),
                      (o = a.dispatchWarehouseId),
                      864e5,
                      c.getTime() - r.getTime() > 864e5 * i &&
                        (c = new Date(r.getTime() + 864e5 * i)),
                      (l = g(t, { min: r, max: c })),
                      (m = 0);
                  case 8:
                    if (!(m < l.length)) {
                      e.next = 18;
                      break;
                    }
                    return (
                      (f = l[m]),
                      (e.next = 12),
                      D({
                        bizType: d,
                        offlineId: s,
                        dispatchWarehouseId: o,
                        day: f,
                        isFirstDay: 0 === m,
                        config: t,
                        range: n,
                        needFill: !1,
                        isCalcLimit: 0 === m,
                      })
                    );
                  case 12:
                    (h = e.sent),
                      (f.children = h),
                      (f.disabled = f.disabled || 0 === h.length);
                  case 15:
                    m++, (e.next = 8);
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
      function I(e, t) {
        return (function (e, t) {
          var n = t.min,
            i = t.max,
            a = [];
          if (!t || 1 === c.b.date(n, i)) return a;
          var r = c.a.copy(n);
          do {
            var u = new Date(r.getFullYear(), r.getMonth() + 1, 0, 23, 59, 59),
              d = g(e, { min: r, max: c.b.date(i, u) > 0 ? u : i });
            a.push({
              text: c.c.yearMonth(r),
              disabled: d.every(function (e) {
                return e.disabled;
              }),
              id: r.getTime(),
              children: d,
            }),
              r.setDate(1),
              r.setMonth(r.getMonth() + 1),
              c.a.resetTime(r);
          } while (1 !== c.b.month(r, i));
          return a;
        })(e, t);
      }
      function S(e) {
        var t = d(e);
        if (!t || t.max < t.min) return null;
        var n = (g(e, t) || []).find(function (e) {
          return !e.disabled && e.text;
        });
        return null == n
          ? null
          : (x(new Date(n.id), e, t) || []).find(function (e) {
              return !e.disabled;
            });
      }
    },
    "6CzD": function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var i = n("YZeP");
      var a = n("TJjZ");
      function r(e) {
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
          Object(a.a)(e) ||
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
        return a;
      });
      var i = n("9ZMt");
      t.b = function (e) {
        return new Promise(function (t, n) {
          i.default.$native.getSetting({
            success: function (a) {
              a.authSetting[e]
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
      var a = function (e) {
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
    Jskw: function (e, t, n) {
      n.r(t);
      var i = n("Fcif"),
        a = n("eijD"),
        r = n("YeA1"),
        u = n("ns2s"),
        c = n("64Ju"),
        d = n("xeEc");
      var s = {
          props: {
            show: Boolean,
            showTime: { type: Boolean, default: !0 },
            titles: Array,
            type: String,
            value: String,
            config: { type: Object, default: () => ({}) },
            tips: String,
          },
          data() {
            return {
              reportSkynet: null,
              initialShow: !1,
              mainActiveIndex: 1,
              activeId: this.value || "",
              columns: [],
              items: [],
              activeTab: 0,
              maxRow: 9,
              innerValue: "",
              themeColors: {},
              themeCSS: "",
            };
          },
          computed: {
            swiperTransform() {
              return "translateX(-" + 100 * this.activeTab + "%)";
            },
            contentHeight() {
              return this.tips ? "calc(100% - 40px)" : "100%";
            },
          },
          watch: {
            value(e) {
              this.activeId = e;
            },
            show: {
              handler(e) {
                e
                  ? ((this.reportSkynet = (function (e) {
                      try {
                        var t = Math.floor(9e5 * Math.random()) + 1e5,
                          n = (n, i) => {
                            e.env.getQueryAsync().then((e) => {
                              var a =
                                e.bookKey || e.book_key || "notFoundBookKey";
                              d.a.info(
                                "[bookKey:" + a + "]_[rand:" + t + "]_" + n,
                                i
                              );
                            });
                          };
                        return {
                          initBegin: (e) => {
                            n("TradeBuy TimePicker in init() begin", e);
                          },
                          initEnd: (e) => {
                            n("TradeBuy TimePicker in init() end", e);
                          },
                          updateColumnsBegin: (e) => {
                            n(
                              "TradeBuy TimePicker in updateColumns() begin",
                              e
                            );
                          },
                          updateColumnsEnd: (e) => {
                            n("TradeBuy TimePicker in updateColumns() end", e);
                          },
                        };
                      } catch (e) {
                        return {
                          initBegin: () => {},
                          initEnd: () => {},
                          updateColumnsBegin: () => {},
                          updateColumnsEnd: () => {},
                        };
                      }
                    })(this.ctx)),
                    !this.initialShow && (this.initialShow = !0),
                    this.displayTimer && clearTimeout(this.displayTimer),
                    this.init())
                  : (this.displayTimer = setTimeout(() => {
                      this.initialShow = !1;
                    }, 600));
              },
              immediate: !0,
            },
          },
          created() {
            Object(r.b)(this, ["themeColors", "themeCSS"]);
          },
          methods: {
            onBack() {
              this.activeTab -= 1;
            },
            getWarehouseId() {
              try {
                var e;
                return null ==
                  (e = JSON.parse(
                    this.ctx.data.extra.ATTR_DISPATCHER_WAREHOUSE_IDS
                  ).response.assignLocalWarehouseIds)
                  ? void 0
                  : e[0];
              } catch (e) {
                return this.ctx.data.kdtId;
              }
            },
            init() {
              var e = this;
              return Object(a.a)(function* () {
                var t,
                  n,
                  { config: a } = e;
                null == (t = e.reportSkynet) ||
                  t.initBegin({
                    dateString: new Date().toLocaleString(),
                    dateTime: Date.now(),
                    initConfig: a,
                  });
                var r = Object(c.e)(a);
                e.range = r;
                var u = Object(c.b)(a, r),
                  d = {
                    bizType: e.ctx.data.address.activeTab,
                    offlineId:
                      1 === e.ctx.data.address.activeTab
                        ? e.ctx.data.selfFetch.shop.id
                        : void 0,
                    dispatchWarehouseId:
                      1 === e.ctx.data.address.activeTab
                        ? e.ctx.data.selfFetch.shop.kdtId
                        : e.getWarehouseId(),
                  },
                  s = yield Object(c.c)(a, r, 7, Object(i.a)({}, d)),
                  o = JSON.parse(JSON.stringify(s[0] || {}));
                o.text = "";
                var l = s.length > 7;
                (e.activeTab = 0),
                  (e.items = l
                    ? [o].concat(s.slice(0, 7)).concat({ text: "更多日期" })
                    : [o].concat(s.slice(0, 7))),
                  null == (n = e.reportSkynet) ||
                    n.initEnd({
                      range: r,
                      months: u,
                      days: s,
                      daysPayload: d,
                      dayHide: o,
                      showMore: l,
                      activeTab: e.activeTab,
                      items: e.items,
                    }),
                  Array.isArray(u) && u.length && e.updateColumns(u);
              })();
            },
            getAvailableTime() {
              var { config: e } = this;
              return Object(c.a)(e);
            },
            updateColumns(e) {
              var t = this;
              return Object(a.a)(function* () {
                var n,
                  i,
                  { value: a } = t,
                  r = null,
                  d = null,
                  s = null,
                  o = null,
                  l = !a;
                if (
                  (null == (n = t.reportSkynet) ||
                    n.updateColumnsBegin({ months: e, isFirstDay: l }),
                  a)
                ) {
                  var [, m = new Date().getFullYear(), f, h] =
                      /(?:(\d+)年)?(\d+)月(\d+)日/.exec(a) || [],
                    v = new Date(m, f - 1, h);
                  e.some((e, t) =>
                    (e.children || []).some(
                      (n, i) =>
                        !!u.b.sameDay(v, new Date(n.id)) &&
                        ((r = e),
                        (d = t),
                        (s = n),
                        (o = i),
                        (l = 0 === t && 0 === i),
                        !0)
                    )
                  );
                }
                (null != r && null != s) ||
                  ((r = e.find((e) => !e.disabled) || {}),
                  (d = e.findIndex((e) => !e.disabled) || 0),
                  (s = (r.children || []).find((e) => !e.disabled) || {}),
                  (o = (r.children || []).findIndex((e) => !e.disabled) || 0)),
                  (s.children =
                    (yield Object(c.d)({
                      bizType: t.ctx.data.address.activeTab,
                      offlineId:
                        1 === t.ctx.data.address.activeTab
                          ? t.ctx.data.selfFetch.shop.id
                          : void 0,
                      dispatchWarehouseId:
                        1 === t.ctx.data.address.activeTab
                          ? t.ctx.data.selfFetch.shop.kdtId
                          : t.getWarehouseId(),
                      day: s,
                      isFirstDay: l,
                      config: t.config,
                      range: t.range,
                    })) || []),
                  0 === d || (1 === d && (o = e[0].children.length + o) < 7)
                    ? t.$set(t.items, o + 1, s)
                    : (t.activeTab = 1),
                  (t.mainActiveIndex = o + 1);
                var p =
                  s.children.find((e) => e.id === a) ||
                  s.children.find((e) => !e.disabled) ||
                  {};
                (t.innerValue = p.value), (t.activeId = p.id);
                var y = [
                    e.indexOf(r),
                    (r.children || []).indexOf(s),
                    s.children.map((e) => e.id).indexOf(a) ||
                      s.children.findIndex((e) => !e.disabled),
                  ],
                  b = [
                    { values: e, defaultIndex: y[0] },
                    { values: r.children || [], defaultIndex: y[1] },
                    { values: s.children, defaultIndex: y[2] },
                  ];
                (t.columns = b),
                  null == (i = t.reportSkynet) ||
                    i.updateColumnsEnd({
                      columns: b,
                      indexes: y,
                      availableMonth: r,
                      availableMonthIndex: d,
                      availableDay: s,
                      availableDayIndex: o,
                      isFirstDay: l,
                      availableTime: p,
                    }),
                  setTimeout(() => {
                    var { picker: e } = t.$refs;
                    e && e.setIndexes(y);
                  }, 100);
              })();
            },
            onPickerChange(e) {
              var { picker: t, value: n, index: i } = e;
              0 === i
                ? this.updateMonth(t, n[i])
                : 1 === i
                ? this.updateDay(t, n[i])
                : 2 === i && this.updateTime(t, n[i]);
            },
            updateMonth(e, t) {
              e.setColumnValues(1, t.children);
              var n = t.children.find((e) => !e.disabled);
              this.updateDay(e, n);
            },
            updateDay(e, t) {
              var n = this;
              return Object(a.a)(function* () {
                (t.children = yield Object(c.d)({
                  bizType: n.ctx.data.address.activeTab,
                  offlineId:
                    1 === n.ctx.data.address.activeTab
                      ? n.ctx.data.selfFetch.shop.id
                      : void 0,
                  dispatchWarehouseId:
                    1 === n.ctx.data.address.activeTab
                      ? n.ctx.data.selfFetch.shop.kdtId
                      : n.getWarehouseId(),
                  day: t,
                  isFirstDay:
                    0 === e.getColumnIndex(0) && 0 === e.getColumnIndex(1),
                  config: n.config,
                  range: n.range,
                })),
                  e.setColumnValues(2, t.children);
                var i = t.children.find((e) => !e.disabled) || {};
                n.updateTime(e, i);
                var { items: a } = n,
                  r = a.findIndex((e) => e.id === t.id);
                (r = -1 !== r ? r : 0), (n.mainActiveIndex = r);
              })();
            },
            updateTime(e, t) {
              (this.activeId = t.id), (this.innerValue = t.value);
            },
            onNavClick(e, t) {
              var n = this;
              void 0 === t && (t = !0);
              var { index: r } = e;
              if (8 !== r) {
                this.mainActiveIndex = r;
                var u = this.items[r],
                  { picker: d } = this.$refs,
                  s = d.getColumnValues(0),
                  o = d.getColumnValue(0),
                  l = [];
                -1 === this.parentIndexOfChild(o, u) &&
                  ((o = s.find((e) => this.parentIndexOfChild(e, u) > -1)),
                  l.push(d.setColumnIndex(0, s.indexOf(o))),
                  l.push(d.setColumnValues(1, o.children, !1)));
                var m = this.parentIndexOfChild(o, u);
                l.push(d.setColumnIndex(1, m)),
                  Promise.all(l)
                    .then(
                      Object(a.a)(function* () {
                        var e = yield Object(c.d)({
                          bizType: n.ctx.data.address.activeTab,
                          offlineId:
                            1 === n.ctx.data.address.activeTab
                              ? n.ctx.data.selfFetch.shop.id
                              : void 0,
                          dispatchWarehouseId:
                            1 === n.ctx.data.address.activeTab
                              ? n.ctx.data.selfFetch.shop.kdtId
                              : n.getWarehouseId(),
                          day: u,
                          isFirstDay:
                            0 === d.getColumnIndex(0) &&
                            0 === d.getColumnIndex(1),
                          config: n.config,
                          range: n.range,
                        });
                        (u.children = e),
                          n.$set(
                            n.items,
                            r,
                            Object(i.a)({}, u, { children: e })
                          );
                      })
                    )
                    .then(() => d.setColumnValues(2, u.children, !1))
                    .then(() => {
                      if (t) {
                        var e = u.children.find((e) => !e.disabled) || {};
                        this.onTreeSelectClickItem(e);
                      }
                    });
              } else this.activeTab = 1;
            },
            onTreeSelectClickItem(e) {
              0 === this.mainActiveIndex && this.onNavClick({ index: 1 }, !1),
                (this.activeId = e.id),
                (this.innerValue = e.value);
              var { picker: t } = this.$refs,
                { items: n, mainActiveIndex: i } = this,
                a = n[i],
                r = this.parentIndexOfChild(a, e);
              t.setColumnIndex(2, r);
            },
            parentIndexOfChild: (e, t) =>
              e.children.findIndex((e) => e.id === t.id),
            onConfirm() {
              var { innerValue: e } = this;
              this.$emit("confirm", e);
            },
            onClose(e) {
              this.$emit("close");
            },
          },
        },
        o = n("9ZMt");
      t.default = o.default.component(s);
    },
    TJjZ: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = n("YZeP");
      function a(e, t) {
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
    iKL5: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e, t) {
        var n = (3e3 * Math.PI) / 180,
          i = e,
          a = t,
          r = Math.sqrt(i * i + a * a) + 2e-5 * Math.sin(a * n),
          u = Math.atan2(a, i) + 3e-6 * Math.cos(i * n);
        return {
          lng: (e = r * Math.cos(u) + 0.0065),
          lat: (t = r * Math.sin(u) + 0.006),
        };
      };
    },
    ns2s: function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return l;
        });
      var i = n("q29p"),
        a = n.n(i);
      function r(e) {
        return (e < 10 ? "0" : "") + e;
      }
      var u = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
        c = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        d = function (e) {
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
              i = +n[0],
              a = +n[1] + t;
            return (
              a >= 60 && ((i += (a / 60) | 0), (a %= 60)),
              "".concat(r(i), ":").concat(r(a))
            );
          },
          businessTime: function (e, t) {
            var n,
              i = t.timeBucket,
              a = void 0 === i ? [] : i,
              r = t.timeSpan,
              u = void 0 === r ? "" : r,
              c = l.weekday(e);
            return (
              d(a).forEach(function (e) {
                -1 !== e.weekdays.indexOf(c) &&
                  (n
                    ? "day" === u &&
                      (n = o.time(e.closeTime, n.closeTime) > 0 ? e : n)
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
              i = d(t);
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
        o = {
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
              a = e.getMonth(),
              r = t.getMonth();
            return n === i ? (a === r ? 0 : a > r ? 1 : -1) : n > i ? 1 : -1;
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
            return o.sameDay(s.today(), e);
          },
          isCurrentYear: function (e) {
            return s.today().getFullYear() === e.getFullYear();
          },
          maxDate: function (e, t) {
            return t > e ? t : e;
          },
          day: function (e, t) {
            return (
              (e = new Date(l.date(e))), (t = new Date(l.date(t))), o.date(e, t)
            );
          },
        },
        l = {
          padZero: r,
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
              .replace("mm", r(e.getMonth() + 1))
              .replace("dd", r(e.getDate()));
          },
          monthDay: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "yy月dd日";
            return t
              .replace("yy", r(e.getMonth() + 1))
              .replace("dd", r(e.getDate()));
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
              .replace("hh", r(e.getHours()))
              .replace("mm", r(e.getMinutes()))
              .replace("ss", r(e.getSeconds()));
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
            return c[e.getDay()];
          },
          advancedWeekday: function (e) {
            var t = s.today(),
              n = o.sameDay;
            return n(t, e)
              ? "今天"
              : n(s.plusDay(t), e)
              ? "明天"
              : l.weekday(e);
          },
        };
    },
    xeEc: function (e, t, n) {
      var i,
        a = n("8mzt");
      i = a.a;
      var r = {
        info: function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          this.log(e, t, n, "info");
        },
        error: function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          this.log(e, t, n, "error");
        },
        log: function (e, t, n, a) {
          try {
            i.log({
              appName: "wsc-h5-trade",
              logIndex: "jserror_log",
              level: a,
              name: e,
              extra: n,
              message: "string" == typeof t ? t : JSON.stringify(t),
            });
          } catch (e) {}
        },
      };
      t.a = r;
    },
    yS26: function (e, t, n) {
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var i = n("US/N"),
        a =
          (n("7lfQ"),
          n("4kmb"),
          n("iKL5"),
          { skipKdtId: !0, skipShopInfo: !0 });
      function r(e) {
        var t = e.id ? "update" : "add";
        return Object(i.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "POST",
          path: "/wsctrade/uic/contact/".concat(t, "Contact.json"),
          data: e,
          config: a,
        });
      }
      function u(e) {
        return Object(i.default)({
          origin: "cashier",
          withCredentials: !0,
          path: "/wsctrade/order/queryOrderLimit",
          method: "POST",
          data: e,
        });
      }
    },
  })
);
