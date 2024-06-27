"use strict";
var r = require("~/r");
r(
  "tDP0",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+Q+L": function (e, t) {},
      "+ktP": function (e, t) {},
      "/d8j": function (e, t) {},
      "0+0Y": function (e, t) {},
      "0+jM": function (e, t) {},
      "0Iet": function (e, t) {},
      "1lCN": function (e, t) {},
      "1wqG": function (e, t) {},
      "2Ki6": function (e, t) {},
      "39St": function (e, t) {},
      "4IS5": function (e, t) {},
      "4Oq2": function (e, t, n) {
        n.d(t, "a", function () {
          return d;
        }),
          n.d(t, "b", function () {
            return l;
          });
        var i = n("9ZMt"),
          r = n("twMw"),
          u = n("NgLJ"),
          a = n.n(u),
          o = n("MLLI"),
          c = {
            bottom: 58,
            height: 32,
            left: 278,
            right: 365,
            top: 26,
            width: 87,
            canUseNav: !0,
          },
          s = { inited: !1, rectInfo: {} },
          f = function () {
            var e,
              t = r.a.statusBarHeight,
              n = void 0 === t ? 20 : t,
              u = r.a.isAndroid,
              o = r.a.SDKVersion,
              c = n + (u ? 48 : 44);
            try {
              e = i.default.$native.getMenuButtonBoundingClientRect();
            } catch (e) {}
            return (
              e || (e = Object.create(null)),
              o && (e.canUseNav = a()("2.5.2", o) < 1),
              (e.top = e.top || c),
              (s.rectInfo = e),
              (s.inited = !0),
              e
            );
          },
          d = Object.create(null);
        function l() {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = d.top,
            n = d.height,
            i = d.canUseNav,
            u = e ? r.a : Object(o.b)(),
            a = u.statusBarHeight,
            c = void 0 === a ? 20 : a,
            s = t - c + 6 + n + c,
            f = s <= 105 ? s : 105;
          return i ? f : 0;
        }
        Object.keys(c).forEach(function (e) {
          Object.defineProperty(d, e, {
            get: function () {
              if (!s.inited || (!s.rectInfo[e] && "canUseNav" !== e)) {
                var t = f()[e];
                return t || !1 === t ? t : (setTimeout(f, 300), c[e]);
              }
              return s.rectInfo[e];
            },
          });
        });
      },
      "4eZy": function (e, t) {},
      "4kmb": function (e, t, n) {
        n.r(t),
          n.d(t, "ADDRESS_TYPE", function () {
            return i;
          }),
          n.d(t, "ADDRESS_SOURCE", function () {
            return r;
          }),
          n.d(t, "ADDRESS_POI_TYPE", function () {
            return u;
          });
        var i = { INPUT: 1, POI: 2 },
          r = { YOUZAN: 1, WECHAT: 2 },
          u = { QQ: 1, BAIDU: 2, AMAP: 3 };
      },
      "4q4v": function (e, t) {},
      "5CZ0": function (e, t) {},
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
      "64Ju": function (e, t, n) {
        n.d(t, "d", function () {
          return D;
        }),
          n.d(t, "c", function () {
            return x;
          }),
          n.d(t, "b", function () {
            return I;
          }),
          n.d(t, "a", function () {
            return k;
          }),
          n.d(t, "e", function () {
            return c;
          });
        var i = n("eijD"),
          r = n("6CzD"),
          u = n("NthX"),
          a = n.n(u),
          o = n("ns2s");
        function c(e) {
          var t = e.deliveryTimeBucket,
            n = void 0 === t ? {} : t,
            i = e.timeBucket,
            r = n.startTime,
            u = n.endTime,
            a = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
            c = u && new Date(u + a),
            s = r && new Date(r + a);
          if (!c || !s || !i) return null;
          for (
            var f = !1,
              d = function () {
                var e = o.c.time(s);
                o.a.getBusinessTimesByTimeBucket(s, i).some(function (t) {
                  return 1 !== o.b.time(e, t.closeTime);
                })
                  ? (f = !0)
                  : ((s = o.a.plusDay(s)), o.a.resetTime(s));
              };
            !f && 1 !== o.b.date(s, c);

          )
            d();
          return { max: c, min: s };
        }
        var s = n("mK0O"),
          f = n("yS26");
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
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(n), !0).forEach(function (t) {
                  Object(s.a)(e, t, n[t]);
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
        function m(e) {
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
              u = n.get(t.date);
            return u
              ? ((i = u.suspendTime).push.apply(i, Object(r.a)(t.suspendTime)),
                e)
              : (n.set(t.date, t), e.push(t), e);
          }, []);
        }
        function h(e, t) {
          return e.suspendTime.reduce(function (e, t) {
            var n = [],
              i = t.startTime,
              r = t.endTime;
            return (
              e.forEach(function (e) {
                var t = e.openTime,
                  u = e.closeTime;
                1 === o.b.time(t, i) &&
                  (o.b.time(t, r) >= 0 && 1 === o.b.time(u, r) && n.push(e),
                  -1 === o.b.time(t, r) &&
                    1 === o.b.time(u, r) &&
                    n.push(l(l({}, e), {}, { openTime: r }))),
                  0 === o.b.time(t, i) &&
                    1 === o.b.time(u, r) &&
                    n.push(l(l({}, e), {}, { openTime: r })),
                  -1 === o.b.time(t, i) &&
                    ((-1 !== o.b.time(u, i) && 0 !== o.b.time(u, i)) ||
                      n.push(e),
                    -1 === o.b.time(i, u) &&
                      -1 === o.b.time(u, r) &&
                      n.push(l(l({}, e), {}, { closeTime: i })),
                    0 === o.b.time(u, r) &&
                      n.push(l(l({}, e), {}, { closeTime: i })),
                    1 === o.b.time(u, r) &&
                      n.push(
                        l(l({}, e), {}, { closeTime: i }),
                        l(l({}, e), {}, { openTime: r })
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
            a.a.mark(function e(t) {
              var n, i, u, c, s, d, m, h, p, v;
              return a.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.bizType),
                          (i = t.offlineId),
                          (u = t.dispatchWarehouseId),
                          (c = t.timeOptions),
                          (s = t.timeSpan),
                          (d = []),
                          (m = c.filter(function (e) {
                            return e.value.instantTimePoint;
                          })),
                          (h = c.filter(function (e) {
                            return !e.value.instantTimePoint;
                          })).forEach(function (e, t) {
                            if (!e.disabled) {
                              var i = e.value,
                                r = i.startTime,
                                u = i.endTime;
                              1 === n &&
                                "day" === s &&
                                ((r = o.c.date(new Date(r)) + " 00:00:00"),
                                (u = o.c.date(new Date(u)) + " 23:59:00")),
                                d.push({ startTime: r, endTime: u, index: t });
                            }
                          }),
                          (e.prev = 5),
                          (e.next = 8),
                          Object(f.a)({
                            bizType: n,
                            offlineId: i,
                            dispatchWarehouseId: u,
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
                              (h[t] = l(
                                l({}, h[t]),
                                {},
                                {
                                  text: h[t].text + (e.full ? "  已约满" : ""),
                                  disabled: !!e.full,
                                  value: l(
                                    l({}, h[t].value),
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
                            [].concat(Object(r.a)(v ? m : []), Object(r.a)(h))
                          )
                        );
                      case 14:
                        return (
                          (e.prev = 14),
                          (e.t0 = e.catch(5)),
                          e.abrupt("return", c)
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
        function g(e, t, n, i, r) {
          var u,
            a,
            c = y[e],
            s = !1;
          n.length &&
            n.forEach(function (e) {
              o.b.time(e.openTime, c.endTime) < 0 &&
                o.b.time(e.closeTime, c.startTime) > 0 &&
                (1 === o.b.date(t, i.min) ||
                  o.b.time(o.c.time(t), c.endTime) < 1) &&
                (s = !0);
            });
          var f = m(
            null == r ||
              null === (u = r.deliveryTimeBucket) ||
              void 0 === u ||
              null === (a = u.suspendTime) ||
              void 0 === a
              ? void 0
              : a.suspendTimeBuckets
          );
          if (s && (null == f ? void 0 : f.length) > 0) {
            var d = f.find(function (e) {
              return o.b.sameDay(t, new Date(e.date));
            });
            if (d)
              h(d, [{ openTime: c.startTime, closeTime: c.endTime }]).length ||
                (s = !1);
          }
          var l = o.c.date(t),
            p = o.c.advancedWeekday(t),
            v = "".concat(o.c.monthDay(t), " ").concat(c.text),
            g = ""
              .concat(o.c.monthDay(t, "yy-dd"), " (")
              .concat(p, ") ")
              .concat(c.text);
          return (
            o.b.isCurrentYear(t) ||
              ((v = t.getFullYear() + "年" + v),
              (g = t.getFullYear() + "年" + g)),
            {
              text: c.text,
              id: v,
              value: {
                text: v,
                textWithWeekday: g,
                startTime: l + " " + c.startTime,
                endTime: l + " " + c.endTime,
              },
              disabled: !s,
            }
          );
        }
        function b(e, t, n) {
          var i = o.a.businessTime(e, t);
          if (!i) return !0;
          var r = n.min,
            u = n.max;
          if ("meal" !== t.timeSpan)
            return -1 === o.b.day(e, r) || 1 === o.b.day(e, u);
          var a = t.timeBucket.some(function (e) {
              return o.b.time(e.closeTime, y.evening.startTime) > 0;
            }),
            c = y.morning.startTime,
            s = a ? y.evening.endTime : y.afternoon.endTime;
          return !(
            o.b.time(i.openTime, s) < 0 &&
            o.b.time(i.closeTime, c) > 0 &&
            (1 === o.b.date(e, r) || o.b.time(o.c.time(e), s) < 1)
          );
        }
        function T(e, t) {
          var n = t.min,
            i = t.max,
            r = [];
          if (!t || 1 === o.b.date(n, i)) return r;
          var u = o.a.copy(n);
          do {
            var a = o.c.advancedWeekday(u);
            r.push({
              text: ["今天", "明天"].includes(a)
                ? "".concat(a, "（").concat(o.c.weekday(u), "）")
                : "".concat(o.c.monthDay(u, "yy-dd"), "（").concat(a, "）"),
              id: u.getTime(),
              disabled: b(u, e, t),
              children: [],
            }),
              o.a.plusDay(u),
              o.a.resetTime(u);
          } while (1 !== o.b.date(u, i));
          return r;
        }
        function w(e, t, n) {
          switch (t.timeSpan) {
            case "day":
              return (function (e, t, n) {
                var i, r;
                if (b(e, t, n)) return [];
                var u = o.a.businessTime(e, t) || {},
                  a = m(
                    null == t ||
                      null === (i = t.deliveryTimeBucket) ||
                      void 0 === i ||
                      null === (r = i.suspendTime) ||
                      void 0 === r
                      ? void 0
                      : r.suspendTimeBuckets
                  );
                if ((null == a ? void 0 : a.length) > 0) {
                  var c = a.find(function (t) {
                    return o.b.sameDay(e, new Date(t.date));
                  });
                  if (c)
                    if (
                      !h(c, [
                        {
                          openTime:
                            o.b.sameDay(e, new Date(Date.now())) &&
                            -1 === o.b.time(u.openTime, o.a.time(Date.now()))
                              ? o.a.time(Date.now())
                              : u.openTime,
                          closeTime: u.closeTime,
                        },
                      ]).length
                    )
                      return [];
                }
                var s = o.c.date(e),
                  f = o.c.monthDay(e),
                  d = o.c.advancedWeekday(e),
                  l = "".concat(o.c.monthDay(e, "yy-dd"), " (").concat(d, ")");
                return (
                  o.b.isCurrentYear(e) ||
                    ((f = e.getFullYear() + "年" + f),
                    (l = e.getFullYear() + "年" + l)),
                  [
                    {
                      id: f,
                      text: "全天",
                      value: {
                        text: f,
                        textWithWeekday: l,
                        startTime: s + " " + u.openTime + ":00",
                        endTime: s + " " + u.closeTime + ":00",
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
                  u = [g("morning", e, i, n, t), g("afternoon", e, i, n, t)];
                return (
                  r && u.push(g("evening", e, i, n, t)),
                  u.filter(function (e) {
                    return !e.disabled;
                  })
                );
              })(e, t, n);
            default:
              return (function (e, t, n) {
                var i,
                  u,
                  a,
                  c = [];
                if (!e) return c;
                var s = "00:00:00";
                if (n.min && o.b.sameDay(n.min, e)) {
                  var f = o.c.time(n.min, "hh:mm:ss");
                  1 === o.b.fullTime(f, s) && (s = f);
                }
                var d = o.a.getBusinessTimesByTimeBucket(e, t.timeBucket);
                if (!d.length) return c;
                var l = m(
                  null == t ||
                    null === (i = t.deliveryTimeBucket) ||
                    void 0 === i ||
                    null === (u = i.suspendTime) ||
                    void 0 === u
                    ? void 0
                    : u.suspendTimeBuckets
                );
                if (l.length > 0) {
                  var p = l.find(function (t) {
                    return o.b.sameDay(e, new Date(t.date));
                  });
                  if (p) {
                    var v = h(p, d);
                    d = Object(r.a)(v);
                  }
                }
                var y = { halfhour: 30, hour: 60, "2hour": 120 },
                  g = null !== (a = y[t.timeSpan]) && void 0 !== a ? a : y.hour;
                return (
                  d.forEach(function (t) {
                    var i,
                      r = t.openTime,
                      u = t.closeTime,
                      a = r;
                    if (-1 === o.b.time(r, u))
                      for (; -1 === o.b.time(a, u); ) {
                        var f = a;
                        a = o.a.addTime(a, g);
                        var d = 1 === o.b.time(a, u) ? u : a,
                          l =
                            o.b.fullTime(
                              (i = d).indexOf(":") === i.lastIndexOf(":")
                                ? "".concat(i, ":00")
                                : i,
                              s
                            ) < 0 ||
                            (n.max && 1 === o.b.date(e, n.max)),
                          m = o.c.date(e),
                          h = o.c.advancedWeekday(e),
                          p = "".concat(f, "-").concat(d),
                          v = "".concat(o.c.monthDay(e), " ").concat(p),
                          y = ["今天", "明天"].includes(h)
                            ? "".concat(h).concat(p)
                            : ""
                                .concat(o.c.monthDay(e, "yy-dd"), " (")
                                .concat(h, ") ")
                                .concat(p);
                        o.b.isCurrentYear(e) ||
                          ((v = e.getFullYear() + "年" + v),
                          (y = e.getFullYear() + "年" + y)),
                          c.push({
                            id: v,
                            text: "".concat(p),
                            disabled: l,
                            value: {
                              text: v,
                              textWithWeekday: y,
                              startTime: m + " " + f + ":00",
                              endTime: m + " " + d + ":00",
                            },
                          });
                      }
                  }),
                  c.filter(function (e) {
                    return !e.disabled;
                  })
                );
              })(e, t, n);
          }
        }
        function D(e) {
          return O.apply(this, arguments);
        }
        function O() {
          return (O = Object(i.a)(
            a.a.mark(function e(t) {
              var n, i, u, c, s, f, d, l, m, h, v, y, g, b, T, D, O, x, S, I;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = t.bizType),
                        (u = t.offlineId),
                        (c = t.dispatchWarehouseId),
                        (s = t.day),
                        (f = t.isFirstDay),
                        (d = t.config),
                        (l = t.range),
                        (m = t.needFill),
                        (h = void 0 === m || m),
                        (v = t.isCalcLimit),
                        (y = void 0 === v || v),
                        (g = d.instantTimePoint),
                        (b = d.showAutoSelfTakeTime),
                        (T = void 0 !== b && b),
                        (D = d.timeSpan),
                        (O = 60 * (new Date().getTimezoneOffset() + 480) * 1e3),
                        (x = o.c.dateTime(new Date(g))),
                        (S = ""
                          .concat(T ? "立即自提" : "尽快送达", "（预计 ")
                          .concat(o.c.time(new Date(g + O)), "）")),
                        !y)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 8),
                        p({
                          bizType: i,
                          offlineId: u,
                          dispatchWarehouseId: c,
                          timeOptions: w(new Date(s.id), d, l),
                          timeSpan: D,
                        })
                      );
                    case 8:
                      (e.t0 = e.sent), (e.next = 12);
                      break;
                    case 11:
                      e.t0 = w(new Date(s.id), d, l);
                    case 12:
                      if (
                        ((I = e.t0),
                        !f ||
                          !g ||
                          (null !== (n = I[0]) && void 0 !== n && n.disabled))
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        T && I.shift(),
                        e.abrupt(
                          "return",
                          [
                            {
                              text: S,
                              id: x,
                              value: {
                                text: x,
                                textWithWeekday: S,
                                instantTimePoint: g,
                                startTime: null,
                                endTime: null,
                              },
                            },
                          ].concat(Object(r.a)(I))
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
        function x(e, t, n, i) {
          return S.apply(this, arguments);
        }
        function S() {
          return (S = Object(i.a)(
            a.a.mark(function e(t, n, i, r) {
              var u, o, c, s, f, d, l, m, h;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (n) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", []);
                    case 2:
                      (u = n.min),
                        (o = n.max),
                        (c = r.bizType),
                        (s = r.offlineId),
                        (f = r.dispatchWarehouseId),
                        864e5,
                        o.getTime() - u.getTime() > 864e5 * i &&
                          (o = new Date(u.getTime() + 864e5 * i)),
                        (d = T(t, { min: u, max: o })),
                        (l = 0);
                    case 8:
                      if (!(l < d.length)) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (m = d[l]),
                        (e.next = 12),
                        D({
                          bizType: c,
                          offlineId: s,
                          dispatchWarehouseId: f,
                          day: m,
                          isFirstDay: 0 === l,
                          config: t,
                          range: n,
                          needFill: !1,
                          isCalcLimit: 0 === l,
                        })
                      );
                    case 12:
                      (h = e.sent),
                        (m.children = h),
                        (m.disabled = m.disabled || 0 === h.length);
                    case 15:
                      l++, (e.next = 8);
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
        function I(e, t) {
          return (function (e, t) {
            var n = t.min,
              i = t.max,
              r = [];
            if (!t || 1 === o.b.date(n, i)) return r;
            var u = o.a.copy(n);
            do {
              var a = new Date(
                  u.getFullYear(),
                  u.getMonth() + 1,
                  0,
                  23,
                  59,
                  59
                ),
                c = T(e, { min: u, max: o.b.date(i, a) > 0 ? a : i });
              r.push({
                text: o.c.yearMonth(u),
                disabled: c.every(function (e) {
                  return e.disabled;
                }),
                id: u.getTime(),
                children: c,
              }),
                u.setDate(1),
                u.setMonth(u.getMonth() + 1),
                o.a.resetTime(u);
            } while (1 !== o.b.month(u, i));
            return r;
          })(e, t);
        }
        function k(e) {
          var t = c(e);
          if (!t || t.max < t.min) return null;
          var n = (T(e, t) || []).find(function (e) {
            return !e.disabled && e.text;
          });
          return null == n
            ? null
            : (w(new Date(n.id), e, t) || []).find(function (e) {
                return !e.disabled;
              });
        }
      },
      "6CzD": function (e, t, n) {
        n.d(t, "a", function () {
          return u;
        });
        var i = n("YZeP");
        var r = n("TJjZ");
        function u(e) {
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
      "6EC6": function (e, t) {},
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
      "7ySy": function (e, t) {},
      "8+/t": function (e, t) {},
      "81cE": function (e, t, n) {
        n.d(t, "a", function () {
          return f;
        }),
          n.d(t, "b", function () {
            return d;
          }),
          n.d(t, "c", function () {
            return l;
          });
        var i,
          r = n("mK0O"),
          u = "NORMAL",
          a = "TOPAY",
          o = "MIXSURE",
          c =
            ((i = {}),
            Object(r.a)(i, u, function (e) {
              return 0 === e ? " 免运费" : " 运费 ¥" + (e / 100).toFixed(2);
            }),
            Object(r.a)(i, a, function () {
              return " 运费到付";
            }),
            Object(r.a)(i, o, function (e) {
              var t = c[u](e);
              return "".concat(t, "（不含运费到付）");
            }),
            i);
        function s(e) {
          switch (e) {
            case 1:
              return a;
            case 2:
              return o;
          }
          return u;
        }
        function f(e, t) {
          var n = s(t);
          return (c[n] || c[u])(e);
        }
        function d(e) {
          return s(e) === o ? "运费（不含运费到付）" : "运费";
        }
        function l(e, t) {
          return s(e) === a
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
      "8PT3": function (e, t) {
        e.exports = {
          d: "presentGoodsId;0;presentPopupInfo;4;themeColors;4",
          e: "present-sku:afterSubmit;present-sku:changed;presentPopupClose;presentPopupConfirm",
          el: "sku:custom;sku:selected;present-sku:fetch",
          wc: "PresentGoods",
          wd: "PresentPopup",
          pi: "setSkuInfo",
        };
      },
      "8oWr": function (e, t) {},
      "9+MI": function (e, t) {},
      "9Jq/": function (e, t) {
        e.exports = {
          d: "themeColors;4;state;4;recommendPromotionInfoList;4",
          e: "updateCartGoodsListWithActivity",
          el: "reward:show",
          wc: "CouponItem;PresentGoods",
          wd: "Main",
          l: "",
          lc: "",
          p: "",
          pi: "confirmOrder;setUmpActivity;changeDiscountDetailVisible",
          c: "",
          cc: "",
        };
      },
      "9ztX": function (e, t) {},
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
            u = i.slice(t, n);
          return (
            e[u[1]] && e[u[1]] === e[u[2]] && u.splice(1, 1),
            "中国" === e[u[0]] && u.shift(),
            u
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
      AMRJ: function (e, t) {},
      AilZ: function (e, t) {},
      BGli: function (e, t) {},
      BLrH: function (e, t) {},
      "Bb/d": function (e, t) {},
      BgwE: function (e, t) {},
      Bn8Z: function (e, t) {},
      Btm5: function (e, t) {},
      Cbw3: function (e, t) {},
      Dksy: function (e, t, n) {
        n.d(t, "a", function () {
          return i;
        });
        var i = {
          GOODS_SOLDOUT: [101910001, 101910002, 101910003],
          RECEIVER_NEED_REALNAME: 101304026,
          LIMIT_ORDER: [101302001, 101302002, 429],
          ASYNC_ORDER: 102901001,
          BILL_EXCEPTION_UNSAFTY: 101358005,
          BILL_EXCEPTION_UNSAFTY_REVIEW: 101358006,
          DELIVERY_ERROR: [101305007, 101305073, 101305009],
        };
      },
      E42p: function (e, t) {},
      EMVi: function (e, t) {},
      ERAv: function (e, t) {},
      Fc76: function (e, t) {},
      FeXA: function (e, t) {},
      Fi4Z: function (e, t) {},
      GK6D: function (e, t) {},
      GZcT: function (e, t) {},
      GZxp: function (e, t) {},
      H2q5: function (e, t) {},
      "HAp+": function (e, t, n) {
        n.d(t, "a", function () {
          return u;
        });
        var i = n("8+/t"),
          r = n.n(i);
        class u {
          constructor(e) {
            this.ctx = e.ctx;
          }
        }
        u.widgets = { Main: r() };
      },
      HGkz: function (e, t) {},
      Hy5Q: function (e, t) {},
      "I3+V": function (e, t) {},
      Iybf: function (e, t) {
        e.exports = {
          d: "shoppingComponent;2;state;4;payState;4",
          e: "",
          el: "cashier:pay:success;cashier:pay:fail",
          w: "",
          wc: "",
          wd: "Main",
          l: "",
          lc: "checkFromChannelsLive;getTradeModuleStatus;checkBeforeAddOrderPromise",
          p: "sceneCheck;getIsSyncOrder;getWxOrderInfoTradePay;getWxOrderInfoTradeBuy;startWxVideoPay;genCreateOrderParams;handleMutateStateAfterFetchInWxvideo;handleLiveCouponExt;handleWxvideoAfterCreateOrder",
          pi: "requestOrderPayment;requestOrderPayment_preCashier;mutateState;genGoodsParams;getIsSyncOrder;getWxOrderInfoTradeBuy;sceneCheck;setDisableStoredDiscount;confirmOrder",
          c: "",
          cc: "",
        };
      },
      KPu0: function (e, t) {},
      KUiv: function (e, t) {
        e.exports = {
          d: "yzGuarantee;4;yzGuaranteeInfo;4;yzGuaranteeDocs;4",
          w: "GuaranteeEnsure",
          wd: "GuaranteeEnsure",
        };
      },
      MB0q: function (e, t) {},
      OH4y: function (e, t, n) {
        n.d(t, "a", function () {
          return d;
        });
        var i = n("mzXD"),
          r = n.n(i),
          u = n("lv7w"),
          a = n.n(u),
          o = n("hnaY"),
          c = n.n(o),
          s = n("m6yS"),
          f = n.n(s);
        class d {
          constructor(e) {
            this.ctx = e.ctx;
          }
        }
        d.widgets = {
          Main: r.a,
          TimePicker: a(),
          ContactList: c(),
          DeliveryScopePopup: f(),
        };
      },
      OhE7: function (e, t) {},
      PIsN: function (e, t) {},
      QKLd: function (e, t) {},
      Qcor: function (e, t) {},
      Qpnn: function (e, t) {},
      RGIK: function (e, t) {},
      RbYC: function (e, t) {},
      RsP2: function (e, t) {},
      RyxV: function (e, t, n) {
        n.d(t, "a", function () {
          return u;
        });
        var i = n("US/N"),
          r = n("Uol7");
        function u(e) {
          var t = e.id ? "update" : "add";
          return Object(i.requestV2)({
            method: "POST",
            path: "/wsctrade/uic/address/".concat(t, "Address.json"),
            data: e,
            config: r.a,
            withCredentials: !0,
          })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              throw ((e.msg = e.msg || "地址保存失败"), e);
            });
        }
      },
      S8ul: function (e, t) {},
      SiWl: function (e, t) {},
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
      Tfzu: function (e, t, n) {
        n.d(t, "a", function () {
          return o;
        });
        var i = n("gq53"),
          r = n.n(i),
          u = n("PIsN"),
          a = n.n(u);
        class o {
          constructor(e) {
            var { ctx: t } = e;
            this.ctx = t;
          }
        }
        o.widgets = { Installment: a(), Main: r() };
      },
      Tr4D: function (e, t) {},
      U6jd: function (e, t) {},
      UMX0: function (e, t) {},
      Uhkc: function (e, t) {},
      Uol7: function (e, t, n) {
        n.d(t, "a", function () {
          return i;
        });
        var i = { skipKdtId: !0, skipShopInfo: !0 };
      },
      V2DQ: function (e, t) {},
      VYYi: function (e, t) {},
      Vcjw: function (e, t) {},
      Vh6x: function (e, t) {},
      WUv3: function (e, t) {},
      "X/5q": function (e, t) {},
      X219: function (e, t) {},
      Xc4W: function (e, t) {},
      Y8Rs: function (e, t) {},
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
      Z3y2: function (e, t) {},
      ZRCJ: function (e, t) {},
      ZTAf: function (e, t) {},
      aasU: function (e, t) {},
      "b5+x": function (e, t) {},
      bPIv: function (e, t) {},
      bsi0: function (e, t) {
        e.exports = {
          d: "yzGuarantee;2;yzGuaranteeDocs;2;yzGuaranteeInfo;2;isChoosedCard;4;isOrderPage;4;isPrePayPage;4;themeColors;4;kdtId;4;guaranteeOrderInfo;4;freight;4;paddingConfig;4;defaultYzGuarantee;4;defaultFreightInsurance;4;orderExtra;6",
          w: "GuaranteeFreightBar;YzGuaranteeFixed;YzGuarantee;FreightInsurance",
          wc: "YzGuaranteeFixed;YzGuarantee;FreightInsurance",
          wd: "GuaranteeFreightBar",
          cc: "GuaranteePop",
        };
      },
      cDes: function (e, t) {},
      cgff: function (e, t) {},
      ciSm: function (e, t) {},
      cxMM: function (e, t) {},
      dVPT: function (e, t) {},
      e384: function (e, t) {},
      eZv0: function (e, t) {},
      evxX: function (e, t) {},
      fWqh: function (e, t) {},
      gF3s: function (e, t) {},
      gf3M: function (e, t) {},
      gq53: function (e, t) {},
      h0WK: function (e, t) {},
      hEKJ: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = function (e) {
          return Math.round(100 * parseFloat(e));
        };
        (t.default = i), (e.exports = t.default);
      },
      hVWO: function (e, t) {},
      hnaY: function (e, t) {},
      iKL5: function (e, t, n) {
        n.d(t, "a", function () {
          return i;
        });
        var i = function (e, t) {
          var n = (3e3 * Math.PI) / 180,
            i = e,
            r = t,
            u = Math.sqrt(i * i + r * r) + 2e-5 * Math.sin(r * n),
            a = Math.atan2(r, i) + 3e-6 * Math.cos(i * n);
          return {
            lng: (e = u * Math.cos(a) + 0.0065),
            lat: (t = u * Math.sin(a) + 0.006),
          };
        };
      },
      ih9H: function (e, t) {},
      jFSB: function (e, t) {},
      jShr: function (e, t) {},
      jaju: function (e, t) {},
      kFd9: function (e, t) {},
      kFjz: function (e, t) {},
      lDpr: function (e, t) {},
      lfzi: function (e, t) {},
      luLG: function (e, t) {},
      lv7w: function (e, t) {},
      m6nx: function (e, t) {},
      m6yS: function (e, t) {},
      mHPI: function (e, t) {},
      mkBT: function (e, t) {},
      mzXD: function (e, t) {},
      ns2s: function (e, t, n) {
        n.d(t, "a", function () {
          return s;
        }),
          n.d(t, "b", function () {
            return f;
          }),
          n.d(t, "c", function () {
            return d;
          });
        var i = n("q29p"),
          r = n.n(i);
        function u(e) {
          return (e < 10 ? "0" : "") + e;
        }
        var a = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
          o = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          c = function (e) {
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
                "".concat(u(i), ":").concat(u(r))
              );
            },
            businessTime: function (e, t) {
              var n,
                i = t.timeBucket,
                r = void 0 === i ? [] : i,
                u = t.timeSpan,
                a = void 0 === u ? "" : u,
                o = d.weekday(e);
              return (
                c(r).forEach(function (e) {
                  -1 !== e.weekdays.indexOf(o) &&
                    (n
                      ? "day" === a &&
                        (n = f.time(e.closeTime, n.closeTime) > 0 ? e : n)
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
                i = c(t);
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
          f = {
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
                u = t.getMonth();
              return n === i ? (r === u ? 0 : r > u ? 1 : -1) : n > i ? 1 : -1;
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
              return f.sameDay(s.today(), e);
            },
            isCurrentYear: function (e) {
              return s.today().getFullYear() === e.getFullYear();
            },
            maxDate: function (e, t) {
              return t > e ? t : e;
            },
            day: function (e, t) {
              return (
                (e = new Date(d.date(e))),
                (t = new Date(d.date(t))),
                f.date(e, t)
              );
            },
          },
          d = {
            padZero: u,
            timeSpanToDate: function (e) {
              return new Date(e + a);
            },
            date: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "yyyy-mm-dd";
              return t
                .replace("yyyy", e.getFullYear())
                .replace("mm", u(e.getMonth() + 1))
                .replace("dd", u(e.getDate()));
            },
            monthDay: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "yy月dd日";
              return t
                .replace("yy", u(e.getMonth() + 1))
                .replace("dd", u(e.getDate()));
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
                .replace("hh", u(e.getHours()))
                .replace("mm", u(e.getMinutes()))
                .replace("ss", u(e.getSeconds()));
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
              var t = s.today(),
                n = f.sameDay;
              return n(t, e)
                ? "今天"
                : n(s.plusDay(t), e)
                ? "明天"
                : d.weekday(e);
            },
          };
      },
      o2c2: function (e, t) {},
      o4Ah: function (e, t) {},
      pAK7: function (e, t) {
        e.exports = {
          d: "kdtId;4",
          e: "sku:hide;sku:preview;sku:submit;sku:selected;sku:opened;sku:custom",
          el: "afterSkuSubmit",
          w: "",
          wc: "",
          wd: "Main",
          l: "",
          lc: "",
          p: "setSkuInfo",
          pi: "",
          c: "",
          cc: "",
        };
      },
      pH7Z: function (e, t) {},
      q3R4: function (e, t) {},
      q7ZP: function (e, t) {},
      riyd: function (e, t) {},
      rpEa: function (e, t) {},
      sBTC: function (e, t) {},
      sEE4: function (e, t) {},
      "sl+1": function (e, t) {},
      soIK: function (e, t) {},
      "t+v8": function (e, t) {},
      t4Qa: function (e, t) {},
      tDP0: function (e, t, n) {
        n.r(t);
        n("OvW6"), n("vSgT");
      },
      tSrz: function (e, t) {},
      tbQw: function (e, t) {},
      te77: function (e, t) {},
      "tv/7": function (e, t) {},
      twMw: function (e, t, n) {
        n.d(t, "a", function () {
          return u;
        });
        var i = n("9ZMt"),
          r = {
            inited: !1,
            isFetching: !1,
            systemInfo: {
              SDKVersion: "",
              batteryLevel: 100,
              benchmarkLevel: 1,
              brand: "",
              fontSizeSetting: 16,
              language: "zh",
              model: "",
              pixelRatio: 1,
              platform: "",
              screenHeight: 0,
              screenWidth: 0,
              statusBarHeight: 0,
              system: "",
              version: "",
              windowHeight: 0,
              windowWidth: 0,
            },
          };
        r.isFetching ||
          ((r.isFetching = !0),
          i.default.$native.getSystemInfo &&
            i.default.$native.getSystemInfo({
              success: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (r.systemInfo = e), (r.inited = !0);
              },
              fail: function (e) {},
              complete: function () {
                r.isFetching = !1;
              },
            }));
        var u = Object.create(null);
        Object.keys(r.systemInfo).forEach(function (e) {
          Object.defineProperty(u, e, {
            get: function () {
              return r.inited
                ? r.systemInfo[e]
                : (i.default.$native.getSystemInfoSync &&
                    ((r.systemInfo = i.default.$native.getSystemInfoSync()),
                    (r.inited = !0)),
                  r.systemInfo)[e];
            },
          });
        }),
          Object.defineProperty(u, "isAndroid", {
            get: function () {
              return /android/i.test(u.system);
            },
          }),
          Object.defineProperty(u, "isIphoneX", {
            get: function () {
              return /iphone x/i.test(u.model);
            },
          }),
          (t.b = function () {
            return (
              !r.inited &&
                i.default.$native.getSystemInfoSync &&
                ((r.systemInfo = i.default.$native.getSystemInfoSync()),
                (r.inited = !0)),
              r.systemInfo
            );
          });
      },
      ubuM: function (e, t) {},
      w9aK: function (e, t) {},
      wQgs: function (e, t) {},
      wdVi: function (e, t) {},
      wwS1: function (e, t) {},
      wxzO: function (e, t) {},
      wyd1: function (e, t) {},
      wzDK: function (e, t) {},
      x65I: function (e, t) {},
      xdNP: function (e, t) {},
      xeEc: function (e, t, n) {
        var i,
          r = n("8mzt");
        i = r.a;
        var u = {
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
        t.a = u;
      },
      xjwx: function (e, t) {},
      yS26: function (e, t, n) {
        n.d(t, "b", function () {
          return u;
        }),
          n.d(t, "a", function () {
            return a;
          });
        var i = n("US/N"),
          r =
            (n("7lfQ"),
            n("4kmb"),
            n("iKL5"),
            { skipKdtId: !0, skipShopInfo: !0 });
        function u(e) {
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
        function a(e) {
          return Object(i.default)({
            origin: "cashier",
            withCredentials: !0,
            path: "/wsctrade/order/queryOrderLimit",
            method: "POST",
            data: e,
          });
        }
      },
      zANf: function (e, t) {},
      zsG2: function (e, t) {},
    }
  )
);
