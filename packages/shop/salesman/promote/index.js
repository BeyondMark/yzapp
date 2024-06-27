"use strict";
var r = require("~/r");
r(
  "TCYk",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "04fg": function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getRoot = function () {
            if ("undefined" != typeof window) return window;
            return { localStorage: null };
          }),
          (t.getStorage = function (e) {
            if ("undefined" != typeof window)
              return window.localStorage.getItem(e);
            if ("undefined" != typeof wx && wx.getStorageSync)
              return wx.getStorageSync(e);
            return null;
          }),
          (t.setStorage = function (e, t) {
            if ("undefined" != typeof window)
              return window.localStorage.setItem(e, t);
            if ("undefined" != typeof wx && wx.setStorageSync)
              return wx.setStorageSync(e, t);
            return null;
          });
      },
      "1FWt": function (e) {
        e.exports = JSON.parse("{}");
      },
      "6CzD": function (e, t, n) {
        n.d(t, "a", function () {
          return o;
        });
        var r = n("YZeP");
        var a = n("TJjZ");
        function o(e) {
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
            Object(a.a)(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
      },
      "6F6u": function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t, n) {
            var r,
              a,
              o,
              i,
              c = [],
              s = function s() {
                var u = Date.now() - o;
                u < t && u >= 0
                  ? (r = setTimeout(s, t - u))
                  : ((r = null),
                    n || ((i = e.apply(a, c)), r || ((a = null), (c = []))));
              };
            function u() {
              a = this;
              for (
                var u = arguments.length, p = new Array(u), f = 0;
                f < u;
                f++
              )
                p[f] = arguments[f];
              (c = p), (o = Date.now());
              var d = n && !r;
              return (
                r || (r = setTimeout(s, t)),
                d && ((i = e.apply(a, c)), (a = null), (c = [])),
                i
              );
            }
            return (
              (u.cancel = function () {
                r && clearTimeout(r), (r = null);
              }),
              u
            );
          }),
          (e.exports = t.default);
      },
      AiY9: function (e, t) {},
      ECKV: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GLOBAL_URL = void 0);
        t.GLOBAL_URL = {
          base: "https://www.youzan.com",
          bbs: "https://bbs.youzan.com",
          cdn: "https://b.yzcdn.cn/",
          fast: ".m.youzan.com",
          h5: "https://h5.youzan.com",
          im: "https://b-im.youzan.com",
          imgqn: "https://img01.yzcdn.cn",
          passport: "https://passport.youzan.com",
          shop: "http://detail.youzan.com",
          shop_wap: "https://shop255245.youzan.com/v2",
          store: "https://store.youzan.com",
          trade: "https://trade.koudaitong.com",
          trade_youzan: "https://trade.youzan.com",
          uic: "https://uic.youzan.com",
          wap: "https://h5.youzan.com/v2",
          www: "https://www.youzan.com/v2",
        };
      },
      "K0L/": function (e, t) {},
      LniI: function (e, t) {},
      MVmR: function (e, t, n) {
        n.d(t, "a", function () {
          return E;
        }),
          n.d(t, "b", function () {
            return C;
          }),
          n.d(t, "c", function () {
            return De;
          });
        var r = n("mK0O");
        var a = n("TJjZ");
        function o(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  u = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (u = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (u) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            Object(a.a)(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        var i = n("aMoH"),
          c = n("hisu"),
          s = n("yBJb"),
          u = n("6CzD"),
          p = n("sQvh");
        function f(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Object(p.a)(e, t);
        }
        var d = n("J1LG");
        function l(e, t) {
          if (t && ("object" === Object(d.a)(t) || "function" == typeof t))
            return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        }
        var g = n("P+uj"),
          h = n("jQ93"),
          v = n("S+xN"),
          y = n.n(v),
          m = n("dV47"),
          b = n.n(m),
          k = n("2wjL"),
          w = n("taYb"),
          O = n("jZtE"),
          x = n("1FWt");
        function j(e) {
          return "object" === Object(d.a)(e)
            ? JSON.parse(JSON.stringify(e))
            : e;
        }
        var _ = (function () {
          function e() {
            Object(c.a)(this, e), (this.funcs = {});
          }
          return (
            Object(s.a)(e, [
              {
                key: "on",
                value: function (e, t) {
                  e && t && "function" == typeof t && (this.funcs[e] = t);
                },
              },
              {
                key: "off",
                value: function (e) {
                  e ? delete this.funcs[e] : (this.funcs = {});
                },
              },
            ]),
            e
          );
        })();
        function P(e, t) {
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
        function S(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? P(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : P(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var C = (function (e) {
          f(n, e);
          var t = (function (e) {
            function t() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            }
            return function () {
              var n,
                r = Object(g.a)(e);
              if (t()) {
                var a = Object(g.a)(this).constructor;
                n = Reflect.construct(r, arguments, a);
              } else n = r.apply(this, arguments);
              return l(this, n);
            };
          })(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "trigger",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  var r = [],
                    a = null,
                    o = S({}, this.funcs);
                  if (
                    (Object.keys(o).forEach(function (e) {
                      var n = o[e];
                      try {
                        var i = n.apply(void 0, Object(u.a)(j(t)));
                        r.push(i);
                      } catch (e) {
                        a = e;
                      }
                    }),
                    a)
                  )
                    throw a;
                  return r;
                },
              },
            ]),
            n
          );
        })(_);
        function T(e, t) {
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
        function D(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? T(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : T(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var E = (function (e) {
            f(n, e);
            var t = (function (e) {
              function t() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              }
              return function () {
                var n,
                  r = Object(g.a)(e);
                if (t()) {
                  var a = Object(g.a)(this).constructor;
                  n = Reflect.construct(r, arguments, a);
                } else n = r.apply(this, arguments);
                return l(this, n);
              };
            })(n);
            function n() {
              return Object(c.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(s.a)(n, [
                {
                  key: "trigger",
                  value: function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    var r = [],
                      a = D({}, this.funcs);
                    return (
                      Object.keys(a).forEach(function (e) {
                        var n = a[e];
                        try {
                          var o = n.apply(void 0, Object(u.a)(j(t)));
                          r.push(o);
                        } catch (e) {
                          r.push(Promise.reject({ err: e }));
                        }
                      }),
                      Promise.all(r)
                    );
                  },
                },
              ]),
              n
            );
          })(_),
          A = 0;
        function N() {
          return Date.now() + A++ + "";
        }
        function I(e) {
          return e.__isPage
            ? e.events
            : e.__isApp
            ? e.__events
            : e.__events || (e.__events = {});
        }
        var q = {
            on: function (e, t) {
              if (t) {
                var n = I(this),
                  r = n[e] || (n[e] = new C());
                return r.on(e + "_" + N(), t), r;
              }
            },
            once: function (e, t) {
              var n = this,
                r = function r() {
                  n.off(e, r), t.apply(this, arguments);
                };
              return (r._callback = t), this.on(e, r);
            },
            off: function (e, t) {
              if (e) {
                var n = I(this)[e];
                if (n) {
                  var r = n.funcs,
                    a = Object.keys(r);
                  t && "function" == typeof t && a.length
                    ? a.forEach(function (e) {
                        (r[e] !== t && r[e]._callback !== t) || n.off(e);
                      })
                    : n.off();
                }
              }
            },
            onAsync: function (e, t) {
              if (t) {
                var n = I(this),
                  r = n[e] || (n[e] = new E());
                return r.on(e + "_" + N(), t), r;
              }
            },
            trigger: function (e, t) {
              if (e) {
                var n = I(this)[e];
                return n && n.trigger(t);
              }
            },
            triggerAsync: function (e, t) {
              if (e) {
                var n = I(this)[e];
                return n && n.trigger(t);
              }
            },
          },
          R = ["onLoad", "onShow"],
          L = ["onLoad", "onShow"];
        function z(e, t, n) {
          return (
            e.__lifetimes || (e.__lifetimes = {}),
            !(!t || !n || "function" != typeof n) &&
              !(e.__isPage && R.indexOf(t) < 0) &&
              !(e.__isApp && L.indexOf(t) < 0) &&
              (e.__lifetimes[t] || (e.__lifetimes[t] = []),
              e.__lifetimes[t].push(n),
              !0)
          );
        }
        function W(e, t, n) {
          if (e.__lifetimes && e.__lifetimes[t])
            try {
              e.__lifetimes[t].forEach(function (e) {
                "function" == typeof e && e(n);
              });
            } catch (e) {}
        }
        var M = function () {},
          F = (function () {
            function e() {
              Object(c.a)(this, e),
                (this.__isApp = !0),
                (this.__data = { shop: {}, user: {} }),
                (this.__events = {}),
                (this.process = {}),
                (this.__dataWatchers = {});
            }
            return (
              Object(s.a)(e, [
                {
                  key: "trigger",
                  value: function (e, t) {
                    if (e) {
                      var n = q.trigger.apply(this, [e, t]),
                        r = this.__events[e];
                      return r instanceof C && 1 === Object.keys(r.funcs).length
                        ? n[0]
                        : n;
                    }
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    return q.on.apply(this, [e, t]);
                  },
                },
                {
                  key: "onAsync",
                  value: function (e, t) {
                    return q.onAsync.apply(this, [e, t]);
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    return q.once.apply(this, [e, t]);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    return q.off.apply(this, [e, t]);
                  },
                },
                {
                  key: "watch",
                  value: function (e, t) {
                    var n,
                      r = this;
                    return (
                      t &&
                        (this.__dataWatchers[e] ||
                          (this.__dataWatchers[e] = []),
                        this.__dataWatchers[e].push(t),
                        (n = this.__dataWatchers[e].length - 1)),
                      function () {
                        n >= 0 && r.__dataWatchers[e].splice(n, 1);
                      }
                    );
                  },
                },
                {
                  key: "__notifyDataSubscribers",
                  value: function (e, t) {
                    (this.__dataWatchers[e] || []).forEach(function (e) {
                      e(t);
                    });
                  },
                },
                {
                  key: "getProcess",
                  value: function (e) {
                    if (e) return this.process[e] || M;
                  },
                },
                {
                  key: "lifetimes",
                  value: function (e, t) {
                    return z(this, e, t);
                  },
                },
              ]),
              e
            );
          })(),
          U = function () {},
          Q = (function () {
            function e() {
              Object(c.a)(this, e),
                (this.__isPage = !0),
                (this.process = {}),
                (this.data = {}),
                (this.events = {}),
                (this.__dataWatchers = {});
            }
            return (
              Object(s.a)(e, [
                {
                  key: "getProcess",
                  value: function (e) {
                    if (e) return this.process[e] || U;
                  },
                },
                {
                  key: "watch",
                  value: function (e, t) {
                    var n,
                      r = this;
                    return (
                      t &&
                        (this.__dataWatchers[e] ||
                          (this.__dataWatchers[e] = []),
                        this.__dataWatchers[e].push(t),
                        (n = this.__dataWatchers[e].length - 1)),
                      function () {
                        n >= 0 && r.__dataWatchers[e].splice(n, 1);
                      }
                    );
                  },
                },
                {
                  key: "__notifyDataSubscribers",
                  value: function (e, t) {
                    (this.__dataWatchers[e] || []).forEach(function (e) {
                      e(t);
                    });
                  },
                },
                {
                  key: "trigger",
                  value: function (e, t) {
                    if (e) {
                      var n = q.trigger.apply(this, [e, t]),
                        r = this.events[e];
                      return r instanceof C && 1 === Object.keys(r.funcs).length
                        ? n[0]
                        : n;
                    }
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    return q.on.apply(this, [e, t]);
                  },
                },
                {
                  key: "onAsync",
                  value: function (e, t) {
                    return q.onAsync.apply(this, [e, t]);
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    return q.once.apply(this, [e, t]);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    return q.off.apply(this, [e, t]);
                  },
                },
                {
                  key: "lifetimes",
                  value: function (e, t) {
                    return z(this, e, t);
                  },
                },
                {
                  key: "unload",
                  value: function () {
                    var e = this;
                    Object.keys(this.events).forEach(function (t) {
                      var n = e.events[t];
                      Object.keys(n.funcs).forEach(function (e) {
                        delete n.funcs[e];
                      }),
                        delete e.events[t];
                    }),
                      (this.process = {});
                  },
                },
              ]),
              e
            );
          })();
        function V(e, t) {
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
        function B(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? V(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : V(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var G = (function () {
          function e() {
            Object(c.a)(this, e),
              (this._data = {}),
              (function e(t) {
                for (var n in t) {
                  var r = t[n];
                  Date.now() > r.expire && delete t[n];
                }
                setTimeout(function () {
                  e(t);
                }, 1e4);
              })(this._data);
          }
          return (
            Object(s.a)(e, [
              {
                key: "setStorageSync",
                value: function (e) {
                  if (e.key && void 0 !== e.data) {
                    var t = e.key,
                      n = e.data,
                      r = e.expire;
                    return wx.setStorageSync(t, {
                      data: n,
                      expire: Date.now() + 1e3 * (r || 172800),
                    });
                  }
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "getStorageSync",
                value: function (e) {
                  if (e) {
                    var t = wx.getStorageSync(e);
                    return (
                      t &&
                        Date.now() > t.expire &&
                        wx.removeStorage({ key: e }),
                      t.data
                    );
                  }
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "setStorage",
                value: function (e) {
                  if (e.key && void 0 !== e.data) {
                    var t = e.data,
                      n = e.expire;
                    wx.setStorage(
                      B(
                        B({}, e),
                        {},
                        {
                          data: {
                            data: t,
                            expire: Date.now() + 1e3 * (n || 172800),
                          },
                        }
                      )
                    );
                  } else
                    "function" == typeof e.fail &&
                      e.fail(new Error("unsupported parameters")),
                      "function" == typeof e.complete &&
                        e.complete(new Error("unsupported parameters"));
                },
              },
              {
                key: "getStorage",
                value: function (e) {
                  if (e.key && (e.success || e.complete)) {
                    var t = e.key,
                      n = e.success,
                      r = e.complete,
                      a = e.fail;
                    wx.getStorage({
                      key: t,
                      success: function (e) {
                        var r = e.data;
                        "function" == typeof n && n(r.data),
                          r &&
                            Date.now() > r.expire &&
                            wx.removeStorage({ key: t });
                      },
                      fail: function (e) {
                        "function" == typeof a && a(e);
                      },
                      complete: function (e) {
                        "function" == typeof r &&
                          (e.hasOwnProperty("data") &&
                          e.hasOwnProperty("expire")
                            ? r(e.data)
                            : r(e));
                      },
                    });
                  } else
                    "function" == typeof e.fail &&
                      e.fail(new Error("unsupported parameters")),
                      "function" == typeof e.complete &&
                        e.complete(new Error("unsupported parameters"));
                },
              },
              {
                key: "removeStorageSync",
                value: function (e) {
                  if (e) return wx.removeStorageSync(e);
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "removeStorage",
                value: function (e) {
                  e.key && (e.success || e.complete)
                    ? wx.removeStorage(e)
                    : ("function" == typeof e.fail &&
                        e.fail(new Error("unsupported parameters")),
                      "function" == typeof e.complete &&
                        e.complete(new Error("unsupported parameters")));
                },
              },
              {
                key: "clearStorageSync",
                value: function () {
                  return wx.clearStorageSync();
                },
              },
              {
                key: "clearStorage",
                value: function (e) {
                  wx.clearStorage(e);
                },
              },
              {
                key: "setLight",
                value: function (e) {
                  if (e.key && void 0 !== e.data)
                    return (
                      (this._data[e.key] = {
                        data: Object(h.a)(e.data),
                        expire: Date.now() + 1728e5,
                      }),
                      this._data[e.key].data
                    );
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "setLightOnce",
                value: function (e) {
                  if (e.key && void 0 !== e.data)
                    return (
                      (this._data[e.key] = {
                        data: Object(h.a)(e.data),
                        expire: Date.now(),
                        once: !0,
                      }),
                      this._data[e.key].data
                    );
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "getLight",
                value: function (e) {
                  var t = this._data[e];
                  if (t)
                    return (
                      (Date.now() > t.expire || t.once) && delete this._data[e],
                      t.data
                    );
                },
              },
            ]),
            e
          );
        })();
        function J(e, t) {
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
        function Y(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? J(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : J(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var K = "https://mp-isv.youzanyun.com/";
        function Z() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "string" == typeof e && e.indexOf("yz_cloud_gateway") >= 0;
        }
        var H = "request",
          $ = "uploadFile",
          X = [],
          ee = (function () {
            function e(t) {
              var n = this;
              Object(c.a)(this, e),
                (this.defaultConfig = t),
                (this.app = t.app || getApp()),
                this.app.on("ecloud:request:queue:send", function (e) {
                  n.sendRequestQueue(e);
                });
            }
            return (
              Object(s.a)(e, [
                {
                  key: "getAppName",
                  value: function (e) {
                    var t = e.appName;
                    if (t) return t;
                    if ((e.functionName || e.functionUrl) && e.functionUrl) {
                      return (/^(.+?)-(\d+?)-(.+?).isv/.exec(e.functionUrl) ||
                        [])[3];
                    }
                    if (e.isv) {
                      return (/^(.+?).isv/.exec(e.isv) || [])[1];
                    }
                    return "";
                  },
                },
                {
                  key: "request",
                  value: function (e) {
                    return this.invoke(e, H);
                  },
                },
                {
                  key: "uploadFile",
                  value: function (e) {
                    return this.invoke(e, $);
                  },
                },
                {
                  key: "invoke",
                  value: function () {
                    var e,
                      t = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = arguments.length > 1 ? arguments[1] : void 0;
                    e =
                      r === H
                        ? function () {
                            return t.handleRequestConfig(n);
                          }
                        : function () {
                            return t.uploadFileRequest(n);
                          };
                    var a = this.getAppName(n),
                      o = n.succeed,
                      i = n.failed,
                      c = n.success,
                      s = n.fail,
                      u = n.complete,
                      p = function (e) {
                        o ? o(e) : c && c(e);
                      },
                      f = function (e) {
                        i ? i(e) : s && s(e);
                      },
                      d = function (e) {
                        u && u(e);
                      },
                      l = function (n, r) {
                        var o = t.getCurrentAppTokenInfo(a),
                          i = o,
                          c = i.status;
                        i.token
                          ? (t.handlePushRequestToQueue(e, a),
                            "getting" !== c &&
                              t.app.trigger("ecloud:gateway:get-token", {
                                appNames: [a],
                              }))
                          : r(),
                          t.app.logger.appError({
                            message: "有赞云网关token失效",
                            detail: {
                              appName: a,
                              userTokenInfo: t.app.userTokenInfo,
                              currentAppTokenInfo: o,
                              response: n,
                            },
                          });
                      };
                    (n.success = function (e) {
                      r !== H &&
                        r === $ &&
                        (401 == +e.statusCode && Z(e.data)
                          ? l(e, function () {
                              return p(e);
                            })
                          : p(e));
                    }),
                      (n.fail = function (e) {
                        f(e);
                      }),
                      (n.complete = function (e) {
                        r === H
                          ? 200 == +e.statusCode
                            ? p(e.data)
                            : 401 == +e.statusCode && Z(e.data)
                            ? l(e, function () {
                                return f(e);
                              })
                            : f(e)
                          : r === $ &&
                            (401 == +e.statusCode && Z(e.data)
                              ? l(e, function () {
                                  return d(e);
                                })
                              : d(e));
                      }),
                      this.waiting(e, a);
                  },
                },
                {
                  key: "waiting",
                  value: function (e, t) {
                    var n = this.getCurrentAppTokenInfo(t),
                      r = n.token,
                      a = n.status;
                    if (r) {
                      if ("getting" === a)
                        return this.handlePushRequestToQueue(e, t);
                      e();
                    } else
                      this.handlePushRequestToQueue(e, t),
                        "getting" !== a &&
                          this.app.trigger("ecloud:gateway:get-token", {
                            appNames: [t],
                          });
                  },
                },
                {
                  key: "getCurrentAppTokenInfo",
                  value: function (e) {
                    return (
                      (this.app.youzanyunGatewayToken || []).find(function (t) {
                        return t.appName === e;
                      }) || {}
                    );
                  },
                },
                {
                  key: "handlePushRequestToQueue",
                  value: function (e, t) {
                    var n = X.find(function (e) {
                      return e.appName === t;
                    });
                    return n
                      ? n.requestQueue.includes(e)
                        ? void 0
                        : n.requestQueue.push(e)
                      : X.push({ appName: t, requestQueue: [e] });
                  },
                },
                {
                  key: "sendRequestQueue",
                  value: function (e) {
                    var t = (e || {}).appNames,
                      n = void 0 === t ? [] : t;
                    X.filter(function (e) {
                      return n.includes(e.appName);
                    }).forEach(function (e) {
                      for (var t = e.requestQueue.shift(); t; )
                        t(), (t = e.requestQueue.shift());
                    });
                  },
                },
                {
                  key: "handleRequestConfig",
                  value: function (e) {
                    if (e.functionName || e.functionUrl) {
                      var t = e.functionUrl;
                      if (!t) {
                        var n = "dev" == this.defaultConfig.env,
                          r = this.defaultConfig.getEnv(e.appName).MP_TENANT_ID;
                        if (!r)
                          throw new Error(
                            "小程序环境变量中不存在 团队 ID, 请确认"
                          );
                        t = ""
                          .concat(e.functionName, "-")
                          .concat(r, "-")
                          .concat(e.appName, ".")
                          .concat(
                            n ? "isv-faas-dev" : "isv-faas",
                            ".youzan.com"
                          );
                      }
                      this._request(
                        "https://mp-faas-isv.youzanyun.com/",
                        t,
                        Y(
                          {
                            header: Y(
                              { "content-type": "application/json" },
                              e.header
                            ),
                          },
                          e
                        )
                      );
                    } else {
                      var a = e.isv;
                      if (!a) {
                        var o = "dev" == this.defaultConfig.env;
                        a = ""
                          .concat(e.appName, ".")
                          .concat(o ? "isv-dev" : "isv", ".youzan.com");
                      }
                      this._request(K, a, e);
                    }
                  },
                },
                {
                  key: "_request",
                  value: function (e, t, n) {
                    var r = (this.app.userTokenInfo || {}).sessionId,
                      a = this.getCurrentAppTokenInfo(this.getAppName(n)).token,
                      o = n.header || {};
                    (0, wx.request)({
                      url: e + n.path,
                      method: n.method || "GET",
                      data: n.data,
                      header: {
                        isv: t,
                        "content-type":
                          o["content-type"] ||
                          "application/x-www-form-urlencoded",
                        Accept: "application/json",
                        "isv-token": a,
                        encryptionKey: r,
                      },
                      complete: function (e) {
                        n.complete && n.complete(e);
                      },
                      fail: function (e) {
                        n.fail && n.fail(e);
                      },
                    });
                  },
                },
                {
                  key: "uploadFileRequest",
                  value: function (e) {
                    var t = (this.app.userTokenInfo || {}).sessionId,
                      n = this.getCurrentAppTokenInfo(this.getAppName(e)).token,
                      r = e.isv;
                    if (!r) {
                      var a = "dev" == this.defaultConfig.env;
                      r = ""
                        .concat(e.appName, ".")
                        .concat(a ? "isv-dev" : "isv", ".youzan.com");
                    }
                    wx.uploadFile({
                      url: K + e.path,
                      filePath: e.filePath,
                      name: e.name,
                      header: { isv: r, "isv-token": n, encryptionKey: t },
                      formData: e.formData || {},
                      success: function (t) {
                        e.success && e.success(t);
                      },
                      fail: function (t) {
                        e.fail && e.fail(t);
                      },
                      complete: function (t) {
                        e.complete && e.complete(t);
                      },
                    });
                  },
                },
              ]),
              e
            );
          })(),
          te = {
            fullfillImage: y.a.fullfillImage,
            debounce: b.a.debounce,
            throttle: b.a.throttle,
          };
        function ne(e, t) {
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
        var re = {
            switchTab: "switchTab",
            reLaunch: "reLaunch",
            redirectTo: "redirectTo",
            navigateTo: "navigateTo",
            navigateBack: "navigateBack",
          },
          ae = {
            index: "/packages/goods/detail/index",
            default: "/packages/goods/detail/index",
            points: "/packages/goods/points/index",
            seckill: "/packages/goods/seckill/index",
            groupon: "/packages/goods/groupon/index",
            present: "/packages/goods/present/index",
          },
          oe = {
            homeDashboard: "/packages/home/dashboard/index",
            pageHomeDashboard: "/pages/home/dashboard/index",
            login: "/pages/account/login/index",
            cart: "/packages/goods/cart/index",
            buy: "/packages/order/index",
            orderPaid: "/packages/order/paid/index",
            showcaseFeature: "/packages/home/feature/index",
            goodsDetail: {
              route: "/packages/goods/detail/index",
              handler: function (e, t) {
                var n = e;
                return (
                  t &&
                    ((n = t.goodsPageType ? ae[t.goodsPageType] : ae.default),
                    delete t.goodsPageType,
                    (n = k.a.add(n, t))),
                  n
                );
              },
            },
            pointCenter: "/packages/pointstore/point-center/index",
            pointGoodsDetail: {
              route: "/packages/pointstore/goods-details/index",
              handler: function (e, t) {
                return k.a.add(e, w.a.toSnakeCase(t));
              },
            },
            userCenter: "/packages/usercenter/dashboard/index",
            orderList: "/packages/trade/order/list/index",
            cardPackages: "/packages/card/all/index",
            userCounponList: "/packages/user/coupon/list/index",
            addressList: "/packages/order-native/address-list/index",
            refundList: "/packages/trade/refund/list/index",
            userSettings: "/packages/user/membercenter/setting/index",
            accountSettings: "/packages/account/settings/index",
            orderDetail: "/packages/trade/order/result/index",
            orderExpress: "/packages/trade/order/express/index",
            tab1: "/packages/home/tab/one",
            pageTab1: "/pages/home/tab/one",
            tab2: "/packages/home/tab/two",
            pageTab2: "/pages/home/tab/two",
            tab3: "/packages/home/tab/three",
            pageTab3: "/pages/home/tab/three",
            shopNoteList: "/packages/shop/shopnote/list/index",
            prepaidCard: "/packages/pre-card/home/index",
            presents: "/packages/ump/presents/index",
            memberCode: "/packages/member-code/index",
            taskCenter: "/packages/user/task-center/index",
            cashBack: "/packages/user/cashback/list/index",
            eTicketDetail: {
              route: "/packages/trade/cert/verify-ticket/index",
              handler: function (e, t) {
                return k.a.add(e, w.a.toSnakeCase(t));
              },
            },
            selfFetchAddress: "/packages/order/self-fetch-address/index",
            salesmanCenter: "/packages/salesman/salesman-center/index",
            couponDetail: {
              route: "/packages/user/coupon/detail/index",
              handler: function (e, t) {
                var n = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ne(Object(n), !0).forEach(function (t) {
                          Object(r.a)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : ne(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({ from: "list" }, t);
                return k.a.add(e, n);
              },
            },
            couponGoodsList: "/packages/user/coupon/goods-list/index",
            fillMemberInfo: {
              route: "/pages/common/webview-page/index",
              handler: function (e, t) {
                var n = t.alias;
                return k.a.add(e, {
                  src: encodeURIComponent(
                    "/wscuser/levelcenter/fill?alias=".concat(
                      n,
                      "&fromScene=complete"
                    )
                  ),
                  title: "会员中心",
                });
              },
            },
            contactInfo: {
              route: "/packages/order/contact/index",
              handler: function (e, t) {
                return k.a.add(e, w.a.toSnakeCase(t));
              },
            },
            change: {
              route: "/pages/common/webview-page/index",
              handler: function (e) {
                return k.a.add(e, {
                  src: encodeURIComponent("/wscassets/change/profile"),
                });
              },
            },
            addressEdit: {
              route: "/packages/order-native/address-edit/index",
              handler: function (e, t) {
                return k.a.add(e, w.a.toSnakeCase(t));
              },
            },
            idcardInfo: {
              route: "/pages/common/webview-page/index",
              handler: function (e, t) {
                var n = t.type,
                  r = void 0 === n ? "common" : n,
                  a = getCurrentPages(),
                  o = {
                    common: { path: "/wscassets/cert/pwd/idcard", fromId: 10 },
                    tax: { path: "/wscassets/cert/tax/idcard", fromId: 12 },
                  },
                  i = "";
                if (Array.isArray(a) && a.length > 0) {
                  var c = a[a.length - 1],
                    s = c.route,
                    u = c.options;
                  (i = "/".concat(s)),
                    u &&
                      Object.keys(u).forEach(function (e, t) {
                        i +=
                          t > 0
                            ? "&".concat(e, "=").concat(u[e])
                            : "?".concat(e, "=").concat(u[e]);
                      });
                }
                var p = o[r] || o.common,
                  f = p.path,
                  d = p.fromId;
                return k.a.add(e, {
                  src: encodeURIComponent(
                    ""
                      .concat(f, "?fromId=")
                      .concat(d, "&returnUrl=")
                      .concat(encodeURIComponent(i))
                  ),
                });
              },
            },
          };
        function ie(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "navigateTo";
          return new Promise(function (r, a) {
            if (re[n]) {
              if (n !== re.navigateBack) {
                var o = oe[e];
                o && "object" === Object(d.a)(o)
                  ? (o = o.handler(o.route, t))
                  : "string" == typeof o && (o = k.a.add(o, t)),
                  wx[n]({ url: o, success: r, fail: a });
              } else wx[n]({ delta: t.delta, success: r, fail: a });
            } else a(new Error("not supported navigateType: " + n));
          });
        }
        function ce(e, t) {
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
        function se(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ce(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ce(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var ue = { appName: "" },
          pe = ["info", "error", "warn"],
          fe = new ((function () {
            function e() {
              Object(c.a)(this, e),
                (this.systemInfo = null),
                (this.extConfig = null);
            }
            return (
              Object(s.a)(e, [
                {
                  key: "getSystemInfo",
                  value: function () {
                    return (
                      this.systemInfo ||
                        (this.systemInfo = wx.getSystemInfoSync()),
                      this.systemInfo
                    );
                  },
                },
                {
                  key: "getExtConfig",
                  value: function () {
                    return (
                      this.extConfig ||
                        (this.extConfig = wx.getExtConfigSync()),
                      this.extConfig
                    );
                  },
                },
              ]),
              e
            );
          })())(),
          de = function () {
            var e,
              t,
              n = fe.getSystemInfo(),
              r = fe.getExtConfig();
            return se(
              se(
                { systemInfo: n },
                ((e = getCurrentPages()),
                {
                  history: (t = e.map(function (e) {
                    var t = e ? e.route : "",
                      n = t;
                    return e && e.options && (n = k.a.add(t, e.options)), n;
                  })),
                  currentPath: t[e.length - 1],
                })
              ),
              {},
              {
                wxVersion: n.version,
                SDKVersion: n.SDKVersion,
                appId: r.appId,
                kdtId: r.kdtId,
                userVersion: r.userVersion,
              }
            );
          };
        function le(e) {
          var t = e.appName,
            n = e.tagName,
            r = void 0 === n ? "tag-name-undefined" : n,
            a = e.level,
            o = void 0 === a ? "info" : a,
            i = e.message,
            c = void 0 === i ? "message-undefined" : i,
            s = e.detail,
            u = void 0 === s ? {} : s;
          return t
            ? "string" != typeof t
              ? "appName参数类型错误"
              : "string" != typeof o
              ? "level参数类型错误"
              : "string" != typeof r
              ? "tagName参数类型错误"
              : "string" != typeof c
              ? "message参数类型错误"
              : "[object Object]" !== Object.prototype.toString.call(u)
              ? "detail参数类型错误"
              : ""
            : "请传入appName";
        }
        var ge = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ue;
            return new Promise(function (t, n) {
              var r,
                a = le(e);
              if (a) return n(a);
              try {
                r = de();
              } catch (e) {
                return n(e);
              }
              var o = e.appName,
                i = e.tagName,
                c = void 0 === i ? "tag-name-undefined" : i,
                s = e.message,
                u = void 0 === s ? "message-undefined" : s,
                p = e.detail,
                f = void 0 === p ? {} : p,
                d = O[o];
              if (!d) return n("appName 传入错误");
              var l = o,
                g = "mp_" + o.replace(/-/g, "_"),
                h = f.orderNo,
                v = e.level,
                y = void 0 === v ? "info" : v;
              -1 === pe.indexOf(y) && (y = "info");
              var m = "";
              try {
                m = JSON.stringify(f);
              } catch (e) {
                return n(e);
              }
              var b = {
                app: l,
                log_index: g,
                level: y,
                tag: "".concat(c, ": ").concat(u),
                detail: JSON.stringify({
                  isvDetail: m,
                  extra: se(se({}, r), {}, { cloudAppId: d, orderNo: h }),
                }),
              };
              wx.request({
                url: "https://tj-isv.youzanyun.com",
                method: "POST",
                header: { "Content-Type": "application/x-www-form-urlencoded" },
                data: b,
                success: t,
                fail: n,
              });
            });
          },
          he = function (e) {
            return x[e] || {};
          };
        function ve(e, t) {
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
        function ye(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ve(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ve(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var me = {};
        var be = [];
        function ke() {
          return (
            0 === be.length &&
              me.list &&
              (be = me.list.map(function (e) {
                return (
                  (t = e.pageName),
                  0 ===
                  (r = (n = oe[t])
                    ? "string" == typeof n
                      ? n
                      : n.route
                    : t).indexOf("/")
                    ? r
                    : "/".concat(r)
                );
                var t, n, r;
              })),
            be
          );
        }
        function we(e) {
          var t = e || getCurrentPages()[0].route;
          if (t) {
            t = 0 === t.indexOf("/") ? t : "/".concat(t);
            var n = me.list,
              r = void 0 === n ? [] : n,
              a = ke().indexOf(t);
            if (a >= 0) return r[a];
          }
        }
        function Oe() {
          var e = we(),
            t = me.color,
            n = me.selectedColor,
            r = me.list;
          return {
            color: t,
            selectedColor: n,
            list: e
              ? r.map(function (t) {
                  return ye(
                    ye({}, t),
                    {},
                    {
                      selected:
                        e.pageName === t.pageName &&
                        e.pageTitle === t.pageTitle,
                    }
                  );
                })
              : r,
          };
        }
        function xe(e) {
          var t,
            n = e.pageName,
            r = e.params;
          if ("custom" === e.pageType) t = n;
          else {
            var a = oe[n];
            t = a && "string" == typeof a ? a : a.route;
          }
          var o = getCurrentPages() || [],
            i = o.length;
          if (i > 0) {
            if ("/" + o[i - 1].route === t) return;
            if (i > 1) return wx.reLaunch({ url: k.a.add(t, r || {}) });
          }
          wx.redirectTo({
            url: k.a.add(t, r || {}),
            fail: function () {
              wx.reLaunch({ url: k.a.add(t, r || {}) });
            },
          });
        }
        function je(e) {
          if (0 !== e.indexOf("http")) return !1;
          var t = o(e.split("/"), 3);
          t[0], t[1];
          return -1 !== t[2].indexOf(".youzan.com");
        }
        var _e = [
          "pages/goods/detail/index",
          "packages/goods/detail/index",
          "packages/goods/lucky-draw-group/index",
          "packages/goods/seckill/index",
          "packages/goods/help-cut/index",
          "packages/goods/groupon/index",
          "packages/goods/tuan/index",
          "packages/goods/present/index",
          "packages/goods/points/index",
          "pages/goods/cart/index",
          "packages/goods/cart/index",
          "packages/trade/cart-v1/index",
          "packages/order/index",
          "packages/order/paid/index",
          "packages/order/paid-v1/index",
          "packages/order/address-list/index",
          "packages/order/address-edit/index",
          "packages/order-native/index",
          "packages/order-native/address-list/index",
          "packages/order-native/address-edit/index",
          "pages/home/dashboard/index",
          "packages/home/dashboard/index",
          "pages/home/feature/index",
          "packages/home/feature/index",
          "pages/home/tab/one",
          "pages/home/tab/two",
          "pages/home/tab/three",
          "pages/tab/one/index",
          "pages/tab/two/index",
          "pages/tab/three/index",
          "packages/home/tab/one",
          "packages/home/tab/two",
          "packages/home/tab/three",
          "pages/usercenter/dashboard/index",
          "packages/retail/usercenter/dashboard-v2/index",
          "packages/usercenter/dashboard/index",
          "packages/trade/order/result/index",
          "packages/trade/order-detail-v1/index",
          "packages/trade/order/list/index",
          "packages/shop-select/chain-store/shopselect/index",
          "packages/salesman/promote/index",
          "packages/shop/salesman/promote/index",
          "packages/order/address-map/index",
          "packages/order-native/address-map/index",
          "packages/groupbuying/buyer-trade/detail/index",
          "packages/order/invoice/index",
          "packages/shop/goods/search/index",
          "packages/collage/groupon/detail/index",
          "packages/order-native/invoice/index",
          "packages/shop/multi-store/index/index",
          "packages/order-native/coupon/index",
          "packages/shop/search-page/index",
          "packages/order-native/address-list/index",
          "packages/order-native/address-edit/index",
          "packages/paid/pay-result/success/index",
          "packages/trade-buy/order/buy/index",
          "packages/trade-pay/pay/index",
          "packages/trade/order-detail/index",
          "packages/trade-cart/cart/index",
          "packages/shop/levelcenter/free/index",
          "packages/shop/levelcenter/plus/index",
          "packages/goods-list/search-result/index",
          "pages-retail/usercenter/dashboard-v2/index",
          "packages/trade-buy-subpage/order/address-edit/index",
          "packages/shop/shopnote/detail/index",
          "packages/benefit-card/detail/index",
          "pages/home/page/index",
        ];
        var Pe,
          Se,
          Ce = (function () {
            function e(t) {
              var n = t.app,
                r = t.env,
                a = t.options,
                o = void 0 === a ? {} : a;
              Object(c.a)(this, e),
                (this.__yunapp__ = n),
                (this.app = new F()),
                (this.page = null),
                (this.__process__ = {});
              var i = new ee({
                app: n,
                env: r || "prod",
                getEnv: he,
                isMock: o.isMock,
              });
              (this.request = function (e) {
                i.request(e);
              }),
                (this.uploadFile = function (e) {
                  i.uploadFile(e);
                }),
                (this.navigate = ie),
                (this.storage = new G()),
                (this.logger = ge),
                (this.getEnv = he),
                (this.tabbar = {
                  data: me,
                  switchTab: xe,
                  getComputedTabbar: Oe,
                  getMatchedTabbarItem: we,
                }),
                (this.utils = te),
                this.__init();
            }
            return (
              Object(s.a)(e, [
                {
                  key: "__init",
                  value: function () {
                    var e = this;
                    Object.defineProperty(this, "page", {
                      get: function () {
                        return e.__currentPage();
                      },
                    });
                  },
                },
                {
                  key: "getApp",
                  value: function () {
                    return this.app;
                  },
                },
                {
                  key: "resetPage",
                  value: function () {
                    var e = this.__currentPage();
                    e && (e = null);
                  },
                },
                {
                  key: "getLaunchOptionsSync",
                  value: function () {
                    return wx.getLaunchOptionsSync();
                  },
                },
                {
                  key: "__currentPage",
                  value: function () {
                    var e = (function (e, t) {
                      if (null === e) return null;
                      if ("function" != typeof t) return null;
                      for (var n = e.length - 1; n >= 0; ) {
                        var r = e[n];
                        if (t.call({}, r, n, e)) return r;
                        n--;
                      }
                      return null;
                    })(getCurrentPages(), function (e) {
                      return _e.indexOf(e.route) >= 0;
                    });
                    return e
                      ? (e.__yunPageData__ || (e.__yunPageData__ = new Q()),
                        e.__yunPageData__)
                      : null;
                  },
                },
                {
                  key: "openWebview",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "navigate",
                      n = arguments.length > 2 ? arguments[2] : void 0;
                    if (!e) return Promise.reject("navigator 参数 path 必须");
                    if (-1 === ["navigate", "redirect"].indexOf(t))
                      return Promise.reject("不支持的 type 属性 ".concat(t));
                    var r = "/packages/zan-web-view/index";
                    return (
                      n &&
                        n.youzan &&
                        je(e) &&
                        (r = "/pages/common/webview-page/index"),
                      new Promise(function (a, o) {
                        wx["".concat(t, "To")]({
                          url: ""
                            .concat(r, "?url=")
                            .concat(encodeURIComponent(e))
                            .concat(n && n.pure ? "&pure=1" : ""),
                          fail: o,
                          success: a,
                        });
                      })
                    );
                  },
                },
              ]),
              e
            );
          })();
        function Te(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Pe || (Pe = new Ce({ app: e, env: t.env })), Pe;
        }
        function De(e) {
          return (function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (
              e &&
                !e.__globalBridgeReady &&
                ((e.__globalBridge = Se = Te(e, t)),
                (e.__globalBridgeReady = !0)),
              Se
            );
          })(e || getApp());
        }
        (F.prototype.__addProcess = function (e, t) {
          this.process[e] = t;
        }),
          (F.prototype.__setData = function (e, t) {
            var n = this,
              a = e;
            "string" == typeof e && (a = Object(r.a)({}, e, t)),
              Object.assign(this.__data, a),
              Object.keys(a).forEach(function (e) {
                Object.defineProperty(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                    return n.__data[e];
                  },
                });
              }),
              this.__notifyDataSubscribers(e, t);
          }),
          (F.prototype.__setEvent = function (e, t) {
            e && (this.__events[e] = t);
          }),
          (F.prototype.__triggerLifetimes = function (e, t) {
            return W(this, e, t);
          }),
          (Q.prototype.__setData = function (e, t) {
            var n = this;
            (this.data[e] = t),
              this[e] ||
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                    return n.data[e];
                  },
                }),
              this.__notifyDataSubscribers(e, t);
          }),
          (Q.prototype.__setEvent = function (e, t) {
            e && (this.events[e] = t);
          }),
          (Q.prototype.__addProcess = function (e, t) {
            this.process[e] = t;
          }),
          (Q.prototype.__triggerLifetimes = function (e, t) {
            return W(this, e, t);
          }),
          (Ce.prototype.setPageProcess = function (e, t) {
            if (e && t) {
              var n = this.__currentPage();
              n && n.__addProcess(e, t);
            }
          }),
          (Ce.prototype.setPageEvent = function (e, t) {
            if (e && t) {
              var n = this.__currentPage();
              n && n.__setEvent(e, t);
            }
          }),
          (Ce.prototype.setPageData = function (e, t, n) {
            var a = [];
            if ("string" != typeof t && Object.keys(t).length > 0)
              for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && a.push([c, t[c]]);
            else "string" == typeof t && n && a.push([t, n]);
            var s = this.__currentPage();
            a.forEach(function (t) {
              var n = o(t, 2),
                a = n[0],
                c = n[1];
              Object(i.e)(e, Object(r.a)({}, a, c), function (e) {
                s && (s.__setData(a, e), s.__notifyDataSubscribers(a, e));
              });
            });
          }),
          (Ce.prototype.__initTabbarData = function (e) {
            var t;
            (t = e), Object.assign(me, t);
          }),
          (Ce.prototype.on = function (e, t) {
            this.app.on(e, t);
          });
      },
      OTjV: function (e, t, n) {
        n.d(t, "a", function () {
          return u;
        });
        var r = n("Fcif"),
          a = n("VmHG");
        function o(e) {
          return () => e;
        }
        function i(e) {
          return Object.keys(e).reduce((t, n) => {
            var r = e[n];
            return (
              (t[n] = function () {
                return r(this, this);
              }),
              t
            );
          }, {});
        }
        function c(e) {
          return Object.keys(e).reduce((t, n) => {
            var r = e[n];
            return (
              (t[n] = function () {
                for (
                  var e = this,
                    t = e,
                    n = arguments.length,
                    a = new Array(n),
                    o = 0;
                  o < n;
                  o++
                )
                  a[o] = arguments[o];
                return r(t, ...a);
              }),
              t
            );
          }, {});
        }
        function s(e) {
          return Object.keys(e).reduce((t, n) => {
            var r = e[n];
            return (
              (t[n] = function () {
                for (
                  var e = this,
                    t = (t, n) => {
                      e[t](n);
                    },
                    n = arguments.length,
                    a = new Array(n),
                    o = 0;
                  o < n;
                  o++
                )
                  a[o] = arguments[o];
                return r(
                  { state: e, getters: e, commit: t, dispatch: t },
                  ...a
                );
              }),
              t
            );
          }, {});
        }
        function u(e) {
          var { state: t, getters: n, actions: u, mutations: p } = e;
          return Object(a.a)({
            state: o(t),
            getters: i(n),
            actions: Object(r.a)({}, s(u), c(p)),
          });
        }
      },
      RmQ0: function (e, t) {},
      "S+xN": function (e, t, n) {
        var r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = {
          fullfillImage: ((r = n("XHR9")) && r.__esModule ? r : { default: r })
            .default,
        };
        (t.default = a), (e.exports = t.default);
      },
      TCYk: function (e, t, n) {
        n.r(t);
        n("c4sB"), n("52+L");
      },
      TJjZ: function (e, t, n) {
        n.d(t, "a", function () {
          return a;
        });
        var r = n("YZeP");
        function a(e, t) {
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
      VGj5: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ruleAdapter = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
            t = t.trim();
            var n = /^origin|middle|large|small$/i,
              r = t.match(n);
            if (r) {
              var a = s(e),
                o = r[0];
              t = u(o, a);
            }
            return t;
          }),
          (t.urlAdaptor = function (e, t) {
            var n = d(e, t);
            e = n
              ? n.hasWatermark
                ? (function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = arguments.length > 2 ? arguments[2] : void 0,
                      r = e,
                      a = t.isGifOptimation,
                      i = o() && (n || d(e, a));
                    if (i) {
                      var c = i.hasWatermark,
                        s = i.format,
                        u = i.width,
                        l = i.height,
                        g = i.quality,
                        h = i.imgSuffixAndWatermark,
                        v = "imageView2/2/w/"
                          .concat(u, "/h/")
                          .concat(l, "/q/")
                          .concat(g, "/format/")
                          .concat(s),
                        y = c ? "|" : "?";
                      r = ""
                        .concat(r.replace(f(), ".") + h)
                        .concat(y)
                        .concat(encodeURIComponent(v));
                    } else r = p(r);
                    return r;
                  })(e, t, n)
                : (function (e, t) {
                    var n = t.originFormat,
                      r = t.format,
                      a = t.width,
                      o = (function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 1e3,
                          t = ["small", "middle", "large", "origin"],
                          n = 3;
                        e <= 260
                          ? (n = 0)
                          : e <= 520
                          ? (n = 1)
                          : e <= 900 && (n = 2);
                        return t[n];
                      })(a),
                      i = e.replace(f(), ""),
                      c = u(o, r);
                    return "".concat(i, ".").concat(n).concat(c);
                  })(e, n)
              : p(e);
            return e;
          }),
          (t.parseUrl =
            t.getCdnRegex =
            t.transQiniuFormatToWebp =
            t.checkWeakNetwork =
            t.getWeakNetwork =
            t.getCanWebp =
              void 0);
        var r = n("04fg"),
          a = {
            canwebp: (0, r.getStorage)("canwebp"),
            networkStatus: (0, r.getStorage)("networkStatus"),
          },
          o = function () {
            var e = !1;
            try {
              a.canwebp || (a.canwebp = (0, r.getStorage)("canwebp")),
                (e = "ok" === a.canwebp);
            } catch (t) {
              return e;
            }
            return e;
          };
        t.getCanWebp = o;
        var i = function (e) {
            return "2g" === e || "3g" === e || "none" === e;
          },
          c = function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1e4,
              o = i(e),
              c = i(e) ? "bad" : "fine";
            o
              ? (t = setTimeout(function () {
                  (0, r.setStorage)("networkStatus", c), (a.networkStatus = c);
                }, n))
              : (t && clearTimeout(t),
                (0, r.setStorage)("networkStatus", c),
                (a.networkStatus = c));
          };
        t.getWeakNetwork = function () {
          var e = !1;
          try {
            e =
              "bad" === (a.networkStatus || (0, r.getStorage)("networkStatus"));
          } catch (e) {}
          return e;
        };
        t.checkWeakNetwork = function () {
          try {
            "undefined" != typeof wx &&
              wx.getNetworkType &&
              wx.onNetworkStatusChange &&
              (wx.getNetworkType({
                success: function (e) {
                  return c(e.networkType);
                },
              }),
              wx.onNetworkStatusChange(function (e) {
                return c(e.networkType);
              }));
          } catch (e) {}
        };
        var s = function (e) {
            var t = e.match(/\.(jpe?g|png|bmp|gif)/i),
              n = "jpg";
            return t && (n = t[1]), n;
          },
          u = function (e, t) {
            var n = (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              e = e.toLocaleLowerCase();
              var t = /(jpg|gif|png|webp)/;
              return t.test(e) || (e = "jpg"), o() && (e = "webp"), e;
            })(t);
            return "!".concat(e, ".").concat(n);
          },
          p = function (e) {
            var t,
              n = o(),
              r = /(\?imageView2\/\d\/w\/\d+\/h\/\d+\/q\/\d+\/format\/)(\w+)/;
            if (((t = e), r.test(e))) {
              var a = e.match(r)[2];
              if (n) "webp" !== a && (t = e.replace(r, "$1webp"));
              else if ("webp" === a) {
                var i = s(e);
                t = e.replace(r, "$1".concat(i));
              }
            }
            return t;
          };
        t.transQiniuFormatToWebp = p;
        var f = function () {
          return /\.([^.!]+)!([0-9]{1,4})x([0-9]{1,4})q?([0-9]{0,2}|100)?(\+2x)?\..+/;
        };
        t.getCdnRegex = f;
        var d = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = o(),
            r = t.isGifOptimation,
            a = /([^.!]+)\?watermark\/.*\/$/,
            i = 1,
            c = e.match(f());
          if (!c || c.length < 4) return null;
          var s,
            u = r ? "gif/unoptimize/1" : "gif",
            p = c[1].match(a),
            d = !1;
          p && p.length ? ((s = p[1]), (d = !0)) : (s = c[1]);
          var l = s || "";
          return (
            "gif" === s
              ? (l = u)
              : n
              ? (l = "webp")
              : ("webp" !== s && "jpeg" !== s) || (l = "jpg"),
            "+2x" === c[5] && (i = 2),
            {
              hasWatermark: d,
              originFormat: s,
              format: l.toLocaleLowerCase(),
              width: parseInt(c[2], 10) * i,
              height: parseInt(c[3], 10) * i,
              quality: c[4] || 75,
              imgSuffixAndWatermark: c[1],
              multiple: i,
            }
          );
        };
        t.parseUrl = d;
      },
      XHR9: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n("ECKV"),
          a = n("04fg"),
          o = n("VGj5");
        var i = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!e) return "";
          if (e.match(/^data:/i)) return e;
          if (!n.imgcdn && !n.imgqn) {
            var i = (0, a.getRoot)(),
              c = (i._global && i._global.url) || r.GLOBAL_URL;
            n.imgcdn = c.imgqn || c.imgcdn;
          }
          var s = n.imgcdn || n.imgqn || "https://img01.yzcdn.cn",
            u = [
              /^(https?:)?\/\/imgqn.koudaitong.com/,
              /^(https?:)?\/\/kdt-img.koudaitong.com/,
              /^(https?:)?\/\/img01.yzcdn.cn/,
              /^(https?:)?\/\/dn-kdt-img.qbox.me/,
            ];
          t = (0, o.ruleAdapter)(e, t);
          for (var p = 0; p < u.length; p++) e = e.replace(u[p], s);
          if (
            (e = (e = e.replace(
              /^http:\/\/img(\d+).yzcdn.cn/,
              "https://img$1.yzcdn.cn/"
            )).replace(
              "imgqntest.koudaitong.com",
              "dn-kdt-img-test.qbox.me"
            )).match(/^(https?:)?\/\//i)
          ) {
            if (
              !(
                e.match(s) ||
                e.match(/img(\d*)\.yzcdn\.cn/) ||
                e.match("dn-kdt-img-test.qbox.me")
              )
            )
              return e;
            e.match("!") || (e = "".concat(e).concat(t));
          } else e = "".concat(s, "/").concat(e).concat(t);
          return !1 !== n.toWebp && (e = (0, o.urlAdaptor)(e, n)), e;
        };
        (t.default = i), (e.exports = t.default);
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
      b1kB: function (e, t) {},
      cXWm: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return a;
          });
        var r = {
            [1]: (e) => "/packages/paidcontent/column/index?alias=" + e,
            [2]: (e) => "/packages/paidcontent/content/index?alias=" + e,
            [3]: (e) => "/packages/paidcontent/rights/index?alias=" + e,
            [4]: (e) => "/packages/paidcontent/live/index?alias=" + e,
            [5]: (e) => "/packages/punch/activity/index?alias=" + e,
            [9]: (e) => "/packages/new-punch/introduction/index?alias=" + e,
          },
          a = { EXTERNAL_SALESMAN: 2, INTERNAL_SALESMAN: 1 };
      },
      cqgp: function (e, t, n) {
        var r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
        t.a = function (e) {
          var t = e.profitRange,
            n = void 0 === t ? [] : t,
            a = e.commissionSendType,
            o = void 0 === a ? 0 : a,
            i = e.customPointsName,
            c = void 0 === i ? "积分" : i,
            s = e.commissionConfigDTO,
            u = n[0],
            p = n[1],
            f = (function (e) {
              var t = e.sendType,
                n = e.pointsName,
                r = e.config,
                a = e.maxCommission,
                o = e.minCommission,
                i = !!t;
              if (i && r) {
                var c = r.everyMoneyFen,
                  s = void 0 === c ? 0 : c,
                  u = r.points,
                  p = void 0 === u ? 0 : u;
                (a = parseInt(String(Math.floor(a / s) * p), 10)),
                  (o = parseInt(String(Math.floor(o / s) * p), 10));
              } else (a /= 100), (o /= 100);
              return {
                maxCommissionStr: i ? "" + a + n : "¥" + a,
                minCommissionStr: i ? "" + o + n : "¥" + o,
                maxCommissionAmount: a,
                minCommissionAmount: o,
              };
            })({
              sendType: o,
              pointsName: c,
              config: s,
              maxCommission: (p = p || u),
              minCommission: u,
            }),
            d = f.maxCommissionStr,
            l = f.minCommissionStr,
            g = f.maxCommissionAmount,
            h = g !== f.minCommissionAmount,
            v = {
              commissionText: "分享后最高赚" + d,
              commissionRangeText: "分享后预计可赚 " + l + " - " + d,
              commissionRange: n,
              maxCommission: g,
              unit: c,
              maxCommissionStr: g > 0 ? d : "",
              isMultiCommission: h,
            };
          return r(r({}, v), {
            compatibleCommissionText: h
              ? v.commissionRangeText
              : v.commissionText,
            compatibleCommission: h ? l + " - " + d : d,
          });
        };
      },
      dV47: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = o(n("6F6u")),
          a = o(n("pIhq"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = { debounce: r.default, throttle: a.default };
        (t.default = i), (e.exports = t.default);
      },
      gc3r: function (e, t, n) {
        n.d(t, "b", function () {
          return f;
        }),
          n.d(t, "a", function () {
            return d;
          });
        var r = n("Fcif"),
          a = n("jA1y"),
          o = n("vgcL"),
          i = n("2wjL"),
          c = n("u8kV"),
          s = n("rDSc"),
          u = n("8B9M"),
          p = function (e, t) {
            e || (!1 !== t.isNeedShareMore && this.setYZData({ salesman: t }));
          },
          f = (e) => {
            var t = Object(s.a)(Object(r.a)({}, e, { path: e.url }), "url");
            return Object(a.c)(t);
          },
          d = function (e) {
            var {
                scene: t,
                sst: n,
                gst: a,
                getSalesmanData: s = p,
                query: d,
              } = e,
              l = Object(u.a)() || {},
              g = l.getToken() || {},
              { route: h = "", options: v = {} } = Object(c.d)(),
              y = d || v,
              m = i.a.add(h, y),
              b = { gst: (a = a || Object(o.e)(t)), sst: n, sourceUrl: m },
              { yzUserId: k } = g;
            Object(o.f)({
              url: m,
              logParams: l.logger.getLogParams && l.logger.getLogParams(),
              userId: k,
              request: f,
            }),
              Object(o.a)(Object(r.a)({}, b)),
              Object(o.b)({}, s.bind(this));
          };
      },
      hisu: function (e, t, n) {
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        n.d(t, "a", function () {
          return r;
        });
      },
      jQ93: function (e, t, n) {
        var r = n("rmWm"),
          a = n.n(r).a,
          o = n("YIkY"),
          i = n.n(o).a;
        function c(e) {
          return (
            !0 ==
              (null != (t = e) &&
                "object" == typeof t &&
                !1 === Array.isArray(t)) &&
            "[object Object]" === Object.prototype.toString.call(e)
          );
          var t;
        }
        var s = function (e) {
          var t, n;
          return (
            !1 !== c(e) &&
            "function" == typeof (t = e.constructor) &&
            !1 !== c((n = t.prototype)) &&
            !1 !== n.hasOwnProperty("isPrototypeOf")
          );
        };
        t.a = function (e) {
          var t,
            n = i(e);
          if ("object" !== n && "array" !== n) return a(e);
          for (
            var r = [],
              o = [{ value: e, key: void 0, ctx: null }],
              c = function () {
                var e = o.shift(),
                  { value: n, key: c, ctx: u } = e;
                r.forEach((e) => {
                  if (e === n) throw new Error("Deep copy circular structure");
                });
                var { value: p, needCycle: f } = (function (e) {
                  switch (i(e)) {
                    case "object":
                      return s(e)
                        ? { value: new e.constructor(), needCycle: !0 }
                        : { value: e, needCycle: !1 };
                    case "array":
                      return { value: new e.constructor(), needCycle: !0 };
                    default:
                      return { value: a(e), needCycle: !1 };
                  }
                })(n);
                u ? (u[c] = p) : (t = p),
                  f && r.push(n),
                  f &&
                    Object.keys(n).forEach((e) => {
                      o.push({ value: n[e], key: e, ctx: p });
                    });
              };
            o.length > 0;

          )
            c();
          return t;
        };
      },
      jZtE: function (e) {
        e.exports = JSON.parse("{}");
      },
      nsWR: function (e, t, n) {
        n.d(t, "a", function () {
          return o;
        });
        var r = n("taYb"),
          a = ["gdt_vid", "qz_gdt", "dc_ps", "atr_ps"];
        function o(e) {
          var t = r.a.toSnakeCase(e),
            n = {};
          return (
            a.forEach((e) => {
              t[e] && (n[e] = t[e]);
            }),
            n
          );
        }
      },
      pIhq: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = function (e, t, n) {
          var r,
            a,
            o = [],
            i = 0;
          n || (n = {});
          var c = function () {
              (i = !1 === n.leading ? 0 : new Date().getTime()),
                (r = null),
                e.apply(a, o),
                r || ((a = null), (o = []));
            },
            s = function () {
              for (
                var o = arguments.length, s = new Array(o), u = 0;
                u < o;
                u++
              )
                s[u] = arguments[u];
              var p = new Date().getTime();
              i || !1 !== n.leading || (i = p);
              var f = t - (p - i);
              (a = this),
                f <= 0 || f > t
                  ? (r && clearTimeout(r),
                    (r = null),
                    (i = p),
                    e.apply(a, s),
                    r || ((a = null), (s = [])))
                  : r || !1 === n.trailing || (r = setTimeout(c, f));
            };
          return (
            (s.cancel = function () {
              r && clearTimeout(r), (i = 0), (r = null);
            }),
            s
          );
        };
        (t.default = r), (e.exports = t.default);
      },
      yBJb: function (e, t, n) {
        n.d(t, "a", function () {
          return o;
        });
        var r = n("z6zH");
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, Object(r.a)(a.key), a);
          }
        }
        function o(e, t, n) {
          return (
            t && a(e.prototype, t),
            n && a(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
      },
      ygrD: function (e, t, n) {
        n.d(t, "a", function () {
          return i;
        });
        var r = n("K0L/"),
          a = n.n(r),
          o = n("9mFz");
        class i {
          constructor(e) {
            (this.onSkuSelected = Object(o.h)()),
              (this.ctx = e.ctx),
              this.initCloudData();
          }
          initCloudData() {}
        }
        i.widgets = { Main: a() };
      },
    }
  )
);
