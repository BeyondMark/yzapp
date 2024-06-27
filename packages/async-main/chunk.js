"use strict";
(exports.ids = [570]),
  (exports.modules = {
    "+Ky8": function (t, e, n) {
      var r;
      n.d(e, "a", function () {
        return r;
      }),
        (function (t) {
          (t.WEB = "web"), (t.XHS = "xhs");
        })(r || (r = {}));
    },
    "/QeK": function (t, e, n) {
      n.d(e, "a", function () {
        return R;
      });
      var r = {};
      n.r(r),
        n.d(r, "isCloudDesigned", function () {
          return m;
        });
      var i = n("bb6g"),
        o = {
          theme: "#3C76FF",
          banner:
            "https://b.yzcdn.cn/public_files/ef7552cf08110b87268e14c6b9a31f49.png",
          checkIconUrl: "/public_files/dce3dfe9dfcf2e9589abe08302f6216a.png",
          name: "",
          source: 0,
          authType: "",
          accountType: void 0,
          getPhoneNumber: !0,
          mobileAuditKey: "",
          showYzLoginAfaterChannel: !1,
        },
        a = n("9ZMt"),
        s = n("MLLI"),
        c = n("GFyo"),
        u = { setStorage: c.g, getStorage: c.c },
        h = n("kSnQ"),
        f = {
          queryMobileAudit: function () {
            var t = this;
            return new Promise(function (e, n) {
              var r,
                i = t.config,
                o = i.accountType,
                a = i.mobileAuditKey;
              return i.getPhoneNumber
                ? o && a
                  ? void ((r = { accountType: o, auditKey: a }),
                    Object(h.a)({
                      method: "GET",
                      origin: "uic",
                      path: "/passport/general/audit/result.json",
                      data: r,
                      config: {},
                      withCredentials: !0,
                    }))
                      .then(function (t) {
                        t && 2 === t.auditStatus ? e() : n();
                      })
                      .catch(n)
                  : e()
                : n();
            });
          },
        },
        l = {
          login: n("MVYo").a,
          checkSession: function () {
            return new Promise(function (t, e) {
              a.default.$native.checkSession({ success: t, fail: e });
            });
          },
          hasLogin: function () {
            return Promise.resolve(!0);
          },
        },
        p = n("Y6Ef"),
        d = {
          nativeMobileCallback: function (t, e) {
            var n = (t && t.detail) || {},
              r = (e || {}).noMobileFallback;
            return new Promise(function (t, e) {
              var i = !(!n.code && !n.encryptedData),
                o =
                  /deny|cancel|未绑定手机|not authorize|小程序获取权限失败/i.test(
                    n.errMsg || ""
                  );
              if (
                (Object(p.a)({
                  path: "/passport/mobile/native/callback.json",
                  data: {
                    detail: n,
                    success: i,
                    disagree: o,
                    env: a.default.getEnv(),
                    extra: { noMobileFallback: r },
                  },
                  method: "POST",
                  origin: "uic",
                  withCredentials: !0,
                }),
                i)
              )
                return t({ detail: n });
              var s = { noQuota: 1400001 === n.errno };
              e({ detail: n, disagree: o, errType: s, noMobileFallback: r });
            });
          },
        },
        v = {
          getAuthType: function () {
            return this.getConfig("authType");
          },
          getHostApp: function () {
            return Promise.resolve("");
          },
          getAclValue: function (t) {
            return Promise.resolve("");
          },
          getGlobalValue: function (t) {
            return Promise.resolve();
          },
        },
        y = {
          needPrivacyAuth: function () {
            return Promise.resolve(!1);
          },
          onNeedPrivacyAuth: function () {},
          requirePrivacyAuth: function () {},
          resolvePrivacyAuth: function () {},
          rejectPrivacyAuth: function () {},
        },
        g = n("Z054");
      function m() {
        return !1;
      }
      var b = Object(i.__assign)(
          Object(i.__assign)(
            Object(i.__assign)(
              Object(i.__assign)(
                Object(i.__assign)(
                  Object(i.__assign)(
                    Object(i.__assign)(Object(i.__assign)({}, l), u),
                    f
                  ),
                  d
                ),
                v
              ),
              r
            ),
            y
          ),
          {
            authLogger: g.authLogger,
            getUserInfo: a.default.$native.getUserInfo,
            getSystemInfoSync: s.b,
            canIUse: function (t) {
              var e = a.default.$native[t];
              return e && "function" == typeof e;
            },
            checkInSinglePage: function () {
              return !1;
            },
            selectBoundingClientRect: function (t, e) {
              return new Promise(function (n) {
                t.createSelectorQuery().select(e).boundingClientRect().exec(n);
              });
            },
          }
        ),
        _ = Object(i.__assign)(Object(i.__assign)({ config: o }, b), {
          getConfig: function (t) {
            var e = this.config;
            return e
              ? Promise.resolve(t ? e[t] : e)
              : Promise.resolve(t ? "" : {});
          },
        }),
        E = n("U0uK"),
        w = {};
      try {
        w = Object(E.a)() || {};
      } catch (t) {}
      var O = {
          theme: "#679FFF26",
          banner:
            "https://img01.yzcdn.cn/upload_files/2023/07/03/FtFv4zB9O7vAuHxsgdLpP0uSRHBF.png",
          name: "",
          authType: "weapp",
          source: 2,
          getPhoneNumber: !w.transactionWeappFlag,
        },
        S = n("mM1a"),
        x = n("GjIH"),
        T = n("fLr7"),
        k = Object(x.a)(T.i, new Set()),
        P = Object(x.a)(T.e);
      function A(t) {
        return a.default.$native.canIUse(t);
      }
      var C,
        j = function (t) {
          if (!(t || {}).ignoreCache) {
            var e = P.get();
            if (e) {
              if (e.data) return Promise.resolve(e.data.needPrivacyAuth);
              if (e.promise) return e.promise;
            }
          }
          var n = new Promise(function (t, e) {
              A("getPrivacySetting")
                ? a.default.$native.getPrivacySetting({
                    success: function (e) {
                      t(e.needAuthorization);
                    },
                    fail: function (t) {
                      e(t);
                    },
                  })
                : t(!1);
            }),
            r = new Promise(function (t, e) {
              setTimeout(function () {
                e("getPrivacySetting timeout");
              }, 3e3);
            }),
            i = Promise.race([r, n])
              .then(function (t) {
                return (
                  P.set({ promise: null, data: { needPrivacyAuth: t } }), t
                );
              })
              .catch(function (t) {
                return (
                  P.set(null),
                  g.authLogger.logAll({
                    errTitle: "Call needPrivacyAuth error",
                    errMsg: Object(h.d)(t),
                    err: t,
                  }),
                  !1
                );
              });
          return P.set({ promise: i, data: null }), i;
        },
        D = {
          canIUse: A,
          getUserInfo: function (t) {
            return new Promise(function (e, n) {
              var r = a.default.$native;
              if (r.getUserProfile)
                return r.getUserProfile(
                  Object(i.__assign)(Object(i.__assign)({}, t), {
                    success: function (t) {
                      (t.encryptedData = void 0), (t.iv = void 0), e(t);
                    },
                    fail: n,
                  })
                );
              r.authorize({
                scope: "scope.userInfo",
                success: function () {
                  r.getUserInfo({ withCredentials: !0, success: e, fail: n });
                },
                fail: n,
              });
            });
          },
          checkInSinglePage: function () {
            var t = Object(S.a)();
            return -1 !== [1154].indexOf(t.scene);
          },
          needPrivacyAuth: j,
          onNeedPrivacyAuth: function (t) {
            A("onNeedPrivacyAuthorization") &&
              a.default.$native.onNeedPrivacyAuthorization(function (e, n) {
                var r = k.get();
                r.add(e),
                  k.set(r),
                  "function" == typeof t && t({ eventInfo: n });
              });
          },
          requirePrivacyAuth: function (t) {
            if (A("requirePrivacyAuthorize")) {
              var e = (t || {}).ignoreCache;
              j({ ignoreCache: e }).then(function (t) {
                t && a.default.$native.requirePrivacyAuthorize();
              });
            }
          },
          resolvePrivacyAuth: function (t) {
            var e = k.get();
            e.forEach(function (e) {
              e({ buttonId: t, event: "agree" });
            }),
              e.clear(),
              k.set(e),
              j({ ignoreCache: !0 });
          },
          rejectPrivacyAuth: function (t) {
            var e = k.get();
            e.forEach(function (e) {
              e({ buttonId: t, event: "disagree" });
            }),
              e.clear(),
              k.set(e);
          },
        },
        I = Object(i.__assign)({ config: O }, D),
        R =
          ((C = Object(i.__assign)(Object(i.__assign)({}, _.config), I.config)),
          Object(i.__assign)(Object(i.__assign)(Object(i.__assign)({}, _), I), {
            config: C,
          }));
    },
    "/Wb3": function (t, e) {},
    "/ieh": function (t, e, n) {
      var r = Object.prototype.hasOwnProperty,
        i = "~";
      function o() {}
      function a(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function s(t, e, n, r, o) {
        if ("function" != typeof n)
          throw new TypeError("The listener must be a function");
        var s = new a(n, r || t, o),
          c = i ? i + e : e;
        return (
          t._events[c]
            ? t._events[c].fn
              ? (t._events[c] = [t._events[c], s])
              : t._events[c].push(s)
            : ((t._events[c] = s), t._eventsCount++),
          t
        );
      }
      function c(t, e) {
        0 == --t._eventsCount ? (t._events = new o()) : delete t._events[e];
      }
      function u() {
        (this._events = new o()), (this._eventsCount = 0);
      }
      Object.create &&
        ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
        (u.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(i ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (u.prototype.listeners = function (t) {
          var e = i ? i + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, o = n.length, a = new Array(o); r < o; r++)
            a[r] = n[r].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = i ? i + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (u.prototype.emit = function (t, e, n, r, o, a) {
          var s = i ? i + t : t;
          if (!this._events[s]) return !1;
          var c,
            u,
            h = this._events[s],
            f = arguments.length;
          if (h.fn) {
            switch ((h.once && this.removeListener(t, h.fn, void 0, !0), f)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, e), !0;
              case 3:
                return h.fn.call(h.context, e, n), !0;
              case 4:
                return h.fn.call(h.context, e, n, r), !0;
              case 5:
                return h.fn.call(h.context, e, n, r, o), !0;
              case 6:
                return h.fn.call(h.context, e, n, r, o, a), !0;
            }
            for (u = 1, c = new Array(f - 1); u < f; u++)
              c[u - 1] = arguments[u];
            h.fn.apply(h.context, c);
          } else {
            var l,
              p = h.length;
            for (u = 0; u < p; u++)
              switch (
                (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), f)
              ) {
                case 1:
                  h[u].fn.call(h[u].context);
                  break;
                case 2:
                  h[u].fn.call(h[u].context, e);
                  break;
                case 3:
                  h[u].fn.call(h[u].context, e, n);
                  break;
                case 4:
                  h[u].fn.call(h[u].context, e, n, r);
                  break;
                default:
                  if (!c)
                    for (l = 1, c = new Array(f - 1); l < f; l++)
                      c[l - 1] = arguments[l];
                  h[u].fn.apply(h[u].context, c);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, n) {
          return s(this, t, e, n, !1);
        }),
        (u.prototype.once = function (t, e, n) {
          return s(this, t, e, n, !0);
        }),
        (u.prototype.removeListener = function (t, e, n, r) {
          var o = i ? i + t : t;
          if (!this._events[o]) return this;
          if (!e) return c(this, o), this;
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              c(this, o);
          else {
            for (var s = 0, u = [], h = a.length; s < h; s++)
              (a[s].fn !== e ||
                (r && !a[s].once) ||
                (n && a[s].context !== n)) &&
                u.push(a[s]);
            u.length
              ? (this._events[o] = 1 === u.length ? u[0] : u)
              : c(this, o);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = i ? i + t : t), this._events[e] && c(this, e))
              : ((this._events = new o()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = i),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    "0yOl": function (t) {
      t.exports = JSON.parse('{"a":"4.0.18"}');
    },
    "12/8": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r,
        i = (r = n("rMcU")) && r.__esModule ? r : { default: r };
      var o = function (t) {
        return (
          (t = t || new Date()) instanceof Date ||
            ("number" == typeof t && (0, i.default)(t) && (t = new Date(t)),
            "string" == typeof t &&
              ((0, i.default)(t) || (t = t.replace(/-/g, "/")),
              (0, i.default)(t) && (t = new Date(t)))),
          t
        );
      };
      (e.default = o), (t.exports = e.default);
    },
    "13Jo": function (t, e) {},
    "1rIA": function (t, e, n) {
      var r, i;
      n.d(e, "i", function () {
        return o;
      }),
        n.d(e, "h", function () {
          return a;
        }),
        n.d(e, "n", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return h;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "g", function () {
          return d;
        }),
        n.d(e, "l", function () {
          return v;
        }),
        n.d(e, "m", function () {
          return y;
        }),
        n.d(e, "k", function () {
          return g;
        }),
        n.d(e, "j", function () {
          return m;
        });
      var o = 280,
        a = 158,
        s = o / a,
        c = { width: 560, height: 316 },
        u = { width: 130, height: 130 },
        h = 0.5,
        f = 14,
        l = { NUMBER: -1, TENCENT: 0, SLIDE: 1, CLICK: 2 },
        p = { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 },
        d = { bigUrl: "", smallUrl: "", cy: 0 },
        v = {
          READY: "ready",
          FAILED: "failed",
          SUCCESS: "success",
          LOADING: "loading",
          LIMIT: "limit",
          ERROR: "error",
        },
        y =
          (((r = {})[v.READY] = "向右拖动滑块填充拼图"),
          (r[v.FAILED] = "验证失败"),
          (r[v.SUCCESS] = "验证成功"),
          (r[v.LOADING] = "加载中"),
          (r[v.LIMIT] = "失败过多，点此重试"),
          (r[v.ERROR] = "加载失败，请重试"),
          r),
        g =
          (((i = {})[v.READY] = "arrow"),
          (i[v.FAILED] = "cross"),
          (i[v.SUCCESS] = "success"),
          (i[v.LOADING] = "arrow"),
          (i[v.LIMIT] = "cross"),
          (i[v.ERROR] = "cross"),
          i),
        m = {
          SUCCESS: "success",
          FAILED: "failed",
          ERROR: "error",
          CANCEL: "cancel",
        };
    },
    "23p4": function (t, e, n) {
      n.d(e, "g", function () {
        return a;
      }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return r;
        }),
        n.d(e, "d", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return o;
        });
      var r,
        i,
        o,
        a = "fail jsapi has no permission",
        s = { bank_card: "credit_mock", instalment: "instalment_mock" },
        c = {
          shouldWrap: !1,
          availableStatus: "AVALIABLE",
          balance: "",
          balanceDesc: "",
          color: "#44BB00",
          availableDesc: "",
          available: !0,
          recommend: !1,
          channelType: "INNER_NO_VARIFY",
          valueCardNo: "",
        },
        u = {
          info: function () {},
          warn: function () {},
          error: function () {},
        };
      !(function (t) {
        t[(t.Agreement = 1)] = "Agreement";
      })(r || (r = {})),
        (function (t) {
          (t[(t.ApplySuccess = 0)] = "ApplySuccess"),
            (t[(t.ApplyFail = 1)] = "ApplyFail"),
            (t[(t.Processing = 2)] = "Processing"),
            (t[(t.BuyerPaid = 3)] = "BuyerPaid"),
            (t[(t.Success = 4)] = "Success"),
            (t[(t.Fail = 5)] = "Fail"),
            (t[(t.Closed = 6)] = "Closed"),
            (t[(t.Bounce = 7)] = "Bounce");
        })(i || (i = {})),
        (function (t) {
          (t.Unauthorized = "UNAUTHORIZED"),
            (t.Authorizing = "AUTHORIZING"),
            (t.Authorized = "AUTHORIZED");
        })(o || (o = {}));
    },
    "2wjL": function (t, e, n) {
      function r(t) {
        void 0 === t && (t = "");
        var e = t.split("#")[0].split("?"),
          n = {};
        return (
          e[1] &&
            e[1].split("&").forEach((t) => {
              var e = t.split("=");
              n[e[0]] = e.slice(1).join("=");
            }),
          n
        );
      }
      e.a = {
        add: function (t, e, n) {
          if (
            (void 0 === n && (n = !1),
            !t || 0 === t.length || 0 === t.trim().indexOf("javascript"))
          )
            return "";
          var i = t.split("#"),
            o = i[0].split("?"),
            a = r(t);
          return (
            Object.keys(e).forEach((t) => {
              a[t.trim()] = n ? encodeURIComponent(e[t]) : e[t];
            }),
            (t =
              o[0] +
              ((t) => {
                var e = "";
                for (var n in t)
                  "" !== t[n] && (e += n.trim() + "=" + t[n] + "&");
                return e ? "?" + e.slice(0, e.length - 1) : "";
              })(a)),
            i[1] ? (t += "#" + i[1]) : t
          );
        },
        remove: function (t, e) {
          var n = t.split("?");
          if (n.length >= 2) {
            for (
              var r = encodeURIComponent(e) + "=",
                i = n[1].split("&"),
                o = (i = i.reduce((t, e) => t.concat(e.split(";")), [])).length;
              o-- > 0;

            )
              -1 !== i[o].lastIndexOf(r, 0) && i.splice(o, 1);
            return (t = n[0] + "?" + i.join("&"));
          }
          return t;
        },
        getAll: r,
      };
    },
    "3tAa": function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("9ZMt");
      function i(t, e) {
        return (
          void 0 === r.default.getGlobal(t) && r.default.setGlobal(t, e),
          [
            function () {
              return r.default.getGlobal(t);
            },
            function (e) {
              return r.default.setGlobal(t, e);
            },
          ]
        );
      }
    },
    "41a8": function (t, e, n) {
      function r(t, e) {
        var n = e.interval,
          r = e.threshold,
          i = e.wait,
          o = 0,
          a = 0;
        function s() {
          o = setTimeout(u, n);
        }
        function c() {
          ++a < r && o && s();
        }
        function u() {
          t(a).then(c).catch(c);
        }
        return (
          (o = setTimeout(s, void 0 === i ? 0 : i)),
          function () {
            clearTimeout(o), (o = 0);
          }
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "4nxs": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.uniqueId = void 0),
        (e.uniqueId = function () {
          return Date.now() + "-" + Math.floor(1e4 * Math.random() + 1);
        });
    },
    "60W9": function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = "default-self-fetch-cache";
    },
    "6UHP": function (t, e, n) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.isObjectLike = void 0);
      var i = (function (t) {
        if (t && t.__esModule) return t;
        if (null === t || ("object" !== r(t) && "function" != typeof t))
          return { default: t };
        var e = o();
        if (e && e.has(t)) return e.get(t);
        var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in t)
          if (Object.prototype.hasOwnProperty.call(t, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, a, s)
              : (n[a] = t[a]);
          }
        (n.default = t), e && e.set(t, n);
        return n;
      })(n("kSEF"));
      function o() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (o = function () {
            return t;
          }),
          t
        );
      }
      var a = i.isObjectLike;
      e.isObjectLike = a;
      var s = i.default;
      e.default = s;
    },
    "7OPm": function (t, e, n) {
      n.r(e);
      var r = n("/Wb3");
      for (var i in r)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      var o = n("mSE4");
      for (var i in o)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
    },
    "7y9c": function (t, e, n) {
      n.r(e),
        n.d(e, "isFetching", function () {
          return h;
        }),
        n.d(e, "registerLocation", function () {
          return f;
        }),
        n.d(e, "fetchDefaultSelffetchPoint", function () {
          return l;
        }),
        n.d(e, "getDefaultSelffetchPoint", function () {
          return p;
        }),
        n.d(e, "removeDefaultSelffetchPoint", function () {
          return d;
        }),
        n.d(e, "formatGoodsParams", function () {
          return v;
        });
      var r,
        i = n("US/N"),
        o = n("iKL5"),
        a = n("hcPn"),
        s = n("Sipi"),
        c = n("60W9"),
        u = { latitude: -256, longitude: -256 },
        h = !1;
      var f = function () {
        return (r = Promise.race([
          Object(a.b)().catch(function () {
            return null;
          }),
          new Promise(function (t) {
            setTimeout(function () {
              t(null);
            }, 3e3);
          }),
        ]).then(function (t) {
          return (
            (t &&
              (function (t) {
                var e = Object(o.a)(t.longitude, t.latitude);
                return { longitude: e.lng, latitude: e.lat };
              })(t)) ||
            u
          );
        }));
      };
      function l(t) {
        var e = t.kdtId,
          n = t.items,
          o = t.firstOneFill,
          a = void 0 !== o && o;
        return r
          ? ((h = !0),
            r.then(function (t) {
              var r,
                o = t.latitude,
                u = t.longitude;
              return ((r = {
                kdtId: e,
                lat: o,
                lng: u,
                items: n,
                firstOneFill: a,
              }),
              Object(i.default)({
                origin: "cashier",
                withCredentials: !0,
                method: "POST",
                path: "/pay/wsctrade/order/buy/getDefaultSelfFetch.json",
                data: r,
              }))
                .then(function (t) {
                  Object(s.d)(
                    c.a,
                    null != t && t.address ? JSON.stringify(t) : ""
                  ),
                    (h = !1);
                })
                .catch(function () {
                  h = !1;
                });
            }))
          : Promise.reject("还没有获取当前定位，无法获取默认自提点");
      }
      function p() {
        var t = Object(s.b)(c.a);
        if (!t) return t;
        try {
          return JSON.parse(t);
        } catch (t) {
          return null;
        }
      }
      function d() {
        Object(s.c)(c.a);
      }
      function v(t) {
        return {
          kdtId: t.kdtId,
          items: [{ goodsId: t.goodsId, skuId: t.skuId, num: t.num }],
        };
      }
    },
    "9+N+": function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        });
      var r = n("9ZMt");
      function i(t) {
        r.default.$native.onError(t);
      }
      function o(t) {
        r.default.$native.offError(t);
      }
    },
    "9RNk": function (t, e, n) {
      n.r(e);
      var r = n("SyLL");
      n.d(e, "behaviorSingleton", function () {
        return r.c;
      }),
        n.d(e, "behaviorInit", function () {
          return r.b;
        }),
        n.d(e, "behaviorVerify", function () {
          return r.d;
        }),
        n.d(e, "behaviorHide", function () {
          return r.a;
        });
    },
    "9ZMt": function (t, e, n) {
      n.r(e);
      var r = {};
      n.r(r),
        n.d(r, "useTpx", function () {
          return h;
        }),
        n.d(r, "useTvw", function () {
          return f;
        });
      var i = {};
      n.r(i),
        n.d(i, "install", function () {
          return ot;
        });
      var o = Object.create(null);
      function a() {
        return (
          o.$native._teeglobal || (o.$native._teeglobal = Object.create(null)),
          o.$native._teeglobal
        );
      }
      var s = Symbol.for("$native"),
        c = Symbol.for("vm"),
        u = n("Fcif");
      function h(t) {
        return 1 * t + "px";
      }
      function f(t) {
        return "h5" === o.getEnv() ? t / 10 + "vw" : 0.75 * t + "rpx";
      }
      function l(t) {
        var e = a()._memory_;
        return e ? e[t] : void 0;
      }
      var p = () => l("APP_INSTANCE");
      var d = n("/ieh");
      function v(t) {
        return t;
      }
      var y = v,
        g = new (n.n(d).a)(),
        m = ["errorHandler", "ui", "navigate", "navigateBack"],
        b = (t, e) => {
          var n = t[e];
          if ("function" == typeof n) {
            t[e] = function () {
              for (
                var r = arguments.length, i = new Array(r), o = 0;
                o < r;
                o++
              )
                i[o] = arguments[o];
              var a = i[0];
              if (!m.includes(a)) {
                var s = a + " 事件，未在允许列表中，请先添加";
                return y(s), t;
              }
              return "emit" === e
                ? (setTimeout(() => {
                    n.call(t, ...i);
                  }),
                  t)
                : n.call(t, ...i);
            };
          }
        };
      b(g, "on"), b(g, "off"), b(g, "once"), b(g, "emit");
      var _ = g;
      function E(t, e, n) {
        if ("undefined" == typeof console) throw t;
      }
      function w(t, e, n) {
        if (_.listenerCount("errorHandler") > 0)
          try {
            return void _.emit("errorHandler", t, e, n);
          } catch (t) {
            E(t);
          }
        E(t);
      }
      function O(t, e, n) {
        if (e)
          for (var r = e; (r = r.$parent); ) {
            var i = r.$options.errorCaptured;
            if (i)
              for (var o = 0; o < i.length; o++)
                try {
                  if (!1 === i[o].call(r, t, e, n)) return;
                } catch (t) {
                  w(t, r, "errorCaptured hook");
                }
          }
        w(t, e, n);
      }
      function S(t) {
        return "function" == typeof t && /native code/.test(t.toString());
      }
      function x() {
        var t,
          e,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          { length: c } = arguments,
          u = !1;
        for (
          "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
            "object" != typeof a && "function" != typeof a && (a = {}),
            s === c && ((a = this), s--);
          s < c;
          s++
        )
          if ((t = arguments[s]))
            for (e in t)
              (n = a[e]),
                a !== (r = t[e]) &&
                  (u && r && (B(r) || (i = Array.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && B(n) ? n : {}),
                      (a[e] = x(u, o, r)))
                    : (a[e] = r));
        return a;
      }
      function T(t, e) {
        return (
          void 0 === e && (e = !0),
          I(t) ? x(e, [], t) : "" + t == "null" ? t : B(t) ? x(e, {}, t) : t
        );
      }
      (o.getEnv = function () {
        return o.platform;
      }),
        (o.mixin = function (t) {
          a().mixin = (a().mixin || []).concat(t);
        }),
        (o.style = r),
        (o.getGlobal = l),
        (o.setGlobal = function (t, e) {
          var n = a();
          (n._memory_ = n._memory_ || {}), (n._memory_[t] = e);
        }),
        (o.getApp = p),
        (o.getAppOptions = () => {
          var { options: t = {} } = p() || {},
            { path: e = "", query: n = {}, scene: r = "" } = t;
          return { path: e, query: n, scene: r };
        }),
        (o.onError = (t) => {
          _.on("errorHandler", t);
        }),
        (o.offError = (t) => {
          _.off("errorHandler", t);
        }),
        (o.on = (t, e) => {
          g.on(t, e);
        }),
        (o.off = (t, e) => {
          g.off(t, e);
        });
      var k = function (t, e) {
          void 0 === e && (e = !1);
          var n = {};
          return (
            t.split("&").forEach((t) => {
              var r = t.indexOf("=");
              if (!(r <= 0)) {
                var i = t.substr(0, r).trim(),
                  o = t.substr(r + 1).trim();
                if (
                  ((o = e ? decodeURIComponent(o) : o),
                  "[" === i[r - 2] && "]" === i[r - 1])
                ) {
                  if (!(i = i.substr(0, r - 2).trim())) return;
                  n[i] || (n[i] = []), n[i].push(o);
                } else n[i] = o;
              }
            }),
            n
          );
        },
        P = function (t, e) {
          if ((void 0 === e && (e = !1), null === t || "object" != typeof t))
            return "";
          var n = [];
          return (
            Object.keys(t).forEach((r) => {
              var i = t[r],
                o = r.trim();
              void 0 !== i &&
                (Array.isArray(i)
                  ? i.forEach((t) => {
                      (t = e ? encodeURIComponent(t) : t),
                        n.push(o + "[]=" + t);
                    })
                  : ((i = e ? encodeURIComponent(i) : i), n.push(o + "=" + i)));
            }),
            n.join("&")
          );
        },
        A = (t) => {
          if ("" === (t = t.trim()) || "javascript" === t.substr(0, 10))
            return { hashArray: [] };
          var e = t.split("#"),
            n = e[0].split("?");
          return { hashArray: e, paraArray: n };
        };
      function C(t, e) {
        if (t && t.length) {
          var n = t.indexOf(e);
          if (n > -1) return t.splice(n, 1);
        }
      }
      function j(t, e, n, r) {
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0,
        });
      }
      var D = /[^\w.$]/;
      var I = Array.isArray,
        R = (t) => "function" == typeof t;
      function N(t) {
        return null !== t && "object" == typeof t;
      }
      var M = N,
        L = Object.prototype.toString;
      function B(t) {
        return "[object Object]" === L.call(t);
      }
      var { hasOwnProperty: z } = Object.prototype;
      function U(t, e) {
        return z.call(t, e);
      }
      function F(t) {
        var e = parseFloat(String(t));
        return e >= 0 && Math.floor(e) === e && isFinite(t);
      }
      function H(t, e) {
        void 0 === e && (e = !1);
        var n = (t = t.trim().replace(/[\s_-](\w)/g, function (t, e) {
          return e.toUpperCase();
        }))[0];
        return (
          e
            ? (t = n.toUpperCase() + t.substr(1))
            : n === n.toUpperCase() && (t = n.toLowerCase() + t.substr(1)),
          t
        );
      }
      function q(t, e) {
        if (t)
          return Array.isArray(t)
            ? t.forEach((t, n) => e(n, t))
            : void Object.keys(t).forEach((n) => e(n, t[n]));
      }
      var V = [String, Number, Boolean, Object, Array, Function, null],
        G = new Set(V),
        K = new Map();
      function Y(t, e) {
        return { type: G.has(t) ? t : null, default: e };
      }
      K.set(String, ""),
        K.set(Number, 0),
        K.set(Object, {}),
        K.set(Boolean, !1),
        K.set(Array, []),
        K.set(null, null);
      var W = [
        {
          usingScope: ["page", "component"],
          methods: {
            createWebViewContext: function (t) {
              return rt.emitHook("createWebViewContext", this, t);
            },
          },
        },
        {
          usingScope: ["page"],
          data: () => ({ _pageStyle: "", _pageStyleObj: {} }),
          created() {
            this.$root.setPageStyle = this._setPageStyle;
          },
          computed: {
            _pageStyleStr() {
              return Object.keys(this._pageStyleObj).reduce(
                (t, e) => (t += e + ":" + this._pageStyleObj[e] + ";"),
                ""
              );
            },
          },
          methods: {
            _setPageStyle(t) {
              if ("string" == typeof t) {
                var e = "";
                this._pageStyle.endsWith(";") || (e = ";"),
                  (this._pageStyle = this._pageStyle + e + t);
              } else
                this._pageStyleObj = Object(u.a)({}, this._pageStyleObj, t);
            },
          },
        },
      ];
      function $(t, e, n, r) {
        var i;
        (r = Object(u.a)({ mixinGlobal: !0 }, r || {})).mixinGlobal &&
          (t.mixins = W.concat(a().mixin || []).concat(t.mixins || []));
        var { mixinScope: s } = r;
        s &&
          (t.mixins =
            null === (i = t.mixins) || void 0 === i
              ? void 0
              : i.filter((t) => {
                  var e;
                  return (
                    !t.usingScope ||
                    (null === (e = t.usingScope) || void 0 === e
                      ? void 0
                      : e.includes(s))
                  );
                }));
        var { mixins: c = [] } = t,
          h = Object.keys(n);
        q(c, (t, i) => {
          $(i, e, n, Object(u.a)({}, r, { mixinGlobal: !1 }));
        }),
          q(t, (t, r) => {
            if (
              "ud" === t ||
              "mixins" === t ||
              ("usingScope" === t && Array.isArray(r) && r.includes(s))
            );
            else if ("methods" === t)
              (e[t] = e[t] || {}), Object.assign(e[t], r);
            else if (-1 !== ["props", "computed", "watch"].indexOf(t))
              "props" === t &&
                (r = (function (t) {
                  var e = "web" === o.getEnv();
                  if (I(t))
                    return t.reduce((t, e) => ((t[e] = Y(null, null)), t), {});
                  if (M(t)) {
                    var n = {};
                    return (
                      Object.keys(t).forEach((r) => {
                        var i = t[r];
                        if (
                          (Array.isArray(i) || !i
                            ? (n[r] = Y(i, null))
                            : "object" == typeof i
                            ? (n[r] = Y(
                                i.type,
                                "function" == typeof i.default
                                  ? i.default()
                                  : "default" in i
                                  ? i.default
                                  : K.get(i.type)
                              ))
                            : G.has(i)
                            ? (n[r] = Y(i, K.get(i)))
                            : (n[r] = Y(i, null)),
                          e)
                        ) {
                          var o = n[r].default;
                          n[r].type !== Function && (n[r].default = () => o);
                        }
                      }),
                      n
                    );
                  }
                  return {};
                })(r)),
                (n[t] = n[t] || (Array.isArray(r) ? [] : {})),
                Object.assign(n[t], r);
            else if (-1 !== ["provide", "inject"].indexOf(t)) n[t] = r;
            else {
              if (-1 !== h.indexOf(t)) return n[t].push(r);
              e[t] = r;
            }
          });
      }
      var Z = [
          "beforeCreate",
          "created",
          "onShow",
          "onHide",
          "beforeMount",
          "mounted",
          "destroyed",
        ],
        Q = {
          beforeCreate: "beforePageCreate",
          created: "pageCreated",
          onShow: "pageShow",
          onHide: "pageHide",
          beforeMount: "beforePageMount",
          mounted: "pageMounted",
          destroyed: "pageDestroyed",
        };
      function X(t, e) {
        if (!t) throw new Error(e);
      }
      var J = Object(u.a)({}, Q, {
        parsePageQuery: "parsePageQuery",
        componentMountedBeforeCreateError: "componentMountedBeforeCreateError",
      });
      function tt(t, e, n) {
        function r() {
          try {
            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
              r[i] = arguments[i];
            return t.apply(this, r);
          } catch (t) {
            if (!n) return;
            if (n) throw t;
          }
        }
        return void 0 === e && (e = !1), void 0 === n && (n = !0), e ? r() : r;
      }
      var et = {
        app: {
          teeLifecycle: ["onLaunch", "onShow", "onHide"],
          hooks: {
            onLaunch: "appLaunch",
            onShow: "appShow",
            onHide: "appHide",
          },
        },
        page: { teeLifecycle: Z, hooks: Q },
        component: {
          teeLifecycle: [
            "beforeCreate",
            "created",
            "beforeMount",
            "mounted",
            "destroyed",
          ],
          hooks: {
            beforeCreate: "beforeComponentCreate",
            created: "componentCreated",
            beforeMount: "beforeComponentMount",
            mounted: "componentMounted",
            destroyed: "componentDestroyed",
          },
        },
      };
      function nt(t, e, n) {
        var { teeLifecycle: r, hooks: i } = et[n];
        return (n, o) => {
          var a = {};
          q(r, (n, r) => {
            var s = e[n];
            (a[s] = a[s] || []),
              a[s].push(
                (function (t, e, n, r) {
                  return function (i) {
                    tt(() => {
                      t.emitHook("pre" + H(n, !0), this, {
                        options: i,
                        runtimes: r,
                      });
                    }, !0);
                    var o = this[c];
                    if ("mounted" !== e || o) {
                      if ("beforeMount" === e) {
                        if (!o)
                          return t.emitHook(
                            J.componentMountedBeforeCreateError,
                            this,
                            this
                          );
                        o._page &&
                          ((i = t.emitHook(J.parsePageQuery, null, i) || i),
                          (o._pageQuery = i));
                      }
                      var { vm: a } = o;
                      tt(() => {
                        n && t.emitHook(n, a, { $native: this });
                      }, !0);
                      var s = r[e];
                      X(s, e + " 运行时状态异常，应该为一个数组"),
                        s.forEach((t) => tt(t).call(a, i)),
                        "app" !== a.$scope && a.$emit("hook:" + e, i);
                    }
                  };
                })(t, r, i[r], o)
              );
          }),
            Object.keys(a).forEach((t) => {
              var e = a[t];
              n[t] = function (t) {
                e.forEach((e) => "function" == typeof e && e.call(this, t));
              };
            });
        };
      }
      var rt = new (class {
          constructor(t) {
            (this.hooks = new Map()), (this.coders = []), (this.tee = t);
          }
          set(t, e) {
            this[t] = e;
          }
          get(t) {
            return (function (t, e) {
              var n = t;
              for (var r of (function (t) {
                return t.split(/[.[]/).map((t) => t.replace("]", ""));
              })(e)) {
                if ("" === r) return n;
                if (!n || !(r in n)) return;
                n = n[r];
              }
              return n;
            })(this, t);
          }
          addHooks(t, e) {
            q(e, (t, e) => {
              var n = this.hooks.get(t) || [];
              n.push(e), this.hooks.set(t, n);
            });
          }
          addCoder(t, e) {
            this.coders.push(e);
          }
          createApp(t, e) {
            X("function" == typeof t, "插件 'constructors.App' 配置错误");
            var n = nt(this, e, "app");
            return (e) => {
              X("object" == typeof e, "code 必须是 Object");
              var r = {},
                i = { onLaunch: [], onHide: [], onShow: [] };
              return (
                $(e, r, i, { mixinScope: "app" }),
                (i.methods = r.methods),
                n(r, i),
                this.coders.forEach((t) => t(r, i, { scope: "app" })),
                t(r)
              );
            };
          }
          createPage(t, e) {
            X("function" == typeof t, "插件 'constructors.Page' 配置错误"),
              X(Z.length === e.length, "插件 lifeCycle page 字段不符合规范");
            var n = nt(this, e, "page");
            return (e) => {
              X("object" == typeof e, "code 必须是 Object");
              var r = {},
                i = {
                  data: [],
                  logicData: [],
                  beforeCreate: [],
                  created: [],
                  onHide: [],
                  onShow: [],
                  beforeMount: [],
                  mounted: [],
                  destroyed: [],
                };
              return (
                X(!r.onLoad, "Tee 不支持 onLoad，方法需要定义在 methods 中"),
                $(e, r, i, { mixinScope: "page" }),
                (i.methods = r.methods),
                delete i.props,
                n(r, i),
                this.coders.forEach((t) => t(r, i, { scope: "page" }, e)),
                t(Object(u.a)({}, r))
              );
            };
          }
          createComponent(t, e) {
            X("function" == typeof t, "插件 'constructors.Component' 配置错误");
            var n = nt(this, e, "component");
            return (e) => {
              X("object" == typeof e, "code 必须是 Object");
              var r = {},
                i = {
                  data: [],
                  logicData: [],
                  created: [],
                  beforeCreate: [],
                  beforeMount: [],
                  mounted: [],
                  destroyed: [],
                };
              if (
                ($(e, r, i, { mixinScope: "component" }),
                (i.methods = r.methods),
                (i.name = r.name),
                n(r, i),
                i.props)
              ) {
                var { key: o, parser: a } =
                  this.get("platformConfig.properties") || {};
                r[o || "props"] = "function" == typeof a ? a(i.props) : i.props;
              }
              return (
                this.coders.forEach((t) => t(r, i, { scope: "component" }, e)),
                t(r)
              );
            };
          }
          emitHook(t, e, n) {
            if (this.hooks.has(t))
              for (
                var r, i = [...(this.hooks.get(t) || [])];
                (r = null == i ? void 0 : i.pop());

              ) {
                var o = r.call(e, n);
                o && (n = o);
              }
            return n;
          }
        })(o),
        it = [
          "request",
          "getStorage",
          "setStorage",
          "getExtConfig",
          "openAddress",
        ];
      function ot(t) {
        (t.navigate = function (e) {
          var { url: n, type: r, query: i } = e,
            o = t.$native;
          if ((r || (r = "navigateTo"), "string" != typeof n))
            return Promise.reject(new Error("url accept a string"));
          if (
            (function (t) {
              return /^http[s]:\/\//.test(t);
            })(n)
          ) {
            var a = (function (t) {
              try {
                var e =
                  { webviewPath: "pages/common/webview-page/index" } || {};
                return t ? e[t] : e;
              } catch (e) {
                return t ? void 0 : {};
              }
            })("webviewPath");
            if (!a)
              throw new Error(
                "webviewPath in tee.config.js is required, but got undefined."
              );
            i &&
              (n = (function (t, e, n) {
                void 0 === n && (n = !0);
                var { hashArray: r, paraArray: i } = A(t);
                if (!i) return t;
                if (i[1]) {
                  var o = Object(u.a)({}, k(i[1], !0), e);
                  i[1] = P(o, n);
                } else i.push(P(e, n));
                var a = i.join("?");
                return r[1] && (a += "#" + r[1]), a;
              })(n, i, !0)),
              (n = a + "?url=" + encodeURIComponent(n));
          }
          var s = n.startsWith("/") ? "" : "/";
          return o[r]
            ? new Promise((t, e) => {
                _.emit("navigate", { url: n, type: r }),
                  o[r]({ url: "" + s + n, success: t, fail: e });
              })
            : Promise.reject(new Error("Can't find " + r));
        }),
          (t.redirectTo = function (e) {
            return t.navigate({ url: e, type: "redirectTo" });
          }),
          (t.navigateBack = function (e) {
            return (
              void 0 === e && (e = 1),
              _.emit("navigateBack", { delta: e }),
              t.$native.navigateBack({ delta: e }),
              Promise.resolve()
            );
          });
      }
      var at = [];
      function st(t) {
        if (t.installed) return this;
        var e = t.install || t;
        if (R(e)) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          e.apply(t, [this].concat(r));
        }
        t.installed = 1;
      }
      var ct = 0;
      class ut {
        constructor() {
          (this.id = ct++), (this.subs = []);
        }
        addSub(t) {
          this.subs.push(t);
        }
        removeSub(t) {
          C(this.subs, t);
        }
        depend() {
          ut.target && ut.target.addDep(this);
        }
        notify() {
          for (var t = this.subs.slice(), e = 0; e < t.length; e++)
            t[e].update();
        }
      }
      ut.target = null;
      var ht = [];
      var ft = (t, e) =>
          "number" == typeof t ? e + "[" + t + "]" : e + "." + t,
        lt = (t) => (N(t) && U(t, "__ob__") ? t.__ob__.op : null);
      class pt {
        constructor(t, e, n) {
          if (((this.ob = e), n)) {
            var { combinePathKeys: r, combinePathMap: i } = vt(
              t,
              n.pathKeys,
              n.pathMap
            );
            (this.pathKeys = r), (this.pathMap = i);
          } else (this.pathKeys = null), (this.pathMap = null);
        }
        traverseOp(t, e, n, r) {
          for (
            var { combinePathMap: i, combinePathKeys: o } = vt(t, e, n),
              a = [],
              s = {},
              c = !1,
              u = 0;
            u < o.length;
            u++
          ) {
            var h = r(i[o[u]], this);
            h && ((c = !0), a.push(h.path), (s[h.path] = h));
          }
          if (c) {
            var { value: f } = this.ob;
            if (Array.isArray(f))
              for (var l = 0; l < f.length; l++) {
                var p = lt(f[l]);
                p && p.traverseOp(l, a, s, r);
              }
            else
              for (var d = Object.keys(f), v = 0; v < d.length; v++) {
                var y = d[v],
                  g = lt(f[y]);
                g && g.traverseOp(y, a, s, r);
              }
          }
        }
        addPath(t) {
          this.pathKeys.push(t.path), (this.pathMap[t.path] = t);
        }
        delPath(t) {
          C(this.pathKeys, t), delete this.pathMap[t];
        }
      }
      function dt(t, e, n) {
        e.traverseOp(t, n.pathKeys, n.pathMap, function (t, e) {
          return e.delPath(t.path), t;
        });
      }
      function vt(t, e, n) {
        if (n && e) {
          for (var r = [], i = {}, o = 0; o < e.length; o++) {
            var a = ft(t, n[e[o]].path);
            r.push(a), (i[a] = { key: t, root: n[e[o]].root, path: a });
          }
          return { combinePathKeys: r, combinePathMap: i };
        }
        return {
          combinePathKeys: [t],
          combinePathMap: { [t]: { key: t, root: t, path: t } },
        };
      }
      var yt = Array.prototype,
        gt = Object.create(yt);
      function mt(t, e, n) {
        N(e) && U(e, "__ob__") && dt(t, e.__ob__.op, n.__ob__.op);
      }
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
        (t) => {
          var e = yt[t];
          j(gt, t, function () {
            var n = this,
              r = n.length;
            if (r > 0)
              switch (t) {
                case "pop":
                  mt(r - 1, n[r - 1], n);
                  break;
                case "shift":
                  mt(0, n[0], n);
                  break;
                case "splice":
                case "sort":
                case "reverse":
                  for (var i = 0; i < n.length; i++) mt(i, n[i], n);
              }
            for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
              a[s] = arguments[s];
            var c = e.apply(n, a),
              u = n.__ob__,
              { vm: h } = u;
            if (h.$dirty)
              if ("push" === t) {
                var f = u.value.length - 1;
                h.$dirty.set(u.op, f, u.value[f]);
              } else h.$dirty.set(u.op, null, u.value);
            return u.observeArray(u.value), u.dep.notify(), c;
          });
        }
      );
      var bt = new Set();
      function _t(t) {
        !(function t(e, n) {
          var r,
            i,
            o = Array.isArray(e);
          if ((!o && !N(e)) || Object.isFrozen(e)) return;
          if (e.__ob__) {
            var a = e.__ob__.dep.id;
            if (n.has(a)) return;
            n.add(a);
          }
          if (o) for (r = e.length; r--; ) t(e[r], n);
          else for (i = Object.keys(e), r = i.length; r--; ) t(e[i[r]], n);
        })(t, bt),
          bt.clear();
      }
      var Et,
        wt,
        Ot = [],
        St = !1;
      function xt() {
        St = !1;
        var t = Ot.slice(0);
        Ot.length = 0;
        for (var e = 0; e < t.length; e++) t[e]();
      }
      var Tt = !1;
      if (
        ((wt =
          "undefined" != typeof setImmediate && S(setImmediate)
            ? () => {
                setImmediate(xt);
              }
            : () => {
                setTimeout(xt, 0);
              }),
        "undefined" != typeof Promise && S(Promise))
      ) {
        var kt = Promise.resolve();
        Et = () => {
          kt.then(xt);
        };
      } else Et = wt;
      function Pt(t, e) {
        var n;
        if (
          (Ot.push(() => {
            if (t)
              try {
                t.call(e);
              } catch (t) {
                O(t, e, "nextTick");
              }
            else n && n(e);
          }),
          St || ((St = !0), Tt ? wt() : Et()),
          !t && "undefined" != typeof Promise)
        )
          return new Promise((t) => {
            n = t;
          });
      }
      var At = new Map(),
        Ct = new Map();
      function jt(t) {
        var e = Ct.get(t) || [];
        if ((e.shift(), !e.length)) {
          var n = At.get(t) || [],
            r = n.slice(0);
          n.length = 0;
          for (var i = 0; i < r.length; i++) r[i]();
        }
      }
      function Dt(t) {
        var e = jt.bind(null, t);
        return Ct.has(t) || Ct.set(t, []), (Ct.get(t) || []).push(1), e;
      }
      function It(t, e) {
        (e = e || this),
          Promise.resolve().then(() => {
            var n;
            (n = e), Nt.includes(n._watcher) ? Rt.call(this, t, e) : Pt(t, e);
          });
      }
      function Rt(t, e) {
        var n;
        if (
          ((e = e || this),
          At.has(e) || At.set(e, []),
          (At.get(e) || []).push(() => {
            if (t)
              try {
                t.call(e);
              } catch (t) {
                O(t, e, "nextTick");
              }
            else n && n(e);
          }),
          !t && "undefined" != typeof Promise)
        )
          return new Promise((t) => {
            n = t;
          });
      }
      var Nt = [],
        Mt = [],
        Lt = {},
        Bt = !1,
        zt = !1,
        Ut = 0;
      function Ft(t) {
        var e, n;
        void 0 === t && (t = 0),
          (zt = !0),
          0 === t && Nt.sort((t, e) => t.id - e.id);
        var r = [];
        for (0 === t && (Ut = 0); Ut < Nt.length; Ut++)
          (e = Nt[Ut]) && e.isRenderWatcher
            ? r.push(e)
            : ((n = e.id),
              (Lt[n] = null),
              tt(
                () => {
                  e.run();
                },
                !0,
                !1
              ));
        r.length &&
          r.forEach((t) => {
            (Lt[t.id] = null),
              tt(
                () => {
                  t.run();
                },
                !0,
                !1
              );
          }),
          Nt.slice(Ut).length
            ? Ft(t + 1)
            : ((Ut = Nt.length = Mt.length = 0), (Lt = {}), (Bt = zt = !1));
      }
      var Ht = 0;
      class qt {
        constructor(t, e, n, r, i) {
          if (
            ((this.key = ""),
            (this.vm = t),
            i && (t._watcher = this),
            t._watchers.push(this),
            r
              ? ((this.deep = !!r.deep),
                (this.user = !!r.user),
                (this.lazy = !!r.lazy),
                (this.sync = !!r.sync),
                (this.before = r.before))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = n),
            (this.id = ++Ht),
            (this.active = !0),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new Set()),
            (this.newDepIds = new Set()),
            (this.isRenderWatcher = !!i),
            (this.expression = ""),
            "function" == typeof e)
          )
            this.getter = e;
          else {
            var o = (function (t) {
              if (!D.test(t)) {
                var e = t.split(".");
                return function (t) {
                  for (var n = 0; n < e.length; n++) {
                    if (!t) return;
                    t = t[e[n]];
                  }
                  return t;
                };
              }
            })(e);
            (this.getter = o || v), this.getter || (this.getter = v);
          }
          this.value = this.lazy ? void 0 : this.get();
        }
        get() {
          var t, e;
          (t = this), ut.target && ht.push(ut.target), (ut.target = t);
          var { vm: n } = this;
          try {
            e = this.getter.call(n, n);
          } catch (t) {
            if (!this.user) throw t;
            O(t, n, 'getter for watcher "' + this.expression + '"');
          } finally {
            this.deep && _t(e),
              (ut.target = ht.pop()),
              this.isRenderWatcher || this.cleanupDeps();
          }
          return e;
        }
        addDep(t) {
          var { id: e } = t;
          this.newDepIds.has(e) ||
            (this.newDepIds.add(e),
            this.newDeps.push(t),
            this.depIds.has(e) || t.addSub(this));
        }
        cleanupDeps() {
          for (var t = this.deps.length; t--; ) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this);
          }
          var n = this.depIds;
          (this.depIds = this.newDepIds),
            (this.newDepIds = n),
            this.newDepIds.clear(),
            (n = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = n),
            (this.newDeps.length = 0);
        }
        update() {
          this.lazy
            ? (this.dirty = !0)
            : this.sync
            ? this.run()
            : (function (t) {
                var { id: e } = t;
                if (null == Lt[e]) {
                  if (((Lt[e] = !0), zt)) {
                    for (var n = Nt.length - 1; n > Ut && Nt[n].id > t.id; )
                      n--;
                    Nt.splice(n + 1, 0, t);
                  } else Nt.push(t);
                  Bt || ((Bt = !0), Pt(Ft));
                }
              })(this);
        }
        run() {
          if (this.active) {
            var t = this.get();
            if (t !== this.value || N(t) || this.deep) {
              var e = this.value;
              if (((this.value = t), this.user))
                try {
                  this.cb.call(this.vm, t, e);
                } catch (t) {
                  O(
                    t,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  );
                }
              else this.cb.call(this.vm, t, e);
            }
          }
        }
        evaluate() {
          if (((this.value = this.get()), this.vm.$dirty)) {
            var t =
              this._computedWatchers && this._computedWatchers[this.key]
                ? this.vm._computedWatchers[this.key].value
                : this.value;
            this.vm.$dirty.push(this.key, this.key, t, this.value);
          }
          return (this.dirty = !1), this.value;
        }
        depend() {
          if (ut.target)
            for (var t = this.deps.length; t--; ) this.deps[t].depend();
        }
        teardown() {
          if (this.active) {
            this.vm._isBeingDestroyed || C(this.vm._watchers, this);
            for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
            for (var e = this.newDeps.length; e--; )
              this.newDeps[e].removeSub(this);
            (this.newDeps = []),
              (this.deps = []),
              this.newDepIds.clear(),
              this.depIds.clear(),
              (this.active = !1);
          }
        }
      }
      class Vt {
        constructor(t) {
          this.reset(),
            (this.type = t || "path"),
            (this._keys = {}),
            (this._path = {}),
            (this._length = 0);
        }
        push(t, e, n, r) {
          void 0 !== r &&
            ((this._keys[t] = n), (this._path[e] = r), this._length++);
        }
        pop() {
          var t = Object.create(null);
          return (
            "path" === this.type
              ? (t = this._path)
              : "key" === this.type && (t = this._keys),
            this.reset(),
            t
          );
        }
        get(t) {
          return "path" === t ? this._path : this._keys;
        }
        set(t, e, n) {
          var r, i;
          if (null != e) {
            var { combinePathKeys: o, combinePathMap: a } = vt(
              e,
              t.pathKeys,
              t.pathMap
            );
            (i = o), (r = a);
          } else (i = t.pathKeys), (r = t.pathMap);
          var { root: s, path: c } = r[i[0]] || {};
          this.push(s, c, s === c ? n : t.ob.vm[s], n);
        }
        reset() {
          return (this._keys = {}), (this._path = {}), (this._length = 0), this;
        }
        length() {
          return this._length;
        }
      }
      function Gt(t) {
        return Object.prototype.toString.call(t);
      }
      var Kt = function (t, e, n, r, i) {
        if ((void 0 === r && (r = ""), void 0 === i && (i = !1), t !== e)) {
          var o = Gt(t),
            a = Gt(e);
          if ("[object Function]" === o)
            return (n.data[r] = t), void (n.isChange = !0);
          if (
            a === o &&
            (("[object Array]" === o && t.length >= e.length) ||
              "[object Object]" === o)
          ) {
            var s = { data: {}, isChange: !1, hasSplitKey: !1 },
              c = Object.keys(t),
              u = Object.keys(e);
            if (u.some((t) => -1 === c.indexOf(t)) && !i) {
              var h = r ? { [r]: T(t) } : T(t);
              return Object.assign(n.data, h), void (n.isChange = !0);
            }
            var f = c.filter((n) => {
              var r = t[n],
                i = e[n],
                a = u.indexOf(n);
              return (
                -1 !== a && u.splice(a, 1),
                r !== i &&
                  (Kt(r, i, s, "[object Array]" === o ? "[" + n + "]" : n),
                  s.isChange)
              );
            });
            if (!f.length) return void (n.isChange = !1);
            var l =
                (c.length === f.length && !s.hasSplitKey) ||
                (u.length > 0 && !i),
              p = l
                ? r
                  ? { [r]: T(t) }
                  : T(t)
                : (function (t, e, n) {
                    return (
                      void 0 === n && (n = !1),
                      Array.isArray(t)
                        ? { [e]: t }
                        : Object.keys(t).reduce(
                            (r, i) => (
                              (r[e + (e && !n ? "." : "") + i] = t[i]), r
                            ),
                            {}
                          )
                    );
                  })(s.data, r, "[object Array]" === o);
            return (
              Object.assign(n.data, p),
              (n.isChange = !0),
              void (n.hasSplitKey = n.hasSplitKey || !l)
            );
          }
          (n.data[r] = T(t)), (n.isChange = !0);
        } else n.isChange = !1;
      };
      function Yt(t, e) {
        var n = { data: {} };
        return (
          (function (t, e) {
            "[object Object]" === Gt(t) &&
              Object.keys(t).forEach((n) => {
                if (/\w+\.\w+/g.test(n) && -1 === n.indexOf("[")) {
                  var r = n.split("."),
                    i = r.pop() || "",
                    o = t,
                    a = e;
                  r.forEach((t) => {
                    if (void 0 !== o[t] && "[object Object]" !== Gt(o[t]))
                      throw new Error("数据冲突");
                    var e = (a && a[t]) || {},
                      n = Object(u.a)({}, e);
                    (o[t] = n), (o = n), (a = e);
                  }),
                    (o[i] = t[n]),
                    delete t[n];
                }
              });
          })(t, e),
          Kt(t, e, n, "", !0),
          n.data
        );
      }
      var Wt = ["_watcher", "_computedWatchers"],
        $t = ["_watchers"],
        Zt = Object.create(null),
        Qt = [];
      var Xt = 0;
      class Jt {
        constructor() {
          (this.data = {}),
            (this.props = {}),
            (this._watchers = []),
            (this.$events = {}),
            (this._computedWatchers = {}),
            (this.$dirty = new Vt("path")),
            (this.$refs = {}),
            (this.$id = Xt++),
            (this._isDestroyed = !1),
            (this.$nextTick = It),
            (this.context = {});
        }
        $set(t, e, n) {
          return se(this, t, e, n);
        }
        $delete(t, e) {
          return ce(t, e);
        }
        $on(t, e) {
          return (
            (this.$events[t] = this.$events[t] || []),
            this.$events[t].push(e),
            this
          );
        }
        $once(t, e) {
          var n = this,
            r = function () {
              for (
                var i = arguments.length, o = new Array(i), a = 0;
                a < i;
                a++
              )
                o[a] = arguments[a];
              e.apply(n, o), n.$off(t, r);
            };
          return this.$on(t, r), this;
        }
        $off(t, e) {
          if (!t) return (this.$events = Object.create(null)), this;
          if (!this.$events[t]) return this;
          if (!e) return (this.$events[t] = []), this;
          if (e) {
            var n = this.$events[t];
            if (!n.length) return;
            for (var r = n.length; r--; ) {
              if (n[r] === e) {
                n.splice(r, 1);
                break;
              }
            }
          }
          return this;
        }
        $emit(t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          this._isDestroyed ||
            ([...(this.$events[t] || [])].forEach((e) => {
              if ("function" == typeof e)
                try {
                  e.apply(this, n);
                } catch (e) {
                  O(e, this, 'event handler for "' + t + '"');
                }
            }),
            this.triggerEvent(t, ...n));
        }
        _nativeCreated(t) {
          (this.triggerEvent = function (e) {
            for (
              var n = rt.get("platformConfig.event.triggerEvent") || v,
                r = arguments.length,
                i = new Array(r > 1 ? r - 1 : 0),
                o = 1;
              o < r;
              o++
            )
              i[o - 1] = arguments[o];
            n.call(Object(u.a)({}, this, { $native: t }), e, ...i);
          }),
            (this.$getPageQuery = function () {
              var e, n;
              return (
                (null ===
                  (n =
                    null === (e = t[c]) || void 0 === e ? void 0 : e.$root) ||
                void 0 === n
                  ? void 0
                  : n._pageQuery) || {}
              );
            }),
            (this.$getPageRoute = function () {
              var e, n;
              return (
                (null ===
                  (n =
                    null === (e = t[c]) || void 0 === e ? void 0 : e.$root) ||
                void 0 === n
                  ? void 0
                  : n._route) || {}
              );
            }),
            Object.defineProperty(this, "context", {
              get() {
                var e, n;
                return null ===
                  (n =
                    null === (e = t[c]) || void 0 === e ? void 0 : e.$root) ||
                  void 0 === n
                  ? void 0
                  : n.context;
              },
              set(e) {
                var n;
                (
                  (null === (n = t[c]) || void 0 === n ? void 0 : n.$root) || {
                    context: null,
                  }
                ).context = e;
              },
              configurable: !0,
            }),
            Object.defineProperty(this, "$is", {
              get: () => t.is || t.route,
              configurable: !0,
            }),
            Object.defineProperty(this, "$root", {
              get: () => t[c].$root,
              configurable: !0,
            }),
            Object.defineProperty(this, "_$native", {
              get: () => t,
              configurable: !0,
            });
          var e = (function (t, e, n) {
            void 0 === n && (n = 20);
            var r = {},
              i = Date.now(),
              o = null,
              a = [];
            function s() {
              if ((o && clearTimeout(o), (o = null), !e.hasDestroyed)) {
                (i = Date.now()), (o = null);
                var n = [...a],
                  s = r;
                (r = {}), (a = []);
                var c = Yt(s, Object(u.a)({}, e.data, e.props || {}));
                if (!Object.keys(c).length) return n.forEach((e) => e.call(t));
                e.setData &&
                  e.setData(c, () => {
                    n.forEach((e) => e.call(t));
                  });
              }
            }
            return function (t, c) {
              void 0 === c && (c = {});
              var u = Date.now();
              if (
                (c.cb && a.push(c.cb),
                Object.assign(r, t),
                c.immediate || e.hasMounted)
              )
                return s();
              u - i > n ? s() : o || (o = setTimeout(s, n));
            };
          })(this, t, 20);
          Object.defineProperty(this, "setData", {
            get: () => e,
            configurable: !0,
          });
        }
        $watch(t, e, n) {
          if (Array.isArray(e)) {
            var r = e.map((e) => this.$watch(t, e));
            return function () {
              r.forEach((t) => t && t());
            };
          }
          if (B(e)) {
            var { handler: i } = e;
            return (
              (n = e),
              "string" == typeof i && (i = this[i]),
              this.$watch(t, i, n)
            );
          }
          if ("string" == typeof e) {
            if (!this[e])
              return O(
                new Error("vm can't find " + e + " method."),
                this,
                "watch"
              );
            e = this[e];
          }
          (n = n || {}).user = !0;
          var o = new qt(this, t, e, n);
          return (
            n.immediate && e.call(this, o.value),
            function () {
              o.teardown();
            }
          );
        }
        $forceUpdate() {
          this._watcher && this._watcher.update();
        }
        _nativeDestory() {
          setTimeout(() => {
            var t;
            this.$destory(),
              (t = this),
              Ct.delete(t),
              (function (t) {
                At.has(t) && At.delete(t);
              })(this),
              (this.$refs = Object.create(null));
          });
        }
        $destory() {
          var t = this;
          if (!t._isBeingDestroyed) {
            (t._isBeingDestroyed = !0), t._watcher && t._watcher.teardown();
            for (var e = t._watchers.length; e--; ) t._watchers[e].teardown();
            !(function (t) {
              Wt.forEach((e) => {
                t[e] = Zt;
              }),
                $t.forEach((e) => {
                  t[e] = Qt;
                });
            })(t),
              (t._isDestroyed = !0),
              t.$off();
          }
        }
      }
      var te = Object.getOwnPropertyNames(gt),
        ee = !0;
      class ne {
        constructor(t) {
          var { vm: e, key: n, value: r, parent: i } = t;
          ((this.value = r),
          (this.dep = new ut()),
          (this.vmCount = 0),
          (this.vm = e),
          (this.op = new pt(n, this, i && i.__ob__ && i.__ob__.op)),
          j(r, "__ob__", this),
          Array.isArray(r))
            ? (((function () {
                var t = !1;
                if ("__proto__" in {}) {
                  var e = () => {},
                    n = [];
                  (n.__proto__ = { push: e }), (t = e === n.push);
                }
                return t;
              })()
                ? re
                : ie)(r, gt, te),
              this.observeArray(r))
            : this.walk(r);
        }
        walk(t) {
          for (var e = Object.keys(t), n = 0; n < e.length; n++)
            ae({ vm: this.vm, obj: t, key: e[n], value: t[e[n]], parent: t });
        }
        observeArray(t) {
          for (var e = 0, n = t.length; e < n; e++)
            oe({ vm: this.vm, key: e, value: t[e], parent: t });
        }
      }
      function re(t, e) {
        t.__proto__ = e;
      }
      function ie(t, e, n) {
        for (var r = 0, i = n.length; r < i; r++) {
          var o = n[r];
          j(t, o, e[o]);
        }
      }
      function oe(t) {
        var { vm: e, key: n, value: r, parent: i, root: o } = t;
        if (N(r) && !(r instanceof Jt)) {
          var a;
          if (U(r, "__ob__") && r.__ob__ instanceof ne) {
            a = r.__ob__;
            var { op: s } = a;
            !(function (t, e, n) {
              e.traverseOp(t, n.pathKeys, n.pathMap, function (t, e) {
                if (e.pathMap && !(t.path in e.pathMap)) return e.addPath(t), t;
                return null;
              });
            })(n, s, i && i.__ob__ && i.__ob__.op);
          } else
            ee &&
              (Array.isArray(r) || B(r)) &&
              Object.isExtensible(r) &&
              !r._isVue &&
              (a = new ne({ vm: e, key: n, value: r, parent: i }));
          return o && a && a.vmCount++, a;
        }
      }
      function ae(t) {
        var {
            vm: e,
            obj: n,
            key: r,
            value: i,
            parent: o,
            customSetter: a,
            shallow: s,
          } = t,
          c = new ut(),
          u = Object.getOwnPropertyDescriptor(n, r);
        if (!u || !1 !== u.configurable) {
          var h = u && u.get;
          h || 2 !== arguments.length || (i = n[r]);
          var f = u && u.set,
            l = !s && oe({ vm: e, key: r, value: i, parent: n });
          Object.defineProperty(n, r, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var t = h ? h.call(n) : i;
              return (
                ut.target &&
                  (c.depend(),
                  l && (l.dep.depend(), Array.isArray(t) && ue(t))),
                t
              );
            },
            set: function (t) {
              var a = h ? h.call(n) : i;
              t === a ||
                (t != t && a != a) ||
                (N(i) &&
                  U(i, "__ob__") &&
                  dt(r, i.__ob__.op, o && o.__ob__ && o.__ob__.op),
                f ? f.call(n, t) : (i = t),
                e && e.$dirty && e.$dirty.set(n.__ob__.op, r, t),
                (l = !s && oe({ vm: e, key: r, value: t, parent: o })),
                c.notify());
            },
          });
        }
      }
      function se(t, e, n, r) {
        if (Array.isArray(e) && F(n))
          return (e.length = Math.max(e.length, n)), e.splice(n, 1, r), r;
        if (n in e && !(n in Object.prototype)) return (e[n] = r), r;
        var i = e.__ob__;
        return e._isVue || (i && i.vmCount)
          ? r
          : i
          ? (N(e[n]) && U(e[n], "__ob__") && dt(n, e[n].__ob__.op, i.op),
            ae({ vm: t, obj: i.value, key: n, value: r, parent: i.value }),
            t && t.$dirty && U(e, "__ob__") && t.$dirty.set(e.__ob__.op, n, r),
            i.dep.notify(),
            r)
          : ((e[n] = r), r);
      }
      function ce(t, e) {
        if (Array.isArray(t) && F(e)) t.splice(e, 1);
        else {
          var n = t.__ob__;
          t._isVue ||
            (n && n.vmCount) ||
            (U(t, e) && ((t[e] = null), delete t[e], n && n.dep.notify()));
        }
      }
      function ue(t) {
        for (var e, n = 0, r = t.length; n < r; n++)
          (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(),
            Array.isArray(e) && ue(e);
      }
      var he = { enumerable: !0, configurable: !0, get: v, set: v };
      function fe(t, e, n) {
        (he.get = function () {
          return this[e][n];
        }),
          (he.set = function (t) {
            this[e][n] = t;
          }),
          Object.defineProperty(t, n, he);
      }
      function le(t) {
        return function () {
          var e = this._computedWatchers && this._computedWatchers[t];
          if (e)
            return (
              (e.key = t),
              e.dirty && e.evaluate(),
              ut.target && e.depend(),
              e.value
            );
        };
      }
      var pe = Object.prototype.toString,
        de = (t) => pe.call(t),
        ve = (t) => null !== t && "object" == typeof t;
      function ye(t, e) {
        if (!ve(t)) return t;
        if ((e = e || new Set()).has(t)) return t;
        if ((e.add(t), Array.isArray(t)))
          for (var n = 0; n < t.length; n++) ye(t[n], e);
        else if (
          "[object Set]" === de(t) ||
          ((t) => "[object Map]" === de(t))(t)
        )
          t.forEach((t) => {
            ye(t, e);
          });
        else if (ve(t))
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && ye(t[r], e);
        return t;
      }
      function ge(t, e) {
        return Object.keys(e).reduce(
          (n, r) => (t.includes(r) ? n : Object(u.a)({}, n, { [r]: e[r] })),
          {}
        );
      }
      function me(t, e) {
        var n = {};
        return (
          q(
            (function (t) {
              var e = {};
              return Array.isArray(t)
                ? t.reduce((t, e) => ((t[e] = { from: e }), t), e)
                : Object.keys(t).reduce((e, n) => {
                    var r = t[n];
                    return (
                      (e[n] = r),
                      (e[n] =
                        "string" == typeof r
                          ? { from: r }
                          : { from: r.from ? r.from : n, default: r.default }),
                      e
                    );
                  }, e);
            })(e),
            (e, r) => {
              if ("__ob__" !== e) {
                for (var i = r.from, o = t; o; ) {
                  var { vm: a } = o;
                  if (a._provided && U(a._provided, i))
                    return void (n[e] = a._provided[i]);
                  o = o.$parent;
                }
                if (r.default) {
                  var s = r.default;
                  n[e] = "function" == typeof s ? s.call(t.vm) : s;
                } else y('Injection "' + e + '" not found', t.vm);
              }
            }
          ),
          n
        );
      }
      class be {
        constructor(t) {
          (this._page = !1),
            (this._pageQuery = {}),
            (this._route = ""),
            (this.$children = []),
            (this.context = {}),
            (this._runtimes = t),
            (this.vm = new Jt()),
            (this.id =
              "actuator__" +
              (function (t) {
                void 0 === t && (t = 10);
                for (
                  var e = t,
                    n = "",
                    r =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    i = 0;
                  i < e;
                  i++
                )
                  n += r.charAt(Math.floor(Math.random() * r.length));
                return n;
              })() +
              "__" +
              ++be.idNum),
            t.name && (this.vm._name = t.name);
        }
        beforeCreateInvoke() {
          this.vm._nativeCreated(this[s]),
            this._runtimes.methods && this.mergeMethods(this._runtimes.methods);
        }
        create() {
          var { vm: t } = this;
          !this._page && t.$emit("_init", this),
            (function (t, e) {
              if (e) {
                var n = me(t, e);
                Object.keys(n).forEach((e) => {
                  ae({ vm: t.vm, obj: t.vm, key: e, value: n[e], parent: "" });
                });
              }
            })(this, this._runtimes.inject),
            (function (t, e) {
              var { vm: n } = t;
              if (((n.props = {}), e)) {
                var { key: r } = rt.get("platformConfig.properties"),
                  i = t[s],
                  o = i[r];
                q(o, (t, r) => {
                  t in e &&
                    ((n.props[t] = null !== r ? r : e[t].default),
                    fe(n, "props", t));
                }),
                  oe({ vm: n, key: "", value: n.props, root: !0 }),
                  Object.defineProperty(i, r, {
                    get: () => o,
                    set(t) {
                      q(t, (t, e) => {
                        e !== o[t] &&
                          t in n.props &&
                          ((n.props[t] = e), (o[t] = e));
                      });
                    },
                    configurable: !0,
                  }),
                  q(o, (t, e) => {
                    Object.defineProperty(o, t, {
                      get: () => e,
                      set(r) {
                        (e = r), (n.props[t] = e);
                      },
                      configurable: !0,
                    });
                  });
              }
            })(this, this._runtimes.props);
          var e = _e.call(this, "data"),
            n = _e.call(this, "logicData");
          !(function (t, e) {
            e || (e = {});
            var n = T(e);
            (t.data = n),
              Object.keys(n).forEach((e) => {
                fe(t, "data", e);
              }),
              oe({ vm: t, key: "", value: n, parent: "", root: !0 }),
              t.setData(Object(u.a)({}, e), { immediate: !0 });
          })(t, e),
            (function (t, e) {
              e || (e = {});
              var n = T(e);
              (t.logicData = n),
                Object.keys(n).forEach((e) => {
                  fe(t, "logicData", e);
                }),
                oe({ vm: t, key: "", value: n, parent: "", root: !0 });
            })(t, n),
            (function (t, e) {
              if (e) {
                var n = (t._computedWatchers = Object.create(null)),
                  r = { lazy: !0 };
                Object.keys(e).forEach((i) => {
                  var o = e[i],
                    a = "object" == typeof o ? o.get : o;
                  (n[i] = new qt(t, a || v, v, r)),
                    "function" == typeof o
                      ? ((he.get = le(i)), (he.set = v))
                      : ((he.get = !1 !== o.cache ? le(i) : o.get),
                        (he.set = o.set)),
                    Object.defineProperty(t, i, he);
                });
              }
            })(t, this._runtimes.computed),
            (function (t, e) {
              e &&
                Object.keys(e).forEach((n) => {
                  t.$watch(n, e[n]);
                });
            })(t, this._runtimes.watch),
            (function (t, e, n, r) {
              var { vm: i } = t;
              i._init = !1;
              var o = null;
              new qt(
                i,
                tt(function () {
                  if (
                    (i._init || e.forEach((t) => ye(i[t])),
                    i.$dirty.length() || o)
                  ) {
                    var t = i.$dirty.get("key");
                    n.forEach((t) => i[t]);
                    var a = i.$dirty.pop();
                    if ((Object.keys(t).forEach((t) => ye(i[t])), a || o))
                      if (i._init) {
                        if (o) {
                          var s = Object.assign(o, a || {});
                          i.setData(ge(r, s), { cb: Dt(i) }), (o = null);
                        } else i.setData(ge(r, a), { cb: Dt(i) });
                      } else null === o && (o = {}), Object.assign(o, a);
                  }
                  i._init = !0;
                }),
                v,
                null,
                !0
              );
            })(
              this,
              Object.keys(t.data)
                .concat(Object.keys(t.props))
                .concat(Object.keys(t._computedWatchers || {})),
              Object.keys(t._computedWatchers || {}),
              Object.keys(t.logicData)
            ),
            (function (t, e) {
              e && (t._provided = "function" == typeof e ? e.call(t) : e);
            })(t, this._runtimes.provide);
        }
        mergeMethods(t) {
          q(t, (t, e) => {
            if (this.vm[t])
              throw new Error(t + " 已经被定义，不能使用该标识符作为方法名");
            this.vm[t] = tt(e).bind(this.vm);
          });
        }
        get nativeInstance() {
          return this[s];
        }
        static getActuator(t) {
          return t[c];
        }
        static beforeCreate() {}
        static mounted() {
          var t = be.getActuator(this);
          t && ((this.hasMounted = !0), t.vm.$forceUpdate());
        }
        static destroyed() {
          var t = be.getActuator(this);
          (this.hasDestroyed = !0),
            setTimeout(() => {
              var { vm: e } = this[c];
              delete be.actuatorMap[t.id],
                e._nativeDestory(),
                (function (t) {
                  var { key: e } = rt.get("platformConfig.properties"),
                    n = t[e];
                  q(n, (t) => delete n[t]), delete t[e];
                })(this),
                delete this[c],
                [s, "vm", "$root", "$children", "$parent", "context"].forEach(
                  (e) => {
                    delete t[e];
                  }
                );
            });
        }
      }
      function _e(t) {
        var e = {};
        return (
          q(this._runtimes[t], (t, n) => {
            "function" != typeof n && (n = () => n),
              tt(() => {
                Object.assign(e, n.call(this.vm));
              }, !0);
          }),
          e
        );
      }
      (be.actuatorMap = {}), (be.idNum = 0);
      var Ee = [
        {
          usingScope: ["page", "component"],
          methods: {
            _tic: function (t) {
              var e,
                { normalizeEvent: n = v } = rt.get("platformConfig.event"),
                { detail: r } = n(t),
                { dataset: i } = t.currentTarget || t.target,
                { ref: o } = i;
              e = "string" == typeof r ? be.actuatorMap[r] : r;
              var a = this[c],
                { vm: s } = a;
              if (s)
                return (
                  a.$children.push(e),
                  o &&
                    (s.$refs[o] &&
                      y(
                        'duplicate ref "' +
                          o +
                          '" will be covered by the last instance.\n',
                        s
                      ),
                    (s.$refs[o] = e.vm)),
                  (e.$parent = a),
                  (e.$root = a.$root),
                  s
                );
            },
          },
        },
        {
          usingScope: ["page", "component"],
          methods: {
            _p: function (t) {
              var e, n, r, i;
              if (
                !this.hasDestroyed &&
                "object" == typeof t &&
                Object.prototype.hasOwnProperty.call(t, "type")
              ) {
                var { normalizeEvent: o = v } = rt.get("platformConfig.event"),
                  a = o(t),
                  s = this[c].vm;
                s && (s.origin = this);
                var u = H(a.type),
                  { dataset: h } = a.currentTarget || a.target,
                  { modelId: f } = h,
                  l = h.t || h.tedd,
                  { en: p, args: d = [] } = l[u];
                if ((f && (s[f] = a.detail.value), p && R(s[p]))) {
                  var y = [...d],
                    m = T(a, !0),
                    b = h.t ? "t" : "tedd";
                  (null === (e = m.currentTarget) || void 0 === e
                    ? void 0
                    : e.dataset) &&
                    (null === (n = m.currentTarget) || void 0 === n
                      ? void 0
                      : n.dataset[b]) &&
                    delete m.currentTarget.dataset[b],
                    (null === (r = m.target) || void 0 === r
                      ? void 0
                      : r.dataset) &&
                      (null === (i = m.target) || void 0 === i
                        ? void 0
                        : i.dataset[b]) &&
                      delete m.target.dataset[b],
                    y.length
                      ? y.push(m)
                      : a.custom
                      ? y.push(m.detail, m)
                      : y.push(m),
                    g.emit("ui", { type: u, args: y.slice(0, -1), event: m });
                  var _ = y[0];
                  return _ && _.__isShadow__
                    ? s[p].call(s, ...y.reverse())
                    : s[p].call(s, ...y);
                }
              }
            },
          },
        },
      ];
      class we {
        constructor(t) {
          this.executor = new be(t);
        }
        static onLaunch(t, e) {
          var { executor: n } = new we(e);
          (this[c] = n),
            (n[s] = this),
            (n.vm = this),
            (n.vm.$scope = "app"),
            (n.vm.options = t),
            o.setGlobal("APP_INSTANCE", n.vm);
        }
        static onShow(t) {
          var e = be.getActuator(this);
          (e.vm.options = t), o.setGlobal("APP_INSTANCE", e.vm);
        }
      }
      var Oe = [
        "onPullDownRefresh",
        "onReachBottom",
        "onShareAppMessage",
        "onPageScroll",
        "onTabItemTap",
        "onShareTimeline",
      ];
      class Se extends be {
        constructor(t) {
          super(t),
            (this._page = !0),
            (this._runtimes = t),
            (this.$root = this),
            (this.$parent = void 0),
            (this.vm.$scope = "page");
        }
        bindNativePageApi() {
          var { nativeInstance: t } = this;
          (this._route = t.route),
            Oe.forEach((e) => {
              t[e] && (t[e] = t[e].bind(this.vm));
            });
        }
        addPageRootClickHandle() {
          this.vm._tprc = (t) => {
            this.vm.$emit("rootClick", t);
          };
        }
        static beforeCreate(t) {
          var e = new Se(t);
          (this[c] = e),
            (e[s] = this),
            e.beforeCreateInvoke(),
            e.addPageRootClickHandle(),
            e.bindNativePageApi();
        }
        static created() {
          be.getActuator(this).create();
        }
      }
      class xe extends be {
        constructor(t) {
          super(t),
            (this._page = !1),
            (this._runtimes = t),
            (this.vm.$scope = "component");
        }
        static beforeCreate(t) {
          var e = new xe(t);
          (this[c] = e), (e[s] = this), e.beforeCreateInvoke();
        }
        static created() {
          be.getActuator(this).create();
        }
      }
      !(function (t, e) {
        if (-1 !== at.indexOf(t))
          throw new Error("已经存在名为 " + t + " 的插件");
        at.push(t);
        var { polyfill: n, hooks: r, transformCode: i } = e(o);
        n &&
          (it.forEach((t) => {
            if (n[t]) throw new Error("插件注册的API不能与平台API冲突");
          }),
          Object.assign(o, n || {})),
          r && rt.addHooks(t, r),
          i && rt.addCoder(t, i);
      })("mini-platform", function (t) {
        return {
          hooks: {
            preAppLaunch(t) {
              we.onLaunch.call(this, t.options, t.runtimes);
            },
            preAppShow(t) {
              we.onShow.call(this, t.options);
            },
            preBeforePageCreate(t) {
              Se.beforeCreate.call(this, t.runtimes);
            },
            prePageCreated() {
              Se.created.call(this);
            },
            prePageMounted() {
              Se.mounted.call(this);
            },
            prePageDestroyed() {
              Se.destroyed.call(this);
            },
            preBeforeComponentCreate(t) {
              xe.beforeCreate.call(this, t.runtimes);
            },
            preComponentCreated() {
              xe.created.call(this);
            },
            preComponentMounted() {
              Se.mounted.call(this);
            },
            preComponentDestroyed() {
              Se.destroyed.call(this);
            },
          },
        };
      });
      var Te = wx;
      var ke = {
          request: Te.request,
          getStorage: Te.getStorage,
          setStorage: Te.setStorage,
          getExtConfig: Te.getExtConfigSync,
          openAddress: function () {
            return new Promise((t, e) => {
              Te.chooseAddress({
                success(e) {
                  t({
                    address: e.detailInfo,
                    city: e.cityName,
                    county: e.countyName,
                    userName: e.userName,
                    tel: e.telNumber,
                    province: e.provinceName,
                    areaCode: "",
                    postalCode: e.postalCode,
                  });
                },
                fail: e,
              });
            });
          },
        },
        Pe = Symbol.for("custom"),
        Ae = {
          app: ["onLaunch", "onShow", "onHide"],
          page: [
            "attached",
            "attached",
            "onShow",
            "onHide",
            "onLoad",
            "ready",
            "onUnload",
          ],
          component: ["attached", "attached", "ready", "ready", "detached"],
        },
        Ce = {
          App: () => App,
          Page: () => Component,
          Component: () => Component,
        };
      function je(t, e) {
        t[e] ? (this[e] = t[e].bind(t)) : y(e + " 在当前平台不存在");
      }
      var De = {
          key: "properties",
          parser: (t) =>
            Object.keys(t).reduce(
              (e, n) => ((e[n] = { type: null, value: t[n].default }), e),
              {}
            ),
        },
        Ie = {
          normalizeEvent(t) {
            var e,
              n,
              r = N(t.detail) && !0 === t.detail[Pe];
            return (
              r
                ? ((t.custom = r), (t.detail = t.detail.payload))
                : (t.loc = {
                    pageX:
                      null === (e = null == t ? void 0 : t.detail) ||
                      void 0 === e
                        ? void 0
                        : e.x,
                    pageY:
                      null === (n = null == t ? void 0 : t.detail) ||
                      void 0 === n
                        ? void 0
                        : n.y,
                  }),
              t
            );
          },
          triggerEvent(t, e, n) {
            var { $native: r } = this;
            "click" === t && (t = "tap"),
              r.triggerEvent(t, { [Pe]: !0, payload: e }, n);
          },
        },
        Re = (t) => {
          var { pageFuncList: e = [], componentFuncList: n = [] } = t;
          return {
            parsePageQuery: (t) =>
              Object.keys(t).reduce(
                (e, n) => ((e[n] = decodeURIComponent(t[n])), e),
                {}
              ),
            beforePageCreate(t) {
              var { $native: n } = t;
              e.forEach((t) => {
                je.call(this, n, t);
              });
            },
            componentCreated(t) {
              var { $native: e } = t;
              n.forEach((t) => {
                je.call(this, e, t);
              });
            },
          };
        };
      function Ne(t, e, n, r) {
        void 0 === n && (n = {});
        var { externalClasses: i } = t;
        try {
          (null == r ? void 0 : r.ud) &&
            (null == r ? void 0 : r.data) &&
            (t.data = Object(u.a)({}, t.data, r.data()));
        } catch (t) {}
        if (Array.isArray(i)) {
          var { data: o } = e;
          null == o || o.push(() => i.reduce((t, e) => ((t[H(e)] = e), t), {}));
        }
        if ("app" !== n.scope) {
          if ("page" === n.scope) {
            var a = (t.methods = t.methods || {});
            (a.onLoad = t.onLoad),
              (a.onShow = t.onShow),
              (a.onHide = t.onHide),
              (a.onUnload = t.onUnload);
          }
          (t.options = t.options || {}), (t.options.multipleSlots = !0);
        } else Object.assign(t, t.methods);
      }
      var Me = {
        pageFuncList: [
          "createIntersectionObserver",
          "setUpdatePerformanceListener",
        ],
        componentFuncList: [
          "createIntersectionObserver",
          "setUpdatePerformanceListener",
          "createSelectorQuery",
        ],
      };
      !(function (t, e) {
        if (-1 !== at.indexOf(t))
          throw new Error("已经存在名为 " + t + " 的插件");
        if (o.platform)
          throw new Error("已经存在名为 " + o.platform + " 的平台插件");
        var n = e(o),
          {
            platform: r,
            nativeApis: i,
            polyfill: a,
            constructors: s,
            lifeCycle: c,
            hooks: h,
            transformCode: f,
          } = n;
        if (
          (rt.set(
            "platformConfig",
            Object(u.a)({ properties: { key: "props" }, event: {} }, n)
          ),
          X(i, "nativeApis 字段必须提供"),
          (o.platform = r),
          (o.$native = i),
          !a)
        )
          throw new Error("平台必须提供: " + it + " 这些 API 的实现");
        it.forEach((t) => {
          if (!a[t]) throw new Error("平台需要实现 " + t + " API");
        }),
          Object.assign(o, a || {}),
          X(!!s, "平台插件必须提供 constructors 字段"),
          X(!!c, "平台插件必须提供 lifeCycle 字段"),
          (o.app = rt.createApp(s.App(), c.app)),
          (o.page = rt.createPage(s.Page(), c.page)),
          (o.component = rt.createComponent(s.Component(), c.component)),
          h && rt.addHooks(t, h),
          f && rt.addCoder(t, f),
          at.push(t);
      })("weapp", function () {
        return {
          platform: "weapp",
          polyfill: ke,
          nativeApis: Te,
          lifeCycle: Ae,
          constructors: Ce,
          properties: Object(u.a)({}, De),
          event: Object(u.a)({}, Ie),
          hooks: Object(u.a)({}, Re(Me)),
          transformCode: Ne,
        };
      });
      e.default = (function () {
        (o.use = st), (o.config = Object.create(null));
        var t = (function () {
          if (!o.platform)
            throw new Error("请使用 registerPlatform 注册平台插件");
          return (
            o.use(i),
            (o.requirePlugin =
              "function" == typeof requirePlugin
                ? requirePlugin
                : function () {}),
            o.requirePlugin.async ||
              (o.requirePlugin.async = function (t) {
                return Promise.resolve(o.requirePlugin(t));
              }),
            o
          );
        })();
        return (
          Ee.forEach((e) => t.mixin(e)),
          (t.set = se.bind(t, void 0)),
          (t.delete = ce),
          (t.observe = oe),
          t
        );
      })();
    },
    AXNr: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n("2wjL");
      function i() {
        var t = "";
        try {
          var e = getCurrentPages();
          t = e[e.length - 1].route;
        } catch (t) {}
        return t;
      }
      function o() {
        var t = "";
        try {
          var e = getCurrentPages(),
            n = e[e.length - 1];
          t = r.a.add(n.route, n.options || {});
        } catch (t) {}
        return t;
      }
    },
    B5ln: function (t, e, n) {
      n.r(e);
      var r = n("c514");
      n.d(e, "AuthType", function () {
        return r.c;
      }),
        n.d(e, "EAuthorizeItems", function () {
          return r.d;
        }),
        n.d(e, "AuthPopType", function () {
          return r.b;
        }),
        n.d(e, "EAuthorizePopupType", function () {
          return r.e;
        }),
        n.d(e, "AuthActionType", function () {
          return r.a;
        });
      var i = n("NotG");
      n.d(e, "EResolveAction", function () {
        return i.a;
      });
      var o = n("equh");
      for (var a in o)
        [
          "default",
          "AuthType",
          "EAuthorizeItems",
          "AuthPopType",
          "EAuthorizePopupType",
          "AuthActionType",
          "EResolveAction",
        ].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      var s = n("mMP1");
      n.d(e, "UserGender", function () {
        return s.a;
      });
      var c = n("I9eD");
      for (var a in c)
        [
          "default",
          "AuthType",
          "EAuthorizeItems",
          "AuthPopType",
          "EAuthorizePopupType",
          "AuthActionType",
          "EResolveAction",
          "UserGender",
        ].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(a);
    },
    BANk: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n("Fcif"),
        i = n("9ZMt");
      function o(t) {
        return i.default.$native.uploadFile(
          Object(r.a)({}, t, {
            name: t.fileName,
            success: function (e) {
              void 0 === e && (e = { data: "", statusCode: "" }),
                t.success &&
                  t.success(
                    Object(r.a)({}, e, { statusCode: String(e.statusCode) })
                  );
            },
          })
        );
      }
    },
    BCRw: function (t, e, n) {
      var r = n("e+GP").default;
      function i() {
        (t.exports = i =
          function () {
            return e;
          }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
        var e = {},
          n = Object.prototype,
          o = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          c = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          h = s.toStringTag || "@@toStringTag";
        function f(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          f({}, "");
        } catch (t) {
          f = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var i = e && e.prototype instanceof v ? e : v,
            o = Object.create(i.prototype),
            s = new P(r || []);
          return a(o, "_invoke", { value: S(t, n, s) }), o;
        }
        function p(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var d = {};
        function v() {}
        function y() {}
        function g() {}
        var m = {};
        f(m, c, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          _ = b && b(b(A([])));
        _ && _ !== n && o.call(_, c) && (m = _);
        var E = (g.prototype = v.prototype = Object.create(m));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            f(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function O(t, e) {
          var n;
          a(this, "_invoke", {
            value: function (i, a) {
              function s() {
                return new e(function (n, s) {
                  !(function n(i, a, s, c) {
                    var u = p(t[i], t, a);
                    if ("throw" !== u.type) {
                      var h = u.arg,
                        f = h.value;
                      return f && "object" == r(f) && o.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, s, c);
                            },
                            function (t) {
                              n("throw", t, s, c);
                            }
                          )
                        : e.resolve(f).then(
                            function (t) {
                              (h.value = t), s(h);
                            },
                            function (t) {
                              return n("throw", t, s, c);
                            }
                          );
                    }
                    c(u.arg);
                  })(i, a, n, s);
                });
              }
              return (n = n ? n.then(s, s) : s());
            },
          });
        }
        function S(t, e, n) {
          var r = "suspendedStart";
          return function (i, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === i) throw o;
              return C();
            }
            for (n.method = i, n.arg = o; ; ) {
              var a = n.delegate;
              if (a) {
                var s = x(a, n);
                if (s) {
                  if (s === d) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var c = p(t, e, n);
              if ("normal" === c.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function x(t, e) {
          var n = e.method,
            r = t.iterator[n];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                x(t, e),
                "throw" === e.method)) ||
                ("return" !== n &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var i = p(r, t.iterator, e.arg);
          if ("throw" === i.type)
            return (
              (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), d
            );
          var o = i.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                d)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              d);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function A(t) {
          if (t) {
            var e = t[c];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                r = function e() {
                  for (; ++n < t.length; )
                    if (o.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (y.prototype = g),
          a(E, "constructor", { value: g, configurable: !0 }),
          a(g, "constructor", { value: y, configurable: !0 }),
          (y.displayName = f(g, h, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === y || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), f(t, h, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          w(O.prototype),
          f(O.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = O),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new O(l(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(E),
          f(E, h, "Generator"),
          f(E, c, function () {
            return this;
          }),
          f(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = A),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    o.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var s = o.call(i, "catchLoc"),
                    c = o.call(i, "finallyLoc");
                  if (s && c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), k(n), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    k(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: A(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      (t.exports = i),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    BSAF: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n("bb6g"),
        i = function (t, e) {
          void 0 === e && (e = !1);
          var n = {};
          return (
            t.split("&").forEach(function (t) {
              var r = t.indexOf("=");
              if (!(r <= 0)) {
                var i = t.substr(0, r).trim(),
                  o = t.substr(r + 1).trim();
                if (
                  ((o = e ? decodeURIComponent(o) : o),
                  "[" === i[r - 2] && "]" === i[r - 1])
                ) {
                  if (!(i = i.substr(0, r - 2).trim())) return;
                  n[i] || (n[i] = []), n[i].push(o);
                } else n[i] = o;
              }
            }),
            n
          );
        },
        o = function (t, e) {
          if ((void 0 === e && (e = !1), null === t || "object" != typeof t))
            return "";
          var n = [];
          return (
            Object.keys(t).forEach(function (r) {
              var i = t[r],
                o = r.trim();
              void 0 !== i &&
                (Array.isArray(i)
                  ? i.forEach(function (t) {
                      (t = e ? encodeURIComponent(t) : t),
                        n.push("".concat(o, "[]=").concat(t));
                    })
                  : ((i = e ? encodeURIComponent(i) : i),
                    n.push("".concat(o, "=").concat(i))));
            }),
            n.join("&")
          );
        },
        a = function (t) {
          if (
            "" === (t = "".concat(t).trim()) ||
            "javascript" === t.substr(0, 10)
          )
            return { hashArray: [] };
          var e = t.split("#"),
            n = e[0].split("?");
          return { hashArray: e, paraArray: (n = "" === n[1] ? [n[0]] : n) };
        };
      function s(t, e) {
        void 0 === t && (t = ""), void 0 === e && (e = !1);
        var n = a(t).paraArray;
        return (n && i(n[1] || "", e)) || {};
      }
      var c = {
        add: function (t, e, n) {
          void 0 === n && (n = !0);
          var s = a(t),
            c = s.hashArray,
            u = s.paraArray;
          if (!u) return t;
          if (u[1]) {
            var h = r.__assign(r.__assign({}, i(u[1], !0)), e);
            u[1] = o(h, n);
          } else u.push(o(e, n));
          var f = u.join("?");
          return c[1] && (f += "#".concat(c[1])), f;
        },
        remove: function (t, e) {
          var n = a(t),
            r = n.hashArray,
            i = n.paraArray;
          if (!i) return t;
          i[1] &&
            (i[1] = (function (t, e) {
              for (var n = t.indexOf(e), r = "", i = 0; n >= 0; ) {
                if (
                  ((r += t.substring(i, n)), 0 === (i = t.indexOf("&", n) + 1))
                )
                  return r.substr(0, Math.max(r.length - 1, 0));
                n = t.indexOf(e, i);
              }
              return (r += t.substr(i));
            })(i[1], "".concat(e, "=")));
          var o = i.join("?");
          return r[1] && (o += "#".concat(r[1])), o;
        },
        get: function (t, e, n) {
          return (
            void 0 === n && (n = !0),
            e ||
              "undefined" == typeof window ||
              (e = (window.location && window.location.href) || ""),
            s(e, n)[t]
          );
        },
        getAll: s,
      };
      e.default = c;
    },
    Btea: function (t, e, n) {
      n.r(e),
        n.d(e, "storage", function () {
          return r;
        }),
        n.d(e, "getExtConfigByKey", function () {
          return y;
        }),
        n.d(e, "useGlobal", function () {
          return g.a;
        }),
        n.d(e, "externalClassesMixin", function () {
          return m.a;
        });
      var r = {};
      n.r(r),
        n.d(r, "remove", function () {
          return s;
        }),
        n.d(r, "removeAsync", function () {
          return c;
        }),
        n.d(r, "set", function () {
          return u;
        }),
        n.d(r, "setAsync", function () {
          return h;
        }),
        n.d(r, "get", function () {
          return f;
        }),
        n.d(r, "getAsync", function () {
          return l;
        });
      var i = n("Sipi"),
        o = n("GFyo");
      function a(t) {
        return void 0 === t && (t = 7), Date.now() + 24 * t * 3600 * 1e3;
      }
      function s(t) {
        try {
          Object(i.c)(t);
        } catch (t) {}
      }
      function c(t) {
        return Object(o.e)(t);
      }
      function u(t, e, n) {
        void 0 === n && (n = {});
        try {
          return Object(i.d)(t, { value: e, expire: a(n.expire) });
        } catch (t) {}
      }
      function h(t, e, n) {
        return (
          void 0 === n && (n = {}),
          Object(o.g)(t, { value: e, expire: a(n.expire) })
        );
      }
      function f(t) {
        try {
          var e = Object(i.b)(t);
          if (!e) return;
          if (e.expire > Date.now()) return e.value;
          c(t);
        } catch (t) {}
      }
      function l(t) {
        return Object(o.c)(t).then(function (e) {
          var n = e.data;
          if (n) {
            var r = n.expire,
              i = n.value,
              o = void 0 === i ? "" : i;
            if (r > Date.now()) return o;
            c(t);
          }
        });
      }
      var p = n("U0uK"),
        d = n("o5pj"),
        v = {};
      function y(t) {
        try {
          return (
            Object(d.b)(v) && p.a && (v = Object(p.a)()),
            t ? Object(d.a)(v, t) : v
          );
        } catch (t) {
          return {};
        }
      }
      var g = n("3tAa"),
        m = n("n6zP");
    },
    CKld: function (t, e, n) {
      var r = n("bb6g"),
        i = n("9ZMt"),
        o = "__PASSPORT_TEE_";
      e.a = {
        init: function (t, e, n) {
          return (
            void 0 === n && (n = {}),
            i.default.setGlobal(o + t, {
              data: e,
              time: Date.now(),
              expire: n.expire,
            }),
            e
          );
        },
        get: function (t, e, n) {
          void 0 === n && (n = {});
          var r = i.default.getGlobal(o + t) || {},
            a = r.data,
            s = r.time,
            c = r.expire;
          return s ? (c && Date.now() - s > c ? e : a) : this.init(t, e, n);
        },
        set: function (t, e, n) {
          void 0 === n && (n = {});
          var r = { data: e, time: Date.now() };
          n.expire && (r.expire = n.expire), i.default.setGlobal(o + t, r);
        },
        setObj: function (t, e, n) {
          var a;
          void 0 === n && (n = {});
          var s = i.default.getGlobal(o + t);
          this.set(
            t,
            Object(r.__assign)(
              Object(r.__assign)(
                {},
                null !== (a = null == s ? void 0 : s.data) && void 0 !== a
                  ? a
                  : {}
              ),
              e
            ),
            n
          );
        },
      };
    },
    CMtL: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getAuthState =
          e.getWholeProtocolData =
          e.signProtocolBatch =
            void 0);
      var r = n("lfpY"),
        i = n("Sx60"),
        o = n("EyoS");
      (e.signProtocolBatch = function (t) {
        return t.length
          ? r.request({
              url: "/passport/api/protocol/batchSign.json",
              method: "POST",
              data: { ids: t },
            })
          : Promise.resolve();
      }),
        (e.getWholeProtocolData = function (t) {
          void 0 === t && (t = []);
          var e = i.formatProtocolCode(t);
          return r.request({
            url: "/passport/protocol/data.json",
            method: "GET",
            data: { protocolCode: e },
          });
        }),
        (e.getAuthState = function () {
          return o.resolveTeeAPI().then(function (t) {
            return t.getUserPrivacy();
          });
        });
    },
    CV91: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.protocolSign = void 0);
      var r = n("CMtL"),
        i = n("gyjr");
      e.protocolSign = function (t) {
        return 0 === t.length
          ? Promise.resolve()
          : r.signProtocolBatch(t).then(function () {
              i.clearProtocolCache();
            });
      };
    },
    DEHM: function (t, e, n) {
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return i;
        }),
        n.d(e, "g", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "h", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return h;
        });
      var r = "getAppTokenHook",
        i = "checkLoginGlobalHook",
        o = "teeLoginFailHook",
        a = "beforeYouzanLoginHook",
        s = "youzanLoginFailHook",
        c = "mobileChangeHook",
        u = "authOneAfterHook",
        h = "protocolBeforeAgreeHook";
    },
    E6qs: function (t, e, n) {
      n.d(e, "c", function () {
        return c;
      }),
        n.d(e, "i", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return h;
        }),
        n.d(e, "h", function () {
          return v;
        }),
        n.d(e, "b", function () {
          return y;
        }),
        n.d(e, "e", function () {
          return g;
        }),
        n.d(e, "a", function () {
          return m;
        }),
        n.d(e, "j", function () {
          return b;
        }),
        n.d(e, "g", function () {
          return _;
        }),
        n.d(e, "k", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return p;
        });
      var r = n("bb6g"),
        i = n("9ZMt"),
        o = n("SyLL"),
        a = n("1rIA");
      function s(t) {
        return Object(r.__awaiter)(this, void 0, void 0, function () {
          return Object(r.__generator)(this, function (e) {
            return [
              2,
              new Promise(function (e, n) {
                try {
                  setTimeout(function () {
                    e();
                  }, t);
                } catch (t) {
                  n(t);
                }
              }),
            ];
          });
        });
      }
      function c(t) {
        var e = t.vm,
          n = t.eventType,
          r = t.data;
        switch (n) {
          case a.j.SUCCESS:
            e.$emit(a.j.SUCCESS, r),
              "function" == typeof o.c.onSuccess && o.c.onSuccess(r);
            break;
          case a.j.FAILED:
            e.$emit(a.j.FAILED, r),
              "function" == typeof o.c.onFail && o.c.onFail(r);
            break;
          case a.j.ERROR:
            e.$emit(a.j.ERROR, r),
              "function" == typeof o.c.onError && o.c.onError(r);
            break;
          case a.j.CANCEL:
            e.$emit("close"),
              "function" == typeof o.c.onCancel && o.c.onCancel();
        }
      }
      function u(t) {
        var e = t.vm,
          n = t.onError;
        n && n(),
          c({ vm: e, eventType: a.j.FAILED }),
          e.delay(a.l.ERROR, function () {}, a.l.ERROR);
      }
      function h() {
        switch (i.default.getEnv()) {
          case "weapp":
            return wx;
          case "qq":
            return qq;
          case "ant":
            return my;
          case "xhs":
            return xhs;
          case "tt":
            return tt;
          case "ks":
            return ks;
          default:
            return window;
        }
      }
      var f = n("QxN7");
      function l(t) {
        f.cache.set(f.CACHE_BEHAVIOR_CRYPTO_INFO, { publicKey: t });
      }
      function p(t, e) {
        if (!t) return t;
        for (
          var n = f.cache.get(f.CACHE_BEHAVIOR_CRYPTO_INFO),
            i = "object" == typeof t ? JSON.stringify(t) : t,
            o = [],
            a = 0;
          a < (null == i ? void 0 : i.length);

        )
          o.push(i.slice(a, (a += 117)));
        return o.map(function (t) {
          return e.rsa.encrypt(Object(r.__assign)({ data: t }, n));
        });
      }
      function d(t) {
        return decodeURIComponent(t.split("").reverse().join(""));
      }
      var v = d(
          "nosj.tpo-nekot-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%tropssapF2%"
        ),
        y = d(
          "nosj.tpo-atad-ahctpac-roivaheb-kcehcF2%ahctpacF2%ipaF2%tropssapF2%"
        ),
        g = d("nosj.atad-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%tropssapF2%"),
        m = (function () {
          function t() {
            (this.userDataList = []), this.init();
          }
          return (
            (t.prototype.init = function () {
              this.userDataList = [];
            }),
            (t.prototype.move = function (t) {
              var e = t.x,
                n = t.y;
              this.userDataList.length > 300 ||
                this.userDataList.push({ x: e, y: n, t: Date.now() });
            }),
            (t.prototype.end = function (t) {
              var e = t.left,
                n = t.top;
              if (!(this.userDataList.length < 5)) {
                var r = [];
                return (
                  this.userDataList.reduce(function (t, i, o) {
                    return (
                      1 === o &&
                        r.push({
                          mx: Math.ceil(t.x - e),
                          my: Math.ceil(t.y - n),
                          ts: t.t,
                        }),
                      r.push({
                        mx: Math.ceil(i.x - t.x),
                        my: Math.ceil(i.y - t.y),
                        ts: Math.ceil(i.t - t.t),
                      }),
                      i
                    );
                  }),
                  this.init(),
                  r
                );
              }
              this.init();
            }),
            t
          );
        })();
      function b(t, e, n, i) {
        return (
          void 0 === n && (n = 0),
          Object(r.__awaiter)(this, void 0, void 0, function () {
            return Object(r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return n ? [4, s(n)] : [3, 2];
                case 1:
                  r.sent(), (r.label = 2);
                case 2:
                  return (
                    f.platform
                      .selectBoundingClientRect(i, "#" + t)
                      .then(function (t) {
                        if (t && 0 !== t.length) {
                          var n = t[0] || {},
                            r = n.left,
                            i = n.right,
                            o = n.top,
                            a = n.bottom,
                            s = n.width,
                            c = n.height;
                          e({
                            left: r,
                            right: i,
                            top: o,
                            bottom: a,
                            width: s,
                            height: c,
                          });
                        }
                      }),
                    [2]
                  );
              }
            });
          })
        );
      }
      function _(t, e) {
        return new Promise(function (n) {
          if (t.detail) {
            var r = t.detail;
            n({ width: r.width, height: r.height });
          } else if (t.target) {
            var i = t.target;
            n({ width: i.width, height: i.height });
          } else n(e);
        });
      }
    },
    Eu17: function (t, e, n) {
      var r, i;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        (function (t) {
          (t.AUTH_ONE = "auth_comp_result"),
            (t.AUTH_END = "auth_comp_finish"),
            (t.AUTH_BTN_CLICK = "auth_btn_click"),
            (t.NATIVE_MOBILE_CLICK = "native_mobile_click"),
            (t.ACCOUNT_COMMON = "account_common");
        })(r || (r = {})),
        (function (t) {
          (t.TRACK = "track"), (t.SKYNET = "skynet");
        })(i || (i = {}));
    },
    EyoS: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.resolveTeeAPI = void 0);
      var r = n("QxN7");
      e.resolveTeeAPI = function () {
        return new Promise(function (t, e) {
          var n = r.cache.get("CACHE_PASSPORT_TEE_API");
          if (n) return t(n);
          e("no_cache");
        });
      };
    },
    "F/Kf": function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("bb6g"),
        i = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, n) || this;
            return (
              (o.type = e),
              (o.message = n),
              (o.data = r),
              (o.name = "收银台支付异常"),
              i && (o.stack = i),
              o
            );
          }
          return Object(r.__extends)(e, t), e;
        })(Error);
    },
    Fcif: function (t, e, n) {
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    FsGU: function (t, e, n) {
      var r, i;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        (function (t) {
          (t[(t.UN_SIGN = 0)] = "UN_SIGN"),
            (t[(t.SIGN = 1)] = "SIGN"),
            (t[(t.FREEZE = 2)] = "FREEZE"),
            (t[(t.INVALID = 3)] = "INVALID");
        })(r || (r = {})),
        (function (t) {
          (t.INIT = "init"),
            (t.AUTH = "auth"),
            (t.SHOW = "show"),
            (t.SHOW_BEFORE = "show-before"),
            (t.SHOW_AFTER = "show-after"),
            (t.CLOSE = "close"),
            (t.HIDE_AFTER = "hide-after"),
            (t.AGREE = "agree"),
            (t.DISAGREE = "disagree"),
            (t.DESTROYED = "destroyed");
        })(i || (i = {}));
    },
    GFyo: function (t, e, n) {
      n.d(e, "g", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n("h+Rz"),
        i = n("Sipi");
      function o(t, e) {
        return r.a.setStorage({ key: t, data: e });
      }
      function a(t) {
        return r.a
          .getStorage({ key: t })
          .then(function (t) {
            return t;
          })
          .catch(function (t) {
            return t && t.errMsg && -1 !== t.errMsg.indexOf("data not found")
              ? { data: null }
              : Promise.reject(t);
          });
      }
      function s(t) {
        return r.a.removeStorage({ key: t });
      }
      function c() {
        return r.a.clearStorage();
      }
      n.d(e, "b", function () {
        return i.a;
      }),
        n.d(e, "d", function () {
          return i.b;
        }),
        n.d(e, "f", function () {
          return i.c;
        }),
        n.d(e, "h", function () {
          return i.d;
        });
    },
    GjIH: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n("3tAa");
      function i(t, e) {
        var n = Object(r.a)(t, e);
        return { get: n[0], set: n[1] };
      }
      function o(t, e) {
        var n = Object(r.a)(t, e),
          i = n[0],
          o = n[1],
          a = function () {
            return i() || [];
          };
        return {
          get: a,
          add: function (t) {
            o(a().concat(t));
          },
          remove: function (t) {
            o(
              a().filter(function (e) {
                return e !== t;
              })
            );
          },
        };
      }
    },
    HSl3: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("9ZMt");
      function i() {
        return r.default.$native.getPerformance();
      }
    },
    HnuB: function (t, e, n) {
      n.r(e);
      var r = n("oYRf");
      for (var i in r)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      var o = n("7OPm");
      for (var i in o)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
      var a = n("+Ky8");
      n.d(e, "TeeEnvEnum", function () {
        return a.a;
      });
      var s = n("FsGU");
      n.d(e, "SIGN_STATE", function () {
        return s.b;
      }),
        n.d(e, "InvokeProtocolEvent", function () {
          return s.a;
        });
      var c = n("B5ln");
      for (var i in c)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          i
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(i);
      var u = n("ceQz");
      for (var i in u)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          i
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t];
            });
          })(i);
      var h = n("kKb7");
      for (var i in h)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          i
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return h[t];
            });
          })(i);
    },
    HsSF: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n("bb6g");
      r.__exportStar(n("p+la"), e);
      var i = n("rpEd");
      Object.defineProperty(e, "InvokeProtocol", {
        enumerable: !0,
        get: function () {
          return i.default;
        },
      }),
        r.__exportStar(n("gyjr"), e),
        r.__exportStar(n("CV91"), e);
    },
    Hvpf: function (t, e, n) {
      function r(t, e) {
        var n, r;
        return (
          t.payChannel === e.payChannel &&
          (null === (n = t.ext) || void 0 === n ? void 0 : n.agType) ===
            (null === (r = e.ext) || void 0 === r ? void 0 : r.agType)
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    I9eD: function (t, e) {},
    "J4S/": function (t, e, n) {
      n.r(e),
        n.d(e, "wxh5DowngradePay", function () {
          return j;
        }),
        n.d(e, "EChargePayer", function () {
          return A.d;
        }),
        n.d(e, "EBoolean", function () {
          return A.c;
        }),
        n.d(e, "CashierTrackEventSign", function () {
          return A.b;
        }),
        n.d(e, "CashierTrackEventName", function () {
          return A.a;
        }),
        n.d(e, "ZanJSBridgeActionResponseCodeEnum", function () {
          return A.e;
        }),
        n.d(e, "ZanJSBridgeActionReturnCodeEnum", function () {
          return A.f;
        }),
        n.d(e, "ETradeStatus", function () {
          return b.d;
        }),
        n.d(e, "CardPayTypeEnum", function () {
          return b.a;
        }),
        n.d(e, "ECreditAuthorizationStatus", function () {
          return b.c;
        }),
        n.d(e, "PayError", function () {
          return S.a;
        }),
        n.d(e, "equal", function () {
          return x.a;
        }),
        n.d(e, "polling", function () {
          return y.a;
        }),
        n.d(e, "AbstractCashierTracker", function () {
          return k.a;
        }),
        n.d(e, "compareFn", function () {
          return v.a;
        });
      var r = n("bb6g"),
        i = n("/ieh"),
        o = n.n(i),
        a = n("bErL"),
        s = n("Laof"),
        c = n("w2Y9"),
        u = n.n(c),
        h = n("jmjq"),
        f = n.n(h),
        l = n("hEKJ"),
        p = n.n(l),
        d = n("Wk8w"),
        v = n("iKV5"),
        y = n("41a8"),
        g = n("sFgz"),
        m = n("bdvF"),
        b = n("23p4"),
        _ = n("zE6a"),
        E = n("LgyM"),
        w = n("0yOl");
      var O = w.a,
        S = n("F/Kf"),
        x = n("Hvpf");
      var T,
        k = n("aDHN"),
        P = new ((function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.tracker = {
                log: function () {},
                setEvent: function () {},
                setUser: function () {},
                getLogParams: function () {
                  return { user: {} };
                },
              }),
              e
            );
          }
          return Object(r.__extends)(e, t), e;
        })(k.a))(function () {
          return Promise.resolve({});
        }, b.e),
        A = n("L29T");
      T = "function" !== Object(d.c)(i) && o.a ? o.a : i;
      var C = (function () {
          function t(t) {
            var e = this;
            (this.loginCheck = d.e),
              (this.trackRecommend = Object(d.f)(function () {
                var t = e.payChannels.find(function (t) {
                  return t.recommend;
                });
                if (
                  t &&
                  (Object(x.a)(t, {
                    payChannel: "ALIPAY_AGREEMENT",
                    ext: { agType: "ALIPAY_SIGN" },
                  }) ||
                    Object(x.a)(t, { payChannel: "PRIOR_USE" }) ||
                    Object(x.a)(t, { payChannel: "ALIPAY_HBFQ" }))
                ) {
                  var n = t.payChannel,
                    r = t.ext;
                  e.request({
                    origin: "cashier",
                    method: "POST",
                    path: "assets/api/union/track/recommend",
                    data: {
                      marketRecords: [
                        { recommendExt: r, payTool: n, recommendTime: 1 },
                      ],
                    },
                  });
                }
              })),
              (this.exceptionProcessor = function (t) {
                return (
                  void 0 === t && (t = g.o),
                  function (n) {
                    if ((void 0 === n && (n = null), e.context.exception)) {
                      var r = e.context.exception.code,
                        i = t(r);
                      i && i.forEach(e.exceptionHandlerProcessor(n));
                    }
                  }
                );
              }),
              (this.exceptionHandlerProcessor = function (t) {
                return (
                  void 0 === t && (t = null),
                  function (n) {
                    var i;
                    if ("object" == typeof n && n) {
                      var o = n.event,
                        a = n.argGen,
                        s = a ? a(e.context, t, e) : void 0,
                        c = Array.isArray(s) ? s : [s];
                      (i = e.EE).emit.apply(
                        i,
                        Object(r.__spreadArrays)([o], c)
                      );
                    } else "function" == typeof n && n(e.context, t, e);
                  }
                );
              }),
              (this.skynetForDoPay = function (t, n) {
                var r = t.type,
                  i = void 0 === r ? "" : r,
                  o = t.code,
                  a = void 0 === o ? 0 : o,
                  s = t.msg,
                  c = void 0 === s ? "" : s,
                  u = e.context.payData,
                  h = "error";
                e.skynetLevelOptions.forEach(function (t) {
                  var e = t.level,
                    n = t.codeArr,
                    r = t.msgArr,
                    o = t.typeArr;
                  ((null == o ? void 0 : o.includes(i)) ||
                    (null == n ? void 0 : n.includes(a)) ||
                    (null == r ? void 0 : r.includes(c))) &&
                    (h = e);
                }),
                  e.skynet[h]("支付失败-" + (i || a) + "-" + n, {
                    orderNo: u.orderNo,
                    message: t,
                    payData: e.context.payData,
                    trackParams: e.tracker.getParams(),
                  });
              });
            var n = t.account,
              i = void 0 === n ? "" : n,
              o = t.request,
              a =
                void 0 === o
                  ? function (t) {
                      return Object(d.e)();
                    }
                  : o,
              s = t.toast,
              c = void 0 === s ? d.d : s,
              u = t.clear,
              h = void 0 === u ? d.d : u,
              f = t.payChannelsHook,
              l = void 0 === f ? d.a : f,
              p = t.type,
              v = void 0 === p ? "A" : p,
              y = t.useTypeRouter,
              _ = void 0 === y || y,
              E = t.quickMode,
              O = void 0 !== E && E,
              S = t.enableMultiplePay,
              k = void 0 !== S && S,
              A = t.onPaySuccessSync,
              C = void 0 === A ? d.d : A;
            (this.EE = new T()),
              (this.useTypeRouter = _),
              (this.allFetched = !1),
              (this.payChannels = []),
              (this.payInfo = {}),
              (this.fixedPayChannels = []),
              (this.enableMultiplePay = k),
              (this.onPaySuccessSync = C),
              (this.context = {
                biz: t.biz || "undeclared",
                env: "undeclared",
                type: v,
                recommendType: "A",
                recommendQuickMode: !1,
                account: i,
                recommendPayTools: [],
                asyncWaitTime: t.asyncWaitTime || m.b,
                isWxPayScoreDowngrade: !1,
                isWxAppletDowngrade: !1,
                active: "",
                exception: null,
                passerClear: "",
                loginToken: "",
                newPrice: -1,
                instalmentPeriod: "",
                abTraceId: {},
                payData: {
                  cashierSalt: "",
                  cashierSign: "",
                  partnerId: "",
                  prepayId: "",
                  orderNo: "",
                  wxSubOpenId: "",
                  wxSelfOpenId: "",
                },
                afterPayUrl: { url: "", weappUrl: "" },
                cancelPayUrl: { url: "", weappUrl: "" },
                payToken: "",
                encrypted: null,
                priorUsePackage: "",
              }),
              (this.tracker = P),
              (this.skynet = b.e),
              (this.crypto = {
                rsa: { encrypt: function (t) {} },
                aes: { legacyEncrypt: function (t) {} },
              }),
              (this.bizExt = {
                cashierBizExt: {
                  BANK_TRANSFER_LARGE_PAY: "v1",
                  PF_OFFLINE_PAY: "v1",
                  ALIPAY_APPLET_PAY: "v1",
                  CHANGE_PAY: "v1",
                  PRIOR_USE_PAY: "v1",
                },
                prepayBizExt: { cashierType: v },
                tradeBizExt: {},
              }),
              (this.quickMode = O),
              (this.toast = c),
              (this.clear = h),
              (this.payChannelsHook = l),
              (this.request = (function (t) {
                return function (e) {
                  return (
                    (e.data = Object(r.__assign)(
                      Object(r.__assign)({}, e.data),
                      { packageVersion: w.a }
                    )),
                    t(e)
                  );
                };
              })(a)),
              (this.skynetLevelOptions = []);
          }
          return (
            (t.prototype.init = function (t, e) {
              return (
                this.initInternalEvents(),
                this.initViewEvents(t),
                this.initTracker(t),
                this.bindDoPayOnce(),
                e && (this.crypto = e),
                this.ready()
              );
            }),
            (t.prototype.updateCashierType = function (t) {
              (this.context.type = t),
                this.mergeBizExt(
                  {
                    cashierType: t,
                    ALIPAY_HBFQ: "B" === t ? "v1" : void 0,
                    ALIPAY_JS: "A" === t ? "v1" : void 0,
                  },
                  { cashierType: t },
                  {}
                ),
                this.EE.emit("update-cashier-type", t);
            }),
            (t.prototype.updateRecommendType = function (t) {
              (this.context.recommendType = t),
                this.EE.emit("update-recommend-type", t);
            }),
            (t.prototype.updateFixedChannels = function (t) {
              this.fixedPayChannels = t;
            }),
            (t.prototype.requestOrderPayment = function (t) {
              var e = this,
                n = t.orderNo,
                i = Object(r.__rest)(t, ["orderNo"]);
              n
                ? ((this.context.payData.orderNo = n),
                  (this.context.active = "WX_APPLET"),
                  this.tracker.mergeParams({
                    wx_trading_component_version: "3.0",
                  }),
                  this.track_StartPay({ orderNo: n }),
                  wx.requestOrderPayment(
                    Object(r.__assign)(Object(r.__assign)({}, i), {
                      success: function () {
                        var t,
                          n = function () {
                            e.tracker.trackPaySuccess(),
                              e.EE.emit("pay-success", {
                                payChannel: "WX_APPLET",
                              });
                          },
                          r =
                            null === (t = e.onPaySuccessSync) || void 0 === t
                              ? void 0
                              : t.call(e, { payChannel: "WX_APPLET" });
                        r instanceof Promise ? r.then(n).catch(n) : n();
                      },
                      fail: function (t) {
                        var r = t.errMsg,
                          i = "requestOrderPayment:fail cancel" === r,
                          o = e.context.active,
                          a = {
                            msg: r,
                            data: t,
                            code: 0,
                            type: i ? "cancel" : void 0,
                          };
                        e.skynetForDoPay(a, o + "-orderPayment"),
                          i
                            ? (e.EE.emit(
                                "cashier-fail",
                                new S.a("cancel", "取消支付")
                              ),
                              e.__tempMetaTrackForWeappWxpayAbort(n),
                              e.track_prepayActionAbort("取消支付"))
                            : (r && r.indexOf(b.g) > 0 && (r = _.e),
                              e.EE.emit("cashier-fail", new S.a("fail", r)),
                              e.track_prepayFail(r),
                              e.EE.emit("show-dialog", { message: r }));
                      },
                    })
                  ))
                : this.EE.emit("cashier-fail", new S.a("fail", "订单号缺失"));
            }),
            (t.prototype.startPay = function (t) {
              var e = this;
              if ("YZP" !== this.context.type) {
                if (
                  (this.calcStartPayTime(),
                  this.clear(),
                  ("A" === this.context.type ||
                    ("B" === this.context.type &&
                      (this.quickMode || this.context.recommendQuickMode))) &&
                    this.toast({
                      mask: !0,
                      title: "支付中, 请耐心等待",
                      icon: "loading",
                      duration: 5e3,
                    }),
                  null == t ? void 0 : t.wxOrderInfo)
                )
                  return (
                    this.tracker.mergeParams({
                      wx_trading_component_version: "2.0",
                    }),
                    this.updatePayContext(t),
                    this.track_StartPay(this.context.payData),
                    void this.doPay("WX_APPLET")
                  );
                "B" !== this.context.type ||
                  this.quickMode ||
                  this.context.recommendQuickMode ||
                  this.EE.emit(
                    "show-cashier",
                    t && this.isCacheOrder(t) ? this.payChannels : []
                  ),
                  this.queryPayChannels(t)
                    .then(function (t) {
                      return e.isQuickMode() || e.clear(), t;
                    })
                    .then(function (t) {
                      return e.afterChannlesFetched(t);
                    })
                    .catch(function (t) {
                      var n = t.code,
                        r = t.msg,
                        i = void 0 === r ? _.b : r;
                      return e.onChannelsFetchError(n, i);
                    });
              } else this.startPayForYZP(t);
            }),
            (t.prototype.isQuickMode = function () {
              return (
                (this.quickMode && 1 === this.payChannels.length) ||
                this.context.payData.wxOrderInfo
              );
            }),
            (t.prototype.afterChannlesFetched = function (t) {
              var e = this,
                n = this.payChannelsHook(t);
              if (null !== n)
                if (0 !== n.length) {
                  this.payChannels = n;
                  var r = n.find(function (t) {
                    return e.context.recommendPayTools.includes(t.payChannel);
                  });
                  if (!this.context.recommendQuickMode || !r)
                    return this.isQuickMode()
                      ? void this.EE.emit("do-pay", n[0].payChannel)
                      : (this.EE.emit("show-cashier", n), void this.clear());
                  this.EE.emit("do-pay", r.payChannel);
                } else this.EE.emit("show-dialog", { message: _.c });
            }),
            (t.prototype.onChannelsFetchError = function (t, e) {
              var n;
              this.clear(),
                this.EE.emit("cashier-fail", new S.a("fail", e, { code: t })),
                this.EE.emit("show-dialog", { message: e }),
                this.skynet.error("支付方式查询失败", {
                  orderNo:
                    null === (n = this.context.payData) || void 0 === n
                      ? void 0
                      : n.orderNo,
                  message: e,
                  code: t,
                  payData: this.context.payData,
                  trackParams: this.tracker.getParams(),
                });
            }),
            (t.prototype.isCacheOrder = function (t) {
              return t.prepayId === this.context.payData.prepayId;
            }),
            (t.prototype.queryPayChannels = function (t) {
              var e = this;
              if (this.payChannels.length && (!t || this.isCacheOrder(t)))
                return Promise.resolve(this.payChannels);
              if (
                ((this.allFetched = !1),
                t && this.updatePayContext(t),
                !this.checkPreOrder())
              )
                return Promise.reject({ code: g.j, msg: _.d });
              if (
                Array.isArray(this.fixedPayChannels) &&
                0 !== this.fixedPayChannels.length &&
                "A" === this.context.type
              ) {
                var n = this.fixedPayChannels.map(function (t) {
                  return Object(r.__assign)(Object(r.__assign)({}, b.b), t);
                });
                return (
                  (this.payChannels = n), Promise.resolve(this.payChannels)
                );
              }
              var i = this.context,
                o = i.biz,
                a = i.env,
                s = i.payData,
                c = i.recommendPayTools,
                u = this.bizExt.cashierBizExt;
              if ((this.track_StartPay(s), "A" === this.context.type))
                return this.request({
                  method: "POST",
                  origin: "cashier",
                  path:
                    "assets/api/union/" + o + "/" + a + "/pure/pay/channels",
                  data: Object(r.__assign)({ cashierBizExt: u }, s),
                }).then(function (t) {
                  return (
                    (e.payChannels = Array.prototype.slice.call(t, 0)),
                    (e.payInfo = Object(r.__assign)(
                      Object(r.__assign)({}, e.payInfo),
                      { payToolNum: e.payChannels.length }
                    )),
                    e.doAsyncChannels(t)
                  );
                });
              var h = function () {
                return e
                  .request({
                    method: "POST",
                    origin: "cashier",
                    path:
                      "assets/api/union/unified/" +
                      o +
                      "/" +
                      a +
                      "/pay/channels/home",
                    data: Object(r.__assign)(
                      { recommendPayTools: c, cashierBizExt: u },
                      s
                    ),
                  })
                  .then(function (t) {
                    var n,
                      i,
                      o = t.payChannels,
                      a = void 0 === o ? [] : o,
                      s = Object(r.__rest)(t, ["payChannels"]);
                    return (
                      e.EE.emit("update-info", s),
                      (e.payInfo = Object(r.__assign)({}, s)),
                      e.tracker.mergeParams({
                        pay_amount: s.payAmount,
                        default_pay_channel:
                          null === (n = a[0]) || void 0 === n
                            ? void 0
                            : n.payChannel,
                        recommend_pay_channel:
                          null === (i = a[1]) || void 0 === i
                            ? void 0
                            : i.payChannel,
                      }),
                      a
                    );
                  });
              };
              return "B" === this.context.type && this.quickMode
                ? ((this.allFetched = !0),
                  this.request({
                    method: "POST",
                    origin: "cashier",
                    path:
                      "assets/api/union/unified/" +
                      o +
                      "/" +
                      a +
                      "/pay/channels/all",
                    data: Object(r.__assign)({ cashierBizExt: u }, s),
                  })
                    .then(function (t) {
                      var n = e.payChannelsHook(t),
                        r = Array.prototype.slice.call(n || t, 0);
                      return (
                        (e.payInfo.payToolNum = r.length),
                        1 === r.length
                          ? (e.EE.emit("do-pay", r[0].payChannel),
                            { all: t, home: [] })
                          : h().then(function (e) {
                              return { all: t, home: e };
                            })
                      );
                    })
                    .then(function (t) {
                      var n = t.all,
                        r = t.home;
                      return (
                        (e.payChannels = r.concat(
                          n.filter(function (t) {
                            return r.every(function (e) {
                              return e.payChannel !== t.payChannel;
                            });
                          })
                        )),
                        (e.payInfo.payToolNum = e.payChannels.length),
                        e.payChannels
                      );
                    }))
                : h().then(function (t) {
                    return (e.payChannels = t), t;
                  });
            }),
            (t.prototype.fetchAllChannels = function () {
              var t = this;
              if (this.allFetched)
                this.EE.emit("fill-channels", this.payChannels);
              else {
                if (
                  Array.isArray(this.fixedPayChannels) &&
                  0 !== this.fixedPayChannels.length
                ) {
                  var e = this.fixedPayChannels
                    .map(function (t) {
                      return Object(r.__assign)(Object(r.__assign)({}, b.b), t);
                    })
                    .filter(function (e) {
                      return !t.payChannels.find(function (t) {
                        return t.payChannel === e.payChannel;
                      });
                    });
                  return (
                    (this.payChannels = Object(r.__spreadArrays)(
                      this.payChannels,
                      e
                    )),
                    this.EE.emit("fill-channels", this.payChannels),
                    void (this.allFetched = !0)
                  );
                }
                var n = this.context,
                  i = n.biz,
                  o = n.env,
                  a = n.payData,
                  s = this.bizExt.cashierBizExt;
                this.request({
                  method: "POST",
                  origin: "cashier",
                  path:
                    "assets/api/union/unified/" +
                    i +
                    "/" +
                    o +
                    "/pay/channels/all",
                  data: Object(r.__assign)({ cashierBizExt: s }, a),
                })
                  .then(function (e) {
                    var n = t.payChannelsHook(e),
                      r = Array.prototype.slice
                        .call(n || e, 0)
                        .map(function (e) {
                          var n = t.payChannels.find(function (t) {
                            return t.payChannel === e.payChannel;
                          });
                          return n || e;
                        });
                    return (
                      (t.payChannels = r), t.doAsyncChannels(t.payChannels)
                    );
                  })
                  .then(function () {
                    t.EE.emit("fill-channels", t.payChannels.sort(v.a)),
                      (t.allFetched = !0);
                  })
                  .catch(function (e) {
                    var n = e.code,
                      r = e.msg,
                      i = void 0 === r ? _.b : r;
                    t.onChannelsFetchError(n, i);
                  });
              }
            }),
            (t.prototype.doAsyncChannels = function (t) {
              var e = this;
              return new Promise(function (n) {
                var r = setTimeout(function () {
                    n(t);
                  }, e.context.asyncWaitTime),
                  i = e.genAsyncChannelRequestArr(t);
                Promise.all(i).then(function () {
                  clearTimeout(r), n(e.payChannels);
                });
              });
            }),
            (t.prototype.doPay = function (t, e, n, i) {
              var o,
                a,
                s,
                c,
                u,
                h,
                l,
                d = this;
              void 0 === e && (e = {}),
                void 0 === n && (n = {}),
                void 0 === i && (i = {}),
                (this.context.active = t),
                (this.context.instalmentNum = e.instalmentNum),
                (this.context.instalmentChargePayer = e.instalmentChargePayer),
                this.EE.emit("start-loading", t);
              var v = t.toLowerCase(),
                y = this.context,
                w = y.biz,
                O = y.env,
                x =
                  this.payChannels.find(function (e) {
                    return e.payChannel === t;
                  }) ||
                  Object(r.__assign)(Object(r.__assign)({}, b.b), {
                    payChannel: t,
                  });
              try {
                var T =
                    null ===
                      (a =
                        null === (o = x.ext) || void 0 === o
                          ? void 0
                          : o.instalments) || void 0 === a
                      ? void 0
                      : a.find(function (t) {
                          return t.num === e.instalmentNum;
                        }),
                  k =
                    (null == T ? void 0 : T.realTotalCharges) ||
                    (null == T ? void 0 : T.totalCharges);
                this.tracker.mergeParams({
                  default_instalment_num:
                    null ===
                      (u =
                        null ===
                          (c =
                            null === (s = x.ext) || void 0 === s
                              ? void 0
                              : s.instalments) || void 0 === c
                          ? void 0
                          : c.find(function (t) {
                              return t.defaultChose;
                            })) || void 0 === u
                      ? void 0
                      : u.num,
                  selected_instalment_num: e.instalmentNum,
                  selected_instalment_charge_payer: e.instalmentChargePayer,
                  selected_instalment_total_charges: k ? p()(k) : void 0,
                });
              } catch (t) {
                this.skynet.warn("埋点分期期数计算失败");
              }
              return (
                (null === (h = null == x ? void 0 : x.ext) || void 0 === h
                  ? void 0
                  : h.channelSpecialLogic) &&
                  (e.channelSpecialLogic =
                    null === (l = null == x ? void 0 : x.ext) || void 0 === l
                      ? void 0
                      : l.channelSpecialLogic),
                this.track_prepayStart(x),
                (m.c[t] ? this.loginCheck() : Promise.resolve())
                  .then(function () {
                    return (
                      (d.isQuickMode() || "PRE" === d.context.type) &&
                        (d.clear(),
                        d.toast({
                          mask: !0,
                          title: "支付中, 请耐心等待",
                          icon: "loading",
                          duration: 5e3,
                        })),
                      d.callPrepay(t, e, n, i)
                    );
                  })
                  .then(function (t) {
                    return d.clear(), t;
                  })
                  .then(function (e) {
                    switch (e.operation) {
                      case "ADJUST_PRICE":
                        return Promise.reject({
                          code: g.i,
                          msg: "" + _.a + f()(e.newPrice, !0, !1),
                          data: {
                            newPrice: e.newPrice,
                            payTool: e.payTool || d.context.active,
                          },
                        });
                      case "OFFER_MODIFY":
                        return Promise.reject({
                          code: g.k,
                          msg:
                            "优惠信息已调整，当前需要支付金额为" +
                            f()(e.newPrice, !0, !1) +
                            "元，请重新支付",
                          data: {
                            newPrice: e.newPrice,
                            payTool: e.payTool || d.context.active,
                          },
                        });
                      case "PRIOR_USE_UNAUTHORIZED":
                        return Promise.reject({
                          code: g.g,
                          msg: "信用未授权",
                          data: e.priorUseChannel,
                        });
                      case "PRIOR_USE_NEED_AUTHORIZED":
                        return Promise.reject({
                          code: g.h,
                          msg: "信用未授权",
                          data: {
                            priorUseChannel: e.priorUseChannel,
                            priorUsePackage: e.priorUsePackage,
                          },
                        });
                    }
                    d.track_prepaySuccess();
                    var n = Object(E.a)({ biz: w, env: O, channel: v });
                    return n
                      ? null == n
                        ? void 0
                        : n(e, d.context, d)
                      : Object.assign({ payChannel: t }, e);
                  })
                  .then(function (t) {
                    if (
                      (d.skynet.info("支付回调", {
                        payData: d.context.payData,
                        trackParams: d.tracker.getParams(),
                        message: t,
                      }),
                      t &&
                        (d.tracker.trackPaySuccess(),
                        setTimeout(function () {
                          d.EE.emit(
                            "pay-success",
                            Object(r.__assign)(Object(r.__assign)({}, t), {
                              payChannel: d.context.active,
                            })
                          );
                        }, 50)),
                      d.isQuickMode())
                    )
                      try {
                        d.EE.emit("quick-close");
                      } catch (t) {}
                    t && d.EE.emit("end-loading"),
                      d.enableMultiplePay && d.bindDoPayOnce();
                  })
                  .catch(function (e) {
                    var n, r, i;
                    d.skynetForDoPay(e, t),
                      d.clear(),
                      (d.context.exception = e),
                      d.bindDoPayOnce();
                    var o = e.type,
                      a = e.data;
                    if ("wx_h5_downgrade" === o) {
                      var s = d.getIsWxSdkIntegrated() ? "sdk" : "url-link";
                      return j({
                        payData: a,
                        downgradeType: s,
                        request: d.request,
                        zanAppJsbridge: d.zanAppJsbridge,
                      })
                        .then(function () {
                          d.exceptionProcessor(g.o)(e);
                        })
                        .catch(function () {
                          d.EE.emit(
                            "cashier-fail",
                            new S.a("fail", "微信支付失败")
                          ),
                            d.track_prepayFail("wxh5兜底微信支付失败"),
                            d.EE.emit("show-dialog", {
                              message: "微信支付失败，请选择其他支付方式",
                            }),
                            d.EE.emit("end-loading");
                        });
                    }
                    if ("redirect" === o)
                      return (
                        setTimeout(function () {
                          d.EE.emit("navigate", a);
                        }, 50),
                        void d.EE.emit("end-loading")
                      );
                    if ("cancel" === o)
                      return (
                        d.EE.emit("cashier-fail", new S.a(o, "取消支付")),
                        d.__tempMetaTrackForWeappWxpayAbort(
                          null ===
                            (r =
                              null === (n = d.context) || void 0 === n
                                ? void 0
                                : n.payData) || void 0 === r
                            ? void 0
                            : r.orderNo
                        ),
                        d.track_prepayActionAbort("取消支付"),
                        d.EE.emit("end-loading"),
                        void (d.isQuickMode() && d.EE.emit("quick-close"))
                      );
                    if ("WxPayError" === o) {
                      var c = e.msg;
                      return (
                        c && c.indexOf(b.g) > 0 && (c = _.e),
                        d.EE.emit("cashier-fail", new S.a("fail", c)),
                        d.track_prepayFail(c),
                        d.EE.emit("show-dialog", { message: c }),
                        d.EE.emit("end-loading"),
                        void (d.isQuickMode() && d.EE.emit("quick-close"))
                      );
                    }
                    d.track_prepayFail(
                      (null == e ? void 0 : e.msg) ||
                        (null === (i = e) || void 0 === i ? void 0 : i.message)
                    ),
                      d.exceptionProcessor(g.o)(e);
                  })
              );
            }),
            (t.prototype.callPrepay = function (t, e, n, i) {
              void 0 === e && (e = {}),
                void 0 === n && (n = {}),
                void 0 === i && (i = {});
              var o = t.toLowerCase(),
                a = this.context,
                s = a.biz,
                c = a.env,
                u = Object(r.__rest)(a.payData, []),
                h = a.modifyOriPayTool,
                f = this.bizExt,
                l = f.prepayBizExt,
                p = f.tradeBizExt,
                d =
                  this.payChannels.find(function (t) {
                    return t.payChannel.toLowerCase() === o;
                  }) || {},
                v = (d.ext || {}).agType;
              delete u.wxOrderInfo;
              var y = Object(r.__assign)(
                Object(r.__assign)(
                  Object(r.__assign)(Object(r.__assign)({}, u), e),
                  d.valueCardNo ? { valueCardNo: d.valueCardNo } : {}
                ),
                {
                  payRouter: b.f[o] || null,
                  prepayBizExt: Object(r.__assign)(
                    Object(r.__assign)(Object(r.__assign)({}, l), n),
                    { agType: v, modifyOriPayTool: h }
                  ),
                  prepayOutBizExt: Object(r.__assign)(
                    Object(r.__assign)({}, p),
                    i
                  ),
                  tp: Object(r.__assign)(
                    Object(r.__assign)({}, this.tracker.getParams()),
                    { uuid: this.tracker.getUUID() }
                  ),
                }
              );
              return "wx_h5" === o && "miniProgram" === e.channelSpecialLogic
                ? Promise.reject({
                    type: "wx_h5_downgrade",
                    code: g.l,
                    msg: "微信wap支付特殊处理",
                    data: y,
                  })
                : "wx_js" === o && "codePay" === e.channelSpecialLogic
                ? Promise.reject({ type: "showPCDialog" })
                : (this.tracker.mergeParams({
                    use_default_pay_channel:
                      t === this.tracker.getParams().default_pay_channel,
                    client_prepay_start_time: Date.now(),
                  }),
                  this.request({
                    method: "POST",
                    origin: "cashier",
                    path: "assets/api/union/" + s + "/" + c + "/" + o + "/pay",
                    data: y,
                  }));
            }),
            (t.prototype.genAsyncChannelRequestArr = function (t) {
              var e = this,
                n = [];
              return (
                t.forEach(function (t) {
                  if (m.a[t.payChannel] && "AVALIABLE" === t.availableStatus) {
                    var r = m.a[t.payChannel],
                      i = e.context.payData;
                    n.push(
                      e
                        .request({
                          method: "GET",
                          origin: "cashier",
                          path: r.path,
                          data: i,
                        })
                        .then(function (n) {
                          return e.updateAsyncChannel(t.payChannel, n);
                        })
                        .catch(function () {})
                    );
                  }
                }),
                n
              );
            }),
            (t.prototype.updateAsyncChannel = function (t, e) {
              var n = this.payChannels.findIndex(function (e) {
                return e.payChannel === t;
              });
              this.payChannels[n] = Object(r.__assign)(
                Object(r.__assign)({}, this.payChannels[n]),
                e
              );
            }),
            (t.prototype.bindDoPayOnce = function () {
              this.EE.removeListener("do-pay", this.doPay, this),
                this.EE.once("do-pay", this.doPay, this);
            }),
            (t.prototype.updateContext = function (t) {
              this.context[t.keyName] = t.value;
            }),
            (t.prototype.mergeBizExt = function (t, e, n) {
              var i = this.bizExt,
                o = i.cashierBizExt,
                a = i.prepayBizExt,
                s = i.tradeBizExt;
              this.bizExt = {
                cashierBizExt: Object(r.__assign)(Object(r.__assign)({}, o), t),
                prepayBizExt: Object(r.__assign)(Object(r.__assign)({}, a), e),
                tradeBizExt: Object(r.__assign)(Object(r.__assign)({}, s), n),
              };
            }),
            (t.prototype.updatePayContext = function (t) {
              var e = t.afterPayUrl,
                n = void 0 === e ? {} : e,
                i = t.cancelPayUrl,
                o = void 0 === i ? {} : i,
                a = t.cashierBizExt,
                s = void 0 === a ? {} : a,
                c = t.prepayBizExt,
                u = void 0 === c ? {} : c,
                h = t.tradeBizExt,
                f = void 0 === h ? {} : h,
                l = t.recommendPayTools,
                p = void 0 === l ? [] : l,
                d = t.selectedInstallmentPeriod,
                v = void 0 === d ? "" : d,
                y = Object(r.__rest)(t, [
                  "afterPayUrl",
                  "cancelPayUrl",
                  "cashierBizExt",
                  "prepayBizExt",
                  "tradeBizExt",
                  "recommendPayTools",
                  "selectedInstallmentPeriod",
                ]);
              this.mergeBizExt(s, u, f);
              var g = this.context,
                m = g.payData,
                b = g.afterPayUrl,
                _ = g.cancelPayUrl;
              this.context = Object(r.__assign)(
                Object(r.__assign)({}, this.context),
                {
                  recommendPayTools: p,
                  instalmentPeriod: v,
                  payData: Object(r.__assign)(Object(r.__assign)({}, m), y),
                  afterPayUrl: Object(r.__assign)(Object(r.__assign)({}, b), n),
                  cancelPayUrl: Object(r.__assign)(
                    Object(r.__assign)({}, _),
                    o
                  ),
                }
              );
            }),
            (t.prototype.checkPreOrder = function () {
              var t = this.context.payData,
                e = t.cashierSalt,
                n = t.cashierSign,
                r = t.partnerId,
                i = t.prepayId;
              return Boolean(e && n && r && i);
            }),
            (t.prototype.yzpDowngrade = function (t) {
              var e = this,
                n = this.EE,
                i = this.context,
                o = this.tracker;
              n.emit("end-loading");
              var a = t.payChannel,
                s = i.biz,
                c = i.env,
                h = i.payData,
                f = i.payAppId,
                l = i.active,
                p = i.exception;
              if (!f)
                return (
                  n.emit("show-dialog", {
                    message: null == p ? void 0 : p.msg,
                    confirmButtonText: "我知道了",
                  }),
                  void (
                    (i.recommendQuickMode || this.isQuickMode()) &&
                    (n.emit("close"), n.emit("quick-close"))
                  )
                );
              var d = Object(r.__assign)(
                {
                  biz: s,
                  appId: f,
                  downgrade: 1,
                  payChannel: a,
                  originKdtId: o.getParams().kdt_id,
                },
                h
              );
              if ("weapp" === c) {
                var v = "release";
                try {
                  v = __wxConfig.envVersion;
                } catch (t) {}
                wx.navigateToMiniProgram({
                  appId: f,
                  envVersion: v,
                  path: u.a.add("/pages/cashier/index", d),
                  success: function () {
                    var t = function (r) {
                      wx.offAppShow(t);
                      var o = r.referrerInfo,
                        a = o.appId,
                        s = o.extraData,
                        c = void 0 === s ? {} : s,
                        u = c.type,
                        h = c.partnerReturnUrl;
                      a === f && "success" === u
                        ? n.emit("pay-success", {
                            partnerReturnUrl: h,
                            payChannel: l,
                          })
                        : (n.emit("end-loading"),
                          (i.recommendQuickMode || e.isQuickMode()) &&
                            ((i.recommendQuickMode = !1),
                            n.emit("close"),
                            n.emit("quick-close")));
                    };
                    wx.onAppShow(t);
                  },
                  fail: function (t) {
                    (i.recommendQuickMode || e.isQuickMode()) &&
                      ((i.recommendQuickMode = !1),
                      n.emit("close"),
                      n.emit("quick-close"));
                  },
                });
              }
            }),
            (t.prototype.wxAppletYzpDowngrade = function () {
              var t = this.context,
                e = t.exception,
                n = t.isWxAppletDowngrade,
                r = t.payData.wxOrderInfo;
              n && !r
                ? this.yzpDowngrade({ payChannel: "WX_APPLET" })
                : this.EE.emit("show-dialog", {
                    message: null == e ? void 0 : e.msg,
                    confirmButtonText: "我知道了",
                  });
            }),
            (t.prototype.wxPayScoreYzpDowngrade = function () {
              this.yzpDowngrade({ payChannel: "PRIOR_USE" });
            }),
            (t.prototype.onPayPassCheck = function (t, e) {
              var n = this;
              void 0 === e && (e = {}),
                this.toast({
                  mask: !0,
                  title: "信息加密中",
                  icon: "loading",
                  duration: 0,
                }),
                this.request({
                  method: "GET",
                  origin: "cashier",
                  path: "assets/api/union/server/random",
                })
                  .then(function (e) {
                    var r = e.random,
                      i = e.publicKey;
                    return {
                      base64EncryptedPw: n.crypto.rsa.encrypt({
                        data: Object(d.b)(t, r),
                        publicKey: i,
                      }),
                      base64ServerRandom: r,
                      encryptedRcRandom: "",
                      encryptType: "RSA_SALT",
                    };
                  })
                  .then(function (t) {
                    var i = t.base64EncryptedPw,
                      o = n,
                      a = o.context,
                      s = o.EE;
                    s.emit("close-pay-passer"), n.clear();
                    var c = a.active;
                    "CHANGE_PAY" === c
                      ? ((a.payToken = i), (a.encrypted = t))
                      : ((a.payToken = ""), (a.encrypted = null)),
                      s.emit(
                        "do-pay",
                        c,
                        Object(r.__assign)(Object(r.__assign)({}, e), {
                          payToken: i,
                        }),
                        t
                      );
                  })
                  .catch(function (t) {
                    n.clear();
                    var e = (t || {}).msg,
                      r = void 0 === e ? _.b : e;
                    n.EE.emit("show-dialog", { message: r });
                  });
            }),
            (t.prototype.creditAuthorization = function () {
              var t,
                e = this,
                n = this.context,
                r = n.biz,
                i = n.env,
                o = n.exception,
                s = n.isWxPayScoreDowngrade,
                c = n.payAppId;
              if (s) this.wxPayScoreYzpDowngrade();
              else {
                var u = String(
                  null === (t = null == o ? void 0 : o.data) || void 0 === t
                    ? void 0
                    : t.toLowerCase()
                );
                this.toast({ mask: !0, icon: "loading", duration: 0 });
                var h = {};
                c && (h.wxPayScoreAppId = c),
                  this.request({
                    origin: "cashier",
                    path:
                      "assets/api/union/" +
                      r +
                      "/" +
                      i +
                      "/prior-use/" +
                      u +
                      "/auth-token",
                    data: h,
                  })
                    .then(function (t) {
                      var n;
                      if (
                        (e.tracker.mergeParams({
                          credit_authorization: !0,
                          credit_authorization_token: t,
                        }),
                        !t)
                      )
                        throw new S.a("fail", "预授权失败，请稍后重试");
                      var r = {
                        weapp: e.wxScoreEnableInMiniprogram.bind(e, t),
                      };
                      return (
                        e.tracker.track(a.b.BeforeCreditAuthorization),
                        (null === (n = r[i]) || void 0 === n
                          ? void 0
                          : n.call(r)) ||
                          Promise.reject(
                            new S.a("fail", "当前环境不支持信用授权")
                          )
                      );
                    })
                    .then(function () {
                      return e.request({
                        origin: "cashier",
                        path: "assets/api/apollo/polling/credit-authorization-status",
                      });
                    })
                    .then(function (t) {
                      var n = t.interval,
                        o = void 0 === n ? 1e3 : n,
                        a = t.threshold,
                        s = void 0 === a ? 5 : a,
                        c = t.wait,
                        f = void 0 === c ? 0 : c;
                      return new Promise(function (t, n) {
                        var a = Object(y.a)(
                          function (o) {
                            var c = o + 1 === s;
                            return e
                              .request({
                                origin: "cashier",
                                path:
                                  "assets/api/union/" +
                                  r +
                                  "/" +
                                  i +
                                  "/prior-use/" +
                                  u +
                                  "/auth-status",
                                data: h,
                              })
                              .then(function (e) {
                                e === b.c.Authorized && (a(), t());
                              })
                              .catch(function (t) {})
                              .then(function () {
                                c &&
                                  n(
                                    new S.a(
                                      "fail",
                                      "信用授权失败，查询次数达到阈值"
                                    )
                                  );
                              });
                          },
                          { interval: o, threshold: s, wait: f }
                        );
                      });
                    })
                    .then(function () {
                      e.tracker.track(a.b.CreditAuthorizationSuccess),
                        e.tracker.track(a.b.CreditAuthorizationFinally),
                        e.retry();
                    })
                    .catch(function (t) {
                      var n;
                      e.clear(),
                        e.tracker.track(a.b.CreditAuthorizationFail, {
                          error_message: t.message,
                          error_code: String(
                            null === (n = t.data) || void 0 === n
                              ? void 0
                              : n.code
                          ),
                        }),
                        e.tracker.track(a.b.CreditAuthorizationFinally),
                        e.EE.emit("cashier-fail", t),
                        "信用授权失败，查询次数达到阈值" === t.message
                          ? ((e.context.exception = {
                              code: g.f,
                              msg: "未完成授权，请重新授权",
                              data: null,
                            }),
                            e.EE.emit("show-dialog", {
                              message: "未完成授权，请重新授权",
                              confirmButtonText: "去授权",
                              cancelButtonText: "我再想想",
                              showCancelButton: !0,
                            }))
                          : "cancel" !== t.type
                          ? (e.EE.emit("show-dialog", {
                              message: t.message || t.msg,
                              confirmButtonText: "我知道了",
                            }),
                            e.context.recommendQuickMode &&
                              (e.context.recommendQuickMode = !1))
                          : "cancel" === t.type &&
                            e.context.recommendQuickMode &&
                            ((e.context.recommendQuickMode = !1),
                            e.EE.emit("show-cashier", e.payChannels),
                            e.EE.emit("update-info", e.payInfo)),
                        e.EE.emit("end-loading");
                    });
              }
            }),
            (t.prototype.wxScoreEnableInMiniprogram = function (t) {
              return new Promise(function (e, n) {
                try {
                  wx.navigateToMiniProgram({
                    appId: "wxd8f3793ea3b935b8",
                    path: "pages/use/enable",
                    extraData: { apply_permissions_token: t },
                    success: function () {
                      wx.onAppShow(function t(r) {
                        var i = r.referrerInfo;
                        void 0 === (void 0 === i ? {} : i).extraData
                          ? n(new S.a("cancel", "取消授权"))
                          : e(),
                          wx.offAppShow(t);
                      });
                    },
                    fail: function (t) {
                      n(new S.a("fail", t.errMsg, t));
                    },
                  });
                } catch (t) {
                  n(
                    new S.a(
                      "fail",
                      (null == t ? void 0 : t.message) ||
                        "调用微信支付分授权失败",
                      void 0,
                      null == t ? void 0 : t.stack
                    )
                  );
                }
              });
            }),
            (t.prototype.wxScoreUsePaySuccess = function (t) {
              var e = this;
              this.tracker.trackPaySuccess(),
                setTimeout(function () {
                  e.EE.emit(
                    "pay-success",
                    Object(r.__assign)(Object(r.__assign)({}, t), {
                      payChannel: e.context.active,
                    })
                  );
                }, 50),
                this.EE.emit("end-loading");
            }),
            (t.prototype.wxScoreUsePayFail = function (t) {
              var e = t.type,
                n = t.msg;
              this.skynetForDoPay(t, this.context.active),
                this.EE.emit("cashier-fail", new S.a(e, "取消支付")),
                "cancel" !== e && this.EE.emit("show-dialog", { message: n }),
                this.track_prepayFail(n),
                this.EE.emit("end-loading");
            }),
            (t.prototype.creditAuthorizationUseNeed = function () {
              var t,
                e = this,
                n = this.context.env,
                r = { weapp: this.wxScoreUseInMiniprogram.bind(this) };
              if (!r[n])
                return this.wxScoreUsePayFail(
                  new S.a("fail", "当前环境不支持信用授权")
                );
              null === (t = r[n]) ||
                void 0 === t ||
                t
                  .call(r)
                  .then(function (t) {
                    e.wxScoreUsePaySuccess(t);
                  })
                  .catch(function (t) {
                    e.wxScoreUsePayFail(t);
                  });
            }),
            (t.prototype.wxScoreUseInMiniprogram = function () {
              var t = this.context.priorUsePackage;
              return new Promise(function (e, n) {
                try {
                  wx.navigateToMiniProgram({
                    appId: "wxd8f3793ea3b935b8",
                    path: "pages/use/use",
                    extraData: { package: t },
                    success: function () {
                      wx.onAppShow(function t(r) {
                        var i = r.referrerInfo;
                        void 0 === (void 0 === i ? {} : i).extraData
                          ? n(new S.a("cancel", "取消授权"))
                          : e(),
                          wx.offAppShow(t);
                      });
                    },
                    fail: function (t) {
                      n(new S.a("fail", t.errMsg, t));
                    },
                  });
                } catch (t) {
                  n(
                    new S.a(
                      "fail",
                      (null == t ? void 0 : t.message) ||
                        "调用微信支付分授权失败",
                      void 0,
                      null == t ? void 0 : t.stack
                    )
                  );
                }
              });
            }),
            (t.prototype.disableActiveChannel = function (t) {
              var e,
                n = this;
              void 0 === t &&
                (t =
                  null === (e = this.context.exception) || void 0 === e
                    ? void 0
                    : e.msg);
              var i = function () {
                var e = n.payChannels
                  .map(function (e) {
                    return e.payChannel === n.context.active
                      ? Object(r.__assign)(Object(r.__assign)({}, e), {
                          channelNotice: t || e.channelNotice,
                          availableDesc: t || e.availableDesc,
                          available: !1,
                          recommend: !1,
                        })
                      : e;
                  })
                  .sort(v.a);
                n.EE.emit("update-channels", e), (n.payChannels = e);
                var i = e.filter(function (t) {
                  return t.available;
                });
                i.length && n.EE.emit("update-active", i[0]);
              };
              this.EE.emit("show-all"),
                this.allFetched ? i() : this.EE.once("fill-channels", i);
            }),
            (t.prototype.confirmAdjustPrice = function () {
              this.retry({
                acceptPrice: s.a.True,
                newPrice: this.context.newPrice,
              });
            }),
            (t.prototype.confirmNoDiscount = function () {
              this.retry({
                acceptNoDiscount: s.a.True,
                newPrice: this.context.newPrice,
              });
            }),
            (t.prototype.retry = function (t) {
              var e = this.context,
                n = e.active,
                i = e.passerClear,
                o = e.loginToken;
              "CHANGE_PAY" !== n
                ? "ECARD" === n && o
                  ? this.EE.emit(
                      "do-pay",
                      n,
                      Object(r.__assign)(Object(r.__assign)({}, t), {
                        payToken: o,
                      })
                    )
                  : "ALIPAY_HBFQ" !== n
                  ? this.EE.emit("do-pay", n, t)
                  : this.EE.emit(
                      "do-pay",
                      n,
                      Object(r.__assign)(Object(r.__assign)({}, t), {
                        instalmentNum: this.context.instalmentNum,
                        instalmentChargePayer:
                          this.context.instalmentChargePayer,
                      })
                    )
                : this.onPayPassCheck(i, t);
            }),
            (t.prototype.goLoginForget = function () {
              this.EE.emit("navigate", {
                url: encodeURIComponent(
                  "https://passport.youzan.com/retrieve-pass"
                ),
                weappUrl: "",
                title: encodeURIComponent("重置登录密码"),
                payData: {},
              }),
                this.EE.emit("close-pay-login"),
                this.EE.emit("end-loading");
            }),
            (t.prototype.onPayPassForget = function () {
              this.EE.emit("navigate", {
                url: encodeURIComponent(
                  "https://h5.youzan.com/wscassets/bankcard/safety/forget?biz=pocket-modify-cashier"
                ),
                weappUrl: "",
                title: encodeURIComponent("重置支付密码"),
                payData: {},
              }),
                this.EE.emit("close-pay-passer"),
                this.EE.emit("end-loading");
            }),
            (t.prototype.ready = function () {
              var t = this;
              return (
                this.skynet.info("收银台初始化 调用开始"),
                this.request({
                  origin: "cashier",
                  path: "assets/api/union/" + this.context.biz + "/ready",
                })
                  .then(function (e) {
                    var n,
                      i,
                      o = e.env,
                      a = e.type,
                      s = e.recommendQuickMode,
                      c = e.appId,
                      u = e.isWxPayScoreDowngrade,
                      h = e.isWxAppletDowngrade,
                      f = e.tp,
                      l = void 0 === f ? {} : f,
                      p = e.skynetLevelOptions,
                      d = t,
                      v = d.context,
                      y = d.tracker;
                    o && (v.env = o),
                      t.updateCashierType(t.useTypeRouter && a ? a : v.type),
                      (t.request =
                        ((n = v.type),
                        (i = t.request),
                        function (t) {
                          return (
                            (t.data = Object(r.__assign)(
                              Object(r.__assign)({}, t.data),
                              { cashierType: n }
                            )),
                            i(t)
                          );
                        })),
                      (t.skynetLevelOptions = p),
                      "YZP" !== v.type &&
                        ((v.isWxPayScoreDowngrade = !!u),
                        (v.isWxAppletDowngrade = !!h),
                        (v.recommendQuickMode = !!(null == s
                          ? void 0
                          : s.value)),
                        (v.abTraceId.startPay =
                          null == s ? void 0 : s.abTraceId)),
                      c && (v.payAppId = c),
                      y.mergeParams({
                        package_version: O,
                        kdt_id: String(l.ki),
                        buyer_id: String(l.bi),
                        mobile: l.m,
                        host_app: l.ha,
                        extra_host_app: l.eha,
                        runtime: l.r,
                        host_app_runtime: o,
                        cashier_type: v.type,
                        rqm: v.recommendQuickMode,
                        from_biz: v.biz,
                      }),
                      t.skynet.info("收银台初始化 调用成功", { context: v });
                  })
                  .catch(function (e) {
                    var n = e || {},
                      r = n.message,
                      i = n.msg,
                      o = n.name,
                      a = n.stack;
                    t.skynet.error(
                      "收银台初始化 调用失败（" + (i || r) + "）",
                      {
                        typeofError: typeof e,
                        rawError: e,
                        error: { message: r, msg: i, name: o, stack: a },
                      }
                    );
                  })
              );
            }),
            (t.prototype.initTracker = function (t) {
              var e = t.createTracker;
              try {
                this.tracker = e ? e() : P;
              } catch (t) {
                this.tracker = P;
              }
            }),
            (t.prototype.initViewEvents = function (t) {
              var e = this;
              Object.keys(t).forEach(function (n) {
                "function" == typeof t[n] && e.EE.on(n, t[n]),
                  e.EE.emit("component-init", e.EE),
                  e.EE.emit("update-event-emitter", e.EE);
              });
            }),
            (t.prototype.initInternalEvents = function () {
              this.EE.on(
                "exception-confirm",
                this.exceptionProcessor(g.n),
                this
              ),
                this.EE.on(
                  "exception-cancel",
                  this.exceptionProcessor(g.m),
                  this
                ),
                this.EE.on("pay-pass-check", this.onPayPassCheck, this),
                this.EE.on(
                  "disable-active-channel",
                  this.disableActiveChannel,
                  this
                ),
                this.EE.on(
                  "credit-authorization",
                  this.creditAuthorization,
                  this
                ),
                this.EE.on(
                  "credit-authorization-use-need",
                  this.creditAuthorizationUseNeed,
                  this
                ),
                this.EE.on(
                  "wx-applet-yzp-downgrade",
                  this.wxAppletYzpDowngrade,
                  this
                ),
                this.EE.on(
                  "adjust-price-confirm",
                  this.confirmAdjustPrice,
                  this
                ),
                this.EE.on("no-discount-confirm", this.confirmNoDiscount, this),
                this.EE.on("paylogin-forget", this.goLoginForget, this),
                this.EE.on("paypass-forget", this.onPayPassForget, this),
                this.EE.on("retry", this.retry, this),
                this.EE.on("update-context", this.updateContext, this),
                this.EE.on("fetch-all", this.fetchAllChannels, this),
                this.EE.on("view-track", this.viewTrackInvoke, this),
                this.EE.on("view-payload", this.viewPayloadInvoke, this),
                this.EE.on("toast-event", this.toast, this);
            }),
            (t.prototype.viewTrackInvoke = function (t, e) {
              try {
                this.tracker.mergeParams(e),
                  this.tracker.track(t),
                  t === a.b.Wxh5DowngradePay && location.reload();
              } catch (t) {
                this.trackFail(t);
              }
            }),
            (t.prototype.viewPayloadInvoke = function (t) {
              var e;
              try {
                for (var n = 0, r = Object.entries(t); n < r.length; n++) {
                  var i = r[n],
                    o = i[0],
                    a = i[1];
                  this.tracker.mergeParams(
                    (((e = {})[o] = a(this.tracker.getParams())), e)
                  );
                }
              } catch (t) {}
            }),
            (t.prototype.track_StartPay = function (t) {
              try {
                var e = this.tracker,
                  n = this.context;
                e.mergeParams({
                  order_no: t.orderNo,
                  prepay_id: t.prepayId,
                  partner_id: String(t.partnerId),
                  recommend_pay_tools: n.recommendPayTools.join(","),
                }),
                  e.track(a.b.StartPay, {}),
                  e.track(a.b.StartPayClick, {
                    abTraceId: n.abTraceId.startPay,
                  });
              } catch (t) {
                this.trackFail(t);
              }
            }),
            (t.prototype.track_prepayStart = function (t) {
              try {
                var e = this.tracker,
                  n = Object(r.__assign)({}, t.ext);
                delete n.instalments,
                  e.mergeParams({
                    pay_channel: t.payChannel,
                    pay_channel_ext: JSON.stringify(n),
                  }),
                  e.track(a.b.PrepayStart);
              } catch (t) {
                this.trackFail(t);
              }
            }),
            (t.prototype.trackFail = function (t) {
              try {
                this.skynet.error("埋点失败: " + t.message, {
                  outBizNo: this.context.payData.orderNo,
                  stack: t.stack,
                });
              } catch (t) {}
            }),
            (t.prototype.track_prepaySuccess = function () {
              try {
                this.tracker.mergeParams({
                  client_prepay_success_time: Date.now(),
                });
                var t = this.tracker.getParams(),
                  e = t.start_pay_first_time,
                  n = t.start_pay_latest_time,
                  r = t.client_prepay_start_time,
                  i = t.client_prepay_success_time,
                  o = i && e ? i - e : -1,
                  s = n && i ? i - n : -1,
                  c = i && r ? i - r : -1;
                this.tracker.mergeParams({
                  start_pay_first_to_client_prepay_success_time: o,
                  start_pay_latest_to_client_prepay_success_time: s,
                  client_prepay_start_to_client_prepay_success_time: c,
                }),
                  this.tracker.track(a.b.PrepaySuccess),
                  this.request({
                    origin: "cashier",
                    method: "POST",
                    path:
                      "assets/api/union/track/params/" +
                      this.context.payData.orderNo,
                    data: {
                      partial: {
                        client_prepay_success_time: i,
                        start_pay_first_to_client_prepay_success_time: o,
                        start_pay_latest_to_client_prepay_success_time: s,
                        client_prepay_start_to_client_prepay_success_time: c,
                      },
                    },
                  });
              } catch (t) {
                this.trackFail(t);
              }
            }),
            (t.prototype.track_prepayFail = function (t) {
              try {
                this.tracker.track(a.b.PrepayFail, { reason: t });
              } catch (t) {
                this.trackFail(t);
              }
            }),
            (t.prototype.track_prepayActionAbort = function (t) {
              try {
                this.tracker.track(a.b.PayActionAbort, { reason: t });
              } catch (t) {
                this.trackFail(t);
              }
            }),
            (t.prototype.__tempMetaTrackForWeappWxpayAbort = function (t) {
              try {
                if (!t || "E" !== t[0]) return;
                var e = getApp;
                if (!e || "function" != typeof e) return;
                var n = e();
                if (!n.logger) return;
                var r = t.slice(1, 15),
                  i = +r.slice(0, 4),
                  o = +r.slice(4, 6),
                  a = +r.slice(6, 8),
                  s = +r.slice(8, 10),
                  c = +r.slice(10, 12),
                  u = +r.slice(12, 14),
                  h = new Date(i, o - 1, a, s, c, u).getTime();
                n.logger.log({
                  si: n.getKdtId(),
                  et: "click",
                  ei: "abort_wxpay",
                  en: "中止微信支付",
                  params: { order_no: t, order_create_time: h },
                });
              } catch (t) {}
            }),
            (t.prototype.trackForWeappWxpaySyncResult = function (t) {
              var e = t.result,
                n = void 0 === e ? 0 : e,
                r = t.prepayId,
                i = void 0 === r ? "" : r,
                o = t.orderNo,
                a = void 0 === o ? "" : o;
              try {
                var s = getApp;
                if (!s || "function" != typeof s) return;
                var c = s();
                if (!c.logger) return;
                c.logger.log({
                  et: "custom",
                  ei: "wx_order_sync",
                  en: "订单同步到微信",
                  params: { prepay_id: i, result: n, order_no: a },
                });
              } catch (t) {}
            }),
            (t.prototype.showPayingToast = function () {
              this.toast({
                mask: !0,
                title: "支付中, 请耐心等待",
                icon: "loading",
                duration: 5e3,
              });
            }),
            (t.prototype.calcStartPayTime = function () {
              var t = Date.now();
              this.tracker.mergeParams({ start_pay_latest_time: t }),
                this.tracker.getParams().start_pay_first_time ||
                  this.tracker.mergeParams({ start_pay_first_time: t });
            }),
            t
          );
        })(),
        j =
          ((e.default = C),
          function (t) {
            var e = t.downgradeType,
              n = t.payData,
              r = t.request,
              i = t.zanAppJsbridge,
              o = n.partnerId,
              a = n.prepayId,
              s = n.cashierSalt,
              c = n.cashierSign,
              h = n.orderNo,
              f = n.kdtId,
              l = u.a.add("/packages/trade-pay/pay/index", {
                orderNo: n.orderNo,
              }),
              p = u.a.add("/packages/pay/wxh5-downgrade/index", {
                orderNo: h,
                prepayId: a,
                partnerId: o,
                cashierSalt: s,
                cashierSign: c,
                downgradeType: e,
              });
            return new Promise(function (t, n) {
              "sdk" === e
                ? r({
                    method: "GET",
                    origin: "cashier",
                    path: "assets/api/min-program/mp-account-info",
                    data: { kdtId: f },
                  })
                    .then(function (n) {
                      var r = n.weixinId;
                      t({ type: e }),
                        i.doAction({
                          action: "wxPay",
                          path: p,
                          appId: r,
                          miniprogramType: 0,
                        });
                    })
                    .catch(function (t) {
                      n({ type: e, error: t });
                    })
                : r({
                    origin: "cashier",
                    path: "assets/api/min-program/url-link",
                    method: "GET",
                    data: {
                      path: encodeURIComponent(p),
                      errorRedirectUrl: encodeURIComponent(l),
                      urlDesc: "app 小程序支付页面跳转",
                      kdtId: f,
                    },
                  })
                    .then(function (n) {
                      var r = n.yzShortLink;
                      r && (location.href = r), t({ type: e });
                    })
                    .catch(function (t) {
                      n({ type: e, error: t });
                    });
            });
          });
    },
    KrsW: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return r;
        });
      var r = {};
      n.r(r),
        n.d(r, "getResponseImage", function () {
          return f;
        }),
        n.d(r, "cdnImage", function () {
          return l;
        }),
        n.d(r, "upload", function () {
          return d;
        }),
        n.d(r, "multiUpload", function () {
          return v;
        });
      var i = n("Btea"),
        o = n("MLLI"),
        a = "https://img01.yzcdn.cn";
      var s = [
        /^(https?:)?\/\/imgqn.koudaitong.com/,
        /^(https?:)?\/\/kdt-img.koudaitong.com/,
        /^(https?:)?\/\/img\.yzcdn\.cn/,
        /^(https?:)?\/\/img01.yzcdn.cn/,
        /^(https?:)?\/\/dn-kdt-img.qbox.me/,
      ];
      var c =
          /\.([^.!]+)!([0-9]{1,4})x([0-9]{1,4})q?([0-9]{0,2}|100)?(\+2x)?\..+/,
        u = /([^.!]+)\?watermark\/.*\/$/;
      function h(t, e) {
        void 0 === e && (e = {});
        var n,
          r = "devtools" === (n = Object(o.b)().platform) || "android" === n,
          i = 1,
          a = t.match(c),
          s = e.clip ? "1" : "2",
          h = e.blur ? "imageMogr2/blur/" + e.blur + "x" + e.blur + "|" : "";
        if (a && a.length >= 4) {
          var f,
            l = a[1].match(u),
            p = !1;
          l && l.length ? ((f = l[1]), (p = !0)) : (f = a[1]);
          var d = f;
          "gif" === f
            ? (d = "gif")
            : r
            ? (d = "webp")
            : "webp" === f && (d = "jpg"),
            "+2x" === a[5] && (i = 2);
          var v =
              h +
              "imageView2/" +
              s +
              "/w/" +
              parseInt(a[2], 10) * i +
              "/h/" +
              parseInt(a[3], 10) * i +
              "/q/" +
              (a[4] || 75) +
              "/format/" +
              d,
            y = p ? "|" : "?";
          t = "" + (t.replace(c, ".") + a[1]) + y + v;
        } else
          t = (function (t, e) {
            var n = /(\?imageView2\/\d\/w\/\d+\/h\/\d+\/q\/\d+\/format\/)(\w+)/,
              r = t;
            if (n.test(t)) {
              var i,
                o = null == (i = t.match(n)) ? void 0 : i[2];
              e
                ? "gif" !== o && "webp" !== o && (r = t.replace(n, "$1webp"))
                : "webp" === o && (r = t.replace(n, "$1jpg"));
            }
            return r;
          })(t, r);
        return t;
      }
      function f(t, e, n) {
        var r = e,
          i = n,
          o = t.width / t.height,
          a = 0,
          s = 0;
        return (
          r / i < o
            ? (a = (i - (n = (e = r) / o)) / 2 + a)
            : (s = (r - (e = (n = i) * o)) / 2 + s),
          { top: a, left: s, width: e, height: n }
        );
      }
      function l(t, e, n) {
        if (
          (void 0 === e && (e = ""),
          void 0 === n && (n = {}),
          !t || t.match(/^data:/i))
        )
          return t;
        if (
          (s.forEach(function (e) {
            t = t.replace(e, a);
          }),
          t.match(/^(https?:)?\/\//i))
        ) {
          if (
            (!t.match(a) && !t.match("dn-kdt-img-test.qbox.me")) ||
            t.match("!")
          )
            return t;
          t = "" + t + e;
        } else t = a + "/" + t + e;
        return h(t, n);
      }
      var p = n("BANk");
      function d(t, e) {
        void 0 === e && (e = {});
        var r = n("US/N").default;
        return (
          "string" == typeof e && (e = { fileType: e }),
          r({
            path: e.uploadToShop
              ? "/wscshop/token/shop-image-token.json"
              : "/wscshop/token/upload-image.json",
            data: { kdt_id: e.kdtId },
          }).then(function (n) {
            var r = n.token;
            return new Promise(function (n, i) {
              return Object(p.a)({
                url: "https://up.yzcdn.cn/",
                filePath: t,
                fileName: "file",
                fileType: e.fileType || "image",
                formData: { token: r, "x:skip_save": 1 },
                success: function (e) {
                  var r,
                    o = e.data;
                  if (200 != +e.statusCode) return i(new Error("上传文件失败"));
                  try {
                    r = JSON.parse(o);
                  } catch (t) {
                    return i(new Error("解析文件失败"));
                  }
                  if (!r || 0 !== r.code) return i(new Error("上传文件失败"));
                  (r.data.originFile = t), (r.data.success = !0), n(r.data);
                },
                fail: function () {
                  return i(new Error("上传文件失败"));
                },
              });
            });
          })
        );
      }
      function v(t, e) {
        return Promise.all(
          t.map(function (t) {
            return d(t, e).catch(function (e) {
              return { originFile: t, reason: e, success: !1 };
            });
          })
        );
      }
    },
    L29T: function (t, e, n) {
      n.d(e, "d", function () {
        return o.b;
      }),
        n.d(e, "c", function () {
          return o.a;
        }),
        n.d(e, "b", function () {
          return a.b;
        }),
        n.d(e, "a", function () {
          return a.a;
        }),
        n.d(e, "e", function () {
          return r;
        }),
        n.d(e, "f", function () {
          return i;
        });
      var r,
        i,
        o = n("Laof"),
        a = n("bErL");
      !(function (t) {
        (t[(t.Success = 0)] = "Success"),
          (t[(t.BusinessError = 1)] = "BusinessError"),
          (t[(t.NativeError = 2)] = "NativeError"),
          (t[(t.NonResponse = 3)] = "NonResponse");
      })(r || (r = {})),
        (function (t) {
          t[(t.WxPayCancel = -2)] = "WxPayCancel";
        })(i || (i = {}));
    },
    LHnf: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        });
      var r = n("9ZMt");
      function i(t) {
        r.default.$native.onUnhandledRejection(t);
      }
      function o(t) {
        r.default.$native.offUnhandledRejection(t);
      }
    },
    Laof: function (t, e, n) {
      var r, i;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        (function (t) {
          (t[(t.Consumer = 0)] = "Consumer"),
            (t[(t.Merchant = 1)] = "Merchant");
        })(r || (r = {})),
        (function (t) {
          (t[(t.False = 0)] = "False"), (t[(t.True = 1)] = "True");
        })(i || (i = {}));
    },
    LgyM: function (t, e, n) {
      n.d(e, "a", function () {
        return l;
      });
      var r = n("bb6g"),
        i = n("lGJQ"),
        o = n.n(i),
        a = n("w2Y9"),
        s = n.n(a),
        c = n("w4n3"),
        u = n.n(c);
      n("s0cO"), n("rdQ4"), n("41a8"), n("sFgz"), n("23p4");
      var h = [1175, 1177, 1195],
        f = {
          bank_transfer_large: function (t, e) {
            var n = (function (t, e) {
                var n = t.deepLinkInfo,
                  r = e.afterPayUrl,
                  i = Object.keys(n).reduce(function (t, e) {
                    return (t[e] = encodeURIComponent(n[e])), t;
                  }, {});
                return {
                  title: encodeURIComponent("银行转账（大额）"),
                  postPayData: i,
                  afterPayUrl: r,
                };
              })(t, e),
              i = n.title,
              o = n.postPayData,
              a = encodeURIComponent(
                s.a.add(
                  "https://cashier.youzan.com/wscassets/bank-transfer-large",
                  Object(r.__assign)(Object(r.__assign)({}, o), {
                    partnerReturnUrl: e.afterPayUrl.url
                      ? e.afterPayUrl.url
                      : t.partnerReturnUrl,
                  })
                )
              );
            return Promise.reject({
              type: "redirect",
              data: {
                url: a,
                weappUrl: "/packages/pay/cashier-middle-page/index?url=" + a,
                title: i,
                postPayData: o,
              },
            });
          },
          weapp: {
            wx_applet: function (t, e, n) {
              var i = t.deepLinkInfo,
                a = t.partnerReturnUrl,
                c = e.biz,
                f = e.payData,
                l = f.orderNo,
                p = f.wxOrderInfo,
                d = e.type,
                v = i.timeStamp,
                y = void 0 === v ? "" : v,
                g = i.nonceStr,
                m = void 0 === g ? "" : g,
                b = i.package,
                _ = void 0 === b ? "" : b,
                E = i.paySign,
                w = void 0 === E ? "" : E,
                O = i.signType,
                S = wx.canIUse("requestOrderPayment"),
                x = s.a.get("prepay_id", _.match(/^\?/) ? _ : "?" + _);
              if (p) {
                var T = (
                  wx.canIUse("getEnterOptionsSync")
                    ? wx.getEnterOptionsSync()
                    : wx.getLaunchOptionsSync()
                ).scene;
                if (h.includes(T) && !S)
                  return (
                    n.trackForWeappWxpaySyncResult({
                      result: 0,
                      prepayId: x,
                      orderNo: l,
                    }),
                    Promise.reject({
                      type: "WxPayError",
                      msg: "当前微信版本暂时无法支持，请升级微信版本后重试",
                    })
                  );
                (p.orderDetail.payInfo.prepayId = x),
                  (p.orderDetail.payInfo.prepayTime = o()(1e3 * Number(y)));
              }
              var k = new Promise(function (t, e) {
                  try {
                    (p && S ? wx.requestOrderPayment : wx.requestPayment)({
                      timeStamp: y,
                      nonceStr: m,
                      package: _,
                      signType: O,
                      paySign: w,
                      orderInfo: p && u()(p),
                      success: function (e) {
                        var i,
                          o = Object(r.__assign)(Object(r.__assign)({}, e), {
                            partnerReturnUrl: a,
                          }),
                          s =
                            null === (i = n.onPaySuccessSync) || void 0 === i
                              ? void 0
                              : i.call(n, { payChannel: "WX_APPLET" });
                        s instanceof Promise
                          ? s
                              .then(function () {
                                t(o);
                              })
                              .catch(function () {
                                t(o);
                              })
                          : t(o);
                      },
                      fail: function (t) {
                        var n = t.errMsg;
                        e({
                          type:
                            "requestPayment:fail cancel" === n ||
                            "requestOrderPayment:fail cancel" === n
                              ? "cancel"
                              : "WxPayError",
                          msg: n,
                        });
                      },
                    }),
                      p &&
                        S &&
                        (n.trackForWeappWxpaySyncResult({
                          result: 1,
                          prepayId: x,
                          orderNo: l,
                        }),
                        n.request({
                          method: "POST",
                          origin: "cashier",
                          path:
                            "assets/api/union/" +
                            c +
                            "/wx-shop-component/order-status",
                          data: { orderNo: l },
                        }));
                  } catch (t) {
                    e({ type: "WxPayError", msg: "支付超时，请重新支付!" });
                  }
                }),
                P = new Promise(function (t, e) {
                  setTimeout(function () {
                    return e({
                      type: "WxPayError",
                      msg: "支付超时，请重新支付",
                    });
                  }, 3e4);
                });
              return "PRE" === d ? Promise.race([k, P]) : k;
            },
          },
        };
      function l(t) {
        var e = t.biz,
          n = t.env,
          r = t.channel;
        return f[e] && f[e][n] && f[e][n][r]
          ? f[e][n][r]
          : f[n] && f[n][r]
          ? f[n][r]
          : f[r]
          ? f[r]
          : null;
      }
    },
    MLLI: function (t, e, n) {
      n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "b", function () {
          return f;
        });
      var r = n("Fcif"),
        i = n("9ZMt"),
        o = n("WWpR"),
        a = n("h+Rz"),
        s = [
          "pixelRatio",
          "windowWidth",
          "windowHeight",
          "screenWidth",
          "screenHeight",
          "platform",
          "statusBarHeight",
          "brand",
          "model",
          "system",
          "version",
          "SDKVersion",
          "fontSizeSetting",
        ];
      function c(t) {
        var e;
        return (
          (t.platform = null == (e = t.platform) ? void 0 : e.toLowerCase()), t
        );
      }
      var u = {};
      function h() {
        return u.getSystemInfo
          ? Promise.resolve(u.getSystemInfo)
          : a.a.getSystemInfo().then(function (t) {
              var e = i.default.$native.canIUse("getWindowInfo")
                ? i.default.$native.getWindowInfo()
                : {};
              return (
                (u.getSystemInfo = c(Object(o.a)(Object(r.a)({}, t, e), s))),
                u.getSystemInfo
              );
            });
      }
      function f() {
        if (u.getSystemInfoSync) return u.getSystemInfoSync;
        var t = i.default.$native.getSystemInfoSync(),
          e = i.default.$native.canIUse("getWindowInfo")
            ? i.default.$native.getWindowInfo()
            : {};
        return (
          (u.getSystemInfoSync = c(Object(o.a)(Object(r.a)({}, t, e), s))),
          u.getSystemInfoSync
        );
      }
    },
    MVYo: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("h+Rz");
      function i() {
        return r.a.login();
      }
    },
    Moet: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = function (t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
      (e.default = r), (t.exports = e.default);
    },
    NotG: function (t, e, n) {
      var r;
      n.d(e, "a", function () {
        return r;
      }),
        (function (t) {
          (t.RETRY = "manual-retry"), (t.AUTORETRY = "auto-retry");
        })(r || (r = {}));
    },
    NthX: function (t, e, n) {
      var r = n("BCRw")();
      t.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (t) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function("r", "regeneratorRuntime = r")(r);
      }
    },
    OHwi: function (t, e) {},
    ONqW: function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var r = n("Fcif"),
        i = n("9ZMt"),
        o = function (t, e) {
          for (var n, r = e.split("."), i = 0; i < r.length; i++) n = t[r[i]];
          return n;
        },
        a = function (t) {
          return function () {
            var e = i.default.getGlobal("logger");
            if (e) {
              var n = o(e, t);
              if (n) return n.apply(null, [...arguments]);
            }
          };
        };
      function s() {
        return [
          "setEvent",
          "setContext",
          "setPlat",
          "setEnv",
          "setUser",
          "log",
          "getLogParams",
          "getPageSpm",
          "getSpm",
          "setMoreSpm",
          "enterpage",
          "leavepage",
          "setCurrentSpm",
        ].reduce((t, e) => Object(r.a)({}, t, { [e]: a(e) }), {});
      }
    },
    ORXP: function (t, e, n) {
      function r() {
        (this.onSuccess = function (t) {}),
          (this.onFail = function () {}),
          (this.onCancel = function () {}),
          (this.bizType = "");
      }
      function i(t, e) {
        var n = Object.getOwnPropertyNames(t.prototype);
        Object.keys(e).forEach((r) => {
          -1 === n.indexOf(r) && (t.prototype[r] = e[r]);
        });
      }
      n.r(e),
        (r.prototype.check = function (t) {
          var {
            onSuccess: e,
            onFail: n,
            onCancel: r,
            bizType: i,
            bizData: o = "",
          } = t;
          if ("function" != typeof e) throw Error("onSuccess 必须为一个方法");
          var a = this;
          if (
            ((this.onSuccess = function () {
              a.hideLoading(), e(a.token);
            }),
            n)
          ) {
            if ("function" != typeof n) throw Error("onFail 必须为一个方法");
            this.onFail = n;
          }
          if (r) {
            if ("function" != typeof r) throw Error("onCancel 必须为一个方法");
            this.onCancel = r;
          }
          if (void 0 === i) throw Error("业务线类型 bizType 为必传");
          (this.bizType = i),
            (this.bizData = o),
            this.getToken().then(
              function () {
                var t = this,
                  e = {
                    token: this.token,
                    onSuccess: this.onSuccess,
                    onCancel: this.onCancel,
                    bizType: this.bizType,
                    bizData: this.bizData,
                    onFail: function (n) {
                      if ((t.hideLoading(), n.captchaType))
                        switch (n.captchaType) {
                          case 1:
                            t.slideCaptcha.startVerify(e);
                            break;
                          case 2:
                            t.clickOrTouch.startVerify(e);
                            break;
                          case -1:
                            t.slideCaptcha.hide(),
                              t.numberCaptcha.startVerify(e);
                            break;
                          default:
                            t.errorTip("没有当前类型验证码");
                        }
                      else
                        t.slideCaptcha.hide(),
                          t.numberCaptcha.hide(),
                          t.errorTip(
                            "string" == typeof n ? n : "停留时间过长，请重试"
                          ),
                          t.onFail(n);
                    },
                  };
                this.token && this.clickOrTouch.startVerify(e);
              }.bind(this)
            );
        }),
        (r.prototype.getToken = function () {}),
        (r.prototype.errorTip = function () {});
      var o = "",
        a = "";
      function s(t, e) {
        return e.aes.encrypt({ data: JSON.stringify(t), iv: a, key: o });
      }
      function c(t) {
        return decodeURIComponent(t.split("").reverse().join(""));
      }
      var u = c("moc.nazuoy.tropssapF2%F2%A3%sptth");
      try {
        wx && Page && (u = c("tropssapF2%"));
      } catch (t) {}
      var h = u + c("nosj.2v-nekot-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%"),
        f = u + c("nosj.atad-ahctpac-roivaheb-kcehcF2%ahctpacF2%ipaF2%"),
        l = u + c("nosj.atad-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%");
      function p() {
        r.prototype.constructor.call(this);
      }
      function d() {
        (this.token = ""),
          this.onSuccess,
          this.onFail,
          this.onCancel,
          (this.now = Date.now());
      }
      (p.prototype.getToken = function () {
        this.showLoading();
        var t = this.platformRequest({
          url: h,
          method: "GET",
          data: { bizType: this.bizType, version: "1.0" },
          withCredentials: !0,
        });
        return Promise.all([
          t,
          n.e("packages/async-main/chunk").then(n.t.bind(null, "sbP3", 7)),
        ]).then((t) => {
          var [e, n] = t;
          if (200 === e.statusCode && e.data) {
            var r = e.data,
              {
                code: i,
                msg: s,
                data: { token: c, randomStr: u = "" },
              } = r;
            if (0 === i && c) {
              var [h = "", f = ""] = u.split("").reverse().join("").split("@");
              return (
                (function (t, e, n) {
                  (o = n.utils.parse(t)), (a = n.utils.parse(e));
                })(h, f, n),
                Promise.resolve((this.token = c))
              );
            }
            (this.token = ""),
              this.errorTip(s || "token 获取失败"),
              this.hideLoading();
          }
        });
      }),
        i(p, r.prototype),
        (d.prototype.getPageExposureTime = function () {
          return { start: this.now, now: Date.now() };
        }),
        (d.prototype.startVerify = function () {}),
        (d.prototype.submitUserData = function () {});
      var v = d;
      function y() {
        v.prototype.constructor.call(this),
          (this.gyroscopeTrack = []),
          (this.speedTrack = []);
      }
      (y.prototype.handlerGyroscope = function (t) {
        var { x: e, y: n, z: r } = t;
        this.gyroscopeTrack.push({ x: e, y: n, z: r, t: Date.now() });
      }),
        (y.prototype.handlerSpeed = function (t) {
          var { x: e, y: n, z: r } = t;
          this.speedTrack.push({ x: e, y: n, z: r, t: Date.now() });
        }),
        (y.prototype.getAndClearGyroscopeTrack = function () {
          var t = this.gyroscopeTrack;
          return (this.gyroscopeTrack = []), t;
        }),
        (y.prototype.getAndClearSpeedTrack = function () {
          var t = this.speedTrack;
          return (this.speedTrack = []), t;
        }),
        (y.prototype.startRecordGyroscopeTrack = function () {}),
        (y.prototype.startRecordSpeedTrack = function () {});
      var g = y;
      function m() {
        v.prototype.constructor.call(this), (this.touchData = {});
      }
      (m.prototype.startRecordTouchStart = function (t) {
        for (var e = [], n = 0, r = t.touches.length; n < r; n++) {
          var i = t.touches[n];
          e.push({ x: i.pageX, y: i.pageY, force: i.force });
        }
        this.touchData.down = { touches: e, t: Date.now() };
      }),
        (m.prototype.startRecordTouchEnd = function (t) {
          for (var e = [], n = 0, r = t.changedTouches.length; n < r; n++) {
            var i = t.changedTouches[n];
            e.push({ x: i.pageX, y: i.pageY, force: i.force });
          }
          this.touchData.up = { touches: e, t: Date.now() };
        });
      var b = m,
        _ = { TENCENT: 0, SLIDE: 1, CLICK: 2, NUMBER: -1 },
        E = n("o8v2"),
        w = _;
      class O extends v {
        constructor(t) {
          super(),
            g.prototype.constructor.call(this),
            b.prototype.constructor.call(this),
            this.startRecordGyroscopeTrack(),
            this.startRecordSpeedTrack(),
            (t.onTouchStart = (t) => this.startRecordTouchStart(t)),
            (t.onTouchEnd = (t) => this.startRecordTouchEnd(t));
        }
        startVerify(t) {
          var { token: e, onSuccess: n, onFail: r, bizType: i, bizData: o } = t;
          (this.token = e),
            (this.onSuccess = n),
            (this.onFail = r),
            (this.bizType = i),
            (this.bizData = o);
          var a = {
            touchData: this.touchData,
            gyroscopeTrack: this.getAndClearGyroscopeTrack(),
            speedTrack: this.getAndClearSpeedTrack(),
            pageExposureTime: this.getPageExposureTime(),
          };
          this.submitUserData(a);
        }
        submitUserData(t) {
          n.e("packages/async-main/chunk")
            .then(n.t.bind(null, "sbP3", 7))
            .then((e) => {
              Object(E.a)({
                url: f,
                method: "POST",
                data: {
                  token: this.token,
                  bizType: this.bizType,
                  bizData: this.bizData,
                  captchaType: w.CLICK,
                  userBehaviorData: s(t, e),
                },
              }).then((t) => {
                if (200 === t.statusCode && t.data) {
                  var e = t.data,
                    { code: n, msg: r, data: i } = e;
                  if (0 === n) {
                    var { captchaType: o, success: a } = i;
                    a ? this.onSuccess() : this.onFail({ captchaType: 1 });
                  }
                }
              });
            });
        }
        startRecordGyroscopeTrack() {
          var t = this;
          wx.startGyroscope &&
            wx.startGyroscope({
              interval: "ui",
              success() {
                wx.onGyroscopeChange(t.handlerGyroscope.bind(t));
              },
            });
        }
        startRecordSpeedTrack() {
          var t = this;
          wx.startAccelerometer &&
            wx.startAccelerometer({
              interval: "ui",
              success() {
                wx.onAccelerometerChange(t.handlerSpeed.bind(t));
              },
            });
        }
      }
      i(O, Object.assign({}, g.prototype, b.prototype));
      var S = n("eijD");
      var x = class extends v {
          constructor(t) {
            var e, n, r;
            super(),
              (e = this),
              (this.initLeft = 14),
              (this.bg_W_H_Scale = 280 / 158),
              (this.component = t),
              this.initComAndEventHandler({
                complete:
                  ((r = Object(S.a)(function* (t) {
                    return yield e.submitUserData(t);
                  })),
                  function (t) {
                    return r.apply(this, arguments);
                  }),
                fail: () => this.onFail(),
                cancel: () => {
                  this.onCancel(), this.closeSlideCaptcha();
                },
                needCaptchaData:
                  ((n = Object(S.a)(function* () {
                    try {
                      e.slideViewData = yield e.refreshSlideCaptcha();
                    } catch (t) {}
                  })),
                  function () {
                    return n.apply(this, arguments);
                  }),
              });
          }
          initComAndEventHandler(t) {
            var { complete: e, fail: n, cancel: r, needCaptchaData: i } = t;
          }
          set status(t) {
            (this._status = t), this.setStatus(t);
          }
          set slideViewData(t) {}
          get status() {
            return this._status;
          }
          setStatus(t) {}
          closeSlideCaptcha() {
            this.hide();
          }
          hide() {}
          startVerify(t) {
            var { token: e, onSuccess: n, onFail: r } = t;
          }
          show(t) {}
          submitUserData(t) {
            return Object(S.a)(function* () {})();
          }
          refreshSlideCaptcha() {
            return Object(S.a)(function* () {})();
          }
        },
        T = _;
      class k extends x {
        constructor(t) {
          super(t);
        }
        startVerify(t) {
          var {
            token: e,
            onSuccess: n,
            onFail: r,
            onCancel: i,
            bizType: o,
            bizData: a,
          } = t;
          (this.token = e),
            (this.onSuccess = n),
            (this.onFail = r),
            (this.onCancel = i),
            (this.bizType = o),
            (this.bizData = a),
            this.show();
        }
        submitUserData(t) {
          var { userDataList: e, scale: r, left: i, top: o } = t;
          n.e("packages/async-main/chunk")
            .then(n.t.bind(null, "sbP3", 7))
            .then((t) => {
              this.platformRequest({
                url: f,
                method: "POST",
                data: {
                  token: this.token,
                  bizType: this.bizType,
                  bizData: this.bizData,
                  captchaType: T.SLIDE,
                  userBehaviorData: s(
                    {
                      cx: Math.ceil(i),
                      cy: Math.ceil(o),
                      scale: r,
                      slidingEvents: e,
                    },
                    t
                  ),
                },
              })
                .then((t) => {
                  if (200 === t.statusCode && t.data) {
                    var e = t.data,
                      { code: n, data: r, msg: i } = e;
                    0 === n && r.success
                      ? ((this.status = "success"),
                        this.onSuccess(),
                        setTimeout(() => {
                          this.hide();
                        }, 500))
                      : r
                      ? r.captchaType === T.SLIDE
                        ? r && r.needRefresh
                          ? (this.status = "limit")
                          : ((this.status = "failed"),
                            setTimeout(() => {
                              this.refreshSlideCaptcha().then((t) => {
                                this.slideViewData = t;
                              });
                            }, 500))
                        : this.onFail(r)
                      : this.onFail(i);
                  }
                })
                .catch(() => {
                  this.onFail("网络异常，请稍后重试"),
                    setTimeout(() => {
                      this.hide();
                    }, 500);
                });
            });
        }
        refreshSlideCaptcha() {
          return (
            (this.status = "loading"),
            new Promise((t, e) => {
              this.platformRequest({
                url: l,
                method: "GET",
                data: { token: this.token, captchaType: T.SLIDE },
              }).then((n) => {
                if (200 === n.statusCode && n.data) {
                  var r = n.data,
                    { code: i, data: o, msg: a } = r;
                  if (0 === i) {
                    var { captchaObtainInfoResult: s } = o;
                    t({
                      cy: s.cy,
                      bigUrl: s.bigUrl,
                      smallUrl: s.smallUrl,
                      token: s.token,
                    }),
                      setTimeout(() => {
                        this.status = "ready";
                      }, 400);
                  } else
                    void 0 !== o.captchaType
                      ? this.onFail(o)
                      : a && ((this.status = "exception"), e(a));
                }
              });
            })
          );
        }
      }
      class P extends k {
        constructor(t) {
          super(t);
        }
        initComAndEventHandler(t) {
          var { complete: e, fail: n, cancel: r, needCaptchaData: i } = t;
          (this.component.onComplete = e),
            (this.component.onFail = n),
            (this.component.onCancel = r),
            (this.component.onNeedCaptchaData = i);
        }
        platformRequest(t) {
          return void 0 === t && (t = {}), Object(E.a)(t);
        }
        set status(t) {
          this.component.setData({ status: t });
        }
        set slideViewData(t) {
          this.component.setSlideViewData(
            Object.assign(t, {
              initLeft: this.initLeft,
              bgWhScale: this.bg_W_H_Scale,
            })
          );
        }
        show() {
          this.component.show(),
            this.refreshSlideCaptcha().then((t) => {
              this.slideViewData = t;
            });
        }
        hide() {
          this.component.hide();
        }
      }
      var A = class extends v {
        constructor() {
          var t, e, n;
          super(),
            (t = this),
            this.initComAndEventHandler({
              complete:
                ((n = Object(S.a)(function* (e) {
                  return yield t.submitUserData(e);
                })),
                function (t) {
                  return n.apply(this, arguments);
                }),
              fail: () => this.onFail(),
              cancel: () => {
                this.onCancel(), this.closeNumberCaptcha();
              },
              needCaptchaData:
                ((e = Object(S.a)(function* () {
                  try {
                    t.imgBase64 = yield t.refreshNumberCaptcha();
                  } catch (t) {}
                })),
                function () {
                  return e.apply(this, arguments);
                }),
            });
        }
        initComAndEventHandler(t) {
          var { complete: e, fail: n, cancel: r, needCaptchaData: i } = t;
        }
        set imgBase64(t) {}
        closeNumberCaptcha() {
          this.hide();
        }
        hide() {}
        startVerify(t) {
          var { token: e, onSuccess: n, onFail: r } = t;
        }
        show(t) {}
        submitUserData(t) {
          return Object(S.a)(function* () {})();
        }
        refreshNumberCaptcha() {
          return Object(S.a)(function* () {})();
        }
      };
      class C extends A {
        startVerify(t) {
          var { token: e, onSuccess: n, onFail: r, onCancel: i } = t;
          (this.token = e),
            (this.onSuccess = n),
            (this.onFail = r),
            (this.onCancel = i),
            this.show();
        }
      }
      var j = _;
      class D extends C {
        constructor(t) {
          super(), (this.behavior = t);
        }
        initComAndEventHandler(t) {
          var { complete: e, fail: n, cancel: r, needCaptchaData: i } = t;
        }
        refreshNumberCaptcha() {
          var t = this.behavior.component,
            e = this;
          wx.request({
            url: l,
            method: "GET",
            data: { token: this.token, captchaType: j.NUMBER },
            success(n) {
              if (200 === n.statusCode && n.data) {
                var r = n.data,
                  { data: i, msg: o } = r;
                i.captchaType === j.NUMBER
                  ? (t.showNumber(), t.setData({ numberImg: i.imgBase64 }))
                  : e.onFail(i);
              }
            },
          });
        }
        submitUserData(t) {
          var e = this.behavior.component,
            n = this,
            r = () => {
              this.onSuccess(),
                setTimeout(() => {
                  this.hide();
                }, 500);
            };
          if (/^http/.test(e.data.numberImg)) return r();
          wx.request({
            url: f,
            method: "POST",
            data: {
              token: this.token,
              captchaType: j.NUMBER,
              userBehaviorData: t,
            },
            success(t) {
              if (200 === t.statusCode && t.data) {
                var e = t.data,
                  { code: i, data: o, msg: a } = e;
                0 === i && o.success
                  ? r()
                  : o
                  ? (n.behavior.errorTip("验证码校验失败，请重新输入"),
                    o.captchaType === j.NUMBER
                      ? setTimeout(() => {
                          n.refreshNumberCaptcha();
                        }, 500)
                      : n.onFail(o))
                  : n.onFail(a);
              }
            },
          });
        }
        show() {
          this.refreshNumberCaptcha();
        }
        hide() {
          this.behavior.component.handleClose();
        }
      }
      class I {
        constructor() {
          p.prototype.constructor.call(this), (this.initialized = !1);
        }
        platformRequest(t) {
          return void 0 === t && (t = {}), Object(E.a)(t);
        }
        showLoading() {
          wx.showLoading();
        }
        hideLoading() {
          wx.hideLoading();
        }
        errorTip(t) {
          wx.showToast({ title: t, icon: "none" });
        }
      }
      i(I, p.prototype);
      var R = new I(),
        N = function (t) {
          var {
            onSuccess: e,
            onFail: n,
            onCancel: r,
            bizType: i,
            bizData: o,
          } = t;
          R.slideCaptcha &&
            R.clickOrTouch &&
            R.check({
              bizType: i,
              bizData: o,
              onSuccess: e,
              onFail: n,
              onCancel: r,
            });
        };
      N.init = (t) => {
        if (!R.initialized) {
          var e;
          if (t) e = t.selectComponent("#behavior-verify");
          else {
            var n = getCurrentPages(),
              r = n.length ? n[n.length - 1] : null;
            if (!r) return;
            e = r.selectComponent("#behavior-verify");
          }
          if (e) {
            var i = e.selectComponent("#slide-captcha"),
              o = e.selectComponent("#number-captcha");
            (R.slideCaptcha = new P(i)),
              (R.numberCaptcha = new D({ component: o })),
              (R.clickOrTouch = new O(e)),
              (R.initialized = !0);
          }
        }
      };
      e.default = N;
    },
    Oq22: function (t, e, n) {
      n.d(e, "a", function () {
        return k;
      });
      var r = n("MLLI"),
        i = n("HSl3"),
        o = n("kU95"),
        a = n("jakC"),
        s = n("bb6g"),
        c = n("9ZMt"),
        u = { onHide: "onAppHide" },
        h = {};
      var f = Object(s.__assign)(
        { usingScope: ["app"] },
        ["onHide"].reduce(function (t, e) {
          return (
            (t[e] = function () {
              try {
                (t = h[u[e]]) &&
                  t.length &&
                  t.forEach(function (t) {
                    t();
                  });
              } catch (t) {}
              var t;
            }),
            t
          );
        }, {})
      );
      c.default.mixin(f);
      var l = n("Qzzd");
      var p,
        d,
        v =
          ((p = c.default.getGlobal),
          (d = c.default.setGlobal),
          !p("mark-map") && d("mark-map", new Map()),
          p("mark-map"));
      function y(t) {
        return t ? v.get(t) : v;
      }
      function g(t, e) {
        return v.set(t, e);
      }
      function m(t) {
        return t ? v.has(t) && v.delete(t) : v.clear();
      }
      function b() {
        v.clear();
      }
      var _ = {
          al: "appLaunch",
          rt: "route",
          cus: "custom",
          fr: "firstRender",
          fp: "firstPaint",
          fcp: "firstContentfulPaint",
          lcp: "largestContentfulPaint",
          dp: "downloadPackage",
          es: "evaluateScript",
        },
        E = { reportRouteRules: {}, tagMerge: {}, enable: !0 },
        w = Object(r.b)().SDKVersion || "2.24.0",
        O = Object(o.a)(w, "2.24.0") < 0;
      function S(t) {
        var e = t.tag,
          n = t.scene,
          r = t.extra;
        try {
          var i = Date.now();
          setTimeout(function () {
            var t,
              o = Object(a.a)() || {},
              s = o._path,
              c = void 0 === s ? "" : s,
              u = { pn: e };
            Object.keys(_).forEach(function (t) {
              if ("al" !== t) {
                var e = y(_[t]);
                e && (u[t] = e);
              }
            });
            var h = { level: "info", type: "per", extra: r || {}, per: u };
            if (e || n) {
              var f = E.reportRouteRules[e];
              if (!((f && !f.includes(c)) || O)) {
                var p,
                  d = i;
                if (
                  (n === _.rt &&
                    (d =
                      (null === (t = u.rt) || void 0 === t
                        ? void 0
                        : t.startTime) || i),
                  n === _.al || n === _.cus)
                ) {
                  n === _.cus && (n = e);
                  var v = y(n || e) || {};
                  if (((d = v.startTime || i), n === _.al)) {
                    var g = E.tagMerge[e] || [];
                    if (!v.startTime) return;
                    if (
                      !(v.path || "").includes(c) &&
                      !g.includes(v.path || "")
                    )
                      return;
                    h.per.al = v;
                  }
                }
                (p = Math.ceil(i - d)) <= 0 ||
                  ((h.baseTime = d),
                  (h.per.df = p),
                  (o.url = c),
                  (h.route = o),
                  !(null == r ? void 0 : r.checkLog) || r.checkLog(h)
                    ? (b(),
                      Object(l.a)().then(function (t) {
                        t.captureEvent(h);
                      }))
                    : b());
              }
            }
          }, 2500);
        } catch (t) {}
      }
      var x,
        T,
        k = {
          start: function (t, e) {
            g(t, { startTime: e || Date.now() });
          },
          end: function (t, e, n) {
            void 0 === e && (e = _.cus),
              E.enable && S({ tag: t, extra: n, scene: e });
          },
          log: function (t) {
            var e = t.tag,
              n = t.scene,
              r = t.extra;
            n.includes(_.al) && y(_.al)
              ? S({ tag: e, extra: r, scene: _.al })
              : n.includes(_.rt) && S({ tag: e, extra: r, scene: _.rt });
          },
          delete: function (t) {
            y(t) && m(t);
          },
          setConfig: function (t) {
            return Object.assign(E, t), E;
          },
          get: function (t) {
            return y(t);
          },
        };
      function P(t) {
        t.getEntries().forEach(function (t) {
          return (function (t, e) {
            e.duration ||
              (e.duration = Date.now() - (e.startTime || Date.now()));
            var n = Object.keys(_).find(function (e) {
              return _[e] === t;
            });
            if (n) {
              var r = e;
              if (
                (("dp" !== n && "es" !== n) || (r = (y(t) || []).concat(e)),
                "al" === n && !y(_.al))
              ) {
                var i = r.startTime;
                r.startTime = i;
              }
              g(t, r);
            }
          })(t.name, t);
        });
      }
      (k.onPerfObserver = P),
        Object(i.a)()
          .createObserver(P)
          .observe({
            entryTypes: ["navigation", "render", "loadPackage", "script"],
          }),
        (T = function () {
          m();
        }),
        h[(x = "onAppHide")] || (h[x] = []),
        h[x].push(T);
    },
    QQdI: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isYZ = void 0),
        (e.isYZ = function () {
          return /\.youzan\.com$/.test(window.location.host);
        });
    },
    QtFT: function (t, e) {
      var n,
        r,
        i =
          i ||
          (function (t, e) {
            var n = {},
              r = (n.lib = {}),
              i = function () {},
              o = (r.Base = {
                extend: function (t) {
                  i.prototype = this;
                  var e = new i();
                  return (
                    t && e.mixIn(t),
                    e.hasOwnProperty("init") ||
                      (e.init = function () {
                        e.$super.init.apply(this, arguments);
                      }),
                    (e.init.prototype = e),
                    (e.$super = this),
                    e
                  );
                },
                create: function () {
                  var t = this.extend();
                  return t.init.apply(t, arguments), t;
                },
                init: function () {},
                mixIn: function (t) {
                  for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                  t.hasOwnProperty("toString") && (this.toString = t.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              a = (r.WordArray = o.extend({
                init: function (t, e) {
                  (t = this.words = t || []),
                    (this.sigBytes = null != e ? e : 4 * t.length);
                },
                toString: function (t) {
                  return (t || c).stringify(this);
                },
                concat: function (t) {
                  var e = this.words,
                    n = t.words,
                    r = this.sigBytes;
                  if (((t = t.sigBytes), this.clamp(), r % 4))
                    for (var i = 0; i < t; i++)
                      e[(r + i) >>> 2] |=
                        ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                        (24 - ((r + i) % 4) * 8);
                  else if (65535 < n.length)
                    for (i = 0; i < t; i += 4) e[(r + i) >>> 2] = n[i >>> 2];
                  else e.push.apply(e, n);
                  return (this.sigBytes += t), this;
                },
                clamp: function () {
                  var e = this.words,
                    n = this.sigBytes;
                  (e[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                    (e.length = t.ceil(n / 4));
                },
                clone: function () {
                  var t = o.clone.call(this);
                  return (t.words = this.words.slice(0)), t;
                },
                random: function (e) {
                  for (var n = [], r = 0; r < e; r += 4)
                    n.push((4294967296 * t.random()) | 0);
                  return new a.init(n, e);
                },
              })),
              s = (n.enc = {}),
              c = (s.Hex = {
                stringify: function (t) {
                  var e = t.words;
                  t = t.sigBytes;
                  for (var n = [], r = 0; r < t; r++) {
                    var i = (e[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                    n.push((i >>> 4).toString(16)),
                      n.push((15 & i).toString(16));
                  }
                  return n.join("");
                },
                parse: function (t) {
                  for (var e = t.length, n = [], r = 0; r < e; r += 2)
                    n[r >>> 3] |=
                      parseInt(t.substr(r, 2), 16) << (24 - (r % 8) * 4);
                  return new a.init(n, e / 2);
                },
              }),
              u = (s.Latin1 = {
                stringify: function (t) {
                  var e = t.words;
                  t = t.sigBytes;
                  for (var n = [], r = 0; r < t; r++)
                    n.push(
                      String.fromCharCode(
                        (e[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
                      )
                    );
                  return n.join("");
                },
                parse: function (t) {
                  for (var e = t.length, n = [], r = 0; r < e; r++)
                    n[r >>> 2] |= (255 & t.charCodeAt(r)) << (24 - (r % 4) * 8);
                  return new a.init(n, e);
                },
              }),
              h = (s.Utf8 = {
                stringify: function (t) {
                  try {
                    return decodeURIComponent(escape(u.stringify(t)));
                  } catch (t) {
                    throw Error("Malformed UTF-8 data");
                  }
                },
                parse: function (t) {
                  return u.parse(unescape(encodeURIComponent(t)));
                },
              }),
              f = (r.BufferedBlockAlgorithm = o.extend({
                reset: function () {
                  (this._data = new a.init()), (this._nDataBytes = 0);
                },
                _append: function (t) {
                  "string" == typeof t && (t = h.parse(t)),
                    this._data.concat(t),
                    (this._nDataBytes += t.sigBytes);
                },
                _process: function (e) {
                  var n = this._data,
                    r = n.words,
                    i = n.sigBytes,
                    o = this.blockSize,
                    s = i / (4 * o);
                  if (
                    ((e =
                      (s = e
                        ? t.ceil(s)
                        : t.max((0 | s) - this._minBufferSize, 0)) * o),
                    (i = t.min(4 * e, i)),
                    e)
                  ) {
                    for (var c = 0; c < e; c += o) this._doProcessBlock(r, c);
                    (c = r.splice(0, e)), (n.sigBytes -= i);
                  }
                  return new a.init(c, i);
                },
                clone: function () {
                  var t = o.clone.call(this);
                  return (t._data = this._data.clone()), t;
                },
                _minBufferSize: 0,
              }));
            r.Hasher = f.extend({
              cfg: o.extend(),
              init: function (t) {
                (this.cfg = this.cfg.extend(t)), this.reset();
              },
              reset: function () {
                f.reset.call(this), this._doReset();
              },
              update: function (t) {
                return this._append(t), this._process(), this;
              },
              finalize: function (t) {
                return t && this._append(t), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (t) {
                return function (e, n) {
                  return new t.init(n).finalize(e);
                };
              },
              _createHmacHelper: function (t) {
                return function (e, n) {
                  return new l.HMAC.init(t, n).finalize(e);
                };
              },
            });
            var l = (n.algo = {});
            return n;
          })(Math);
      (r = (n = i).lib.WordArray),
        (n.enc.Base64 = {
          stringify: function (t) {
            var e = t.words,
              n = t.sigBytes,
              r = this._map;
            t.clamp(), (t = []);
            for (var i = 0; i < n; i += 3)
              for (
                var o =
                    (((e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                    (((e[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) <<
                      8) |
                    ((e[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                  a = 0;
                4 > a && i + 0.75 * a < n;
                a++
              )
                t.push(r.charAt((o >>> (6 * (3 - a))) & 63));
            if ((e = r.charAt(64))) for (; t.length % 4; ) t.push(e);
            return t.join("");
          },
          parse: function (t) {
            var e = t.length,
              n = this._map;
            (i = n.charAt(64)) && -1 != (i = t.indexOf(i)) && (e = i);
            for (var i = [], o = 0, a = 0; a < e; a++)
              if (a % 4) {
                var s = n.indexOf(t.charAt(a - 1)) << ((a % 4) * 2),
                  c = n.indexOf(t.charAt(a)) >>> (6 - (a % 4) * 2);
                (i[o >>> 2] |= (s | c) << (24 - (o % 4) * 8)), o++;
              }
            return r.create(i, o);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        }),
        (function (t) {
          function e(t, e, n, r, i, o, a) {
            return (
              (((t = t + ((e & n) | (~e & r)) + i + a) << o) |
                (t >>> (32 - o))) +
              e
            );
          }
          function n(t, e, n, r, i, o, a) {
            return (
              (((t = t + ((e & r) | (n & ~r)) + i + a) << o) |
                (t >>> (32 - o))) +
              e
            );
          }
          function r(t, e, n, r, i, o, a) {
            return (
              (((t = t + (e ^ n ^ r) + i + a) << o) | (t >>> (32 - o))) + e
            );
          }
          function o(t, e, n, r, i, o, a) {
            return (
              (((t = t + (n ^ (e | ~r)) + i + a) << o) | (t >>> (32 - o))) + e
            );
          }
          for (
            var a = i,
              s = (u = a.lib).WordArray,
              c = u.Hasher,
              u = a.algo,
              h = [],
              f = 0;
            64 > f;
            f++
          )
            h[f] = (4294967296 * t.abs(t.sin(f + 1))) | 0;
          (u = u.MD5 =
            c.extend({
              _doReset: function () {
                this._hash = new s.init([
                  1732584193, 4023233417, 2562383102, 271733878,
                ]);
              },
              _doProcessBlock: function (t, i) {
                for (var a = 0; 16 > a; a++) {
                  var s = t[(c = i + a)];
                  t[c] =
                    (16711935 & ((s << 8) | (s >>> 24))) |
                    (4278255360 & ((s << 24) | (s >>> 8)));
                }
                a = this._hash.words;
                var c = t[i + 0],
                  u = ((s = t[i + 1]), t[i + 2]),
                  f = t[i + 3],
                  l = t[i + 4],
                  p = t[i + 5],
                  d = t[i + 6],
                  v = t[i + 7],
                  y = t[i + 8],
                  g = t[i + 9],
                  m = t[i + 10],
                  b = t[i + 11],
                  _ = t[i + 12],
                  E = t[i + 13],
                  w = t[i + 14],
                  O = t[i + 15],
                  S = e(
                    (S = a[0]),
                    (k = a[1]),
                    (T = a[2]),
                    (x = a[3]),
                    c,
                    7,
                    h[0]
                  ),
                  x = e(x, S, k, T, s, 12, h[1]),
                  T = e(T, x, S, k, u, 17, h[2]),
                  k = e(k, T, x, S, f, 22, h[3]);
                (S = e(S, k, T, x, l, 7, h[4])),
                  (x = e(x, S, k, T, p, 12, h[5])),
                  (T = e(T, x, S, k, d, 17, h[6])),
                  (k = e(k, T, x, S, v, 22, h[7])),
                  (S = e(S, k, T, x, y, 7, h[8])),
                  (x = e(x, S, k, T, g, 12, h[9])),
                  (T = e(T, x, S, k, m, 17, h[10])),
                  (k = e(k, T, x, S, b, 22, h[11])),
                  (S = e(S, k, T, x, _, 7, h[12])),
                  (x = e(x, S, k, T, E, 12, h[13])),
                  (T = e(T, x, S, k, w, 17, h[14])),
                  (S = n(
                    S,
                    (k = e(k, T, x, S, O, 22, h[15])),
                    T,
                    x,
                    s,
                    5,
                    h[16]
                  )),
                  (x = n(x, S, k, T, d, 9, h[17])),
                  (T = n(T, x, S, k, b, 14, h[18])),
                  (k = n(k, T, x, S, c, 20, h[19])),
                  (S = n(S, k, T, x, p, 5, h[20])),
                  (x = n(x, S, k, T, m, 9, h[21])),
                  (T = n(T, x, S, k, O, 14, h[22])),
                  (k = n(k, T, x, S, l, 20, h[23])),
                  (S = n(S, k, T, x, g, 5, h[24])),
                  (x = n(x, S, k, T, w, 9, h[25])),
                  (T = n(T, x, S, k, f, 14, h[26])),
                  (k = n(k, T, x, S, y, 20, h[27])),
                  (S = n(S, k, T, x, E, 5, h[28])),
                  (x = n(x, S, k, T, u, 9, h[29])),
                  (T = n(T, x, S, k, v, 14, h[30])),
                  (S = r(
                    S,
                    (k = n(k, T, x, S, _, 20, h[31])),
                    T,
                    x,
                    p,
                    4,
                    h[32]
                  )),
                  (x = r(x, S, k, T, y, 11, h[33])),
                  (T = r(T, x, S, k, b, 16, h[34])),
                  (k = r(k, T, x, S, w, 23, h[35])),
                  (S = r(S, k, T, x, s, 4, h[36])),
                  (x = r(x, S, k, T, l, 11, h[37])),
                  (T = r(T, x, S, k, v, 16, h[38])),
                  (k = r(k, T, x, S, m, 23, h[39])),
                  (S = r(S, k, T, x, E, 4, h[40])),
                  (x = r(x, S, k, T, c, 11, h[41])),
                  (T = r(T, x, S, k, f, 16, h[42])),
                  (k = r(k, T, x, S, d, 23, h[43])),
                  (S = r(S, k, T, x, g, 4, h[44])),
                  (x = r(x, S, k, T, _, 11, h[45])),
                  (T = r(T, x, S, k, O, 16, h[46])),
                  (S = o(
                    S,
                    (k = r(k, T, x, S, u, 23, h[47])),
                    T,
                    x,
                    c,
                    6,
                    h[48]
                  )),
                  (x = o(x, S, k, T, v, 10, h[49])),
                  (T = o(T, x, S, k, w, 15, h[50])),
                  (k = o(k, T, x, S, p, 21, h[51])),
                  (S = o(S, k, T, x, _, 6, h[52])),
                  (x = o(x, S, k, T, f, 10, h[53])),
                  (T = o(T, x, S, k, m, 15, h[54])),
                  (k = o(k, T, x, S, s, 21, h[55])),
                  (S = o(S, k, T, x, y, 6, h[56])),
                  (x = o(x, S, k, T, O, 10, h[57])),
                  (T = o(T, x, S, k, d, 15, h[58])),
                  (k = o(k, T, x, S, E, 21, h[59])),
                  (S = o(S, k, T, x, l, 6, h[60])),
                  (x = o(x, S, k, T, b, 10, h[61])),
                  (T = o(T, x, S, k, u, 15, h[62])),
                  (k = o(k, T, x, S, g, 21, h[63]));
                (a[0] = (a[0] + S) | 0),
                  (a[1] = (a[1] + k) | 0),
                  (a[2] = (a[2] + T) | 0),
                  (a[3] = (a[3] + x) | 0);
              },
              _doFinalize: function () {
                var e = this._data,
                  n = e.words,
                  r = 8 * this._nDataBytes,
                  i = 8 * e.sigBytes;
                n[i >>> 5] |= 128 << (24 - (i % 32));
                var o = t.floor(r / 4294967296);
                for (
                  n[15 + (((i + 64) >>> 9) << 4)] =
                    (16711935 & ((o << 8) | (o >>> 24))) |
                    (4278255360 & ((o << 24) | (o >>> 8))),
                    n[14 + (((i + 64) >>> 9) << 4)] =
                      (16711935 & ((r << 8) | (r >>> 24))) |
                      (4278255360 & ((r << 24) | (r >>> 8))),
                    e.sigBytes = 4 * (n.length + 1),
                    this._process(),
                    n = (e = this._hash).words,
                    r = 0;
                  4 > r;
                  r++
                )
                  (i = n[r]),
                    (n[r] =
                      (16711935 & ((i << 8) | (i >>> 24))) |
                      (4278255360 & ((i << 24) | (i >>> 8))));
                return e;
              },
              clone: function () {
                var t = c.clone.call(this);
                return (t._hash = this._hash.clone()), t;
              },
            })),
            (a.MD5 = c._createHelper(u)),
            (a.HmacMD5 = c._createHmacHelper(u));
        })(Math),
        (function () {
          var t,
            e = i,
            n = (t = e.lib).Base,
            r = t.WordArray,
            o = ((t = e.algo).EvpKDF = n.extend({
              cfg: n.extend({ keySize: 4, hasher: t.MD5, iterations: 1 }),
              init: function (t) {
                this.cfg = this.cfg.extend(t);
              },
              compute: function (t, e) {
                for (
                  var n = (s = this.cfg).hasher.create(),
                    i = r.create(),
                    o = i.words,
                    a = s.keySize,
                    s = s.iterations;
                  o.length < a;

                ) {
                  c && n.update(c);
                  var c = n.update(t).finalize(e);
                  n.reset();
                  for (var u = 1; u < s; u++) (c = n.finalize(c)), n.reset();
                  i.concat(c);
                }
                return (i.sigBytes = 4 * a), i;
              },
            }));
          e.EvpKDF = function (t, e, n) {
            return o.create(n).compute(t, e);
          };
        })(),
        i.lib.Cipher ||
          (function (t) {
            var e = (d = i).lib,
              n = e.Base,
              r = e.WordArray,
              o = e.BufferedBlockAlgorithm,
              a = d.enc.Base64,
              s = d.algo.EvpKDF,
              c = (e.Cipher = o.extend({
                cfg: n.extend(),
                createEncryptor: function (t, e) {
                  return this.create(this._ENC_XFORM_MODE, t, e);
                },
                createDecryptor: function (t, e) {
                  return this.create(this._DEC_XFORM_MODE, t, e);
                },
                init: function (t, e, n) {
                  (this.cfg = this.cfg.extend(n)),
                    (this._xformMode = t),
                    (this._key = e),
                    this.reset();
                },
                reset: function () {
                  o.reset.call(this), this._doReset();
                },
                process: function (t) {
                  return this._append(t), this._process();
                },
                finalize: function (t) {
                  return t && this._append(t), this._doFinalize();
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function (t) {
                  return {
                    encrypt: function (e, n, r) {
                      return ("string" == typeof n ? v : p).encrypt(t, e, n, r);
                    },
                    decrypt: function (e, n, r) {
                      return ("string" == typeof n ? v : p).decrypt(t, e, n, r);
                    },
                  };
                },
              }));
            e.StreamCipher = c.extend({
              _doFinalize: function () {
                return this._process(!0);
              },
              blockSize: 1,
            });
            var u = (d.mode = {}),
              h = function (t, e, n) {
                var r = this._iv;
                r ? (this._iv = void 0) : (r = this._prevBlock);
                for (var i = 0; i < n; i++) t[e + i] ^= r[i];
              },
              f = (e.BlockCipherMode = n.extend({
                createEncryptor: function (t, e) {
                  return this.Encryptor.create(t, e);
                },
                createDecryptor: function (t, e) {
                  return this.Decryptor.create(t, e);
                },
                init: function (t, e) {
                  (this._cipher = t), (this._iv = e);
                },
              })).extend();
            (f.Encryptor = f.extend({
              processBlock: function (t, e) {
                var n = this._cipher,
                  r = n.blockSize;
                h.call(this, t, e, r),
                  n.encryptBlock(t, e),
                  (this._prevBlock = t.slice(e, e + r));
              },
            })),
              (f.Decryptor = f.extend({
                processBlock: function (t, e) {
                  var n = this._cipher,
                    r = n.blockSize,
                    i = t.slice(e, e + r);
                  n.decryptBlock(t, e),
                    h.call(this, t, e, r),
                    (this._prevBlock = i);
                },
              })),
              (u = u.CBC = f),
              (f = (d.pad = {}).Pkcs7 =
                {
                  pad: function (t, e) {
                    for (
                      var n,
                        i =
                          ((n = (n = 4 * e) - (t.sigBytes % n)) << 24) |
                          (n << 16) |
                          (n << 8) |
                          n,
                        o = [],
                        a = 0;
                      a < n;
                      a += 4
                    )
                      o.push(i);
                    (n = r.create(o, n)), t.concat(n);
                  },
                  unpad: function (t) {
                    t.sigBytes -= 255 & t.words[(t.sigBytes - 1) >>> 2];
                  },
                }),
              (e.BlockCipher = c.extend({
                cfg: c.cfg.extend({ mode: u, padding: f }),
                reset: function () {
                  c.reset.call(this);
                  var t = (e = this.cfg).iv,
                    e = e.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE)
                    var n = e.createEncryptor;
                  else (n = e.createDecryptor), (this._minBufferSize = 1);
                  this._mode = n.call(e, this, t && t.words);
                },
                _doProcessBlock: function (t, e) {
                  this._mode.processBlock(t, e);
                },
                _doFinalize: function () {
                  var t = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    t.pad(this._data, this.blockSize);
                    var e = this._process(!0);
                  } else (e = this._process(!0)), t.unpad(e);
                  return e;
                },
                blockSize: 4,
              }));
            var l = (e.CipherParams = n.extend({
                init: function (t) {
                  this.mixIn(t);
                },
                toString: function (t) {
                  return (t || this.formatter).stringify(this);
                },
              })),
              p =
                ((u = (d.format = {}).OpenSSL =
                  {
                    stringify: function (t) {
                      var e = t.ciphertext;
                      return (
                        (t = t.salt)
                          ? r
                              .create([1398893684, 1701076831])
                              .concat(t)
                              .concat(e)
                          : e
                      ).toString(a);
                    },
                    parse: function (t) {
                      var e = (t = a.parse(t)).words;
                      if (1398893684 == e[0] && 1701076831 == e[1]) {
                        var n = r.create(e.slice(2, 4));
                        e.splice(0, 4), (t.sigBytes -= 16);
                      }
                      return l.create({ ciphertext: t, salt: n });
                    },
                  }),
                (e.SerializableCipher = n.extend({
                  cfg: n.extend({ format: u }),
                  encrypt: function (t, e, n, r) {
                    r = this.cfg.extend(r);
                    var i = t.createEncryptor(n, r);
                    return (
                      (e = i.finalize(e)),
                      (i = i.cfg),
                      l.create({
                        ciphertext: e,
                        key: n,
                        iv: i.iv,
                        algorithm: t,
                        mode: i.mode,
                        padding: i.padding,
                        blockSize: t.blockSize,
                        formatter: r.format,
                      })
                    );
                  },
                  decrypt: function (t, e, n, r) {
                    return (
                      (r = this.cfg.extend(r)),
                      (e = this._parse(e, r.format)),
                      t.createDecryptor(n, r).finalize(e.ciphertext)
                    );
                  },
                  _parse: function (t, e) {
                    return "string" == typeof t ? e.parse(t, this) : t;
                  },
                }))),
              d = ((d.kdf = {}).OpenSSL = {
                execute: function (t, e, n, i) {
                  return (
                    i || (i = r.random(8)),
                    (t = s.create({ keySize: e + n }).compute(t, i)),
                    (n = r.create(t.words.slice(e), 4 * n)),
                    (t.sigBytes = 4 * e),
                    l.create({ key: t, iv: n, salt: i })
                  );
                },
              }),
              v = (e.PasswordBasedCipher = p.extend({
                cfg: p.cfg.extend({ kdf: d }),
                encrypt: function (t, e, n, r) {
                  return (
                    (n = (r = this.cfg.extend(r)).kdf.execute(
                      n,
                      t.keySize,
                      t.ivSize
                    )),
                    (r.iv = n.iv),
                    (t = p.encrypt.call(this, t, e, n.key, r)).mixIn(n),
                    t
                  );
                },
                decrypt: function (t, e, n, r) {
                  return (
                    (r = this.cfg.extend(r)),
                    (e = this._parse(e, r.format)),
                    (n = r.kdf.execute(n, t.keySize, t.ivSize, e.salt)),
                    (r.iv = n.iv),
                    p.decrypt.call(this, t, e, n.key, r)
                  );
                },
              }));
          })(),
        (function () {
          for (
            var t = i,
              e = t.lib.BlockCipher,
              n = t.algo,
              r = [],
              o = [],
              a = [],
              s = [],
              c = [],
              u = [],
              h = [],
              f = [],
              l = [],
              p = [],
              d = [],
              v = 0;
            256 > v;
            v++
          )
            d[v] = 128 > v ? v << 1 : (v << 1) ^ 283;
          var y = 0,
            g = 0;
          for (v = 0; 256 > v; v++) {
            var m =
              ((m = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4)) >>> 8) ^
              (255 & m) ^
              99;
            (r[y] = m), (o[m] = y);
            var b = d[y],
              _ = d[b],
              E = d[_],
              w = (257 * d[m]) ^ (16843008 * m);
            (a[y] = (w << 24) | (w >>> 8)),
              (s[y] = (w << 16) | (w >>> 16)),
              (c[y] = (w << 8) | (w >>> 24)),
              (u[y] = w),
              (w = (16843009 * E) ^ (65537 * _) ^ (257 * b) ^ (16843008 * y)),
              (h[m] = (w << 24) | (w >>> 8)),
              (f[m] = (w << 16) | (w >>> 16)),
              (l[m] = (w << 8) | (w >>> 24)),
              (p[m] = w),
              y ? ((y = b ^ d[d[d[E ^ b]]]), (g ^= d[d[g]])) : (y = g = 1);
          }
          var O = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
          n = n.AES = e.extend({
            _doReset: function () {
              for (
                var t = (n = this._key).words,
                  e = n.sigBytes / 4,
                  n = 4 * ((this._nRounds = e + 6) + 1),
                  i = (this._keySchedule = []),
                  o = 0;
                o < n;
                o++
              )
                if (o < e) i[o] = t[o];
                else {
                  var a = i[o - 1];
                  o % e
                    ? 6 < e &&
                      4 == o % e &&
                      (a =
                        (r[a >>> 24] << 24) |
                        (r[(a >>> 16) & 255] << 16) |
                        (r[(a >>> 8) & 255] << 8) |
                        r[255 & a])
                    : ((a =
                        (r[(a = (a << 8) | (a >>> 24)) >>> 24] << 24) |
                        (r[(a >>> 16) & 255] << 16) |
                        (r[(a >>> 8) & 255] << 8) |
                        r[255 & a]),
                      (a ^= O[(o / e) | 0] << 24)),
                    (i[o] = i[o - e] ^ a);
                }
              for (t = this._invKeySchedule = [], e = 0; e < n; e++)
                (o = n - e),
                  (a = e % 4 ? i[o] : i[o - 4]),
                  (t[e] =
                    4 > e || 4 >= o
                      ? a
                      : h[r[a >>> 24]] ^
                        f[r[(a >>> 16) & 255]] ^
                        l[r[(a >>> 8) & 255]] ^
                        p[r[255 & a]]);
            },
            encryptBlock: function (t, e) {
              this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, r);
            },
            decryptBlock: function (t, e) {
              var n = t[e + 1];
              (t[e + 1] = t[e + 3]),
                (t[e + 3] = n),
                this._doCryptBlock(t, e, this._invKeySchedule, h, f, l, p, o),
                (n = t[e + 1]),
                (t[e + 1] = t[e + 3]),
                (t[e + 3] = n);
            },
            _doCryptBlock: function (t, e, n, r, i, o, a, s) {
              for (
                var c = this._nRounds,
                  u = t[e] ^ n[0],
                  h = t[e + 1] ^ n[1],
                  f = t[e + 2] ^ n[2],
                  l = t[e + 3] ^ n[3],
                  p = 4,
                  d = 1;
                d < c;
                d++
              ) {
                var v =
                    r[u >>> 24] ^
                    i[(h >>> 16) & 255] ^
                    o[(f >>> 8) & 255] ^
                    a[255 & l] ^
                    n[p++],
                  y =
                    r[h >>> 24] ^
                    i[(f >>> 16) & 255] ^
                    o[(l >>> 8) & 255] ^
                    a[255 & u] ^
                    n[p++],
                  g =
                    r[f >>> 24] ^
                    i[(l >>> 16) & 255] ^
                    o[(u >>> 8) & 255] ^
                    a[255 & h] ^
                    n[p++];
                (l =
                  r[l >>> 24] ^
                  i[(u >>> 16) & 255] ^
                  o[(h >>> 8) & 255] ^
                  a[255 & f] ^
                  n[p++]),
                  (u = v),
                  (h = y),
                  (f = g);
              }
              (v =
                ((s[u >>> 24] << 24) |
                  (s[(h >>> 16) & 255] << 16) |
                  (s[(f >>> 8) & 255] << 8) |
                  s[255 & l]) ^
                n[p++]),
                (y =
                  ((s[h >>> 24] << 24) |
                    (s[(f >>> 16) & 255] << 16) |
                    (s[(l >>> 8) & 255] << 8) |
                    s[255 & u]) ^
                  n[p++]),
                (g =
                  ((s[f >>> 24] << 24) |
                    (s[(l >>> 16) & 255] << 16) |
                    (s[(u >>> 8) & 255] << 8) |
                    s[255 & h]) ^
                  n[p++]),
                (l =
                  ((s[l >>> 24] << 24) |
                    (s[(u >>> 16) & 255] << 16) |
                    (s[(h >>> 8) & 255] << 8) |
                    s[255 & f]) ^
                  n[p++]),
                (t[e] = v),
                (t[e + 1] = y),
                (t[e + 2] = g),
                (t[e + 3] = l);
            },
            keySize: 8,
          });
          t.AES = e._createHelper(n);
        })(),
        (i.pad.Iso10126 = {
          pad: function (t, e) {
            var n = (n = 4 * e) - (t.sigBytes % n);
            t.concat(i.lib.WordArray.random(n - 1)).concat(
              i.lib.WordArray.create([n << 24], 1)
            );
          },
          unpad: function (t) {
            t.sigBytes -= 255 & t.words[(t.sigBytes - 1) >>> 2];
          },
        }),
        (t.exports = i);
    },
    QxN7: function (t, e, n) {
      n.r(e);
      var r = n("/QeK");
      n.d(e, "platform", function () {
        return r.a;
      });
      var i = n("kSnQ");
      n.d(e, "teeEnv", function () {
        return i.n;
      }),
        n.d(e, "isWeb", function () {
          return i.i;
        }),
        n.d(e, "isXhsApp", function () {
          return i.j;
        }),
        n.d(e, "isNormalBrower", function () {
          return i.h;
        }),
        n.d(e, "globalReader", function () {
          return i.g;
        }),
        n.d(e, "cache", function () {
          return i.b;
        }),
        n.d(e, "baseRequest", function () {
          return i.a;
        }),
        n.d(e, "request", function () {
          return i.l;
        }),
        n.d(e, "safeLog", function () {
          return i.m;
        }),
        n.d(e, "getPagePath", function () {
          return i.e;
        }),
        n.d(e, "getPageURL", function () {
          return i.f;
        }),
        n.d(e, "getErrorMsg", function () {
          return i.d;
        }),
        n.d(e, "getAppId", function () {
          return i.c;
        }),
        n.d(e, "updateAppId", function () {
          return i.o;
        }),
        n.d(e, "parseToCloudUser", function () {
          return i.k;
        });
      var o = n("fYK9");
      n.d(e, "emitUserAuthSync", function () {
        return o.b;
      }),
        n.d(e, "onUserAuthSync", function () {
          return o.d;
        }),
        n.d(e, "emitUserAuthSuccess", function () {
          return o.a;
        }),
        n.d(e, "onUserAuthSuccess", function () {
          return o.c;
        });
      var a = n("HnuB");
      for (var s in a)
        [
          "default",
          "hooks",
          "constants",
          "platform",
          "teeEnv",
          "isWeb",
          "isXhsApp",
          "isNormalBrower",
          "globalReader",
          "cache",
          "baseRequest",
          "request",
          "safeLog",
          "getPagePath",
          "getPageURL",
          "getErrorMsg",
          "getAppId",
          "updateAppId",
          "parseToCloudUser",
          "emitUserAuthSync",
          "onUserAuthSync",
          "emitUserAuthSuccess",
          "onUserAuthSuccess",
        ].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var c = n("fLr7");
      n.d(e, "AuthButtonType", function () {
        return c.c;
      }),
        n.d(e, "AuthDialogType", function () {
          return c.d;
        }),
        n.d(e, "UnionAuthType", function () {
          return c.r;
        }),
        n.d(e, "CACHE_AUTH_DATA", function () {
          return c.f;
        }),
        n.d(e, "CACHE_BEHAVIOR_CRYPTO_INFO", function () {
          return c.g;
        }),
        n.d(e, "CACHE_LOGIN_TICKET_INFO", function () {
          return c.h;
        }),
        n.d(e, "CACHE_REPORT_PRIVACY_AUTH", function () {
          return c.i;
        }),
        n.d(e, "CACHE_API_NEED_PRIVACY_AUTH", function () {
          return c.e;
        }),
        n.d(e, "CACHE_REQ_HOOK_INIT", function () {
          return c.j;
        }),
        n.d(e, "USER_AUTH_SYNC_EVENT", function () {
          return c.q;
        }),
        n.d(e, "USER_AUTH_SUCCESS_EVENT", function () {
          return c.p;
        }),
        n.d(e, "TEE_LOGIN_SILENT_BEFORE_EVENT", function () {
          return c.n;
        }),
        n.d(e, "TEE_LOGIN_YZ_BEFORE_EVENT", function () {
          return c.o;
        }),
        n.d(e, "TEE_LOGIN_PLAT_SUCCESS_EVENT", function () {
          return c.m;
        }),
        n.d(e, "TEE_LOGIN_END_EVENT", function () {
          return c.l;
        }),
        n.d(e, "MobileVerifyType", function () {
          return c.k;
        }),
        n.d(e, "AUTH_BTN_CLICK_AFTER_HOOK", function () {
          return c.a;
        }),
        n.d(e, "AUTH_POPUP_SHOW_AFTER_HOOK", function () {
          return c.b;
        });
      var u = n("dvf8");
      n.d(e, "hooks", function () {
        return u;
      });
      var h = n("c7Bu");
      n.d(e, "constants", function () {
        return h;
      });
    },
    Qzzd: function (t, e, n) {
      function r() {
        var t = 0;
        return new Promise(function (e, r) {
          n.e("packages/async-main/chunk")
            .then(n.bind(null, "plPE"))
            .then(function (n) {
              return (function e(n, r, i) {
                return n.instance
                  ? r(n)
                  : t > 2
                  ? i("search hummer instance timeout")
                  : ((t += 1),
                    void setTimeout(function () {
                      return e(n, r, i);
                    }, 20));
              })(n.Hummer, e, r);
            });
        });
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return s;
        });
      var i = function (t, e) {
          r().then(function (n) {
            return n.capture(t, e);
          });
        },
        o = function (t) {
          r().then(function (e) {
            return e.setEnv(t);
          });
        },
        a = function (t) {
          r().then(function (e) {
            return e.setExtra(t);
          });
        },
        s = function (t) {
          r().then(function (e) {
            return e.setOptions(t);
          });
        };
    },
    Sipi: function (t, e, n) {
      n.d(e, "d", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        });
      var r = n("9ZMt");
      function i(t, e) {
        return r.default.$native.setStorageSync(t, e);
      }
      function o(t) {
        var e = r.default.$native.getStorageSync(t);
        if (
          "" === e &&
          -1 === r.default.$native.getStorageInfoSync().keys.indexOf(t)
        )
          return null;
        return e;
      }
      function a(t) {
        return r.default.$native.removeStorageSync(t);
      }
      function s() {
        return r.default.$native.clearStorageSync();
      }
    },
    Sx60: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.formatProtocolCode = void 0);
      var r = n("bb6g");
      e.formatProtocolCode = function (t) {
        return t ? r.__spreadArrays(t).sort().join(",") : "";
      };
    },
    SyLL: function (t, e, n) {
      n.d(e, "c", function () {
        return y;
      }),
        n.d(e, "b", function () {
          return g;
        }),
        n.d(e, "d", function () {
          return m;
        }),
        n.d(e, "a", function () {
          return b;
        });
      var r = n("E6qs"),
        i = n("bb6g"),
        o = (function () {
          function t() {
            this.now = Date.now();
          }
          return (
            (t.prototype.getPageExposureTime = function () {
              return { start: this.now, now: Date.now() };
            }),
            t
          );
        })(),
        a = (function () {
          function t() {
            (this.gyroscopeTrack = []), (this.speedTrack = []);
          }
          return (
            (t.prototype.handlerGyroscope = function (t) {
              var e = t.x,
                n = t.y,
                r = t.z;
              this.gyroscopeTrack.push({ x: e, y: n, z: r, t: Date.now() });
            }),
            (t.prototype.handlerSpeed = function (t) {
              var e = t.x,
                n = t.y,
                r = t.z;
              this.speedTrack.push({ x: e, y: n, z: r, t: Date.now() });
            }),
            (t.prototype.getAndClearGyroscopeTrack = function () {
              var t = this.gyroscopeTrack;
              return (this.gyroscopeTrack = []), t;
            }),
            (t.prototype.getAndClearSpeedTrack = function () {
              var t = this.speedTrack;
              return (this.speedTrack = []), t;
            }),
            (t.prototype.startRecordGyroscopeTrack = function () {}),
            (t.prototype.startRecordSpeedTrack = function () {}),
            t
          );
        })(),
        s = (function () {
          function t() {
            (this.clickAreaData = []),
              (this.mouseTrackData = []),
              (this.mouseData = {}),
              (this.clickAreaData = []);
          }
          return (
            (t.prototype.getAndClearMouseTrack = function () {
              if (
                !Array.isArray(this.mouseTrackData) ||
                0 === this.mouseTrackData.length
              )
                return [];
              var t = this.mouseTrackData.reduce(function (t, e, n) {
                if (0 === n) return [e];
                var r = t.slice(-1).pop();
                return Object(i.__spreadArrays)(t, [
                  {
                    x: Math.ceil(e.x - r.x),
                    y: Math.ceil(e.y - r.y),
                    t: Math.ceil(e.t - r.t),
                  },
                ]);
              }, []);
              return (this.mouseTrackData = []), t;
            }),
            (t.prototype.startRecordClickArea = function () {
              var t = this;
              window.addEventListener(
                "click",
                function (e) {
                  if (Array.isArray(e.path) && e.path.length > 0) {
                    for (var n = e.path, r = void 0, i = []; (r = n.pop()); )
                      "function" == typeof r.getBoundingClientRect &&
                        i.push(
                          JSON.parse(JSON.stringify(r.getBoundingClientRect()))
                        );
                    var o = window.innerHeight,
                      a = window.innerWidth;
                    i.push({
                      bottom: o,
                      height: o,
                      left: 0,
                      right: a,
                      top: 0,
                      width: a,
                      x: 0,
                      y: 0,
                    }),
                      (t.clickAreaData = i.reverse());
                  }
                },
                !0
              );
            }),
            (t.prototype.startRecordClick = function () {
              var t = this;
              window.addEventListener(
                "mousedown",
                function (e) {
                  t.mouseData.down = { x: e.pageX, y: e.pageY, t: Date.now() };
                },
                !0
              ),
                window.addEventListener(
                  "mouseup",
                  function (e) {
                    t.mouseData.up = { x: e.pageX, y: e.pageY, t: Date.now() };
                  },
                  !0
                );
            }),
            (t.prototype.startRecordMouseTrack = function () {
              var t = this;
              window.addEventListener(
                "mousemove",
                function (e) {
                  t.mouseTrackData.push({
                    x: e.pageX,
                    y: e.pageY,
                    t: Date.now(),
                  });
                },
                !0
              );
            }),
            (t.prototype.startRecordListener = function () {
              this.startRecordClickArea(),
                this.startRecordClick(),
                this.startRecordMouseTrack();
            }),
            t
          );
        })(),
        c = (function () {
          function t() {
            this.touchData = {};
          }
          return (
            (t.prototype.startRecordTouchStart = function (t) {
              var e = Array.prototype.slice.call(t.touches).map(function (t) {
                return { x: t.pageX, y: t.pageY, force: t.force };
              });
              this.touchData.down = { touches: e, t: Date.now() };
            }),
            (t.prototype.startRecordTouchEnd = function (t) {
              var e = Array.prototype.slice
                .call(t.changedTouches)
                .map(function (t) {
                  return { x: t.pageX, y: t.pageY, force: t.force };
                });
              this.touchData.up = { touches: e, t: Date.now() };
            }),
            t
          );
        })(),
        u = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return Object.assign(e, new a(), new s(), new c()), e;
          }
          return Object(i.__extends)(e, t), e;
        })(o),
        h = u,
        f = function (t) {
          Object.getOwnPropertyNames(t).forEach(function (e) {
            u.prototype[e] = t[e];
          });
        };
      f(a.prototype),
        f(s.prototype),
        f(c.prototype),
        (u.prototype.constructor = u);
      var l = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return e.startRecordGyroscopeTrack(), e.startRecordSpeedTrack(), e;
          }
          return (
            Object(i.__extends)(e, t),
            (e.prototype.startRecordGyroscopeTrack = function () {
              var t = this,
                e = Object(r.f)();
              e.startGyroscope &&
                e.startGyroscope({
                  interval: "ui",
                  success: function () {
                    e.onGyroscopeChange(function (e) {
                      var n = e.x,
                        r = e.y,
                        i = e.z;
                      return t.handlerGyroscope({ x: n, y: r, z: i });
                    });
                  },
                  fail: function () {},
                });
            }),
            (e.prototype.startRecordSpeedTrack = function () {
              var t = this,
                e = Object(r.f)();
              e.startAccelerometer &&
                e.startAccelerometer({
                  interval: "ui",
                  success: function () {
                    e.onAccelerometerChange(function (e) {
                      var n = e.x,
                        r = e.y,
                        i = e.z;
                      return t.handlerSpeed({ x: n, y: r, z: i });
                    });
                  },
                  fail: function () {},
                });
            }),
            (e.prototype.getUserBehaviorData = function () {
              return {
                tempTouchData: this.touchData,
                tempGyroscopeData: this.getAndClearGyroscopeTrack(),
                tempSpeedData: this.getAndClearSpeedTrack(),
                tempPageData: this.getPageExposureTime(),
              };
            }),
            e
          );
        })(h),
        p = n("QxN7"),
        d = n("9ZMt"),
        v = p.platform.authLogger.logSkynet,
        y = (function () {
          function t() {}
          return (
            (t.prototype.behaviorInit = function (t) {
              if (!t) throw Error("行为组件实例为必传");
              (this.comInstance = t),
                (this.drag = new r.a()),
                (this.clickOrTouch = new l());
            }),
            (t.prototype.behaviorVerify = function (t) {
              var e = t.bizType,
                n = t.bizData,
                r = t.onSuccess,
                i = t.onFail,
                o = t.onError,
                a = t.onCancel;
              if (void 0 === e) throw Error("业务线类型 bizType 为必传");
              if (
                (v("行为组件behaviorVerify调用：", { bizType: e, bizData: n }),
                !this.comInstance)
              )
                throw Error("业务线类型 bizType 为必传");
              (this.bizType = e),
                (this.bizData = n),
                (this.onSuccess = r),
                (this.onFail = i),
                (this.onError = o),
                (this.onCancel = a),
                this.comInstance.getToken();
            }),
            (t.prototype.behaviorHide = function () {
              this.comInstance.hide();
            }),
            (t.getInstance = function () {
              var e = d.default.getGlobal("behaviorInstance");
              return (
                e ||
                ((e = new t()), d.default.setGlobal("behaviorInstance", e), e)
              );
            }),
            t
          );
        })().getInstance();
      function g(t) {
        y.behaviorInit(t);
      }
      function m(t) {
        y.behaviorVerify(t);
      }
      function b() {
        y.behaviorHide();
      }
    },
    Tewj: function (t, e, n) {
      n.r(e);
      var r = n("9ZMt"),
        i = new ((function () {
          function t(t) {
            (this.namespace = ""),
              t && (this.namespace = t),
              (this.getStorage = function () {
                return r.default.getGlobal("tee-event") || {};
              }),
              (this.setStorage = function (t) {
                return r.default.setGlobal("tee-event", t);
              });
          }
          var e = t.prototype;
          return (
            (e.getKey = function (t) {
              return this.namespace + "__" + t;
            }),
            (e.on = function (t, e, n) {
              var r = this.getKey(t),
                i = this.getStorage();
              return (
                (i[r] = i[r] || []),
                i[r].push({ callback: e, context: n }),
                this.setStorage(i),
                this
              );
            }),
            (e.once = function (t, e, n) {
              var r = this;
              return this.on(
                t,
                function i() {
                  for (
                    var o = arguments.length, a = new Array(o), s = 0;
                    s < o;
                    s++
                  )
                    a[s] = arguments[s];
                  e.call.apply(e, [n].concat(a)), r.off(t, i, n);
                },
                n
              );
            }),
            (e.off = function (t, e, n) {
              var r = this.getKey(t),
                i = this.getStorage();
              if (!Array.isArray(i[r])) return this;
              if (void 0 === e && void 0 === n) delete i[r];
              else if (void 0 === n) {
                var o;
                i[r] =
                  (null == (o = i[r])
                    ? void 0
                    : o.filter(function (t) {
                        return t.callback !== e;
                      })) || [];
              } else {
                var a;
                i[r] =
                  (null == (a = i[r])
                    ? void 0
                    : a.filter(function (t) {
                        return t.callback !== e || t.context !== n;
                      })) || [];
              }
              return this.setStorage(i), this;
            }),
            (e.trigger = function (t) {
              for (
                var e,
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  i = 1;
                i < n;
                i++
              )
                r[i - 1] = arguments[i];
              var o = this.getKey(t),
                a = this.getStorage();
              return Array.isArray(a[o])
                ? (null == (e = a[o]) ||
                    e.forEach(function (t) {
                      try {
                        var e;
                        (e = t.callback).call.apply(e, [t.context].concat(r));
                      } catch (t) {}
                    }),
                  this)
                : this;
            }),
            t
          );
        })())();
      e.default = i;
    },
    Tr3L: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("h+Rz");
      function i() {
        return r.a.getNetworkType();
      }
    },
    U0uK: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("Fcif"),
        i = n("9ZMt");
      var o = {};
      function a() {
        if (o.getExtConfigSync) return o.getExtConfigSync;
        var t = (o.getExtConfigSync = i.default.$native.getExtConfigSync());
        if (t.tabBar) {
          var e = t.tabBar;
          e.color && ((e.textColor = e.color), delete e.color);
          var n = e.list;
          n &&
            (delete e.list,
            (e.items = n.map(function (t) {
              return Object(r.a)(
                {
                  pagePath: t.pagePath,
                  name: t.text,
                  icon: t.iconPath,
                  activeIcon: t.selectedIconPath,
                },
                ((e = t),
                (n = ["pagePath", "text", "iconPath", "selectedIconPath"]),
                Object.keys(e).reduce(function (t, r) {
                  return n.includes(r) || (t[r] = e[r]), t;
                }, {}))
              );
              var e, n;
            })));
        }
        return o.getExtConfigSync;
      }
    },
    "US/N": function (t, e, n) {
      n.r(e),
        n.d(e, "beforeHooks", function () {
          return T;
        }),
        n.d(e, "afterHooks", function () {
          return k;
        }),
        n.d(e, "flash", function () {
          return D;
        }),
        n.d(e, "setRequestDep", function () {
          return g;
        }),
        n.d(e, "getRequestDep", function () {
          return v;
        }),
        n.d(e, "setKdtId", function () {
          return m;
        }),
        n.d(e, "updateShop", function () {
          return b;
        }),
        n.d(e, "updateToken", function () {
          return _;
        }),
        n.d(e, "default", function () {
          return U;
        }),
        n.d(e, "requestV2", function () {
          return F;
        }),
        n.d(e, "requestUseCdn", function () {
          return H;
        }),
        n.d(e, "requestByCache", function () {
          return q;
        }),
        n.d(e, "carmen", function () {
          return V;
        }),
        n.d(e, "baymax", function () {
          return G;
        });
      var r = n("Fcif"),
        i = n("sRXO"),
        o = n("2wjL"),
        a = {
          origin: "h5",
          method: "GET",
          header: { "content-type": "application/json" },
        },
        s = {
          origin: "carmen",
          header: { "content-type": "application/x-www-form-urlencoded" },
        },
        c = {
          origin: "baymax",
          header: { "content-type": "application/x-www-form-urlencoded" },
        },
        u = {
          cashier: "https://cashier.youzan.com",
          uic: "https://uic.youzan.com",
          carmen: "https://open.youzan.com",
          h5: "https://h5.youzan.com",
          yzh5: "https://h5.youzan.com",
          h5m: "https://h5.m.youzan.com",
          pc: "https://www.youzan.com",
          qiniu: "https://img01.yzcdn.cn",
          money: "https://money.youzan.com",
          guang: "https://g.youzan.com",
          baymax: "https://open.youzan.com/bifrost",
          sp: "https://haibao.xiaodian.com",
          ph: "https://wang.xiaodian.com",
          mars: "https://maijia.youzan.com",
          qbox: "https://up.qbox.me",
        },
        h = n("eijD"),
        f = n("NthX"),
        l = n.n(f),
        p = n("akjn"),
        d = n("KrsW").b.useGlobal("tee-biz-request/depConfig", {
          appId: "",
          version: "",
          kdtId: 0,
          qtt_party_id: 0,
          qtt_shop: 0,
          offlineId: "",
          accessToken: "",
          tokenTime: 0,
          sessionId: "",
          retailScene: "",
          bizEnv: "",
        }),
        v = d[0],
        y = d[1],
        g = function (t) {
          return y(Object(r.a)({}, v(), t));
        },
        m = function (t) {
          return g({ kdtId: t });
        },
        b = function (t) {
          return g(t);
        },
        _ = function (t) {
          return g({
            tokenTime: Date.now(),
            accessToken: t.accessToken,
            sessionId: t.sessionId,
          });
        },
        E = n("3tAa");
      function w(t) {
        return "function" == typeof t;
      }
      function O(t) {
        return (
          (function (t) {
            return null !== t && "object" == typeof t && !Array.isArray(t);
          })(t) &&
          w(t.then) &&
          w(t.catch)
        );
      }
      function S(t) {
        return O(t) ? t : Promise.resolve(t);
      }
      var x = (function () {
          function t(t) {
            var e = Object(E.a)(t, []),
              n = e[0],
              r = e[1];
            (this.get = n), (this.set = r);
          }
          var e = t.prototype;
          return (
            (e.remove = function (t) {
              var e = this.get(),
                n = e.indexOf(t);
              n > -1 && (e.splice(n, 1), this.set(e));
            }),
            (e.add = function (t) {
              var e = this;
              return (
                this.set([].concat(this.get(), [t])),
                function () {
                  return e.remove(t);
                }
              );
            }),
            (e.exec = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return this.get().reduce(function (t, n) {
                return t.then(function (t) {
                  return !0 === t ? S(n.apply(void 0, e)) : Promise.resolve(!1);
                });
              }, Promise.resolve(!0));
            }),
            t
          );
        })(),
        T = new x("tee-biz-request/hook"),
        k = new x("tee-biz-request/after-hook"),
        P = Object(E.a)("tee-biz-request/queue", []),
        A = P[0],
        C = P[1];
      function j(t) {
        C([].concat(A(), [t]));
      }
      function D() {
        var t = A();
        return (
          C([]),
          Promise.all(
            t.map(function (t) {
              return t();
            })
          )
        );
      }
      function I() {
        return (I = Object(h.a)(
          l.a.mark(function t(e) {
            var n, r;
            return l.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (((n = v()), (r = n.dmc) && e)) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", "");
                  case 3:
                    return t.abrupt(
                      "return",
                      r.domain
                        .readDomain(e, { priorityCache: !0 })
                        .then(function (t) {
                          return "https://" + t.domain;
                        })
                        .catch(function () {
                          return "";
                        })
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var R = { origin: "carmen", pathname: "", query: {} };
      var N = function (t) {
        var e = ((t = Object(r.a)({}, R, t)).pathname || "").startsWith("/"),
          n = t,
          i = n.origin,
          a = n.domain,
          s = "";
        a ? (s = a) : i && i in u && (s = u[i]);
        var c = s + (e ? "" : "/") + t.pathname;
        return o.a.add(c, t.query);
      };
      function M(t) {
        var e,
          n,
          i = getApp && getApp();
        i &&
          ((t.enableHttp2 =
            null == i || null == (e = i.globalData) ? void 0 : e.enableHttp2),
          (t.enableCdn =
            null == i || null == (n = i.globalData) ? void 0 : n.enableCdn));
        !t.enableCdn &&
          t.options &&
          t.options.useCdn &&
          "h5m" === t.origin &&
          (t.origin = "h5");
        var o = v();
        return Promise.resolve(
          t.domain
            ? t.domain
            : (function (t) {
                return I.apply(this, arguments);
              })(t.origin)
        ).then(function (e) {
          return (
            "function" == typeof t.beforeSend
              ? Promise.all([T.exec(t, o), t.beforeSend(t, o)]).then(function (
                  t
                ) {
                  var e = t[0],
                    n = t[1];
                  return e && n;
                })
              : T.exec(t, o)
          ).then(function (n) {
            var i = Object(r.a)({}, t, { domain: e });
            return n
              ? Object(p.a)(
                  (function (t) {
                    var e = t.origin,
                      n = t.domain,
                      i = t.method,
                      o = t.query,
                      a = void 0 === o ? {} : o,
                      s = t.data,
                      c = void 0 === s ? {} : s,
                      u = t.header,
                      h = void 0 === u ? {} : u,
                      f = t.enableHttp2,
                      l = void 0 !== f && f,
                      p = t.path,
                      d = void 0 === p ? "" : p,
                      v = t.options,
                      y = void 0 === v ? {} : v;
                    if (!e) throw new Error("所有请求必须指定 origin:" + d);
                    if (y.useCdn && "h5m" === e)
                      try {
                        var g = JSON.parse(h["Extra-Data"] || "{}");
                        delete g.sid, delete g.uuid, delete a.access_token;
                        var m = Object(r.a)({}, h, {
                            "Extra-Data": JSON.stringify(g),
                          }),
                          b = Object(r.a)({}, a);
                        return (
                          delete b.access_token,
                          {
                            url: N({
                              origin: e,
                              domain: n,
                              pathname: d,
                              query: b,
                            }),
                            data: c,
                            header: m,
                            enableHttp2: l,
                            method: (i || "GET").toUpperCase(),
                          }
                        );
                      } catch (t) {}
                    return {
                      url: N({ origin: e, domain: n, pathname: d, query: a }),
                      data: c,
                      header: h,
                      enableHttp2: l,
                      method: (i || "GET").toUpperCase(),
                    };
                  })(i)
                ).then(
                  (function () {
                    var e = Object(h.a)(
                      l.a.mark(function e(n) {
                        return l.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), k.exec(t, n);
                              case 2:
                                if (!e.sent) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", n);
                              case 5:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (t) {
                                    j(function () {
                                      M(i).then(t);
                                    });
                                  })
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
              : new Promise(function (t) {
                  j(function () {
                    M(i).then(t);
                  });
                });
          });
        });
      }
      var L = n("9ZMt").default.getEnv(),
        B = {
          ant: "alipay-miniapp",
          qq: "qq-miniprogram",
          weapp: "weapp-miniprogram",
          xhs: "xhs-miniprogram",
          ks: "ks-miniprogram",
        }[L],
        z = {
          ant: "aliapp",
          qq: "qqapp",
          weapp: "weapp",
          xhs: "xhsapp",
          ks: "ksapp",
        }[L];
      T.add(function (t, e) {
        (t.query = t.query || {}), (t.header = t.header || {});
        var n = (null == t ? void 0 : t.config) || {},
          r = n.noQuery,
          i = n.noStoreId,
          o = t.query,
          a = t.data,
          s = void 0 === a ? {} : a,
          c = t.header,
          u = (t.method || "GET").toUpperCase(),
          h = ("GET" !== u && "DELETE" !== u) || !s.kdt_id;
        i || (o.store_id = e.offlineId || ""),
          r ||
            ((o.app_id = e.appId),
            h && (o.kdt_id = s.kdt_id || o.kdt_id || e.kdtId || ""),
            (o.access_token = e.accessToken || ""),
            e.retailScene && (o.retail_source = e.retailScene),
            e.qtt_shop && (o.qtt_shop = e.qtt_shop),
            e.qtt_party_id && (o.qtt_party_id = e.qtt_party_id));
        var f = {
          sid: e.sessionId,
          version: e.version,
          clientType: B,
          client: z,
          bizEnv: e.bizEnv,
        };
        return (
          e.bizScene && (f.bizScene = e.bizScene),
          (c["Extra-Data"] = JSON.stringify(f)),
          !0
        );
      });
      function U(t) {
        return M(Object(r.a)({}, a, t)).then(function (e) {
          var n = null == e ? void 0 : e.data,
            r = (t || {}).options,
            i = void 0 === r ? {} : r;
          if (n) {
            var o = n.code,
              a = n.data;
            if (0 === o) return i.rawResponse ? n : a;
          }
          if (t.enableHttpRaw) throw e;
          throw n;
        });
      }
      function F(t) {
        return void 0 === t.enableHttpRaw && (t.enableHttpRaw = !0), U(t);
      }
      function H(t) {
        return U(
          (function (t) {
            return (
              (t.options = t.options || {}),
              (t.options.useCdn = !0),
              (t.origin = "h5m"),
              t
            );
          })(t)
        );
      }
      function q(t) {
        var e = t.path,
          n = void 0 === e ? "" : e,
          r = t.query,
          a = void 0 === r ? {} : r,
          s = t.cacheConfig,
          c = void 0 === s ? {} : s,
          u = t.method,
          h = o.a.add(n, a),
          f = c.forceUpdate,
          l = c.expire;
        return "GET" === u
          ? Object(i.a)(
              h,
              function () {
                return U(t);
              },
              { forceUpdate: f, expire: l }
            )
          : U(t);
      }
      function V(t) {
        if (!t.api) throw new Error("Carmen 接口必须提供 api");
        return M(
          Object(r.a)({}, s, t, {
            path: ("/api/oauthentry/" + t.api).replace("//", "/"),
          })
        ).then(function (t) {
          var e = null == t ? void 0 : t.data;
          if (
            !(
              void 0 !== (null == e ? void 0 : e.response) &&
              !(null != e && e.error_response)
            )
          )
            throw null == e ? void 0 : e.error_response;
          return null == e ? void 0 : e.response;
        });
      }
      function G(t) {
        if (!t.api) throw new Error("彩虹桥接口必须提供 api");
        return M(
          Object(r.a)({}, c, t, { path: ("/api/" + t.api).replace("//", "/") })
        ).then(function (t) {
          var e = null == t ? void 0 : t.data;
          if (!(!0 === (null == e ? void 0 : e.success)))
            throw null != e && e.gw_err_resp
              ? { code: e.gw_err_resp.err_code, msg: e.gw_err_resp.err_msg }
              : {
                  code: null == e ? void 0 : e.code,
                  msg: null == e ? void 0 : e.message,
                };
          return null == e ? void 0 : e.data;
        });
      }
    },
    UdN6: function (t, e, n) {
      n.r(e),
        n.d(e, "assign", function () {
          return c;
        }),
        n.d(e, "format", function () {
          return T;
        }),
        n.d(e, "parse", function () {
          return k;
        }),
        n.d(e, "defaultI18n", function () {
          return l;
        }),
        n.d(e, "setGlobalDateI18n", function () {
          return d;
        }),
        n.d(e, "setGlobalDateMasks", function () {
          return x;
        });
      var r =
          /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        i = "[^\\s]+",
        o = /\[([^]*?)\]/gm;
      function a(t, e) {
        for (var n = [], r = 0, i = t.length; r < i; r++)
          n.push(t[r].substr(0, e));
        return n;
      }
      var s = function (t) {
        return function (e, n) {
          var r = n[t]
            .map(function (t) {
              return t.toLowerCase();
            })
            .indexOf(e.toLowerCase());
          return r > -1 ? r : null;
        };
      };
      function c(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = 0, i = e; r < i.length; r++) {
          var o = i[r];
          for (var a in o) t[a] = o[a];
        }
        return t;
      }
      var u = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        h = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        f = a(h, 3),
        l = {
          dayNamesShort: a(u, 3),
          dayNames: u,
          monthNamesShort: f,
          monthNames: h,
          amPm: ["am", "pm"],
          DoFn: function (t) {
            return (
              t +
              ["th", "st", "nd", "rd"][
                t % 10 > 3 ? 0 : ((t - (t % 10) != 10 ? 1 : 0) * t) % 10
              ]
            );
          },
        },
        p = c({}, l),
        d = function (t) {
          return (p = c(p, t));
        },
        v = function (t) {
          return t.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
        },
        y = function (t, e) {
          for (void 0 === e && (e = 2), t = String(t); t.length < e; )
            t = "0" + t;
          return t;
        },
        g = {
          D: function (t) {
            return String(t.getDate());
          },
          DD: function (t) {
            return y(t.getDate());
          },
          Do: function (t, e) {
            return e.DoFn(t.getDate());
          },
          d: function (t) {
            return String(t.getDay());
          },
          dd: function (t) {
            return y(t.getDay());
          },
          ddd: function (t, e) {
            return e.dayNamesShort[t.getDay()];
          },
          dddd: function (t, e) {
            return e.dayNames[t.getDay()];
          },
          M: function (t) {
            return String(t.getMonth() + 1);
          },
          MM: function (t) {
            return y(t.getMonth() + 1);
          },
          MMM: function (t, e) {
            return e.monthNamesShort[t.getMonth()];
          },
          MMMM: function (t, e) {
            return e.monthNames[t.getMonth()];
          },
          YY: function (t) {
            return y(String(t.getFullYear()), 4).substr(2);
          },
          YYYY: function (t) {
            return y(t.getFullYear(), 4);
          },
          h: function (t) {
            return String(t.getHours() % 12 || 12);
          },
          hh: function (t) {
            return y(t.getHours() % 12 || 12);
          },
          H: function (t) {
            return String(t.getHours());
          },
          HH: function (t) {
            return y(t.getHours());
          },
          m: function (t) {
            return String(t.getMinutes());
          },
          mm: function (t) {
            return y(t.getMinutes());
          },
          s: function (t) {
            return String(t.getSeconds());
          },
          ss: function (t) {
            return y(t.getSeconds());
          },
          S: function (t) {
            return String(Math.round(t.getMilliseconds() / 100));
          },
          SS: function (t) {
            return y(Math.round(t.getMilliseconds() / 10), 2);
          },
          SSS: function (t) {
            return y(t.getMilliseconds(), 3);
          },
          a: function (t, e) {
            return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
          },
          A: function (t, e) {
            return t.getHours() < 12
              ? e.amPm[0].toUpperCase()
              : e.amPm[1].toUpperCase();
          },
          ZZ: function (t) {
            var e = t.getTimezoneOffset();
            return (
              (e > 0 ? "-" : "+") +
              y(100 * Math.floor(Math.abs(e) / 60) + (Math.abs(e) % 60), 4)
            );
          },
          Z: function (t) {
            var e = t.getTimezoneOffset();
            return (
              (e > 0 ? "-" : "+") +
              y(Math.floor(Math.abs(e) / 60), 2) +
              ":" +
              y(Math.abs(e) % 60, 2)
            );
          },
        },
        m = function (t) {
          return +t - 1;
        },
        b = [null, "\\d\\d?"],
        _ = [null, i],
        E = [
          "isPm",
          i,
          function (t, e) {
            var n = t.toLowerCase();
            return n === e.amPm[0] ? 0 : n === e.amPm[1] ? 1 : null;
          },
        ],
        w = [
          "timezoneOffset",
          "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
          function (t) {
            var e = (t + "").match(/([+-]|\d\d)/gi);
            if (e) {
              var n = 60 * +e[1] + parseInt(e[2], 10);
              return "+" === e[0] ? n : -n;
            }
            return 0;
          },
        ],
        O = {
          D: ["day", "\\d\\d?"],
          DD: ["day", "\\d\\d"],
          Do: [
            "day",
            "\\d\\d?" + i,
            function (t) {
              return parseInt(t, 10);
            },
          ],
          M: ["month", "\\d\\d?", m],
          MM: ["month", "\\d\\d", m],
          YY: [
            "year",
            "\\d\\d",
            function (t) {
              var e = +("" + new Date().getFullYear()).substr(0, 2);
              return +("" + (+t > 68 ? e - 1 : e) + t);
            },
          ],
          h: ["hour", "\\d\\d?", void 0, "isPm"],
          hh: ["hour", "\\d\\d", void 0, "isPm"],
          H: ["hour", "\\d\\d?"],
          HH: ["hour", "\\d\\d"],
          m: ["minute", "\\d\\d?"],
          mm: ["minute", "\\d\\d"],
          s: ["second", "\\d\\d?"],
          ss: ["second", "\\d\\d"],
          YYYY: ["year", "\\d{4}"],
          S: [
            "millisecond",
            "\\d",
            function (t) {
              return 100 * +t;
            },
          ],
          SS: [
            "millisecond",
            "\\d\\d",
            function (t) {
              return 10 * +t;
            },
          ],
          SSS: ["millisecond", "\\d{3}"],
          d: b,
          dd: b,
          ddd: _,
          dddd: _,
          MMM: ["month", i, s("monthNamesShort")],
          MMMM: ["month", i, s("monthNames")],
          a: E,
          A: E,
          ZZ: w,
          Z: w,
        },
        S = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          isoDate: "YYYY-MM-DD",
          isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS",
        },
        x = function (t) {
          return c(S, t);
        },
        T = function (t, e, n) {
          if (
            (void 0 === e && (e = S.default),
            void 0 === n && (n = {}),
            "number" == typeof t && (t = new Date(t)),
            "[object Date]" !== Object.prototype.toString.call(t) ||
              isNaN(t.getTime()))
          )
            throw new Error("Invalid Date pass to format");
          var i = [];
          e = (e = S[e] || e).replace(o, function (t, e) {
            return i.push(e), "@@@";
          });
          var a = c(c({}, p), n);
          return (e = e.replace(r, function (e) {
            return g[e](t, a);
          })).replace(/@@@/g, function () {
            return i.shift();
          });
        };
      function k(t, e, n) {
        if ((void 0 === n && (n = {}), "string" != typeof e))
          throw new Error("Invalid format in fecha parse");
        if (((e = S[e] || e), t.length > 1e3)) return null;
        var i = {
            year: new Date().getFullYear(),
            month: 0,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            isPm: null,
            timezoneOffset: null,
          },
          a = [],
          s = [],
          u = e.replace(o, function (t, e) {
            return s.push(v(e)), "@@@";
          }),
          h = {},
          f = {};
        (u = v(u).replace(r, function (t) {
          var e = O[t],
            n = e[0],
            r = e[1],
            i = e[3];
          if (h[n])
            throw new Error(
              "Invalid format. " + n + " specified twice in format"
            );
          return (h[n] = !0), i && (f[i] = !0), a.push(e), "(" + r + ")";
        })),
          Object.keys(f).forEach(function (t) {
            if (!h[t])
              throw new Error(
                "Invalid format. " + t + " is required in specified format"
              );
          }),
          (u = u.replace(/@@@/g, function () {
            return s.shift();
          }));
        var l = t.match(new RegExp(u, "i"));
        if (!l) return null;
        for (var d, y = c(c({}, p), n), g = 1; g < l.length; g++) {
          var m = a[g - 1],
            b = m[0],
            _ = m[2],
            E = _ ? _(l[g], y) : +l[g];
          if (null == E) return null;
          i[b] = E;
        }
        if (
          (1 === i.isPm && null != i.hour && 12 != +i.hour
            ? (i.hour = +i.hour + 12)
            : 0 === i.isPm && 12 == +i.hour && (i.hour = 0),
          null == i.timezoneOffset)
        ) {
          d = new Date(
            i.year,
            i.month,
            i.day,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
          );
          for (
            var w = [
                ["month", "getMonth"],
                ["day", "getDate"],
                ["hour", "getHours"],
                ["minute", "getMinutes"],
                ["second", "getSeconds"],
              ],
              x = ((g = 0), w.length);
            g < x;
            g++
          )
            if (h[w[g][0]] && i[w[g][0]] !== d[w[g][1]]()) return null;
        } else if (
          ((d = new Date(
            Date.UTC(
              i.year,
              i.month,
              i.day,
              i.hour,
              i.minute - i.timezoneOffset,
              i.second,
              i.millisecond
            )
          )),
          i.month > 11 ||
            i.month < 0 ||
            i.day > 31 ||
            i.day < 1 ||
            i.hour > 23 ||
            i.hour < 0 ||
            i.minute > 59 ||
            i.minute < 0 ||
            i.second > 59 ||
            i.second < 0)
        )
          return null;
        return d;
      }
      var P = {
        format: T,
        parse: k,
        defaultI18n: l,
        setGlobalDateI18n: d,
        setGlobalDateMasks: x,
      };
      e.default = P;
    },
    WWpR: function (t, e, n) {
      function r(t, e) {
        return Object.keys(t).reduce(function (n, r) {
          return e.includes(r) && (n[r] = t[r]), n;
        }, {});
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    WhMm: function (t, e, n) {
      t.exports = (function () {
        var t = [
            ,
            function (t, e, n) {
              function r(t) {
                return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
              }
              function i(t, e) {
                return t & e;
              }
              function o(t, e) {
                return t | e;
              }
              function a(t, e) {
                return t ^ e;
              }
              function s(t, e) {
                return t & ~e;
              }
              function c(t) {
                if (0 == t) return -1;
                var e = 0;
                return (
                  0 == (65535 & t) && ((t >>= 16), (e += 16)),
                  0 == (255 & t) && ((t >>= 8), (e += 8)),
                  0 == (15 & t) && ((t >>= 4), (e += 4)),
                  0 == (3 & t) && ((t >>= 2), (e += 2)),
                  0 == (1 & t) && ++e,
                  e
                );
              }
              function u(t) {
                for (var e = 0; 0 != t; ) (t &= t - 1), ++e;
                return e;
              }
              n.d(e, {
                default: function () {
                  return at;
                },
              });
              var h,
                f =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              function l(t) {
                var e,
                  n,
                  r = "";
                for (e = 0; e + 3 <= t.length; e += 3)
                  (n = parseInt(t.substring(e, e + 3), 16)),
                    (r += f.charAt(n >> 6) + f.charAt(63 & n));
                for (
                  e + 1 == t.length
                    ? ((n = parseInt(t.substring(e, e + 1), 16)),
                      (r += f.charAt(n << 2)))
                    : e + 2 == t.length &&
                      ((n = parseInt(t.substring(e, e + 2), 16)),
                      (r += f.charAt(n >> 2) + f.charAt((3 & n) << 4)));
                  (3 & r.length) > 0;

                )
                  r += "=";
                return r;
              }
              function p(t) {
                var e,
                  n = "",
                  i = 0,
                  o = 0;
                for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                  var a = f.indexOf(t.charAt(e));
                  a < 0 ||
                    (0 == i
                      ? ((n += r(a >> 2)), (o = 3 & a), (i = 1))
                      : 1 == i
                      ? ((n += r((o << 2) | (a >> 4))), (o = 15 & a), (i = 2))
                      : 2 == i
                      ? ((n += r(o)), (n += r(a >> 2)), (o = 3 & a), (i = 3))
                      : ((n += r((o << 2) | (a >> 4))),
                        (n += r(15 & a)),
                        (i = 0)));
                }
                return 1 == i && (n += r(o << 2)), n;
              }
              var d,
                v = {
                  decode: function (t) {
                    var e;
                    if (void 0 === d) {
                      var n = "= \f\n\r\t \u2028\u2029";
                      for (d = Object.create(null), e = 0; e < 64; ++e)
                        d[
                          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                            e
                          )
                        ] = e;
                      for (d["-"] = 62, d._ = 63, e = 0; e < n.length; ++e)
                        d[n.charAt(e)] = -1;
                    }
                    var r = [],
                      i = 0,
                      o = 0;
                    for (e = 0; e < t.length; ++e) {
                      var a = t.charAt(e);
                      if ("=" == a) break;
                      if (-1 != (a = d[a])) {
                        if (void 0 === a)
                          throw new Error("Illegal character at offset " + e);
                        (i |= a),
                          ++o >= 4
                            ? ((r[r.length] = i >> 16),
                              (r[r.length] = (i >> 8) & 255),
                              (r[r.length] = 255 & i),
                              (i = 0),
                              (o = 0))
                            : (i <<= 6);
                      }
                    }
                    switch (o) {
                      case 1:
                        throw new Error(
                          "Base64 encoding incomplete: at least 2 bits missing"
                        );
                      case 2:
                        r[r.length] = i >> 10;
                        break;
                      case 3:
                        (r[r.length] = i >> 16), (r[r.length] = (i >> 8) & 255);
                    }
                    return r;
                  },
                  re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                  unarmor: function (t) {
                    var e = v.re.exec(t);
                    if (e)
                      if (e[1]) t = e[1];
                      else {
                        if (!e[2]) throw new Error("RegExp out of sync");
                        t = e[2];
                      }
                    return v.decode(t);
                  },
                },
                y = 1e13,
                g = (function () {
                  function t(t) {
                    this.buf = [+t || 0];
                  }
                  return (
                    (t.prototype.mulAdd = function (t, e) {
                      var n,
                        r,
                        i = this.buf,
                        o = i.length;
                      for (n = 0; n < o; ++n)
                        (r = i[n] * t + e) < y
                          ? (e = 0)
                          : (r -= (e = 0 | (r / y)) * y),
                          (i[n] = r);
                      e > 0 && (i[n] = e);
                    }),
                    (t.prototype.sub = function (t) {
                      var e,
                        n,
                        r = this.buf,
                        i = r.length;
                      for (e = 0; e < i; ++e)
                        (n = r[e] - t) < 0 ? ((n += y), (t = 1)) : (t = 0),
                          (r[e] = n);
                      for (; 0 === r[r.length - 1]; ) r.pop();
                    }),
                    (t.prototype.toString = function (t) {
                      if (10 != (t || 10))
                        throw new Error("only base 10 is supported");
                      for (
                        var e = this.buf,
                          n = e[e.length - 1].toString(),
                          r = e.length - 2;
                        r >= 0;
                        --r
                      )
                        n += (y + e[r]).toString().substring(1);
                      return n;
                    }),
                    (t.prototype.valueOf = function () {
                      for (
                        var t = this.buf, e = 0, n = t.length - 1;
                        n >= 0;
                        --n
                      )
                        e = e * y + t[n];
                      return e;
                    }),
                    (t.prototype.simplify = function () {
                      var t = this.buf;
                      return 1 == t.length ? t[0] : this;
                    }),
                    t
                  );
                })(),
                m =
                  /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                b =
                  /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
              function _(t, e) {
                return t.length > e && (t = t.substring(0, e) + "…"), t;
              }
              var E,
                w = (function () {
                  function t(e, n) {
                    (this.hexDigits = "0123456789ABCDEF"),
                      e instanceof t
                        ? ((this.enc = e.enc), (this.pos = e.pos))
                        : ((this.enc = e), (this.pos = n));
                  }
                  return (
                    (t.prototype.get = function (t) {
                      if (
                        (void 0 === t && (t = this.pos++), t >= this.enc.length)
                      )
                        throw new Error(
                          "Requesting byte offset " +
                            t +
                            " on a stream of length " +
                            this.enc.length
                        );
                      return "string" == typeof this.enc
                        ? this.enc.charCodeAt(t)
                        : this.enc[t];
                    }),
                    (t.prototype.hexByte = function (t) {
                      return (
                        this.hexDigits.charAt((t >> 4) & 15) +
                        this.hexDigits.charAt(15 & t)
                      );
                    }),
                    (t.prototype.hexDump = function (t, e, n) {
                      for (var r = "", i = t; i < e; ++i)
                        if (((r += this.hexByte(this.get(i))), !0 !== n))
                          switch (15 & i) {
                            case 7:
                              r += "  ";
                              break;
                            case 15:
                              r += "\n";
                              break;
                            default:
                              r += " ";
                          }
                      return r;
                    }),
                    (t.prototype.isASCII = function (t, e) {
                      for (var n = t; n < e; ++n) {
                        var r = this.get(n);
                        if (r < 32 || r > 176) return !1;
                      }
                      return !0;
                    }),
                    (t.prototype.parseStringISO = function (t, e) {
                      for (var n = "", r = t; r < e; ++r)
                        n += String.fromCharCode(this.get(r));
                      return n;
                    }),
                    (t.prototype.parseStringUTF = function (t, e) {
                      for (var n = "", r = t; r < e; ) {
                        var i = this.get(r++);
                        n +=
                          i < 128
                            ? String.fromCharCode(i)
                            : i > 191 && i < 224
                            ? String.fromCharCode(
                                ((31 & i) << 6) | (63 & this.get(r++))
                              )
                            : String.fromCharCode(
                                ((15 & i) << 12) |
                                  ((63 & this.get(r++)) << 6) |
                                  (63 & this.get(r++))
                              );
                      }
                      return n;
                    }),
                    (t.prototype.parseStringBMP = function (t, e) {
                      for (var n, r, i = "", o = t; o < e; )
                        (n = this.get(o++)),
                          (r = this.get(o++)),
                          (i += String.fromCharCode((n << 8) | r));
                      return i;
                    }),
                    (t.prototype.parseTime = function (t, e, n) {
                      var r = this.parseStringISO(t, e),
                        i = (n ? m : b).exec(r);
                      return i
                        ? (n &&
                            ((i[1] = +i[1]), (i[1] += +i[1] < 70 ? 2e3 : 1900)),
                          (r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4]),
                          i[5] &&
                            ((r += ":" + i[5]),
                            i[6] &&
                              ((r += ":" + i[6]), i[7] && (r += "." + i[7]))),
                          i[8] &&
                            ((r += " UTC"),
                            "Z" != i[8] &&
                              ((r += i[8]), i[9] && (r += ":" + i[9]))),
                          r)
                        : "Unrecognized time: " + r;
                    }),
                    (t.prototype.parseInteger = function (t, e) {
                      for (
                        var n,
                          r = this.get(t),
                          i = r > 127,
                          o = i ? 255 : 0,
                          a = "";
                        r == o && ++t < e;

                      )
                        r = this.get(t);
                      if (0 == (n = e - t)) return i ? -1 : 0;
                      if (n > 4) {
                        for (a = r, n <<= 3; 0 == (128 & (+a ^ o)); )
                          (a = +a << 1), --n;
                        a = "(" + n + " bit)\n";
                      }
                      i && (r -= 256);
                      for (var s = new g(r), c = t + 1; c < e; ++c)
                        s.mulAdd(256, this.get(c));
                      return a + s.toString();
                    }),
                    (t.prototype.parseBitString = function (t, e, n) {
                      for (
                        var r = this.get(t),
                          i = "(" + (((e - t - 1) << 3) - r) + " bit)\n",
                          o = "",
                          a = t + 1;
                        a < e;
                        ++a
                      ) {
                        for (
                          var s = this.get(a), c = a == e - 1 ? r : 0, u = 7;
                          u >= c;
                          --u
                        )
                          o += (s >> u) & 1 ? "1" : "0";
                        if (o.length > n) return i + _(o, n);
                      }
                      return i + o;
                    }),
                    (t.prototype.parseOctetString = function (t, e, n) {
                      if (this.isASCII(t, e))
                        return _(this.parseStringISO(t, e), n);
                      var r = e - t,
                        i = "(" + r + " byte)\n";
                      r > (n /= 2) && (e = t + n);
                      for (var o = t; o < e; ++o)
                        i += this.hexByte(this.get(o));
                      return r > n && (i += "…"), i;
                    }),
                    (t.prototype.parseOID = function (t, e, n) {
                      for (var r = "", i = new g(), o = 0, a = t; a < e; ++a) {
                        var s = this.get(a);
                        if ((i.mulAdd(128, 127 & s), (o += 7), !(128 & s))) {
                          if ("" === r) {
                            if ((i = i.simplify()) instanceof g)
                              i.sub(80), (r = "2." + i.toString());
                            else {
                              var c = i < 80 ? (i < 40 ? 0 : 1) : 2;
                              r = c + "." + (i - 40 * c);
                            }
                          } else r += "." + i.toString();
                          if (r.length > n) return _(r, n);
                          (i = new g()), (o = 0);
                        }
                      }
                      return o > 0 && (r += ".incomplete"), r;
                    }),
                    t
                  );
                })(),
                O = (function () {
                  function t(t, e, n, r, i) {
                    if (!(r instanceof S))
                      throw new Error("Invalid tag value.");
                    (this.stream = t),
                      (this.header = e),
                      (this.length = n),
                      (this.tag = r),
                      (this.sub = i);
                  }
                  return (
                    (t.prototype.typeName = function () {
                      switch (this.tag.tagClass) {
                        case 0:
                          switch (this.tag.tagNumber) {
                            case 0:
                              return "EOC";
                            case 1:
                              return "BOOLEAN";
                            case 2:
                              return "INTEGER";
                            case 3:
                              return "BIT_STRING";
                            case 4:
                              return "OCTET_STRING";
                            case 5:
                              return "NULL";
                            case 6:
                              return "OBJECT_IDENTIFIER";
                            case 7:
                              return "ObjectDescriptor";
                            case 8:
                              return "EXTERNAL";
                            case 9:
                              return "REAL";
                            case 10:
                              return "ENUMERATED";
                            case 11:
                              return "EMBEDDED_PDV";
                            case 12:
                              return "UTF8String";
                            case 16:
                              return "SEQUENCE";
                            case 17:
                              return "SET";
                            case 18:
                              return "NumericString";
                            case 19:
                              return "PrintableString";
                            case 20:
                              return "TeletexString";
                            case 21:
                              return "VideotexString";
                            case 22:
                              return "IA5String";
                            case 23:
                              return "UTCTime";
                            case 24:
                              return "GeneralizedTime";
                            case 25:
                              return "GraphicString";
                            case 26:
                              return "VisibleString";
                            case 27:
                              return "GeneralString";
                            case 28:
                              return "UniversalString";
                            case 30:
                              return "BMPString";
                          }
                          return "Universal_" + this.tag.tagNumber.toString();
                        case 1:
                          return "Application_" + this.tag.tagNumber.toString();
                        case 2:
                          return "[" + this.tag.tagNumber.toString() + "]";
                        case 3:
                          return "Private_" + this.tag.tagNumber.toString();
                      }
                    }),
                    (t.prototype.content = function (t) {
                      if (void 0 === this.tag) return null;
                      void 0 === t && (t = 1 / 0);
                      var e = this.posContent(),
                        n = Math.abs(this.length);
                      if (!this.tag.isUniversal())
                        return null !== this.sub
                          ? "(" + this.sub.length + " elem)"
                          : this.stream.parseOctetString(e, e + n, t);
                      switch (this.tag.tagNumber) {
                        case 1:
                          return 0 === this.stream.get(e) ? "false" : "true";
                        case 2:
                          return this.stream.parseInteger(e, e + n);
                        case 3:
                          return this.sub
                            ? "(" + this.sub.length + " elem)"
                            : this.stream.parseBitString(e, e + n, t);
                        case 4:
                          return this.sub
                            ? "(" + this.sub.length + " elem)"
                            : this.stream.parseOctetString(e, e + n, t);
                        case 6:
                          return this.stream.parseOID(e, e + n, t);
                        case 16:
                        case 17:
                          return null !== this.sub
                            ? "(" + this.sub.length + " elem)"
                            : "(no elem)";
                        case 12:
                          return _(this.stream.parseStringUTF(e, e + n), t);
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 26:
                          return _(this.stream.parseStringISO(e, e + n), t);
                        case 30:
                          return _(this.stream.parseStringBMP(e, e + n), t);
                        case 23:
                        case 24:
                          return this.stream.parseTime(
                            e,
                            e + n,
                            23 == this.tag.tagNumber
                          );
                      }
                      return null;
                    }),
                    (t.prototype.toString = function () {
                      return (
                        this.typeName() +
                        "@" +
                        this.stream.pos +
                        "[header:" +
                        this.header +
                        ",length:" +
                        this.length +
                        ",sub:" +
                        (null === this.sub ? "null" : this.sub.length) +
                        "]"
                      );
                    }),
                    (t.prototype.toPrettyString = function (t) {
                      void 0 === t && (t = "");
                      var e = t + this.typeName() + " @" + this.stream.pos;
                      if (
                        (this.length >= 0 && (e += "+"),
                        (e += this.length),
                        this.tag.tagConstructed
                          ? (e += " (constructed)")
                          : !this.tag.isUniversal() ||
                            (3 != this.tag.tagNumber &&
                              4 != this.tag.tagNumber) ||
                            null === this.sub ||
                            (e += " (encapsulates)"),
                        (e += "\n"),
                        null !== this.sub)
                      ) {
                        t += "  ";
                        for (var n = 0, r = this.sub.length; n < r; ++n)
                          e += this.sub[n].toPrettyString(t);
                      }
                      return e;
                    }),
                    (t.prototype.posStart = function () {
                      return this.stream.pos;
                    }),
                    (t.prototype.posContent = function () {
                      return this.stream.pos + this.header;
                    }),
                    (t.prototype.posEnd = function () {
                      return (
                        this.stream.pos + this.header + Math.abs(this.length)
                      );
                    }),
                    (t.prototype.toHexString = function () {
                      return this.stream.hexDump(
                        this.posStart(),
                        this.posEnd(),
                        !0
                      );
                    }),
                    (t.decodeLength = function (t) {
                      var e = t.get(),
                        n = 127 & e;
                      if (n == e) return n;
                      if (n > 6)
                        throw new Error(
                          "Length over 48 bits not supported at position " +
                            (t.pos - 1)
                        );
                      if (0 === n) return null;
                      e = 0;
                      for (var r = 0; r < n; ++r) e = 256 * e + t.get();
                      return e;
                    }),
                    (t.prototype.getHexStringValue = function () {
                      var t = this.toHexString(),
                        e = 2 * this.header,
                        n = 2 * this.length;
                      return t.substr(e, n);
                    }),
                    (t.decode = function (e) {
                      var n;
                      n = e instanceof w ? e : new w(e, 0);
                      var r = new w(n),
                        i = new S(n),
                        o = t.decodeLength(n),
                        a = n.pos,
                        s = a - r.pos,
                        c = null,
                        u = function () {
                          var e = [];
                          if (null !== o) {
                            for (var r = a + o; n.pos < r; )
                              e[e.length] = t.decode(n);
                            if (n.pos != r)
                              throw new Error(
                                "Content size is not correct for container starting at offset " +
                                  a
                              );
                          } else
                            try {
                              for (;;) {
                                var i = t.decode(n);
                                if (i.tag.isEOC()) break;
                                e[e.length] = i;
                              }
                              o = a - n.pos;
                            } catch (t) {
                              throw new Error(
                                "Exception while decoding undefined length content: " +
                                  t
                              );
                            }
                          return e;
                        };
                      if (i.tagConstructed) c = u();
                      else if (
                        i.isUniversal() &&
                        (3 == i.tagNumber || 4 == i.tagNumber)
                      )
                        try {
                          if (3 == i.tagNumber && 0 != n.get())
                            throw new Error(
                              "BIT STRINGs with unused bits cannot encapsulate."
                            );
                          c = u();
                          for (var h = 0; h < c.length; ++h)
                            if (c[h].tag.isEOC())
                              throw new Error(
                                "EOC is not supposed to be actual content."
                              );
                        } catch (t) {
                          c = null;
                        }
                      if (null === c) {
                        if (null === o)
                          throw new Error(
                            "We can't skip over an invalid tag with undefined length at offset " +
                              a
                          );
                        n.pos = a + Math.abs(o);
                      }
                      return new t(r, s, o, i, c);
                    }),
                    t
                  );
                })(),
                S = (function () {
                  function t(t) {
                    var e = t.get();
                    if (
                      ((this.tagClass = e >> 6),
                      (this.tagConstructed = 0 != (32 & e)),
                      (this.tagNumber = 31 & e),
                      31 == this.tagNumber)
                    ) {
                      var n = new g();
                      do {
                        (e = t.get()), n.mulAdd(128, 127 & e);
                      } while (128 & e);
                      this.tagNumber = n.simplify();
                    }
                  }
                  return (
                    (t.prototype.isUniversal = function () {
                      return 0 === this.tagClass;
                    }),
                    (t.prototype.isEOC = function () {
                      return 0 === this.tagClass && 0 === this.tagNumber;
                    }),
                    t
                  );
                })(),
                x = {
                  appName: "Netscape",
                  userAgent:
                    "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46     (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
                },
                T = [
                  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
                  59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
                  127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181,
                  191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251,
                  257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
                  331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
                  401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
                  467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557,
                  563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619,
                  631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
                  709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787,
                  797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
                  877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
                  967, 971, 977, 983, 991, 997,
                ],
                k = (1 << 26) / T[T.length - 1],
                P = (function () {
                  function t(t, e, n) {
                    null != t &&
                      ("number" == typeof t
                        ? this.fromNumber(t, e, n)
                        : null == e && "string" != typeof t
                        ? this.fromString(t, 256)
                        : this.fromString(t, e));
                  }
                  return (
                    (t.prototype.toString = function (t) {
                      if (this.s < 0) return "-" + this.negate().toString(t);
                      var e;
                      if (16 == t) e = 4;
                      else if (8 == t) e = 3;
                      else if (2 == t) e = 1;
                      else if (32 == t) e = 5;
                      else {
                        if (4 != t) return this.toRadix(t);
                        e = 2;
                      }
                      var n,
                        i = (1 << e) - 1,
                        o = !1,
                        a = "",
                        s = this.t,
                        c = this.DB - ((s * this.DB) % e);
                      if (s-- > 0)
                        for (
                          c < this.DB &&
                          (n = this[s] >> c) > 0 &&
                          ((o = !0), (a = r(n)));
                          s >= 0;

                        )
                          c < e
                            ? ((n = (this[s] & ((1 << c) - 1)) << (e - c)),
                              (n |= this[--s] >> (c += this.DB - e)))
                            : ((n = (this[s] >> (c -= e)) & i),
                              c <= 0 && ((c += this.DB), --s)),
                            n > 0 && (o = !0),
                            o && (a += r(n));
                      return o ? a : "0";
                    }),
                    (t.prototype.negate = function () {
                      var e = I();
                      return t.ZERO.subTo(this, e), e;
                    }),
                    (t.prototype.abs = function () {
                      return this.s < 0 ? this.negate() : this;
                    }),
                    (t.prototype.compareTo = function (t) {
                      var e = this.s - t.s;
                      if (0 != e) return e;
                      var n = this.t;
                      if (0 != (e = n - t.t)) return this.s < 0 ? -e : e;
                      for (; --n >= 0; )
                        if (0 != (e = this[n] - t[n])) return e;
                      return 0;
                    }),
                    (t.prototype.bitLength = function () {
                      return this.t <= 0
                        ? 0
                        : this.DB * (this.t - 1) +
                            F(this[this.t - 1] ^ (this.s & this.DM));
                    }),
                    (t.prototype.mod = function (e) {
                      var n = I();
                      return (
                        this.abs().divRemTo(e, null, n),
                        this.s < 0 && n.compareTo(t.ZERO) > 0 && e.subTo(n, n),
                        n
                      );
                    }),
                    (t.prototype.modPowInt = function (t, e) {
                      var n;
                      return (
                        (n = t < 256 || e.isEven() ? new C(e) : new j(e)),
                        this.exp(t, n)
                      );
                    }),
                    (t.prototype.clone = function () {
                      var t = I();
                      return this.copyTo(t), t;
                    }),
                    (t.prototype.intValue = function () {
                      if (this.s < 0) {
                        if (1 == this.t) return this[0] - this.DV;
                        if (0 == this.t) return -1;
                      } else {
                        if (1 == this.t) return this[0];
                        if (0 == this.t) return 0;
                      }
                      return (
                        ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) |
                        this[0]
                      );
                    }),
                    (t.prototype.byteValue = function () {
                      return 0 == this.t ? this.s : (this[0] << 24) >> 24;
                    }),
                    (t.prototype.shortValue = function () {
                      return 0 == this.t ? this.s : (this[0] << 16) >> 16;
                    }),
                    (t.prototype.signum = function () {
                      return this.s < 0
                        ? -1
                        : this.t <= 0 || (1 == this.t && this[0] <= 0)
                        ? 0
                        : 1;
                    }),
                    (t.prototype.toByteArray = function () {
                      var t = this.t,
                        e = [];
                      e[0] = this.s;
                      var n,
                        r = this.DB - ((t * this.DB) % 8),
                        i = 0;
                      if (t-- > 0)
                        for (
                          r < this.DB &&
                          (n = this[t] >> r) != (this.s & this.DM) >> r &&
                          (e[i++] = n | (this.s << (this.DB - r)));
                          t >= 0;

                        )
                          r < 8
                            ? ((n = (this[t] & ((1 << r) - 1)) << (8 - r)),
                              (n |= this[--t] >> (r += this.DB - 8)))
                            : ((n = (this[t] >> (r -= 8)) & 255),
                              r <= 0 && ((r += this.DB), --t)),
                            0 != (128 & n) && (n |= -256),
                            0 == i && (128 & this.s) != (128 & n) && ++i,
                            (i > 0 || n != this.s) && (e[i++] = n);
                      return e;
                    }),
                    (t.prototype.equals = function (t) {
                      return 0 == this.compareTo(t);
                    }),
                    (t.prototype.min = function (t) {
                      return this.compareTo(t) < 0 ? this : t;
                    }),
                    (t.prototype.max = function (t) {
                      return this.compareTo(t) > 0 ? this : t;
                    }),
                    (t.prototype.and = function (t) {
                      var e = I();
                      return this.bitwiseTo(t, i, e), e;
                    }),
                    (t.prototype.or = function (t) {
                      var e = I();
                      return this.bitwiseTo(t, o, e), e;
                    }),
                    (t.prototype.xor = function (t) {
                      var e = I();
                      return this.bitwiseTo(t, a, e), e;
                    }),
                    (t.prototype.andNot = function (t) {
                      var e = I();
                      return this.bitwiseTo(t, s, e), e;
                    }),
                    (t.prototype.not = function () {
                      for (var t = I(), e = 0; e < this.t; ++e)
                        t[e] = this.DM & ~this[e];
                      return (t.t = this.t), (t.s = ~this.s), t;
                    }),
                    (t.prototype.shiftLeft = function (t) {
                      var e = I();
                      return (
                        t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
                      );
                    }),
                    (t.prototype.shiftRight = function (t) {
                      var e = I();
                      return (
                        t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
                      );
                    }),
                    (t.prototype.getLowestSetBit = function () {
                      for (var t = 0; t < this.t; ++t)
                        if (0 != this[t]) return t * this.DB + c(this[t]);
                      return this.s < 0 ? this.t * this.DB : -1;
                    }),
                    (t.prototype.bitCount = function () {
                      for (
                        var t = 0, e = this.s & this.DM, n = 0;
                        n < this.t;
                        ++n
                      )
                        t += u(this[n] ^ e);
                      return t;
                    }),
                    (t.prototype.testBit = function (t) {
                      var e = Math.floor(t / this.DB);
                      return e >= this.t
                        ? 0 != this.s
                        : 0 != (this[e] & (1 << t % this.DB));
                    }),
                    (t.prototype.setBit = function (t) {
                      return this.changeBit(t, o);
                    }),
                    (t.prototype.clearBit = function (t) {
                      return this.changeBit(t, s);
                    }),
                    (t.prototype.flipBit = function (t) {
                      return this.changeBit(t, a);
                    }),
                    (t.prototype.add = function (t) {
                      var e = I();
                      return this.addTo(t, e), e;
                    }),
                    (t.prototype.subtract = function (t) {
                      var e = I();
                      return this.subTo(t, e), e;
                    }),
                    (t.prototype.multiply = function (t) {
                      var e = I();
                      return this.multiplyTo(t, e), e;
                    }),
                    (t.prototype.divide = function (t) {
                      var e = I();
                      return this.divRemTo(t, e, null), e;
                    }),
                    (t.prototype.remainder = function (t) {
                      var e = I();
                      return this.divRemTo(t, null, e), e;
                    }),
                    (t.prototype.divideAndRemainder = function (t) {
                      var e = I(),
                        n = I();
                      return this.divRemTo(t, e, n), [e, n];
                    }),
                    (t.prototype.modPow = function (t, e) {
                      var n,
                        r,
                        i = t.bitLength(),
                        o = U(1);
                      if (i <= 0) return o;
                      (n =
                        i < 18
                          ? 1
                          : i < 48
                          ? 3
                          : i < 144
                          ? 4
                          : i < 768
                          ? 5
                          : 6),
                        (r =
                          i < 8 ? new C(e) : e.isEven() ? new D(e) : new j(e));
                      var a = [],
                        s = 3,
                        c = n - 1,
                        u = (1 << n) - 1;
                      if (((a[1] = r.convert(this)), n > 1)) {
                        var h = I();
                        for (r.sqrTo(a[1], h); s <= u; )
                          (a[s] = I()), r.mulTo(h, a[s - 2], a[s]), (s += 2);
                      }
                      var f,
                        l,
                        p = t.t - 1,
                        d = !0,
                        v = I();
                      for (i = F(t[p]) - 1; p >= 0; ) {
                        for (
                          i >= c
                            ? (f = (t[p] >> (i - c)) & u)
                            : ((f = (t[p] & ((1 << (i + 1)) - 1)) << (c - i)),
                              p > 0 && (f |= t[p - 1] >> (this.DB + i - c))),
                            s = n;
                          0 == (1 & f);

                        )
                          (f >>= 1), --s;
                        if (((i -= s) < 0 && ((i += this.DB), --p), d))
                          a[f].copyTo(o), (d = !1);
                        else {
                          for (; s > 1; )
                            r.sqrTo(o, v), r.sqrTo(v, o), (s -= 2);
                          s > 0 ? r.sqrTo(o, v) : ((l = o), (o = v), (v = l)),
                            r.mulTo(v, a[f], o);
                        }
                        for (; p >= 0 && 0 == (t[p] & (1 << i)); )
                          r.sqrTo(o, v),
                            (l = o),
                            (o = v),
                            (v = l),
                            --i < 0 && ((i = this.DB - 1), --p);
                      }
                      return r.revert(o);
                    }),
                    (t.prototype.modInverse = function (e) {
                      var n = e.isEven();
                      if ((this.isEven() && n) || 0 == e.signum())
                        return t.ZERO;
                      for (
                        var r = e.clone(),
                          i = this.clone(),
                          o = U(1),
                          a = U(0),
                          s = U(0),
                          c = U(1);
                        0 != r.signum();

                      ) {
                        for (; r.isEven(); )
                          r.rShiftTo(1, r),
                            n
                              ? ((o.isEven() && a.isEven()) ||
                                  (o.addTo(this, o), a.subTo(e, a)),
                                o.rShiftTo(1, o))
                              : a.isEven() || a.subTo(e, a),
                            a.rShiftTo(1, a);
                        for (; i.isEven(); )
                          i.rShiftTo(1, i),
                            n
                              ? ((s.isEven() && c.isEven()) ||
                                  (s.addTo(this, s), c.subTo(e, c)),
                                s.rShiftTo(1, s))
                              : c.isEven() || c.subTo(e, c),
                            c.rShiftTo(1, c);
                        r.compareTo(i) >= 0
                          ? (r.subTo(i, r), n && o.subTo(s, o), a.subTo(c, a))
                          : (i.subTo(r, i), n && s.subTo(o, s), c.subTo(a, c));
                      }
                      return 0 != i.compareTo(t.ONE)
                        ? t.ZERO
                        : c.compareTo(e) >= 0
                        ? c.subtract(e)
                        : c.signum() < 0
                        ? (c.addTo(e, c), c.signum() < 0 ? c.add(e) : c)
                        : c;
                    }),
                    (t.prototype.pow = function (t) {
                      return this.exp(t, new A());
                    }),
                    (t.prototype.gcd = function (t) {
                      var e = this.s < 0 ? this.negate() : this.clone(),
                        n = t.s < 0 ? t.negate() : t.clone();
                      if (e.compareTo(n) < 0) {
                        var r = e;
                        (e = n), (n = r);
                      }
                      var i = e.getLowestSetBit(),
                        o = n.getLowestSetBit();
                      if (o < 0) return e;
                      for (
                        i < o && (o = i),
                          o > 0 && (e.rShiftTo(o, e), n.rShiftTo(o, n));
                        e.signum() > 0;

                      )
                        (i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
                          (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
                          e.compareTo(n) >= 0
                            ? (e.subTo(n, e), e.rShiftTo(1, e))
                            : (n.subTo(e, n), n.rShiftTo(1, n));
                      return o > 0 && n.lShiftTo(o, n), n;
                    }),
                    (t.prototype.isProbablePrime = function (t) {
                      var e,
                        n = this.abs();
                      if (1 == n.t && n[0] <= T[T.length - 1]) {
                        for (e = 0; e < T.length; ++e)
                          if (n[0] == T[e]) return !0;
                        return !1;
                      }
                      if (n.isEven()) return !1;
                      for (e = 1; e < T.length; ) {
                        for (var r = T[e], i = e + 1; i < T.length && r < k; )
                          r *= T[i++];
                        for (r = n.modInt(r); e < i; )
                          if (r % T[e++] == 0) return !1;
                      }
                      return n.millerRabin(t);
                    }),
                    (t.prototype.copyTo = function (t) {
                      for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                      (t.t = this.t), (t.s = this.s);
                    }),
                    (t.prototype.fromInt = function (t) {
                      (this.t = 1),
                        (this.s = t < 0 ? -1 : 0),
                        t > 0
                          ? (this[0] = t)
                          : t < -1
                          ? (this[0] = t + this.DV)
                          : (this.t = 0);
                    }),
                    (t.prototype.fromString = function (e, n) {
                      var r;
                      if (16 == n) r = 4;
                      else if (8 == n) r = 3;
                      else if (256 == n) r = 8;
                      else if (2 == n) r = 1;
                      else if (32 == n) r = 5;
                      else {
                        if (4 != n) return void this.fromRadix(e, n);
                        r = 2;
                      }
                      (this.t = 0), (this.s = 0);
                      for (var i = e.length, o = !1, a = 0; --i >= 0; ) {
                        var s = 8 == r ? 255 & +e[i] : z(e, i);
                        s < 0
                          ? "-" == e.charAt(i) && (o = !0)
                          : ((o = !1),
                            0 == a
                              ? (this[this.t++] = s)
                              : a + r > this.DB
                              ? ((this[this.t - 1] |=
                                  (s & ((1 << (this.DB - a)) - 1)) << a),
                                (this[this.t++] = s >> (this.DB - a)))
                              : (this[this.t - 1] |= s << a),
                            (a += r) >= this.DB && (a -= this.DB));
                      }
                      8 == r &&
                        0 != (128 & +e[0]) &&
                        ((this.s = -1),
                        a > 0 &&
                          (this[this.t - 1] |=
                            ((1 << (this.DB - a)) - 1) << a)),
                        this.clamp(),
                        o && t.ZERO.subTo(this, this);
                    }),
                    (t.prototype.clamp = function () {
                      for (
                        var t = this.s & this.DM;
                        this.t > 0 && this[this.t - 1] == t;

                      )
                        --this.t;
                    }),
                    (t.prototype.dlShiftTo = function (t, e) {
                      var n;
                      for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n];
                      for (n = t - 1; n >= 0; --n) e[n] = 0;
                      (e.t = this.t + t), (e.s = this.s);
                    }),
                    (t.prototype.drShiftTo = function (t, e) {
                      for (var n = t; n < this.t; ++n) e[n - t] = this[n];
                      (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
                    }),
                    (t.prototype.lShiftTo = function (t, e) {
                      for (
                        var n = t % this.DB,
                          r = this.DB - n,
                          i = (1 << r) - 1,
                          o = Math.floor(t / this.DB),
                          a = (this.s << n) & this.DM,
                          s = this.t - 1;
                        s >= 0;
                        --s
                      )
                        (e[s + o + 1] = (this[s] >> r) | a),
                          (a = (this[s] & i) << n);
                      for (s = o - 1; s >= 0; --s) e[s] = 0;
                      (e[o] = a),
                        (e.t = this.t + o + 1),
                        (e.s = this.s),
                        e.clamp();
                    }),
                    (t.prototype.rShiftTo = function (t, e) {
                      e.s = this.s;
                      var n = Math.floor(t / this.DB);
                      if (n >= this.t) e.t = 0;
                      else {
                        var r = t % this.DB,
                          i = this.DB - r,
                          o = (1 << r) - 1;
                        e[0] = this[n] >> r;
                        for (var a = n + 1; a < this.t; ++a)
                          (e[a - n - 1] |= (this[a] & o) << i),
                            (e[a - n] = this[a] >> r);
                        r > 0 && (e[this.t - n - 1] |= (this.s & o) << i),
                          (e.t = this.t - n),
                          e.clamp();
                      }
                    }),
                    (t.prototype.subTo = function (t, e) {
                      for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i; )
                        (r += this[n] - t[n]),
                          (e[n++] = r & this.DM),
                          (r >>= this.DB);
                      if (t.t < this.t) {
                        for (r -= t.s; n < this.t; )
                          (r += this[n]),
                            (e[n++] = r & this.DM),
                            (r >>= this.DB);
                        r += this.s;
                      } else {
                        for (r += this.s; n < t.t; )
                          (r -= t[n]), (e[n++] = r & this.DM), (r >>= this.DB);
                        r -= t.s;
                      }
                      (e.s = r < 0 ? -1 : 0),
                        r < -1 ? (e[n++] = this.DV + r) : r > 0 && (e[n++] = r),
                        (e.t = n),
                        e.clamp();
                    }),
                    (t.prototype.multiplyTo = function (e, n) {
                      var r = this.abs(),
                        i = e.abs(),
                        o = r.t;
                      for (n.t = o + i.t; --o >= 0; ) n[o] = 0;
                      for (o = 0; o < i.t; ++o)
                        n[o + r.t] = r.am(0, i[o], n, o, 0, r.t);
                      (n.s = 0), n.clamp(), this.s != e.s && t.ZERO.subTo(n, n);
                    }),
                    (t.prototype.squareTo = function (t) {
                      for (var e = this.abs(), n = (t.t = 2 * e.t); --n >= 0; )
                        t[n] = 0;
                      for (n = 0; n < e.t - 1; ++n) {
                        var r = e.am(n, e[n], t, 2 * n, 0, 1);
                        (t[n + e.t] += e.am(
                          n + 1,
                          2 * e[n],
                          t,
                          2 * n + 1,
                          r,
                          e.t - n - 1
                        )) >= e.DV &&
                          ((t[n + e.t] -= e.DV), (t[n + e.t + 1] = 1));
                      }
                      t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                        (t.s = 0),
                        t.clamp();
                    }),
                    (t.prototype.divRemTo = function (e, n, r) {
                      var i = e.abs();
                      if (!(i.t <= 0)) {
                        var o = this.abs();
                        if (o.t < i.t)
                          return (
                            null != n && n.fromInt(0),
                            void (null != r && this.copyTo(r))
                          );
                        null == r && (r = I());
                        var a = I(),
                          s = this.s,
                          c = e.s,
                          u = this.DB - F(i[i.t - 1]);
                        u > 0
                          ? (i.lShiftTo(u, a), o.lShiftTo(u, r))
                          : (i.copyTo(a), o.copyTo(r));
                        var h = a.t,
                          f = a[h - 1];
                        if (0 != f) {
                          var l =
                              f * (1 << this.F1) +
                              (h > 1 ? a[h - 2] >> this.F2 : 0),
                            p = this.FV / l,
                            d = (1 << this.F1) / l,
                            v = 1 << this.F2,
                            y = r.t,
                            g = y - h,
                            m = null == n ? I() : n;
                          for (
                            a.dlShiftTo(g, m),
                              r.compareTo(m) >= 0 &&
                                ((r[r.t++] = 1), r.subTo(m, r)),
                              t.ONE.dlShiftTo(h, m),
                              m.subTo(a, a);
                            a.t < h;

                          )
                            a[a.t++] = 0;
                          for (; --g >= 0; ) {
                            var b =
                              r[--y] == f
                                ? this.DM
                                : Math.floor(r[y] * p + (r[y - 1] + v) * d);
                            if ((r[y] += a.am(0, b, r, g, 0, h)) < b)
                              for (
                                a.dlShiftTo(g, m), r.subTo(m, r);
                                r[y] < --b;

                              )
                                r.subTo(m, r);
                          }
                          null != n &&
                            (r.drShiftTo(h, n), s != c && t.ZERO.subTo(n, n)),
                            (r.t = h),
                            r.clamp(),
                            u > 0 && r.rShiftTo(u, r),
                            s < 0 && t.ZERO.subTo(r, r);
                        }
                      }
                    }),
                    (t.prototype.invDigit = function () {
                      if (this.t < 1) return 0;
                      var t = this[0];
                      if (0 == (1 & t)) return 0;
                      var e = 3 & t;
                      return (e =
                        ((e =
                          ((e =
                            ((e = (e * (2 - (15 & t) * e)) & 15) *
                              (2 - (255 & t) * e)) &
                            255) *
                            (2 - (((65535 & t) * e) & 65535))) &
                          65535) *
                          (2 - ((t * e) % this.DV))) %
                        this.DV) > 0
                        ? this.DV - e
                        : -e;
                    }),
                    (t.prototype.isEven = function () {
                      return 0 == (this.t > 0 ? 1 & this[0] : this.s);
                    }),
                    (t.prototype.exp = function (e, n) {
                      if (e > 4294967295 || e < 1) return t.ONE;
                      var r = I(),
                        i = I(),
                        o = n.convert(this),
                        a = F(e) - 1;
                      for (o.copyTo(r); --a >= 0; )
                        if ((n.sqrTo(r, i), (e & (1 << a)) > 0))
                          n.mulTo(i, o, r);
                        else {
                          var s = r;
                          (r = i), (i = s);
                        }
                      return n.revert(r);
                    }),
                    (t.prototype.chunkSize = function (t) {
                      return Math.floor((Math.LN2 * this.DB) / Math.log(t));
                    }),
                    (t.prototype.toRadix = function (t) {
                      if (
                        (null == t && (t = 10),
                        0 == this.signum() || t < 2 || t > 36)
                      )
                        return "0";
                      var e = this.chunkSize(t),
                        n = Math.pow(t, e),
                        r = U(n),
                        i = I(),
                        o = I(),
                        a = "";
                      for (this.divRemTo(r, i, o); i.signum() > 0; )
                        (a = (n + o.intValue()).toString(t).substr(1) + a),
                          i.divRemTo(r, i, o);
                      return o.intValue().toString(t) + a;
                    }),
                    (t.prototype.fromRadix = function (e, n) {
                      this.fromInt(0), null == n && (n = 10);
                      for (
                        var r = this.chunkSize(n),
                          i = Math.pow(n, r),
                          o = !1,
                          a = 0,
                          s = 0,
                          c = 0;
                        c < e.length;
                        ++c
                      ) {
                        var u = z(e, c);
                        u < 0
                          ? "-" == e.charAt(c) && 0 == this.signum() && (o = !0)
                          : ((s = n * s + u),
                            ++a >= r &&
                              (this.dMultiply(i),
                              this.dAddOffset(s, 0),
                              (a = 0),
                              (s = 0)));
                      }
                      a > 0 &&
                        (this.dMultiply(Math.pow(n, a)), this.dAddOffset(s, 0)),
                        o && t.ZERO.subTo(this, this);
                    }),
                    (t.prototype.fromNumber = function (e, n, r) {
                      if ("number" == typeof n) {
                        if (e < 2) this.fromInt(1);
                        else
                          for (
                            this.fromNumber(e, r),
                              this.testBit(e - 1) ||
                                this.bitwiseTo(t.ONE.shiftLeft(e - 1), o, this),
                              this.isEven() && this.dAddOffset(1, 0);
                            !this.isProbablePrime(n);

                          )
                            this.dAddOffset(2, 0),
                              this.bitLength() > e &&
                                this.subTo(t.ONE.shiftLeft(e - 1), this);
                      } else {
                        var i = [],
                          a = 7 & e;
                        (i.length = 1 + (e >> 3)),
                          n.nextBytes(i),
                          a > 0 ? (i[0] &= (1 << a) - 1) : (i[0] = 0),
                          this.fromString(i, 256);
                      }
                    }),
                    (t.prototype.bitwiseTo = function (t, e, n) {
                      var r,
                        i,
                        o = Math.min(t.t, this.t);
                      for (r = 0; r < o; ++r) n[r] = e(this[r], t[r]);
                      if (t.t < this.t) {
                        for (i = t.s & this.DM, r = o; r < this.t; ++r)
                          n[r] = e(this[r], i);
                        n.t = this.t;
                      } else {
                        for (i = this.s & this.DM, r = o; r < t.t; ++r)
                          n[r] = e(i, t[r]);
                        n.t = t.t;
                      }
                      (n.s = e(this.s, t.s)), n.clamp();
                    }),
                    (t.prototype.changeBit = function (e, n) {
                      var r = t.ONE.shiftLeft(e);
                      return this.bitwiseTo(r, n, r), r;
                    }),
                    (t.prototype.addTo = function (t, e) {
                      for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i; )
                        (r += this[n] + t[n]),
                          (e[n++] = r & this.DM),
                          (r >>= this.DB);
                      if (t.t < this.t) {
                        for (r += t.s; n < this.t; )
                          (r += this[n]),
                            (e[n++] = r & this.DM),
                            (r >>= this.DB);
                        r += this.s;
                      } else {
                        for (r += this.s; n < t.t; )
                          (r += t[n]), (e[n++] = r & this.DM), (r >>= this.DB);
                        r += t.s;
                      }
                      (e.s = r < 0 ? -1 : 0),
                        r > 0 ? (e[n++] = r) : r < -1 && (e[n++] = this.DV + r),
                        (e.t = n),
                        e.clamp();
                    }),
                    (t.prototype.dMultiply = function (t) {
                      (this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
                        ++this.t,
                        this.clamp();
                    }),
                    (t.prototype.dAddOffset = function (t, e) {
                      if (0 != t) {
                        for (; this.t <= e; ) this[this.t++] = 0;
                        for (this[e] += t; this[e] >= this.DV; )
                          (this[e] -= this.DV),
                            ++e >= this.t && (this[this.t++] = 0),
                            ++this[e];
                      }
                    }),
                    (t.prototype.multiplyLowerTo = function (t, e, n) {
                      var r = Math.min(this.t + t.t, e);
                      for (n.s = 0, n.t = r; r > 0; ) n[--r] = 0;
                      for (var i = n.t - this.t; r < i; ++r)
                        n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
                      for (i = Math.min(t.t, e); r < i; ++r)
                        this.am(0, t[r], n, r, 0, e - r);
                      n.clamp();
                    }),
                    (t.prototype.multiplyUpperTo = function (t, e, n) {
                      --e;
                      var r = (n.t = this.t + t.t - e);
                      for (n.s = 0; --r >= 0; ) n[r] = 0;
                      for (r = Math.max(e - this.t, 0); r < t.t; ++r)
                        n[this.t + r - e] = this.am(
                          e - r,
                          t[r],
                          n,
                          0,
                          0,
                          this.t + r - e
                        );
                      n.clamp(), n.drShiftTo(1, n);
                    }),
                    (t.prototype.modInt = function (t) {
                      if (t <= 0) return 0;
                      var e = this.DV % t,
                        n = this.s < 0 ? t - 1 : 0;
                      if (this.t > 0)
                        if (0 == e) n = this[0] % t;
                        else
                          for (var r = this.t - 1; r >= 0; --r)
                            n = (e * n + this[r]) % t;
                      return n;
                    }),
                    (t.prototype.millerRabin = function (e) {
                      var n = this.subtract(t.ONE),
                        r = n.getLowestSetBit();
                      if (r <= 0) return !1;
                      var i = n.shiftRight(r);
                      (e = (e + 1) >> 1) > T.length && (e = T.length);
                      for (var o = I(), a = 0; a < e; ++a) {
                        o.fromInt(T[Math.floor(Math.random() * T.length)]);
                        var s = o.modPow(i, this);
                        if (0 != s.compareTo(t.ONE) && 0 != s.compareTo(n)) {
                          for (var c = 1; c++ < r && 0 != s.compareTo(n); )
                            if (
                              0 == (s = s.modPowInt(2, this)).compareTo(t.ONE)
                            )
                              return !1;
                          if (0 != s.compareTo(n)) return !1;
                        }
                      }
                      return !0;
                    }),
                    (t.prototype.square = function () {
                      var t = I();
                      return this.squareTo(t), t;
                    }),
                    (t.prototype.gcda = function (t, e) {
                      var n = this.s < 0 ? this.negate() : this.clone(),
                        r = t.s < 0 ? t.negate() : t.clone();
                      if (n.compareTo(r) < 0) {
                        var i = n;
                        (n = r), (r = i);
                      }
                      var o = n.getLowestSetBit(),
                        a = r.getLowestSetBit();
                      if (a < 0) e(n);
                      else {
                        o < a && (a = o),
                          a > 0 && (n.rShiftTo(a, n), r.rShiftTo(a, r));
                        var s = function () {
                          (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                            (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r),
                            n.compareTo(r) >= 0
                              ? (n.subTo(r, n), n.rShiftTo(1, n))
                              : (r.subTo(n, r), r.rShiftTo(1, r)),
                            n.signum() > 0
                              ? setTimeout(s, 0)
                              : (a > 0 && r.lShiftTo(a, r),
                                setTimeout(function () {
                                  e(r);
                                }, 0));
                        };
                        setTimeout(s, 10);
                      }
                    }),
                    (t.prototype.fromNumberAsync = function (e, n, r, i) {
                      if ("number" == typeof n) {
                        if (e < 2) this.fromInt(1);
                        else {
                          this.fromNumber(e, r),
                            this.testBit(e - 1) ||
                              this.bitwiseTo(t.ONE.shiftLeft(e - 1), o, this),
                            this.isEven() && this.dAddOffset(1, 0);
                          var a = this,
                            s = function () {
                              a.dAddOffset(2, 0),
                                a.bitLength() > e &&
                                  a.subTo(t.ONE.shiftLeft(e - 1), a),
                                a.isProbablePrime(n)
                                  ? setTimeout(function () {
                                      i();
                                    }, 0)
                                  : setTimeout(s, 0);
                            };
                          setTimeout(s, 0);
                        }
                      } else {
                        var c = [],
                          u = 7 & e;
                        (c.length = 1 + (e >> 3)),
                          n.nextBytes(c),
                          u > 0 ? (c[0] &= (1 << u) - 1) : (c[0] = 0),
                          this.fromString(c, 256);
                      }
                    }),
                    t
                  );
                })(),
                A = (function () {
                  function t() {}
                  return (
                    (t.prototype.convert = function (t) {
                      return t;
                    }),
                    (t.prototype.revert = function (t) {
                      return t;
                    }),
                    (t.prototype.mulTo = function (t, e, n) {
                      t.multiplyTo(e, n);
                    }),
                    (t.prototype.sqrTo = function (t, e) {
                      t.squareTo(e);
                    }),
                    t
                  );
                })(),
                C = (function () {
                  function t(t) {
                    this.m = t;
                  }
                  return (
                    (t.prototype.convert = function (t) {
                      return t.s < 0 || t.compareTo(this.m) >= 0
                        ? t.mod(this.m)
                        : t;
                    }),
                    (t.prototype.revert = function (t) {
                      return t;
                    }),
                    (t.prototype.reduce = function (t) {
                      t.divRemTo(this.m, null, t);
                    }),
                    (t.prototype.mulTo = function (t, e, n) {
                      t.multiplyTo(e, n), this.reduce(n);
                    }),
                    (t.prototype.sqrTo = function (t, e) {
                      t.squareTo(e), this.reduce(e);
                    }),
                    t
                  );
                })(),
                j = (function () {
                  function t(t) {
                    (this.m = t),
                      (this.mp = t.invDigit()),
                      (this.mpl = 32767 & this.mp),
                      (this.mph = this.mp >> 15),
                      (this.um = (1 << (t.DB - 15)) - 1),
                      (this.mt2 = 2 * t.t);
                  }
                  return (
                    (t.prototype.convert = function (t) {
                      var e = I();
                      return (
                        t.abs().dlShiftTo(this.m.t, e),
                        e.divRemTo(this.m, null, e),
                        t.s < 0 &&
                          e.compareTo(P.ZERO) > 0 &&
                          this.m.subTo(e, e),
                        e
                      );
                    }),
                    (t.prototype.revert = function (t) {
                      var e = I();
                      return t.copyTo(e), this.reduce(e), e;
                    }),
                    (t.prototype.reduce = function (t) {
                      for (; t.t <= this.mt2; ) t[t.t++] = 0;
                      for (var e = 0; e < this.m.t; ++e) {
                        var n = 32767 & t[e],
                          r =
                            (n * this.mpl +
                              (((n * this.mph + (t[e] >> 15) * this.mpl) &
                                this.um) <<
                                15)) &
                            t.DM;
                        for (
                          t[(n = e + this.m.t)] += this.m.am(
                            0,
                            r,
                            t,
                            e,
                            0,
                            this.m.t
                          );
                          t[n] >= t.DV;

                        )
                          (t[n] -= t.DV), t[++n]++;
                      }
                      t.clamp(),
                        t.drShiftTo(this.m.t, t),
                        t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
                    }),
                    (t.prototype.mulTo = function (t, e, n) {
                      t.multiplyTo(e, n), this.reduce(n);
                    }),
                    (t.prototype.sqrTo = function (t, e) {
                      t.squareTo(e), this.reduce(e);
                    }),
                    t
                  );
                })(),
                D = (function () {
                  function t(t) {
                    (this.m = t),
                      (this.r2 = I()),
                      (this.q3 = I()),
                      P.ONE.dlShiftTo(2 * t.t, this.r2),
                      (this.mu = this.r2.divide(t));
                  }
                  return (
                    (t.prototype.convert = function (t) {
                      if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                      if (t.compareTo(this.m) < 0) return t;
                      var e = I();
                      return t.copyTo(e), this.reduce(e), e;
                    }),
                    (t.prototype.revert = function (t) {
                      return t;
                    }),
                    (t.prototype.reduce = function (t) {
                      for (
                        t.drShiftTo(this.m.t - 1, this.r2),
                          t.t > this.m.t + 1 &&
                            ((t.t = this.m.t + 1), t.clamp()),
                          this.mu.multiplyUpperTo(
                            this.r2,
                            this.m.t + 1,
                            this.q3
                          ),
                          this.m.multiplyLowerTo(
                            this.q3,
                            this.m.t + 1,
                            this.r2
                          );
                        t.compareTo(this.r2) < 0;

                      )
                        t.dAddOffset(1, this.m.t + 1);
                      for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                        t.subTo(this.m, t);
                    }),
                    (t.prototype.mulTo = function (t, e, n) {
                      t.multiplyTo(e, n), this.reduce(n);
                    }),
                    (t.prototype.sqrTo = function (t, e) {
                      t.squareTo(e), this.reduce(e);
                    }),
                    t
                  );
                })();
              function I() {
                return new P(null);
              }
              function R(t, e) {
                return new P(t, e);
              }
              var N = void 0 !== x;
              N && "Microsoft Internet Explorer" == x.appName
                ? ((P.prototype.am = function (t, e, n, r, i, o) {
                    for (var a = 32767 & e, s = e >> 15; --o >= 0; ) {
                      var c = 32767 & this[t],
                        u = this[t++] >> 15,
                        h = s * c + u * a;
                      (i =
                        ((c =
                          a * c +
                          ((32767 & h) << 15) +
                          n[r] +
                          (1073741823 & i)) >>>
                          30) +
                        (h >>> 15) +
                        s * u +
                        (i >>> 30)),
                        (n[r++] = 1073741823 & c);
                    }
                    return i;
                  }),
                  (E = 30))
                : N && "Netscape" != x.appName
                ? ((P.prototype.am = function (t, e, n, r, i, o) {
                    for (; --o >= 0; ) {
                      var a = e * this[t++] + n[r] + i;
                      (i = Math.floor(a / 67108864)), (n[r++] = 67108863 & a);
                    }
                    return i;
                  }),
                  (E = 26))
                : ((P.prototype.am = function (t, e, n, r, i, o) {
                    for (var a = 16383 & e, s = e >> 14; --o >= 0; ) {
                      var c = 16383 & this[t],
                        u = this[t++] >> 14,
                        h = s * c + u * a;
                      (i =
                        ((c = a * c + ((16383 & h) << 14) + n[r] + i) >> 28) +
                        (h >> 14) +
                        s * u),
                        (n[r++] = 268435455 & c);
                    }
                    return i;
                  }),
                  (E = 28)),
                (P.prototype.DB = E),
                (P.prototype.DM = (1 << E) - 1),
                (P.prototype.DV = 1 << E),
                (P.prototype.FV = Math.pow(2, 52)),
                (P.prototype.F1 = 52 - E),
                (P.prototype.F2 = 2 * E - 52);
              var M,
                L,
                B = [];
              for (M = "0".charCodeAt(0), L = 0; L <= 9; ++L) B[M++] = L;
              for (M = "a".charCodeAt(0), L = 10; L < 36; ++L) B[M++] = L;
              for (M = "A".charCodeAt(0), L = 10; L < 36; ++L) B[M++] = L;
              function z(t, e) {
                var n = B[t.charCodeAt(e)];
                return null == n ? -1 : n;
              }
              function U(t) {
                var e = I();
                return e.fromInt(t), e;
              }
              function F(t) {
                var e,
                  n = 1;
                return (
                  0 != (e = t >>> 16) && ((t = e), (n += 16)),
                  0 != (e = t >> 8) && ((t = e), (n += 8)),
                  0 != (e = t >> 4) && ((t = e), (n += 4)),
                  0 != (e = t >> 2) && ((t = e), (n += 2)),
                  0 != (e = t >> 1) && ((t = e), (n += 1)),
                  n
                );
              }
              (P.ZERO = U(0)), (P.ONE = U(1));
              var H,
                q,
                V = (function () {
                  function t() {
                    (this.i = 0), (this.j = 0), (this.S = []);
                  }
                  return (
                    (t.prototype.init = function (t) {
                      var e, n, r;
                      for (e = 0; e < 256; ++e) this.S[e] = e;
                      for (n = 0, e = 0; e < 256; ++e)
                        (n = (n + this.S[e] + t[e % t.length]) & 255),
                          (r = this.S[e]),
                          (this.S[e] = this.S[n]),
                          (this.S[n] = r);
                      (this.i = 0), (this.j = 0);
                    }),
                    (t.prototype.next = function () {
                      var t;
                      return (
                        (this.i = (this.i + 1) & 255),
                        (this.j = (this.j + this.S[this.i]) & 255),
                        (t = this.S[this.i]),
                        (this.S[this.i] = this.S[this.j]),
                        (this.S[this.j] = t),
                        this.S[(t + this.S[this.i]) & 255]
                      );
                    }),
                    t
                  );
                })(),
                G = {
                  ASN1: null,
                  Base64: null,
                  Hex: null,
                  crypto: null,
                  href: null,
                },
                K = null;
              if (null == K) {
                (K = []), (q = 0);
                var Y = void 0;
                if (G.crypto && G.crypto.getRandomValues) {
                  var W = new Uint32Array(256);
                  for (G.crypto.getRandomValues(W), Y = 0; Y < W.length; ++Y)
                    K[q++] = 255 & W[Y];
                }
                var $ = 0,
                  Z = function (t) {
                    if (($ = $ || 0) >= 256 || q >= 256)
                      G.removeEventListener
                        ? G.removeEventListener("mousemove", Z, !1)
                        : G.detachEvent && G.detachEvent("onmousemove", Z);
                    else
                      try {
                        var e = t.x + t.y;
                        (K[q++] = 255 & e), ($ += 1);
                      } catch (t) {}
                  };
                G.addEventListener
                  ? G.addEventListener("mousemove", Z, !1)
                  : G.attachEvent && G.attachEvent("onmousemove", Z);
              }
              function Q() {
                if (null == H) {
                  for (H = new V(); q < 256; ) {
                    var t = Math.floor(65536 * Math.random());
                    K[q++] = 255 & t;
                  }
                  for (H.init(K), q = 0; q < K.length; ++q) K[q] = 0;
                  q = 0;
                }
                return H.next();
              }
              var X = (function () {
                  function t() {}
                  return (
                    (t.prototype.nextBytes = function (t) {
                      for (var e = 0; e < t.length; ++e) t[e] = Q();
                    }),
                    t
                  );
                })(),
                J = (function () {
                  function t() {
                    (this.n = null),
                      (this.e = 0),
                      (this.d = null),
                      (this.p = null),
                      (this.q = null),
                      (this.dmp1 = null),
                      (this.dmq1 = null),
                      (this.coeff = null);
                  }
                  return (
                    (t.prototype.doPublic = function (t) {
                      return t.modPowInt(this.e, this.n);
                    }),
                    (t.prototype.doPrivate = function (t) {
                      if (null == this.p || null == this.q)
                        return t.modPow(this.d, this.n);
                      for (
                        var e = t.mod(this.p).modPow(this.dmp1, this.p),
                          n = t.mod(this.q).modPow(this.dmq1, this.q);
                        e.compareTo(n) < 0;

                      )
                        e = e.add(this.p);
                      return e
                        .subtract(n)
                        .multiply(this.coeff)
                        .mod(this.p)
                        .multiply(this.q)
                        .add(n);
                    }),
                    (t.prototype.setPublic = function (t, e) {
                      null != t &&
                        null != e &&
                        t.length > 0 &&
                        e.length > 0 &&
                        ((this.n = R(t, 16)), (this.e = parseInt(e, 16)));
                    }),
                    (t.prototype.encrypt = function (t) {
                      var e = (function (t, e) {
                        if (e < t.length + 11) return null;
                        for (var n = [], r = t.length - 1; r >= 0 && e > 0; ) {
                          var i = t.charCodeAt(r--);
                          i < 128
                            ? (n[--e] = i)
                            : i > 127 && i < 2048
                            ? ((n[--e] = (63 & i) | 128),
                              (n[--e] = (i >> 6) | 192))
                            : ((n[--e] = (63 & i) | 128),
                              (n[--e] = ((i >> 6) & 63) | 128),
                              (n[--e] = (i >> 12) | 224));
                        }
                        n[--e] = 0;
                        for (var o = new X(), a = []; e > 2; ) {
                          for (a[0] = 0; 0 == a[0]; ) o.nextBytes(a);
                          n[--e] = a[0];
                        }
                        return (n[--e] = 2), (n[--e] = 0), new P(n);
                      })(t, (this.n.bitLength() + 7) >> 3);
                      if (null == e) return null;
                      var n = this.doPublic(e);
                      if (null == n) return null;
                      var r = n.toString(16);
                      return 0 == (1 & r.length) ? r : "0" + r;
                    }),
                    (t.prototype.setPrivate = function (t, e, n) {
                      null != t &&
                        null != e &&
                        t.length > 0 &&
                        e.length > 0 &&
                        ((this.n = R(t, 16)),
                        (this.e = parseInt(e, 16)),
                        (this.d = R(n, 16)));
                    }),
                    (t.prototype.setPrivateEx = function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s
                    ) {
                      null != t &&
                        null != e &&
                        t.length > 0 &&
                        e.length > 0 &&
                        ((this.n = R(t, 16)),
                        (this.e = parseInt(e, 16)),
                        (this.d = R(n, 16)),
                        (this.p = R(r, 16)),
                        (this.q = R(i, 16)),
                        (this.dmp1 = R(o, 16)),
                        (this.dmq1 = R(a, 16)),
                        (this.coeff = R(s, 16)));
                    }),
                    (t.prototype.generate = function (t, e) {
                      var n = new X(),
                        r = t >> 1;
                      this.e = parseInt(e, 16);
                      for (var i = new P(e, 16); ; ) {
                        for (
                          ;
                          (this.p = new P(t - r, 1, n)),
                            0 !=
                              this.p.subtract(P.ONE).gcd(i).compareTo(P.ONE) ||
                              !this.p.isProbablePrime(10);

                        );
                        for (
                          ;
                          (this.q = new P(r, 1, n)),
                            0 !=
                              this.q.subtract(P.ONE).gcd(i).compareTo(P.ONE) ||
                              !this.q.isProbablePrime(10);

                        );
                        if (this.p.compareTo(this.q) <= 0) {
                          var o = this.p;
                          (this.p = this.q), (this.q = o);
                        }
                        var a = this.p.subtract(P.ONE),
                          s = this.q.subtract(P.ONE),
                          c = a.multiply(s);
                        if (0 == c.gcd(i).compareTo(P.ONE)) {
                          (this.n = this.p.multiply(this.q)),
                            (this.d = i.modInverse(c)),
                            (this.dmp1 = this.d.mod(a)),
                            (this.dmq1 = this.d.mod(s)),
                            (this.coeff = this.q.modInverse(this.p));
                          break;
                        }
                      }
                    }),
                    (t.prototype.decrypt = function (t) {
                      var e = R(t, 16),
                        n = this.doPrivate(e);
                      return null == n
                        ? null
                        : (function (t, e) {
                            for (
                              var n = t.toByteArray(), r = 0;
                              r < n.length && 0 == n[r];

                            )
                              ++r;
                            if (n.length - r != e - 1 || 2 != n[r]) return null;
                            for (++r; 0 != n[r]; )
                              if (++r >= n.length) return null;
                            for (var i = ""; ++r < n.length; ) {
                              var o = 255 & n[r];
                              o < 128
                                ? (i += String.fromCharCode(o))
                                : o > 191 && o < 224
                                ? ((i += String.fromCharCode(
                                    ((31 & o) << 6) | (63 & n[r + 1])
                                  )),
                                  ++r)
                                : ((i += String.fromCharCode(
                                    ((15 & o) << 12) |
                                      ((63 & n[r + 1]) << 6) |
                                      (63 & n[r + 2])
                                  )),
                                  (r += 2));
                            }
                            return i;
                          })(n, (this.n.bitLength() + 7) >> 3);
                    }),
                    (t.prototype.generateAsync = function (t, e, n) {
                      var r = new X(),
                        i = t >> 1;
                      this.e = parseInt(e, 16);
                      var o = new P(e, 16),
                        a = this,
                        s = function () {
                          var e = function () {
                              if (a.p.compareTo(a.q) <= 0) {
                                var t = a.p;
                                (a.p = a.q), (a.q = t);
                              }
                              var e = a.p.subtract(P.ONE),
                                r = a.q.subtract(P.ONE),
                                i = e.multiply(r);
                              0 == i.gcd(o).compareTo(P.ONE)
                                ? ((a.n = a.p.multiply(a.q)),
                                  (a.d = o.modInverse(i)),
                                  (a.dmp1 = a.d.mod(e)),
                                  (a.dmq1 = a.d.mod(r)),
                                  (a.coeff = a.q.modInverse(a.p)),
                                  setTimeout(function () {
                                    n();
                                  }, 0))
                                : setTimeout(s, 0);
                            },
                            c = function () {
                              (a.q = I()),
                                a.q.fromNumberAsync(i, 1, r, function () {
                                  a.q.subtract(P.ONE).gcda(o, function (t) {
                                    0 == t.compareTo(P.ONE) &&
                                    a.q.isProbablePrime(10)
                                      ? setTimeout(e, 0)
                                      : setTimeout(c, 0);
                                  });
                                });
                            },
                            u = function () {
                              (a.p = I()),
                                a.p.fromNumberAsync(t - i, 1, r, function () {
                                  a.p.subtract(P.ONE).gcda(o, function (t) {
                                    0 == t.compareTo(P.ONE) &&
                                    a.p.isProbablePrime(10)
                                      ? setTimeout(c, 0)
                                      : setTimeout(u, 0);
                                  });
                                });
                            };
                          setTimeout(u, 0);
                        };
                      setTimeout(s, 0);
                    }),
                    (t.prototype.sign = function (t, e, n) {
                      var r = (function (t, e) {
                        if (e < t.length + 22) return null;
                        for (
                          var n = e - t.length - 6, r = "", i = 0;
                          i < n;
                          i += 2
                        )
                          r += "ff";
                        return R("0001" + r + "00" + t, 16);
                      })(
                        (tt[n] || "") + e(t).toString(),
                        this.n.bitLength() / 4
                      );
                      if (null == r) return null;
                      var i = this.doPrivate(r);
                      if (null == i) return null;
                      var o = i.toString(16);
                      return 0 == (1 & o.length) ? o : "0" + o;
                    }),
                    (t.prototype.verify = function (t, e, n) {
                      var r = R(e, 16),
                        i = this.doPublic(r);
                      return null == i
                        ? null
                        : (function (t) {
                            for (var e in tt)
                              if (tt.hasOwnProperty(e)) {
                                var n = tt[e],
                                  r = n.length;
                                if (t.substr(0, r) == n) return t.substr(r);
                              }
                            return t;
                          })(i.toString(16).replace(/^1f+00/, "")) ==
                            n(t).toString();
                    }),
                    t
                  );
                })(),
                tt = {
                  md2: "3020300c06082a864886f70d020205000410",
                  md5: "3020300c06082a864886f70d020505000410",
                  sha1: "3021300906052b0e03021a05000414",
                  sha224: "302d300d06096086480165030402040500041c",
                  sha256: "3031300d060960864801650304020105000420",
                  sha384: "3041300d060960864801650304020205000430",
                  sha512: "3051300d060960864801650304020305000440",
                  ripemd160: "3021300906052b2403020105000414",
                },
                et = {};
              et.lang = {
                extend: function (t, e, n) {
                  if (!e || !t)
                    throw new Error(
                      "YAHOO.lang.extend failed, please check that all dependencies are included."
                    );
                  var r = function () {};
                  if (
                    ((r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t),
                    (t.superclass = e.prototype),
                    e.prototype.constructor == Object.prototype.constructor &&
                      (e.prototype.constructor = e),
                    n)
                  ) {
                    var i;
                    for (i in n) t.prototype[i] = n[i];
                    var o = function () {},
                      a = ["toString", "valueOf"];
                    try {
                      /MSIE/.test(navigator.userAgent) &&
                        (o = function (t, e) {
                          for (i = 0; i < a.length; i += 1) {
                            var n = a[i],
                              r = e[n];
                            "function" == typeof r &&
                              r != Object.prototype[n] &&
                              (t[n] = r);
                          }
                        });
                    } catch (t) {}
                    o(t.prototype, n);
                  }
                },
              };
              var nt = {};
              (void 0 !== nt.asn1 && nt.asn1) || (nt.asn1 = {}),
                (nt.asn1.ASN1Util = new (function () {
                  (this.integerToByteHex = function (t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e), e;
                  }),
                    (this.bigIntToMinTwosComplementsHex = function (t) {
                      var e = t.toString(16);
                      if ("-" != e.substr(0, 1))
                        e.length % 2 == 1
                          ? (e = "0" + e)
                          : e.match(/^[0-7]/) || (e = "00" + e);
                      else {
                        var n = e.substr(1).length;
                        n % 2 == 1 ? (n += 1) : e.match(/^[0-7]/) || (n += 2);
                        for (var r = "", i = 0; i < n; i++) r += "f";
                        e = new P(r, 16)
                          .xor(t)
                          .add(P.ONE)
                          .toString(16)
                          .replace(/^-/, "");
                      }
                      return e;
                    }),
                    (this.getPEMStringFromHex = function (t, e) {
                      return hextopem(t, e);
                    }),
                    (this.newObject = function (t) {
                      var e = nt.asn1,
                        n = e.DERBoolean,
                        r = e.DERInteger,
                        i = e.DERBitString,
                        o = e.DEROctetString,
                        a = e.DERNull,
                        s = e.DERObjectIdentifier,
                        c = e.DEREnumerated,
                        u = e.DERUTF8String,
                        h = e.DERNumericString,
                        f = e.DERPrintableString,
                        l = e.DERTeletexString,
                        p = e.DERIA5String,
                        d = e.DERUTCTime,
                        v = e.DERGeneralizedTime,
                        y = e.DERSequence,
                        g = e.DERSet,
                        m = e.DERTaggedObject,
                        b = e.ASN1Util.newObject,
                        _ = Object.keys(t);
                      if (1 != _.length)
                        throw "key of param shall be only one.";
                      var E = _[0];
                      if (
                        -1 ==
                        ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(
                          ":" + E + ":"
                        )
                      )
                        throw "undefined key: " + E;
                      if ("bool" == E) return new n(t[E]);
                      if ("int" == E) return new r(t[E]);
                      if ("bitstr" == E) return new i(t[E]);
                      if ("octstr" == E) return new o(t[E]);
                      if ("null" == E) return new a(t[E]);
                      if ("oid" == E) return new s(t[E]);
                      if ("enum" == E) return new c(t[E]);
                      if ("utf8str" == E) return new u(t[E]);
                      if ("numstr" == E) return new h(t[E]);
                      if ("prnstr" == E) return new f(t[E]);
                      if ("telstr" == E) return new l(t[E]);
                      if ("ia5str" == E) return new p(t[E]);
                      if ("utctime" == E) return new d(t[E]);
                      if ("gentime" == E) return new v(t[E]);
                      if ("seq" == E) {
                        for (var w = t[E], O = [], S = 0; S < w.length; S++) {
                          var x = b(w[S]);
                          O.push(x);
                        }
                        return new y({ array: O });
                      }
                      if ("set" == E) {
                        for (w = t[E], O = [], S = 0; S < w.length; S++)
                          (x = b(w[S])), O.push(x);
                        return new g({ array: O });
                      }
                      if ("tag" == E) {
                        var T = t[E];
                        if (
                          "[object Array]" ===
                            Object.prototype.toString.call(T) &&
                          3 == T.length
                        ) {
                          var k = b(T[2]);
                          return new m({ tag: T[0], explicit: T[1], obj: k });
                        }
                        var P = {};
                        if (
                          (void 0 !== T.explicit && (P.explicit = T.explicit),
                          void 0 !== T.tag && (P.tag = T.tag),
                          void 0 === T.obj)
                        )
                          throw "obj shall be specified for 'tag'.";
                        return (P.obj = b(T.obj)), new m(P);
                      }
                    }),
                    (this.jsonToASN1HEX = function (t) {
                      return this.newObject(t).getEncodedHex();
                    });
                })()),
                (nt.asn1.ASN1Util.oidHexToInt = function (t) {
                  for (
                    var e = "",
                      n = parseInt(t.substr(0, 2), 16),
                      r = ((e = Math.floor(n / 40) + "." + (n % 40)), ""),
                      i = 2;
                    i < t.length;
                    i += 2
                  ) {
                    var o = (
                      "00000000" + parseInt(t.substr(i, 2), 16).toString(2)
                    ).slice(-8);
                    (r += o.substr(1, 7)),
                      "0" == o.substr(0, 1) &&
                        ((e = e + "." + new P(r, 2).toString(10)), (r = ""));
                  }
                  return e;
                }),
                (nt.asn1.ASN1Util.oidIntToHex = function (t) {
                  var e = function (t) {
                      var e = t.toString(16);
                      return 1 == e.length && (e = "0" + e), e;
                    },
                    n = function (t) {
                      var n = "",
                        r = new P(t, 10).toString(2),
                        i = 7 - (r.length % 7);
                      7 == i && (i = 0);
                      for (var o = "", a = 0; a < i; a++) o += "0";
                      for (r = o + r, a = 0; a < r.length - 1; a += 7) {
                        var s = r.substr(a, 7);
                        a != r.length - 7 && (s = "1" + s),
                          (n += e(parseInt(s, 2)));
                      }
                      return n;
                    };
                  if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                  var r = "",
                    i = t.split("."),
                    o = 40 * parseInt(i[0]) + parseInt(i[1]);
                  (r += e(o)), i.splice(0, 2);
                  for (var a = 0; a < i.length; a++) r += n(i[a]);
                  return r;
                }),
                (nt.asn1.ASN1Object = function () {
                  (this.getLengthHexFromValue = function () {
                    if (void 0 === this.hV || null == this.hV)
                      throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1)
                      throw (
                        "value hex must be even length: n=" +
                        "".length +
                        ",v=" +
                        this.hV
                      );
                    var t = this.hV.length / 2,
                      e = t.toString(16);
                    if ((e.length % 2 == 1 && (e = "0" + e), t < 128)) return e;
                    var n = e.length / 2;
                    if (n > 15)
                      throw (
                        "ASN.1 length too long to represent by 8x: n = " +
                        t.toString(16)
                      );
                    return (128 + n).toString(16) + e;
                  }),
                    (this.getEncodedHex = function () {
                      return (
                        (null == this.hTLV || this.isModified) &&
                          ((this.hV = this.getFreshValueHex()),
                          (this.hL = this.getLengthHexFromValue()),
                          (this.hTLV = this.hT + this.hL + this.hV),
                          (this.isModified = !1)),
                        this.hTLV
                      );
                    }),
                    (this.getValueHex = function () {
                      return this.getEncodedHex(), this.hV;
                    }),
                    (this.getFreshValueHex = function () {
                      return "";
                    });
                }),
                (nt.asn1.DERAbstractString = function (t) {
                  nt.asn1.DERAbstractString.superclass.constructor.call(this),
                    (this.getString = function () {
                      return this.s;
                    }),
                    (this.setString = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.s = t),
                        (this.hV = stohex(this.s));
                    }),
                    (this.setStringHex = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.s = null),
                        (this.hV = t);
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== t &&
                      ("string" == typeof t
                        ? this.setString(t)
                        : void 0 !== t.str
                        ? this.setString(t.str)
                        : void 0 !== t.hex && this.setStringHex(t.hex));
                }),
                et.lang.extend(nt.asn1.DERAbstractString, nt.asn1.ASN1Object),
                (nt.asn1.DERAbstractTime = function (t) {
                  nt.asn1.DERAbstractTime.superclass.constructor.call(this),
                    (this.localDateToUTC = function (t) {
                      return (
                        (utc = t.getTime() + 6e4 * t.getTimezoneOffset()),
                        new Date(utc)
                      );
                    }),
                    (this.formatDate = function (t, e, n) {
                      var r = this.zeroPadding,
                        i = this.localDateToUTC(t),
                        o = String(i.getFullYear());
                      "utc" == e && (o = o.substr(2, 2));
                      var a =
                        o +
                        r(String(i.getMonth() + 1), 2) +
                        r(String(i.getDate()), 2) +
                        r(String(i.getHours()), 2) +
                        r(String(i.getMinutes()), 2) +
                        r(String(i.getSeconds()), 2);
                      if (!0 === n) {
                        var s = i.getMilliseconds();
                        if (0 != s) {
                          var c = r(String(s), 3);
                          a = a + "." + (c = c.replace(/[0]+$/, ""));
                        }
                      }
                      return a + "Z";
                    }),
                    (this.zeroPadding = function (t, e) {
                      return t.length >= e
                        ? t
                        : new Array(e - t.length + 1).join("0") + t;
                    }),
                    (this.getString = function () {
                      return this.s;
                    }),
                    (this.setString = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.s = t),
                        (this.hV = stohex(t));
                    }),
                    (this.setByDateValue = function (t, e, n, r, i, o) {
                      var a = new Date(Date.UTC(t, e - 1, n, r, i, o, 0));
                      this.setByDate(a);
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    });
                }),
                et.lang.extend(nt.asn1.DERAbstractTime, nt.asn1.ASN1Object),
                (nt.asn1.DERAbstractStructured = function (t) {
                  nt.asn1.DERAbstractString.superclass.constructor.call(this),
                    (this.setByASN1ObjectArray = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.asn1Array = t);
                    }),
                    (this.appendASN1Object = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        this.asn1Array.push(t);
                    }),
                    (this.asn1Array = new Array()),
                    void 0 !== t &&
                      void 0 !== t.array &&
                      (this.asn1Array = t.array);
                }),
                et.lang.extend(
                  nt.asn1.DERAbstractStructured,
                  nt.asn1.ASN1Object
                ),
                (nt.asn1.DERBoolean = function () {
                  nt.asn1.DERBoolean.superclass.constructor.call(this),
                    (this.hT = "01"),
                    (this.hTLV = "0101ff");
                }),
                et.lang.extend(nt.asn1.DERBoolean, nt.asn1.ASN1Object),
                (nt.asn1.DERInteger = function (t) {
                  nt.asn1.DERInteger.superclass.constructor.call(this),
                    (this.hT = "02"),
                    (this.setByBigInteger = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.hV =
                          nt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t));
                    }),
                    (this.setByInteger = function (t) {
                      var e = new P(String(t), 10);
                      this.setByBigInteger(e);
                    }),
                    (this.setValueHex = function (t) {
                      this.hV = t;
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== t &&
                      (void 0 !== t.bigint
                        ? this.setByBigInteger(t.bigint)
                        : void 0 !== t.int
                        ? this.setByInteger(t.int)
                        : "number" == typeof t
                        ? this.setByInteger(t)
                        : void 0 !== t.hex && this.setValueHex(t.hex));
                }),
                et.lang.extend(nt.asn1.DERInteger, nt.asn1.ASN1Object),
                (nt.asn1.DERBitString = function (t) {
                  if (void 0 !== t && void 0 !== t.obj) {
                    var e = nt.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex();
                  }
                  nt.asn1.DERBitString.superclass.constructor.call(this),
                    (this.hT = "03"),
                    (this.setHexValueIncludingUnusedBits = function (t) {
                      (this.hTLV = null), (this.isModified = !0), (this.hV = t);
                    }),
                    (this.setUnusedBitsAndHexValue = function (t, e) {
                      if (t < 0 || 7 < t)
                        throw "unused bits shall be from 0 to 7: u = " + t;
                      var n = "0" + t;
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.hV = n + e);
                    }),
                    (this.setByBinaryString = function (t) {
                      var e = 8 - ((t = t.replace(/0+$/, "")).length % 8);
                      8 == e && (e = 0);
                      for (var n = 0; n <= e; n++) t += "0";
                      var r = "";
                      for (n = 0; n < t.length - 1; n += 8) {
                        var i = t.substr(n, 8),
                          o = parseInt(i, 2).toString(16);
                        1 == o.length && (o = "0" + o), (r += o);
                      }
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.hV = "0" + e + r);
                    }),
                    (this.setByBooleanArray = function (t) {
                      for (var e = "", n = 0; n < t.length; n++)
                        1 == t[n] ? (e += "1") : (e += "0");
                      this.setByBinaryString(e);
                    }),
                    (this.newFalseArray = function (t) {
                      for (var e = new Array(t), n = 0; n < t; n++) e[n] = !1;
                      return e;
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== t &&
                      ("string" == typeof t &&
                      t.toLowerCase().match(/^[0-9a-f]+$/)
                        ? this.setHexValueIncludingUnusedBits(t)
                        : void 0 !== t.hex
                        ? this.setHexValueIncludingUnusedBits(t.hex)
                        : void 0 !== t.bin
                        ? this.setByBinaryString(t.bin)
                        : void 0 !== t.array &&
                          this.setByBooleanArray(t.array));
                }),
                et.lang.extend(nt.asn1.DERBitString, nt.asn1.ASN1Object),
                (nt.asn1.DEROctetString = function (t) {
                  if (void 0 !== t && void 0 !== t.obj) {
                    var e = nt.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex();
                  }
                  nt.asn1.DEROctetString.superclass.constructor.call(this, t),
                    (this.hT = "04");
                }),
                et.lang.extend(
                  nt.asn1.DEROctetString,
                  nt.asn1.DERAbstractString
                ),
                (nt.asn1.DERNull = function () {
                  nt.asn1.DERNull.superclass.constructor.call(this),
                    (this.hT = "05"),
                    (this.hTLV = "0500");
                }),
                et.lang.extend(nt.asn1.DERNull, nt.asn1.ASN1Object),
                (nt.asn1.DERObjectIdentifier = function (t) {
                  var e = function (t) {
                      var e = t.toString(16);
                      return 1 == e.length && (e = "0" + e), e;
                    },
                    n = function (t) {
                      var n = "",
                        r = new P(t, 10).toString(2),
                        i = 7 - (r.length % 7);
                      7 == i && (i = 0);
                      for (var o = "", a = 0; a < i; a++) o += "0";
                      for (r = o + r, a = 0; a < r.length - 1; a += 7) {
                        var s = r.substr(a, 7);
                        a != r.length - 7 && (s = "1" + s),
                          (n += e(parseInt(s, 2)));
                      }
                      return n;
                    };
                  nt.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                    (this.hT = "06"),
                    (this.setValueHex = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.s = null),
                        (this.hV = t);
                    }),
                    (this.setValueOidString = function (t) {
                      if (!t.match(/^[0-9.]+$/))
                        throw "malformed oid string: " + t;
                      var r = "",
                        i = t.split("."),
                        o = 40 * parseInt(i[0]) + parseInt(i[1]);
                      (r += e(o)), i.splice(0, 2);
                      for (var a = 0; a < i.length; a++) r += n(i[a]);
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.s = null),
                        (this.hV = r);
                    }),
                    (this.setValueName = function (t) {
                      var e = nt.asn1.x509.OID.name2oid(t);
                      if ("" === e)
                        throw "DERObjectIdentifier oidName undefined: " + t;
                      this.setValueOidString(e);
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== t &&
                      ("string" == typeof t
                        ? t.match(/^[0-2].[0-9.]+$/)
                          ? this.setValueOidString(t)
                          : this.setValueName(t)
                        : void 0 !== t.oid
                        ? this.setValueOidString(t.oid)
                        : void 0 !== t.hex
                        ? this.setValueHex(t.hex)
                        : void 0 !== t.name && this.setValueName(t.name));
                }),
                et.lang.extend(nt.asn1.DERObjectIdentifier, nt.asn1.ASN1Object),
                (nt.asn1.DEREnumerated = function (t) {
                  nt.asn1.DEREnumerated.superclass.constructor.call(this),
                    (this.hT = "0a"),
                    (this.setByBigInteger = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.hV =
                          nt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t));
                    }),
                    (this.setByInteger = function (t) {
                      var e = new P(String(t), 10);
                      this.setByBigInteger(e);
                    }),
                    (this.setValueHex = function (t) {
                      this.hV = t;
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== t &&
                      (void 0 !== t.int
                        ? this.setByInteger(t.int)
                        : "number" == typeof t
                        ? this.setByInteger(t)
                        : void 0 !== t.hex && this.setValueHex(t.hex));
                }),
                et.lang.extend(nt.asn1.DEREnumerated, nt.asn1.ASN1Object),
                (nt.asn1.DERUTF8String = function (t) {
                  nt.asn1.DERUTF8String.superclass.constructor.call(this, t),
                    (this.hT = "0c");
                }),
                et.lang.extend(
                  nt.asn1.DERUTF8String,
                  nt.asn1.DERAbstractString
                ),
                (nt.asn1.DERNumericString = function (t) {
                  nt.asn1.DERNumericString.superclass.constructor.call(this, t),
                    (this.hT = "12");
                }),
                et.lang.extend(
                  nt.asn1.DERNumericString,
                  nt.asn1.DERAbstractString
                ),
                (nt.asn1.DERPrintableString = function (t) {
                  nt.asn1.DERPrintableString.superclass.constructor.call(
                    this,
                    t
                  ),
                    (this.hT = "13");
                }),
                et.lang.extend(
                  nt.asn1.DERPrintableString,
                  nt.asn1.DERAbstractString
                ),
                (nt.asn1.DERTeletexString = function (t) {
                  nt.asn1.DERTeletexString.superclass.constructor.call(this, t),
                    (this.hT = "14");
                }),
                et.lang.extend(
                  nt.asn1.DERTeletexString,
                  nt.asn1.DERAbstractString
                ),
                (nt.asn1.DERIA5String = function (t) {
                  nt.asn1.DERIA5String.superclass.constructor.call(this, t),
                    (this.hT = "16");
                }),
                et.lang.extend(nt.asn1.DERIA5String, nt.asn1.DERAbstractString),
                (nt.asn1.DERUTCTime = function (t) {
                  nt.asn1.DERUTCTime.superclass.constructor.call(this, t),
                    (this.hT = "17"),
                    (this.setByDate = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.date = t),
                        (this.s = this.formatDate(this.date, "utc")),
                        (this.hV = stohex(this.s));
                    }),
                    (this.getFreshValueHex = function () {
                      return (
                        void 0 === this.date &&
                          void 0 === this.s &&
                          ((this.date = new Date()),
                          (this.s = this.formatDate(this.date, "utc")),
                          (this.hV = stohex(this.s))),
                        this.hV
                      );
                    }),
                    void 0 !== t &&
                      (void 0 !== t.str
                        ? this.setString(t.str)
                        : "string" == typeof t && t.match(/^[0-9]{12}Z$/)
                        ? this.setString(t)
                        : void 0 !== t.hex
                        ? this.setStringHex(t.hex)
                        : void 0 !== t.date && this.setByDate(t.date));
                }),
                et.lang.extend(nt.asn1.DERUTCTime, nt.asn1.DERAbstractTime),
                (nt.asn1.DERGeneralizedTime = function (t) {
                  nt.asn1.DERGeneralizedTime.superclass.constructor.call(
                    this,
                    t
                  ),
                    (this.hT = "18"),
                    (this.withMillis = !1),
                    (this.setByDate = function (t) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.date = t),
                        (this.s = this.formatDate(
                          this.date,
                          "gen",
                          this.withMillis
                        )),
                        (this.hV = stohex(this.s));
                    }),
                    (this.getFreshValueHex = function () {
                      return (
                        void 0 === this.date &&
                          void 0 === this.s &&
                          ((this.date = new Date()),
                          (this.s = this.formatDate(
                            this.date,
                            "gen",
                            this.withMillis
                          )),
                          (this.hV = stohex(this.s))),
                        this.hV
                      );
                    }),
                    void 0 !== t &&
                      (void 0 !== t.str
                        ? this.setString(t.str)
                        : "string" == typeof t && t.match(/^[0-9]{14}Z$/)
                        ? this.setString(t)
                        : void 0 !== t.hex
                        ? this.setStringHex(t.hex)
                        : void 0 !== t.date && this.setByDate(t.date),
                      !0 === t.millis && (this.withMillis = !0));
                }),
                et.lang.extend(
                  nt.asn1.DERGeneralizedTime,
                  nt.asn1.DERAbstractTime
                ),
                (nt.asn1.DERSequence = function (t) {
                  nt.asn1.DERSequence.superclass.constructor.call(this, t),
                    (this.hT = "30"),
                    (this.getFreshValueHex = function () {
                      for (var t = "", e = 0; e < this.asn1Array.length; e++)
                        t += this.asn1Array[e].getEncodedHex();
                      return (this.hV = t), this.hV;
                    });
                }),
                et.lang.extend(
                  nt.asn1.DERSequence,
                  nt.asn1.DERAbstractStructured
                ),
                (nt.asn1.DERSet = function (t) {
                  nt.asn1.DERSet.superclass.constructor.call(this, t),
                    (this.hT = "31"),
                    (this.sortFlag = !0),
                    (this.getFreshValueHex = function () {
                      for (
                        var t = new Array(), e = 0;
                        e < this.asn1Array.length;
                        e++
                      ) {
                        var n = this.asn1Array[e];
                        t.push(n.getEncodedHex());
                      }
                      return (
                        1 == this.sortFlag && t.sort(),
                        (this.hV = t.join("")),
                        this.hV
                      );
                    }),
                    void 0 !== t &&
                      void 0 !== t.sortflag &&
                      0 == t.sortflag &&
                      (this.sortFlag = !1);
                }),
                et.lang.extend(nt.asn1.DERSet, nt.asn1.DERAbstractStructured),
                (nt.asn1.DERTaggedObject = function (t) {
                  nt.asn1.DERTaggedObject.superclass.constructor.call(this),
                    (this.hT = "a0"),
                    (this.hV = ""),
                    (this.isExplicit = !0),
                    (this.asn1Object = null),
                    (this.setASN1Object = function (t, e, n) {
                      (this.hT = e),
                        (this.isExplicit = t),
                        (this.asn1Object = n),
                        this.isExplicit
                          ? ((this.hV = this.asn1Object.getEncodedHex()),
                            (this.hTLV = null),
                            (this.isModified = !0))
                          : ((this.hV = null),
                            (this.hTLV = n.getEncodedHex()),
                            (this.hTLV = this.hTLV.replace(/^../, e)),
                            (this.isModified = !1));
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== t &&
                      (void 0 !== t.tag && (this.hT = t.tag),
                      void 0 !== t.explicit && (this.isExplicit = t.explicit),
                      void 0 !== t.obj &&
                        ((this.asn1Object = t.obj),
                        this.setASN1Object(
                          this.isExplicit,
                          this.hT,
                          this.asn1Object
                        )));
                }),
                et.lang.extend(nt.asn1.DERTaggedObject, nt.asn1.ASN1Object);
              var rt,
                it =
                  ((rt = function (t, e) {
                    return (rt =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    rt(t, e),
                      (t.prototype =
                        null === e
                          ? Object.create(e)
                          : ((n.prototype = e.prototype), new n()));
                  }),
                ot = (function (t) {
                  function e(n) {
                    var r = t.call(this) || this;
                    return (
                      n &&
                        ("string" == typeof n
                          ? r.parseKey(n)
                          : (e.hasPrivateKeyProperty(n) ||
                              e.hasPublicKeyProperty(n)) &&
                            r.parsePropertiesFrom(n)),
                      r
                    );
                  }
                  return (
                    it(e, t),
                    (e.prototype.parseKey = function (t) {
                      try {
                        var e = 0,
                          n = 0,
                          r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t)
                            ? (function (t) {
                                var e;
                                if (void 0 === h) {
                                  var n = "0123456789ABCDEF",
                                    r = " \f\n\r\t \u2028\u2029";
                                  for (h = {}, e = 0; e < 16; ++e)
                                    h[n.charAt(e)] = e;
                                  for (n = n.toLowerCase(), e = 10; e < 16; ++e)
                                    h[n.charAt(e)] = e;
                                  for (e = 0; e < r.length; ++e)
                                    h[r.charAt(e)] = -1;
                                }
                                var i = [],
                                  o = 0,
                                  a = 0;
                                for (e = 0; e < t.length; ++e) {
                                  var s = t.charAt(e);
                                  if ("=" == s) break;
                                  if (-1 != (s = h[s])) {
                                    if (void 0 === s)
                                      throw new Error(
                                        "Illegal character at offset " + e
                                      );
                                    (o |= s),
                                      ++a >= 2
                                        ? ((i[i.length] = o), (o = 0), (a = 0))
                                        : (o <<= 4);
                                  }
                                }
                                if (a)
                                  throw new Error(
                                    "Hex encoding incomplete: 4 bits missing"
                                  );
                                return i;
                              })(t)
                            : v.unarmor(t),
                          i = O.decode(r);
                        if (
                          (3 === i.sub.length && (i = i.sub[2].sub[0]),
                          9 === i.sub.length)
                        ) {
                          (e = i.sub[1].getHexStringValue()),
                            (this.n = R(e, 16)),
                            (n = i.sub[2].getHexStringValue()),
                            (this.e = parseInt(n, 16));
                          var o = i.sub[3].getHexStringValue();
                          this.d = R(o, 16);
                          var a = i.sub[4].getHexStringValue();
                          this.p = R(a, 16);
                          var s = i.sub[5].getHexStringValue();
                          this.q = R(s, 16);
                          var c = i.sub[6].getHexStringValue();
                          this.dmp1 = R(c, 16);
                          var u = i.sub[7].getHexStringValue();
                          this.dmq1 = R(u, 16);
                          var f = i.sub[8].getHexStringValue();
                          this.coeff = R(f, 16);
                        } else {
                          if (2 !== i.sub.length) return !1;
                          var l = i.sub[1].sub[0];
                          (e = l.sub[0].getHexStringValue()),
                            (this.n = R(e, 16)),
                            (n = l.sub[1].getHexStringValue()),
                            (this.e = parseInt(n, 16));
                        }
                        return !0;
                      } catch (t) {
                        return !1;
                      }
                    }),
                    (e.prototype.getPrivateBaseKey = function () {
                      var t = {
                        array: [
                          new nt.asn1.DERInteger({ int: 0 }),
                          new nt.asn1.DERInteger({ bigint: this.n }),
                          new nt.asn1.DERInteger({ int: this.e }),
                          new nt.asn1.DERInteger({ bigint: this.d }),
                          new nt.asn1.DERInteger({ bigint: this.p }),
                          new nt.asn1.DERInteger({ bigint: this.q }),
                          new nt.asn1.DERInteger({ bigint: this.dmp1 }),
                          new nt.asn1.DERInteger({ bigint: this.dmq1 }),
                          new nt.asn1.DERInteger({ bigint: this.coeff }),
                        ],
                      };
                      return new nt.asn1.DERSequence(t).getEncodedHex();
                    }),
                    (e.prototype.getPrivateBaseKeyB64 = function () {
                      return l(this.getPrivateBaseKey());
                    }),
                    (e.prototype.getPublicBaseKey = function () {
                      var t = new nt.asn1.DERSequence({
                          array: [
                            new nt.asn1.DERObjectIdentifier({
                              oid: "1.2.840.113549.1.1.1",
                            }),
                            new nt.asn1.DERNull(),
                          ],
                        }),
                        e = new nt.asn1.DERSequence({
                          array: [
                            new nt.asn1.DERInteger({ bigint: this.n }),
                            new nt.asn1.DERInteger({ int: this.e }),
                          ],
                        }),
                        n = new nt.asn1.DERBitString({
                          hex: "00" + e.getEncodedHex(),
                        });
                      return new nt.asn1.DERSequence({
                        array: [t, n],
                      }).getEncodedHex();
                    }),
                    (e.prototype.getPublicBaseKeyB64 = function () {
                      return l(this.getPublicBaseKey());
                    }),
                    (e.wordwrap = function (t, e) {
                      if (!t) return t;
                      var n =
                        "(.{1," +
                        (e = e || 64) +
                        "})( +|$\n?)|(.{1," +
                        e +
                        "})";
                      return t.match(RegExp(n, "g")).join("\n");
                    }),
                    (e.prototype.getPrivateKey = function () {
                      var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                      return (
                        (t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n") +
                        "-----END RSA PRIVATE KEY-----"
                      );
                    }),
                    (e.prototype.getPublicKey = function () {
                      var t = "-----BEGIN PUBLIC KEY-----\n";
                      return (
                        (t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n") +
                        "-----END PUBLIC KEY-----"
                      );
                    }),
                    (e.hasPublicKeyProperty = function (t) {
                      return (
                        (t = t || {}).hasOwnProperty("n") &&
                        t.hasOwnProperty("e")
                      );
                    }),
                    (e.hasPrivateKeyProperty = function (t) {
                      return (
                        (t = t || {}).hasOwnProperty("n") &&
                        t.hasOwnProperty("e") &&
                        t.hasOwnProperty("d") &&
                        t.hasOwnProperty("p") &&
                        t.hasOwnProperty("q") &&
                        t.hasOwnProperty("dmp1") &&
                        t.hasOwnProperty("dmq1") &&
                        t.hasOwnProperty("coeff")
                      );
                    }),
                    (e.prototype.parsePropertiesFrom = function (t) {
                      (this.n = t.n),
                        (this.e = t.e),
                        t.hasOwnProperty("d") &&
                          ((this.d = t.d),
                          (this.p = t.p),
                          (this.q = t.q),
                          (this.dmp1 = t.dmp1),
                          (this.dmq1 = t.dmq1),
                          (this.coeff = t.coeff));
                    }),
                    e
                  );
                })(J),
                at = (function () {
                  function t(t) {
                    (t = t || {}),
                      (this.default_key_size = t.default_key_size
                        ? parseInt(t.default_key_size, 10)
                        : 1024),
                      (this.default_public_exponent =
                        t.default_public_exponent || "010001"),
                      (this.log = t.log || !1),
                      (this.key = null);
                  }
                  return (
                    (t.prototype.setKey = function (t) {
                      this.log && this.key, (this.key = new ot(t));
                    }),
                    (t.prototype.setPrivateKey = function (t) {
                      this.setKey(t);
                    }),
                    (t.prototype.setPublicKey = function (t) {
                      this.setKey(t);
                    }),
                    (t.prototype.decrypt = function (t) {
                      try {
                        return this.getKey().decrypt(p(t));
                      } catch (t) {
                        return !1;
                      }
                    }),
                    (t.prototype.encrypt = function (t) {
                      try {
                        return l(this.getKey().encrypt(t));
                      } catch (t) {
                        return !1;
                      }
                    }),
                    (t.prototype.sign = function (t, e, n) {
                      try {
                        return l(this.getKey().sign(t, e, n));
                      } catch (t) {
                        return !1;
                      }
                    }),
                    (t.prototype.verify = function (t, e, n) {
                      try {
                        return this.getKey().verify(t, p(e), n);
                      } catch (t) {
                        return !1;
                      }
                    }),
                    (t.prototype.getKey = function (t) {
                      if (!this.key) {
                        if (
                          ((this.key = new ot()),
                          t && "[object Function]" === {}.toString.call(t))
                        )
                          return void this.key.generateAsync(
                            this.default_key_size,
                            this.default_public_exponent,
                            t
                          );
                        this.key.generate(
                          this.default_key_size,
                          this.default_public_exponent
                        );
                      }
                      return this.key;
                    }),
                    (t.prototype.getPrivateKey = function () {
                      return this.getKey().getPrivateKey();
                    }),
                    (t.prototype.getPrivateKeyB64 = function () {
                      return this.getKey().getPrivateBaseKeyB64();
                    }),
                    (t.prototype.getPublicKey = function () {
                      return this.getKey().getPublicKey();
                    }),
                    (t.prototype.getPublicKeyB64 = function () {
                      return this.getKey().getPublicBaseKeyB64();
                    }),
                    (t.version = "3.0.1"),
                    t
                  );
                })();
            },
          ],
          e = {};
        function n(r) {
          if (e[r]) return e[r].exports;
          var i = (e[r] = { exports: {} });
          return t[r](i, i.exports, n), i.exports;
        }
        return (
          (n.d = function (t, e) {
            for (var r in e)
              n.o(e, r) &&
                !n.o(t, r) &&
                Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
          }),
          (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          n(1)
        );
      })().default;
    },
    Wk8w: function (t, e, n) {
      function r() {}
      function i() {
        return Promise.resolve();
      }
      function o(t) {
        var e,
          n = !1;
        return function () {
          for (var r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
          return n ? e : ((n = !0), (e = t.apply(this, r)));
        };
      }
      function a(t, e) {
        var n = e.substring(0, e.length / 2),
          r = e.substring(e.length / 2, e.length);
        return (
          "" + t.substring(0, 2) + n + t.substring(2, 4) + r + t.substring(4, 6)
        );
      }
      function s(t) {
        return t;
      }
      function c(t) {
        return Object.prototype.toString
          .call(t)
          .split(" ")[1]
          .slice(0, -1)
          .toLowerCase();
      }
      n.d(e, "d", function () {
        return r;
      }),
        n.d(e, "e", function () {
          return i;
        }),
        n.d(e, "f", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return c;
        });
    },
    "Xr+B": function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        });
      var r = n("9ZMt");
      function i(t) {
        r.default.$native.onPageNotFound(t);
      }
      function o(t) {
        r.default.$native.offPageNotFound(t);
      }
    },
    Y6Ef: function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n("US/N"),
        i = n("9ZMt"),
        o = n("AXNr");
      var a = n("fLr7"),
        s = n("CKld");
      s.a.get(a.j) ||
        (r.beforeHooks.add(function (t) {
          return (
            t.header || (t.header = {}),
            (t.header["page-path"] = Object(o.a)()),
            !0
          );
        }),
        r.beforeHooks.add(function (t) {
          t.header || (t.header = {});
          try {
            var e = i.default.$native.getEnterOptionsSync();
            [
              ["app-mode", e.apiCategory],
              ["ref-app-id", (e.referrerInfo || {}).appId],
            ].forEach(function (e) {
              var n = e[0],
                r = e[1];
              null != r && (t.header[n] = r);
            });
          } catch (t) {}
          return !0;
        }),
        s.a.set(a.j, 1));
      var c = function (t) {
        return Object(r.default)(t);
      };
    },
    Z054: function (t, e, n) {
      var r = n("iD8u");
      n.d(e, "authLogger", function () {
        return r.a;
      });
      n("Eu17"), n("OHwi");
    },
    Z4DZ: function (t) {
      t.exports = JSON.parse(
        '{"name":"@youzan/hummer-tee","version":"3.0.27","description":"youzan fe monitor tee","main":"dist/index.js","module":"dist/index.js","types":"dist/index.d.ts","files":["dist"],"sideEffects":["./dist/middleware.js","./dist/performance.js","./dist/lifecycle-hooks.js","./dist/mark-map.js"],"scripts":{"dev":"tsc --watch","prebuild":"yarn lint && yarn clean","build":"tsc","clean":"rimraf dist coverage","lint":"eslint src/**/*.ts --ext .ts","fix":"prettier src/**/*.ts --write","test":"jest","test:watch":"jest --watch"},"keywords":["utils"],"author":"linwenping@youzan.com","devDependencies":{"@youzan/tee":"^2.20.6","@youzan/tee-api":"^2.20.3","@youzan/tee-biz-util":"^1.3.8","eslint":"^7.3.2","jest":"^26.0.1","prettier":"^1.17.0","rimraf":"^2.6.3","ts-jest":"^26.1.0","typescript":"^3.9.6"},"dependencies":{"@youzan/hummer-core":"3.0.27","@youzan/hummer-types":"3.0.27","@youzan/hummer-utils":"3.0.27","tslib":"^2.0.0"},"peerDependencies":{"@youzan/tee":">= 2.3.0 < 3","@youzan/tee-api":">= 2.3.0 < 3","@youzan/tee-biz-util":">= 1.3.8 < 2"},"gitHead":"9a2de48aaab31a72efb43dd02091444ad225536c"}'
      );
    },
    aDHN: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("bb6g"),
        i = n("23p4"),
        o = n("bErL");
      var a = (function () {
        function t(t, e) {
          void 0 === t &&
            (t = function () {
              return Promise.resolve({});
            }),
            void 0 === e && (e = i.e),
            (this.request = t),
            (this.skynet = e),
            (this.params = {
              channel_change_count: 0,
              list_stay_time: 0,
              open_list_latest_time: 0,
              start_pay_first_time: 0,
              start_pay_latest_time: 0,
              client_pay_success_time: 0,
              server_pay_success_time: 0,
              client_prepay_start_time: 0,
              server_prepay_start_time: 0,
              client_prepay_success_time: 0,
              server_prepay_success_time: 0,
              start_pay_latest_to_client_pay_success_time: 0,
              start_pay_first_to_client_prepay_success_time: 0,
              start_pay_latest_to_client_prepay_success_time: 0,
              client_prepay_success_to_client_pay_success_time: 0,
              server_prepay_success_to_server_pay_success_time: 0,
              client_prepay_start_to_client_prepay_success_time: 0,
              start_pay_first_to_client_pay_success_time: 0,
              start_pay_first_to_server_pay_success_time: 0,
              start_pay_latest_to_server_pay_success_time: 0,
              start_pay_first_to_server_prepay_success_time: 0,
              start_pay_latest_to_server_prepay_success_time: 0,
              component: "cashier_zan_pay",
            });
        }
        return (
          (t.prototype.getParams = function () {
            return this.params;
          }),
          (t.prototype.getUUID = function () {
            return this.tracker.getLogParams().user.uuid;
          }),
          (t.prototype.track = function (t, e) {
            try {
              this.tracker.log({
                et: "custom",
                ei: t,
                en:
                  ((n = t),
                  (i =
                    Object.keys(o.b).find(function (t) {
                      return o.b[t] === n;
                    }) || ""),
                  o.a[i] || ""),
                params: Object(r.__assign)(
                  Object(r.__assign)(Object(r.__assign)({}, this.params), e),
                  { component: "cashier_zan_pay" }
                ),
              });
            } catch (t) {
              this.skynet.error("埋点上报失败", {
                message: t.message,
                stack: t.stack,
                params: this.params,
              });
            }
            var n, i;
          }),
          (t.prototype.mergeParams = function (t) {
            try {
              for (var e = 0, n = Object.entries(t); e < n.length; e++) {
                var r = n[e],
                  i = r[0],
                  o = r[1];
                null != o && (this.params[i] = o);
              }
              null != t.kdt_id &&
                this.tracker.setEvent({ si: String(t.kdt_id) }),
                null != t.buyer_id &&
                  this.tracker.setUser({ li: String(t.buyer_id) }),
                null != t.kdt_id &&
                  this.tracker.setUser({ m: String(t.mobile) });
            } catch (t) {
              this.skynet.warn("埋点参数合并失败（" + t.message + "）", {
                name: t.name,
                message: t.message,
                stack: t.stack,
                error: t,
              });
            }
          }),
          (t.prototype.trackPaySuccess = function () {
            try {
              this.mergeParams({ client_pay_success_time: Date.now() });
              var t = this.params,
                e = t.start_pay_latest_time,
                n = t.client_prepay_success_time,
                r = t.client_pay_success_time,
                i = e ? r - e : 0,
                a = n ? r - n : 0;
              this.mergeParams({
                start_pay_latest_to_client_pay_success_time: i,
                client_prepay_success_to_client_pay_success_time: a,
              }),
                this.track(o.b.PaySuccess);
            } catch (t) {
              this.skynet.warn("支付成功事件上报失败（" + t.message + "）", {
                name: t.name,
                message: t.message,
                stack: t.stack,
                error: t,
              });
            }
          }),
          (t.prototype.readCache = function (t) {
            var e = this;
            return this.request({
              method: "GET",
              origin: "cashier",
              path: "assets/api/union/track/params/" + t,
            })
              .then(function (t) {
                if (t && "string" == typeof t) {
                  var n = JSON.parse(t);
                  e.mergeParams(n);
                }
              })
              .catch(function (t) {
                e.skynet.warn("读取埋点缓存失败（" + t.message + "）", {
                  name: t.name,
                  message: t.message,
                  stack: t.stack,
                  error: t,
                });
              });
          }),
          t
        );
      })();
    },
    afTL: function (t, e) {},
    ajWA: function (t, e, n) {
      var r;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = ((r = n("h9bJ")) && r.__esModule ? r : { default: r }).default;
      (e.default = i), (t.exports = e.default);
    },
    akjn: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("h+Rz"),
        i = n("nibL"),
        o = n("pnMF");
      function a(t) {
        return (
          Object(i.a)(!!t.url, "request options.url accept a string"),
          (t.method = t.method ? t.method.toUpperCase() : "GET"),
          o.a.emit("requestStart", t),
          r.a
            .request(t)
            .then(function (e) {
              return (
                (e.status = e.statusCode),
                (e.headers = e.header),
                delete e.header,
                delete e.statusCode,
                o.a.emit("requestComplete", e, t),
                o.a.emit("requestSuccess", e, t),
                e
              );
            })
            .catch(function (e) {
              return (
                o.a.emit("requestComplete", e, t),
                o.a.emit("requestFail", e, t),
                Promise.reject(e)
              );
            })
        );
      }
    },
    bDRy: function (t, e) {},
    bErL: function (t, e, n) {
      var r, i;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        (function (t) {
          (t.StartPay = "cashier_start_pay"),
            (t.StartPayClick = "cashier_start_pay_click"),
            (t.PrepayStart = "cashier_client_prepay_start"),
            (t.PrepaySuccess = "cashier_client_prepay_success"),
            (t.PrepayFail = "cashier_client_prepay_fail"),
            (t.PayActionAbort = "pay_action_abort"),
            (t.PaySuccess = "cashier_client_pay_success"),
            (t.PaywaySelectDecide = "payway_select_decide"),
            (t.SelectPayToolFromList = "select_pay_tool_from_list"),
            (t.RecommandPaywayClick = "recomend_payway_click"),
            (t.BeforeCreditAuthorization = "before_credit_authorization"),
            (t.CreditAuthorizationSuccess = "credit_authorization_success"),
            (t.CreditAuthorizationFail = "credit_authorization_fail"),
            (t.CreditAuthorizationFinally = "credit_authorization_finally"),
            (t.CloseCashier = "close_cashier"),
            (t.Ready = "cashier_ready"),
            (t.ShowList = "cashier_show_list"),
            (t.ChangeChannel = "cashier_change_channel"),
            (t.Wxh5DowngradePay = "wxh5_downgrade_pay");
        })(r || (r = {})),
        (function (t) {
          (t.StartPay = "开始支付流程"),
            (t.StartPayClick = "开始支付流程"),
            (t.PrepayStart = "发起预支付"),
            (t.PrepaySuccess = "预支付成功"),
            (t.PrepayFail = "预支付失败"),
            (t.PayActionAbort = "支付动作中断"),
            (t.PaySuccess = "支付成功"),
            (t.PaywaySelectDecide = "确认选择支付方式"),
            (t.SelectPayToolFromList = "在支付方式列表选中支付方式"),
            (t.RecommandPaywayClick = "点击推荐支付方式"),
            (t.BeforeCreditAuthorization = "调用信用授权之前"),
            (t.CreditAuthorizationSuccess = "信用授权成功"),
            (t.CreditAuthorizationFail = "信用授权失败"),
            (t.CreditAuthorizationFinally = "信用授权结束"),
            (t.CloseCashier = "关闭收银台"),
            (t.Ready = "初始化完成"),
            (t.ShowList = "展示支付方式列表页"),
            (t.ChangeChannel = "更换支付方式");
        })(i || (i = {}));
    },
    bb6g: function (t, e, n) {
      n.r(e),
        n.d(e, "__extends", function () {
          return i;
        }),
        n.d(e, "__assign", function () {
          return o;
        }),
        n.d(e, "__rest", function () {
          return a;
        }),
        n.d(e, "__decorate", function () {
          return s;
        }),
        n.d(e, "__param", function () {
          return c;
        }),
        n.d(e, "__esDecorate", function () {
          return u;
        }),
        n.d(e, "__runInitializers", function () {
          return h;
        }),
        n.d(e, "__propKey", function () {
          return f;
        }),
        n.d(e, "__setFunctionName", function () {
          return l;
        }),
        n.d(e, "__metadata", function () {
          return p;
        }),
        n.d(e, "__awaiter", function () {
          return d;
        }),
        n.d(e, "__generator", function () {
          return v;
        }),
        n.d(e, "__createBinding", function () {
          return y;
        }),
        n.d(e, "__exportStar", function () {
          return g;
        }),
        n.d(e, "__values", function () {
          return m;
        }),
        n.d(e, "__read", function () {
          return b;
        }),
        n.d(e, "__spread", function () {
          return _;
        }),
        n.d(e, "__spreadArrays", function () {
          return E;
        }),
        n.d(e, "__spreadArray", function () {
          return w;
        }),
        n.d(e, "__await", function () {
          return O;
        }),
        n.d(e, "__asyncGenerator", function () {
          return S;
        }),
        n.d(e, "__asyncDelegator", function () {
          return x;
        }),
        n.d(e, "__asyncValues", function () {
          return T;
        }),
        n.d(e, "__makeTemplateObject", function () {
          return k;
        }),
        n.d(e, "__importStar", function () {
          return A;
        }),
        n.d(e, "__importDefault", function () {
          return C;
        }),
        n.d(e, "__classPrivateFieldGet", function () {
          return j;
        }),
        n.d(e, "__classPrivateFieldSet", function () {
          return D;
        }),
        n.d(e, "__classPrivateFieldIn", function () {
          return I;
        }),
        n.d(e, "__addDisposableResource", function () {
          return R;
        }),
        n.d(e, "__disposeResources", function () {
          return M;
        });
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function i(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function s(t, e, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? e
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(e, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(t, e, n, r);
        else
          for (var s = t.length - 1; s >= 0; s--)
            (i = t[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
        return o > 3 && a && Object.defineProperty(e, n, a), a;
      }
      function c(t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }
      function u(t, e, n, r, i, o) {
        function a(t) {
          if (void 0 !== t && "function" != typeof t)
            throw new TypeError("Function expected");
          return t;
        }
        for (
          var s,
            c = r.kind,
            u = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            h = !e && t ? (r.static ? t : t.prototype) : null,
            f = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}),
            l = !1,
            p = n.length - 1;
          p >= 0;
          p--
        ) {
          var d = {};
          for (var v in r) d[v] = "access" === v ? {} : r[v];
          for (var v in r.access) d.access[v] = r.access[v];
          d.addInitializer = function (t) {
            if (l)
              throw new TypeError(
                "Cannot add initializers after decoration has completed"
              );
            o.push(a(t || null));
          };
          var y = (0, n[p])(
            "accessor" === c ? { get: f.get, set: f.set } : f[u],
            d
          );
          if ("accessor" === c) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y)
              throw new TypeError("Object expected");
            (s = a(y.get)) && (f.get = s),
              (s = a(y.set)) && (f.set = s),
              (s = a(y.init)) && i.unshift(s);
          } else (s = a(y)) && ("field" === c ? i.unshift(s) : (f[u] = s));
        }
        h && Object.defineProperty(h, r.name, f), (l = !0);
      }
      function h(t, e, n) {
        for (var r = arguments.length > 2, i = 0; i < e.length; i++)
          n = r ? e[i].call(t, n) : e[i].call(t);
        return r ? n : void 0;
      }
      function f(t) {
        return "symbol" == typeof t ? t : "".concat(t);
      }
      function l(t, e, n) {
        return (
          "symbol" == typeof e &&
            (e = e.description ? "[".concat(e.description, "]") : ""),
          Object.defineProperty(t, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", e) : e,
          })
        );
      }
      function p(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e);
      }
      function d(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              c(r.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              c(r.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          c((r = r.apply(t, e || [])).next());
        });
      }
      function v(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(s) {
          return function (c) {
            return (function (s) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & s[0]
                          ? r.return
                          : s[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, s[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (r = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((i = a.trys),
                        (i = i.length > 0 && i[i.length - 1]) ||
                          (6 !== s[0] && 2 !== s[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = s);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(s);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = e.call(t, a);
                } catch (t) {
                  (s = [6, t]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, c]);
          };
        }
      }
      var y = Object.create
        ? function (t, e, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            (i &&
              !("get" in i ? !e.__esModule : i.writable || i.configurable)) ||
              (i = {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }),
              Object.defineProperty(t, r, i);
          }
        : function (t, e, n, r) {
            void 0 === r && (r = n), (t[r] = e[n]);
          };
      function g(t, e) {
        for (var n in t)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(e, n) ||
            y(e, t, n);
      }
      function m(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function b(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function _() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(b(arguments[e]));
        return t;
      }
      function E() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      function w(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      function O(t) {
        return this instanceof O ? ((this.v = t), this) : new O(t);
      }
      function S(t, e, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          i = n.apply(t, e || []),
          o = [];
        return (
          (r = {}),
          a("next"),
          a("throw"),
          a("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(t) {
          i[t] &&
            (r[t] = function (e) {
              return new Promise(function (n, r) {
                o.push([t, e, n, r]) > 1 || s(t, e);
              });
            });
        }
        function s(t, e) {
          try {
            (n = i[t](e)).value instanceof O
              ? Promise.resolve(n.value.v).then(c, u)
              : h(o[0][2], n);
          } catch (t) {
            h(o[0][3], t);
          }
          var n;
        }
        function c(t) {
          s("next", t);
        }
        function u(t) {
          s("throw", t);
        }
        function h(t, e) {
          t(e), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }
      function x(t) {
        var e, n;
        return (
          (e = {}),
          r("next"),
          r("throw", function (t) {
            throw t;
          }),
          r("return"),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
        function r(r, i) {
          e[r] = t[r]
            ? function (e) {
                return (n = !n)
                  ? { value: O(t[r](e)), done: !1 }
                  : i
                  ? i(e)
                  : e;
              }
            : i;
        }
      }
      function T(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var e,
          n = t[Symbol.asyncIterator];
        return n
          ? n.call(t)
          : ((t = m(t)),
            (e = {}),
            r("next"),
            r("throw"),
            r("return"),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function r(n) {
          e[n] =
            t[n] &&
            function (e) {
              return new Promise(function (r, i) {
                (function (t, e, n, r) {
                  Promise.resolve(r).then(function (e) {
                    t({ value: e, done: n });
                  }, e);
                })(r, i, (e = t[n](e)).done, e.value);
              });
            };
        }
      }
      function k(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, "raw", { value: e })
            : (t.raw = e),
          t
        );
      }
      var P = Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          };
      function A(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(t, n) &&
              y(e, t, n);
        return P(e, t), e;
      }
      function C(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function j(t, e, n, r) {
        if ("a" === n && !r)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !r : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
      }
      function D(t, e, n, r, i) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !i)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !i : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? i.call(t, n) : i ? (i.value = n) : e.set(t, n), n;
      }
      function I(t, e) {
        if (null === e || ("object" != typeof e && "function" != typeof e))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof t ? e === t : t.has(e);
      }
      function R(t, e, n) {
        if (null != e) {
          if ("object" != typeof e) throw new TypeError("Object expected.");
          var r;
          if (n) {
            if (!Symbol.asyncDispose)
              throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose];
          }
          if ("function" != typeof r)
            throw new TypeError("Object not disposable.");
          t.stack.push({ value: e, dispose: r, async: n });
        } else n && t.stack.push({ async: !0 });
        return e;
      }
      var N =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (t, e, n) {
              var r = new Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = t),
                (r.suppressed = e),
                r
              );
            };
      function M(t) {
        function e(e) {
          (t.error = t.hasError
            ? new N(e, t.error, "An error was suppressed during disposal.")
            : e),
            (t.hasError = !0);
        }
        return (function n() {
          for (; t.stack.length; ) {
            var r = t.stack.pop();
            try {
              var i = r.dispose && r.dispose.call(r.value);
              if (r.async)
                return Promise.resolve(i).then(n, function (t) {
                  return e(t), n();
                });
            } catch (t) {
              e(t);
            }
          }
          if (t.hasError) throw t.error;
        })();
      }
      e.default = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: c,
        __metadata: p,
        __awaiter: d,
        __generator: v,
        __createBinding: y,
        __exportStar: g,
        __values: m,
        __read: b,
        __spread: _,
        __spreadArrays: E,
        __spreadArray: w,
        __await: O,
        __asyncGenerator: S,
        __asyncDelegator: x,
        __asyncValues: T,
        __makeTemplateObject: k,
        __importStar: A,
        __importDefault: C,
        __classPrivateFieldGet: j,
        __classPrivateFieldSet: D,
        __classPrivateFieldIn: I,
        __addDisposableResource: R,
        __disposeResources: M,
      };
    },
    bdvF: function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return o;
        });
      var r = { INSTALMENT: { path: "assets/api/union/instalment/quota" } },
        i = { VALUE_CARD: !0, INSTALMENT: !0, ALIPAY_AGREEMENT: !0 },
        o = 2e3;
    },
    c514: function (t, e, n) {
      var r, i, o, a, s;
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "e", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.PROTOCOL = "protocol");
        })(r || (r = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.PROTOCOL = "protocol");
        })(i || (i = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.FILL_NICKNAME_AND_AVATAR = "fillNicknameAndAvatar"),
            (t.PROTOCOL = "protocol"),
            (t.YZ_AUTH = "yzAuth"),
            (t.FILL_YZ_AUTH = "fillYzAuth"),
            (t.EXTERNAL = "external");
        })(o || (o = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.FILL_NICKNAME_AND_AVATAR = "fillNicknameAndAvatar"),
            (t.PROTOCOL = "protocol"),
            (t.YZ_AUTH = "yzAuth"),
            (t.FILL_YZ_AUTH = "fillYzAuth");
        })(a || (a = {})),
        (function (t) {
          (t.Agree = "agree"), (t.Disagree = "disagree");
        })(s || (s = {}));
    },
    c7Bu: function (t, e, n) {
      n