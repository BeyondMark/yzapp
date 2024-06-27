"use strict";
var r = require("~/r");
r(
  "5xJ6",
  Object.assign(
    {},
    require("../c.js").modules,
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
      "5xJ6": function (e, t, n) {
        n.r(t);
        var r = n("Fcif"),
          a = n("+I+c"),
          o = n("NERQ"),
          i = n("qJXH"),
          s = n("hIZB"),
          c = n("R18q"),
          u = n("JBq8"),
          p = n("YeA1"),
          d = n("q8nf"),
          l = n.n(d),
          f = (n("ds/A"), n("I0XR")),
          g = ["wordItem"],
          h = ["text"],
          { dmc: v } = Object(p.a)(),
          y = getApp(),
          { system: m } = wx.getSystemInfoSync(),
          b = m && m.indexOf("iOS") > -1,
          k = {};
        Object(i.b)(k, {
          data: {
            historyList: [],
            hotList: [],
            keepWords: "",
            inputFocus: b,
            hotListLoggerParams: {},
            design: [],
            searchDefaultValue: "",
          },
          onLoad(e) {
            var { keepWords: t = "", oldHots: n = "", isFromList: r = "" } = e,
              a = this.getOldHotWords(n),
              o = "";
            try {
              o = decodeURIComponent(t);
            } catch (e) {
              o = "";
            }
            f.a.getHotWords().then((e) => {
              var t,
                { chosenWords: n = [], normalWords: i = [] } = e || {},
                {
                  automaticSwitch: s = 0,
                  isCover: p,
                  extraInfo: d = {},
                } = e || {},
                l = [...i],
                f = Object(u.a)(e);
              (n = Object(u.b)(n, !0, f.chosenWords || [])),
                (i = Object(u.b)(i, !1, f.normalWords || []));
              var g = [];
              (g =
                +s && p
                  ? n.concat(Object(u.b)(l || [], !1, []))
                  : p || 0 === a.length
                  ? n.concat(i)
                  : Object(u.b)(a, !1, [])),
                null == (t = c.a.mark) ||
                  null == t.log ||
                  t.log({ tag: "search-page", scene: ["route"] }),
                this.setYZData({
                  hotList: g,
                  keepWords: o,
                  hotListLoggerParams: d,
                  searchDefaultValue: "1" === r ? o : "",
                });
            }),
              this.renderHistory(),
              this.initDesign();
          },
          onShow() {
            b &&
              setTimeout(() => {
                this.setData({ inputFocus: !0 });
              }, 100);
          },
          initDesign() {
            var { design: e } = l.a,
              t = e.findIndex((e) => "config" === e.type);
            this.setData({ design: 0 === t ? e.slice(1) : e });
          },
          getOldHotWords(e) {
            var t = [],
              n = e;
            n
              ? wx.setStorageSync("deco:search_page_oldhotwords", n)
              : (n = wx.getStorageSync("deco:search_page_oldhotwords"));
            try {
              t = decodeURIComponent(n).split(",");
            } catch (e) {
              t = [];
            }
            return t;
          },
          handleClearHistory() {
            o.a.confirm({ title: "确定删除搜索历史？" }).then(() => {
              this.clearHistory();
            });
          },
          handleInputSearch(e) {
            var { text: t = "" } = e.detail;
            this.handleLog({
              words: t || this.data.keepWords || "",
              words_type: "common",
              slg: "",
              alg_id: "",
            }),
              (e.detail.type = "common"),
              this.startSearch(e.detail);
          },
          handleWordItemClick(e) {
            var { type: t = "" } = e.currentTarget.dataset || {},
              n = e.detail,
              { wordItem: o = {} } = n,
              i = Object(a.a)(n, g);
            this.handleLog(
              Object(r.a)({ words: o.text || "", words_type: t }, i, {
                slg: i.slg || "",
                alg_id: i.alg || "",
              })
            ),
              (e.detail.type = t),
              this.startSearch(Object(r.a)({}, i, { text: o.text }), o);
          },
          startSearch(e, t) {
            void 0 === t && (t = {});
            var { text: n = "" } = e,
              o = Object(a.a)(e, h),
              i = n || this.data.keepWords;
            t.link_switch && t.link_url
              ? Object(s.a)(t.link_type, t)
              : i &&
                (this.setYZData({ keepWords: i }),
                this.setHistory(i),
                v.redirectTo("Search", Object(r.a)({ q: i }, o)));
          },
          handleLog(e) {
            y.logger &&
              (y.logger.setContext(e, 30),
              y.logger.log({
                et: "click",
                ei: "search",
                en: "点击搜索",
                params: e,
              }));
          },
          setHistory(e) {
            var t = this.data.historyList.filter((t) => t.text !== e);
            t.unshift({ text: e }),
              t.length > 15 && t.splice(15, t.length),
              this.setYZData({ historyList: t }, () => {
                wx.setStorage({
                  key: "deco:search_page_history",
                  data: this.data.historyList,
                });
              });
          },
          renderHistory() {
            wx.getStorage({
              key: "deco:search_page_history",
              success: (e) => {
                var t = e.data || [];
                this.setYZData({ historyList: t });
              },
            });
          },
          clearHistory() {
            this.setYZData({ historyList: [] }, () => {
              wx.removeStorage({ key: "deco:search_page_history" });
            });
          },
        });
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
              s = [],
              c = function c() {
                var u = Date.now() - o;
                u < t && u >= 0
                  ? (r = setTimeout(c, t - u))
                  : ((r = null),
                    n || ((i = e.apply(a, s)), r || ((a = null), (s = []))));
              };
            function u() {
              a = this;
              for (
                var u = arguments.length, p = new Array(u), d = 0;
                d < u;
                d++
              )
                p[d] = arguments[d];
              (s = p), (o = Date.now());
              var l = n && !r;
              return (
                r || (r = setTimeout(c, t)),
                l && ((i = e.apply(a, s)), (a = null), (s = [])),
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
      JBq8: function (e, t, n) {
        n.d(t, "a", function () {
          return a;
        }),
          n.d(t, "b", function () {
            return o;
          });
        var r = n("Fcif"),
          a = (e) => {
            var t = {};
            if (e && e.wordConfigs)
              try {
                (t = JSON.parse(e.wordConfigs) || {}) && t.length && (t = t[0]);
              } catch (e) {}
            return t;
          },
          o = (e, t, n) =>
            (e || []).map((e, a) => {
              var o = n[a] || {};
              return Object(r.a)({}, o, { text: e, hot: t });
            });
      },
      MVmR: function (e, t, n) {
        n.d(t, "a", function () {
          return T;
        }),
          n.d(t, "b", function () {
            return C;
          }),
          n.d(t, "c", function () {
            return Ie;
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
                  s = [],
                  c = !0,
                  u = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else
                    for (
                      ;
                      !(c = (r = o.call(n)).done) &&
                      (s.push(r.value), s.length !== t);
                      c = !0
                    );
                } catch (e) {
                  (u = !0), (a = e);
                } finally {
                  try {
                    if (
                      !c &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (u) throw a;
                  }
                }
                return s;
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
          s = n("hisu"),
          c = n("yBJb"),
          u = n("6CzD"),
          p = n("sQvh");
        function d(e, t) {
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
        var l = n("J1LG");
        function f(e, t) {
          if (t && ("object" === Object(l.a)(t) || "function" == typeof t))
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
        function _(e) {
          return "object" === Object(l.a)(e)
            ? JSON.parse(JSON.stringify(e))
            : e;
        }
        var j = (function () {
          function e() {
            Object(s.a)(this, e), (this.funcs = {});
          }
          return (
            Object(c.a)(e, [
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
          d(n, e);
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
              return f(this, n);
            };
          })(n);
          function n() {
            return Object(s.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(c.a)(n, [
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
                        var i = n.apply(void 0, Object(u.a)(_(t)));
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
        })(j);
        function D(e, t) {
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
        function I(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? D(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : D(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var T = (function (e) {
            d(n, e);
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
                return f(this, n);
              };
            })(n);
            function n() {
              return Object(s.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(c.a)(n, [
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
                      a = I({}, this.funcs);
                    return (
                      Object.keys(a).forEach(function (e) {
                        var n = a[e];
                        try {
                          var o = n.apply(void 0, Object(u.a)(_(t)));
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
          })(j),
          A = 0;
        function E() {
          return Date.now() + A++ + "";
        }
        function L(e) {
          return e.__isPage
            ? e.events
            : e.__isApp
            ? e.__events
            : e.__events || (e.__events = {});
        }
        var N = {
            on: function (e, t) {
              if (t) {
                var n = L(this),
                  r = n[e] || (n[e] = new C());
                return r.on(e + "_" + E(), t), r;
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
                var n = L(this)[e];
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
                var n = L(this),
                  r = n[e] || (n[e] = new T());
                return r.on(e + "_" + E(), t), r;
              }
            },
            trigger: function (e, t) {
              if (e) {
                var n = L(this)[e];
                return n && n.trigger(t);
              }
            },
            triggerAsync: function (e, t) {
              if (e) {
                var n = L(this)[e];
                return n && n.trigger(t);
              }
            },
          },
          R = ["onLoad", "onShow"],
          q = ["onLoad", "onShow"];
        function W(e, t, n) {
          return (
            e.__lifetimes || (e.__lifetimes = {}),
            !(!t || !n || "function" != typeof n) &&
              !(e.__isPage && R.indexOf(t) < 0) &&
              !(e.__isApp && q.indexOf(t) < 0) &&
              (e.__lifetimes[t] || (e.__lifetimes[t] = []),
              e.__lifetimes[t].push(n),
              !0)
          );
        }
        function z(e, t, n) {
          if (e.__lifetimes && e.__lifetimes[t])
            try {
              e.__lifetimes[t].forEach(function (e) {
                "function" == typeof e && e(n);
              });
            } catch (e) {}
        }
        var U = function () {},
          B = (function () {
            function e() {
              Object(s.a)(this, e),
                (this.__isApp = !0),
                (this.__data = { shop: {}, user: {} }),
                (this.__events = {}),
                (this.process = {}),
                (this.__dataWatchers = {});
            }
            return (
              Object(c.a)(e, [
                {
                  key: "trigger",
                  value: function (e, t) {
                    if (e) {
                      var n = N.trigger.apply(this, [e, t]),
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
                    return N.on.apply(this, [e, t]);
                  },
                },
                {
                  key: "onAsync",
                  value: function (e, t) {
                    return N.onAsync.apply(this, [e, t]);
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    return N.once.apply(this, [e, t]);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    return N.off.apply(this, [e, t]);
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
                    if (e) return this.process[e] || U;
                  },
                },
                {
                  key: "lifetimes",
                  value: function (e, t) {
                    return W(this, e, t);
                  },
                },
              ]),
              e
            );
          })(),
          F = function () {},
          M = (function () {
            function e() {
              Object(s.a)(this, e),
                (this.__isPage = !0),
                (this.process = {}),
                (this.data = {}),
                (this.events = {}),
                (this.__dataWatchers = {});
            }
            return (
              Object(c.a)(e, [
                {
                  key: "getProcess",
                  value: function (e) {
                    if (e) return this.process[e] || F;
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
                      var n = N.trigger.apply(this, [e, t]),
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
                    return N.on.apply(this, [e, t]);
                  },
                },
                {
                  key: "onAsync",
                  value: function (e, t) {
                    return N.onAsync.apply(this, [e, t]);
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    return N.once.apply(this, [e, t]);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    return N.off.apply(this, [e, t]);
                  },
                },
                {
                  key: "lifetimes",
                  value: function (e, t) {
                    return W(this, e, t);
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
        function Z(e, t) {
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
        function Q(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Z(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Z(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var Y = (function () {
          function e() {
            Object(s.a)(this, e),
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
            Object(c.a)(e, [
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
                      Q(
                        Q({}, e),
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
        function G(e, t) {
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
        function H(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? G(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : G(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var J = "https://mp-isv.youzanyun.com/";
        function V() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "string" == typeof e && e.indexOf("yz_cloud_gateway") >= 0;
        }
        var K = "request",
          $ = "uploadFile",
          X = [],
          ee = (function () {
            function e(t) {
              var n = this;
              Object(s.a)(this, e),
                (this.defaultConfig = t),
                (this.app = t.app || getApp()),
                this.app.on("ecloud:request:queue:send", function (e) {
                  n.sendRequestQueue(e);
                });
            }
            return (
              Object(c.a)(e, [
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
                    return this.invoke(e, K);
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
                      r === K
                        ? function () {
                            return t.handleRequestConfig(n);
                          }
                        : function () {
                            return t.uploadFileRequest(n);
                          };
                    var a = this.getAppName(n),
                      o = n.succeed,
                      i = n.failed,
                      s = n.success,
                      c = n.fail,
                      u = n.complete,
                      p = function (e) {
                        o ? o(e) : s && s(e);
                      },
                      d = function (e) {
                        i ? i(e) : c && c(e);
                      },
                      l = function (e) {
                        u && u(e);
                      },
                      f = function (n, r) {
                        var o = t.getCurrentAppTokenInfo(a),
                          i = o,
                          s = i.status;
                        i.token
                          ? (t.handlePushRequestToQueue(e, a),
                            "getting" !== s &&
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
                      r !== K &&
                        r === $ &&
                        (401 == +e.statusCode && V(e.data)
                          ? f(e, function () {
                              return p(e);
                            })
                          : p(e));
                    }),
                      (n.fail = function (e) {
                        d(e);
                      }),
                      (n.complete = function (e) {
                        r === K
                          ? 200 == +e.statusCode
                            ? p(e.data)
                            : 401 == +e.statusCode && V(e.data)
                            ? f(e, function () {
                                return d(e);
                              })
                            : d(e)
                          : r === $ &&
                            (401 == +e.statusCode && V(e.data)
                              ? f(e, function () {
                                  return l(e);
                                })
                              : l(e));
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
                        H(
                          {
                            header: H(
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
                      this._request(J, a, e);
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
                      url: J + e.path,
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
                  var s = a[a.length - 1],
                    c = s.route,
                    u = s.options;
                  (i = "/".concat(c)),
                    u &&
                      Object.keys(u).forEach(function (e, t) {
                        i +=
                          t > 0
                            ? "&".concat(e, "=").concat(u[e])
                            : "?".concat(e, "=").concat(u[e]);
                      });
                }
                var p = o[r] || o.common,
                  d = p.path,
                  l = p.fromId;
                return k.a.add(e, {
                  src: encodeURIComponent(
                    ""
                      .concat(d, "?fromId=")
                      .concat(l, "&returnUrl=")
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
                o && "object" === Object(l.a)(o)
                  ? (o = o.handler(o.route, t))
                  : "string" == typeof o && (o = k.a.add(o, t)),
                  wx[n]({ url: o, success: r, fail: a });
              } else wx[n]({ delta: t.delta, success: r, fail: a });
            } else a(new Error("not supported navigateType: " + n));
          });
        }
        function se(e, t) {
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
        function ce(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? se(Object(n), !0).forEach(function (t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : se(Object(n)).forEach(function (t) {
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
          de = new ((function () {
            function e() {
              Object(s.a)(this, e),
                (this.systemInfo = null),
                (this.extConfig = null);
            }
            return (
              Object(c.a)(e, [
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
          le = function () {
            var e,
              t,
              n = de.getSystemInfo(),
              r = de.getExtConfig();
            return ce(
              ce(
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
        function fe(e) {
          var t = e.appName,
            n = e.tagName,
            r = void 0 === n ? "tag-name-undefined" : n,
            a = e.level,
            o = void 0 === a ? "info" : a,
            i = e.message,
            s = void 0 === i ? "message-undefined" : i,
            c = e.detail,
            u = void 0 === c ? {} : c;
          return t
            ? "string" != typeof t
              ? "appName参数类型错误"
              : "string" != typeof o
              ? "level参数类型错误"
              : "string" != typeof r
              ? "tagName参数类型错误"
              : "string" != typeof s
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
                a = fe(e);
              if (a) return n(a);
              try {
                r = le();
              } catch (e) {
                return n(e);
              }
              var o = e.appName,
                i = e.tagName,
                s = void 0 === i ? "tag-name-undefined" : i,
                c = e.message,
                u = void 0 === c ? "message-undefined" : c,
                p = e.detail,
                d = void 0 === p ? {} : p,
                l = O[o];
              if (!l) return n("appName 传入错误");
              var f = o,
                g = "mp_" + o.replace(/-/g, "_"),
                h = d.orderNo,
                v = e.level,
                y = void 0 === v ? "info" : v;
              -1 === pe.indexOf(y) && (y = "info");
              var m = "";
              try {
                m = JSON.stringify(d);
              } catch (e) {
                return n(e);
              }
              var b = {
                app: f,
                log_index: g,
                level: y,
                tag: "".concat(s, ": ").concat(u),
                detail: JSON.stringify({
                  isvDetail: m,
                  extra: ce(ce({}, r), {}, { cloudAppId: l, orderNo: h }),
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
        function _e(e) {
          if (0 !== e.indexOf("http")) return !1;
          var t = o(e.split("/"), 3);
          t[0], t[1];
          return -1 !== t[2].indexOf(".youzan.com");
        }
        var je = [
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
              Object(s.a)(this, e),
                (this.__yunapp__ = n),
                (this.app = new B()),
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
                (this.storage = new Y()),
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
              Object(c.a)(e, [
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
                      return je.indexOf(e.route) >= 0;
                    });
                    return e
                      ? (e.__yunPageData__ || (e.__yunPageData__ = new M()),
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
                        _e(e) &&
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
        function De(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Pe || (Pe = new Ce({ app: e, env: t.env })), Pe;
        }
        function Ie(e) {
          return (function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (
              e &&
                !e.__globalBridgeReady &&
                ((e.__globalBridge = Se = De(e, t)),
                (e.__globalBridgeReady = !0)),
              Se
            );
          })(e || getApp());
        }
        (B.prototype.__addProcess = function (e, t) {
          this.process[e] = t;
        }),
          (B.prototype.__setData = function (e, t) {
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
          (B.prototype.__setEvent = function (e, t) {
            e && (this.__events[e] = t);
          }),
          (B.prototype.__triggerLifetimes = function (e, t) {
            return z(this, e, t);
          }),
          (M.prototype.__setData = function (e, t) {
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
          (M.prototype.__setEvent = function (e, t) {
            e && (this.events[e] = t);
          }),
          (M.prototype.__addProcess = function (e, t) {
            this.process[e] = t;
          }),
          (M.prototype.__triggerLifetimes = function (e, t) {
            return z(this, e, t);
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
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && a.push([s, t[s]]);
            else "string" == typeof t && n && a.push([t, n]);
            var c = this.__currentPage();
            a.forEach(function (t) {
              var n = o(t, 2),
                a = n[0],
                s = n[1];
              Object(i.e)(e, Object(r.a)({}, a, s), function (e) {
                c && (c.__setData(a, e), c.__notifyDataSubscribers(a, e));
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
      NERQ: function (e, t, n) {
        var r = [],
          a = {
            show: !1,
            title: "",
            width: null,
            theme: "default",
            message: "",
            zIndex: 100,
            overlay: !0,
            selector: "#van-dialog",
            className: "",
            asyncClose: !1,
            beforeClose: null,
            transition: "scale",
            customStyle: "",
            messageAlign: "",
            overlayStyle: "",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnClickOverlay: !1,
            confirmButtonOpenType: "",
          },
          o = Object.assign({}, a);
        var i = (e) => (
          (e = Object.assign(Object.assign({}, o), e)),
          new Promise((t, n) => {
            var a,
              o = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (a = getCurrentPages())[a.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              o &&
                (o.setData(
                  Object.assign(
                    {
                      callback: (e, r) => {
                        "confirm" === e ? t(r) : n(r);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  o.setData({ show: !0 });
                }),
                r.push(o));
          })
        );
        (i.alert = (e) => i(e)),
          (i.confirm = (e) => i(Object.assign({ showCancelButton: !0 }, e))),
          (i.close = () => {
            r.forEach((e) => {
              e.close();
            }),
              (r = []);
          }),
          (i.stopLoading = () => {
            r.forEach((e) => {
              e.stopLoading();
            });
          }),
          (i.currentOptions = o),
          (i.defaultOptions = a),
          (i.setDefaultOptions = (e) => {
            (o = Object.assign(Object.assign({}, o), e)),
              (i.currentOptions = o);
          }),
          (i.resetDefaultOptions = () => {
            (o = Object.assign({}, a)), (i.currentOptions = o);
          }),
          i.resetDefaultOptions(),
          (t.a = i);
      },
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
              var a = c(e),
                o = r[0];
              t = u(o, a);
            }
            return t;
          }),
          (t.urlAdaptor = function (e, t) {
            var n = l(e, t);
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
                      i = o() && (n || l(e, a));
                    if (i) {
                      var s = i.hasWatermark,
                        c = i.format,
                        u = i.width,
                        f = i.height,
                        g = i.quality,
                        h = i.imgSuffixAndWatermark,
                        v = "imageView2/2/w/"
                          .concat(u, "/h/")
                          .concat(f, "/q/")
                          .concat(g, "/format/")
                          .concat(c),
                        y = s ? "|" : "?";
                      r = ""
                        .concat(r.replace(d(), ".") + h)
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
                      i = e.replace(d(), ""),
                      s = u(o, r);
                    return "".concat(i, ".").concat(n).concat(s);
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
          s = function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1e4,
              o = i(e),
              s = i(e) ? "bad" : "fine";
            o
              ? (t = setTimeout(function () {
                  (0, r.setStorage)("networkStatus", s), (a.networkStatus = s);
                }, n))
              : (t && clearTimeout(t),
                (0, r.setStorage)("networkStatus", s),
                (a.networkStatus = s));
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
                  return s(e.networkType);
                },
              }),
              wx.onNetworkStatusChange(function (e) {
                return s(e.networkType);
              }));
          } catch (e) {}
        };
        var c = function (e) {
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
                var i = c(e);
                t = e.replace(r, "$1".concat(i));
              }
            }
            return t;
          };
        t.transQiniuFormatToWebp = p;
        var d = function () {
          return /\.([^.!]+)!([0-9]{1,4})x([0-9]{1,4})q?([0-9]{0,2}|100)?(\+2x)?\..+/;
        };
        t.getCdnRegex = d;
        var l = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = o(),
            r = t.isGifOptimation,
            a = /([^.!]+)\?watermark\/.*\/$/,
            i = 1,
            s = e.match(d());
          if (!s || s.length < 4) return null;
          var c,
            u = r ? "gif/unoptimize/1" : "gif",
            p = s[1].match(a),
            l = !1;
          p && p.length ? ((c = p[1]), (l = !0)) : (c = s[1]);
          var f = c || "";
          return (
            "gif" === c
              ? (f = u)
              : n
              ? (f = "webp")
              : ("webp" !== c && "jpeg" !== c) || (f = "jpg"),
            "+2x" === s[5] && (i = 2),
            {
              hasWatermark: l,
              originFormat: c,
              format: f.toLocaleLowerCase(),
              width: parseInt(s[2], 10) * i,
              height: parseInt(s[3], 10) * i,
              quality: s[4] || 75,
              imgSuffixAndWatermark: s[1],
              multiple: i,
            }
          );
        };
        t.parseUrl = l;
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
              s = (i._global && i._global.url) || r.GLOBAL_URL;
            n.imgcdn = s.imgqn || s.imgcdn;
          }
          var c = n.imgcdn || n.imgqn || "https://img01.yzcdn.cn",
            u = [
              /^(https?:)?\/\/imgqn.koudaitong.com/,
              /^(https?:)?\/\/kdt-img.koudaitong.com/,
              /^(https?:)?\/\/img01.yzcdn.cn/,
              /^(https?:)?\/\/dn-kdt-img.qbox.me/,
            ];
          t = (0, o.ruleAdapter)(e, t);
          for (var p = 0; p < u.length; p++) e = e.replace(u[p], c);
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
                e.match(c) ||
                e.match(/img(\d*)\.yzcdn\.cn/) ||
                e.match("dn-kdt-img-test.qbox.me")
              )
            )
              return e;
            e.match("!") || (e = "".concat(e).concat(t));
          } else e = "".concat(c, "/").concat(e).concat(t);
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
      hIZB: function (e, t, n) {
        n.d(t, "a", function () {
          return f;
        });
        var r = n("GFa9"),
          a = n("yUfZ"),
          o = n("Fcif"),
          i = n("+I+c"),
          s = ["type"],
          c = getApp();
        var u = n("DXKY"),
          p = n("8B9M"),
          d = n("YeA1"),
          { dmc: l } = Object(d.a)();
        function f(e, t, n) {
          if ((void 0 === n && (n = {}), "offlinepage" === e))
            return (
              void 0 === (d = t.link_id) && (d = ""),
              void (
                d &&
                (Object(p.a)().setOfflineId(d),
                r.a.switchTab({ url: "/packages/home/dashboard/index" }))
              )
            );
          var d;
          if ("platform_coupon" !== e) {
            if ("video_number_dynamic" !== e) {
              if ("weapplink" === e) {
                var { extra_data: f } = t;
                if (f && "2" === f.link_type)
                  return void (+f.use_short_link
                    ? wx.navigateToMiniProgram({ shortLink: f.short_link })
                    : wx.navigateToMiniProgram({
                        appId: f.other_weapp_appid,
                        path: f.other_weapp_link,
                      }));
              }
              var {
                url: g,
                isTab: h,
                isReLaunch: v,
                dmcExtra: y,
              } = Object(a.a)(e, t, n);
              if (g || y) {
                var m = h ? "switchTab" : v ? "reLaunch" : "navigate";
                if (y) {
                  var { pageName: b, query: k } = y;
                  l[m](b, k);
                } else r.a[m]({ url: g });
              }
            } else
              !(function (e) {
                var { linkTitle: t } = e,
                  n = Object(i.a)(e.videoDynamicParams, s),
                  r = Object(o.a)({}, e.videoDynamicParams, {
                    image_url: null == e ? void 0 : e.imageUrl,
                    link_title: t,
                  });
                c.logger.log({
                  et: "click",
                  ei: "wxvideo_video_click",
                  en: "视频号动态点击",
                  params: r,
                }),
                  wx.openChannelsActivity &&
                    wx.openChannelsActivity(
                      Object(o.a)({}, n, {
                        success: () => {
                          c.logger.log({
                            et: "custom",
                            ei: "wxvideo_video_jump_success",
                            en: "视频号动态跳转成功",
                            params: r,
                          });
                        },
                        fail: (e) => {
                          c.logger.log({
                            et: "custom",
                            ei: "wxvideo_video_jump_fail",
                            en: "视频号动态跳转失败",
                            params: Object(o.a)({}, r, {
                              error_msg: null == e ? void 0 : e.errMsg,
                            }),
                          });
                        },
                      })
                    );
              })(t);
          } else u.a.trigger("feature-platform-coupon:open", t);
        }
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
        function s(e) {
          return (
            !0 ==
              (null != (t = e) &&
                "object" == typeof t &&
                !1 === Array.isArray(t)) &&
            "[object Object]" === Object.prototype.toString.call(e)
          );
          var t;
        }
        var c = function (e) {
          var t, n;
          return (
            !1 !== s(e) &&
            "function" == typeof (t = e.constructor) &&
            !1 !== s((n = t.prototype)) &&
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
              s = function () {
                var e = o.shift(),
                  { value: n, key: s, ctx: u } = e;
                r.forEach((e) => {
                  if (e === n) throw new Error("Deep copy circular structure");
                });
                var { value: p, needCycle: d } = (function (e) {
                  switch (i(e)) {
                    case "object":
                      return c(e)
                        ? { value: new e.constructor(), needCycle: !0 }
                        : { value: e, needCycle: !1 };
                    case "array":
                      return { value: new e.constructor(), needCycle: !0 };
                    default:
                      return { value: a(e), needCycle: !1 };
                  }
                })(n);
                u ? (u[s] = p) : (t = p),
                  d && r.push(n),
                  d &&
                    Object.keys(n).forEach((e) => {
                      o.push({ value: n[e], key: e, ctx: p });
                    });
              };
            o.length > 0;

          )
            s();
          return t;
        };
      },
      jZtE: function (e) {
        e.exports = JSON.parse("{}");
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
          var s = function () {
              (i = !1 === n.leading ? 0 : new Date().getTime()),
                (r = null),
                e.apply(a, o),
                r || ((a = null), (o = []));
            },
            c = function () {
              for (
                var o = arguments.length, c = new Array(o), u = 0;
                u < o;
                u++
              )
                c[u] = arguments[u];
              var p = new Date().getTime();
              i || !1 !== n.leading || (i = p);
              var d = t - (p - i);
              (a = this),
                d <= 0 || d > t
                  ? (r && clearTimeout(r),
                    (r = null),
                    (i = p),
                    e.apply(a, c),
                    r || ((a = null), (c = [])))
                  : r || !1 === n.trailing || (r = setTimeout(s, d));
            };
          return (
            (c.cancel = function () {
              r && clearTimeout(r), (i = 0), (r = null);
            }),
            c
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
      yUfZ: function (e, t, n) {
        n.d(t, "a", function () {
          return h;
        });
        var r = n("Fcif"),
          a = n("8B9M"),
          o = n("x5Yp"),
          i = n("2wjL"),
          s = n("7WUL"),
          c = n("lRMv"),
          u = n("YeA1"),
          { dmc: p } = Object(u.a)(),
          d = "packages",
          l = Object(a.a)(),
          f = "/" + d + "/shop/goods/tag-list/index",
          g = "/" + d + "/shop/goods/all/index";
        function h(e, t, n) {
          var a = "",
            u = !1,
            p = !1,
            h = null,
            {
              alias: v,
              link_title: y = "",
              link_url: m = "",
              link_id: b,
              extra_data: k = {},
            } = t,
            { banner_id: w } = n || {},
            O = {};
          if ((w && (O.banner_id = w), "goods" === e && v))
            a = "/pages/goods/detail/index?alias=" + v;
          else if ("tag" === e) {
            var x = v ? { alias: v } : i.a.getAll(m);
            x.alias &&
              ((a =
                f + "?alias=" + x.alias + "&title=" + encodeURIComponent(y)),
              (h = {
                pageName: "GoodsTag",
                query: { alias: x.alias, title: y },
              }));
          } else if ("weappfeature" === e)
            a = "/pages/home/feature/index?id=" + b + "&title=" + y;
          else if ("feature" === e && v)
            a = "/pages/home/feature/index?alias=" + v;
          else if ("homepage" === e)
            (u = !0), (a = "/pages/home/dashboard/index");
          else if ("cart" === e) (u = !0), (a = "/" + d + "/goods/cart/index");
          else if ("usercenter" === e)
            (u = !0),
              (a = "/pages/usercenter/dashboard/index"),
              l.globalData.isRetailApp &&
                (a = "/" + d + "/retail/usercenter/dashboard-v2/index");
          else if ("allgoods" === e)
            (a = g + "?title=" + encodeURIComponent(y)),
              (h = { pageName: "AllGoodsList", query: { title: y } });
          else if ("pointsstore" === e)
            a = "/" + d + "/ump/integral-store/index";
          else if ("coupon" === e)
            a =
              "/" +
              d +
              "/user/coupon/detail/index?id=" +
              t.link_id +
              (7 === t.coupon_type ? "&type=promocard" : "");
          else if ("seckill" === e)
            a = "/" + d + "/goods/seckill/index?alias=" + v;
          else if ("weapplink" === e && "1" === k.link_type) {
            var _;
            if (
              ("/" !== (a = k.my_weapp_link)[0] && (a = "/" + a),
              null != (_ = Object(c.o)()) && _.client_enter_shop_linkto_switch)
            )
              try {
                var j = i.a.getAll(a) || {},
                  { subKdtId: P, sub_kdt_id: S, kdtId: C, kdt_id: D } = j,
                  I = P || S || C || D,
                  T = l.getKdtId(),
                  A = l.getHQKdtId();
                I && +I !== T && +I !== A && (p = !0),
                  Object(c.f)({ text: "[wx] 自定义外链处理ReLaunch" });
              } catch (e) {
                Object(c.f)({ text: "[wx] 自定义外链处理有误", err: e });
              }
            var E = a.split("?")[0];
            if (
              (s.a.indexOf(E) > -1 && (u = !0),
              0 ===
                (a = i.a.remove(a, "shopAutoEnter")).indexOf(
                  "/pages/common/blank-page/index"
                ))
            ) {
              var L = i.a.getAll(a);
              if (L.weappSharePath) {
                var N = decodeURIComponent(L.weappSharePath);
                (N = i.a.remove(N, "shopAutoEnter")),
                  (L.weappSharePath = encodeURIComponent(N)),
                  (a = i.a.add("/pages/common/blank-page/index", L));
              }
            }
          } else if ("paidcolumn" === e)
            a = "/" + d + "/paidcontent/column/index?alias=" + v;
          else if ("paidcontent" === e)
            a = "/" + d + "/paidcontent/content/index?alias=" + v;
          else if ("mypaidcontent" === e)
            a = "/" + d + "/paidcontent/list/index";
          else if ("paidlive" === e)
            a = "/" + d + "/paidcontent/live/index?alias=" + v;
          else if ("allcourse" === e) a = "/" + d + "/edu/goods/list/index";
          else if (
            "course" === e ||
            "educourse" === e ||
            "allofflinecourse" === e ||
            "eduappointment" === e ||
            "course_group" === e ||
            "course_category" === e ||
            "edumoments" === e
          )
            a =
              "/" +
              d +
              "/edu/webview/index?targetUrl=" +
              encodeURIComponent(
                m.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5")
              );
          else if ("link" === e) {
            var R = t.link_url;
            R &&
              /mp.weixin.qq.com\/s/.test(R) &&
              (a =
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(R));
          } else if ("shopnote" === e)
            (u = !0), (a = "/" + d + "/shop/shopnote/list/index");
          else if ("calendar_checkin" === e)
            a = "/" + d + "/shop/ump/sign-in/index";
          else if ("zodiac" === e)
            a = "/" + d + "/ump/new-lottery/casino/index?alias=" + t.alias;
          else if (["guaguale", "wheel", "crazyguess"].includes(e)) {
            var q = "";
            null != m && m.includes("lottery") && (q = "LuckyLottery"),
              null != m && m.includes("cards") && (q = "Cards"),
              null != m && m.includes("zodiac") && (q = "Zodiac"),
              null != m && m.includes("crazy") && (q = "CrazyGuess"),
              q && (h = { pageName: q, query: Object(r.a)({ alias: v }, O) });
          } else if ("shopnote_detail" === e)
            a = "/" + d + "/shop/shopnote/detail/index?noteAlias=" + t.alias;
          else if ("mp_article" === e)
            a =
              "/" +
              d +
              "/shop/shopnote/mparticle/detail/index?noteAlias=" +
              t.alias;
          else if ("hotellist" === e)
            a = "/pages/common/webview-page/index?src=" + encodeURIComponent(m);
          else if ("recharge_center" === e)
            a = "/pages/common/webview-page/index?src=" + encodeURIComponent(m);
          else {
            if ("red-package" === e) return wx.showRedPackage({ url: m }), {};
            "member_code" === e
              ? (a = "/" + d + "/member-code/index")
              : "vipcenter" === e
              ? (a = "/" + d + "/shop/levelcenter/free/index")
              : "weapp_marketing_page" === e || "marketing_page" === e
              ? (a = "/" + d + "/ext-marketing-page/index?id=" + (k.id || ""))
              : "storelist" === e || "nearby_store_way" === e
              ? (a = "/" + d + "/shop/physical-store/index")
              : "goods_classify" === e &&
                (a =
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(m));
          }
          return (
            Object(o.a)(n) || u || (a = i.a.add(a, n)),
            { url: a, isTab: u, isReLaunch: p, dmcExtra: h }
          );
        }
        !(function () {
          try {
            Promise.all([
              p.route.readRoute("AllGoodsList"),
              p.route.readRoute("GoodsTag"),
            ]).then((e) => {
              var [t, n] = e;
              (g = t.path), (f = n.path);
            });
          } catch (e) {}
        })();
      },
      zZvV: function (e, t, n) {
        var r = n("8B9M"),
          a = n("qako"),
          o = {
            getYunSdk: () => Object(r.a)().getYouZanYunSdk(),
            onAsync(e, t, n) {
              var o = Object(r.a)();
              (n = n || this || {}), a.a.onAsync.apply(o, [e, t, n]);
            },
            offAsync(e, t, n) {
              a.a.offAsync.apply(Object(r.a)(), [e, t, n || this || {}]);
            },
            triggerAsync() {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return a.a.triggerAsync.apply(Object(r.a)(), t);
            },
          };
        t.a = o;
      },
    }
  )
);
