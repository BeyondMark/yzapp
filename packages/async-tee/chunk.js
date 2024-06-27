"use strict";
(exports.ids = [741, 466]),
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
          return A;
        });
      var o = n("bb6g"),
        i = {
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
        u = n("9ZMt"),
        a = n("MLLI"),
        c = n("GFyo"),
        f = { setStorage: c.g, getStorage: c.c },
        s = n("kSnQ"),
        d = {
          queryMobileAudit: function () {
            var t = this;
            return new Promise(function (e, n) {
              var r,
                o = t.config,
                i = o.accountType,
                u = o.mobileAuditKey;
              return o.getPhoneNumber
                ? i && u
                  ? void ((r = { accountType: i, auditKey: u }),
                    Object(s.a)({
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
              u.default.$native.checkSession({ success: t, fail: e });
            });
          },
          hasLogin: function () {
            return Promise.resolve(!0);
          },
        },
        p = n("Y6Ef"),
        h = {
          nativeMobileCallback: function (t, e) {
            var n = (t && t.detail) || {},
              r = (e || {}).noMobileFallback;
            return new Promise(function (t, e) {
              var o = !(!n.code && !n.encryptedData),
                i =
                  /deny|cancel|未绑定手机|not authorize|小程序获取权限失败/i.test(
                    n.errMsg || ""
                  );
              if (
                (Object(p.a)({
                  path: "/passport/mobile/native/callback.json",
                  data: {
                    detail: n,
                    success: o,
                    disagree: i,
                    env: u.default.getEnv(),
                    extra: { noMobileFallback: r },
                  },
                  method: "POST",
                  origin: "uic",
                  withCredentials: !0,
                }),
                o)
              )
                return t({ detail: n });
              var a = { noQuota: 1400001 === n.errno };
              e({ detail: n, disagree: i, errType: a, noMobileFallback: r });
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
        g = {
          needPrivacyAuth: function () {
            return Promise.resolve(!1);
          },
          onNeedPrivacyAuth: function () {},
          requirePrivacyAuth: function () {},
          resolvePrivacyAuth: function () {},
          rejectPrivacyAuth: function () {},
        },
        _ = n("Z054");
      function A() {
        return !1;
      }
      var y = Object(o.__assign)(
          Object(o.__assign)(
            Object(o.__assign)(
              Object(o.__assign)(
                Object(o.__assign)(
                  Object(o.__assign)(
                    Object(o.__assign)(Object(o.__assign)({}, l), f),
                    d
                  ),
                  h
                ),
                v
              ),
              r
            ),
            g
          ),
          {
            authLogger: _.authLogger,
            getUserInfo: u.default.$native.getUserInfo,
            getSystemInfoSync: a.b,
            canIUse: function (t) {
              var e = u.default.$native[t];
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
        b = Object(o.__assign)(Object(o.__assign)({ config: i }, y), {
          getConfig: function (t) {
            var e = this.config;
            return e
              ? Promise.resolve(t ? e[t] : e)
              : Promise.resolve(t ? "" : {});
          },
        }),
        O = n("U0uK"),
        T = {};
      try {
        T = Object(O.a)() || {};
      } catch (t) {}
      var m = {
          theme: "#679FFF26",
          banner:
            "https://img01.yzcdn.cn/upload_files/2023/07/03/FtFv4zB9O7vAuHxsgdLpP0uSRHBF.png",
          name: "",
          authType: "weapp",
          source: 2,
          getPhoneNumber: !T.transactionWeappFlag,
        },
        E = n("mM1a"),
        I = n("GjIH"),
        P = n("fLr7"),
        N = Object(I.a)(P.i, new Set()),
        L = Object(I.a)(P.e);
      function j(t) {
        return u.default.$native.canIUse(t);
      }
      var k,
        C = function (t) {
          if (!(t || {}).ignoreCache) {
            var e = L.get();
            if (e) {
              if (e.data) return Promise.resolve(e.data.needPrivacyAuth);
              if (e.promise) return e.promise;
            }
          }
          var n = new Promise(function (t, e) {
              j("getPrivacySetting")
                ? u.default.$native.getPrivacySetting({
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
            o = Promise.race([r, n])
              .then(function (t) {
                return (
                  L.set({ promise: null, data: { needPrivacyAuth: t } }), t
                );
              })
              .catch(function (t) {
                return (
                  L.set(null),
                  _.authLogger.logAll({
                    errTitle: "Call needPrivacyAuth error",
                    errMsg: Object(s.d)(t),
                    err: t,
                  }),
                  !1
                );
              });
          return L.set({ promise: o, data: null }), o;
        },
        S = {
          canIUse: j,
          getUserInfo: function (t) {
            return new Promise(function (e, n) {
              var r = u.default.$native;
              if (r.getUserProfile)
                return r.getUserProfile(
                  Object(o.__assign)(Object(o.__assign)({}, t), {
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
            var t = Object(E.a)();
            return -1 !== [1154].indexOf(t.scene);
          },
          needPrivacyAuth: C,
          onNeedPrivacyAuth: function (t) {
            j("onNeedPrivacyAuthorization") &&
              u.default.$native.onNeedPrivacyAuthorization(function (e, n) {
                var r = N.get();
                r.add(e),
                  N.set(r),
                  "function" == typeof t && t({ eventInfo: n });
              });
          },
          requirePrivacyAuth: function (t) {
            if (j("requirePrivacyAuthorize")) {
              var e = (t || {}).ignoreCache;
              C({ ignoreCache: e }).then(function (t) {
                t && u.default.$native.requirePrivacyAuthorize();
              });
            }
          },
          resolvePrivacyAuth: function (t) {
            var e = N.get();
            e.forEach(function (e) {
              e({ buttonId: t, event: "agree" });
            }),
              e.clear(),
              N.set(e),
              C({ ignoreCache: !0 });
          },
          rejectPrivacyAuth: function (t) {
            var e = N.get();
            e.forEach(function (e) {
              e({ buttonId: t, event: "disagree" });
            }),
              e.clear(),
              N.set(e);
          },
        },
        w = Object(o.__assign)({ config: m }, S),
        R =
          ((k = Object(o.__assign)(Object(o.__assign)({}, b.config), w.config)),
          Object(o.__assign)(Object(o.__assign)(Object(o.__assign)({}, b), w), {
            config: k,
          }));
    },
    "/Wb3": function (t, e) {},
    "13Jo": function (t, e) {},
    "1pB4": function (t, e, n) {
      function r(t) {
        return "function" == typeof t;
      }
      function o(t) {
        return "string" == typeof t;
      }
      function i(t) {
        return (
          (function (t) {
            return null !== t && "object" == typeof t && !Array.isArray(t);
          })(t) &&
          r(t.then) &&
          r(t.catch)
        );
      }
      function u(t) {
        return null != t;
      }
      function a(t) {
        var e = typeof t;
        return null !== t && ("object" === e || "function" === e);
      }
      function c(t) {
        return /^\d+(\.\d+)?$/.test(t);
      }
      function f(t) {
        return "boolean" == typeof t;
      }
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "h", function () {
          return o;
        }),
        n.d(e, "g", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "i", function () {
          return l;
        });
      var s = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
      function d(t) {
        return s.test(t);
      }
      function l(t) {
        return u(t) && !isNaN(new Date(t).getTime());
      }
    },
    "5+FR": function (t, e, n) {
      n.d(e, "c", function () {
        return u;
      }),
        n.d(e, "e", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return f;
        });
      var r = n("BZkp"),
        [o, i] = Object(r.l)("vant-tee/dialog", []);
      function u(t) {
        i([...o(), t]);
      }
      function a(t) {
        i(o().filter((e) => e !== t));
      }
      function c() {
        return (Object(r.e)() || {}).$vt_dialog_vm;
      }
      function f(t) {
        var e = Object(r.e)() || {};
        Object.defineProperty(e, "$vt_dialog_vm", {
          configurable: !0,
          enumerable: !1,
          get: () => t,
        });
      }
    },
    "50K0": function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = {};
      n.r(r),
        n.d(r, "initPrefetchEvent", function () {
          return y;
        }),
        n.d(r, "getMiniappPrefetchRawData", function () {
          return b;
        }),
        n.d(r, "getMiniappPrefetchData", function () {
          return O;
        }),
        n.d(r, "clearMiniappPrefetchData", function () {
          return T;
        });
      var o = n("9ZMt"),
        i = n("Fcif"),
        u = n("GFyo"),
        a = n("ONqW"),
        c = "YZ_REQ_FAIL",
        f = "EXPIRED",
        s = "NOT_FOUND",
        d = "CLEARED",
        l = "FILTERED",
        p = "ERROR",
        h = "SUCCESS";
      function v(t) {
        if (t) {
          var e = t.fetchedData,
            n = JSON.parse(e),
            r = n.code,
            o = n.data;
          if (0 === r) return o;
        }
      }
      function g() {
        var t,
          e = o.default.getGlobal("__PREFETCH_DATA");
        return e
          ? Promise.resolve(e)
          : ((t = "pre"),
            o.default.$native.getBackgroundFetchData
              ? new Promise(function (e, n) {
                  o.default.$native.getBackgroundFetchData({
                    fetchType: t,
                    success: e,
                    fail: n,
                  });
                })
              : Promise.resolve(void 0)).then(function (t) {
              var e = v(t);
              return e && o.default.setGlobal("__PREFETCH_DATA", e), e;
            });
      }
      function _() {
        return Object(u.c)("__PREFETCH_CLEAR_MARKE").then(function (t) {
          return t.data;
        });
      }
      function A(t, e) {
        var n = Object(a.a)();
        n && n.log({ et: "custom", ei: t, params: e });
      }
      function y() {
        return ((t = "pre"),
        o.default.$native.onBackgroundFetchData
          ? new Promise(function (e) {
              o.default.$native.onBackgroundFetchData(function (n) {
                n.fetchType === t && (A("weapp_prefetch_init"), e(n));
              });
            })
          : Promise.resolve(void 0)).then(function (t) {
          var e = v(t);
          return e && o.default.setGlobal("__PREFETCH_DATA", e), e;
        });
        var t;
      }
      function b(t, e) {
        var n;
        return g()
          .then(function (r) {
            if (r) {
              var o = r.fetchData,
                i = void 0 === o ? {} : o,
                u = r.bizEnv,
                a = r.kdtId,
                p = r.serverTimestamp,
                v = r.version,
                g = i[t] || {},
                A = g.expire,
                y = g.data,
                b = g.query,
                O = Date.now();
              if (!y || O - p >= A) n = y ? f : s;
              else {
                var T, m;
                if (
                  !e ||
                  ((T = e),
                  (m = { kdtId: a, bizEnv: u, version: v }),
                  Object.keys(T).every(function (t) {
                    return !T[t] || T[t] === m[t];
                  }))
                )
                  return (function (t) {
                    return _()
                      .then(function (e) {
                        return !!e && !!e[t];
                      })
                      .catch(function () {
                        return !1;
                      });
                  })(t).then(function (t) {
                    return (
                      (n = t ? d : h),
                      t
                        ? void 0
                        : {
                            fetchedData: y,
                            fetchedQuery: b,
                            bizEnv: u,
                            kdtId: a,
                            serverTimestamp: p,
                            version: v,
                          }
                    );
                  });
                n = l;
              }
            } else n = c;
          })
          .catch(function (e) {
            (n = p),
              e &&
                A("weapp_prefetch_statistics_error", {
                  status: n,
                  bizName: t,
                  error: e,
                });
          })
          .then(function (e) {
            return A("weapp_prefetch_statistics", { status: n, bizName: t }), e;
          });
      }
      function O(t, e) {
        return b(t, e).then(function (t) {
          return null == t ? void 0 : t.fetchedData;
        });
      }
      function T(t) {
        return (function (t) {
          return _()
            .catch(function () {
              return {};
            })
            .then(function (e) {
              var n;
              return (
                void 0 === e && (e = {}),
                Object(u.g)(
                  "__PREFETCH_CLEAR_MARKE",
                  Object(i.a)({}, e, (((n = {})[t] = !0), n))
                )
              );
            });
        })(t);
      }
      n("sRXO");
    },
    "5Xe+": function (t, e, n) {
      var r;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = ((r = n("8xMm")) && r.__esModule ? r : { default: r }).default;
      (e.default = o), (t.exports = e.default);
    },
    "5jcX": function (t, e, n) {
      n.r(e),
        n.d(e, "cleanTicketCache", function () {
          return c;
        }),
        n.d(e, "getWebviewLoginTicket", function () {
          return f;
        });
      var r = n("US/N"),
        o = n("QxN7"),
        i = n("50K0");
      function u(t) {
        return Object(r.default)({
          method: "GET",
          origin: "uic",
          path: "/passport/api/get-webview-ticket",
          withCredentials: !0,
          data: t,
        });
      }
      function a(t, e) {
        return (
          void 0 === e && (e = {}),
          u(t)
            .then(function (t) {
              o.cache.set(o.CACHE_LOGIN_TICKET_INFO, t, {
                expire: 1e3 * (t.ttl > 1 ? t.ttl - 1 : t.ttl),
              });
            })
            .catch(function () {}),
          e
        );
      }
      function c() {
        o.cache.set(o.CACHE_LOGIN_TICKET_INFO, null),
          i.a.clearMiniappPrefetchData("webviewTicket");
      }
      function f(t) {
        var e = o.cache.get(o.CACHE_LOGIN_TICKET_INFO);
        return new Promise(function (n) {
          if (!(null == e ? void 0 : e.ticket))
            return new Promise(function (t, e) {
              i.a.getMiniappPrefetchRawData("webviewTicket").then(function (n) {
                (null == n ? void 0 : n.fetchedData) ? t(n.fetchedData) : e();
              });
            })
              .then(n)
              .catch(function () {
                return u(t).then(n);
              });
          n(e);
        }).then(
          function (e) {
            return a(t, e);
          },
          function () {
            return a(t);
          }
        );
      }
      o.cache.init(o.CACHE_LOGIN_TICKET_INFO);
    },
    "7OPm": function (t, e, n) {
      n.r(e);
      var r = n("/Wb3");
      for (var o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      var i = n("mSE4");
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
    },
    "8xMm": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e) {
          if ((void 0 === e && (e = []), "object" != typeof t || null === t))
            return t;
          var n = {};
          return (
            "string" == typeof e && (e = [e]),
            Array.isArray(e)
              ? (e.forEach(function (e) {
                  n[e] = t[e];
                }),
                n)
              : t
          );
        });
    },
    AXNr: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var r = n("2wjL");
      function o() {
        var t = "";
        try {
          var e = getCurrentPages();
          t = e[e.length - 1].route;
        } catch (t) {}
        return t;
      }
      function i() {
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
      var o = n("NotG");
      n.d(e, "EResolveAction", function () {
        return o.a;
      });
      var i = n("equh");
      for (var u in i)
        [
          "default",
          "AuthType",
          "EAuthorizeItems",
          "AuthPopType",
          "EAuthorizePopupType",
          "AuthActionType",
          "EResolveAction",
        ].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(u);
      var a = n("mMP1");
      n.d(e, "UserGender", function () {
        return a.a;
      });
      var c = n("I9eD");
      for (var u in c)
        [
          "default",
          "AuthType",
          "EAuthorizeItems",
          "AuthPopType",
          "EAuthorizePopupType",
          "AuthActionType",
          "EResolveAction",
          "UserGender",
        ].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(u);
    },
    BZkp: function (t, e, n) {
      n.d(e, "h", function () {
        return i;
      }),
        n.d(e, "j", function () {
          return u;
        }),
        n.d(e, "g", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "k", function () {
          return d;
        }),
        n.d(e, "i", function () {
          return l;
        }),
        n.d(e, "l", function () {
          return p;
        }),
        n.d(e, "f", function () {
          return h;
        }),
        n.d(e, "d", function () {
          return v;
        }),
        n.d(e, "e", function () {
          return g;
        });
      var r = n("9ZMt"),
        o = n("1pB4");
      function i(t) {
        return ("00" + t).slice(-2);
      }
      function u(t, e, n) {
        return Math.min(Math.max(t, e), n);
      }
      function a(t) {
        setTimeout(() => {
          t();
        }, 1e3 / 30);
      }
      function c(t) {
        if (Object(o.b)(t))
          return (t = String(t)), Object(o.e)(t) ? t + "px" : t;
      }
      function f(t, e) {
        var n = Math.pow(10, 10);
        return Math.round((t + e) * n) / n;
      }
      function s(t, e) {
        return String(t) === String(e);
      }
      function d(t) {
        return Object.keys(t)
          .map((e) => {
            return (
              ((n = e)
                ? n.replace(
                    /[A-Z]/g,
                    (t, e) => (0 === e ? "" : "-") + t[0].toLowerCase()
                  )
                : "") +
              ": " +
              t[e]
            );
            var n;
          })
          .join(";");
      }
      function l(t, e) {
        return e.reduce((e, n) => ((e[n] = t[n]), e), {});
      }
      function p(t, e) {
        return (
          void 0 === r.default.getGlobal(t) && r.default.setGlobal(t, e),
          [() => r.default.getGlobal(t), (e) => r.default.setGlobal(t, e)]
        );
      }
      function h(t, e) {
        return new Promise((n) => {
          t.createSelectorQuery()
            .select(e)
            .boundingClientRect()
            .exec(function (t) {
              return void 0 === t && (t = []), n(t[0] || []);
            });
        });
      }
      function v(t, e, n) {
        return new Promise((r) => {
          var o = 0,
            i = () => {
              t.createSelectorQuery()
                .selectAll(e, n)
                .boundingClientRect()
                .exec(function (t) {
                  void 0 === t && (t = []);
                  var e = t[0] || [];
                  if (!e.length && o < 3) return o++, i();
                  r(e);
                });
            };
          i();
        });
      }
      function g() {
        var t = getCurrentPages();
        return t[t.length - 1];
      }
    },
    CKld: function (t, e, n) {
      var r = n("bb6g"),
        o = n("9ZMt"),
        i = "__PASSPORT_TEE_";
      e.a = {
        init: function (t, e, n) {
          return (
            void 0 === n && (n = {}),
            o.default.setGlobal(i + t, {
              data: e,
              time: Date.now(),
              expire: n.expire,
            }),
            e
          );
        },
        get: function (t, e, n) {
          void 0 === n && (n = {});
          var r = o.default.getGlobal(i + t) || {},
            u = r.data,
            a = r.time,
            c = r.expire;
          return a ? (c && Date.now() - a > c ? e : u) : this.init(t, e, n);
        },
        set: function (t, e, n) {
          void 0 === n && (n = {});
          var r = { data: e, time: Date.now() };
          n.expire && (r.expire = n.expire), o.default.setGlobal(i + t, r);
        },
        setObj: function (t, e, n) {
          var u;
          void 0 === n && (n = {});
          var a = o.default.getGlobal(i + t);
          this.set(
            t,
            Object(r.__assign)(
              Object(r.__assign)(
                {},
                null !== (u = null == a ? void 0 : a.data) && void 0 !== u
                  ? u
                  : {}
              ),
              e
            ),
            n
          );
        },
      };
    },
    DEHM: function (t, e, n) {
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "g", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "h", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "f", function () {
          return s;
        });
      var r = "getAppTokenHook",
        o = "checkLoginGlobalHook",
        i = "teeLoginFailHook",
        u = "beforeYouzanLoginHook",
        a = "youzanLoginFailHook",
        c = "mobileChangeHook",
        f = "authOneAfterHook",
        s = "protocolBeforeAgreeHook";
    },
    Eu17: function (t, e, n) {
      var r, o;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return o;
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
        })(o || (o = {}));
    },
    FsGU: function (t, e, n) {
      var r, o;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return o;
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
        })(o || (o = {}));
    },
    GjIH: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var r = n("3tAa");
      function o(t, e) {
        var n = Object(r.a)(t, e);
        return { get: n[0], set: n[1] };
      }
      function i(t, e) {
        var n = Object(r.a)(t, e),
          o = n[0],
          i = n[1],
          u = function () {
            return o() || [];
          };
        return {
          get: u,
          add: function (t) {
            i(u().concat(t));
          },
          remove: function (t) {
            i(
              u().filter(function (e) {
                return e !== t;
              })
            );
          },
        };
      }
    },
    HnuB: function (t, e, n) {
      n.r(e);
      var r = n("oYRf");
      for (var o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      var i = n("7OPm");
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      var u = n("+Ky8");
      n.d(e, "TeeEnvEnum", function () {
        return u.a;
      });
      var a = n("FsGU");
      n.d(e, "SIGN_STATE", function () {
        return a.b;
      }),
        n.d(e, "InvokeProtocolEvent", function () {
          return a.a;
        });
      var c = n("B5ln");
      for (var o in c)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          o
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(o);
      var f = n("ceQz");
      for (var o in f)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          o
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return f[t];
            });
          })(o);
      var s = n("kKb7");
      for (var o in s)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          o
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return s[t];
            });
          })(o);
    },
    I9eD: function (t, e) {},
    JvWB: function (t, e, n) {
      n.r(e);
      var r = {};
      n.r(r),
        n.d(r, "updateLoginExtraData", function () {
          return H;
        }),
        n.d(r, "login", function () {
          return U;
        }),
        n.d(r, "forceLogin", function () {
          return F;
        }),
        n.d(r, "getToken", function () {
          return x;
        });
      var o = {};
      n.r(o),
        n.d(o, "getAuthorizeData", function () {
          return Y;
        }),
        n.d(o, "refreshAuthorizeLocalCache", function () {
          return z;
        });
      var i = {};
      n.r(i),
        n.d(i, "getUserPrivacy", function () {
          return Z;
        }),
        n.d(i, "updateUserPricacy", function () {
          return q;
        });
      var u = {};
      n.r(u),
        n.d(u, "saveUserInfo", function () {
          return J;
        }),
        n.d(u, "getRandomAvatarNicknameList", function () {
          return tt;
        }),
        n.d(u, "getSourceUserInfo", function () {
          return et;
        }),
        n.d(u, "getUserInfo", function () {
          return nt;
        });
      var a = {};
      n.r(a),
        n.d(a, "getUserAuthData", function () {
          return _t;
        }),
        n.d(a, "getFallbackUserAuthData", function () {
          return At;
        }),
        n.d(a, "prefetchUserAuthData", function () {
          return yt;
        }),
        n.d(a, "refreshUserAuthData", function () {
          return bt;
        }),
        n.d(a, "getNativeMobileAbility", function () {
          return pt;
        });
      var c,
        f = n("bb6g"),
        s = n("QxN7"),
        d = n("US/N"),
        l = n("3tAa"),
        p = n("Tewj"),
        h = n("50K0"),
        v = n("9ZMt"),
        g = n("z9IR"),
        _ = n("HnuB"),
        A = s.hooks.executeHook,
        y = s.hooks.getAppTokenHooks,
        b = s.hooks.getCheckLoginHooks,
        O = s.hooks.getTeeLoginFailHooks,
        T = s.hooks.getBeforeYouzanLoginHook,
        m = s.hooks.getYouzanLoginFailHooks,
        E = 0;
      function I(t, e) {
        return new Promise(function (n, r) {
          if (
            ((t.tokenVersion = "2"),
            (t.time = t.time || Date.now()),
            (t.appId = e.appId),
            !e.unStorage)
          )
            return s.platform
              .setStorage("app:token", t)
              .then(function () {
                return n(t);
              })
              .catch(r);
          n(t);
        });
      }
      function P(t, e) {
        var n = s.platform.getSystemInfoSync(),
          r = A(T, [], {});
        return (
          p.default.trigger(s.TEE_LOGIN_YZ_BEFORE_EVENT),
          (function (t) {
            return Object(s.baseRequest)({
              method: "POST",
              origin: "uic",
              path: "/passport/general/auth.json",
              data: t,
              config: { skipToken: !0 },
              withCredentials: !0,
            });
          })(
            Object(f.__assign)(
              {
                appId: e.appId,
                code: t.code,
                platformName: v.default.getEnv(),
                signature: n.app || n.platform,
                clientId: e.clientId,
                clientSecret: e.clientSecret,
                grantType: e.grantType,
              },
              r
            )
          )
            .then(function (t) {
              return I(t, { appId: e.appId });
            })
            .catch(function (t) {
              return (
                A(m, [t]),
                135700014 !== t.code
                  ? Promise.reject()
                  : E >= 3
                  ? g.a
                      .confirm({
                        title: "登录失败",
                        message:
                          "登录失败可能导致应用无法使用，你可以再试试或退出小程序",
                        confirmButtonText: "再试试",
                      })
                      .then(function () {
                        return { action: _.EResolveAction.RETRY };
                      })
                  : (E++, { action: _.EResolveAction.AUTORETRY })
              );
            })
        );
      }
      function N(t, e) {
        return (
          void 0 === e && (e = !1),
          p.default.trigger(s.TEE_LOGIN_SILENT_BEFORE_EVENT),
          c ||
            (e || (E = 0),
            (c = new Promise(function (e, n) {
              var r,
                o,
                i = function () {
                  return (function (t) {
                    return new Promise(function (e, n) {
                      s.platform
                        .login({ scopes: "auth_base", force: t.isForce })
                        .then(function (r) {
                          p.default.trigger(
                            s.TEE_LOGIN_PLAT_SUCCESS_EVENT,
                            r.code
                          ),
                            P(r, t)
                              .then(function (r) {
                                return (
                                  void 0 === r && (r = {}),
                                  (c = null),
                                  r.action === _.EResolveAction.RETRY
                                    ? N(t).then(e).catch(n)
                                    : r.action === _.EResolveAction.AUTORETRY
                                    ? N(t, !0).then(e).catch(n)
                                    : void e(r)
                                );
                              })
                              .catch(function () {
                                (c = null), n();
                              });
                        })
                        .catch(function (t) {
                          A(O, [t]), (c = null), n(t);
                        });
                    });
                  })(t)
                    .then(e)
                    .catch(n);
                };
              if (
                "embedded" ===
                (
                  (null === (o = (r = v.default.$native).getEnterOptionsSync) ||
                  void 0 === o
                    ? void 0
                    : o.call(r)) || {}
                ).apiCategory
              )
                return i();
              new Promise(function (t, e) {
                h.a
                  .getMiniappPrefetchRawData("accountLogin")
                  .then(function (n) {
                    if (null == n ? void 0 : n.fetchedData) {
                      var r = n.fetchedData,
                        o = n.serverTimestamp;
                      t(
                        Object(f.__assign)(Object(f.__assign)({}, r), {
                          time: o,
                          fetchType: "pre",
                        })
                      );
                    } else e();
                  });
              })
                .then(function (n) {
                  (c = null),
                    p.default.trigger(s.TEE_LOGIN_PLAT_SUCCESS_EVENT, n.code),
                    I(n, { appId: t.appId }),
                    e(n);
                })
                .catch(i);
            })))
        );
      }
      function L(t) {
        return new Promise(function (e, n) {
          (function (t) {
            return s.platform.getStorage("app:token").then(function (e) {
              var n = e.data,
                r = Date.now();
              return n
                ? !(n = A(y, [n], n)) ||
                  r - n.time > 0.8 * 24 * 3600 * 1e3 ||
                  "2" !== n.tokenVersion ||
                  n.appId !== t.appId ||
                  !A(b, [], !0)
                  ? Promise.reject()
                  : Promise.resolve(n)
                : Promise.reject();
            });
          })(t)
            .then(function (n) {
              return I(n, { unStorage: !0, appId: t.appId }).then(function (t) {
                return e(
                  Object(f.__assign)(Object(f.__assign)({}, t), { cache: !0 })
                );
              });
            })
            .catch(function () {
              return N(t).then(e).catch(n);
            });
        });
      }
      var j = n("5jcX"),
        k = Object(l.a)("GLOBAL_TOKEN", {}),
        C = k[0],
        S = k[1],
        w = Object(l.a)("LOGIN_EXTRA_PARAM", {}),
        R = w[0],
        D = w[1],
        M = function (t) {
          if (!s.isWeb) {
            if (!t || !t.sessionId) return Promise.reject();
            h.a.clearMiniappPrefetchData("accountLogin"),
              S(t),
              Object(d.setRequestDep)({
                sessionId: t.sessionId,
                accessToken: t.accessToken,
              });
          }
          return p.default.trigger(s.TEE_LOGIN_END_EVENT, t), t;
        },
        H = function (t) {
          D(Object(f.__assign)(Object(f.__assign)({}, R()), t));
        },
        U = function (t) {
          return (
            void 0 === t && (t = {}),
            s.platform.checkInSinglePage()
              ? Promise.resolve({})
              : L(
                  Object(f.__assign)(
                    {
                      allowNoLogin: t.allowNoLogin,
                      appId: Object(s.getAppId)(),
                    },
                    R()
                  )
                ).then(M)
          );
        },
        F = function () {
          return (
            Object(d.setRequestDep)({ sessionId: "", accessToken: "" }),
            ((t = Object(f.__assign)({ appId: Object(s.getAppId)() }, R())),
            (c = null),
            N(t)).then(function (t) {
              return M(t), Object(j.cleanTicketCache)(), t;
            })
          );
          var t;
        },
        x = function () {
          var t = C();
          return t && t.sessionId ? Promise.resolve(t) : U();
        };
      function B() {
        return s.cache.get(s.CACHE_AUTH_DATA, {});
      }
      function K(t) {
        s.cache.setObj(s.CACHE_AUTH_DATA, t);
      }
      var G = function (t) {
          var e = t.slice(0),
            n = e.indexOf(_.AuthType.PROTOCOL);
          return n > -1 && e.splice(n, 1), e;
        },
        Y = function (t) {
          var e = t || {},
            n = e.ignoreCache,
            r = e.kdtId,
            o = void 0 === r ? B().kdtId : r,
            i = e.appId,
            u = void 0 === i ? Object(s.getAppId)() : i,
            a = B(),
            c = a.kdtId === o || !o;
          if (c && a.data && !n)
            return Promise.resolve(
              Object(f.__assign)(Object(f.__assign)({}, a.data), {
                kdtId: a.kdtId,
                __cache: !0,
              })
            );
          if (c && a.dataPromise) return a.dataPromise;
          Promise.resolve();
          var d = U()
            .then(function () {
              return (
                (t = { appId: u }),
                Object(s.baseRequest)({
                  method: "GET",
                  origin: s.isWeb ? "yzh5" : "h5",
                  path: "/wscaccount/api/authorize/data.json",
                  data: t,
                  withCredentials: !0,
                })
              );
              var t;
            })
            .then(function (t) {
              var e,
                n,
                r,
                o,
                i = t.kdtId,
                u = Object(f.__rest)(t, ["kdtId"]),
                a = (
                  (null ===
                    (n =
                      null ===
                        (e =
                          null === v.default || void 0 === v.default
                            ? void 0
                            : v.default.$native) || void 0 === e
                        ? void 0
                        : e.getEnterOptionsSync) || void 0 === n
                    ? void 0
                    : n.call(e)) ||
                  (null ===
                    (o =
                      null ===
                        (r =
                          null === v.default || void 0 === v.default
                            ? void 0
                            : v.default.$native) || void 0 === r
                        ? void 0
                        : r.getLaunchOptionsSync) || void 0 === o
                    ? void 0
                    : o.call(r)) ||
                  {}
                ).scene;
              return "weapp" ===
                (null === v.default || void 0 === v.default
                  ? void 0
                  : v.default.getEnv()) &&
                a &&
                [
                  1176, 1177, 1175, 1184, 1191, 1193, 1195, 1201, 1208, 1216,
                ].indexOf(+a) > -1
                ? (function (t) {
                    return Object(s.baseRequest)({
                      method: "GET",
                      origin: "h5",
                      path: "/wscgoods/wxvideo/get-protocol-config.json",
                      data: t,
                      config: {},
                      withCredentials: !0,
                    });
                  })({ scene: a })
                    .then(function (e) {
                      var n = e.closePrivacyAgreement,
                        r = t;
                      void 0 !== n &&
                        n &&
                        (r = (function (t) {
                          var e;
                          t.privacyState.protocol = !0;
                          var n = t.shopSceneAuthData,
                            r = void 0 === n ? {} : n;
                          return (
                            Object.keys(r).forEach(function (t) {
                              (r[t].authPopupTypeList = G(
                                r[t].authPopupTypeList
                              )),
                                (r[t].authTypeList = G(r[t].authTypeList));
                            }),
                            (null ===
                              (e = null == t ? void 0 : t.authTypeData) ||
                            void 0 === e
                              ? void 0
                              : e.protocol) && delete t.authTypeData.protocol,
                            t
                          );
                        })(r));
                      var o = r.kdtId;
                      return (
                        K({
                          dataPromise: void 0,
                          data: Object(f.__rest)(r, ["kdtId"]),
                          kdtId: o,
                        }),
                        t
                      );
                    })
                    .catch(function () {
                      return K({ dataPromise: void 0, data: u, kdtId: i }), t;
                    })
                : (K({ dataPromise: void 0, data: u, kdtId: i }), t);
            })
            .catch(function (t) {
              throw (K({ dataPromise: void 0 }), t);
            });
          return K({ dataPromise: d, kdtId: o, data: void 0 }), d;
        };
      function z(t) {
        return Y({ ignoreCache: !0, kdtId: t });
      }
      var V = n("ODsq"),
        Z = function (t, e) {
          return Promise.all([
            Y({ kdtId: t, ignoreCache: e }),
            s.platform.needPrivacyAuth(),
          ]).then(function (t) {
            var e = t[0],
              n = e.userInfo,
              r = e.privacyState,
              o = e.protocolInfo,
              i = t[1];
            if (!n.hasLogin) return Promise.reject({ code: -1, msg: "未登录" });
            var u = r.protocol;
            return Object(f.__assign)(Object(f.__assign)({}, r), {
              yzProtocol: u,
              weappProtocol: !i,
              protocol: u && !i,
              protocolInfo: Object(f.__assign)({ protocolStatus: u }, o),
            });
          });
        },
        q = function (t) {
          var e,
            n = B();
          if (null === (e = n.data) || void 0 === e ? void 0 : e.privacyState) {
            var r = Object(f.__assign)({}, n.data.privacyState);
            return (
              t.forEach(function (t) {
                r[t] = !0;
              }),
              K({
                data: Object(f.__assign)(Object(f.__assign)({}, n.data), {
                  privacyState: r,
                }),
              }),
              (function (t) {
                var e = B().data;
                if (!(null == e ? void 0 : e.shopSceneAuthData)) return;
                var n = e.shopSceneAuthData,
                  r = Object.entries(n).reduce(function (e, n) {
                    var r = n[0],
                      o = n[1];
                    return (
                      (e[r] = Object(f.__assign)(
                        Object(f.__assign)({}, o),
                        Object(V.a)(o, t)
                      )),
                      e
                    );
                  }, {});
                K({
                  data: Object(f.__assign)(Object(f.__assign)({}, e), {
                    shopSceneAuthData: r,
                  }),
                });
              })(t),
              r
            );
          }
        };
      var W = n("5Xe+"),
        $ = n.n(W);
      function X(t, e) {
        return n
          .e("packages/async-main/chunk")
          .then(n.t.bind(null, "sbP3", 7))
          .then(function (n) {
            return (
              t.encryptedData ||
                (t.encryptedData = n.aes.legacyEncrypt(
                  JSON.stringify(t.userInfo)
                )),
              (function (t) {
                return Object(s.baseRequest)({
                  method: "POST",
                  origin: "uic",
                  path: "/passport/general/user.json",
                  data: t,
                  config: {},
                  withCredentials: !0,
                });
              })(
                Object(f.__assign)(
                  {
                    encryptedData: t.encryptedData,
                    iv: t.iv,
                    platformName: v.default.getEnv(),
                  },
                  e
                )
              )
            );
          });
      }
      var Q,
        J = function (t, e, n) {
          return (
            void 0 === e && (e = !0),
            ((r = t.userInfo || {}),
            new Promise(function (t) {
              r.avatarUrl && (r.avatar = r.avatarUrl),
                r.nickName
                  ? ((r.nickname = r.nickName), t(r))
                  : r.avatarUrl
                  ? s.platform.getConfig("name").then(function (e) {
                      (r.nickname = e + "匿名用户"), t(r);
                    })
                  : t(r);
            })).then(function (r) {
              if (((t.userInfo = r), e))
                return X(t, n || { appId: Object(s.getAppId)() });
            })
          );
          var r;
        },
        tt = function (t) {
          var e = t.kdtId,
            n = t.cache;
          return Y({ kdtId: e, ignoreCache: !1 === n })
            .then(function (t) {
              return t.aNickList;
            })
            .catch(function () {
              return [];
            });
        },
        et = function (t) {
          void 0 === t && (t = {});
          var e = t.kdtId,
            n = t.cache;
          return Y({ kdtId: e, ignoreCache: !1 === n })
            .then(function (t) {
              return (function (t) {
                return $()(t, [
                  "userId",
                  "mobile",
                  "nickname",
                  "avatar",
                  "userOpenId",
                  "gender",
                  "openId",
                  "buyerId",
                  "isDefaultAvatar",
                  "hasLogin",
                  "hasPlatform",
                  "hasUnionId",
                ]);
              })(t.userInfo);
            })
            .catch(function () {
              return {};
            });
        },
        nt = function (t) {
          return (
            void 0 === t && (t = {}),
            Promise.all([Z(t.kdtId, !1 === t.cache), et(t)])
              .then(function (t) {
                var e = t[0],
                  n = t[1],
                  r = {
                    userId: n.userId,
                    buyerId: n.buyerId,
                    gender: n.gender,
                    state: Object(f.__assign)({}, e),
                    hasPlatform: n.hasPlatform,
                    hasUnionId: n.hasUnionId,
                    userOpenId: n.userOpenId,
                    hasLogin: n.hasLogin,
                  };
                return (
                  e.mobile && e.protocol && (r.mobile = n.mobile),
                  e.nicknameAndAvatar &&
                    e.protocol &&
                    ((r.nickname = n.nickname), (r.avatar = n.avatar)),
                  n.openId && (r.openId = n.openId),
                  r
                );
              })
              .catch(function () {
                return {};
              })
          );
        };
      function rt(t) {
        return Array.isArray(t);
      }
      function ot(t) {
        return rt(t) ? Array.from(new Set(t)) : t;
      }
      function it(t, e) {
        return rt(t)
          ? t.filter(function (t) {
              return t !== e;
            })
          : t;
      }
      var ut,
        at =
          (((Q = {})[s.AuthPopType.EXTERNAL] = 5),
          (Q[s.AuthPopType.PROTOCOL] = 10),
          (Q[s.AuthPopType.MOBILE] = 20),
          (Q[s.AuthPopType.NICKNAME_AND_AVATAR] = 30),
          (Q[s.AuthPopType.FILL_YZ_AUTH] = 40),
          (Q[s.AuthPopType.YZ_AUTH] = 50),
          (Q[s.AuthPopType.FILL_NICKNAME_AND_AVATAR] = 60),
          Q),
        ct = n("NgLJ"),
        ft = n.n(ct);
      function st(t, e, n) {
        if (!n) return t;
        if (
          !e.includes(s.AuthType.NICKNAME_AND_AVATAR) ||
          t.includes(s.AuthPopType.FILL_NICKNAME_AND_AVATAR)
        )
          return t;
        var r,
          o,
          i,
          u = t.slice(0);
        return (
          (u = it(u, s.AuthPopType.NICKNAME_AND_AVATAR).concat(
            s.AuthPopType.FILL_NICKNAME_AND_AVATAR
          )),
          e.includes(s.AuthType.MOBILE) || (u = it(u, s.AuthPopType.YZ_AUTH)),
          (r = u),
          (o = s.AuthPopType.YZ_AUTH),
          (i = s.AuthPopType.FILL_YZ_AUTH),
          (u = rt(r)
            ? r.map(function (t) {
                return t === o ? i : t;
              })
            : r)
        );
      }
      function dt(t) {
        var e = t.authState,
          n = t.userInfo,
          r = t.allSceneAuthData,
          o = t.customAuthData,
          i = t.scene,
          u = t.authTypeList,
          a = t.supportFillNickAvatar,
          c = t.needLatestNicknameAndAvatar,
          f = t.needUnionId,
          d = [],
          l = [];
        if (i) {
          var p = r[i];
          if (p) {
            var h = Object(V.a)(p, p.denyTypeList);
            (d = (h.authTypeList || []).slice()),
              (l = (h.authPopupTypeList || []).slice());
          }
        } else
          (u || []).forEach(function (t) {
            var e = o[t];
            e && (d.push(t), l.push(e));
          });
        (function (t) {
          var e = t.scene,
            n = t.bizAuthTypeList,
            r = t.needLatestNicknameAndAvatar;
          return (
            t.needUnionId,
            t.userInfo,
            !(e || !n || !n.includes(_.AuthType.NICKNAME_AND_AVATAR)) && !!r
          );
        })({
          scene: i,
          bizAuthTypeList: u,
          needLatestNicknameAndAvatar: c,
          needUnionId: f,
          userInfo: n,
        }) &&
          (d.push(s.AuthType.NICKNAME_AND_AVATAR),
          l.push(s.AuthPopType.NICKNAME_AND_AVATAR));
        var v = !(!n.userId && !n.hasLogin);
        return (
          !!(!e.protocol || !e.weappProtocol) &&
            (d.length > 0 || v) &&
            (d.push(s.AuthType.PROTOCOL), l.push(s.AuthPopType.PROTOCOL)),
          !v &&
            d.length > 0 &&
            (d.push(s.AuthType.MOBILE), l.push(s.AuthPopType.MOBILE)),
          (l = st(l, d, a)),
          { authTypeList: ot(d), authPopTypeList: ot(l) }
        );
      }
      function lt(t) {
        var e = t.platformConfig,
          n = t.authData;
        return (
          !(!e.getPhoneNumber || n.mobileAuthDisabled) &&
          (!e.accountType ||
            !e.mobileAuditKey ||
            !!n.platformInfo.shopAudioState)
        );
      }
      function pt(t) {
        return Promise.all([Y(t), s.platform.getConfig()]).then(function (t) {
          return lt({ authData: t[0], platformConfig: t[1] });
        });
      }
      var ht =
        (((ut = {})[s.AuthType.MOBILE] = s.AuthPopType.MOBILE),
        (ut[s.AuthType.NICKNAME_AND_AVATAR] =
          s.AuthPopType.NICKNAME_AND_AVATAR),
        (ut[s.AuthType.PROTOCOL] = s.AuthPopType.PROTOCOL),
        ut);
      function vt(t) {
        var e = t || {},
          n = e.kdtId,
          r = e.appId,
          o = e.ignoreCache;
        return Promise.all([
          Y({ kdtId: n, appId: r, ignoreCache: o }),
          s.platform.getConfig(),
          s.platform.needPrivacyAuth({ ignoreCache: o }),
        ]).then(function (t) {
          var e = t[0],
            n = t[1],
            r = t[2],
            o = Object(f.__assign)(Object(f.__assign)({}, e.privacyState), {
              weappProtocol: !r,
            });
          return (
            e.mobileAuthDisabled && (n.getPhoneNumber = !1),
            Object(f.__assign)(Object(f.__assign)({}, e), {
              privacyState: o,
              platformConfig: n,
            })
          );
        });
      }
      function gt(t, e) {
        var n = e.scene,
          r = e.authTypeList,
          o = e.nativeAbility,
          i = e.needLatestNicknameAndAvatar,
          u = e.needUnionId,
          a = t.userInfo,
          c = t.privacyState,
          d = t.shopSceneAuthData,
          l = t.authTypeData,
          p = t.aNickList,
          h = t.platformConfig,
          v = t.fillWxSDK,
          g = t.noMobileFallback,
          _ = d[n || ""],
          A = (function (t) {
            var e = t.rawPrivacy,
              n = t.denyTypeList,
              r = Object(f.__assign)({}, e);
            return n && 0 !== n.length
              ? (!r.mobile && n.includes(s.AuthType.MOBILE) && (r.mobile = !0),
                !r.nicknameAndAvatar &&
                  n.includes(s.AuthType.NICKNAME_AND_AVATAR) &&
                  (r.nicknameAndAvatar = !0),
                r)
              : r;
          })({ rawPrivacy: c, denyTypeList: (_ || {}).denyTypeList }),
          y = (function (t) {
            var e = Object(f.__assign)({}, t);
            return e.isDefaultAvatar && ((e.avatar = ""), (e.nickname = "")), e;
          })(a),
          b = (function (t) {
            try {
              var e = getApp(),
                n = t || "2.27.1",
                r = e.getSystemInfoSync().SDKVersion || "";
              return ft()(r, n) > -1;
            } catch (t) {
              return !0;
            }
          })(v),
          O = dt({
            scene: n,
            authTypeList: r,
            allSceneAuthData: d,
            customAuthData: l,
            authState: A,
            userInfo: y,
            supportFillNickAvatar: b,
            needLatestNicknameAndAvatar: i,
            needUnionId: u,
          }),
          T = O.authTypeList,
          m = O.authPopTypeList,
          E = (function (t) {
            var e = t.authPopTypeList;
            return !t.hasLogin && e.includes(s.AuthPopType.MOBILE)
              ? s.AuthPopType.MOBILE
              : e.sort(function (t, e) {
                  return at[t] - at[e];
                })[0];
          })({ authPopTypeList: m, hasLogin: !(!y.userId && !y.hasLogin) }),
          I = Object(f.__assign)(
            { mobile: lt({ platformConfig: h, authData: t }) },
            o
          ),
          P = (function (t) {
            var e = t.authPopTypeList,
              n = t.nativeAbility;
            return e.includes(s.AuthPopType.MOBILE) && n.mobile
              ? s.AuthPopType.MOBILE
              : e.includes(s.AuthPopType.NICKNAME_AND_AVATAR)
              ? s.AuthPopType.NICKNAME_AND_AVATAR
              : void 0;
          })({ authPopTypeList: m, nativeAbility: I });
        return {
          authPopType: E,
          authTypeList: T,
          authPopTypeList: m,
          authButtonType: (function (t) {
            var e = t.authPopType,
              n = t.nativeAuthPopType,
              r = t.nativeAbility;
            switch (!0) {
              case e === s.AuthPopType.MOBILE &&
                n === s.AuthPopType.MOBILE &&
                !!r.mobile:
                return s.AuthButtonType.NativeMobile;
              case e === s.AuthPopType.NICKNAME_AND_AVATAR:
                return s.AuthButtonType.NativeNickAvatar;
              case !!e:
                return s.AuthButtonType.YZButton;
            }
          })({ authPopType: E, nativeAuthPopType: P, nativeAbility: I }),
          authDialogType: (function (t) {
            var e = t.authPopType,
              n = t.nativeAuthPopType;
            switch (!0) {
              case e === s.AuthPopType.EXTERNAL:
                return s.AuthDialogType.YZExternal;
              case e === s.AuthPopType.MOBILE && !n:
                return s.AuthDialogType.YZMobile;
              case e === s.AuthPopType.PROTOCOL || !!n:
                return s.AuthDialogType.YZProtocol;
              case e === s.AuthPopType.YZ_AUTH ||
                e === s.AuthPopType.FILL_YZ_AUTH:
                return s.AuthDialogType.YZAuth;
              case e === s.AuthPopType.FILL_NICKNAME_AND_AVATAR:
                return s.AuthDialogType.YZUserInfo;
            }
          })({ authPopType: E, nativeAuthPopType: P }),
          nativeAbility: I,
          nativeAuthPopType: P,
          userInfo: y,
          authState: A,
          supportFillNickAvatar: b,
          platformConfig: h,
          sceneAuthData: _,
          customAuthData: l,
          randomNickList: p,
          noMobileFallback: g,
        };
      }
      function _t(t) {
        return vt(t).then(function (e) {
          return gt(e, t);
        });
      }
      function At(t) {
        return (function (t) {
          var e = t.scene,
            n = t.authTypeList,
            r = { hasLogin: !1, userId: 0 },
            o = {
              mobile: !1,
              nicknameAndAvatar: s.isXhsApp,
              protocol: s.isXhsApp,
              weappProtocol: !1,
            },
            i = Object(s.isNormalBrower)(),
            u = (n || []).filter(function (t) {
              return (
                t !== s.AuthType.PROTOCOL &&
                !(i && t === s.AuthType.NICKNAME_AND_AVATAR)
              );
            }),
            a = u.reduce(function (t, e) {
              return (t[e] = ht[e]), t;
            }, {}),
            c = {};
          e &&
            (c[e] = {
              authTypeList: u,
              authPopupTypeList: u.map(function (t) {
                return ht[t];
              }),
            });
          var f = [
            {
              avatar:
                "https://img01.yzcdn.cn/upload_files/2020/08/04/Fj1Bufd7kfFGdybb8P4Irqnc1RUv.png",
              nickName: "匿名用户",
            },
          ];
          return s.platform
            .getConfig()
            .catch(function () {
              return {};
            })
            .then(function (t) {
              return {
                userInfo: r,
                aNickList: f,
                fillWxSDK: "2.27.1",
                privacyState: o,
                shopSceneAuthData: c,
                authTypeData: a,
                platformConfig: t,
                platformInfo: {},
                mobileAuthDisabled: !1,
              };
            });
        })(t).then(function (e) {
          return gt(e, t);
        });
      }
      function yt(t) {
        return vt(t);
      }
      function bt(t) {
        return vt(
          Object(f.__assign)(Object(f.__assign)({}, t), { ignoreCache: !0 })
        );
      }
      var Ot = {
        checkInSinglePage: function () {
          return s.platform.checkInSinglePage();
        },
      };
      e.default = Object(f.__assign)(
        Object(f.__assign)(
          Object(f.__assign)(
            Object(f.__assign)(
              Object(f.__assign)(
                Object(f.__assign)(Object(f.__assign)({}, r), u),
                i
              ),
              o
            ),
            j
          ),
          a
        ),
        { api: Ot }
      );
    },
    MVYo: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n("h+Rz");
      function o() {
        return r.a.login();
      }
    },
    NgLJ: function (t, e, n) {
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
        (e.validateOperator = function (t) {
          if ("string" != typeof t)
            throw new TypeError(
              "Invalid operator type, expected string but got " + r(t)
            );
          if (-1 === o.indexOf(t))
            throw new TypeError(
              "Invalid operator, expected one of " + o.join("|")
            );
        }),
        (e.default = e.OperatorResMap = void 0);
      var o = [">", ">=", "=", "<", "<="];
      e.OperatorResMap = {
        ">": [1],
        ">=": [1, 0],
        "=": [0],
        "<=": [-1, 0],
        "<": [-1],
      };
      var i =
        /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
      function u(t) {
        var e,
          n,
          r = t.replace(/^v/, "").replace(/\+.*$/, ""),
          o = ((n = "-"), -1 === (e = r).indexOf(n) ? e.length : e.indexOf(n)),
          i = r.substring(0, o).split(".");
        return i.push(r.substring(o + 1)), i;
      }
      function a(t) {
        return isNaN(Number(t)) ? t : Number(t);
      }
      function c(t) {
        if ("string" != typeof t)
          throw new TypeError("Invalid argument expected string");
        if (!i.test(t))
          throw new Error(
            "Invalid argument not valid semver ('" + t + "' received)"
          );
      }
      var f = function (t, e) {
        [t, e].forEach(c);
        for (
          var n = u(t), r = u(e), o = 0;
          o < Math.max(n.length - 1, r.length - 1);
          o++
        ) {
          var i = parseInt(n[o] || "0", 10),
            f = parseInt(r[o] || "0", 10);
          if (i > f) return 1;
          if (f > i) return -1;
        }
        var s = n[n.length - 1],
          d = r[r.length - 1];
        if (s && d) {
          var l = s.split(".").map(a),
            p = d.split(".").map(a);
          for (o = 0; o < Math.max(l.length, p.length); o++) {
            if (
              void 0 === l[o] ||
              ("string" == typeof p[o] && "number" == typeof l[o])
            )
              return -1;
            if (
              void 0 === p[o] ||
              ("string" == typeof l[o] && "number" == typeof p[o])
            )
              return 1;
            if (l[o] > p[o]) return 1;
            if (p[o] > l[o]) return -1;
          }
        } else if (s || d) return s ? -1 : 1;
        return 0;
      };
      e.default = f;
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
    ODsq: function (t, e, n) {
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return a;
        });
      var r,
        o = n("HnuB"),
        i =
          (((r = {})[o.AuthPopType.MOBILE] = [o.AuthType.MOBILE]),
          (r[o.AuthPopType.NICKNAME_AND_AVATAR] = [
            o.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (r[o.AuthPopType.FILL_NICKNAME_AND_AVATAR] = [
            o.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (r[o.AuthPopType.PROTOCOL] = [o.AuthType.PROTOCOL]),
          (r[o.AuthPopType.FILL_YZ_AUTH] = [o.AuthType.MOBILE]),
          (r[o.AuthPopType.YZ_AUTH] = [
            o.AuthType.MOBILE,
            o.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (r[o.AuthPopType.EXTERNAL] = [
            o.AuthType.MOBILE,
            o.AuthType.PROTOCOL,
          ]),
          r);
      function u(t, e) {
        return (i[t] || []).filter(function (t) {
          return e.includes(t);
        });
      }
      function a(t, e) {
        var n = t.authTypeList,
          r = t.authPopupTypeList;
        if (!(null == e ? void 0 : e.length)) return t;
        var o = n.filter(function (t) {
            return !e.includes(t);
          }),
          i = r.filter(function (t) {
            return u(t, o).length > 0;
          });
        return { authTypeList: o, authPopupTypeList: i };
      }
    },
    OHwi: function (t, e) {},
    ONqW: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("Fcif"),
        o = n("9ZMt"),
        i = function (t, e) {
          for (var n, r = e.split("."), o = 0; o < r.length; o++) n = t[r[o]];
          return n;
        },
        u = function (t) {
          return function () {
            var e = o.default.getGlobal("logger");
            if (e) {
              var n = i(e, t);
              if (n) return n.apply(null, [...arguments]);
            }
          };
        };
      function a() {
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
        ].reduce((t, e) => Object(r.a)({}, t, { [e]: u(e) }), {});
      }
    },
    QxN7: function (t, e, n) {
      n.r(e);
      var r = n("/QeK");
      n.d(e, "platform", function () {
        return r.a;
      });
      var o = n("kSnQ");
      n.d(e, "teeEnv", function () {
        return o.n;
      }),
        n.d(e, "isWeb", function () {
          return o.i;
        }),
        n.d(e, "isXhsApp", function () {
          return o.j;
        }),
        n.d(e, "isNormalBrower", function () {
          return o.h;
        }),
        n.d(e, "globalReader", function () {
          return o.g;
        }),
        n.d(e, "cache", function () {
          return o.b;
        }),
        n.d(e, "baseRequest", function () {
          return o.a;
        }),
        n.d(e, "request", function () {
          return o.l;
        }),
        n.d(e, "safeLog", function () {
          return o.m;
        }),
        n.d(e, "getPagePath", function () {
          return o.e;
        }),
        n.d(e, "getPageURL", function () {
          return o.f;
        }),
        n.d(e, "getErrorMsg", function () {
          return o.d;
        }),
        n.d(e, "getAppId", function () {
          return o.c;
        }),
        n.d(e, "updateAppId", function () {
          return o.o;
        }),
        n.d(e, "parseToCloudUser", function () {
          return o.k;
        });
      var i = n("fYK9");
      n.d(e, "emitUserAuthSync", function () {
        return i.b;
      }),
        n.d(e, "onUserAuthSync", function () {
          return i.d;
        }),
        n.d(e, "emitUserAuthSuccess", function () {
          return i.a;
        }),
        n.d(e, "onUserAuthSuccess", function () {
          return i.c;
        });
      var u = n("HnuB");
      for (var a in u)
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
        ].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t];
            });
          })(a);
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
      var f = n("dvf8");
      n.d(e, "hooks", function () {
        return f;
      });
      var s = n("c7Bu");
      n.d(e, "constants", function () {
        return s;
      });
    },
    Tewj: function (t, e, n) {
      n.r(e);
      var r = n("9ZMt"),
        o = new ((function () {
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
                o = this.getStorage();
              return (
                (o[r] = o[r] || []),
                o[r].push({ callback: e, context: n }),
                this.setStorage(o),
                this
              );
            }),
            (e.once = function (t, e, n) {
              var r = this;
              return this.on(
                t,
                function o() {
                  for (
                    var i = arguments.length, u = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    u[a] = arguments[a];
                  e.call.apply(e, [n].concat(u)), r.off(t, o, n);
                },
                n
              );
            }),
            (e.off = function (t, e, n) {
              var r = this.getKey(t),
                o = this.getStorage();
              if (!Array.isArray(o[r])) return this;
              if (void 0 === e && void 0 === n) delete o[r];
              else if (void 0 === n) {
                var i;
                o[r] =
                  (null == (i = o[r])
                    ? void 0
                    : i.filter(function (t) {
                        return t.callback !== e;
                      })) || [];
              } else {
                var u;
                o[r] =
                  (null == (u = o[r])
                    ? void 0
                    : u.filter(function (t) {
                        return t.callback !== e || t.context !== n;
                      })) || [];
              }
              return this.setStorage(o), this;
            }),
            (e.trigger = function (t) {
              for (
                var e,
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              var i = this.getKey(t),
                u = this.getStorage();
              return Array.isArray(u[i])
                ? (null == (e = u[i]) ||
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
      e.default = o;
    },
    Y6Ef: function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n("US/N"),
        o = n("9ZMt"),
        i = n("AXNr");
      var u = n("fLr7"),
        a = n("CKld");
      a.a.get(u.j) ||
        (r.beforeHooks.add(function (t) {
          return (
            t.header || (t.header = {}),
            (t.header["page-path"] = Object(i.a)()),
            !0
          );
        }),
        r.beforeHooks.add(function (t) {
          t.header || (t.header = {});
          try {
            var e = o.default.$native.getEnterOptionsSync();
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
        a.a.set(u.j, 1));
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
    afTL: function (t, e) {},
    bDRy: function (t, e) {},
    bb6g: function (t, e, n) {
      n.r(e),
        n.d(e, "__extends", function () {
          return o;
        }),
        n.d(e, "__assign", function () {
          return i;
        }),
        n.d(e, "__rest", function () {
          return u;
        }),
        n.d(e, "__decorate", function () {
          return a;
        }),
        n.d(e, "__param", function () {
          return c;
        }),
        n.d(e, "__esDecorate", function () {
          return f;
        }),
        n.d(e, "__runInitializers", function () {
          return s;
        }),
        n.d(e, "__propKey", function () {
          return d;
        }),
        n.d(e, "__setFunctionName", function () {
          return l;
        }),
        n.d(e, "__metadata", function () {
          return p;
        }),
        n.d(e, "__awaiter", function () {
          return h;
        }),
        n.d(e, "__generator", function () {
          return v;
        }),
        n.d(e, "__createBinding", function () {
          return g;
        }),
        n.d(e, "__exportStar", function () {
          return _;
        }),
        n.d(e, "__values", function () {
          return A;
        }),
        n.d(e, "__read", function () {
          return y;
        }),
        n.d(e, "__spread", function () {
          return b;
        }),
        n.d(e, "__spreadArrays", function () {
          return O;
        }),
        n.d(e, "__spreadArray", function () {
          return T;
        }),
        n.d(e, "__await", function () {
          return m;
        }),
        n.d(e, "__asyncGenerator", function () {
          return E;
        }),
        n.d(e, "__asyncDelegator", function () {
          return I;
        }),
        n.d(e, "__asyncValues", function () {
          return P;
        }),
        n.d(e, "__makeTemplateObject", function () {
          return N;
        }),
        n.d(e, "__importStar", function () {
          return j;
        }),
        n.d(e, "__importDefault", function () {
          return k;
        }),
        n.d(e, "__classPrivateFieldGet", function () {
          return C;
        }),
        n.d(e, "__classPrivateFieldSet", function () {
          return S;
        }),
        n.d(e, "__classPrivateFieldIn", function () {
          return w;
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
      function o(t, e) {
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
      var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function u(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
              (n[r[o]] = t[r[o]]);
        }
        return n;
      }
      function a(t, e, n, r) {
        var o,
          i = arguments.length,
          u =
            i < 3
              ? e
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(e, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          u = Reflect.decorate(t, e, n, r);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (u = (i < 3 ? o(u) : i > 3 ? o(e, n, u) : o(e, n)) || u);
        return i > 3 && u && Object.defineProperty(e, n, u), u;
      }
      function c(t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }
      function f(t, e, n, r, o, i) {
        function u(t) {
          if (void 0 !== t && "function" != typeof t)
            throw new TypeError("Function expected");
          return t;
        }
        for (
          var a,
            c = r.kind,
            f = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            s = !e && t ? (r.static ? t : t.prototype) : null,
            d = e || (s ? Object.getOwnPropertyDescriptor(s, r.name) : {}),
            l = !1,
            p = n.length - 1;
          p >= 0;
          p--
        ) {
          var h = {};
          for (var v in r) h[v] = "access" === v ? {} : r[v];
          for (var v in r.access) h.access[v] = r.access[v];
          h.addInitializer = function (t) {
            if (l)
              throw new TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(u(t || null));
          };
          var g = (0, n[p])(
            "accessor" === c ? { get: d.get, set: d.set } : d[f],
            h
          );
          if ("accessor" === c) {
            if (void 0 === g) continue;
            if (null === g || "object" != typeof g)
              throw new TypeError("Object expected");
            (a = u(g.get)) && (d.get = a),
              (a = u(g.set)) && (d.set = a),
              (a = u(g.init)) && o.unshift(a);
          } else (a = u(g)) && ("field" === c ? o.unshift(a) : (d[f] = a));
        }
        s && Object.defineProperty(s, r.name, d), (l = !0);
      }
      function s(t, e, n) {
        for (var r = arguments.length > 2, o = 0; o < e.length; o++)
          n = r ? e[o].call(t, n) : e[o].call(t);
        return r ? n : void 0;
      }
      function d(t) {
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
      function h(t, e, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function u(t) {
            try {
              c(r.next(t));
            } catch (t) {
              i(t);
            }
          }
          function a(t) {
            try {
              c(r.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(u, a);
          }
          c((r = r.apply(t, e || [])).next());
        });
      }
      function v(t, e) {
        var n,
          r,
          o,
          i,
          u = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(a) {
          return function (c) {
            return (function (a) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i && ((i = 0), a[0] && (u = 0)), u; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & a[0]
                          ? r.return
                          : a[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, a[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a;
                      break;
                    case 4:
                      return u.label++, { value: a[1], done: !1 };
                    case 5:
                      u.label++, (r = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = u.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== a[0] && 2 !== a[0]))
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        u.label = a[1];
                        break;
                      }
                      if (6 === a[0] && u.label < o[1]) {
                        (u.label = o[1]), (o = a);
                        break;
                      }
                      if (o && u.label < o[2]) {
                        (u.label = o[2]), u.ops.push(a);
                        break;
                      }
                      o[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  a = e.call(t, u);
                } catch (t) {
                  (a = [6, t]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, c]);
          };
        }
      }
      var g = Object.create
        ? function (t, e, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(e, n);
            (o &&
              !("get" in o ? !e.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }),
              Object.defineProperty(t, r, o);
          }
        : function (t, e, n, r) {
            void 0 === r && (r = n), (t[r] = e[n]);
          };
      function _(t, e) {
        for (var n in t)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(e, n) ||
            g(e, t, n);
      }
      function A(t) {
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
      function y(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          u = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      }
      function b() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(y(arguments[e]));
        return t;
      }
      function O() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          o = 0;
        for (e = 0; e < n; e++)
          for (var i = arguments[e], u = 0, a = i.length; u < a; u++, o++)
            r[o] = i[u];
        return r;
      }
      function T(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      function m(t) {
        return this instanceof m ? ((this.v = t), this) : new m(t);
      }
      function E(t, e, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = n.apply(t, e || []),
          i = [];
        return (
          (r = {}),
          u("next"),
          u("throw"),
          u("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function u(t) {
          o[t] &&
            (r[t] = function (e) {
              return new Promise(function (n, r) {
                i.push([t, e, n, r]) > 1 || a(t, e);
              });
            });
        }
        function a(t, e) {
          try {
            (n = o[t](e)).value instanceof m
              ? Promise.resolve(n.value.v).then(c, f)
              : s(i[0][2], n);
          } catch (t) {
            s(i[0][3], t);
          }
          var n;
        }
        function c(t) {
          a("next", t);
        }
        function f(t) {
          a("throw", t);
        }
        function s(t, e) {
          t(e), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
      }
      function I(t) {
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
        function r(r, o) {
          e[r] = t[r]
            ? function (e) {
                return (n = !n)
                  ? { value: m(t[r](e)), done: !1 }
                  : o
                  ? o(e)
                  : e;
              }
            : o;
        }
      }
      function P(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var e,
          n = t[Symbol.asyncIterator];
        return n
          ? n.call(t)
          : ((t = A(t)),
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
              return new Promise(function (r, o) {
                (function (t, e, n, r) {
                  Promise.resolve(r).then(function (e) {
                    t({ value: e, done: n });
                  }, e);
                })(r, o, (e = t[n](e)).done, e.value);
              });
            };
        }
      }
      function N(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, "raw", { value: e })
            : (t.raw = e),
          t
        );
      }
      var L = Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          };
      function j(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(t, n) &&
              g(e, t, n);
        return L(e, t), e;
      }
      function k(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function C(t, e, n, r) {
        if ("a" === n && !r)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !r : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
      }
      function S(t, e, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? o.call(t, n) : o ? (o.value = n) : e.set(t, n), n;
      }
      function w(t, e) {
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
      var D =
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
            ? new D(e, t.error, "An error was suppressed during disposal.")
            : e),
            (t.hasError = !0);
        }
        return (function n() {
          for (; t.stack.length; ) {
            var r = t.stack.pop();
            try {
              var o = r.dispose && r.dispose.call(r.value);
              if (r.async)
                return Promise.resolve(o).then(n, function (t) {
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
        __extends: o,
        __assign: i,
        __rest: u,
        __decorate: a,
        __param: c,
        __metadata: p,
        __awaiter: h,
        __generator: v,
        __createBinding: g,
        __exportStar: _,
        __values: A,
        __read: y,
        __spread: b,
        __spreadArrays: O,
        __spreadArray: T,
        __await: m,
        __asyncGenerator: E,
        __asyncDelegator: I,
        __asyncValues: P,
        __makeTemplateObject: N,
        __importStar: j,
        __importDefault: k,
        __classPrivateFieldGet: C,
        __classPrivateFieldSet: S,
        __classPrivateFieldIn: w,
        __addDisposableResource: R,
        __disposeResources: M,
      };
    },
    c514: function (t, e, n) {
      var r, o, i, u, a;
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return a;
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
        })(o || (o = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.FILL_NICKNAME_AND_AVATAR = "fillNicknameAndAvatar"),
            (t.PROTOCOL = "protocol"),
            (t.YZ_AUTH = "yzAuth"),
            (t.FILL_YZ_AUTH = "fillYzAuth"),
            (t.EXTERNAL = "external");
        })(i || (i = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.FILL_NICKNAME_AND_AVATAR = "fillNicknameAndAvatar"),
            (t.PROTOCOL = "protocol"),
            (t.YZ_AUTH = "yzAuth"),
            (t.FILL_YZ_AUTH = "fillYzAuth");
        })(u || (u = {})),
        (function (t) {
          (t.Agree = "agree"), (t.Disagree = "disagree");
        })(a || (a = {}));
    },
    c7Bu: function (t, e, n) {
      n.r(e),
        n.d(e, "BEFORE_LOGIN_EVENT", function () {
          return r;
        }),
        n.d(e, "TEE_LOGIN_SUCCESS", function () {
          return o;
        }),
        n.d(e, "BEFORE_LOGIN_IN_YOUZAN", function () {
          return i;
        }),
        n.d(e, "EVENT_KEYS", function () {
          return u;
        }),
        n.d(e, "GET_APP_TOKEN_HOOK", function () {
          return a.c;
        }),
        n.d(e, "LOGIN_CHECK_GLOBAL_HOOK", function () {
          return a.d;
        }),
        n.d(e, "TEE_LOGIN_FAIL_HOOK", function () {
          return a.g;
        }),
        n.d(e, "BEFORE_YOUZAN_LOGIN_HOOK", function () {
          return a.b;
        }),
        n.d(e, "YOUZAN_LOGIN_FAIL_HOOK", function () {
          return a.h;
        }),
        n.d(e, "MOBILE_CHANGE_HOOK", function () {
          return a.e;
        }),
        n.d(e, "AUTH_ONE_AFTER_HOOK", function () {
          return a.a;
        }),
        n.d(e, "PROTOCOL_BEFORE_AGREE_HOOK", function () {
          return a.f;
        });
      var r = "passport-tee-login-before",
        o = "passport-tee-login-code-success",
        i = "passport-tee-login-before-token",
        u = { LOGIN_END: "passport-tee-login-end" },
        a = n("DEHM");
    },
    ceQz: function (t, e) {},
    chrl: function (t, e, n) {
      n.d(e, "d", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n("9ZMt"),
        o = n("HnuB"),
        i = r.default.getEnv(),
        u = i === o.TeeEnvEnum.WEB,
        a = i === o.TeeEnvEnum.XHS,
        c = function () {
          return !1;
        };
    },
    dvf8: function (t, e, n) {
      n.r(e),
        n.d(e, "getAppTokenHooks", function () {
          return r.a;
        }),
        n.d(e, "setAppTokenHooks", function () {
          return r.f;
        }),
        n.d(e, "getCheckLoginHooks", function () {
          return r.c;
        }),
        n.d(e, "setCheckLoginHooks", function () {
          return r.h;
        }),
        n.d(e, "getTeeLoginFailHooks", function () {
          return r.d;
        }),
        n.d(e, "setTeeLoginFailHooks", function () {
          return r.i;
        }),
        n.d(e, "getBeforeYouzanLoginHook", function () {
          return r.b;
        }),
        n.d(e, "setBeforeYouzanLoginHook", function () {
          return r.g;
        }),
        n.d(e, "getYouzanLoginFailHooks", function () {
          return r.e;
        }),
        n.d(e, "setYouzanLoginFailHooks", function () {
          return r.j;
        }),
        n.d(e, "authorizeHook", function () {
          return a;
        }),
        n.d(e, "protocolHook", function () {
          return c;
        }),
        n.d(e, "executeHook", function () {
          return f;
        }),
        n.d(e, "executeHookAsync", function () {
          return s;
        });
      var r = n("mlg6"),
        o = n("GjIH"),
        i = n("DEHM"),
        u = n("fLr7"),
        a = {
          mobileChange: Object(o.a)(i.e),
          authItemAfter: Object(o.a)(i.a),
          buttonClickAfter: Object(o.a)(u.a),
          popupShowAfter: Object(o.a)(u.b),
        },
        c = { beforeAgree: Object(o.b)(i.f) },
        f = function (t, e, n) {
          try {
            if (!t) return n;
            var r = t();
            if (!r) return n;
            var o = e || [];
            return Array.isArray(r)
              ? Promise.all(
                  r.map(function (t) {
                    return t.apply(void 0, o);
                  })
                )
              : r.apply(void 0, o);
          } catch (t) {}
          return n;
        },
        s = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return Promise.resolve().then(function () {
            return f.apply(void 0, t);
          });
        };
    },
    equh: function (t, e) {},
    fLr7: function (t, e, n) {
      var r, o, i;
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "r", function () {
          return i;
        }),
        n.d(e, "f", function () {
          return a;
        }),
        n.d(e, "g", function () {
          return c;
        }),
        n.d(e, "h", function () {
          return f;
        }),
        n.d(e, "i", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "j", function () {
          return l;
        }),
        n.d(e, "q", function () {
          return p;
        }),
        n.d(e, "p", function () {
          return h;
        }),
        n.d(e, "n", function () {
          return v;
        }),
        n.d(e, "o", function () {
          return g;
        }),
        n.d(e, "m", function () {
          return _;
        }),
        n.d(e, "l", function () {
          return A;
        }),
        n.d(e, "k", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return y;
        }),
        n.d(e, "b", function () {
          return b;
        }),
        (function (t) {
          (t.NativeMobile = "mobile_n"),
            (t.NativeNickAvatar = "nick_n"),
            (t.YZButton = "yz");
        })(r || (r = {})),
        (function (t) {
          (t.YZMobile = "mobile_yz"),
            (t.YZProtocol = "protocol_yz"),
            (t.YZAuth = "auth_yz"),
            (t.YZUserInfo = "info_yz"),
            (t.YZExternal = "external_yz");
        })(o || (o = {})),
        (function (t) {
          t[(t.External = 1)] = "External";
        })(i || (i = {}));
      var u,
        a = "CACHE_AUTHORIZE_DARA",
        c = "BEHAVIOR_CRYPTO_INFO",
        f = "login_ticket_info",
        s = "CACHE_ON_PRIVACY_AUTH",
        d = "CACHE_NEED_PRIVACY_AUTH",
        l = "CACHE_REQ_HOOK_INIT",
        p = "user-auth:sync-state",
        h = "user-auth:auth-success",
        v = "passport-tee-login-before",
        g = "passport-tee-login-before-token",
        _ = "passport-tee-login-code-success",
        A = "passport-tee-login-end";
      !(function (t) {
        (t[(t.Unknown = -1)] = "Unknown"),
          (t[(t.Password = 0)] = "Password"),
          (t[(t.Sms = 1)] = "Sms"),
          (t[(t.Yz = 2)] = "Yz"),
          (t[(t.Weapp = 3)] = "Weapp"),
          (t[(t.AppSdk = 4)] = "AppSdk");
      })(u || (u = {}));
      var y = "authBtnClickAfterHook",
        b = "authPopupShowAfterHook";
    },
    fYK9: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "d", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return c;
        });
      var r = n("Tewj"),
        o = n("fLr7");
      function i(t) {
        r.default.trigger(o.q, t);
      }
      function u(t) {
        return (
          r.default.on(o.q, t),
          function () {
            return r.default.off(o.q, t);
          }
        );
      }
      function a(t) {
        r.default.trigger(o.p, t);
      }
      function c(t, e) {
        var n,
          i = (e || {}).once,
          u = function () {
            n && r.default.off(o.p, n), (n = null);
          };
        return (
          (n = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            i && u(), t.apply(void 0, e);
          }),
          r.default.on(o.p, n),
          u
        );
      }
    },
    iD8u: function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var r = n("Eu17"),
        o = n("bb6g"),
        i = n("9ZMt"),
        u = n("kSnQ"),
        a = function () {
          var t = {
            component: "user_authorize",
            env: i.default.getEnv(),
            pageUrl: Object(u.f)(),
            logTime: Date.now(),
          };
          try {
            var e = getApp();
            (t.mpVer = e.getVersion()),
              (t.kdtId = e.getKdtId()),
              (t.sid = e.getSessionId());
          } catch (t) {}
          return t;
        },
        c = function (t, e) {
          return Object(u.a)({
            method: "POST",
            origin: "uic",
            path: "/passport/log.json",
            data: Object(o.__assign)(
              Object(o.__assign)(Object(o.__assign)({}, e), a()),
              { logName: t, message: Object(u.d)(e) }
            ),
            withCredentials: !0,
          });
        },
        f = function (t, e) {
          return Object(u.m)(
            Object(o.__assign)(Object(o.__assign)({}, e), {
              ei: t,
              params: Object(o.__assign)(Object(o.__assign)({}, a()), e.params),
            })
          );
        },
        s = new (function () {
          var t = this;
          (this.baseLog = function (t, e, n) {
            var o = (n || {}).channels,
              i = void 0 === o ? [] : o;
            0 !== i.length
              ? (i.includes(r.a.TRACK) && f(t, e),
                i.includes(r.a.SKYNET) && c(t, e))
              : (function (t, e) {
                  c(t, e), f(t, e);
                })(t, e);
          }),
            (this._getLogParams = function (t, e) {
              return (
                "object" == typeof t &&
                  ((e = {
                    et: "custom",
                    ei: "account_common",
                    en: "账号通用日志",
                    params: t,
                  }),
                  (t = r.b.ACCOUNT_COMMON)),
                { logId: t, data: e }
              );
            }),
            (this.logAll = function (e, n) {
              var r = t._getLogParams(e, n);
              t.baseLog(r.logId, r.data);
            }),
            (this.logSkynet = function (e, n) {
              var r = t._getLogParams(e, n),
                o = r.logId,
                i = r.data;
              c(o, i);
            }),
            (this.logTrack = function (e, n) {
              var r = t._getLogParams(e, n),
                o = r.logId,
                i = r.data;
              f(o, i);
            }),
            (this.logNativeMobileClick = function (e) {
              t.logAll(r.b.NATIVE_MOBILE_CLICK, {
                en: "原生手机号授权按钮点击",
                et: "click",
                params: e,
              });
            }),
            (this.logAuthClick = function (e) {
              t.logAll(r.b.AUTH_BTN_CLICK, {
                en: "授权按钮点击",
                et: "click",
                params: e,
              });
            }),
            (this.logAuthEnd = function (e) {
              t.logAll(r.b.AUTH_END, {
                en: "全部授权完成",
                et: "click",
                params: e,
              });
            }),
            (this.logAuthOne = function (e) {
              t.logAll(r.b.AUTH_ONE, {
                en: "单项授权完成",
                et: "click",
                params: e,
              });
            });
        })();
    },
    kKb7: function (t, e, n) {
      n.r(e);
      var r = n("bDRy");
      for (var o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
    },
    kSnQ: function (t, e, n) {
      n.d(e, "n", function () {
        return r.d;
      }),
        n.d(e, "i", function () {
          return r.b;
        }),
        n.d(e, "j", function () {
          return r.c;
        }),
        n.d(e, "h", function () {
          return r.a;
        }),
        n.d(e, "g", function () {
          return i.a;
        }),
        n.d(e, "b", function () {
          return u.a;
        }),
        n.d(e, "a", function () {
          return a.a;
        }),
        n.d(e, "l", function () {
          return a.b;
        }),
        n.d(e, "m", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return s.a;
        }),
        n.d(e, "f", function () {
          return s.b;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return _;
        }),
        n.d(e, "o", function () {
          return A;
        }),
        n.d(e, "k", function () {
          return b;
        });
      var r = n("chrl"),
        o = n("sx6y"),
        i = n.n(o),
        u = n("CKld"),
        a = n("Y6Ef"),
        c = n("ONqW");
      function f(t) {
        try {
          Object(c.a)().log(((e = t), JSON.parse(JSON.stringify(e || null))));
        } catch (t) {}
        var e;
      }
      var s = n("AXNr");
      function d(t) {
        return [null, void 0, NaN].includes(t)
          ? ""
          : String(
              "object" != typeof t ? t : t.message || t.msg || t.errMsg || ""
            );
      }
      var l = n("U0uK"),
        p = n("3tAa"),
        h = Object(p.a)("APP_ID", Object(l.a)().appId),
        v = h[0],
        g = h[1],
        _ = function () {
          return v();
        },
        A = function (t) {
          return g(t), t;
        },
        y = n("HnuB");
      function b(t) {
        var e,
          n = t || {},
          r = n.mobile,
          o = n.gender,
          i = n.state,
          u = n.avatar,
          a = n.nickname,
          c = n.userOpenId,
          f = i || {},
          s = f.protocol,
          d = f.mobile,
          l = f.nicknameAndAvatar;
        return {
          info: {
            mobile: r,
            gender: null !== (e = o) && void 0 !== e ? e : y.UserGender.Unknown,
            avatar: u,
            nickname: a,
            yzOpenId: c,
          },
          state: { protocol: !!s, mobile: !!d, nicknameAndAvatar: !!l },
        };
      }
    },
    mM1a: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("9ZMt"),
        o = {};
      function i() {
        if (o.getLaunchOptionsSync) return o.getLaunchOptionsSync;
        var t = r.default.$native.getLaunchOptionsSync(),
          e = t.path,
          n = t.scene,
          i = t.query,
          u = t.referrerInfo;
        return (
          (o.getLaunchOptionsSync = {
            path: e,
            scene: n,
            query: i,
            referrerInfo: u,
          }),
          o.getLaunchOptionsSync
        );
      }
    },
    mMP1: function (t, e, n) {
      var r;
      n.d(e, "a", function () {
        return r;
      }),
        (function (t) {
          (t[(t.Unknown = 0)] = "Unknown"),
            (t[(t.Male = 1)] = "Male"),
            (t[(t.Female = 2)] = "Female");
        })(r || (r = {}));
    },
    mSE4: function (t, e) {},
    mlg6: function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "f", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "h", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return h;
        }),
        n.d(e, "i", function () {
          return v;
        }),
        n.d(e, "b", function () {
          return g;
        }),
        n.d(e, "g", function () {
          return _;
        }),
        n.d(e, "e", function () {
          return A;
        }),
        n.d(e, "j", function () {
          return y;
        });
      var r,
        o,
        i,
        u,
        a,
        c = n("3tAa"),
        f = n("DEHM"),
        s = (r = Object(c.a)(f.c, void 0))[0],
        d = r[1],
        l = (o = Object(c.a)(f.d, void 0))[0],
        p = o[1],
        h = (i = Object(c.a)(f.g, void 0))[0],
        v = i[1],
        g = (u = Object(c.a)(f.b, void 0))[0],
        _ = u[1],
        A = (a = Object(c.a)(f.h, void 0))[0],
        y = a[1];
    },
    oYRf: function (t, e, n) {
      n.r(e);
      var r = n("13Jo");
      for (var o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      var i = n("afTL");
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
    },
    sx6y: function (t, e) {},
    z9IR: function (t, e, n) {
      var r = n("5+FR"),
        o = [],
        i = (t) => (
          (t = Object.assign(Object.assign({}, i.currentOptions), t)),
          new Promise((e, n) => {
            var i = Object(r.a)(),
              u = t.ref || Object(r.b)();
            delete t.ref,
              u || (u = i[i.length - 1]),
              u &&
                (u.setDataWithProps(
                  Object.assign(
                    Object.assign({ onCancel: n, onConfirm: e }, t),
                    { show: !0 }
                  )
                ),
                o.push(u));
          })
        );
      (i.defaultOptions = {
        show: !1,
        title: "",
        width: 320,
        message: "",
        zIndex: "var(--van-dialog-zIndex, 100)",
        overlay: !0,
        className: "",
        asyncClose: !1,
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
      }),
        (i.alert = i),
        (i.confirm = (t) => i(Object.assign({ showCancelButton: !0 }, t))),
        (i.close = () => {
          o.forEach((t) => {
            t.close();
          }),
            (o = []);
        }),
        (i.stopLoading = () => {
          o.forEach((t) => {
            t.stopLoading();
          });
        }),
        (i.setDefaultOptions = (t) => {
          Object.assign(i.currentOptions, t);
        }),
        (i.resetDefaultOptions = () => {
          i.currentOptions = Object.assign({}, i.defaultOptions);
        }),
        i.resetDefaultOptions(),
        (e.a = i);
    },
  });
