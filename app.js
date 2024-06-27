"use strict";
var r = require("./r");
r(
  "+JiC",
  Object.assign({}, require("./v.js").modules, require("./c.js").modules, {
    "+JiC": function (e, t, n) {
      n.r(t);
      var o = {};
      n.r(o),
        n.d(o, "login", function () {
          return br;
        }),
        n.d(o, "checkSession", function () {
          return yr;
        }),
        n.d(o, "checkSessionWithWx", function () {
          return xr;
        }),
        n.d(o, "updateLoginStorage", function () {
          return _r;
        });
      var r = {};
      n.r(r),
        n.d(r, "resolveTeeAPI", function () {
          return Ir;
        }),
        n.d(r, "resolveProtocol", function () {
          return Cr;
        }),
        n.d(r, "login", function () {
          return Mr;
        }),
        n.d(r, "getToken", function () {
          return Br;
        }),
        n.d(r, "hasToken", function () {
          return Fr;
        }),
        n.d(r, "getAccessToken", function () {
          return Hr;
        }),
        n.d(r, "getFansType", function () {
          return zr;
        }),
        n.d(r, "getSessionId", function () {
          return Ur;
        }),
        n.d(r, "getBuyerId", function () {
          return Nr;
        }),
        n.d(r, "getMobile", function () {
          return qr;
        }),
        n.d(r, "getUserInfoSync", function () {
          return Gr;
        }),
        n.d(r, "updateUserInfo", function () {
          return Wr;
        }),
        n.d(r, "getAuthorizeData", function () {
          return Vr;
        }),
        n.d(r, "getUserInfo", function () {
          return $r;
        }),
        n.d(r, "clearProtocolCache", function () {
          return Yr;
        }),
        n.d(r, "onNeedPrivacyAuth", function () {
          return Jr;
        }),
        n.d(r, "prefetchUserAuthData", function () {
          return Zr;
        }),
        n.d(r, "refreshUserAuthData", function () {
          return Xr;
        }),
        n.d(r, "syncAuthState", function () {
          return ei;
        });
      var i = {};
      n.r(i),
        n.d(i, "getStore", function () {
          return ai;
        }),
        n.d(i, "setOfflineId", function () {
          return ui;
        }),
        n.d(i, "listenMultiStoreResolved", function () {
          return ci;
        }),
        n.d(i, "getOfflineData", function () {
          return di;
        }),
        n.d(i, "getOfflineId", function () {
          return xn.d;
        }),
        n.d(i, "saveOfflineId", function () {
          return ii;
        });
      var a,
        s,
        u = n("Fcif"),
        c = n("9ZMt"),
        d = n("bb6g");
      !(function (e) {
        (e.APP = "App"), (e.PAGE = "Page");
      })(a || (a = {})),
        (function (e) {
          (e.ACTIVE = "ACTIVE"), (e.PASSIVE = "PASSIVE");
        })(s || (s = {}));
      var p,
        l,
        f = Symbol("undefined"),
        h = function () {};
      !(function (e) {
        (e.VUE = "VUE"), (e.TEE = "TEE"), (e.REACT = "REACT");
      })(p || (p = {})),
        (function (e) {
          (e.ANT = "ant"),
            (e.QQ = "qq"),
            (e.WEAPP = "weapp"),
            (e.WEB = "web"),
            (e.XHS = "xhs");
        })(l || (l = {}));
      var g;
      !(function (e) {
        (e.pre = "pre"), (e.normal = "normal"), (e.post = "post");
      })(g || (g = {}));
      var m,
        v = [g.pre, g.normal, g.post];
      !(function (e) {
        (e.Unsafe = "Unsafe"), (e.High = "High"), (e.Strict = "Strict");
      })(m || (m = {}));
      var b = ["onAppLaunch", "onAppShow", "onAppHide"],
        y = [
          "beforePageCreate",
          "beforePageMount",
          "onPageShow",
          "onPageHide",
          "pageDestroyed",
        ],
        x = ["onShareTimeline", "onShareAppMessage"],
        _ = Object(d.__spreadArray)(
          ["onPageScroll", "onReachBottom", "onPullDownRefresh"],
          x,
          !0
        ),
        k = Object(d.__spreadArray)(Object(d.__spreadArray)([], y, !0), _, !0),
        j = Object(d.__spreadArray)(
          Object(d.__spreadArray)(
            Object(d.__spreadArray)(["onRootClick"], b, !0),
            y,
            !0
          ),
          ["pageCreated", "pageMounted"],
          !1
        ),
        O = [
          "env",
          "data",
          "watch",
          "event",
          "process",
          "lambdas",
          "components",
          "widgets",
          "emit",
          "invoke",
          "invokePipe",
          "invokeSeries",
        ],
        S = Symbol.for("module/ctx"),
        P = Symbol.for("module/event"),
        I = Symbol.for("ctx/module"),
        C = [],
        A = (function (e) {
          function t(t, n) {
            var o = e.call(this, t) || this;
            return (
              (o.name = "RantaRuntimeError"),
              (o.metaData = { ranta: n }),
              C.forEach(function (e) {
                return e(o);
              }),
              o
            );
          }
          return Object(d.__extends)(t, e), t;
        })(Error),
        E = function (e) {
          C.push(function (t) {
            try {
              e(t);
            } catch (e) {}
          });
        },
        w = function (e, t) {
          var n = Object.assign(e, {
            name: "RantaRuntimeError",
            metaData: { ranta: t },
          });
          return (
            C.forEach(function (e) {
              return e(n);
            }),
            e
          );
        },
        R = function (e, t) {
          return "未在 ".concat(e, " config 中找到 ").concat(t, " 配置");
        },
        D = function (e, t, n, o) {
          return "数据"
            .concat("r" === t ? "读取" : "写入", "错误，")
            .concat("consumer" === e ? "消费方" : "提供方", "未声明 data 的")
            .concat("r" === t ? "读" : "写", "权限: moduleId: ")
            .concat(n, ", key: ")
            .concat(o);
        },
        T = function (e, t) {
          var n = e instanceof Error ? w(e, t) : new A(e, t);
          console.error("[Ranta]:", n);
        },
        L = function (e) {
          0;
        },
        M = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        };
      var B = [
          "string",
          "number",
          "bigint",
          "boolean",
          "null",
          "undefined",
          "symbol",
        ],
        F = function (e) {
          return B.includes(
            (function (e) {
              var t;
              return null ===
                (t = Object.prototype.toString
                  .call(e)
                  .match(/\[object (.*)\]/)) || void 0 === t
                ? void 0
                : t[1].toLowerCase();
            })(e)
          );
        },
        H = function (e, t) {
          try {
            return e();
          } catch (e) {
            t && (e.message = "".concat(t, ": ").concat(e.message)), T(e);
          }
        };
      function z(e) {
        return Array.from(new Set(e));
      }
      function U(e, t) {
        var n = e.length;
        e.slice(0)
          .reverse()
          .forEach(function (o, r) {
            t(o) && e.splice(n - r - 1, 1);
          });
      }
      function N(e, t) {
        return e.reduce(function (e, n) {
          return (e[n[t]] = n), e;
        }, {});
      }
      function q(e, t, n) {
        if (!e) throw new A(t, n);
      }
      function G(e, t) {
        return t.reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function W(e, t) {
        var n = z(
          Object(d.__spreadArray)(
            Object(d.__spreadArray)([], e.modules || [], !0),
            (function (e) {
              for (
                var t = Object(d.__spreadArray)([], e, !0), n = [];
                t.length > 0;

              ) {
                var o = t.shift(),
                  r = o.contents,
                  i = o.contentType;
                r &&
                  ("container" === i
                    ? t.push.apply(t, r)
                    : "module" === i &&
                      n.push.apply(
                        n,
                        o.contents.map(function (e) {
                          return "string" == typeof e ? e : e.moduleId;
                        })
                      ));
              }
              return n;
            })(e.containers),
            !0
          )
        );
        return t
          ? n.filter(function (e) {
              return !t.includes(e);
            })
          : n;
      }
      var K = function (e, t) {
          var n = t.modules,
            o = void 0 === n ? [] : n,
            r = t.extensions,
            i = void 0 === r ? [] : r,
            a = (function (e, t) {
              return e.map(function (e) {
                var n = t[e];
                return q(n, R("modules", e)), n.extensionId;
              });
            })(e, N(o, "moduleId"));
          return {
            moduleIds: e,
            extensionIds: a,
            modules: o.filter(function (t) {
              return e.includes(t.moduleId);
            }),
            extensions: i.filter(function (e) {
              return a.includes(e.extensionId);
            }),
          };
        },
        Q = function (e) {
          return e === a.APP
            ? Object(d.__spreadArray)(Object(d.__spreadArray)([], b, !0), k, !0)
            : k;
        };
      function V(e, t) {
        return e.reduce(function (e, n) {
          var o,
            r = t.find(function (e) {
              return e.extensionId === n.extensionId;
            });
          return (
            (e[n.moduleId] =
              (null === (o = null == r ? void 0 : r.sandbox) || void 0 === o
                ? void 0
                : o.level) || m.Unsafe),
            e
          );
        }, {});
      }
      var $,
        Y = { pre: -1, normal: 0, post: 1 },
        J = function (e) {
          return Y[e || g.normal];
        },
        Z = function (e) {
          var t,
            n = e.widget,
            o = [];
          return n
            ? (n.default && o.push(n.default),
              (null === (t = n.provide) || void 0 === t ? void 0 : t.length) &&
                o.push.apply(o, n.provide),
              z(o))
            : o;
        },
        X = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.limit = t), n;
          }
          return (
            Object(d.__extends)(t, e),
            (t.prototype.push = function (t) {
              return (
                e.prototype.push.call(this, t),
                this.length > this.limit && this.shift(),
                this.length
              );
            }),
            t
          );
        })(Array),
        ee = function (e) {
          return e instanceof Error && "PipeCancelError" === e.name;
        },
        te = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.name = "PipeCancelError"), L(t), n;
          }
          return Object(d.__extends)(t, e), t;
        })(Error);
      function ne(e) {
        return function (t) {
          try {
            var n = e(t);
            return n instanceof Promise
              ? n.catch(function (e) {
                  if (ee(e)) return e;
                  throw e;
                })
              : n;
          } catch (e) {
            if (ee(e)) return e;
            throw e;
          }
        };
      }
      function oe() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function (t) {
          return e.reduce(function (e, t) {
            if (ee(e)) throw e;
            return e instanceof Promise ? e.then(t) : t(e);
          }, t);
        };
      }
      !(function (e) {
        (e.BEFORE = "before"), (e.AFTER = "after");
      })($ || ($ = {}));
      var re = (function () {
          function e() {
            this.hooks = {};
          }
          return (
            (e.prototype.addHook = function (e, t, n) {
              var o = this,
                r = this.getHookKey(e, t);
              return (
                (this.hooks[r] = Object(d.__spreadArray)(
                  Object(d.__spreadArray)([], this.hooks[r] || [], !0),
                  [n],
                  !1
                )),
                function () {
                  o.remove(r, n);
                }
              );
            }),
            (e.prototype.addHookOnce = function (e, t, n) {
              var o = this,
                r = function (i) {
                  return o.remove(o.getHookKey(e, t), r), n(i);
                };
              return this.addHook(e, t, r);
            }),
            (e.prototype.getHookKey = function (e, t) {
              return "".concat(t, "-").concat(e);
            }),
            (e.prototype.remove = function (e, t) {
              var n = this.hooks[e];
              this.hooks[e] = n.filter(function (e) {
                return e !== t;
              });
            }),
            (e.prototype.runWithHookSync = function (e, t, n) {
              return this.getFns(e, t).reduce(function (e, t) {
                return t(e);
              }, n);
            }),
            (e.prototype.runWithHook = function (e, t, n) {
              var o = this.getFns(e, t);
              return oe.apply(void 0, o)(n);
            }),
            (e.prototype.getFns = function (e, t) {
              var n = this.hooks[this.getHookKey(e, $.BEFORE)] || [],
                o = this.hooks[this.getHookKey(e, $.AFTER)] || [];
              return Object(d.__spreadArray)(
                Object(d.__spreadArray)(
                  Object(d.__spreadArray)([], n, !0),
                  [t],
                  !1
                ),
                o,
                !0
              );
            }),
            e
          );
        })(),
        ie = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(d.__extends)(t, e),
            (t.prototype.pipe = function () {
              for (var e = this, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var o = t.map(function (t) {
                return function (n) {
                  return t instanceof Function
                    ? t(n)
                    : e.runWithHookSync(t[0], t[1], n);
                };
              });
              return ne(oe.apply(void 0, o));
            }),
            t
          );
        })(re);
      !(function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        Object(d.__extends)(t, e),
          (t.prototype.pipe = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var o = t.map(function (t) {
              return function (n) {
                return t instanceof Function
                  ? t(n)
                  : e.runWithHook(t[0], t[1], n);
              };
            });
            return ne(oe.apply(void 0, o));
          });
      })(re);
      var ae = (function () {
        function e(e) {
          var t = e.pluginsConfig,
            n = void 0 === t ? {} : t,
            o = e.getPluginLibs,
            r = e.supportApiNames,
            i = this;
          (this.ctxPool = {}), (this.apiPool = {});
          var a = o(n),
            s = Object(d.__assign)({}, n);
          a.forEach(function (e) {
            var t = e.pluginName,
              n = s[t];
            H(function () {
              q(
                !O.includes(t),
                ""
                  .concat(t, " 为 ctx 保留字，请勿使用 ")
                  .concat(t, " 作为插件名称")
              );
              var o = (function (e) {
                  var t = Object.create(null),
                    n = Object.create(null);
                  return (
                    e.forEach(function (e) {
                      t[e] = function (t) {
                        !n[e] && (n[e] = []), n[e].push(t);
                      };
                    }),
                    (t.config = Object.freeze({ setErrorCaptured: E })),
                    [Object.freeze(t), n]
                  );
                })(r),
                a = o[0],
                u = o[1];
              (i.apiPool[t] = u), (i.ctxPool[t] = e(n, a)), delete s[t];
            }, "".concat(t, " 插件未初始化成功"));
          });
          var u = Object.keys(s);
          u.length &&
            L(
              "以下插件未初始化成功，请检查配置是否正确：".concat(u.join("、"))
            );
        }
        return (
          (e.prototype.getCtxPool = function () {
            return this.ctxPool;
          }),
          (e.prototype.callCtx = function (e, t) {
            for (var n = [], o = 2; o < arguments.length; o++)
              n[o - 2] = arguments[o];
            var r = this.ctxPool[e];
            r
              ? r[t]
                ? r[t].apply(r, n)
                : T("".concat(e, " 插件未提供 ").concat(t, " 方法"))
              : T("无 ".concat(e, " 插件，请检查是否初始化成功"));
          }),
          (e.prototype.runApi = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            Object.entries(this.apiPool).forEach(function (n) {
              var o,
                r = n[0];
              null === (o = n[1][e]) ||
                void 0 === o ||
                o.forEach(function (n) {
                  H(function () {
                    return n.apply(void 0, t);
                  }, "".concat(r, " 插件在执行 ").concat(e, " 方法时报错"));
                });
            });
          }),
          e
        );
      })();
      var se,
        ue = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.resource = {}), (t.builtinBundle = {}), t;
          }
          return (
            Object(d.__extends)(t, e),
            (t.prototype.loadBuiltinBundle = function (e) {
              this.builtinBundle = Object(d.__assign)(
                Object(d.__assign)({}, e),
                this.builtinBundle
              );
            }),
            (t.prototype.getResource = function () {
              return this.resource;
            }),
            (t.prototype.registry = function (e) {
              var t = this.builtinBundle[e.extensionId];
              q(
                t,
                "未在 builtinBundle 中找到对应 bundle: ".concat(e.extensionId)
              ),
                (this.resource[e.extensionId] = {
                  resource: t,
                  config: e,
                  runCode: function () {
                    throw new A("不支持 runCode 方法");
                  },
                });
            }),
            t
          );
        })(h);
      !(function (e) {
        (e.init = "init"),
          (e.loadResource = "loadResource"),
          (e.createModuleCtx = "createModuleCtx"),
          (e.getModuleContext = "getModuleContext"),
          (e.initModuleRuntime = "initModuleRuntime"),
          (e.initModule = "initModule"),
          (e.getPage = "getPage"),
          (e.createPageContext = "createPageContext"),
          (e.destroyContext = "destroyContext"),
          (e.runApi = "runApi");
      })(se || (se = {}));
      var ce = function (e, t) {
          return t
            ? Object.keys(e).reduce(function (n, o) {
                var r, i, a, s, u;
                return Object(d.__assign)(
                  Object(d.__assign)({}, n),
                  (((r = {})[o] =
                    "getCtx" === o
                      ? function (n) {
                          var o = e.getCtx(n);
                          return o.ctx ? o : t.getCtx(n);
                        }
                      : ((i = e[o]),
                        (a = t[o]),
                        (s = Object.keys(i)),
                        (u = Object.keys(a)),
                        s
                          .concat(
                            u.filter(function (e) {
                              return !s.includes(e);
                            })
                          )
                          .reduce(function (e, t) {
                            return (
                              (e[t] = Object(d.__assign)(
                                Object(d.__assign)({}, i[t]),
                                a[t]
                              )),
                              e
                            );
                          }, {}))),
                  r)
                );
              }, {})
            : e;
        },
        de = function (e) {
          return function (t) {
            return (
              (t.currentModules = Object(d.__assign)(
                Object(d.__assign)({}, e),
                t.currentModules
              )),
              t
            );
          };
        },
        pe = function (e, t) {
          e.addHook(
            se.runApi,
            $.BEFORE,
            (function (e) {
              return function (t) {
                var n = t.eventName;
                if (!e.includes(n))
                  throw new A(
                    "不允许调用 "
                      .concat(n, "，只支持以下方法: ")
                      .concat(e.join(","))
                  );
                return t;
              };
            })(t)
          );
        },
        le = function (e, t, n) {
          return e.addHook(
            se.createModuleCtx,
            $.AFTER,
            (function (e, t) {
              return (
                void 0 === t && (t = {}),
                function (n) {
                  return (
                    (n.moduleId &&
                      t[n.moduleId] &&
                      t[n.moduleId] !== m.Unsafe) ||
                      Object.keys(e).reduce(function (t, o) {
                        var r = e[o];
                        return (t[o] = "function" == typeof r ? r(n) : r), t;
                      }, n),
                    n
                  );
                }
              );
            })(t, n)
          );
        },
        fe = function (e, t) {
          var n = t.appModules,
            o = t.appSubjects;
          e.addHook(
            se.createModuleCtx,
            $.BEFORE,
            (function (e) {
              return function (t) {
                return (t.subjects = ce(t.subjects, e)), t;
              };
            })(o)
          ),
            e.addHook(se.getModuleContext, $.BEFORE, de(n)),
            e.addHook(se.runApi, $.BEFORE, de(n));
        },
        he = function (e, t) {
          var n;
          return null === (n = e[t]) || void 0 === n ? void 0 : n.resource;
        },
        ge = function (e, t, n) {
          var o, r;
          return null ===
            (r =
              null === (o = e[t]) || void 0 === o
                ? void 0
                : o.resource.lambdas) || void 0 === r
            ? void 0
            : r[n];
        },
        me = function (e, t, n) {
          var o, r;
          return null ===
            (r =
              null === (o = e[t]) || void 0 === o
                ? void 0
                : o.resource.components) || void 0 === r
            ? void 0
            : r[n];
        },
        ve = function (e, t, n) {
          var o, r;
          return null ===
            (r =
              null === (o = e[t]) || void 0 === o
                ? void 0
                : o.resource.widgets) || void 0 === r
            ? void 0
            : r[n];
        },
        be = function (e, t) {
          var n;
          return null === (n = e[t]) || void 0 === n ? void 0 : n.config;
        },
        ye = function (e, t, n) {
          var o;
          return null === (o = e[t]) || void 0 === o ? void 0 : o.runCode(n);
        };
      function xe(e, t) {
        if (!t.noThrow)
          throw new A(
            "module("
              .concat(e.moduleId, ") 中未找到 ")
              .concat(t.type, "(")
              .concat(t.key, ") 对应的实现")
          );
        L(
          "module("
            .concat(e.moduleId, ") 中未找到 ")
            .concat(t.type, "(")
            .concat(t.key, ") 对应的实现")
        );
      }
      function _e(e, t, n, o) {
        return e[t] || (e[t] = {}), e[t][n] || (e[t][n] = o), e[t][n];
      }
      function ke(e, t, n) {
        return null === n
          ? []
          : n
          ? n.map(function (t) {
              var n,
                o =
                  null === (n = e[t.name]) || void 0 === n
                    ? void 0
                    : n[t.moduleId];
              return (
                q(
                  o,
                  "module("
                    .concat(t.moduleId, ") 的 ")
                    .concat(t.name, " 未提供或未初始化")
                ),
                Object(d.__assign)({ __meta: t }, o)
              );
            })
          : Object.keys(e[t] || {})
              .map(function (n) {
                return Object(d.__assign)(
                  { __meta: { name: t, moduleId: n } },
                  e[t][n]
                );
              })
              .sort(function (e, t) {
                return J(e.stage) - J(t.stage);
              });
      }
      function je(e, t, n) {
        return ke(e, t, n ? [n] : n)[0];
      }
      var Oe,
        Se,
        Pe = (function () {
          function e() {
            this.observers = [];
          }
          return (
            (e.prototype.subscribe = function (e) {
              var t = this,
                n = e.next;
              return (
                this.observers.push(n),
                {
                  unsubscribe: function () {
                    return t.unsubscribe(n);
                  },
                }
              );
            }),
            (e.prototype.unsubscribe = function (e) {
              this.observers = this.observers.filter(function (t) {
                return t !== e;
              });
            }),
            (e.prototype.next = function (e) {
              this.observers.forEach(function (t) {
                return t(e);
              });
            }),
            (e.prototype.complete = function () {
              this.observers = [];
            }),
            e
          );
        })(),
        Ie = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.value = t), n;
          }
          return (
            Object(d.__extends)(t, e),
            (t.prototype.subscribe = function (t) {
              var n = t.next;
              return (
                n(this.value), e.prototype.subscribe.call(this, { next: n })
              );
            }),
            (t.prototype.next = function (t) {
              (this.value = t), e.prototype.next.call(this, t);
            }),
            t
          );
        })(Pe),
        Ce = (function () {
          function e(e) {
            var t = e.subject,
              n = e.maxLength,
              o = void 0 === n ? 10 : n,
              r = this;
            this.values = new X(o);
            var i = t.subscribe({
              next: function (e) {
                return r.add(e);
              },
            }).unsubscribe;
            this.remove = function () {
              i(), r.clear();
            };
          }
          return (
            (e.prototype.clear = function () {
              this.values.splice(0, this.values.length);
            }),
            (e.prototype.add = function (e) {
              this.values.push(e);
            }),
            (e.prototype.read = function () {
              return this.values;
            }),
            e
          );
        })(),
        Ae = function (e, t) {
          return !F(e) || !F(t) || e !== t;
        },
        Ee = (function () {
          function e(e) {
            var t = this;
            (this.runtime = e),
              (this.subjects = {}),
              (this.unsubscribes = []),
              (this.freezedFns = []),
              (this._isActive = !0),
              (this.updateStatus = function (e) {
                (t._isActive = e === s.ACTIVE),
                  t._isActive && ((Oe = t), t.activeFreezedFn());
              }),
              (this.createRuntime = function (e, n) {
                var o,
                  r,
                  i,
                  a = t.runtime,
                  s = a.getModConfig(e),
                  u = a.getExtConfig(s.extensionId),
                  c = {},
                  d =
                    (null === (o = s.bindings) || void 0 === o
                      ? void 0
                      : o.data) || {},
                  p =
                    (null === (r = u.data) || void 0 === r
                      ? void 0
                      : r.provide) || {},
                  l =
                    (null === (i = u.data) || void 0 === i
                      ? void 0
                      : i.consume) || {};
                Object.keys(p).forEach(function (t) {
                  var o,
                    r = null === (o = n[t]) || void 0 === o ? void 0 : o[e];
                  q(
                    r,
                    "module("
                      .concat(e, ") 提供的 data(")
                      .concat(t, ") 未初始化")
                  ),
                    Object.defineProperty(c, t, {
                      get: function () {
                        var e = r.subject;
                        if (e.value !== f) return e.value;
                      },
                      set: function (e) {
                        var t = r.subject;
                        Ae(e, t.value) && t.next(e);
                      },
                    });
                }),
                  Object.keys(l).forEach(function (o) {
                    var r;
                    if (p[o])
                      d[o] &&
                        q(
                          (null === (r = d[o]) || void 0 === r
                            ? void 0
                            : r.moduleId) === e,
                          "module("
                            .concat(e, ") 消费的 data(")
                            .concat(
                              o,
                              ") 初始化失败: 对同一个数据进行 provide 和 consume，数据源需保持一致 (只能 binding 自身)"
                            )
                        );
                    else {
                      var i = t.getProvideSubject(n, o, d[o]);
                      if (i) {
                        var a = i.permission,
                          s = i.subject;
                        Object.defineProperty(c, o, {
                          get: function () {
                            if (
                              (q(l[o].includes("r"), D("consumer", "r", e, o)),
                              q(a.includes("r"), D("provider", "r", e, o)),
                              s.value !== f)
                            )
                              return s.value;
                          },
                          set: function (t) {
                            q(l[o].indexOf("w") > -1, D("consumer", "w", e, o)),
                              q(a.indexOf("w") > -1, D("provider", "w", e, o)),
                              Ae(t, s.value) && s.next(t);
                          },
                        });
                      }
                    }
                  });
                var h = t.getWatchFunction(n, e, { consume: l, provide: p }, d);
                return { data: c, watch: h };
              }),
              (this.addSubjects = function (e) {
                e.forEach(function (e) {
                  var n = t.runtime.getExtConfig(e.extensionId);
                  t.addSubject(e, n);
                });
              }),
              (this.destroy = function () {
                Object.keys(t.subjects).forEach(function (e) {
                  t.subjects[e] &&
                    Object.keys(t.subjects[e]).forEach(function (n) {
                      t.subjects[e][n].subject.complete();
                    });
                }),
                  (t.subjects = {}),
                  t.unsubscribes.forEach(function (e) {
                    return e();
                  }),
                  (t.unsubscribes = []),
                  (t.freezedFns = []),
                  Oe === t && (Oe = void 0);
              }),
              (this.addSubject = function (e, n) {
                var o,
                  r = e.moduleId,
                  i = e.stage,
                  a =
                    (null === (o = n.data) || void 0 === o
                      ? void 0
                      : o.provide) || {};
                Object.keys(a).forEach(function (e) {
                  var n,
                    o = a[e];
                  if (
                    null === (n = t.subjects[e]) || void 0 === n ? void 0 : n[r]
                  )
                    return (
                      (t.subjects[e][r].stage = i),
                      void (t.subjects[e][r].permission = o)
                    );
                  _e(t.subjects, e, r, {
                    subject: new Ie(f),
                    permission: o,
                    stage: i,
                  });
                });
              }),
              (this.registryDefaultSubject = function (e, n) {
                return _e(t.subjects, e, n, {
                  subject: new Ie(f),
                  permission: ["r", "w"],
                  stage: g.post,
                });
              }),
              (this.getProvideSubject = function (e, n, o) {
                var r;
                return (
                  o &&
                    !(null === (r = e[o.name]) || void 0 === r
                      ? void 0
                      : r[o.moduleId]) &&
                    _e(
                      e,
                      o.name,
                      o.moduleId,
                      t.registryDefaultSubject(o.name, o.moduleId)
                    ),
                  je(e, n, o)
                );
              }),
              (this.addFreezedFn = function (e) {
                t.freezedFns.push(e);
              }),
              (this.activeFreezedFn = function () {
                t.freezedFns.forEach(function (e) {
                  var t = e.fn;
                  return H(t);
                }),
                  (t.freezedFns = []);
              }),
              (this.removeFreezedFn = function (e) {
                t.freezedFns = t.freezedFns.filter(function (t) {
                  return t.originFn !== e;
                });
              }),
              (this.runCallback = function (e) {
                var n = e.fn,
                  o = e.originFn,
                  r = e.isActiveWhenBack;
                t.isActive ? n() : r && t.addFreezedFn({ fn: n, originFn: o });
              }),
              (this.getWatchFunction = function (e, n, o, r) {
                return function (i, a, s) {
                  var u,
                    c,
                    d = (void 0 === s ? {} : s).isActiveWhenBack,
                    p = void 0 === d || d;
                  if (!i) return function () {};
                  var l = o.provide,
                    h = o.consume;
                  if (h[i]) {
                    if (!(y = t.getProvideSubject(e, i, r[i])))
                      return function () {};
                    var g = y.subject,
                      m = y.permission,
                      v = g.subscribe({
                        next: function (e) {
                          H(function () {
                            q(h[i].indexOf("r") > -1, D("consumer", "r", n, i)),
                              q(m.indexOf("r") > -1, D("provider", "r", n, i)),
                              e !== f &&
                                t.runCallback({
                                  fn: function () {
                                    return a(e);
                                  },
                                  isActiveWhenBack: p,
                                  originFn: a,
                                });
                          });
                        },
                      }),
                      b = function () {
                        v.unsubscribe(), t.removeFreezedFn(a);
                      };
                    return t.unsubscribes.push(b), b;
                  }
                  if (l[i]) {
                    var y;
                    q(
                      (y =
                        null ===
                          (c =
                            null === (u = t.subjects) || void 0 === u
                              ? void 0
                              : u[i]) || void 0 === c
                          ? void 0
                          : c[n]),
                      "module("
                        .concat(n, ") 提供的 data(")
                        .concat(i, ") 未初始化")
                    );
                    var x = (g = y.subject).subscribe({
                      next: function (e) {
                        H(function () {
                          e !== f &&
                            t.runCallback({
                              fn: function () {
                                return a(e);
                              },
                              isActiveWhenBack: p,
                              originFn: a,
                            });
                        });
                      },
                    });
                    b = function () {
                      x.unsubscribe(), t.removeFreezedFn(a);
                    };
                    return t.unsubscribes.push(b), b;
                  }
                  throw new A(
                    "data("
                      .concat(i, ") 未在 module(")
                      .concat(
                        n,
                        ") 对应的 extension config 中声明，无法在代码中使用"
                      )
                  );
                };
              }),
              (this.getSubjects = function () {
                return t.subjects;
              }),
              e.forEachModule(this.addSubject),
              e.type === a.PAGE && (Oe = this);
          }
          return (
            Object.defineProperty(e.prototype, "isActive", {
              get: function () {
                return this._isActive || Oe === this;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        we = (function () {
          function e(t, n, o, r, i) {
            var a = this;
            (this.subjects = t),
              (this.meta = n),
              (this.next = o),
              (this.shouldReplay = r),
              (this.registryDefaultSubject = i),
              (this.events = {}),
              (this.listenFns = {}),
              (this.freezedFns = []),
              (this.disableReplay = function () {
                a.shouldReplay = !1;
              }),
              (this.listen = function (e, t, n) {
                var o = void 0 === n ? {} : n,
                  r = o.isActiveWhenBack,
                  i = void 0 === r || r,
                  s = o.originFn,
                  u = void 0 === s ? t : s;
                a._listen(e, t, { isActiveWhenBack: i, originFn: u });
              }),
              (this.listenWithReplay = function (e, t, n) {
                var o = void 0 === n ? {} : n,
                  r = o.isActiveWhenBack,
                  i = void 0 === r || r,
                  s = o.originFn,
                  u = void 0 === s ? t : s;
                a._listen(e, t, {
                  replay: !0,
                  isActiveWhenBack: i,
                  originFn: u,
                });
              }),
              (this.addListenFn = function (e, t) {
                a.listenFns[e]
                  ? a.listenFns[e].push(t)
                  : (a.listenFns[e] = [t]);
              }),
              (this.addFreezedFn = function (e) {
                a.freezedFns.push(e);
              }),
              (this.removeFreezedFn = function (e) {
                U(a.freezedFns, function (t) {
                  return t.originFn === e;
                });
              }),
              (this.activeFreezedFn = function () {
                a.freezedFns.forEach(function (e) {
                  var t = e.fn;
                  return H(t);
                }),
                  (a.freezedFns = []);
              }),
              (this._listen = function (t, n, o) {
                var r = o.replay,
                  i = o.originFn,
                  s = void 0 === i ? n : i,
                  u = o.isActiveWhenBack,
                  c = a.meta,
                  d = c.moduleId,
                  p = c.listens,
                  l = c.bindings;
                if (Re(t, p, { moduleId: d, type: "listen" })) {
                  a.addListenFn(t, s);
                  var f = a.getListenSubjects(t, l[t]);
                  if (f.length) {
                    var h = function (e) {
                      return a.next(function (t) {
                        t
                          ? n(e)
                          : u &&
                            a.addFreezedFn({
                              fn: function () {
                                return n(e);
                              },
                              originFn: s,
                            });
                      });
                    };
                    f.forEach(function (o) {
                      (a.shouldReplay || r) &&
                        e.replayEvent(o.deferBuffer.read(), h, {
                          moduleId: d,
                          name: t,
                        });
                      var i = o.subject.subscribe({ next: h });
                      a.events[t] || (a.events[t] = []),
                        a.events[t].push({
                          subscription: i,
                          handler: n,
                          originFn: s,
                        });
                    });
                  }
                }
              }),
              (this.emit = function (e, t) {
                var n = a.meta,
                  o = n.emits,
                  r = n.moduleId;
                Re(e, o, { moduleId: r, type: "emit" }) &&
                  je(a.subjects, e, { name: e, moduleId: r }).subject.next(t);
              }),
              (this.once = function (e, t, n) {
                var o = void 0 === n ? {} : n,
                  r = o.isActiveWhenBack,
                  i = void 0 === r || r,
                  s = o.originFn,
                  u = void 0 === s ? t : s;
                a._listen(
                  e,
                  function (n) {
                    a.remove(e, u), t(n);
                  },
                  { originFn: u, isActiveWhenBack: i }
                );
              }),
              (this.destroy = function () {
                Object.keys(a.listenFns).forEach(function (e) {
                  a.listenFns[e].forEach(function (t) {
                    return a.remove(e, t);
                  }),
                    delete a.listenFns[e];
                }),
                  (a.listenFns = {}),
                  (a.freezedFns = []);
              }),
              (this.remove = function (e, t) {
                var n,
                  o = a.events;
                t ||
                  (o[e] =
                    null === (n = o[e]) || void 0 === n
                      ? void 0
                      : n.filter(function (e) {
                          return (
                            e.subscription.unsubscribe(),
                            a.removeFreezedFn(e.originFn),
                            !1
                          );
                        }));
                var r = o[e];
                r &&
                  0 !== r.length &&
                  (o[e] = r.filter(function (e) {
                    return (
                      e.originFn !== t ||
                      (e.subscription.unsubscribe(), a.removeFreezedFn(t), !1)
                    );
                  }));
              }),
              (this.getListenSubjects = function (e, t) {
                return (
                  t &&
                    t
                      .filter(function (e) {
                        var t;
                        return !(null === (t = a.subjects[e.name]) ||
                        void 0 === t
                          ? void 0
                          : t[e.moduleId]);
                      })
                      .forEach(function (e) {
                        _e(
                          a.subjects,
                          e.name,
                          e.moduleId,
                          a.registryDefaultSubject(e.name, e.moduleId)
                        );
                      }),
                  ke(a.subjects, e, t)
                );
              }),
              (this.id = n.moduleId);
          }
          return (
            (e.replayEvent = function (e, t, n) {
              if (0 !== e.length) {
                M(
                  "defer - 正在进行 module ("
                    .concat(n.moduleId, ") 对 ")
                    .concat(n.name, " 事件的 ")
                    .concat(e.length, " 次监听回放")
                );
                var o = new Pe(),
                  r = o.subscribe({ next: t }).unsubscribe;
                e.forEach(function (e) {
                  return o.next(e);
                }),
                  r();
              }
            }),
            e
          );
        })();
      function Re(e, t, n) {
        var o = n.moduleId,
          r = n.type;
        return (
          !!t.includes(e) ||
          (T(
            "module("
              .concat(o, ") 对应的 extension 中未声明 event ")
              .concat(r, ": ")
              .concat(e)
          ),
          !1)
        );
      }
      var De = (function () {
          function e(e) {
            var t = this;
            (this.runtime = e),
              (this.subjects = {}),
              (this.childRuntime = []),
              (this._isActive = !0),
              (this.addSubjects = function (e) {
                e.forEach(function (e) {
                  var n = t.runtime.getExtConfig(e.extensionId);
                  t.addSubject(e, n);
                });
              }),
              (this.updateStatus = function (e) {
                (t._isActive = e === s.ACTIVE),
                  t._isActive &&
                    ((Se = t),
                    t.childRuntime.forEach(function (e) {
                      return e.activeFreezedFn();
                    }));
              }),
              (this.addSubject = function (e, n) {
                var o,
                  r = e.moduleId,
                  i = e.stage;
                (
                  (null === (o = n.event) || void 0 === o ? void 0 : o.emit) ||
                  []
                ).forEach(function (e) {
                  var n;
                  if (
                    null === (n = t.subjects[e]) || void 0 === n ? void 0 : n[r]
                  )
                    t.subjects[e][r].stage = i;
                  else {
                    var o = new Pe();
                    _e(t.subjects, e, r, {
                      subject: o,
                      deferBuffer: new Ce({ subject: o }),
                      stage: i,
                    });
                  }
                });
              }),
              (this.registryDefaultSubject = function (e, n) {
                var o = new Pe();
                return _e(t.subjects, e, n, {
                  subject: o,
                  deferBuffer: new Ce({ subject: o }),
                  stage: g.post,
                });
              }),
              (this.createRuntime = function (e, n, o) {
                var r, i, a;
                void 0 === o && (o = !1);
                var s = t.runtime,
                  u = s.getModConfig(e),
                  c = s.getExtConfig(u.extensionId),
                  d = new we(
                    n,
                    {
                      listens:
                        (null === (r = c.event) || void 0 === r
                          ? void 0
                          : r.listen) || [],
                      emits:
                        (null === (i = c.event) || void 0 === i
                          ? void 0
                          : i.emit) || [],
                      bindings:
                        (null === (a = u.bindings) || void 0 === a
                          ? void 0
                          : a.event) || {},
                      moduleId: e,
                    },
                    function (e) {
                      return H(function () {
                        return e(t.isActive);
                      });
                    },
                    o,
                    t.registryDefaultSubject
                  );
                return (
                  t.childRuntime.push(d),
                  {
                    event: G(d, [
                      "emit",
                      "listen",
                      "once",
                      "remove",
                      "listenWithReplay",
                    ]),
                  }
                );
              }),
              (this.disableReplay = function (e) {
                t.childRuntime.forEach(function (t) {
                  e.includes(t.id) && t.disableReplay();
                });
              }),
              (this.destroy = function () {
                Object.keys(t.subjects).forEach(function (e) {
                  q(
                    t.subjects[e],
                    "event.subjects.".concat(e, " is undefined")
                  ),
                    Object.keys(t.subjects[e]).forEach(function (n) {
                      var o = t.subjects[e][n],
                        r = o.subject;
                      o.deferBuffer.remove(), r.complete();
                    }),
                    delete t.subjects[e];
                }),
                  t.childRuntime.forEach(function (e) {
                    return e.destroy();
                  }),
                  (t.childRuntime = []);
              }),
              (this.clearAllDeferBuffer = function () {
                Object.keys(t.subjects).forEach(function (e) {
                  q(
                    t.subjects[e],
                    "event.subjects.".concat(e, " is undefined")
                  ),
                    Object.keys(t.subjects[e]).forEach(function (n) {
                      var o, r, i, a;
                      null ===
                        (a =
                          null ===
                            (i =
                              null ===
                                (r =
                                  null === (o = t.subjects[e]) || void 0 === o
                                    ? void 0
                                    : o[n]) || void 0 === r
                                ? void 0
                                : r.deferBuffer) || void 0 === i
                            ? void 0
                            : i.clear) ||
                        void 0 === a ||
                        a.call(i);
                    });
                });
              }),
              (this.getSubjects = function () {
                return t.subjects;
              }),
              e.forEachModule(this.addSubject),
              e.type === a.PAGE && (Se = this);
          }
          return (
            Object.defineProperty(e.prototype, "isActive", {
              get: function () {
                return this._isActive || Se === this;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        Te = function (e, t) {
          var n = this;
          (this.subjects = e),
            (this.meta = t),
            (this.undef = function (e, t) {
              var o = n.meta.moduleId;
              q(t, "只能移除对指定 function 的 define"),
                U(
                  je(n.subjects, e, { name: e, moduleId: o }).fns,
                  function (e) {
                    return e.originFn === t;
                  }
                );
            }),
            (this.define = function (e, t, o) {
              var r = (void 0 === o ? {} : o).originFn,
                i = void 0 === r ? t : r,
                a = n.meta,
                s = a.moduleId;
              Le(e, a.define, { moduleId: s, type: "define" }),
                je(n.subjects, e, { name: e, moduleId: s }).fns.push({
                  fn: t,
                  originFn: i,
                });
            }),
            (this.invokePipe = function (e, t) {
              var o = n.meta,
                r = o.moduleId,
                i = o.invoke,
                a = o.bindings;
              return (
                Le(e, i, { moduleId: r, type: "invoke" }),
                (function (e, t) {
                  return e.reduce(function (e, t) {
                    return e.then(function (e) {
                      return t(e);
                    });
                  }, Promise.resolve(t));
                })(
                  n.getDefineList(e, a[e]).map(function (e) {
                    return e.bind({ invokeType: "invokePipe" });
                  }),
                  t
                )
              );
            }),
            (this.invoke = function (e) {
              for (var t = [], o = 1; o < arguments.length; o++)
                t[o - 1] = arguments[o];
              var r = n.meta,
                i = r.moduleId,
                a = r.invoke,
                s = r.bindings;
              Le(e, a, { moduleId: i, type: "invoke" });
              var u = n.getDefineList(e, s[e]);
              return u
                .map(function (e) {
                  return e.bind({ invokeType: "invoke" }).apply(void 0, t);
                })
                .reduce(function (e, t) {
                  return t && t.__rantaResponseExpand
                    ? e.concat(t.data)
                    : e.concat([t]);
                }, []);
            }),
            (this.getDefineList = function (e, t) {
              return ke(n.subjects, e, t).reduce(function (t, n) {
                var o = n.fns,
                  r = n.__meta;
                return o.length
                  ? t.concat(
                      o.map(function (e) {
                        return e.fn;
                      })
                    )
                  : (L(
                      "当前 process("
                        .concat(e, ") 所消费的 module(")
                        .concat(r.moduleId, ") 的 process(")
                        .concat(r.name, ") 未 define")
                    ),
                    t);
              }, []);
            });
        };
      function Le(e, t, n) {
        var o = n.moduleId,
          r = n.type;
        q(
          t.includes(e),
          "未在 module("
            .concat(o, ") 对应的 extension 中声明 process ")
            .concat(r, ": ")
            .concat(e)
        );
      }
      var Me = function (e) {
          var t = this;
          (this.runtime = e),
            (this.subjects = {}),
            (this.createRuntime = function (e, n) {
              var o,
                r,
                i,
                a = t.runtime,
                s = a.getModConfig(e),
                u = a.getExtConfig(s.extensionId);
              return {
                process: G(
                  new Te(n, {
                    moduleId: e,
                    define:
                      (null === (o = u.process) || void 0 === o
                        ? void 0
                        : o.define) || [],
                    invoke:
                      (null === (r = u.process) || void 0 === r
                        ? void 0
                        : r.invoke) || [],
                    bindings:
                      (null === (i = s.bindings) || void 0 === i
                        ? void 0
                        : i.process) || {},
                  }),
                  ["define", "undef", "invoke", "invokePipe"]
                ),
              };
            }),
            (this.addSubjects = function (e) {
              e.forEach(function (e) {
                var n = t.runtime.getExtConfig(e.extensionId);
                t.addSubject(e, n);
              });
            }),
            (this.updateStatus = function (e) {}),
            (this.addSubject = function (e, n) {
              var o,
                r,
                i,
                a = e.moduleId,
                s = e.stage;
              (
                (null === (o = n.process) || void 0 === o
                  ? void 0
                  : o.define) || []
              ).forEach(function (e) {
                var n;
                (null === (n = t.subjects[e]) || void 0 === n ? void 0 : n[a])
                  ? (t.subjects[e][a].stage = s)
                  : _e(t.subjects, e, a, { fns: [], stage: s });
              });
              var u =
                  (null === (r = n.process) || void 0 === r
                    ? void 0
                    : r.invoke) || [],
                c =
                  (null === (i = e.bindings) || void 0 === i
                    ? void 0
                    : i.process) || {};
              Object.keys(c).length &&
                u.forEach(function (e) {
                  var n;
                  null === (n = c[e]) ||
                    void 0 === n ||
                    n.forEach(function (e) {
                      _e(t.subjects, e.name, e.moduleId, {
                        fns: [],
                        stage: g.post,
                      });
                    });
                });
            }),
            (this.destroy = function () {
              Object.keys(t.subjects).forEach(function (e) {
                t.subjects[e] &&
                  Object.keys(t.subjects[e]).forEach(function (n) {
                    t.subjects[e][n].fns = [];
                  });
              }),
                Object.freeze(t.subjects),
                (t.subjects = {});
            }),
            (this.getSubjects = function () {
              return t.subjects;
            }),
            e.forEachModule(this.addSubject);
        },
        Be = (function () {
          function e(e) {
            (this.modules = {}),
              (this.extensions = {}),
              this.add(e.modConfigs, e.extConfigs),
              (this._isActive = !0),
              (this._type = e.type);
          }
          return (
            (e.prototype.destroy = function () {
              (this.modules = {}), (this.extensions = {});
            }),
            (e.prototype.updateStatus = function (e) {
              this._isActive = e === s.ACTIVE;
            }),
            Object.defineProperty(e.prototype, "isActive", {
              get: function () {
                return this._isActive;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "type", {
              get: function () {
                return this._type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.forEachModule = function (e) {
              var t = this;
              Object.values(this.modules).forEach(function (n) {
                var o = t.getExtConfig(n.extensionId);
                e(n, o);
              });
            }),
            (e.prototype.getModConfig = function (e) {
              var t = this.modules[e];
              return q(t, "module(".concat(e, ") 未找到")), t;
            }),
            (e.prototype.getExtConfig = function (e) {
              var t = this.extensions[e];
              return q(t, "extension(".concat(e, ") 未找到")), t;
            }),
            (e.prototype.add = function (e, t) {
              Object.assign(this.modules, N(e, "moduleId")),
                Object.assign(this.extensions, N(t, "extensionId"));
            }),
            e
          );
        })(),
        Fe = function (e, t) {
          var n = this;
          (this.runtime = e),
            (this.lambdaSubjects = {}),
            (this.widgetSubjects = {}),
            (this.componentSubjects = {}),
            (this.addSubjects = function (e) {
              e.forEach(function (e) {
                var t = n.runtime.getExtConfig(e.extensionId);
                n.addSubject(e, t);
              });
            }),
            (this.addSubject = function (e, t) {
              var o,
                r,
                i = t.extensionId,
                a = e.moduleId,
                s = e.properties,
                u = e.stage;
              (
                (null === (o = t.lambda) || void 0 === o
                  ? void 0
                  : o.provide) || []
              ).forEach(function (e) {
                var t = ge(n.resource, i, e);
                _e(n.lambdaSubjects, e, a, { fn: t, extensionId: i, stage: u });
              }),
                (
                  (null === (r = t.component) || void 0 === r
                    ? void 0
                    : r.provide) || []
                ).forEach(function (e) {
                  var t = me(n.resource, i, e);
                  _e(n.componentSubjects, e, a, {
                    fn: t,
                    extensionId: i,
                    stage: u,
                  });
                }),
                Z(t).forEach(function (e) {
                  var t = ve(n.resource, i, e);
                  _e(n.widgetSubjects, e, a, {
                    fn: t,
                    properties: s,
                    extensionId: i,
                    stage: u,
                  });
                });
            }),
            (this.destroy = function () {
              (n.lambdaSubjects = {}),
                (n.widgetSubjects = {}),
                (n.componentSubjects = {});
            }),
            (this.getCtxLambdas = function (e, t, n) {
              var o,
                r,
                i =
                  (null === (o = t.lambda) || void 0 === o
                    ? void 0
                    : o.consume) || [],
                a =
                  (null === (r = e.bindings) || void 0 === r
                    ? void 0
                    : r.lambda) || {},
                s = {};
              return (
                i.forEach(function (e) {
                  var t = a[e];
                  if (null !== t) {
                    if (t) {
                      var o = je(n, t.name, t).fn;
                      return (
                        !o && xe(t, { key: t.name, type: "lambda" }),
                        void (s[e] = o)
                      );
                    }
                    var r = je(n, e) || {},
                      i = r.fn,
                      u = r.__meta;
                    i ? (s[e] = i) : u && xe(u, { key: e, type: "lambda" });
                  }
                }),
                s
              );
            }),
            (this.getCtxComponents = function (e, t, o) {
              var r,
                i,
                a,
                s =
                  (null === (r = t.component) || void 0 === r
                    ? void 0
                    : r.provide) || [],
                u =
                  (null === (i = t.component) || void 0 === i
                    ? void 0
                    : i.consume) || [],
                c =
                  (null === (a = e.bindings) || void 0 === a
                    ? void 0
                    : a.component) || {};
              s.forEach(function (e) {
                !u.includes(e) && u.push(e);
              });
              var d = {};
              return (
                u.forEach(function (e) {
                  var t = c[e];
                  if (null !== t)
                    if (t) {
                      if ((Array.isArray(t) || (t = [t]), !n.attachComponent))
                        return void (d[e] = !!t.length);
                      var r = t.map(function (e) {
                        var t = je(o, e.name, e);
                        return (
                          !(null == t ? void 0 : t.fn) &&
                            xe(e, { key: e.name, type: "component" }),
                          t
                        );
                      });
                      d[e] = n.renderNestedComponent(
                        r.map(function (e) {
                          return e.fn;
                        })
                      );
                    } else {
                      var i = ke(o, e).filter(function (t) {
                        var n = t.fn,
                          o = t.__meta;
                        return (
                          n || xe(o, { key: e, type: "component", noThrow: !0 })
                        );
                      });
                      n.attachComponent
                        ? i.length &&
                          (d[e] = n.renderNestedComponent(
                            i.map(function (e) {
                              return e.fn;
                            })
                          ))
                        : (d[e] = !!i.length);
                    }
                }),
                d
              );
            }),
            (this.getCtxWidgets = function (e, t, o, r) {
              var i,
                a,
                s,
                u = e.moduleId,
                c =
                  (null === (i = t.widget) || void 0 === i
                    ? void 0
                    : i.provide) || [],
                d =
                  (null === (a = t.widget) || void 0 === a
                    ? void 0
                    : a.consume) || [],
                p =
                  (null === (s = e.bindings) || void 0 === s
                    ? void 0
                    : s.widget) || {};
              c.forEach(function (e) {
                !d.includes(e) && d.push(e);
              });
              var l = {};
              return (
                d.forEach(function (e) {
                  var t = p[e];
                  if (null !== t)
                    if (t) {
                      if ((Array.isArray(t) || (t = [t]), !n.attachComponent))
                        return void (l[e] = !!t.length);
                      var i = t.map(function (e) {
                        var t = je(o, e.name, e);
                        return (
                          !(null == t ? void 0 : t.fn) &&
                            xe(e, { key: e.name, type: "widget" }),
                          t
                        );
                      });
                      l[e] = n.renderNestedWidget(
                        i.map(function (e) {
                          var t = e.fn,
                            o = e.properties,
                            i = e.extensionId,
                            a = e.__meta;
                          return [
                            t,
                            {
                              modConfig: { properties: o },
                              getCtx: function () {
                                return r(a.moduleId);
                              },
                              runCodeInVm: function (e) {
                                return ye(n.resource, i, e);
                              },
                            },
                          ];
                        }),
                        { moduleId: u, name: e }
                      );
                    } else {
                      var a = ke(o, e).filter(function (t) {
                        var n = t.fn,
                          o = t.__meta;
                        return (
                          n || xe(o, { key: e, type: "widget", noThrow: !0 })
                        );
                      });
                      n.attachComponent
                        ? a.length &&
                          (l[e] = n.renderNestedWidget(
                            a.map(function (e) {
                              var t = e.fn,
                                o = e.extensionId,
                                i = e.properties,
                                a = e.__meta;
                              return [
                                t,
                                {
                                  modConfig: { properties: i },
                                  getCtx: function () {
                                    return r(a.moduleId);
                                  },
                                  runCodeInVm: function (e) {
                                    return ye(n.resource, o, e);
                                  },
                                },
                              ];
                            }),
                            { moduleId: u, name: e }
                          ))
                        : (l[e] = !!a.length);
                    }
                }),
                l
              );
            }),
            (this.getSubjects = function () {
              return {
                lambda: n.lambdaSubjects,
                widget: n.widgetSubjects,
                component: n.componentSubjects,
              };
            }),
            (this.resource = t.resource),
            (this.attachComponent = t.attachComponent),
            this.attachComponent &&
              q(
                t.renderNestedWidget && t.renderNestedComponent,
                "需要渲染 UI 时，renderNestedWidget 和 renderNestedComponent 选项不能为空"
              ),
            (this.renderNestedWidget = t.renderNestedWidget),
            (this.renderNestedComponent = t.renderNestedComponent),
            e.forEachModule(this.addSubject);
        },
        He = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.updateStatus = function (t) {
                e.prototype.updateStatus.call(n, t),
                  n.dataRuntime.updateStatus(t),
                  n.eventRuntime.updateStatus(t),
                  n.processRuntime.updateStatus(t);
              }),
              (n.createModuleCtx = function (e, t, o) {
                var r = (o || {}).shouldReplay,
                  i = void 0 !== r && r,
                  a = n.getModConfig(e),
                  s = n.getExtConfig(a.extensionId),
                  u = n.eventRuntime.createRuntime(e, t.event, i),
                  c = n.dataRuntime.createRuntime(e, t.data),
                  d = n.processRuntime.createRuntime(e, t.process),
                  p = {
                    moduleId: e,
                    data: c.data,
                    watch: c.watch,
                    event: u.event,
                    process: d.process,
                    lambdas: n.staticRuntime.getCtxLambdas(a, s, t.lambda),
                    components: n.staticRuntime.getCtxComponents(
                      a,
                      s,
                      t.component
                    ),
                    widgets: n.staticRuntime.getCtxWidgets(
                      a,
                      s,
                      t.widget,
                      t.getCtx
                    ),
                    isBackground: function () {
                      return !n.isActive;
                    },
                    inited: function () {},
                  };
                return (n.ctxPool[e] = p), p;
              }),
              (n.disableReplay = function (e) {
                n.eventRuntime.disableReplay(e);
              }),
              (n.clearAllDeferBuffer = function () {
                n.eventRuntime.clearAllDeferBuffer();
              }),
              (n.add = function (t, o) {
                e.prototype.add.call(n, t, o),
                  [
                    n.dataRuntime,
                    n.eventRuntime,
                    n.processRuntime,
                    n.staticRuntime,
                  ].forEach(function (e) {
                    return e.addSubjects(t);
                  });
              }),
              (n.getCtx = function (e) {
                return { ctx: n.ctxPool[e], store: n.getModStore(e) };
              }),
              (n.destroy = function () {
                e.prototype.destroy.call(n),
                  n.dataRuntime.destroy(),
                  n.processRuntime.destroy(),
                  n.eventRuntime.destroy(),
                  n.staticRuntime.destroy(),
                  Object.values(n.ctxPool).forEach(function (e) {
                    (e.inited = function () {}),
                      (e.watch = function () {
                        return function () {};
                      }),
                      (e.isBackground = function () {
                        return !0;
                      });
                  }),
                  (n.processRuntime = null),
                  (n.eventRuntime = null),
                  (n.dataRuntime = null),
                  (n.staticRuntime = null),
                  (n.ctxPool = null),
                  (n.getModStore = null);
              }),
              (n.getSubjects = function () {
                return Object(d.__assign)(
                  Object(d.__assign)({}, n.staticRuntime.getSubjects()),
                  {
                    data: n.dataRuntime.getSubjects(),
                    event: n.eventRuntime.getSubjects(),
                    process: n.processRuntime.getSubjects(),
                    getCtx: function (e) {
                      return n.getCtx(e);
                    },
                  }
                );
              }),
              (n.getModStore = t.getModStore),
              (n.ctxPool = {}),
              (n.dataRuntime = new Ee(n)),
              (n.eventRuntime = new De(n)),
              (n.processRuntime = new Me(n)),
              (n.staticRuntime = new Fe(
                n,
                G(t, [
                  "resource",
                  "attachComponent",
                  "renderNestedComponent",
                  "renderNestedWidget",
                ])
              )),
              n
            );
          }
          return Object(d.__extends)(t, e), t;
        })(Be);
      var ze = {
          init: function (e) {
            return e;
          },
          getPage: function (e) {
            var t = e.config,
              n = e.page,
              o = e.externalModuleIds;
            if (n) {
              var r = (function (e, t) {
                  var n = t.find(function (t) {
                    return -1 !== t.routes.indexOf(e);
                  });
                  return q(n, R("page", e)), n;
                })(n, t.app.pages),
                i = W(r, o);
              return Object(d.__assign)(
                { page: n, currentPageConfig: r },
                K(i, t)
              );
            }
          },
          _getModuleContext: function (e) {
            var t = e.moduleId,
              n = e.currentModules,
              o = e.onlyCtx,
              r = void 0 === o || o,
              i = n[t];
            q(
              i,
              "未找到 module(".concat(t, ")，请检查该 module 是否定义并初始化")
            );
            var a = i.instance,
              s = a[S],
              u = a.store;
            return r ? s : { ctx: s, store: u };
          },
          _initModuleRuntime: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return new (He.bind.apply(
              He,
              Object(d.__spreadArray)([void 0], e, !1)
            ))();
          },
          _createModuleCtx: function (e) {
            var t = e.moduleRuntime,
              n = e.moduleId,
              o = e.subjects,
              r = e.shouldReplay,
              i = void 0 !== r && r;
            return t.createModuleCtx(n, o, { shouldReplay: i });
          },
          _loadResource: function (e) {
            var t = e.extensions,
              n = e.resourceRegistry;
            t.forEach(function (e) {
              return n.registry(e);
            });
          },
          _runApi: function (e) {
            var t,
              n = e.currentModules,
              o = e.eventName,
              r = e.args;
            return (
              Object.keys(n).forEach(function (e) {
                var i = n[e],
                  a = i.instance,
                  s = i.lifecycle;
                (void 0 === s ? [] : s).includes(o) &&
                  H(function () {
                    var e,
                      n =
                        null === (e = a[o]) || void 0 === e
                          ? void 0
                          : e.call.apply(
                              e,
                              Object(d.__spreadArray)([a], r, !1)
                            );
                    x.includes(o) &&
                      (n &&
                        t &&
                        L(
                          "".concat(o, " 存在重复调用，仅保留最后一次执行结果")
                        ),
                      (t = n || t));
                  }, "".concat(e, " 的 ").concat(o, " 方法执行失败"));
              }),
              t
            );
          },
          _initModule: function (e) {
            var t = e.modConfig,
              n = e.ctx,
              o = e.resource,
              r = t.extensionId,
              i = t.moduleId,
              a = t.properties,
              s = be(o, r);
            if (s) {
              var u,
                c = s.lifecycle,
                p = s.sandbox;
              try {
                var l = new (he(o, r))(
                  Object(d.__assign)(Object(d.__assign)({}, a), { ctx: n })
                );
                return (
                  Object.defineProperty(n, I, { value: l }),
                  Object.defineProperty(l, S, { value: n }),
                  {
                    instance: l,
                    modConfig: t,
                    extConfig: s,
                    hasWidget: ((u = s), Z(u).length > 0),
                    lifecycle: c,
                  }
                );
              } catch (e) {
                if ((null == p ? void 0 : p.level) !== m.Unsafe)
                  return void T(
                    "三方 module("
                      .concat(i, ") 初始化异常，将被忽略。异常原因: ")
                      .concat(e.message)
                  );
                throw (
                  ((e.message = "一方 module("
                    .concat(i, ") 初始化异常，页面无法正常加载。异常原因: ")
                    .concat(e.message)),
                  w(e))
                );
              }
            }
          },
        },
        Ue = (function () {
          function e(e) {
            var t = this;
            (this.modulePool = {}),
              (this.freezeContext = []),
              (this.type = e.type),
              (this.hooks = e.hooks),
              (this.resourceRegistry = e.resourceRegistry),
              this.hooks.pipe([se.init, ze.init], function (e) {
                return t.loadInitToThis(e);
              })(e);
          }
          return (
            (e.prototype.loadInitToThis = function (e) {
              var t = e.config,
                n = e.builtinBundle;
              (this.config = t),
                n && this.resourceRegistry.loadBuiltinBundle(n);
            }),
            (e.prototype.createPageContext = function (e) {
              var t,
                n = this;
              return this.hooks.pipe(
                [se.getPage, ze.getPage],
                function (n) {
                  if (!n) throw new te("无法匹配页面, page: ".concat(e.page));
                  return (t = n), n;
                },
                [
                  se.createPageContext,
                  function (t) {
                    return n.createContext({
                      extensions: t.extensions,
                      modules: t.modules,
                      attachComponent: e.attachComponent,
                      renderNestedComponent: e.renderNestedComponent,
                      renderNestedWidget: e.renderNestedWidget,
                      shouldReplay: e.shouldReplay,
                    });
                  },
                ],
                function () {
                  return t;
                }
              )({ config: this.config, page: e.page });
            }),
            (e.prototype.createContext = function (e) {
              var t = this,
                n = e.extensions,
                o = e.modules,
                r = e.attachComponent,
                i = void 0 !== r && r,
                a = e.renderNestedWidget,
                s = e.renderNestedComponent,
                u = e.shouldReplay,
                c = void 0 !== u && u,
                d = this.resourceRegistry.getResource();
              return (
                (this.moduleRuntime = ze._initModuleRuntime({
                  type: this.type,
                  modConfigs: [],
                  extConfigs: [],
                  resource: d,
                  attachComponent: i,
                  renderNestedComponent: s,
                  renderNestedWidget: a,
                  getModStore: function (e) {
                    var n;
                    return null === (n = t.modulePool[e]) || void 0 === n
                      ? void 0
                      : n.instance.store;
                  },
                })),
                this.addContext({ modules: o, extensions: n, shouldReplay: c })
              );
            }),
            (e.prototype.addContext = function (e) {
              var t = this,
                n = e.extensions,
                o = e.modules,
                r = e.shouldReplay;
              return this.hooks.pipe(
                [se.loadResource, ze._loadResource],
                function () {
                  var e = t.resourceRegistry.getResource();
                  t.moduleRuntime.add(o, n),
                    (t.modulePool = o.reduce(function (n, o) {
                      var i = t.hooks.pipe(
                        [se.createModuleCtx, ze._createModuleCtx],
                        [
                          se.initModule,
                          function (t) {
                            return ze._initModule({
                              modConfig: o,
                              ctx: t,
                              resource: e,
                            });
                          },
                        ]
                      )({
                        moduleId: o.moduleId,
                        moduleRuntime: t.moduleRuntime,
                        subjects: t.moduleRuntime.getSubjects(),
                        shouldReplay: r,
                      });
                      return i && (n[o.moduleId] = i), n;
                    }, t.modulePool));
                }
              )({ extensions: n, resourceRegistry: this.resourceRegistry });
            }),
            (e.prototype.disableReplay = function (e) {
              var t;
              null === (t = this.moduleRuntime) ||
                void 0 === t ||
                t.disableReplay(e);
            }),
            (e.prototype.clearAllDeferBuffer = function () {
              var e;
              null === (e = this.moduleRuntime) ||
                void 0 === e ||
                e.clearAllDeferBuffer();
            }),
            (e.prototype.destroyContext = function () {
              var e = this;
              this.hooks.pipe([
                se.destroyContext,
                function () {
                  e._destroyContext(e.modulePool, e.moduleRuntime),
                    (e.moduleRuntime = void 0),
                    (e.modulePool = {});
                },
              ])({});
            }),
            (e.prototype.destroyFirstContext = function () {
              var e = this.freezeContext.shift();
              e && this._destroyContext(e.modulePool, e.moduleRuntime);
            }),
            (e.prototype.deactivateContext = function () {
              var e;
              null === (e = this.moduleRuntime) ||
                void 0 === e ||
                e.updateStatus(s.PASSIVE),
                this.freezeContext.push({
                  moduleRuntime: this.moduleRuntime,
                  modulePool: this.modulePool,
                }),
                (this.moduleRuntime = void 0),
                (this.modulePool = {});
            }),
            (e.prototype.activateLastContext = function () {
              var e,
                t = this.freezeContext.pop();
              if (t) {
                var n = t.moduleRuntime,
                  o = t.modulePool;
                (this.moduleRuntime = n),
                  (this.modulePool = o),
                  null === (e = this.moduleRuntime) ||
                    void 0 === e ||
                    e.updateStatus(s.ACTIVE);
              }
            }),
            (e.prototype.runApi = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              return this.hooks.pipe([se.runApi, ze._runApi])({
                currentModules: this.modulePool,
                eventName: e,
                args: t,
              });
            }),
            (e.prototype.getModules = function () {
              return this.modulePool;
            }),
            (e.prototype.getSubjects = function () {
              var e;
              return null === (e = this.moduleRuntime) || void 0 === e
                ? void 0
                : e.getSubjects();
            }),
            (e.prototype.updateStatus = function (e) {
              var t;
              null === (t = this.moduleRuntime) ||
                void 0 === t ||
                t.updateStatus(e);
            }),
            (e.prototype.getModuleContext = function (e, t) {
              void 0 === t && (t = {});
              var n = t.onlyCtx,
                o = void 0 === n || n;
              return this.hooks.pipe([
                se.getModuleContext,
                ze._getModuleContext,
              ])({ moduleId: e, currentModules: this.modulePool, onlyCtx: o });
            }),
            (e.prototype._destroyContext = function (e, t) {
              Object.values(e).forEach(function (e) {
                var t, n, o;
                null === (n = (t = e.instance).beforeModuleDestroy) ||
                  void 0 === n ||
                  n.call(t),
                  null === (o = e.instance[P]) || void 0 === o || o.destroy();
                try {
                  var r = e.instance._ranta_unlisteners;
                  null == r ||
                    r.forEach(function (e) {
                      return null == e ? void 0 : e();
                    });
                } catch (e) {}
              }),
                null == t || t.destroy();
            }),
            e
          );
        })();
      function Ne(e) {
        var t = e.allModules,
          n = e.allExtensions,
          o = e.moIds,
          r = t.filter(function (e) {
            return o.includes(e.moduleId);
          }),
          i = z(
            r.map(function (e) {
              return e.extensionId;
            })
          ),
          a = n.filter(function (e) {
            return i.includes(e.extensionId);
          }),
          s = (function (e) {
            return e
              .filter(function (e) {
                return e.asyncInit;
              })
              .map(function (e) {
                return e.moduleId;
              });
          })(r),
          u = o.filter(function (e) {
            return !s.includes(e);
          });
        return { mos: r, exts: a, extIds: i, asyncMoIds: s, syncMoIds: u };
      }
      function qe(e, t) {
        var n,
          o = e.length,
          r = !1,
          i = new Set();
        return {
          setDefault: function (t, a) {
            (n = t),
              0 === o
                ? ((r = !0), n())
                : (M("defer - 等待以下 module 加载完成", e),
                  a(function () {
                    if (!r) {
                      var t = e.filter(function (e) {
                        return !i.has(e);
                      });
                      T(
                        "defer - module(".concat(
                          t.join(","),
                          ") 初始化超时, 自动加载下一阶段..."
                        )
                      ),
                        (r = !0),
                        n();
                    }
                  }, 1e4));
          },
          setInited: function (a) {
            e.includes(a)
              ? (M("module(".concat(a, ") 调用 inited 方法")),
                i.add(a),
                null == t || t(a),
                i.size !== o || r || ((r = !0), null == n || n()))
              : L("module(".concat(a, ") 不支持调用 inited 方法"));
          },
        };
      }
      function Ge(e, t) {
        void 0 === t && (t = []);
        var n = Object(d.__spreadArray)([], t, !0),
          o = e.addHook(se.runApi, $.BEFORE, function (e) {
            return n.push(G(e, ["eventName", "args"])), e;
          });
        return {
          apiList: n,
          removeApiHook: o,
          replayApi: function (e) {
            return n.forEach(function (t) {
              ze._runApi(
                Object(d.__assign)(Object(d.__assign)({}, t), {
                  currentModules: e,
                })
              );
            });
          },
        };
      }
      function We(e, t) {
        return e.addHook(se.createModuleCtx, $.AFTER, function (e) {
          return (
            (e.inited = function () {
              return t(e.moduleId);
            }),
            e
          );
        });
      }
      function Ke() {
        var e = [];
        return {
          warpTimeout: function (t, n) {
            var o = setTimeout(function () {
              !(function (t) {
                var n = e.findIndex(function (e) {
                  return e === t;
                });
                n > 0 && e.splice(n, 1);
              })(o),
                t();
            }, n);
            !(function (t) {
              e.push(t);
            })(o);
          },
          clearAllTimer: function () {
            e.forEach(clearTimeout), (e = []);
          },
        };
      }
      var Qe = function (e, t) {
          var n = t.getModules,
            o = t.addContext,
            r = t.disableReplay,
            i = t.handleAppSideEffect,
            a = t.renderStage,
            s = t.replayApiList,
            u = t.renderPageMos;
          e.addHookOnce(se.getPage, $.AFTER, function (t) {
            if (t) {
              var c = (function (e, t) {
                for (
                  var n = new Map(),
                    o = e.map(function (e) {
                      var t = e.stage ? e.stage : e.defer ? g.post : g.normal;
                      return n.set(e.moduleId, t), [e.moduleId, t];
                    }),
                    r = Object(d.__spreadArray)([], t, !0),
                    i = [];
                  r.length > 0;

                ) {
                  var a = r.pop();
                  "container" === a.contentType
                    ? (r = Object(d.__spreadArray)(
                        Object(d.__spreadArray)([], r, !0),
                        a.contents,
                        !0
                      ))
                    : (i = Object(d.__spreadArray)(
                        Object(d.__spreadArray)([], i, !0),
                        a.contents.map(function (e) {
                          return "string" == typeof e
                            ? ["".concat(e, ".Main"), n.get(e)]
                            : [
                                "".concat(e.moduleId, ".").concat(e.name),
                                e.stage || n.get(e.moduleId),
                              ];
                        }),
                        !0
                      ));
                }
                var s = function (e) {
                    return function (t) {
                      return t[1] === e;
                    };
                  },
                  u = function (e) {
                    return e[0];
                  };
                return v
                  .map(function (e) {
                    return {
                      name: e,
                      moIds: o.filter(s(e)).map(u),
                      widgets: i.filter(s(e)).map(u),
                    };
                  })
                  .filter(function (e) {
                    var t = e.moIds,
                      n = e.widgets;
                    return t.length > 0 || n.length > 0;
                  });
              })(t.modules, t.currentPageConfig.containers);
              if (c.length <= 1) return t;
              M(
                "stage - 当前页面将会分为以下阶段加载:",
                c
                  .map(function (e) {
                    return e.name;
                  })
                  .join(",")
              );
              var p = c[0],
                l = p.name,
                f = p.moIds;
              M("--- run ".concat(l, " stage ---")), i();
              var h = Ge(e, s),
                m = h.apiList,
                b = h.removeApiHook,
                y = Ne({
                  allModules: t.modules,
                  allExtensions: t.extensions,
                  moIds: f,
                }),
                x = y.mos,
                _ = y.extIds,
                k = y.exts,
                j = qe(y.asyncMoIds),
                O = j.setDefault,
                S = j.setInited,
                P = Ke(),
                I = P.warpTimeout,
                C = P.clearAllTimer;
              e.addHookOnce(se.destroyContext, $.AFTER, function (e) {
                return C(), e;
              });
              var A = We(e, S),
                E = function (e, t) {
                  t(e), u(c[e].moIds);
                },
                w = function (i) {
                  var s = c[i],
                    u = s.name,
                    p = s.moIds,
                    l = Ne({
                      allModules: t.modules,
                      allExtensions: t.extensions,
                      moIds: p,
                    }),
                    f = l.mos,
                    h = l.exts,
                    g = l.asyncMoIds,
                    v = l.syncMoIds,
                    y = qe(g, function (e) {
                      return r([e]);
                    }),
                    x = y.setDefault,
                    _ = y.setInited,
                    k = We(e, _);
                  !(function (e) {
                    var t = e.addContext,
                      n = e.getModules,
                      o = e.moIds,
                      r = e.apiList,
                      i = e.disableDefaultReplay,
                      a = e.mos,
                      s = e.exts,
                      u = e.hooks,
                      c = e.stageName,
                      p = e.onEnd,
                      l = e.renderStage,
                      f = e.warpTimeout;
                    M("--- run ".concat(c, " stage ---"), o),
                      u.pipe(
                        function () {
                          return t({
                            modules: a,
                            extensions: s,
                            shouldReplay: !0,
                          });
                        },
                        function () {
                          var e = n(),
                            t = o.reduce(function (t, n) {
                              return (t[n] = e[n]), t;
                            }, {});
                          r.forEach(function (e) {
                            ze._runApi(
                              Object(d.__assign)(Object(d.__assign)({}, e), {
                                currentModules: t,
                              })
                            );
                          }),
                            l(c, t),
                            f(function () {
                              i(), p();
                            }, 0);
                        }
                      )({});
                  })({
                    stageName: u,
                    addContext: o,
                    getModules: n,
                    moIds: p,
                    apiList: m,
                    disableDefaultReplay: function () {
                      return r(v);
                    },
                    mos: f,
                    exts: h,
                    hooks: e,
                    renderStage: a,
                    warpTimeout: I,
                    onEnd: function () {
                      k(),
                        i === c.length - 1
                          ? (M("--- run ".concat(u, " stage end ---")), b())
                          : x(function () {
                              M("--- run ".concat(u, " stage end ---")),
                                I(function () {
                                  E(i + 1, w);
                                }, 0);
                            }, I);
                    },
                  });
                };
              return (
                e.addHookOnce(se.createPageContext, $.AFTER, function (e) {
                  return (
                    A(),
                    O(function () {
                      M("--- run ".concat(l, " stage end ---")),
                        I(function () {
                          return E(1, w);
                        }, 0);
                    }, I),
                    e
                  );
                }),
                Object(d.__assign)(Object(d.__assign)({}, t), {
                  moduleIds: f,
                  modules: x,
                  extensionIds: _,
                  extensions: k,
                })
              );
            }
          });
        },
        Ve = function (e) {
          e.addHook(se.loadResource, $.BEFORE, function (e) {
            return Object(d.__assign)(Object(d.__assign)({}, e), {
              extensions: e.extensions.map(function (e) {
                return Object(d.__assign)(Object(d.__assign)({}, e), {
                  pathInBundle: e.extensionId,
                });
              }),
            });
          });
        },
        $e = function (e, t) {
          var n,
            o = {
              route: t.page,
              updateRoute: function (e) {
                o.route = e;
              },
            };
          e.addHook(
            se.createModuleCtx,
            $.AFTER,
            ((n = Object.freeze({
              getQueryAsync: t.getQueryAsync,
              getQuery: t.getQuery,
              route: t.page,
              router: o,
            })),
            function (e) {
              return (e.env = n), e;
            })
          );
        },
        Ye = (function () {
          function e(e) {
            var t = e.builtinBundle,
              n = e.config,
              o = e.renderAppMos,
              r = e.onReady;
            (this.resourceRegistry = new ue()),
              (this.pluginRuntime = new ae({
                pluginsConfig: n.plugins || {},
                getPluginLibs: e.getPluginLibs,
                supportApiNames: j,
              }));
            var i = this.initApp({
                getQuery: e.getQuery,
                getQueryAsync: e.getQueryAsync,
                config: n,
                builtinBundle: t,
              }),
              a = i.runtime,
              s = i.appHooks;
            (this.appRuntime = a), this.createAppContext(a, s, o, r);
          }
          return (
            (e.prototype.createPageContext = function (e) {
              var t,
                n = new ie();
              var o = Ge(n),
                r = o.apiList,
                i = o.replayApi,
                s = o.removeApiHook;
              t = new Ue(
                Object(d.__assign)(Object(d.__assign)({}, e), {
                  type: a.PAGE,
                  hooks: n,
                  resourceRegistry: this.resourceRegistry,
                })
              );
              var u = !1;
              return (
                n.addHookOnce(se.destroyContext, $.BEFORE, function (e) {
                  return (u = !0), e;
                }),
                i(this.appRuntime.getModules()),
                u ||
                  this.createPage({
                    options: e,
                    runtime: t,
                    pageHooks: n,
                    replayApi: i,
                    apiList: r,
                    removeApiHook: s,
                  }),
                t
              );
            }),
            (e.prototype.createPage = function (e) {
              var t = e.runtime,
                n = e.pageHooks,
                o = e.options,
                r = e.apiList,
                i = e.replayApi,
                s = e.removeApiHook,
                u = this.appRuntime,
                c = this.pluginRuntime,
                d = u.getModules(),
                p = u.getSubjects();
              return (
                (function (e, t) {
                  var n = t.appModuleIds;
                  e.addHook(se.getPage, $.BEFORE, function (e) {
                    return (e.externalModuleIds = n), e;
                  });
                })(n, { appModuleIds: Object.keys(d) }),
                fe(n, { appModules: d, appSubjects: p }),
                $e(n, o),
                Ve(n),
                pe(n, Q(a.PAGE)),
                le(n, c.getCtxPool(), V(t.config.modules, t.config.extensions)),
                Qe(n, {
                  handleAppSideEffect: function () {},
                  getModules: t.getModules.bind(t),
                  addContext: t.addContext.bind(t),
                  disableReplay: t.disableReplay.bind(t),
                  renderStage: o.renderStage,
                  replayApiList: r,
                  renderPageMos: o.renderPageMos,
                }),
                n.addHookOnce(se.createPageContext, $.AFTER, function (e) {
                  var n = t.getModules();
                  i(n), s();
                  var r = Object.keys(n);
                  return o.renderPageMos(r), t.disableReplay(r), e;
                }),
                t.createPageContext({
                  page: o.page,
                  attachComponent: !1,
                  shouldReplay: !0,
                })
              );
            }),
            (e.prototype.initApp = function (e) {
              var t = new ie();
              return (
                pe(t, Q(a.APP)),
                $e(t, e),
                Ve(t),
                {
                  runtime: new Ue(
                    Object(d.__assign)(Object(d.__assign)({}, e), {
                      resourceRegistry: this.resourceRegistry,
                      hooks: t,
                      type: a.APP,
                    })
                  ),
                  appHooks: t,
                }
              );
            }),
            (e.prototype.createAppContext = function (e, t, n, o) {
              var r = this.pluginRuntime,
                i = (function (e) {
                  var t = e.modules,
                    n = void 0 === t ? [] : t,
                    o = z(
                      n.map(function (e) {
                        return e.moduleId;
                      })
                    ),
                    r = K(o, e),
                    i = r.extensions;
                  return {
                    moduleIds: o,
                    extensionIds: r.extensionIds,
                    extensions: i,
                    modules: n,
                  };
                })(e.config),
                a = i.extensions,
                s = i.modules;
              return (
                le(t, r.getCtxPool(), V(s, a)),
                e.createContext({ modules: s, extensions: a }),
                n(
                  s.map(function (e) {
                    return e.moduleId;
                  })
                ),
                null == o || o(),
                Promise.resolve()
              );
            }),
            (e.prototype.getPluginCtx = function () {
              return this.pluginRuntime.getCtxPool();
            }),
            (e.prototype.runAppApi = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.appRuntime).runApi.apply(e, t);
            }),
            (e.prototype.callPluginCtx = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              (e = this.pluginRuntime).callCtx.apply(e, t);
            }),
            (e.prototype.runPluginsApi = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              (e = this.pluginRuntime).runApi.apply(e, t);
            }),
            e
          );
        })();
      (function () {
        function e(e) {
          var t = this,
            n = e.config,
            o = n.modules,
            r = n.extensions,
            i = n.containers,
            s = e.renderNestedComponent,
            u = e.renderNestedWidget,
            c = e.builtinBundle;
          this.containers = i;
          var d = new ue();
          d.loadBuiltinBundle(c),
            ze._loadResource({ extensions: r, resourceRegistry: d }),
            (this.resourceRegistry = d);
          var p = d.getResource();
          (this.moduleRuntime = ze._initModuleRuntime({
            type: a.PAGE,
            modConfigs: o,
            extConfigs: r,
            attachComponent: !0,
            renderNestedComponent: s,
            renderNestedWidget: u,
            resource: p,
            getModStore: function () {},
          })),
            (this.currentModules = o.reduce(function (e, n) {
              var o = ze._createModuleCtx({
                  moduleId: n.moduleId,
                  moduleRuntime: t.moduleRuntime,
                  subjects: t.moduleRuntime.getSubjects(),
                  shouldReplay: !1,
                }),
                r = ze._initModule({ modConfig: n, ctx: o, resource: p });
              return r && (e[n.moduleId] = r), e;
            }, {}));
        }
        e.prototype.getCtx = function (e) {
          return this.currentModules[e].instance[S];
        };
      })(),
        (function () {
          function e(e) {
            var t = this,
              n = e.config,
              o = n.modules,
              r = n.extensions,
              i = n.containers,
              s = e.builtinBundle;
            this.containers = i;
            var u = new ue();
            u.loadBuiltinBundle(s),
              ze._loadResource({ extensions: r, resourceRegistry: u }),
              (this.resourceRegistry = u);
            var c = u.getResource();
            (this.moduleRuntime = ze._initModuleRuntime({
              type: a.PAGE,
              modConfigs: o,
              extConfigs: r,
              attachComponent: !1,
              resource: c,
              getModStore: function () {},
            })),
              (this.currentModules = o.reduce(function (e, n) {
                var o = ze._createModuleCtx({
                    moduleId: n.moduleId,
                    moduleRuntime: t.moduleRuntime,
                    subjects: t.moduleRuntime.getSubjects(),
                    shouldReplay: !1,
                  }),
                  r = ze._initModule({ modConfig: n, ctx: o, resource: c });
                return r && (e[n.moduleId] = r), e;
              }, {}));
          }
          e.prototype.getCtx = function (e) {
            return this.currentModules[e].instance[S];
          };
        })(),
        (function () {
          function e() {
            (this.dataPool = {}),
              (this.eventPool = {}),
              (this.processPool = {});
          }
          (e.prototype.setPool = function (e, t, n) {
            null == n ||
              n.forEach(function (n) {
                var o;
                (e[n] = null !== (o = e[n]) && void 0 !== o ? o : []),
                  e[n].push({ moduleId: t, name: n });
              });
          }),
            (e.prototype.getPool = function (e, t, n) {
              return t
                ? t.reduce(function (t, o) {
                    var r,
                      i = null !== (r = e[o]) && void 0 !== r ? r : [];
                    return (t[o] = n ? i[0] : i), t;
                  }, {})
                : {};
            }),
            (e.prototype.registry = function (e, t) {
              var n,
                o,
                r,
                i,
                a = e.moduleId;
              this.setPool(
                this.dataPool,
                a,
                Object.keys(
                  null !==
                    (o =
                      null === (n = t.data) || void 0 === n
                        ? void 0
                        : n.provide) && void 0 !== o
                    ? o
                    : {}
                )
              ),
                this.setPool(
                  this.eventPool,
                  a,
                  null === (r = t.event) || void 0 === r ? void 0 : r.emit
                ),
                this.setPool(
                  this.processPool,
                  a,
                  null === (i = t.process) || void 0 === i ? void 0 : i.define
                );
            }),
            (e.prototype.getBindings = function (e) {
              var t, n, o, r;
              return {
                data: this.getPool(
                  this.dataPool,
                  Object.keys(
                    null !==
                      (n =
                        null === (t = e.data) || void 0 === t
                          ? void 0
                          : t.consume) && void 0 !== n
                      ? n
                      : {}
                  ),
                  !0
                ),
                event: this.getPool(
                  this.eventPool,
                  null === (o = e.event) || void 0 === o ? void 0 : o.listen
                ),
                process: this.getPool(
                  this.processPool,
                  null === (r = e.process) || void 0 === r ? void 0 : r.invoke
                ),
              };
            });
        })();
      function Je(e) {
        var t,
          n,
          o = e.pageRuntimeName,
          r = e.tee,
          i = e.rantaOptions,
          a = e.frameworkAppRuntime,
          u = e.enableMock,
          p = e.usedLifecycles;
        return {
          beforeCreate: function () {
            var e,
              t,
              n,
              s = this;
            try {
              (this.pendingList = []),
                (this.getQueryAsync = function (e) {
                  s.pendingList.push(e);
                }),
                (this.getQuery = function () {
                  0;
                }),
                r.setGlobal("getQueryAsync", function (e) {
                  var t = r.getGlobal("queryPendingList") || [];
                  t.push(e), r.setGlobal("queryPendingList", t);
                });
              var p = i.config.modules
                .map(function (e) {
                  return e.moduleId;
                })
                .filter(function (e) {
                  return e.includes("yun-adapter");
                });
              M("page(".concat(i.page, ") 对应的 biz config 为:\n"), i.config);
              var l = a.createPageContext(
                Object(d.__assign)(Object(d.__assign)({}, i), {
                  renderStage: function (e) {
                    var t;
                    return null === (t = s.renderStage) || void 0 === t
                      ? void 0
                      : t.call(s, e);
                  },
                  getQueryAsync: function () {
                    return new Promise(function (e) {
                      return s.getQueryAsync(e);
                    });
                  },
                  getQuery: function () {
                    return s.getQuery();
                  },
                  renderPageMos: function (e) {
                    return (function (e) {
                      var t;
                      (e = e.filter(function (e) {
                        return !p.includes(e);
                      })),
                        (s.initIds = s.initIds || []),
                        (t = s.initIds).push.apply(t, e);
                      var n = {};
                      if (
                        ((r.getGlobal("renderAppMos") || []).forEach(function (
                          e
                        ) {
                          n[e] = !0;
                        }),
                        s.initIds.forEach(function (e) {
                          n[e] = !0;
                        }),
                        !s.RM)
                      )
                        return Promise.resolve().then(function () {
                          s.RM = Object(d.__assign)(
                            Object(d.__assign)({}, n),
                            s.RM
                          );
                        });
                      s.RM = Object(d.__assign)(
                        Object(d.__assign)({}, n),
                        s.RM
                      );
                    })(e);
                  },
                })
              );
              if (
                ((this.$root.isRantaPage = !0),
                (this.$root[o] = l),
                (this.$ranta = Object(d.__assign)(Object(d.__assign)({}, a), {
                  pageRuntime: l,
                  router: { route: i.page },
                })),
                (this["ranta-cloud-api"] =
                  null === (e = c.default.getGlobal("RantaCloudAPI")) ||
                  void 0 === e
                    ? void 0
                    : e.getInstance(this)),
                null === (t = this["ranta-cloud-api"]) ||
                  void 0 === t ||
                  t.onDataReady(function () {
                    p.forEach(function (e) {
                      var t;
                      s.RM = Object(d.__assign)(
                        Object(d.__assign)({}, s.RM),
                        (((t = {})[e] = !0), t)
                      );
                    });
                  }),
                "function" == typeof getApp)
              ) {
                var f =
                  null === (n = this["ranta-cloud-api"]) || void 0 === n
                    ? void 0
                    : n.createYZ("ranta-cloud-api");
                getApp()[Symbol.for("cloud/debug")] ||
                  (getApp()[Symbol.for("cloud/debug")] = {}),
                  (getApp()[Symbol.for("cloud/debug")].yz = f);
              }
              if (
                ((this.runApi = function (e, t) {
                  return l.runApi(e, t);
                }),
                (this.updateStatus = function (e) {
                  l.updateStatus(e);
                }),
                (this.runPluginsApi = function (e, t) {
                  a.runPluginsApi(e, t);
                }),
                (this.destroyContext = function () {
                  l.destroyContext();
                }),
                u)
              ) {
                var h = l.getMockContexts ? l.getMockContexts() : {};
                r.setGlobal("rantaMock", h);
              }
              a.runPluginsApi("beforePageCreate"), l.runApi("beforePageCreate");
            } catch (e) {
              (e.message = "RantaTee 初始化失败：" + e.message), T(e);
            }
          },
          created: function () {
            this.runPluginsApi("pageCreated");
          },
          beforeMount: function () {
            var e = this.$getPageQuery(),
              t = this.$getPageRoute(),
              n = function (t) {
                t(e);
              };
            r.setGlobal("getQueryAsync", n),
              (r.getGlobal("queryPendingList") || []).forEach(n),
              r.setGlobal("queryPendingList", []),
              (this.getQuery = function () {
                return e;
              }),
              (this.getQueryAsync = n),
              this.pendingList.forEach(n),
              (this.pendingList = []),
              this.runPluginsApi("beforePageMount", { query: e, route: t }),
              this.runApi("beforePageMount", { query: e, route: t });
          },
          mounted: function () {
            var e = this;
            this.runPluginsApi("pageMounted"),
              this.$on("rootClick", function (t) {
                return e.runPluginsApi("onRootClick", t);
              });
          },
          onShow: function () {
            this.updateStatus(s.ACTIVE);
            var e = this.$getPageQuery(),
              t = this.$getPageRoute();
            this.runPluginsApi("onPageShow", { query: e, route: t }),
              this.runApi("onPageShow", { query: e, route: t }),
              r.setGlobal("getQueryAsync", function (t) {
                t(e);
              });
          },
          onHide: function () {
            this.runPluginsApi("onPageHide"),
              this.runApi("onPageHide"),
              this.updateStatus(s.PASSIVE);
          },
          destroyed: function () {
            var e;
            this.runPluginsApi("pageDestroyed"),
              this.runApi("pageDestroyed"),
              this.destroyContext(),
              u && r.setGlobal("rantaMock", void 0),
              (this.$root[o] = void 0);
            (this.runPluginsApi = function () {}),
              (this.runApi = function () {}),
              (this.updateStatus = function () {}),
              (this.destroyContext = function () {}),
              (this.getQueryAsync = function () {}),
              (this.getQuery = function () {}),
              r.setGlobal("getQueryAsync", void 0),
              null === (e = this.$off) ||
                void 0 === e ||
                e.call(this, "rootClick");
          },
          methods: Object(d.__assign)(
            {
              onShareAppMessage: function (e) {
                return this.runApi("onShareAppMessage", e);
              },
              onShareTimeline: function () {
                return this.runApi("onShareTimeline");
              },
              onPageScroll: function (e) {
                this.runApi("onPageScroll", e);
              },
              onPullDownRefresh: function () {
                this.runApi("onPullDownRefresh");
              },
              onReachBottom: function () {
                this.runApi("onReachBottom");
              },
              renderStage: function (e) {
                this["_".concat(e)] = !0;
              },
              getWidgetVisible: function (e) {
                return this._rw[e];
              },
              setWidgetVisible: function (e, t) {
                var n;
                this._rw = Object(d.__assign)(
                  Object(d.__assign)({}, this._rw),
                  (((n = {})[e] = t), n)
                );
              },
            },
            p
              ? ((t = [
                  "onShareAppMessage",
                  "onShareTimeline",
                  "onPageScroll",
                  "onPullDownRefresh",
                  "onReachBottom",
                ]),
                (n = p),
                t
                  .filter(function (e) {
                    return !n.includes(e);
                  })
                  .reduce(function (e, t) {
                    return (e[t] = void 0), e;
                  }, {}))
              : {}
          ),
          data: function () {
            var e = v.reduce(function (e, t, n) {
              return (e["_".concat(t)] = 0 === n), e;
            }, {});
            return Object(d.__assign)(Object(d.__assign)({}, e), {
              RM: {},
              _rw: {},
            });
          },
        };
      }
      var Ze = (function (e) {
          function t(t) {
            var n =
              e.call(this, {
                config: t.config,
                onReady: t.onReady,
                getPluginLibs:
                  t.getPluginLibs ||
                  function () {
                    return [];
                  },
                builtinBundle: t.builtinBundle,
                getQuery: t.getQuery,
                getQueryAsync: t.getQueryAsync,
                renderAppMos: function (e) {
                  c.default.setGlobal("renderAppMos", e);
                },
              }) || this;
            return (
              (n.getPageOptions = Je),
              M("app config 为:\n", t.config),
              c.default.setGlobal("ranta-plugins", n.getPluginCtx()),
              n
            );
          }
          return Object(d.__extends)(t, e), t;
        })(Ye),
        Xe = n("Q31X"),
        et = n.n(Xe),
        tt = n("Oq22"),
        nt = n("Qzzd");
      function ot() {}
      function rt(e, t) {
        return e && e.appKey
          ? (e.per && tt.a.setConfig && tt.a.setConfig(e.per),
            setTimeout(function () {
              n.e("packages/async-main/chunk")
                .then(n.bind(null, "plPE"))
                .then(function (n) {
                  var o,
                    r = n.Hummer,
                    i = n.RantaCaptor;
                  if (
                    (r.init(e),
                    null === (o = t.config) || void 0 === o
                      ? void 0
                      : o.setErrorCaptured)
                  ) {
                    var a = t.config.setErrorCaptured;
                    r.addCaptor(new i({ setErrorCaptured: a }));
                  }
                });
            }, 0),
            {
              captureXhr: ot,
              setPageGroup: ot,
              markRendered: ot,
              mark: tt.a,
              capture: nt.b,
              setEnv: nt.c,
              setExtra: nt.d,
              setOptions: nt.e,
            })
          : {
              setEnv: ot,
              setExtra: ot,
              capture: ot,
              markRendered: ot,
              mark: { start: ot, end: ot },
              setOptions: ot,
            };
      }
      rt.pluginName = "hummer";
      var it = rt,
        at = n("q3MX");
      var st = (function (e) {
          function t(t) {
            return (
              e.call(
                this,
                Object(d.__assign)(Object(d.__assign)({}, t), {
                  getPluginLibs: function () {
                    var e;
                    return [et.a, at.a, it].concat(
                      (null === (e = t.getPluginLibs) || void 0 === e
                        ? void 0
                        : e.call(t)) || []
                    );
                  },
                })
              ) || this
            );
          }
          return Object(d.__extends)(t, e), t;
        })(Ze),
        ut = n("esrA"),
        ct = n("PZW/"),
        dt = n("w2Y9"),
        pt = n.n(dt);
      class lt {
        constructor(e) {
          (this.ctx = e.ctx), this.init();
        }
        init() {
          this.ctx.event.once("login", () => {
            this.preHandleReport();
          });
        }
        onPageShow(e) {
          var { query: t, route: n } = e;
          (this.query = t),
            (this.route = n),
            this.preHandleReport({ query: t, route: n });
        }
        preHandleReport(e) {
          try {
            var { query: t, route: n } = e || {};
            (t = t || this.query),
              (n = n || this.route),
              Object(ct.a)({
                logMsgPrefix: "[中台化]",
                query: t || {},
                url: pt.a.add(n, t),
                sourceApp: "weapp-ext",
              });
          } catch (e) {
            Object(ct.b)({
              level: "error",
              message: "[中台化]关联关系上报_兜底catch",
              detail: { error: e },
            });
          }
        }
      }
      var ft = n("n9vS"),
        ht = n.n(ft);
      class gt {
        constructor(e) {
          var { ctx: t, cloudConfig: n = {} } = e;
          (this.ctx = t), this.initCloudData(n);
        }
        initCloudData() {}
      }
      gt.widgets = { Main: ht.a };
      var mt = n("US/N"),
        vt = n("MLLI"),
        bt = n("50K0"),
        yt = n("F6OL"),
        xt = n("3tyi");
      function _t(e, t) {
        void 0 === t && (t = "");
        var n = "";
        return (
          "object" != typeof e ||
            null == e ||
            Object.keys(e).forEach((o) => {
              n +=
                "" +
                t +
                (o.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() + ":") +
                e[o] +
                ";";
            }),
          n
        );
      }
      var kt = {
        general: "#f44",
        "main-bg": "#f44",
        "main-text": "#fff",
        "vice-bg": "#f85",
        "vice-text": "#fff",
        "start-bg": "#ff6060",
        "end-bg": "#f44",
      };
      function jt(e) {
        return "object" != typeof e || null == e
          ? ""
          : Object.keys(e)
              .map((t) => {
                var n = e[t];
                return "object" == typeof n
                  ? "--" +
                      t +
                      ": linear-gradient(to right, " +
                      n.start +
                      ", " +
                      n.end +
                      ")"
                  : "--" + t + ": " + n;
              })
              .join(";")
              .concat(";");
      }
      var Ot = { themeCSS: jt(kt), themeColors: kt, shopStyleSettings: {} };
      var St = {};
      class Pt {
        constructor(e) {
          var { ctx: t } = e;
          (this.ctx = t),
            (this.isSupportCssVar = (function () {
              var { platform: e } = Object(vt.b)();
              if ("ios" !== e) return !0;
              var { system: t } = c.default.$native.getSystemInfoSync();
              return Object(yt.compareVersions)(t.split(" ")[1], "9.3") > -1;
            })()),
            (this.unwatch = null);
          var { kdtId: n } = t.data;
          (null != n && 0 != +n && this.isSupportCssVar) || this.setCtxData(Ot),
            this.prefetchThemeCSS(n),
            (this.unwatch = t.watch("kdtId", (e) => {
              !this.isSupportCssVar ||
                ("number" != typeof e && "string" != typeof e) ||
                0 == +e ||
                this.update(e);
            })),
            this.ctx.process.define("updateAppStyle", (e) => {
              var { shopStyleSettings: t = {} } = this.ctx.data,
                {
                  colors: n = {},
                  radius: o = {},
                  tag: r = {},
                  icon: i = {},
                } = e,
                a = Object(u.a)({}, t, {
                  colors: n,
                  radius: o,
                  tag: r,
                  icon: i,
                });
              (a.css = this.transformThemeCSS(a)),
                this.setCtxData(
                  Object(u.a)({}, this.buildThemeObj(a), { themeCSS: a.css })
                );
            });
        }
        prefetchThemeCSS(e) {
          return bt.a
            .getMiniappPrefetchData("shopStyle")
            .then((t) => {
              if (!t) return this.fetchThemeCSS(e);
              this.setCtxData(this.handleThemeCSS(t));
            })
            .catch(() => {
              this.fetchThemeCSS(e);
            });
        }
        pageDestroyed() {
          this.unwatch();
        }
        update(e) {
          if (
            (function (e) {
              return (
                ("number" == typeof e || "string" == typeof e) && null != St[e]
              );
            })(e)
          )
            return this.setCtxData(St[e]);
          this.isUpdating ||
            ((this.isUpdating = !0),
            this.fetchThemeCSS(e)
              .then((t) => {
                (this.isUpdating = !1), (St[e] = t), this.setCtxData(t);
              })
              .catch(() => {
                this.setCtxData(Ot), (this.isUpdating = !1);
              }));
        }
        fetchThemeCSS(e) {
          return (function (e) {
            var t = null == e ? {} : { kdt_id: e };
            return Object(mt.default)({
              path: "/wscshop/shop/shop_wide_style.json",
              query: t,
            });
          })(e).then((e) => this.handleThemeCSS(e));
        }
        handleThemeCSS(e) {
          var t, n;
          if (!e) return {};
          var o =
              null == (t = e.all_shop_styles)
                ? void 0
                : t.find((e) => "brand" === e.shop_style_type),
            r = o
              ? Object(xt.a)(o, ["colors", "radius", "tag", "icon", "button"])
              : {};
          return (
            (e =
              (null == (n = e.all_shop_styles)
                ? void 0
                : n.find((e) => "market" === e.shop_style_type)) || e),
            Object(u.a)({}, this.buildThemeObj(e), {
              themeType: e.type,
              themeCSS:
                e.global_theme_vars || e.globalThemeVars || jt(e.colors),
              shopStyleSettings: r,
            })
          );
        }
        buildThemeObj(e) {
          return e
            ? {
                themeColors: e.colors,
                themeIcon: e.icon,
                themeTag: e.tag,
                themeRadius: e.radius,
                themeButton: e.button,
              }
            : {};
        }
        transformThemeCSS(e) {
          var t,
            n,
            { colors: o, radius: r, tag: i, button: a } = e;
          return (
            jt(o) +
            _t(r, "--theme-radius-") +
            ((t = i),
            (n = ""),
            Object.keys(t).forEach((e) => {
              e.indexOf("brand-") > -1
                ? (n += "--" + e + ":" + t[e] + ";")
                : e.indexOf("tag-") > -1 &&
                  (n += "--theme-" + e + ":" + t[e] + ";");
            }),
            n) +
            (function (e) {
              return _t(e, "--theme-");
            })(a)
          );
        }
        setCtxData(e) {
          Object.keys(e).forEach((t) => {
            this.ctx.data[t] = e[t];
          });
        }
      }
      Pt.lambdas = {
        hexToRgb: function (e) {
          var t = 0,
            n = 0,
            o = 0,
            r = (e) => parseInt(e, 16);
          if (3 === (e = e.slice(1)).length || 6 === e.length)
            return (
              3 === e.length
                ? ((t = 17 * r(e[0])), (n = 17 * r(e[1])), (o = 17 * r(e[2])))
                : ((t = r(e[1]) + 16 * r(e[0])),
                  (n = r(e[3]) + 16 * r(e[2])),
                  (o = r(e[5]) + 16 * r(e[4]))),
              [t, n, o]
            );
        },
        objectToCSS: _t,
      };
      var It = n("+I+c"),
        Ct = n("QxN7"),
        At = n("Tewj"),
        Et = n("aOlM"),
        wt = ["ctx"],
        Rt = () =>
          n
            .e("packages/async-tee/chunk")
            .then(n.bind(null, "JvWB"))
            .then((e) => e.default);
      class Dt {
        constructor(e) {
          var t = this,
            { ctx: n } = e,
            o = Object(It.a)(e, wt);
          (this.loginSilentlyLogger = Object(Et.a)(function (e, n) {
            void 0 === n && (n = {}),
              t.ctx.logger &&
                t.ctx.logger.log({
                  et: "custom",
                  ei: "login_silently_duration",
                  en: "静默登录持续时间",
                  params: Object(u.a)({ duration_time: Date.now() - e }, n),
                });
          }, 100)),
            (this.ctx = n),
            (this.ctx.data.appId = Object(Ct.getAppId)()),
            this.initEvent(),
            this.initPropertyData(o),
            this.initData(),
            this.setHooks(),
            this.initCloudData();
        }
        initPropertyData(e) {
          var {
            customAppId: t,
            clientId: n,
            clientSecret: o,
            grantType: r,
          } = e;
          Rt().then((e) => {
            t && ((this.ctx.data.appId = t), Object(Ct.updateAppId)(t)),
              n &&
                e.updateLoginExtraData({
                  clientId: n,
                  clientSecret: o,
                  grantType: r,
                });
          });
        }
        initEvent() {
          At.default.on(Ct.constants.EVENT_KEYS.LOGIN_END, (e) => {
            this.ctx.event.emit("login", e),
              e.cache || Rt().then((e) => e.refreshUserAuthData());
          });
        }
        initData() {
          (this.ctx.data.miniprogram = {}),
            (this.ctx.data.platformInfo = {}),
            this.fetchGlobalData();
        }
        fetchGlobalData() {}
        onAppShow() {
          Ct.isWeb || this.login();
        }
        onAppLaunch() {
          this.fetchGlobalData();
        }
        login() {
          if (this.forceLoginRequest) return this.forceLoginRequest;
          var e = Date.now();
          return Rt().then((t) =>
            t.login({ allowNoLogin: Ct.isWeb }).then((t) => {
              this.setGlobalConfig(t),
                !t.cache &&
                  this.loginSilentlyLogger(e, {
                    fetch_type: t.fetchType || "remote",
                  }),
                mt.flash && Object(mt.flash)();
            })
          );
        }
        forceLogin() {
          return (
            this.forceLoginRequest ||
              (this.forceLoginRequest = Rt().then((e) =>
                e
                  .forceLogin()
                  .then(
                    (e) => (
                      this.setGlobalConfig(e),
                      (this.forceLoginRequest = void 0),
                      mt.flash && Object(mt.flash)(),
                      e
                    )
                  )
                  .catch((e) => {
                    throw ((this.forceLoginRequest = void 0), e);
                  })
              )),
            this.forceLoginRequest
          );
        }
        setGlobalConfig(e) {
          var { logger: t, hummer: n } = this.ctx,
            o = { li: e.userId },
            r = { userId: e.userId };
          e.mobile && ((o.m = e.mobile), (r.mobile = e.mobile)),
            t && t.setUser(o),
            n && n.setEnv(r);
        }
        setHooks() {
          Ct.platform.checkInSinglePage() ||
            Ct.isWeb ||
            (mt.beforeHooks.add((e, t) => {
              var { skipToken: n } = e.config || {},
                o = n || t.sessionId;
              return o || this.login(), !!o;
            }),
            mt.afterHooks.add((e, t) => {
              var { origin: n } = e,
                { data: o } = t,
                { code: r } = o || {};
              return (
                !(
                  -1 === r ||
                  ("carmen" === n && [40010, 40009].includes(r)) ||
                  4205 === r
                ) || (this.forceLogin(), !1)
              );
            }));
        }
        initCloudData() {}
      }
      Dt.lambdas = {
        login: (e) => Rt().then((t) => t.login(e)),
        forceLogin: () => Rt().then((e) => e.forceLogin()),
        getAppId: () => Object(Ct.getAppId)(),
        hasLogin: () => Ct.platform.hasLogin(),
        getUserInfo: (e) => Rt().then((t) => t.getUserInfo(e)),
        getAuthType: () => Ct.platform.getAuthType(),
        getPlatform: () => Ct.platform.getAclValue("platform.platform"),
        getHostApp: () => Ct.platform.getHostApp(),
      };
      var Tt = n("ORua"),
        Lt = n.n(Tt),
        Mt = n("5Pz1"),
        Bt = n.n(Mt),
        Ft = n("ZEtj"),
        Ht = n.n(Ft),
        zt = n("41xf"),
        Ut = n.n(zt);
      class Nt extends class extends class {
        constructor(e) {
          this.ctx = e.ctx;
          Ct.cache.get("CACHE_PASSPORT_TEE_API") ||
            Ct.cache.set(
              "CACHE_PASSPORT_TEE_API",
              n
                .e("packages/async-tee/chunk")
                .then(n.bind(null, "JvWB"))
                .then((e) => e.default)
            );
        }
        resolveProtocol() {
          return (
            this.__protocolPs ||
              (this.__protocolPs = n
                .e("packages/async-main/chunk")
                .then(n.t.bind(null, "HsSF", 7))
                .catch((e) => {
                  throw (
                    ((this.__protocolPs = void 0),
                    Ct.platform.authLogger.logSkynet(
                      "Resolve protocol failed",
                      { errMsg: Object(Ct.getErrorMsg)(e), err: e }
                    ),
                    e)
                  );
                })),
            this.__protocolPs
          );
        }
        invokeProtocol() {
          return this.resolveProtocol().then(
            (e) =>
              new e.InvokeProtocol({ source: "@ext/protocol_" + Date.now() })
          );
        }
      } {
        constructor(e) {
          super(e), this.initCloudData();
        }
        initCloudData() {}
      } {}
      Nt.widgets = {
        ProtocolPopup: Bt.a,
        ProtocolContent: Ht.a,
        CloudProtocolContent: Ut.a,
        InjectProtocol: Lt.a,
      };
      var qt = n("dvf8");
      var Gt = n("4PZc"),
        Wt = n.n(Gt),
        Kt = n("r8pP"),
        Qt = n.n(Kt),
        Vt = n("0pG4"),
        $t = n.n(Vt),
        Yt = n("JZ1m"),
        Jt = n.n(Yt),
        Zt = n("kKRC"),
        Xt = n.n(Zt);
      class en extends class extends class {
        constructor(e) {
          (this.ctx = e.ctx),
            (this.__hasInit = !!Ct.cache.get("CACHE_ACCOUNT_INIT"));
        }
      } {
        constructor(e) {
          super(e), this.initCloudData();
        }
        initCloudData() {}
      } {
        constructor(e) {
          super(e), this.initHooks(), this.initProcess();
        }
        initHooks() {
          var e = this;
          if (!this.__hasInit) {
            qt.authorizeHook.mobileChange.set(function () {
              for (
                var t = arguments.length, n = new Array(t), o = 0;
                o < t;
                o++
              )
                n[o] = arguments[o];
              return Promise.all(e.ctx.process.invoke("mobileChange", ...n));
            });
            qt.authorizeHook.buttonClickAfter.set(() => {
              this.ctx.hummer.mark.start("user-auth-popup");
            }),
              qt.authorizeHook.popupShowAfter.set(() => {
                this.ctx.hummer.mark.end("user-auth-popup");
              });
          }
        }
        initProcess() {
          this.ctx.process.define("invoke-protocol", () =>
            n
              .e("packages/async-main/chunk")
              .then(n.t.bind(null, "HsSF", 7))
              .then(
                (e) =>
                  new e.InvokeProtocol({
                    source: "@ext/authorize_" + Date.now(),
                  })
              )
          );
        }
      }
      (en.widgets = {
        Main: Wt.a,
        Popup: Qt.a,
        CloudUserAuthorize: $t.a,
        Pop: Jt.a,
      }),
        (en.components = { UserAuthorizePopup: Xt.a });
      var tn = n("Qogv"),
        nn = n.n(tn),
        on = n("vCoL"),
        rn = n.n(on);
      class an {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      an.widgets = { Main: nn.a, CloudAppContentAppend: rn.a };
      var sn = n("03qp"),
        un = n.n(sn),
        cn = n("ijuo"),
        dn = n.n(cn);
      class pn {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      pn.widgets = { ShopNavWeapp: un.a, BottomTabbarBg: dn.a };
      var ln = n("2CfL"),
        fn = n("mQXz"),
        hn = n.n(fn),
        gn = n("SVbq"),
        mn = [
          "autoEnterShop",
          "enterShopSelect",
          "enterShopAfterLogin",
          "setApplicationScene",
          "getOrderEnterShopPolicy",
          "handleUrlWithShopAutoEnter",
          "setEnterShopCacheResult",
          "getEnterShopCacheByBizType",
          "getRetailShelfEnterShopConfig",
        ];
      class vn extends ln.a {
        constructor(e) {
          super(e),
            (this.extJson = {}),
            (this.ctx.data.CHAIN_BIZ_TYPE = gn.a),
            this.initProcess();
        }
        initProcess() {
          mn.map((e) => {
            var t;
            return null == (t = this[e]) ? void 0 : t.call(this);
          });
        }
        autoEnterShop() {
          this.ctx.process.define("autoEnterShop", function (e, t) {
            return (
              void 0 === t && (t = {}),
              Object(gn.i)(e, Object(u.a)({ logTag: gn.c.EXT }, t))
            );
          });
        }
        enterShopSelect() {
          this.ctx.process.define("enterShopSelect", function (e, t) {
            return void 0 === t && (t = {}), Object(gn.o)(e, t);
          });
        }
        enterShopAfterLogin() {
          this.ctx.process.define("enterShopAfterLogin", function (e) {
            return (
              void 0 === e && (e = {}),
              new Promise((t, n) => {
                try {
                  e.redirectUrl = encodeURIComponent(
                    pt.a.add(e.path, hn()(e.query || {}, "subKdtId"))
                  );
                } catch (e) {
                  n({ err: "参数处理异常" });
                }
                var o, r;
                "web" === c.default.getEnv() &&
                  ((e.isAccessEnterShop =
                    (null == (o = window._global)
                      ? void 0
                      : o.isAccessEnterShop) || !1),
                  (e.kdtId = null == (r = window._global) ? void 0 : r.kdtId));
                Object(gn.m)(Object(u.a)({}, e, { isMulti: !0 }))
                  .then((e) => {
                    t(e);
                  })
                  .catch((e) => {
                    n(e);
                  });
              })
            );
          });
        }
        setApplicationScene() {
          this.ctx.process.define("setApplicationScene", (e) =>
            Object(gn.C)(e)
          );
        }
        getOrderEnterShopPolicy() {
          this.ctx.process.define("getOrderEnterShopPolicy", () =>
            Object(gn.s)()
          );
        }
        handleUrlWithShopAutoEnter() {
          this.ctx.process.define("handleUrlWithShopAutoEnter", (e) =>
            Object(gn.v)(e)
          );
        }
        setEnterShopCacheResult() {
          this.ctx.process.define("setEnterShopCacheResult", (e) => {
            var { resultKdtId: t, routeBizType: n } = e;
            return Object(gn.D)(t, n);
          });
        }
        getEnterShopCacheByBizType() {
          this.ctx.process.define("getEnterShopCacheByBizType", (e) =>
            Object(gn.r)(e)
          );
        }
        getRetailShelfEnterShopConfig() {
          this.ctx.process.define(
            "getRetailShelfEnterShopConfig",
            function (e) {
              return void 0 === e && (e = !1), Object(gn.t)(e);
            }
          );
        }
      }
      var bn = vn,
        yn = n("Sh92"),
        xn = n("/duV"),
        _n = n("2wjL");
      class kn extends yn.a {
        constructor(e) {
          super(e),
            (this.route = ""),
            (this.env = c.default.getEnv()),
            (this.query = {}),
            this.initData(),
            this.initProcess(),
            this.initListener(),
            "web" !== this.env &&
              (this.initTeeMixin(),
              "weapp" !== this.env && this.initMultiStore());
        }
        initData() {
          var e = Object(xn.d)();
          (this.ctx.data.offlineId = e),
            (this.ctx.data.isMultiStore = !1),
            (this.ctx.data.openHideStore = !1),
            "web" === this.env && e
              ? Object(xn.l)(Object(xn.c)(), e).then((e) => {
                  this.ctx.data.offlineData = e;
                })
              : (this.ctx.data.offlineData = {});
        }
        initProcess() {
          this.ctx.process.define("setOfflineId", (e) => Object(xn.o)(e)),
            this.ctx.process.define("getOfflineData", (e) =>
              Object(xn.l)(Object(xn.c)(), e)
            ),
            this.ctx.process.define("switchMultiStore", () => {
              this.switchMultiStore();
            });
        }
        initListener() {
          Object(xn.i)((e) => {
            (this.ctx.data.offlineId = e),
              Object(xn.l)(Object(xn.c)(), e).then((e) => {
                this.ctx.data.offlineData = e;
              });
          }),
            Object(xn.j)((e) => {
              var { multiStore: t } = e;
              t &&
                ((this.ctx.data.isMultiStore = t.isMultiStore),
                (this.ctx.data.openHideStore = t.openHideStore));
            });
        }
        initMultiStore() {
          Object(xn.g)()
            .then((e) => {
              if (e > 0) return Object(xn.o)(e);
              this.checkEnterMultiStore();
            })
            .catch((e) => {});
        }
        checkEnterMultiStore() {
          var e = encodeURIComponent(_n.a.add("/" + this.route, this.query));
          Object(xn.m)().then((t) => {
            var { multiStore: n } = t,
              o =
                "weapp" === this.env
                  ? {}
                  : {
                      position:
                        "packages/shopcore/multi-store/select-poi/index/index?redirectUrl=" +
                        e +
                        "&autoSelect=" +
                        n.autoEntryStore,
                      select:
                        "packages/shopcore/multi-store/index/index?redirectUrl=" +
                        e,
                      type: "redirectTo",
                    };
            Object(xn.b)(this.route, o);
          });
        }
        switchMultiStore() {
          encodeURIComponent(_n.a.add("/" + this.route, this.query));
          Object(xn.m)().then((e) => {
            var { multiStore: t } = e;
            return c.default.navigate({
              url: t.openHideStore
                ? "/packages/shop/multi-store/select-poi/index/index"
                : "/packages/shop/multi-store/index/index",
              type: "navigateTo",
            });
          });
        }
        initTeeMixin() {
          var e = this;
          c.default.mixin({
            usingScope: ["page"],
            beforeMount() {
              (e.route = this.$getPageRoute()),
                (e.query = this.$getPageQuery()),
                e.query.oid &&
                  "weapp" !== this.env &&
                  Object(xn.o)(+e.query.oid);
            },
            onShow() {
              At.default.on("app:init:nostoreid", e.checkEnterMultiStore, e),
                Object(xn.c)() && e.route && e.checkEnterMultiStore();
            },
            onUnload() {
              At.default.off("app:init:nostoreid", e.checkEnterMultiStore);
            },
          });
        }
      }
      kn.lambdas = {
        isMultiStoreAsync: () =>
          Object(xn.m)().then((e) => {
            var { multiStore: t } = e;
            return t.isMultiStore;
          }),
      };
      var jn = kn,
        On = mt.default;
      class Sn extends yn.a {
        constructor(e) {
          super(e),
            (this.env = c.default.getEnv()),
            this.initListener(),
            this.initProcess(),
            this.initData(),
            this.initCloudData();
        }
        initData() {
          On({
            path: "/wscshop/query-shop-config.json",
            method: "GET",
            withCredentials: !0,
          }).then((e) => {
            this.ctx.data.shopConfigs = e;
          });
          var e = Object(xn.e)(),
            t = Object(xn.c)();
          if (
            ((this.ctx.data.kdtId = t),
            (this.ctx.data.rootKdtId = e),
            "web" === this.env)
          )
            return Object(xn.q)(t);
          "weapp" !== this.env &&
            Object(xn.q)(e, { mark: "[ext-shop-core]weapp-initData" });
        }
        initProcess() {
          this.ctx.process.define("readConf", function (e, t) {
            return void 0 === t && (t = !0), Object(xn.a)(e, t);
          }),
            this.ctx.process.define("setKdtId", function (e, t, n) {
              return (
                void 0 === n && (n = "[ext-shop-core]setKdtId"),
                Object(xn.q)(e, { force: t, mark: n })
              );
            });
        }
        initListener() {
          Object(xn.h)((e) => {
            this.ctx.data.kdtId = e;
          }),
            Object(xn.j)((e) => {
              var t, n, o;
              (this.shop = {
                kdtId: null == (t = e.shop) ? void 0 : t.kdtId,
                shopName: null == (n = e.shop) ? void 0 : n.shopName,
                logo: null == (o = e.shop) ? void 0 : o.logo,
              }),
                (this.ctx.data.shop = e.shop),
                (this.ctx.data.theme = e.theme);
            });
        }
        initCloudData() {}
      }
      var Pn = Sn;
      var In = n("hcPn");
      function Cn() {}
      function An(e, t, n) {
        return Object(In.b)({ type: "gcj02" })
          .then((t) => {
            var { latitude: n, longitude: o } = t,
              { lng: r, lat: i } = (function (e, t) {
                var n = (3e3 * Math.PI) / 180,
                  o = e,
                  r = t,
                  i = Math.sqrt(o * o + r * r) + 2e-5 * Math.sin(r * n),
                  a = Math.atan2(r, o) + 3e-6 * Math.cos(o * n);
                return {
                  lng: (e = i * Math.cos(a) + 0.0065),
                  lat: (t = i * Math.sin(a) + 0.006),
                };
              })(o, n);
            e({ lng: r, lat: i }, { latitude: n, longitude: o });
          })
          .catch((o) => {
            n ? n(e, t) : t(o);
          });
      }
      var En = Cn,
        wn = Cn,
        Rn = Promise.resolve(),
        Dn = {},
        Tn = [];
      class Ln {
        constructor(e) {
          (this.ctx = e.ctx),
            this.ctx.process.define("getLocation", this.getLocation.bind(this)),
            this.ctx.process.define("tee-api:getLocation", En.bind(this)),
            this.ctx.process.define("tryLocation", (e) => {
              var { success: t, fail: n, cb: o } = e;
              An.call(this, t, n, o);
            }),
            this.ctx.process.define("ecloud:setLBSReady", wn.bind(this));
        }
        getLocation() {
          var e;
          return (
            (e = new Promise((e, t) => An.call(this, e, t, null))),
            new Promise((t, n) => {
              e.then(
                (e) => e,
                () => Promise.resolve({})
              )
                .then((e) =>
                  (function (e) {
                    void 0 === e && (e = {});
                    var { lat: t } = e,
                      { lng: n } = e;
                    return new Promise((e, o) => {
                      Object(mt.default)({
                        origin: "cashier",
                        withCredentials: !0,
                        path: "/wsctrade/multistore/selfFetchPoint/getCity.json",
                        method: "GET",
                        data: { lat: t, lon: n },
                      })
                        .then((o) => {
                          e({
                            cityName: o.cityName,
                            cityCode: o.cityCode,
                            lat: t,
                            lng: n,
                          });
                        })
                        .catch((e) => {
                          o(e);
                        });
                    });
                  })(e).then((e) => {
                    t(e);
                  })
                )
                .catch((e) => n(e));
            })
          );
        }
      }
      Ln.lambdas = {
        tryLocation: An,
        getKsLocation: Rn,
        amap: () => {},
        locateCityByPosition: () => {},
        locateCityByIp: () => {},
        setDb: function () {
          return getApp().db.set(...arguments);
        },
        getDb: function () {
          return getApp().db.get(...arguments);
        },
        deleteDb: function () {
          return getApp().db.delete(...arguments);
        },
        onEvent(e, t) {
          Dn[e] || (Dn[e] = []), Dn[e].push(t);
        },
        onEventOnce(e, t) {
          Dn[e] || (Dn[e] = []), Dn[e].push(t), Tn.push(t);
        },
        offEvent(e) {
          Dn[e] && delete Dn[e];
        },
        triggerEvent(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          if (Dn[e]) {
            var r = Dn[e],
              i = [];
            r.forEach((e, t) => {
              e(...n), -1 !== Tn.indexOf(e) && i.push(t);
            }),
              i.length &&
                i
                  .sort((e, t) => t - e)
                  .forEach((t) => {
                    Dn[e].splice(t, 1);
                  });
          }
        },
      };
      var Mn = n("9mFz"),
        Bn = n("z70Z"),
        Fn = n.n(Bn),
        Hn = n("dP9i"),
        zn = n.n(Hn),
        Un = n("P0Q5"),
        Nn = n.n(Un),
        qn = n("YIVt"),
        Gn = n.n(qn),
        Wn = n("qDwC"),
        Kn = n.n(Wn),
        Qn = n("PmRg"),
        Vn = n.n(Qn),
        $n = n("M53l"),
        Yn = n.n($n),
        Jn = n("y1RM"),
        Zn = n.n(Jn),
        Xn = n("Z5hk"),
        eo = n.n(Xn),
        to = n("Ljzw"),
        no = n.n(to),
        oo = n("oYCZ"),
        ro = n.n(oo),
        io = n("fFWL"),
        ao = n.n(io);
      class so {
        constructor(e) {
          (this.ctx = e.ctx),
            (this.ctx.instance = {}),
            this.initCloudSalesmanData();
        }
        initCloudSalesmanData() {
          (this.salesmanIdentityInfo = {}),
            (this.salesmanPromoteGoodsInfo = {}),
            Object(Mn.b)(this, {
              salesmanPromoteGoodsInfo: (e) => {
                this.salesmanPromoteGoodsInfo = e;
              },
              salesmanIdentityInfo: (e) => {
                this.salesmanIdentityInfo = e;
              },
            });
        }
        onPageShow(e) {
          var { route: t, query: n } = e,
            { alias: o = "" } = n;
          this.ctx.process.invoke("updateCloudData", {
            invokePage: t + "/" + o,
          });
        }
      }
      so.widgets = {
        SalesmanSharePopup: Fn.a,
        CubeHeader: zn.a,
        CubeTabContainer: Nn.a,
        CubeTabPromote: Kn.a,
        CubeTabPoster: Gn.a,
        CubeFooter: Vn.a,
        MainFrame: Yn.a,
        CloudSalesmanSharePopup: Zn.a,
        CloudSalesmanSharePopupFooter: ao.a,
        CloudSalesmanSharePopupHeader: eo.a,
        CloudSalesmanSharePopupTabs: no.a,
        CloudSalesmanSharePopupCustomTabContent: ro.a,
      };
      var uo = n("y293"),
        co = Object(ut.a)({
          type: "global",
          plugins: {
            dmc: {
              biz: "yzWeappWsc",
              hostApp: "weixin",
              authType: "weapp",
              bizEnv: "wsc",
              customConfig: { routes: {} },
            },
            logger: {
              batch: !0,
              autoUUID: !1,
              autoEnterpage: !0,
              plat: { yai: "wsc_c" },
              event: {},
              eventQueueMaxLength: 30,
              eventQueuePollingInterval: 5e3,
              asyncPageTypes: ["f", "g", "ag", "search"],
              redirectPages: [
                "packages/goods/cart/index",
                "packages/goods/help-cut/index",
                "packages/goods/lucky-draw-group/index",
                "packages/goods/points/index",
                "packages/goods/present/index",
                "packages/goods/tuan/index",
                "packages/goods/seckill/index",
                "packages/goods/seckill/end",
              ],
              spm: {
                "packages/home/dashboard/index": "f",
                "packages/home/tab/one": "f",
                "packages/home/tab/two": "f",
                "packages/home/tab/three": "f",
                "packages/home/feature/index": "f",
                "pages/home/dashboard/index": "f",
                "pages/home/tab/one": "f",
                "pages/home/tab/two": "f",
                "pages/home/tab/three": "f",
                "pages/home/feature/index": "f",
                "packages/shop/goods/group/index": "ag",
                "packages/shop/goods/all/index": "ag",
                "packages/shop/goods/tag-list/index": "ag",
                "packages/shop/goods/search/index": "search",
                "packages/goods-list/all/index": "ag",
                "packages/goods-list/tag/index": "ag",
                "packages/goods-list/search-result/index": "search",
                "packages/usercenter/dashboard/index": "f",
                "packages/goods/detail/index": "g",
                "pages/goods/detail/index": "g",
                "packages/goods/share/index": "g",
                "packages/goods/groupon/index": "g",
                "packages/goods/help-cut/index": "g",
                "packages/goods/lucky-draw-group/index": "g",
                "packages/goods/tuan/index": "g",
                "packages/goods/present/index": "g",
                "packages/goods/points/index": "g",
                "packages/goods/seckill/index": "seckg",
                "packages/goods/cart/index": "cart",
                "packages/trade/cart-v1/index": "cart",
                "packages/trade/cart/index": "cart",
                "packages/trade-cart/cart/index": "cart",
                "packages/trade/order/result/index": "od",
                "packages/trade/order-detail/index": "od",
                "packages/trade/order/list-native/index": "ol",
                "packages/trade/order/express/index": "traceDetail",
                "packages/trade/order/safe/info/index": "refundDetail",
                "packages/order-native/index": "trade",
                "packages/trade-buy/order/buy/index": "trade",
                "packages/trade-pay/pay/index": "trade",
                "packages/order-native/address-list/index": "addresslist",
                "packages/order-native/address-edit/index": "editaddress",
                "packages/order-native/address-map/index": "selectaddress",
                "packages/order/paid-v1/index": "paySuccess",
                "packages/paid/pay-result/success/index": "paySuccess",
                "pages-youzan/dashboard/home/index": "yzh",
                "pages-youzan/usercenter/dashboard/index": "uc",
                "pages-youzan/mars/index": "yzc",
                "pages-youzan/shop/new/index": "yzoc",
                "pages-youzan/shop/create-user/step-1/index": "yzom",
                "pages-youzan/shop/create-user/step-2/index": "yzov",
                "pages-youzan/shop/create-user/step-3/index": "yzop",
                "pages-youzan/shop/status/index": "yzo",
                "packages/order-native/share-page/index": "shareorder",
                "packages/paidcontent/list/index?type=content": "pcat",
                "packages/paidcontent/list/index?type=column": "pcam",
                "packages/paidcontent/list/index?type=live": "pcal",
                "packages/paidcontent/list/index": "scpc",
                "packages/paidcontent/content/index": "pct",
                "packages/paidcontent/column/index": "pcm",
                "packages/paidcontent/live/index": "pcl",
                "packages/new-punch/introduction/index": "pci",
                "packages/new-punch/task/index": "pcc",
                "packages/ump/bargain-purchase/home/index": "cutd",
                "packages/ump/helpcut/index": "cutd",
                "packages/collage/lottery/detail/index": "spld",
                "packages/collage/lottery/result/index": "splr",
                "packages/collage/groupon/detail/index": "groupon",
                "packages/card/detail/index": "g",
                "packages/benefit-card/detail/index": "quanyika",
                "packages/user/cashback/list/index": "cashback",
                "packages/user/cashback/detail/index": "cashbackDetail",
                "packages/ump/carve-coupon/index": "carveCoupon",
                "packages/ump/split-coupon-friend/index": "sharecoupon",
                "packages/shop/ump/sign-in/index": "sign",
                "packages/ump/new-lottery/casino/index": "verb",
                "packages/shop/shopnote/detail/index": "shopnote",
                "packages/short-video/index": "shopnote",
                "packages/retail/extra/sales/bi-card/index": "retailvc",
                "packages/retail/chat/index": "retailinfo",
                "packages/levelcenter/free/index": "f",
                "packages/levelcenter/plus/index": "f",
                "pages-retail/home-shelf/index": "retailshelfhome",
                "packages/retail-shelf/shelf/index": "retailshelftee",
                "packages/retail-shelf/search/index": "retailShelfSearch",
                "packages/retail-shelf/goods-detail/index":
                  "retailshelfgoodstee",
                "packages/retail/goods-shelf/index": "retailshelfgoods",
                "packages/retail/shelf-confirm/index":
                  "retailshelforderconfirm",
                "packages/statcenter/cps-goods-list/index": "cpsShopRecommend",
                "packages/ump/discount-packages/index": "packagebuy",
                "packages/shop/salesman/promote/index": "salesmanpromotion",
                "packages/salesman/promote/index": "salesmanpromotion",
                "packages/ext-marketing-page/index": "umpCollection",
                "packages/trade/order-search/index": "orderSearchPage",
                "packages/trade/order/subscription/index":
                  "subscribeToLogistics",
                "packages/guide/promote/goods/index": "guidePromoteGoodsList",
                "packages/shop/levelcenter/free/index": "levelCenterFree",
                "packages/shop/levelcenter/plus/index": "membercenterpay",
              },
            },
            hummer: {
              appKey: "wsc",
              url: "https://tj.youzan.com/v3/weapp/log",
              per: {
                reportRouteRules: {
                  usercenter: [
                    "pages/usercenter/dashboard/index",
                    "pages-retail/usercenter/dashboard-v2/index",
                  ],
                  "order-init": ["packages/trade-buy/order/buy/index"],
                  "search-result": ["packages/goods-list/search-result/index"],
                  "search-page": ["packages/shop/search-page/index"],
                  "goods-group": ["packages/goods-list/tag/index"],
                  "goods-list": ["packages/goods-list/all/index"],
                  "home-dashboard": ["pages/home/dashboard/index"],
                  "goods-detail": ["pages/goods/detail/index"],
                  "goods-detail-sku-popup": ["pages/goods/detail/index"],
                  "trade-cart": [
                    "packages/trade-cart/cart/index",
                    "pages/tab/two/index",
                    "pages/tab/three/index",
                  ],
                },
                tagMerge: { "goods-detail": ["pages/common/blank-page/index"] },
              },
            },
          },
          m: [
            [
              "@passport-tee/user-authorize~DDdJBmWG",
              "@passport-tee/user-authorize",
              {
                d: { kdtId: "@wsc-tee-shop/shop-core~NzurILNk" },
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
                p: {
                  mobileChange: [
                    [
                      "@wsc-tee-shop/chain-store~NPcGxurx",
                      "enterShopAfterLogin",
                    ],
                  ],
                },
              },
            ],
            [
              "@passport-tee/protocol~Duv5tmrK",
              "@passport-tee/protocol",
              {
                w: { CloudProtocolContent: "@passport-tee/protocol~Duv5tmrK" },
              },
            ],
            [
              "@wsc-tee-shop/shop-core~NzurILNk",
              "@wsc-tee-shop/shop-core",
              null,
            ],
            [
              "@wsc-tee-shop/multi-store~yPFckvJB",
              "@wsc-tee-shop/multi-store",
              null,
            ],
            ["@passport-tee/api~VQagPYEc", "@passport-tee/api", null],
            [
              "@wsc-tee-shop/chain-store~NPcGxurx",
              "@wsc-tee-shop/chain-store",
              null,
            ],
            [
              "@ext-tee-wsc-decorate/theme-color~EKBphALO",
              "@ext-tee-wsc-decorate/theme-color",
              null,
            ],
            [
              "@wsc-tee-trade/trade-buy-page-comm~9b4cea5e",
              "@wsc-tee-trade/trade-buy-page-comm",
              null,
            ],
            [
              "@ext-tee-guide/guide-customer-relation-report~tbpKbEUD",
              "@ext-tee-guide/guide-customer-relation-report",
              null,
            ],
            [
              "@wsc-tee-decorate/shop-nav-weapp~GaDMpaUB",
              "@wsc-tee-decorate/shop-nav-weapp",
              {
                w: {
                  BottomTabbarBg: "@wsc-tee-decorate/shop-nav-weapp~GaDMpaUB",
                },
              },
            ],
            [
              "@ext-tee-wsc-decorate/app-style~heOYZJKd",
              "@ext-tee-wsc-decorate/app-style",
              null,
            ],
            [
              "@wsc-tee-salesman/salesman-share-popup~YPDZkFWW",
              "@wsc-tee-salesman/salesman-share-popup",
              {
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                  CloudSalesmanSharePopup:
                    "@wsc-tee-salesman/salesman-share-popup~YPDZkFWW",
                  CloudSalesmanSharePopupHeader:
                    "@wsc-tee-salesman/salesman-share-popup~YPDZkFWW",
                  CloudSalesmanSharePopupTabs:
                    "@wsc-tee-salesman/salesman-share-popup~YPDZkFWW",
                  CloudSalesmanSharePopupCustomTabContent:
                    "@wsc-tee-salesman/salesman-share-popup~YPDZkFWW",
                  CloudSalesmanSharePopupFooter:
                    "@wsc-tee-salesman/salesman-share-popup~YPDZkFWW",
                },
              },
            ],
            [
              "@wsc-tee-common/app-content-append~VAtrAMhi",
              "@wsc-tee-common/app-content-append",
              {
                w: {
                  CloudAppContentAppend:
                    "@wsc-tee-common/app-content-append~VAtrAMhi",
                },
              },
            ],
          ],
          e: [
            ["@passport-tee/user-authorize", n("l+0R")],
            ["@passport-tee/protocol", n("HdG+")],
            ["@wsc-tee-shop/shop-core", n("/vSv")],
            ["@wsc-tee-shop/multi-store", n("3Hme")],
            ["@passport-tee/api", n("TRH1")],
            ["@wsc-tee-shop/chain-store", n("YJen")],
            ["@ext-tee-wsc-decorate/theme-color", n("oZkc")],
            ["@wsc-tee-trade/trade-buy-page-comm", n("8+6a")],
            ["@ext-tee-guide/guide-customer-relation-report", n("mfjW")],
            ["@wsc-tee-decorate/shop-nav-weapp", n("XmI9")],
            ["@ext-tee-wsc-decorate/app-style", n("gU0Q")],
            ["@wsc-tee-salesman/salesman-share-popup", n("zaUH")],
            ["@wsc-tee-common/app-content-append", n("2Iwi")],
          ],
        });
      (() => {
        if (
          (c.default.setGlobal("isRantaApp", !0),
          c.default.getGlobal("ranta-app-runtime"))
        )
          return c.default.getGlobal("ranta-app-runtime");
        c.default.setGlobal("getQueryAsync", (e) => {
          var t = c.default.getGlobal("queryPendingList") || [];
          t.push(e), c.default.setGlobal("queryPendingList", t);
        });
        var e = () => ({
          ready: () => {},
          invoke: () => Promise.resolve(),
          emit: () => {},
          hasDesign: (e) =>
            Array.isArray(e) ? new Array(e.length).fill({}) : {},
        });
        e.pluginName = "cloud";
        var t = new st({
          config: co,
          builtinBundle: {
            "@ext-tee-guide/guide-customer-relation-report": lt,
            "@ext-tee-wsc-decorate/app-style": gt,
            "@ext-tee-wsc-decorate/theme-color": Pt,
            "@passport-tee/api": Dt,
            "@passport-tee/protocol": Nt,
            "@passport-tee/user-authorize": en,
            "@wsc-tee-common/app-content-append": an,
            "@wsc-tee-decorate/shop-nav-weapp": pn,
            "@wsc-tee-shop/chain-store": bn,
            "@wsc-tee-shop/multi-store": jn,
            "@wsc-tee-shop/shop-core": Pn,
            "@wsc-tee-trade/trade-buy-page-comm": Ln,
            "@wsc-tee-salesman/salesman-share-popup": so,
          },
          getQuery: () => {},
          getQueryAsync: () =>
            new Promise(
              (e) =>
                c.default.getGlobal("getQueryAsync") &&
                c.default.getGlobal("getQueryAsync")(e)
            ),
          getPluginLibs: () => [e],
        });
        c.default.setGlobal("ranta-app-runtime", t),
          c.default.mixin({
            usingScope: ["app"],
            onLaunch() {
              Object.defineProperty(this, "$ranta", { get: () => t }),
                t.runPluginsApi("onAppLaunch"),
                t.runAppApi("onAppLaunch");
            },
            onShow(e) {
              t.runPluginsApi("onAppShow", e), t.runAppApi("onAppShow", e);
            },
            onHide() {
              t.runPluginsApi("onAppHide"), t.runAppApi("onAppHide");
            },
          }),
          c.default.mixin({
            usingScope: ["page"],
            beforeCreate() {
              var e = this._$native,
                t = Object(uo.a)(e),
                n = Symbol.for("vm");
              t !== e && void 0 === t[n] && (t[n] = e[n]);
            },
          }),
          c.default.mixin({
            usingScope: ["component"],
            beforeCreate() {
              if (void 0 === this.$root) {
                var e = Symbol.for("vm"),
                  t = this._$native,
                  n = Object(uo.a)(t);
                n[e] && (t[e].$root = n[e].$root);
              }
            },
          }),
          c.default.mixin({
            usingScope: ["component"],
            props: { rmId: String, nr: Boolean, _rm: Object, _rw: Object },
            data() {
              if (
                this.rmId &&
                !this.rmId.includes("cloud-adapter") &&
                this.$root &&
                this.$root.aWrDjnqdPEch
              ) {
                var e = this.$root.aWrDjnqdPEch.getModuleContext(this.rmId, {
                    onlyCtx: !1,
                  }),
                  t = e.hasOwnProperty("store") && !e.moduleId,
                  n = t ? e.ctx : e;
                if (
                  (t && (this.store = e.store),
                  this.nr && n.event && n.event.listenWithReplay)
                ) {
                  this.enableRantaReplay = !0;
                  var { listen: o, listenWithReplay: r } = n.event;
                  (this.ctx = n),
                    (this.ctx.event.listen = (e, t, n) =>
                      this.enableRantaReplay ? r(e, t, n) : o(e, t, n)),
                    (this.rantaListen = o);
                } else this.ctx = n;
              }
              return {};
            },
            created() {
              this.enableRantaReplay &&
                setTimeout(() => {
                  (this.enableRantaReplay = !1),
                    this.ctx &&
                      this.ctx.event &&
                      this.rantaListen &&
                      ((this.ctx.event.listen = this.rantaListen),
                      (this.rantaListen = void 0));
                }, 0),
                this.$once("hook:destroyed", () => {
                  this.rmId && this.store && (this.store = null),
                    (this.rantaListen = void 0);
                });
            },
          });
      })();
      var po = n("M+mJ"),
        lo = n("DXKY"),
        fo = n("9KEa"),
        ho = n("z24M"),
        go = function (e) {
          return (
            void 0 === e && (e = ""),
            (e.split("!") || [])
              .map((e) => e.split("~"))
              .filter((e) => e.length > 1)
              .reduce((e, t) => {
                var [n, o] = t;
                return (e[n] = o), e;
              }, {})
          );
        },
        mo = n("882d"),
        vo = n("QTc8").a,
        bo = n("WLNV"),
        yo = n("+fxQ"),
        xo = { appId: "", version: "" },
        _o = (e) => {
          var t = Object(u.a)({ is_weapp: 1, client: "weapp" }, xo);
          return (
            (e = Object(bo.a)({}, e, {
              header: { "Extra-Data": JSON.stringify(t) },
            })),
            new Promise((t, n) => {
              var { success: o, fail: r, complete: i } = e;
              (e.success = (e) => {
                try {
                  o ? o(e) && t(e) : t(e), i && i(e);
                } catch (e) {}
              }),
                (e.fail = (t) => {
                  lo.a.trigger("downloadFile:fail", {
                    options: e,
                    response: t,
                  }),
                    r ? r(t) && n(t) : n(t),
                    i && i(t);
                }),
                Object(yo.c)(e.url, yo.a.DOWNLOAD)
                  .catch(() => e.url)
                  .then((t) => {
                    wx.downloadFile(Object(u.a)({}, e, { url: t }));
                  });
            })
          );
        },
        ko = n("jA1y"),
        jo = n("lOyf"),
        Oo = n("LHcj"),
        So = ["onPageNotFound"];
      function Po(e, t, n, o) {
        (!o && e[t]) || (o && e[t] && So.indexOf(t), (e[t] = n));
      }
      var Io = {};
      Io.extConfig = Object(ho.a)() || {};
      var Co = n("eijD"),
        Ao = n("U0uK"),
        Eo = n("Yt9W"),
        wo = n("OPDa"),
        Ro = n("PKOW");
      function Do(e, t) {
        void 0 === e && (e = ""), void 0 === t && (t = {});
        var n = "/" === e.slice(0, 1) ? e : "/" + e;
        return _n.a.add(n, t);
      }
      function To(e, t) {
        void 0 === e && (e = ""),
          void 0 === t && (t = {}),
          wx.redirectTo({ url: Do(e, t) });
      }
      function Lo(e, t) {
        void 0 === e && (e = ""),
          void 0 === t && (t = {}),
          wx.reLaunch({ url: Do(e, t) });
      }
      function Mo(e, t) {
        void 0 === e && (e = ""), void 0 === t && (t = {});
        var { goodsAlias: n, alias: o } = t;
        To(
          e,
          Object(u.a)({}, t, { alias: n || o, umpType: "seckill", umpAlias: o })
        );
      }
      function Bo(e) {
        Object(Ro.f)({ pageType: e, type: Ro.a.REDIRECT });
      }
      function Fo() {
        Bo(Ro.b.CART);
      }
      function Ho() {
        Bo(Ro.b.PAID);
      }
      var zo = "packages",
        Uo = zo + "/home",
        No = null,
        qo = !1,
        Go = (function () {
          var e = Object(Co.a)(function* () {
            if (No && qo) return No;
            var e = yield getApp()
                .request({ path: "/wscshop/weapp/redirect_mapping.json" })
                .then((e) => ((qo = !0), e))
                .catch(() => ({})),
              t = {};
            return (
              Object.keys(e).forEach((n) => {
                t[n] = { target: e[n], handle: To };
              }),
              (No = Object(u.a)({}, t, {
                "packages/goods-v2/cart/index": { target: "", handle: Fo },
                "packages/goods-v3/cart/index": { target: "", handle: Fo },
                "packages/goods-v3/seckill/index": {
                  target: "pages/goods/detail/index",
                  handle: Mo,
                },
                "packages/retail/freego-usercenter/index": {
                  target: "packages/retail/usercenter/dashboard-v2/index",
                  handle: To,
                  query: { isRetail: "1" },
                },
                [Uo + "/dashboard/index"]: {
                  target: "pages/home/dashboard/index",
                  handle: Lo,
                },
                [Uo + "/feature/index"]: {
                  target: "pages/home/feature/index",
                  handle: To,
                },
                [Uo + "/tab/one"]: { target: "pages/home/tab/one", handle: To },
                [Uo + "/tab/two"]: { target: "pages/home/tab/two", handle: To },
                [Uo + "/tab/three"]: {
                  target: "pages/home/tab/three",
                  handle: To,
                },
                "packages/order/paid/index": { target: "", handle: Ho },
                "packages/crm/order-detail/index": {
                  target: "packages/trade/crm-order-detail/index",
                  handle: To,
                },
              }))
            );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Wo = n("pfnQ"),
        Ko = {};
      try {
        var { titleMap: Qo } = n("iBc5");
        Ko = Object(u.a)({}, Qo);
      } catch (e) {}
      var Vo = Ko,
        $o = n("7sy2"),
        Yo = [
          "is_share",
          "dc_ps",
          "banner_id",
          "from_source",
          "wxShoppingListScene",
        ];
      function Jo(e, t) {
        var n = ["pageshow", "speedindex", "pagefinished"];
        function o(n, o, r, i, a) {
          var s;
          void 0 === i && (i = !1);
          var c = {},
            d = {},
            p = !1,
            l = "";
          return (f, h, g, m) => {
            if (!p) {
              m && -1 === o.indexOf(m) && o.push(m);
              var v = g;
              if (i && !v) {
                var b = getCurrentPages() || [];
                v = (b[b.length - 1] || {}).route;
              }
              if (
                (f === r
                  ? ((s = Date.now()), i && (l = v))
                  : o.indexOf(f) > -1 &&
                    s &&
                    (!i || l === v) &&
                    ((d[f] = !0), h || (c[f] = Date.now() - s)),
                (p = o.map((e) => d[e]).every((e) => e)))
              ) {
                var y = (function (e) {
                  var t = {};
                  if (e) {
                    var n = Object.keys(e);
                    n &&
                      n.length > 0 &&
                      n.forEach((n) => {
                        t = Object(u.a)({}, t, { ["en_" + n]: +e[n] });
                      });
                  }
                  return t;
                })(c);
                t.log({
                  et: "custom",
                  ei: "performance",
                  en: "小程序启动性能",
                  params: Object(u.a)(
                    { scope: n, route: i ? l : void 0 },
                    c,
                    y
                  ),
                  si: e.getKdtId(),
                }),
                  a && ((s = null), (c = {}), (d = {}), (p = !1), (l = ""));
              }
            }
          };
        }
        var r = {
          app: o("app", ["applogin", "appinit", "pageshow"], "applaunch"),
          page: o("page", n, "pageload", !0, !0),
        };
        return function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          r[e](...n);
        };
      }
      var Zo = [],
        Xo = function (e, t) {
          var n = e.getAppId(),
            o = {};
          try {
            (o = (function () {
              var { kdtId: e } = Object(Ao.a)(),
                t = {
                  plat: { yai: "wsc_c" },
                  autoUUID: !1,
                  appName: "wsc",
                  logIndex: "wsc_weapp_log",
                  traceable: !0,
                },
                n = new Eo.b(t);
              return (
                n.setEvent({ si: e || "" }, "instance"),
                n.setPageTitleMap(Vo),
                n
              );
            })()).setBeforeAppshow((t, n) => {
              Object(Eo.h)(t, e), Object(Eo.g)(e, n);
            }),
              o.setBeforeEnterpage((e) => {
                var t = getCurrentPages(),
                  n = t[t.length - 1];
                n && Object(Eo.c)(n.options), Object(Eo.h)(e);
              }),
              lo.a.on("logger:skynet", (e) => {
                o.appError(e);
              }),
              lo.a.on("shop:kdt_id:change", (e) => {
                o.setShopId(e);
              }),
              lo.a.on("request:server:fail", (e) => {
                var t = {},
                  {
                    requestOptions: {
                      _options: { query: n = {} },
                    },
                  } = e,
                  r = n.order_no || n.orderNo;
                r && (t.orderNo = r),
                  o.requestError(
                    Object(u.a)(
                      {
                        name: "request server fail",
                        message: "请求服务端出现错误",
                        detail: e,
                      },
                      t
                    )
                  );
              }),
              lo.a.on("request:business:fail", (e) => {
                o.appError({
                  name: "request business fail",
                  message: "请求处理逻辑发生错误",
                  detail: e,
                });
              }),
              lo.a.on("request:code:fail", (e) => {
                var t = {},
                  {
                    requestOptions: {
                      _options: { query: n = {} },
                    },
                  } = e,
                  r = n.order_no || n.orderNo;
                r && (t.orderNo = r),
                  o.requestError(
                    Object(u.a)(
                      {
                        name: "request code fail",
                        message: "请求响应了一个错误的 code",
                        detail: e,
                      },
                      t
                    )
                  );
              }),
              lo.a.on("request:api:fail", (e) => {
                o.appError({
                  name: "request api fail",
                  message: "wx.request 接口调用失败",
                  detail: e,
                });
              }),
              lo.a.on("downloadFile:fail", (e) => {
                o.appError({
                  name: "downloadFile fail",
                  message: "downloadFile 调用失败",
                  detail: e,
                });
              });
          } catch (e) {
            var r = () => ({});
            [
              "addSessionParams",
              "setBizInfo",
              "appShow",
              "appHide",
              "pageShow",
              "pageHide",
              "log",
              "setShopId",
              "setPageName",
              "setPageParams",
              "getGlobal",
              "appError",
              "requestError",
            ].forEach((e) => (o[e] = r)),
              (o.pageEvent = {});
          }
          !(function (e, t) {
            void 0 === t && (t = {}),
              wx.onMemoryWarning &&
                wx.onMemoryWarning((n) => {
                  e.appError &&
                    e.appError({
                      name: "memory-warning",
                      message: "小程序内存较少",
                      detail: Object(u.a)({}, t, { level: n }),
                    });
                });
          })(o, { appId: e.getAppId(), appVersion: e.getVersion() }),
            (o.updateSession = (function (e, t) {
              var { userVersion: n } = Object(Ao.a)();
              return function (o) {
                var r = o.query || {},
                  i = Object.keys(r),
                  a = i.filter((e) => Yo.indexOf(e) >= 0);
                a.length &&
                  this.addSessionParams(
                    Object(u.a)(
                      {},
                      t,
                      a.reduce(
                        (e, t) => (
                          (e[t] = r[t]),
                          "dc_ps" === t &&
                            ((e.dc_ps_utime = parseInt(Date.now() / 1e3, 10)),
                            Oo.d.set("logv3:dc_ps", r.dc_ps, {
                              expire: 3 / 24,
                            })),
                          e
                        ),
                        {}
                      )
                    ),
                    120
                  );
                var s = r.from_params;
                Object($o.c)(s) &&
                  this.addSessionParams({ from_params: s }, 1440),
                  o.clickId &&
                    this.addSessionParams({ click_id: o.clickId }, 43200),
                  this.addSessionParams({ weapp_version: n }),
                  this.addSessionParams(
                    JSON.parse(JSON.stringify({ appId: e, scene: o.scene })),
                    5256e3
                  ),
                  i.indexOf("wecom_uuid") >= 0 &&
                    this.addSessionParams({ wecom_uuid: o.query.wecom_uuid });
              };
            })(n, e.config.context)),
            (o.performance = Jo(e, o)),
            (o.addFromLinkRecord = (function (e) {
              return function (t) {
                var { query: n } = t;
                if (n && n.fromLink) {
                  var { kdtId: o } = Object(Ao.a)();
                  e.log({
                    et: "display",
                    ei: "enterpage",
                    en: "浏览页面",
                    pt: "linkJumpWeapp",
                    params: { spm: "linkJumpWeapp", kdtId: o },
                  });
                }
              };
            })(o));
          var { pageShow: i } = o;
          function a() {
            if (e.hasToken() && (e.getKdtId() || !e.needUpdateKdtIdByServer()))
              for (var t = null; (t = Zo.shift()); ) t.call(null);
          }
          e.once("app:token:success", (e) => {
            o.setUuid(e.platformFansId),
              setTimeout(() => {
                Object(Eo.h)(o), a();
              }, 100);
          }),
            (o.pageShow = (e, t) => {
              Object(Eo.h)(o), Zo.push(() => i.call(o, e, t)), a();
            }),
            (o.skynetLog = (t) => {
              Wo.a.log(
                Object(u.a)({}, t, {
                  name: t.name || "app-log",
                  extra: Object(u.a)({}, t.extra, {
                    appId: e.getAppId(),
                    kdtId: e.getKdtId(),
                    buyerId: e.getBuyerId(),
                    appVersion: e.getVersion(),
                    loggerParams: o.getLogParams && o.getLogParams(),
                  }),
                })
              );
            }),
            (o.appError = (e) => {
              o.skynetLog(Object(u.a)({}, e, { name: e.name || "app-error" }));
            }),
            (o.requestError = (e) => {
              o.skynetLog(
                Object(u.a)({}, e, {
                  name: e.name || "request-error",
                  extra: Object(u.a)({}, e.extra, { orderNo: e.orderNo || "" }),
                })
              );
            }),
            t(e, "logger", o, !0),
            t(
              e,
              "onPageNotFound",
              (function (e) {
                return (function () {
                  var t = Object(Co.a)(function* (t) {
                    var { path: n, query: o } = t,
                      r = (yield Go())[n];
                    if (!r)
                      return (
                        e.appError({
                          message: "请求到未被监控的路径",
                          alert: "warn",
                          detail: { path: n, query: o },
                        }),
                        wx.reLaunch({ url: "" })
                      );
                    var { target: i, handle: a, query: s } = r;
                    s && Object.assign(o, s), a && a(i, o);
                    var u = getApp();
                    e.appError({
                      message: "请求到已经替换的路径",
                      detail: {
                        path: n,
                        query: o,
                        isRetail: u.globalData && u.globalData.isRetailApp,
                        spm: wo.a.getSpm(),
                      },
                    });
                  });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })();
              })(o),
              !0
            );
        },
        er = {
          clientId: "4d65249d377b2c3ed8",
          clientSecret: "1cdc05151d64f3a4a6ebd0e9de64422a",
          common: { yzLogo: "https://img01.yzcdn.cn/weapp/wsc/XcFX4r.png" },
        },
        tr = function (e) {
          var { common: t, clientId: n, clientSecret: o } = er;
          (e.config = e.config || {}),
            (Io.config = Object.assign(er, e.config)),
            e.config.clientId ||
              ((e.config.clientId = n), (e.config.clientSecret = o)),
            e.config.clientSecret ||
              ((e.config.clientId = n), (e.config.clientSecret = o)),
            Object(jo.a)() && Po(e, "deviceType", "iPhone-X"),
            Po(e, "themeClass", "th0"),
            Po(e.config, "common", t, !0),
            Po(e.globalData, "copyright", {
              logo: e.config.common.yzLogo,
              isCustomized: !1,
            }),
            Po(e.globalData, "themeData", {
              themeClass: "th0",
              isFantasy: !1,
              themeFetched: !1,
            }),
            (function (e, t) {
              t(e, "getVersion", () => Io.extConfig.userVersion || "", !0),
                t(
                  e,
                  "getAppId",
                  () => Io.extConfig.appId || Io.config.appId || "",
                  !0
                ),
                t(e, "getExtConfig", () => Io.getExtConfig, !0),
                t(e, "getExtKdtId", () => {
                  var { extConfig: e = {} } = Io;
                  return e.kdtId || 0;
                }),
                t(e, "getDeviceType", () => e.deviceType),
                t(e, "getPoints", () =>
                  e.request({ path: "wscump/integral/user_points.json" })
                ),
                t(e, "getPointsName", () =>
                  e.requestUseCdn({
                    path: "/wscuser/membercenter/pointsName.json",
                  })
                );
            })(e, Po),
            Xo(e, Po),
            e.$store.commit("UPDATE_CONFIG", {
              appId: e.getAppId(),
              clientId: er.clientId,
              clientSecret: er.clientSecret,
            });
          var r,
            i = { appId: e.getAppId(), version: e.getVersion() };
          Po(e, "db", vo, !0),
            Po(e, "storage", Oo.d, !0),
            Object(ko.e)(i),
            (r = i),
            (xo = Object(u.a)({}, xo, r)),
            Po(e, "carmen", ko.b, !0),
            Po(e, "request", ko.c, !0),
            Po(e, "requestUseCdn", ko.d, !0),
            Po(e, "downloadFile", _o, !0),
            e.globalData.isRetailApp && Po(e, "baymax", ko.a, !0);
        };
      function nr(e, t) {
        !e &&
          (function (e) {
            throw new Error(e);
          })(t);
      }
      var or = n("fZnw"),
        rr = n("AqAW"),
        ir = n("zMoS"),
        ar = n("x5Yp"),
        sr = n("taYb"),
        ur = (n("E2le"), "passport-tee-login-end"),
        cr = n("mlg6"),
        dr = n("sbwY"),
        pr = n("ZIOE"),
        { state: lr, commit: fr } = dr.a,
        hr = null;
      function gr(e, t) {
        lo.a.trigger("logger:skynet", { message: e, detail: t });
      }
      function mr() {
        var e = {};
        try {
          var t,
            n,
            o =
              null == (t = wx) || null == t.getEnterOptionsSync
                ? void 0
                : t.getEnterOptionsSync(),
            r =
              null == (n = wx) || null == n.getLaunchOptionsSync
                ? void 0
                : n.getLaunchOptionsSync();
          e = o || r;
        } catch (e) {
          gr("静默登录获取 enterOptions 异常", e);
        }
        return "object" == typeof e && null !== e ? e : {};
      }
      function vr(e) {
        e.cache ||
          ((e.yzUserId = e.yzUserId || e.userId),
          (e.userId = e.platformFansId),
          (e.userPrivacyDto = e.userPrivacyDto || {}),
          (e.userPrivacyDto.kdtId =
            e.userPrivacyDto.kdtId || e.userPrivacyDto.current_kdtid));
        var t = (function (e) {
          try {
            Object.keys(e).forEach((t) => {
              "number" == typeof e[t] && (e[t] += "");
            });
          } catch (e) {}
          return e;
        })(sr.a.toCamelCase(e));
        return (
          ko.g(t),
          fr("UPDATE_TOKEN", t),
          lo.a.trigger("app:token:success", t),
          rr.a.trigger("app:token:success", t),
          !e.cache && Oo.d.setAsync("app:token", t, { expire: 0.8 }),
          t
        );
      }
      function br(e) {
        return (
          void 0 === e && (e = () => {}),
          getApp()
            .resolveTeeAPI()
            .then((t) => t.forceLogin().then(e).catch(e))
        );
      }
      function yr() {
        return getApp()
          .resolveTeeAPI()
          .then((e) => e.login());
      }
      function xr() {
        return (
          hr || (hr = Object(or.b)("wx.checkSession")),
          hr
            .then(() => {
              yr(), (hr = null);
            })
            .catch(() => {
              getApp()
                .resolveTeeAPI()
                .then((e) => e.forceLogin()),
                (hr = null);
            })
        );
      }
      function _r(e) {
        var t = wx.getStorageSync("app:token");
        t &&
          wx.setStorage({
            key: "app:token",
            data: Object(u.a)({}, t, { value: Object(u.a)({}, t.value, e) }),
          });
      }
      Object(cr.f)((e) => e.value),
        Object(cr.h)(() => Object(ar.a)(lr.pluginData)),
        Object(cr.i)((e) => {
          gr("wx.login fail", {
            error: (e = "object" == typeof e ? e.errMsg : "微信登录失败"),
          });
        }),
        Object(cr.g)(() => {
          var e,
            t = (e) =>
              "[auth]loginYouzan: " +
              e +
              " 必须，请在程序启动时设置项目配置信息",
            { config: n, pluginData: o } = lr;
          nr(n.appId, t("appId")),
            nr(n.clientId, t("clientId")),
            nr(n.clientSecret, t("clientSecret")),
            fr("UPDATE_TOKEN", {}),
            (n = Object(xt.a)(n, ["appId", "clientId", "grantType"])),
            (o = Object(xt.a)(o, ["pluginHostAppId", "pluginHostOpenId"]));
          var { query: r } =
              null == (e = wx) || null == e.getLaunchOptionsSync
                ? void 0
                : e.getLaunchOptionsSync(),
            i = Object($o.a)(r),
            a = {
              enterOptions: Object(u.a)(
                { extKdtId: Object(ho.a)("kdtId") },
                mr()
              ),
              guideBizDataMap: i,
              sceneData: lr.sceneData,
            };
          return Object(u.a)({}, n, o, {
            inWsc: !0,
            kdtId: Object(pr.getKdtId)() + "",
            extraBizData: a,
          });
        }),
        Object(cr.j)((e) => {
          gr("loginYouzan fail", e);
        }),
        At.default.on(Ct.TEE_LOGIN_SILENT_BEFORE_EVENT, () => {
          lo.a.trigger("app:before:login"), rr.a.trigger("app:before:login");
        }),
        At.default.on(Ct.TEE_LOGIN_PLAT_SUCCESS_EVENT, (e) => {
          lo.a.trigger("app:wx:login:success");
        }),
        At.default.on(Ct.TEE_LOGIN_YZ_BEFORE_EVENT, () =>
          rr.a.trigger("app:before:token")
        ),
        At.default.on(ur, vr);
      var kr,
        jr = n("3Hke"),
        Or = n("BM4D"),
        Sr = n("R18q"),
        { authorizeHook: Pr } = Ct.hooks;
      function Ir() {
        return (
          kr ||
            (kr = n
              .e("packages/async-tee/chunk")
              .then(n.bind(null, "JvWB"))
              .then((e) => e.default)
              .catch((e) => {
                throw ((kr = null), e);
              })),
          kr
        );
      }
      function Cr() {
        return n.e("packages/async-main/chunk").then(n.t.bind(null, "HsSF", 7));
      }
      var { state: Ar, commit: Er } = dr.a,
        wr = () => {};
      function Rr(e, t) {
        lo.a.trigger("logger:skynet", { message: e, detail: t });
      }
      var Dr = { skipToken: !0, skipKdtId: !0, skipShopInfo: !0 };
      function Tr() {
        setTimeout(() => {
          wx.showModal({
            title: "登录失败",
            content: "登录失败可能导致应用无法使用，你可以再试试或退出小程序",
            confirmText: "再试试",
            showCancel: !1,
            success: () => {
              var e = getApp();
              e.login(() => {
                e.hasToken() && wx.showToast({ title: "登录成功" });
              });
            },
          });
        }, 10);
      }
      var Lr = null;
      function Mr(e, t) {
        return (
          void 0 === e && (e = () => {}),
          void 0 === t && (t = 6),
          lo.a.trigger("app:before:login"),
          rr.a.trigger("app:before:login"),
          t <= 0
            ? (Tr(), Promise.reject())
            : (Lr =
                Lr ||
                Object(or.b)("wx.login")
                  .catch((e) => {
                    throw (
                      (Rr("wx.login fail", {
                        error: (e =
                          "object" == typeof e ? e.errMsg : "微信登录失败"),
                      }),
                      (Lr = null),
                      new Error(e))
                    );
                  })
                  .then((n) => {
                    var { code: o } = n;
                    return (
                      lo.a.trigger("app:wx:login:success"),
                      (function (e) {
                        var t = (e) =>
                            "[auth]loginYouzan: " +
                            e +
                            " 必须，请在程序启动时设置项目配置信息",
                          { config: n, pluginData: o } = Ar;
                        return (
                          nr(n.appId, t("appId")),
                          nr(n.clientId, t("clientId")),
                          nr(n.clientSecret, t("clientSecret")),
                          Er("UPDATE_TOKEN", {}),
                          (n = Object(xt.a)(n, [
                            "appId",
                            "clientId",
                            "clientSecret",
                            "grantType",
                          ])),
                          (o = Object(xt.a)(o, [
                            "pluginHostAppId",
                            "pluginHostOpenId",
                          ])),
                          rr.a.trigger("app:before:token"),
                          ko.c({
                            method: "POST",
                            config: Dr,
                            path: "wscshop/weapp/authorize.json",
                            data: Object(u.a)({ code: e }, n, o),
                          })
                        );
                      })(o)
                        .then(
                          (t) => (
                            (t = (function (e, t) {
                              void 0 === t && (t = !1),
                                ((e = sr.a.toCamelCase(e)).tokenVersion = "2"),
                                ko.g(e),
                                Object(mt.setRequestDep)(e),
                                Er("UPDATE_TOKEN", e),
                                lo.a.trigger("app:token:success", e),
                                At.default.trigger("app:token:success", e),
                                rr.a.trigger("app:token:success", e),
                                !t &&
                                  Oo.d.setAsync("app:token", e, {
                                    expire: 0.8,
                                  });
                            })(t)),
                            (Lr = null),
                            e(),
                            t
                          )
                        )
                        .catch((n) => {
                          if (
                            (Rr("loginYouzan fail", n),
                            e(),
                            (Lr = null),
                            135000025 === o || 160210092 === o)
                          )
                            return (
                              setTimeout(() => {
                                Mr(() => {}, t - 1);
                              }, 100),
                              Promise.reject()
                            );
                          if (135000028 === o)
                            return (
                              wx.showModal({
                                title: "登录失败",
                                content:
                                  "获取商家信息失败，请联系商家获取最新小程序",
                                showCancel: !1,
                              }),
                              Promise.reject()
                            );
                          throw (Tr(), new Error(n));
                        })
                    );
                  }))
        );
      }
      function Br(e) {
        var { token: t } = Ar;
        return e ? t[e] : t;
      }
      function Fr() {
        return !Object(ar.a)(Ar.token);
      }
      function Hr() {
        return Br("accessToken") || null;
      }
      function zr() {
        return Br("fansType") || 1343;
      }
      function Ur() {
        return Br("sessionId") || null;
      }
      function Nr() {
        return Br("buyerId") || null;
      }
      function qr() {
        return Br("mobile") || null;
      }
      function Gr(e) {
        var { userInfo: t } = Ar;
        return e ? Object(ir.a)(t, e) : t;
      }
      function Wr(e) {
        void 0 === e && (e = {}), Er("UPDATE_USER_INFO", e);
      }
      var Kr = (e) => {
          var t = { userInfo: Object(u.a)({}, e) };
          (getApp().globalData.userInfo = t), _r(e), Wr(Object(u.a)({}, e));
        },
        Qr = (e) => {
          var { privacyState: t } = e,
            { nickname: n, avatar: o, mobile: r, gender: i } = e.userInfo,
            a = t.nicknameAndAvatar,
            s = a ? n : "",
            c = a ? o : "",
            d = t.mobile ? r : "";
          return Object(u.a)({}, e.userInfo, {
            nickname: s,
            nickName: s,
            avatar: c,
            avatarUrl: c,
            gender: i,
            mobile: d,
          });
        };
      function Vr(e) {
        return Ir().then((t) => {
          var { kdtId: n = getApp().getKdtId() } = e || {};
          return t.getAuthorizeData(Object(u.a)({}, e, { kdtId: n }));
        });
      }
      function $r(e, t) {
        void 0 === e && (e = wr),
          void 0 === t && (t = wr),
          Vr()
            .then((t) => {
              var n = Qr(t);
              if (!n.nickName) throw new Error("头像昵称未授权");
              Kr(n), e({ userInfo: n });
            })
            .catch((e) => {
              var n = e.message || "头像昵称更新失败";
              t({ errMsg: n, message: n });
            });
      }
      function Yr() {
        return Cr().then((e) => e.clearProtocolCache());
      }
      function Jr() {
        Ct.platform.onNeedPrivacyAuth((e) => {
          var { eventInfo: t } = e;
          Cr().then((e) => {
            var { InvokeProtocol: n } = e;
            return new n().auth({
              bizType: "weapp-privacy",
              bizData: { eventInfo: t },
              timeout: 0,
            });
          });
        });
      }
      function Zr(e) {
        return Ir().then((t) => {
          var n = getApp(),
            { kdtId: o = n.getKdtId() } = e || {};
          return t.prefetchUserAuthData({
            kdtId: o,
            appId: n.getAppId(),
            ignoreCache: !0,
          });
        });
      }
      function Xr(e) {
        return Ir().then((t) => {
          var n = getApp(),
            { kdtId: o = n.getKdtId() } = e || {};
          return t.refreshUserAuthData({ kdtId: o, appId: n.getAppId() });
        });
      }
      function ei(e) {
        return Xr(e).finally(() => {
          Object(Ct.emitUserAuthSync)();
        });
      }
      Ct.cache.set("CACHE_PASSPORT_TEE_API", Ir()),
        lo.a.on("auth:login", Mr),
        lo.a.once("app:after-bootstrap", (e) => {
          e.on("app:chainstore:kdtid:update", (e) => {
            var { kdtId: t } = e;
            Yr(), ei({ kdtId: t });
          });
        }),
        Pr.mobileChange.set(() => Object(jr.a)());
      Pr.buttonClickAfter.set(() => {
        Sr.a.mark.start("user-auth-popup");
      }),
        Pr.popupShowAfter.set(() => {
          Sr.a.mark.end("user-auth-popup");
        }),
        Object(Ct.onUserAuthSuccess)(function (e) {
          var t = getApp(),
            { authTypeList: n = [], userDeny: o } = e || {},
            r = (e) => {
              o ||
                n.forEach((t) => {
                  if ("protocol" !== t) {
                    if ("nicknameAndAvatar" !== t) {
                      if ("mobile" === t) {
                        var { mobile: n } = e;
                        rr.a.trigger("app:account:authorized", {
                          type: "mobile",
                          detail: { mobile: n },
                        });
                      }
                    } else {
                      var { nickName: o, avatarUrl: r, gender: i } = e;
                      rr.a.trigger("app:account:authorized", {
                        type: "userInfo",
                        detail: { nickName: o, avatarUrl: r, gender: i },
                      });
                    }
                  } else
                    rr.a.trigger("app:account:authorized", {
                      type: "protocol",
                      detail: {},
                    });
                });
            };
          return Vr({ kdtId: t.getKdtId() })
            .then((e) => {
              var t = Qr(e);
              Kr(t), r(t);
            })
            .catch((e) => {
              var { userInfo: n = {} } = t.globalData.userInfo || {};
              throw (r(n), e);
            });
        }),
        Object(Or.b)(() => ei()),
        Ct.cache.set("CACHE_ACCOUNT_INIT", !0);
      var ti = n("rBuL"),
        ni = n("Mqxx"),
        { state: oi, commit: ri } = dr.a,
        ii = (e) => Object(xn.n)(Object(pr.getKdtId)(), e),
        ai = () =>
          Object(xn.l)(Object(pr.getKdtId)(), Object(xn.d)()).then(
            (e) => (
              (e = ((e) => {
                if (void 0 !== e.is_opening) return e;
                var {
                    id: t = 0,
                    phone: n = {},
                    name: o = "",
                    images: r = [],
                    address: i = {},
                    businessTimeSettingString: a = "",
                    opening: s = !1,
                  } = e,
                  { areaCode: u = "", localNumber: c = "" } = n,
                  {
                    city: d = "",
                    district: p = "",
                    lat: l = 0,
                    lng: f = 0,
                    province: h = "",
                  } = i;
                return {
                  id: t,
                  phone1: u,
                  phone2: c,
                  name: o,
                  image: r,
                  province: h,
                  city: d,
                  area: p,
                  address: (i && i.address) || "",
                  lat: l,
                  lng: f,
                  business_hours_advanced_text: a,
                  is_opening: s ? "1" : "0",
                };
              })(e)),
              Array.isArray(e.image) && e.image[0]
                ? (e.image = e.image[0])
                : (e.image = Object(ir.a)(oi.shop, "base.logo")),
              e
            )
          ),
        si = (e) => {
          var { store: t } = e,
            n = Object(Oo.a)("current_share_offline_id") || 0;
          n && ((t.offline_id = n), Object(Oo.b)("current_share_offline_id")),
            Object(xn.g)({ targetOfflineId: +n })
              .then((e) => {
                if (((t.offline_id = e), e)) {
                  var n = Object(xn.k)();
                  n &&
                    ri(
                      "UPDATE_USER_INFO",
                      Object.assign(oi.userInfo, {
                        poi: {
                          location: { lat: n.latitude, lng: n.longitude },
                        },
                      })
                    );
                }
                ((e) => {
                  var t = getApp();
                  if (((t.globalData.fetchedShop = !0), !e))
                    return (
                      t.trigger("app:fetchshopinfo:fail"),
                      void t.trigger("app:fetchedshopinfo")
                    );
                  var {
                      auto_entry_store: n,
                      is_multi_store: o,
                      offline_id: r,
                      sold_out_recommend: i,
                      open_hide_store: a,
                    } = e,
                    s = {};
                  (s.isMultiStore = o),
                    (s.soldOutRecommend = i),
                    (s.offlineId = r),
                    (s.autoEntryStore = n),
                    (s.openHideStore = a),
                    s.isMultiStore || delete s.offlineId,
                    ui(s.offlineId),
                    t.setShopInfo(s),
                    s.isMultiStore &&
                      !t.getOfflineId() &&
                      (t.trigger("app:init:nostoreid"),
                      At.default.trigger("app:init:nostoreid")),
                    t.trigger("app:fetchshopinfo:success"),
                    t.trigger("app:fetchedshopinfo");
                })(t);
              })
              .catch((e) => {});
        };
      function ui(e, t, n) {
        void 0 === n && (n = {});
        var o = getApp() || {},
          r = Object(xn.d)();
        return (
          ko.f({ offlineId: e }),
          (!e && 0 !== e) || r === e || +r == +e
            ? (t && t(!0), Promise.resolve())
            : Object(xn.o)(e).then(
                () => (
                  (oi.shop.offlineId = e),
                  o.trigger && o.trigger("app:offlineId:change", t, n),
                  ai().then((e) => Object(pr.setShopInfo)({ store: e }))
                )
              )
        );
      }
      function ci() {
        lo.a.on("app:multi:store:resolved", si);
      }
      function di() {
        return Object(ir.a)(oi, "shop.store", {});
      }
      var pi = n("f9/1");
      var li = n("dAi7"),
        fi = function (e) {},
        hi = n("wfgx"),
        gi = n("vpHN"),
        mi = n("OMz+"),
        vi = n("lRMv"),
        bi = n("QFll"),
        yi = n("YeA1"),
        xi = n("ONqW"),
        _i = n("l8Ce");
      var ki = (e) => {
        return ((t = e),
        Object(ko.c)({
          path: "/wscsalesman/promotion/promote/goodsDMC.json",
          method: "GET",
          data: t,
          timeout: 1e3,
        }))
          .then((t) => {
            var {
              supportDirect: n,
              promotePath: o,
              promoteQuery: r,
              redirectPath: i,
            } = t;
            return (
              wx.setStorage({
                key: "salesPromote-" + e.alias,
                data: { supportDirect: n },
              }),
              n
                ? Promise.resolve({
                    promotePath: o,
                    promoteQuery: r,
                    redirectPath: i,
                  })
                : Promise.reject()
            );
          })
          .catch(() => Promise.reject());
        var t;
      };
      var ji = function (e, t) {
          this.prefetchCache || (this.prefetchCache = {}),
            (this.prefetchCache[e] = { value: t, expiredAt: Date.now() + 6e3 }),
            setTimeout(() => {
              delete this.prefetchCache[e];
            }, 6e3);
        },
        { dmc: Oi } = Object(yi.a)();
      function Si(e, t) {
        Object(xi.a)().log({
          et: "custom",
          ei: "dmc_available_duration",
          en: "dmc首次获取数据耗时",
          pt: "dmc",
          params: Object(u.a)({ duration_time: Date.now() - e }, t),
        });
      }
      Oi.setEnv({
        kdtId: Object(ho.a)("kdtId"),
        version: Object(ho.a)("userVersion"),
      });
      var Pi = Date.now();
      Oi.route.readRoute("GoodsDetail").then(() => {
        Si(Pi, { module: "route" });
      }),
        Oi.domain.readDomain("").then(() => {
          Si(Pi, { module: "domain" });
        }),
        Oi.router.useBeforeLeave(
          (e, t) =>
            ki(e.query)
              .then((e) => {
                var n,
                  { promotePath: o, promoteQuery: r } = e;
                return (
                  "Seckill" === t.route ||
                  "seckill" ===
                    (null == t || null == (n = t.query)
                      ? void 0
                      : n.activityType)
                    ? Oi.router.redirectTo(o, r)
                    : Oi.router.navigate(o, r),
                  !1
                );
              })
              .catch(() => {
                var {
                    title: t,
                    image: n,
                    alias: o,
                    price: r,
                  } = (null == e ? void 0 : e.bizParams) || {},
                  { url: i, width: a, height: s } = n || {};
                if (!(o && n && i && a && "null" !== a && "null" !== s && s))
                  return !0;
                wx.setStorage({
                  key: "goodsDetail-" + o,
                  data: { image: n, title: t, price: r },
                });
              }),
          "GoodsDetail"
        ),
        Oi.router.useBeforeLeave(() => {
          try {
            var e = getApp(),
              t = e.request({
                path: "/wscshop/weapp/goods/all-goods.json",
                query: Object(_i.a)({}),
              });
            ji.call(e, "prefetch:all-goods", t);
          } catch (e) {}
          return !0;
        }, "AllGoodsList"),
        Oi.router.useBeforeLeave(() => !0, "Search"),
        Oi.router.useBeforeLeave(() => !0, "GoodsTag");
      var Ii = {
        "my-coupons": { showExchange: "isExchange" },
        "member-center-plus": { levelAlias: "alias" },
        prepay: {
          activeTab: (e) => ({
            key: "activeTab",
            value: { giftCard: "GIFT", balanceCard: "BALANCE" }[e],
          }),
        },
        "order-list": {
          activeTab: (e) => ({
            key: "type",
            value: {
              all: "all",
              waitPay: "topay",
              waitShip: "tosend",
              shipped: "send",
              waitEvaluate: "toevaluate",
            }[e],
          }),
        },
      };
      Oi.useBeforeLeave((e) => {
        try {
          ((e) => {
            var t = Ii[e.route];
            if (t) {
              var n = e.url,
                o = Object(u.a)({}, e.query);
              Object.keys(t).forEach((e) => {
                var r = o[e],
                  i = t[e];
                if (r) {
                  if ("function" == typeof i) {
                    var { key: a, value: s } = i(r);
                    (i = a), (r = s);
                  }
                  (n = pt.a.remove(n, e)),
                    (n = pt.a.add(n, { [i]: r })),
                    delete o[e],
                    (o[i] = r);
                }
              }),
                (e.url = n),
                (e.query = o);
            }
          })(e);
        } catch (e) {}
        return !0;
      });
      var Ci = Oi,
        Ai = Object(xi.a)();
      var Ei = new (class {
        navigate(e, t) {
          return this.reportLog(e, "navigate"), Ci.router.navigate(e, t);
        }
        replace(e, t) {
          return this.reportLog(e, "replace"), Ci.router.redirectTo(e, t);
        }
        switchTab(e, t) {
          return this.reportLog(e, "switchTab"), Ci.router.switchTab(e, t);
        }
        reset(e, t) {
          return this.reportLog(e, "reset"), Ci.router.reLaunch(e, t);
        }
        reload() {
          this.reportLog("reload", "reload");
        }
        goBack(e) {
          return this.reportLog(e, "goBack"), Ci.router.back(e);
        }
        goBackApp() {}
        navigateByUri(e, t) {
          return (
            this.reportLog(e, "navigateByUri"),
            c.default.navigate({ url: pt.a.add(e, t) })
          );
        }
        replaceByUri(e, t) {
          return (
            this.reportLog(e, "replaceByUri"),
            c.default.navigate({ url: pt.a.add(e, t), type: "redirectTo" })
          );
        }
        reportLog(e, t) {
          try {
            Ai.log({
              et: "click",
              ei: "mock_phoenix_nav",
              en: "mock phoenix 数据统计",
              pt: "dmc",
              params: { method: t, url: e },
            });
          } catch (e) {}
        }
      })();
      c.default.setGlobal("Phoenix", Ei);
      var wi = Ei,
        Ri = n("386M");
      function Di(e, t) {
        try {
          if (!/(pages\/goods\/detail\/index)/i.test(e)) return null;
          var n = new Promise((e, n) => {
            var o = (function (e) {
              var t = e,
                {
                  alias: n,
                  umpAlias: o = "",
                  umpType: r = "",
                  type: i = "",
                  activityId: a = "",
                  oid: s = 0,
                  subKdtId: c,
                } = e,
                { activityType: d = "" } = t;
              return (
                "helpcut" === i && (d = "helpCut"),
                Object(u.a)({}, t, {
                  ump_alias: o,
                  ump_type: r,
                  activityId: a,
                  activityType: d || i,
                  alias: n,
                  subKdtId: +c || 0,
                  oid: s,
                  fullPresaleSupportCart: "true",
                  isDetailPrefetch: 1,
                  platform: "weixin",
                  client: "weapp",
                  isGoodsWeappNative: 1,
                  withoutSkuDirectOrder: "1",
                  skuOrderVersion: 1,
                })
              );
            })(t);
            wx.request({
              url: "https://h5.youzan.com/wscgoods/tee-app/detail-v2.json",
              data: o,
              withCredentials: !0,
              success: (t) => {
                var { data: o = {}, statusCode: r } = t,
                  { code: i, data: a = {}, msg: s } = o;
                200 === r && 0 === i ? e(a) : n(s);
              },
              fail: (e) => n(e),
            });
          });
          ji.call(this, "fetch:lanunch:goodsDetail", n);
        } catch (e) {}
      }
      var { getSpm: Ti } = hi.a,
        Li = [1008, 1158, 1160];
      pi.isChainStoreSync() || ci();
      var Mi = "pages/common/blank-page/index";
      bt.a.initPrefetchEvent(),
        wx.onPageNotFound((e) => {
          var { path: t, query: n } = e,
            o = (Ri || {})[t];
          o
            ? Ci.redirectTo(o, n)
            : getApp().onPageNotFound({ path: t, query: n });
        });
      var Bi = Date.now(),
        Fi = Object(u.a)({ store: dr.a }, po.a, r, pr, o, i, pi, {
          getPagesReplaceRules: Go,
          globalData: {
            startTime: Bi,
            enableHttp2: !1,
            enableCdn: !0,
            isRetailApp: !1,
            kdtId: 0,
            hasKdtId: !1,
            systemInfo: null,
            userInfo: null,
            userInfoDeny: !1,
            token: {},
            shopInfo: {},
            hasToken: !1,
            localDeliverySetting: {},
            logisticsSetting: {},
            serviceRegistry: {},
            is_big_shop: null,
            imData: null,
            shopSetting: null,
            _shopConfigData: null,
            adData: null,
            pluginData: {},
            scancodeData: {},
            enterShopInfo: { path: "", query: "" },
            isInitEnterShop: !1,
            homeDetailPromise: null,
            shelfParams: {},
            wxFastBuyPreDetail: null,
          },
          onLaunch(e) {
            var t = this;
            if (!this.isThirdApp)
              throw new Error("App 实例必须提供 isThirdApp 方法");
            if (!this.needUpdateKdtIdByServer)
              throw new Error("App 实例必须提供 needUpdateKdtIdByServer 方法");
            (this.dmc = Ci), (this.mockPhoenix = wi), (this.Hummer = Sr.a);
            var n = Object(ho.a)("kdtId");
            Jr(), Zr({ kdtId: n }), Di.call(this, e.path, e.query);
            var o,
              r,
              i,
              a = Object(u.a)({}, e, {
                kdtId: n,
                globalData: this.globalData,
                getShopInfoParams: pr.getShopInfoParams,
              }),
              s = Object(vi.s)(e.path),
              c = this.isChainStoreSync(),
              d = () => {
                this.globalData.homeDetailPromise = Object(ni.d)(a);
              },
              p = !1;
            if (e.path === Mi) {
              var l,
                f =
                  null == e || null == (l = e.query)
                    ? void 0
                    : l.weappSharePath;
              f &&
                (p = (f = decodeURIComponent(f)).includes(
                  "pages/home/dashboard/index"
                ));
            }
            ((p || s) &&
              (this.globalData.videoAdPromise = Object(ni.b)(n)
                .then((e) => {
                  var { playUrl: t, imageUrl: n } = e || {},
                    o = "image";
                  return (
                    wx.preloadAssets({
                      data: [
                        { type: o, src: t },
                        { type: o, src: n },
                      ].filter((e) => e.src),
                    }),
                    e
                  );
                })
                .catch(() => {
                  this.logger.log({
                    et: "custom",
                    ei: "开屏广告",
                    en: "开屏广告",
                    params: { info: "开屏广告加载失败" + n },
                  });
                })),
            s)
              ? c
                ? (this.globalData.homeDetailPromise =
                    null == (o = Object(vi.q)(a))
                      ? void 0
                      : o.then((e) => Object(ni.d)(e)))
                : (d(), (this.globalData.initIsHomePage = s))
              : (Object(vi.q)(a),
                c ||
                  setTimeout(() => {
                    d();
                  }, 2e3));
            (this.globalData.usercenterPromise = li.d(this)),
              (this.globalData.ucRetailPromise = li.c(this, n)),
              Object(ni.c)().then((e) => {
                (this.globalData.globalCustomLoading = e),
                  this.trigger("app:loading:change", e);
              }),
              wx.getSetting({
                withSubscriptions: !0,
                success: (e) => {
                  this.globalData.subscribeConf = e.subscriptionsSetting;
                },
              }),
              (this.globalData.onLaunchQuery = e.query),
              this.trigger("launch", e),
              (this.globalData.shelfParams =
                ((r = e.path),
                (i = e.query),
                "packages/retail-shelf/shelf/index" === r
                  ? Object(u.a)({}, i)
                  : {})),
              Object(Eo.c)(e.query, this),
              tr(this),
              lo.a.trigger("app:after-bootstrap", this),
              fi.bind(this)(e),
              wx.onLazyLoadError((e) => {
                var { type: t, subpackage: n, errMsg: o } = e;
                this.logger.appError({
                  name: "async-package-error",
                  level: "warn",
                  message: "async_package_error_message",
                  detail: { type: t, subpackage: n, errMsg: o },
                });
              }),
              this.logger.addFromLinkRecord(e),
              Object(Sr.b)("onAppLaunch", void 0, this),
              this.on("update:youzan:kdtId", function (e, n) {
                void 0 === n && (n = {}),
                  t.updateKdtId(+e, !1, Object(u.a)({ mark: "800" }, n));
              }),
              this.on("app:token:success", (e) => {
                this.needUpdateKdtIdByServer() &&
                  Object(ti.a)()
                    .catch(() => ({}))
                    .then((t) => {
                      var n = t.current || e.kdtId;
                      this.trigger("update:youzan:kdtId", +n, { mark: "801" });
                    });
              }),
              this.redirectToMemberShopWhenAuthorize(this),
              this.enterFromBlankPage(),
              e.path !== Mi &&
                (this.updateKdtId(+n, !1, {
                  isFromBlankPageOrOnLaunch: !0,
                  mark: "803",
                }),
                Object(mo.a)());
          },
          onShow(e) {
            Object(Sr.b)("onAppShow", void 0, this);
            var t = e.query || {};
            Object(Eo.c)(t, this);
            var n = e.query || {};
            this.trigger("show", e);
            var o = getApp(),
              r = (o && o.getKdtId()) || Object(ho.a)("kdtId");
            this.logger.setEvent && this.logger.setEvent({ si: r });
            var i = this.globalData.adData || {};
            this.logger.updateSession(
              Object(u.a)({}, e, { clickId: i.gdtVid || i.qzGdt })
            ),
              1089 === e.scene && delete n.offlineId,
              Object(vi.u)({ sceneId: e.scene, sceneSource: "WEIXIN" }),
              Object(Eo.h)(this.logger, this),
              n.offlineId && this.setOfflineId(+n.offlineId);
            var a = (e.referrerInfo || {}).extraData || {};
            if (
              (a.pluginData &&
                this.$store.commit("UPDATE_PLUGIN_DATA", a.pluginData),
              this.updateBusinessHour(),
              this.autoBeSalesman(t),
              Object($o.d)(e, this),
              Li.includes(e.scene))
            ) {
              var s = 0,
                c = { kdtId: r || this.getKdtId() };
              if (t.from_params && go(t.from_params)) {
                var { wecom_uuid: d } = go(t.from_params);
                d && (c.wecomUuid = d);
              }
              var p = () => {
                wx.getGroupEnterInfo({
                  success: (e) => {
                    var { encryptedData: t, iv: n } = e;
                    (c.encryptedData = t),
                      (c.iv = n),
                      this.request({
                        path: "/wa/api/common/generate-chat-id",
                        data: c,
                      })
                        .then((e) => {
                          e &&
                            e.wecomUuid &&
                            (this.logger.addSessionParams(
                              { wecom_uuid: e.wecomUuid },
                              1440
                            ),
                            this.logger.setEvent({
                              params: { wecom_uuid: e.wecomUuid },
                            }),
                            this.logger.pageShow());
                        })
                        .catch((e) => {
                          e &&
                            582200011 === e.code &&
                            s < 2 &&
                            (s++, this.login(p));
                        });
                  },
                  fail: () => {},
                });
              };
              p();
            }
            var l = this.getHQKdtId();
            this.globalData.brandFeaturePromise = Object(ni.a)(
              l || r,
              this.request
            );
          },
          checkQuery(e) {
            var { offlineId: t } = e;
            t &&
              (Object(Oo.c)("current_share_offline_id", t),
              this.setOfflineId(t));
          },
          getSystemInfoSync() {
            return (
              this.globalData.systemInfo ||
                (this.globalData.systemInfo = Object(fo.b)()),
              this.globalData.systemInfo
            );
          },
          isSwitchTab(e, t, n) {
            if ((void 0 === n && (n = !0), Object(mi.b)(e)))
              return Promise.resolve(!0);
            var o = getCurrentPages() || [{}],
              r =
                e && "/" === e.slice(0, 1) ? e.slice(1) : o[o.length - 1].route;
            if (
              ((r = r.split("?")[0].replace(/^pages(-|\/)/, "packages/")),
              n && Object(mi.a)())
            )
              return Promise.resolve(!0);
            var i = Object(gi.a)(r);
            return new Promise((e) => {
              var { list: n = [] } = this.getNavConfig();
              e(
                n.filter((e) => {
                  var { customPage: n, page_path: o } = e,
                    r = t ? Object(gi.b)({ customPage: n, pagePath: o }) : o;
                  return (
                    (this.globalData.isRetailApp && bi.b.test(i)) ||
                    r.replace(/^pages(-|\/)/, "packages/") === i
                  );
                }).length > 0
              );
            });
          },
          fetchAreaMapData(e, t) {
            var n = "trade:address:area-map",
              o = () => {
                this.carmen({
                  api: "kdt.address.map/1.0.0/get",
                  success: (t) => {
                    var o = t.data || [],
                      r = {};
                    (r.province = o[0].Province),
                      (r.city = o[1].Citys),
                      (r.county = o[2].County),
                      this.storage.setAsync(n, r),
                      e && e(r);
                  },
                  fail: (e) => {
                    t && t(e.msg);
                  },
                });
              };
            this.storage
              .getAsync(n)
              .then((t) => {
                t ? e && e(t) : o();
              })
              .catch(() => {
                o();
              });
          },
          onHide() {
            (this.globalData.shopCert = null),
              (this.globalData.shopStatus = null),
              this.trigger("hide"),
              Object(Eo.h)(this.logger, this);
            var { getLogParams: e, addSessionParams: t } = this.logger || {},
              { context: n = {} } = (e && e()) || {};
            n.wecom_uuid && t({ wecom_uuid: "" }, -1), Object(Eo.a)();
          },
          updateBusinessHour() {
            var e = getCurrentPages() || [],
              t = e[e.length - 1];
            t &&
              /(pages|packages)\/home\/dashboard/.test(t.route) &&
              (this.waitForEnterShop().then(() => {
                this.request({
                  path: "/wscshop/weappp/shop_business_hour.json",
                }).then((e) => {
                  this.setShopInfo({
                    shop_business_isopen: e.is_open,
                    suspend_message: e.next_open_time_note || e.suspend_message,
                  });
                });
              }),
              this.getOfflineId() &&
                this.getStore().then((e) => this.setShopInfo({ store: e })));
          },
          autoBeSalesman(e) {
            var { sl: t, sls: n, weappSharePath: o } = e;
            if (!(t = t || n || "") && o) {
              var r = decodeURIComponent(o),
                i = _n.a.getAll(r) || {};
              t = i.sl || i.sls || "";
            }
            setTimeout(() => {
              var e = getCurrentPages(),
                n = e[0],
                o = e[1],
                r = "packages",
                i = "/wscsalesman/channel/recruit",
                a = [
                  r + "/business-card/auth/index",
                  r + "/salesman/tutorial/index",
                  i,
                  i + "Indentor",
                  i + "Salesman",
                ],
                s = !!n;
              if (o) {
                var { route: u, options: c = {} } = o,
                  d = ((e) => {
                    var t = "";
                    try {
                      t = decodeURIComponent(e);
                    } catch (e) {
                      t = "";
                    }
                    return t;
                  })(c.src),
                  p =
                    -1 === u.indexOf("pages/common/webview-page/index") ? u : d;
                s = a.every((e) => -1 === p.indexOf(e));
              }
              s &&
                this.request({
                  path: "/wscsalesman/common/autoBeSalesman.json",
                  data: { sl: t },
                }).catch(() => {});
            }, 2e3);
          },
          dontUpdateKdtIdByServer() {},
          updateYouzanUserInfo() {},
          getUsercenterPage() {
            var e = "/packages/usercenter/dashboard/index";
            return (
              this.globalData.isRetailApp &&
                (e = "/packages/retail/usercenter/dashboard-v2/index"),
              e
            );
          },
          getImData() {
            var e = [this.getShopConfigData()];
            return Promise.all(e).then((e) => {
              var [t] = e,
                n = {};
              return (
                (n.isSetContact = t.show_wsc_web_im),
                (n.endpoint = "mmp"),
                Object(u.a)({}, t, n)
              );
            });
          },
          getDefaultImData() {
            return this.getImData().then((e) =>
              this.waitForEnterShop().then((t) => {
                var { kdtId: n } = t,
                  o = this.getOfflineId(),
                  r = Object(u.a)(
                    {
                      kdt_id: n || this.getKdtId(),
                      endpoint: e.endpoint,
                      source: "none",
                    },
                    o > 0 && { site_id: o }
                  );
                return {
                  sourceParam: JSON.stringify(r),
                  businessId: e.businessId || "",
                };
              })
            );
          },
          enterFromBlankPage() {
            if (this.__blankPageTempData) {
              var {
                kdtId: e = Object(ti.b)(),
                loggerSessionData: t,
                offlineId: n,
                sceneData: o,
              } = this.__blankPageTempData;
              this.$store.commit("UPDATE_SCENE_DATA", o),
                this.checkQuery({ offlineId: n }),
                this.trigger("update:youzan:kdtId", e, {
                  isFromBlankPageOrOnLaunch: !0,
                  mark: 802,
                }),
                this.logger.updateSession({ query: t }),
                this.globalData.isRetailApp && this.dontUpdateKdtIdByServer(),
                (this.__blankPageTempData = null);
            }
          },
          onError(e) {
            e = "string" == typeof e ? { message: e } : e;
            try {
              this.logger.appError({
                name: "global catch error",
                message: e.message,
                detail: { stack: e.stack || "", spm: Ti() },
              });
            } catch (e) {}
          },
          tradePageType: {
            cartPageType: "RANTA",
            tradeBuyPageType: "RANTA",
            tradePayPageType: "RANTA",
            payResultPageType: "RANTA",
            orderDetailPageType: "RANTA",
            orderListPageType: "RANTA",
          },
          ecloudMode: !1,
        }),
        Hi = n("svh/"),
        zi = n("qJXH"),
        Ui = Object(u.a)({}, Fi),
        Ni = Fi.globalData || {};
      (Ui.globalData = Ni),
        Object(Hi.c)(
          Object(zi.c)(Ui, {
            onLaunch() {
              var { top: e, height: t } = wx.getMenuButtonBoundingClientRect(),
                n = Object(fo.b)().statusBarHeight,
                o = n + t + 2 * (e - n);
              (this.globalData.navigationBarHeight = o),
                (this.globalData.hummerPerformanceTime = new Date().getTime());
            },
            globalData: {
              navigationBarHeight: 0,
              hummerPerformanceTime: 0,
              statusBarHeight: Object(fo.b)().statusBarHeight,
            },
            isThirdApp: () => !1,
            needUpdateKdtIdByServer: () => !0,
          })
        );
    },
    "/5CJ": function (e, t) {},
    "/vSv": function (e, t) {
      e.exports = {
        d: "kdtId;2;rootKdtId;2;theme;2;shop;2;shopConfigs;2",
        p: "setKdtId;readConf",
      };
    },
    "0+s+": function (e, t) {},
    "01Cm": function (e, t, n) {
      var o, r;
      n.d(t, "a", function () {
        return r;
      }),
        (function (e) {
          (e.MAIN = "main"), (e.STANDBY = "standby");
        })(o || (o = {})),
        (function (e) {
          (e.REQUEST = "request"),
            (e.DOWNLOAD = "download"),
            (e.UPLOAD = "upload"),
            (e.WS_REQUEST = "wsRequest"),
            (e.WEBVIEW = "webview");
        })(r || (r = {}));
    },
    "03qp": function (e, t) {},
    "0pG4": function (e, t) {},
    "2Iwi": function (e, t) {
      e.exports = {
        d: "cloudDesignConfig;4",
        e: "",
        el: "",
        w: "Main;CloudAppContentAppend",
        wc: "CloudAppContentAppend",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "2oXP": function (e, t) {},
    "386M": function (e) {
      e.exports = JSON.parse("{}");
    },
    "3Hme": function (e, t) {
      e.exports = {
        d: "offlineId;2;isMultiStore;2;offlineData;2;openHideStore;2",
        l: "isMultiStoreAsync",
        p: "setOfflineId;getOfflineData;switchMultiStore",
        li: "onPageShow;onAppShow",
      };
    },
    "3tts": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.different = t.getDmcOptionsKey = void 0),
        (t.getDmcOptionsKey = function (e, t) {
          return (
            t || (t = ["biz", "hostApp", "authType", "bizEnv"]),
            t.reduce(function (t, n) {
              return e[n] ? t + "_" + e[n] : t;
            }, "")
          );
        }),
        (t.different = function (e, t) {
          return Object.keys(e).every(function (n) {
            return e[n] === t[n];
          });
        });
    },
    "41xf": function (e, t) {},
    "49xj": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("bb6g");
      o.__exportStar(n("QFH0"), t),
        o.__exportStar(n("z5+1"), t),
        o.__exportStar(n("wB7r"), t),
        o.__exportStar(n("r1aO"), t),
        o.__exportStar(n("3tts"), t),
        o.__exportStar(n("Db/0"), t),
        o.__exportStar(n("JE2o"), t),
        o.__exportStar(n("jBAX"), t),
        o.__exportStar(n("yEX5"), t);
    },
    "4PZc": function (e, t) {},
    "5Pz1": function (e, t) {},
    "7vMp": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ERROR_CODE = t.isDmcError = t.createError = t.DmcError = void 0);
      var o = n("bb6g"),
        r = (function (e) {
          function t(t, n, o) {
            var r = e.call(this, t) || this;
            return (
              (r.code = 0),
              (r.extra = {}),
              (r.isDmcError = !0),
              (r.code = n || 0),
              (r.extra = o || {}),
              r
            );
          }
          return o.__extends(t, e), t;
        })(Error);
      (t.DmcError = r),
        (t.createError = function (e, t, n) {
          return new r(e, t, n);
        }),
        (t.isDmcError = function (e) {
          return e && e.isDmcError;
        }),
        (function (e) {
          e[(e.NOT_FOUND = 404)] = "NOT_FOUND";
        })(t.ERROR_CODE || (t.ERROR_CODE = {}));
    },
    "8+6a": function (e, t) {
      e.exports = {
        d: "commTest;2;kdtId;0;locateCityInfo;0;ecloud:isLBSReady;2",
        e: "$message",
        l: "setDb;getDb;deleteDb;triggerEvent;onEventOnce;onEvent;offEvent;tryLocation;amap;locateCityByPosition;locateCityByIp;getKsLocation",
        p: "locateCity;locateLngLat;getLocation;tryLocation;ecloud:setLBSReady;tee-api:getLocation",
        pi: "ecloud:beforeGetLocation",
        li: "beforePageCreate",
      };
    },
    "B/TR": function (e, t) {},
    DMLk: function (e, t) {},
    "Db/0": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.once = t.isFunc = void 0),
        (t.isFunc = function (e) {
          return "function" == typeof e;
        }),
        (t.once = function (e) {
          var t = !1;
          return function () {
            for (var n = [], o = 0; o < arguments.length; o++)
              n[o] = arguments[o];
            t || ((t = !0), e.apply(this, n));
          };
        });
    },
    Dl3w: function (e, t) {},
    E2le: function (e, t) {},
    ErI6: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.__default_link_params =
          t.LINK_PARAMS =
          t.ROUTE_PROTOCOL =
          t.__default_domain_key =
          t.DEFAULT_AUTH_TYPE =
          t.DEFAULT_HOST_APP =
            void 0),
        (t.DEFAULT_HOST_APP = "unknown"),
        (t.DEFAULT_AUTH_TYPE = "unknown"),
        (t.__default_domain_key = "__default_domain"),
        (t.ROUTE_PROTOCOL = { HTTPS: "https", MINI_APP: "miniApp" }),
        (t.LINK_PARAMS = { version: "mpVersion", bizEnv: "bizEnv" }),
        (t.__default_link_params = [
          t.LINK_PARAMS.bizEnv,
          t.LINK_PARAMS.version,
        ]);
    },
    F0WI: function (e, t, n) {
      n.r(t),
        n.d(t, "init", function () {
          return x;
        });
      var o,
        r = n("bb6g"),
        i = n("orwW"),
        a = n("GFyo"),
        s = n("50K0"),
        u = n("IIov"),
        c = n.n(u),
        d = n("LR9C"),
        p =
          (((o = {})[d.ESceneGroup.WEBVIEW] = "webviewH5"),
          (o[d.ESceneGroup.DOWNLOAD] = "downloadH5"),
          (o[d.ESceneGroup.REQUEST] = "h5"),
          o),
        l = { yzWeappRetail: "retail", yzWeappWsc: "wsc" },
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._cacheKey = "DMC_SDK_CACHE"),
              (t.BASE_URL = "https://h5.youzan.com/dmcapi"),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.getLocalCache = function () {
              try {
                return __DMC_CONFIG__;
              } catch (e) {
                return { domains: [], routes: {}, domainsMap: {} };
              }
            }),
            (t.prototype.fetchLocalDataAsync = function (e) {
              var t = this;
              return Object(a.c)(this._cacheKey)
                .then(
                  function (e) {
                    return null == e ? void 0 : e.data;
                  },
                  function () {}
                )
                .then(function (e) {
                  var n = t.dmcOptions.biz;
                  return (
                    e ||
                    s.a.getMiniappPrefetchData("dmcConfig", {
                      bizEnv: l[n] || n,
                    })
                  );
                })
                .then(function (n) {
                  var o = !n && e ? t.getLocalCache() : n;
                  return o ? Object(i.processConfigs)(o) : o;
                });
            }),
            (t.prototype.getStandByBaseUrl = function () {
              var e = this;
              return this.fetchLocalDataAsync(!0).then(function (t) {
                var n,
                  o,
                  r = t.domainsMap,
                  a =
                    null ===
                      (o =
                        null ===
                          (n = (void 0 === r ? {} : r)[
                            i.__default_domain_key
                          ]) || void 0 === n
                          ? void 0
                          : n.standbyList) || void 0 === o
                      ? void 0
                      : o.find(function (e) {
                          return "h5.youzan.com" !== e;
                        });
                if (!a) return e.BASE_URL;
                var s = new c.a(e.BASE_URL);
                return s.set("hostname", a), s.toString();
              });
            }),
            (t.prototype.fetchRemoteData = function () {
              var t = this;
              return e.prototype.fetchRemoteData
                .call(this)
                .then(function (e) {
                  var n = e.domains,
                    o = e.routes;
                  return Object(a.g)(t._cacheKey, { domains: n, routes: o }), e;
                })
                .catch(function (e) {
                  return t.maxRetry > 1
                    ? Promise.reject(e)
                    : t.fetchLocalDataAsync(!0);
                })
                .then(i.processConfigs);
            }),
            (t.prototype.initBizData = function () {
              var t = this;
              return this.fetchLocalDataAsync()
                .then(function (n) {
                  return n || e.prototype.initBizData.call(t);
                })
                .then(function (e) {
                  return (t.config = e), e;
                });
            }),
            (t.prototype.mergeCustomConfig = function (e) {
              var t,
                n = this.customConfig,
                o = { domains: [], routes: Object(r.__assign)({}, e.routes) },
                i = function (e) {
                  return e.scene || "__DEFAULT";
                },
                a = {};
              return (
                n.forEach(function (e) {
                  var t;
                  null === (t = e.domains) ||
                    void 0 === t ||
                    t.forEach(function (e) {
                      a[i(e)] = e;
                    });
                }),
                e.domains.forEach(function (e) {
                  var t = i(e),
                    n = a[t];
                  o.domains.push(n || e), delete a[t];
                }),
                (t = e.domains).push.apply(t, Object.values(a)),
                n.forEach(function (e) {
                  Object.assign(o.routes, e.routes);
                }),
                o
              );
            }),
            t
          );
        })(i.DmcClient),
        h = n("akjn"),
        g = new ((function () {
          function e() {}
          return (
            (e.prototype.info = function (e) {}),
            (e.prototype.warn = function (e, t) {}),
            (e.prototype.error = function (e, t, n) {}),
            e
          );
        })())(),
        m = (function () {
          function e() {
            this.queryParamCache = {};
          }
          return (
            (e.prototype.getLogger = function () {
              return g;
            }),
            (e.prototype.request = function (e) {
              return new Promise(function (t, n) {
                Object(h.a)({
                  url: e.url,
                  method: e.method,
                  data: e.data,
                  header: e.header,
                  timeout: e.timeout,
                })
                  .then(function (e) {
                    e.data || n(Object(i.createError)("网络错误", e.code));
                    var o = e.data;
                    if (0 === o.code) return t({ status: 200, data: o.data });
                    n(Object(i.createError)(o.message, o.code));
                  })
                  .catch(function (e) {
                    return n(e);
                  });
              });
            }),
            (e.prototype.getCurrentUrl = function () {
              var e = (getCurrentPages && getCurrentPages()) || [],
                t = e.length > 0 ? e[e.length - 1] : { route: "", options: {} },
                n = t.route,
                o = t.options,
                r = n || "",
                i = Object.keys(o)
                  .map(function (e) {
                    return e + "=" + encodeURIComponent(o[e]);
                  })
                  .join("&");
              return Promise.resolve("/" + r + (i ? "?" + i : ""));
            }),
            (e.prototype.getQueryParam = function (e) {
              var t = this;
              return this.getCurrentUrl()
                .then(function (e) {
                  if (t.queryParamCache[e]) return t.queryParamCache[e];
                  var n = (getCurrentPages && getCurrentPages()) || [],
                    o =
                      (n.length > 0 ? n[n.length - 1] : { options: {} })
                        .options || {};
                  return (t.queryParamCache[e] = o), o;
                })
                .then(function (t) {
                  return e ? t[e] || "" : t;
                });
            }),
            e
          );
        })(),
        v = n("9ZMt"),
        b = (function () {
          function e() {}
          return (
            (e.prototype.navigate = function (e, t) {
              return (null == t ? void 0 : t.appId)
                ? v.default.$native.navigateToMiniProgram({
                    appId: t.appId,
                    path: e.url,
                    extraData: t.extraData,
                  })
                : v.default.navigate({ url: e.url, type: "navigateTo" });
            }),
            (e.prototype.switchTab = function (e) {
              return v.default.navigate({ url: e.path, type: "switchTab" });
            }),
            (e.prototype.redirectTo = function (e) {
              return v.default.navigate({ url: e.url, type: "redirectTo" });
            }),
            (e.prototype.reLaunch = function (e) {
              return v.default.navigate({ url: e.url, type: "reLaunch" });
            }),
            (e.prototype.back = function (e, t) {
              return (null == t ? void 0 : t.appId)
                ? v.default.$native.navigateBackMiniProgram({
                    extraData: null == t ? void 0 : t.extraData,
                  })
                : v.default.navigateBack({ delta: e });
            }),
            e
          );
        })(),
        y = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.__cache_transform_domain = {}), t;
          }
          return (
            Object(r.__extends)(t, e),
            (t.init = function (e) {
              var n = Object(i.getDmcOptionsKey)(e),
                o = v.default.getGlobal("__dmc_tee_cache") || {};
              if (!o[n]) {
                var r = new m(),
                  a = new f(r, e);
                (o[n] = new t(e, a, r, new b())),
                  v.default.setGlobal("__dmc_tee_cache", o);
              }
              return o[n];
            }),
            (t.prototype.transformDomain = function (e, t) {
              var n = this,
                o = t.group,
                a = t.priorityCache;
              if (!o) throw Object(i.createError)("请传入 group 字段");
              if (!Object(i.hasDomain)(e))
                return this.domain.readDomain(p[o] || "").then(function (t) {
                  return "https://" + t.domain + e;
                });
              var s = Object(i.parseUrl)(e),
                u = this.__cache_transform_domain[o];
              return (
                s.set("protocol", i.ROUTE_PROTOCOL.HTTPS),
                u && u[s.hostname] && a
                  ? (s.set("hostname", u[s.hostname]),
                    Promise.resolve(s.toString()))
                  : this.domain
                      .readDomainsByGroup({ group: o })
                      .then(function (e) {
                        for (var t, i = s.hostname, c = 0; c < e.length; c++) {
                          var d = e[c];
                          if (d.sceneGroup === o) {
                            if (d.domain === s.hostname) break;
                            if (
                              (d.standbyList &&
                                d.standbyList.includes(s.hostname)) ||
                              d.defaultDomain === s.hostname
                            ) {
                              i = d.domain;
                              break;
                            }
                          }
                        }
                        return (
                          a &&
                            (n.__cache_transform_domain[o] = Object(r.__assign)(
                              Object(r.__assign)({}, u || {}),
                              (((t = {})[s.hostname] = i), t)
                            )),
                          s.set("hostname", i),
                          s.toString()
                        );
                      })
                      .catch(function (e) {
                        throw (
                          (Object(i.isDmcError)(e) ||
                            n.Logger.error(
                              "TeeDmc 反推域名转换报错",
                              e,
                              n.options
                            ),
                          e)
                        );
                      })
              );
            }),
            t
          );
        })(i.DmcBase);
      function x(e) {
        return y.init(
          Object(r.__assign)(Object(r.__assign)({}, e), { from: "miniapp" })
        );
      }
    },
    JE2o: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseVersion = t.compareVersion = void 0),
        (t.compareVersion = function (e, t) {
          for (var n = Math.max(e.length, t.length), o = 0; o < n; o++) {
            var r = e[o] || 0,
              i = t[o] || 0;
            if (r > i) return 1;
            if (r < i) return -1;
          }
          return 0;
        }),
        (t.parseVersion = function (e) {
          return (
            void 0 === e && (e = ""),
            e
              ? e.split(".").map(function (e) {
                  return +e;
                })
              : []
          );
        });
    },
    JZ1m: function (e, t) {},
    LR9C: function (e, t, n) {
      var o = n("v3uz");
      n.o(o, "ESceneGroup") &&
        n.d(t, "ESceneGroup", function () {
          return o.ESceneGroup;
        });
      var r = n("DMLk");
      n.o(r, "ESceneGroup") &&
        n.d(t, "ESceneGroup", function () {
          return r.ESceneGroup;
        });
      var i = n("atJT");
      n.o(i, "ESceneGroup") &&
        n.d(t, "ESceneGroup", function () {
          return i.ESceneGroup;
        });
      var a = n("/5CJ");
      n.o(a, "ESceneGroup") &&
        n.d(t, "ESceneGroup", function () {
          return a.ESceneGroup;
        });
      var s = n("vPrZ");
      n.o(s, "ESceneGroup") &&
        n.d(t, "ESceneGroup", function () {
          return s.ESceneGroup;
        });
      var u = n("OFOC");
      n.o(u, "ESceneGroup") &&
        n.d(t, "ESceneGroup", function () {
          return u.ESceneGroup;
        });
      var c = n("0+s+");
      n.o(c, "ESceneGroup") &&
        n.d(t, "ESceneGroup", function () {
          return c.ESceneGroup;
        });
      var d = n("01Cm");
      n.d(t, "ESceneGroup", function () {
        return d.a;
      });
      n("hrJ7"), n("Dl3w"), n("2oXP"), n("ghWV"), n("B/TR");
    },
    Ljzw: function (e, t) {},
    M53l: function (e, t) {},
    OCpF: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DmcRouter = void 0);
      var o = n("bb6g"),
        r = n("49xj"),
        i = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.$getInstance = t), (n.routeStack = []), (n.$getInstance = t), n
            );
          }
          return (
            o.__extends(t, e),
            Object.defineProperty(t.prototype, "routeHookFromParam", {
              get: function () {
                return this.routeStack[this.routeStack.length - 1] || null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.navigate = function (e, t, n) {
              var o = this;
              return this.commonHandler(
                function (e, t) {
                  return o.$getInstance().adapterRouter.navigate(e, t);
                },
                "navigate",
                e,
                t,
                n
              );
            }),
            (t.prototype.switchTab = function (e, t, n) {
              var o = this;
              return this.commonHandler(
                function (e) {
                  return o.$getInstance().adapterRouter.switchTab(e);
                },
                "switchTab",
                e,
                t,
                n
              );
            }),
            (t.prototype.redirectTo = function (e, t, n) {
              var o = this;
              return this.commonHandler(
                function (e, t) {
                  return o.$getInstance().adapterRouter.redirectTo(e, t);
                },
                "redirectTo",
                e,
                t,
                n
              );
            }),
            (t.prototype.reLaunch = function (e, t, n) {
              var o = this;
              return this.commonHandler(
                function (e, t) {
                  return o.$getInstance().adapterRouter.reLaunch(e, t);
                },
                "reLaunch",
                e,
                t,
                n
              );
            }),
            (t.prototype.back = function (e, t) {
              var n = this;
              return this.commonHandler(
                function () {
                  return n.$getInstance().adapterRouter.back(e || 0, t);
                },
                "back",
                ""
              );
            }),
            (t.prototype.commonHandler = function (e, t, n, o, r) {
              var i = this;
              return this.pickRoute(n, o, r).then(function (o) {
                return (
                  (o.bizParams = null == r ? void 0 : r.bizParams),
                  i
                    .execBeforeLeaveHooks([o, i.routeHookFromParam], n)
                    .then(function () {
                      return e(o, r).then(function () {
                        return (
                          i.manageRouteStack(t, o),
                          i.execAfterLeaveHooks([o, i.routeHookFromParam], n)
                        );
                      });
                    })
                );
              });
            }),
            (t.prototype.pickRoute = function (e, t, n) {
              return e
                ? r.isDmcRouteName(e)
                  ? this.$getInstance().route.createUrl(e, t, n)
                  : this.$getInstance().route.parseUrl(r.append(e, t), n)
                : Promise.resolve({ route: e, path: "" });
            }),
            (t.prototype.manageRouteStack = function (e, t) {
              switch (e) {
                case "navigate":
                  this.routeStack.push(t);
                  break;
                case "switchTab":
                case "reLaunch":
                  this.routeStack = [t];
                  break;
                case "redirectTo":
                  this.routeStack.pop(), this.routeStack.push(t);
                  break;
                case "back":
                  this.routeStack.pop();
              }
            }),
            t
          );
        })(n("SBxr").DmcRouterHook);
      t.DmcRouter = i;
    },
    OFOC: function (e, t) {},
    ORua: function (e, t) {},
    OhNj: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n("bb6g").__exportStar(n("F0WI"), t);
    },
    P0Q5: function (e, t) {},
    P3TF: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DmcDomain = void 0);
      var o = n("bb6g"),
        r = n("ErI6"),
        i = n("7vMp"),
        a = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.$getInstance = t), (n.$getInstance = t), n;
          }
          return (
            o.__extends(t, e),
            (t.prototype.getConfigs = function () {
              var e = this;
              return this.$getInstance()
                .isReady()
                .then(function () {
                  return e.$getInstance().config;
                });
            }),
            (t.prototype.filterDomain = function (e) {
              return this.getConfigs()
                .then(function (e) {
                  return e;
                })
                .then(function (t) {
                  var n = t.domains,
                    o = t.domainsMap,
                    i = void 0 === o ? {} : o;
                  return e && i[e]
                    ? i[e]
                    : !e && i[r.__default_domain_key]
                    ? i[r.__default_domain_key]
                    : Object.keys(i).length
                    ? void 0
                    : n.find(function (t) {
                        return t.scene === e;
                      });
                });
            }),
            (t.prototype.readDomain = function (e, t) {
              var n = this;
              void 0 === e && (e = ""), void 0 === t && (t = {});
              return this.filterOrFetchDomain(e, t).then(function (e) {
                return (o = e), n.execReadDomainHooks(o, t.path);
                var o;
              });
            }),
            (t.prototype.readStandby = function (e, t) {
              return this.filterOrFetchDomain(e, t).then(function (e) {
                return e.standbyList;
              });
            }),
            (t.prototype.readDomainsByGroup = function (e) {
              if (!e.group) throw i.createError("请传入 group 字段");
              var t = e.group;
              return this.getConfigs().then(function (e) {
                return e.domains.filter(function (e) {
                  return e.sceneGroup === t;
                });
              });
            }),
            (t.prototype.filterOrFetchDomain = function (e, t) {
              void 0 === e && (e = ""), void 0 === t && (t = {});
              var n = this.$getInstance().options.biz;
              return t.biz && t.biz !== n
                ? this.$getInstance().client.apiGetPlatformDomain(t.biz, e)
                : this.filterDomain(e).then(function (t) {
                    if (!t)
                      throw i.createError(
                        e + " 场景的域名不存在",
                        i.ERROR_CODE.NOT_FOUND
                      );
                    return t;
                  });
            }),
            t
          );
        })(n("V3KO").DmcDomainHook);
      t.DmcDomain = a;
    },
    PmRg: function (e, t) {},
    Q31X: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("bb6g"),
        r = n("OhNj"),
        i = n("9VdR"),
        a = n("US/N");
      function s() {}
      var u = ["readRoute", "createUrl"],
        c = ["readDomain", "readStandby"],
        d = [
          "navigate",
          "switchTab",
          "reLaunch",
          "redirectTo",
          "back",
          "useAfterLeave",
          "useBeforeLeave",
        ],
        p = ["append", "parse", "remove", "stringify"],
        l = o.__spreadArrays(["setEnv", "init"], d);
      function f(e) {
        return e.reduce(function (e, t) {
          return (e[t] = s), e;
        }, {});
      }
      function h(e, t) {
        var n = ("undefined" == typeof window ? {} : window)._global,
          s = void 0 === n ? {} : n,
          h = (s.passportTeeRantaInfo || {}).platform || {},
          g = i.getExtConfigSync(),
          m = g.kdtId,
          v = g.userVersion,
          b = (s.dmcData || {}).initParams,
          y = o.__assign(o.__assign(o.__assign({}, h), b), e);
        if (!y.biz)
          return o.__assign(o.__assign({}, f(l)), {
            utils: f(p),
            router: f(d),
            route: f(u),
            domain: f(c),
          });
        var x = r.init({
          biz: y.biz,
          authType: y.authType,
          hostApp: y.hostApp,
          bizEnv: y.bizEnv,
          version: y.version || v,
          kdtId: y.kdtId || m,
        });
        return (
          y.customConfig && x.setCustomConfig(y.customConfig),
          t.onAppHide &&
            t.onAppHide(function () {
              x.refresh();
            }),
          a.setRequestDep({ dmc: x }),
          x
        );
      }
      (h.pluginName = "dmc"), (t.default = h);
    },
    QFH0: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initOptions = void 0);
      var o = n("bb6g"),
        r = n("JE2o"),
        i = n("ErI6");
      t.initOptions = function (e) {
        return o.__assign(o.__assign({}, e), {
          linkParams: e.linkParams || i.__default_link_params,
          hostApp: e.hostApp || i.DEFAULT_HOST_APP,
          authType: e.authType || i.DEFAULT_AUTH_TYPE,
          _version: r.parseVersion(e.version),
        });
      };
    },
    Qogv: function (e, t) {},
    SBxr: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DmcRouterHook = void 0);
      var o = n("bb6g"),
        r = n("7vMp"),
        i = n("49xj"),
        a = (function () {
          function e() {
            (this.afterLeaveHooks = []), (this.beforeLeaveHook = []);
          }
          return (
            (e.prototype.useBeforeLeave = function (e, t) {
              var n = this;
              if (!i.isFunc(e))
                throw r.createError("useBeforeLeave 需要传入 callback 函数");
              var o =
                this.beforeLeaveHook.push({ routeName: t, callback: e }) - 1;
              return i.once(function () {
                n.beforeLeaveHook[o] = null;
              });
            }),
            (e.prototype.useAfterLeave = function (e, t) {
              var n = this;
              if (!i.isFunc(e))
                throw r.createError("useBeforeLeave 需要传入 callback 函数");
              var o = this.afterLeaveHooks.push({ routeName: t, callback: e });
              return i.once(function () {
                n.afterLeaveHooks[o] = null;
              });
            }),
            (e.prototype.execBeforeLeaveHooks = function (e, t) {
              return this.execHooks(
                this.filterHooks(this.beforeLeaveHook, t),
                e
              );
            }),
            (e.prototype.execAfterLeaveHooks = function (e, t) {
              return this.execHooks(
                this.filterHooks(this.afterLeaveHooks, t),
                e
              );
            }),
            (e.prototype.filterHooks = function (e, t) {
              return e.filter(function (e) {
                return e && (e.routeName === t || void 0 === e.routeName);
              });
            }),
            (e.prototype.execHooks = function (e, t) {
              for (
                var n = Promise.resolve(!0),
                  r = o.__spreadArrays(e, [
                    {
                      callback: function () {
                        return Promise.resolve(!0);
                      },
                    },
                  ]),
                  i = function () {
                    var e = r.shift();
                    e &&
                      (n = n.then(function (n) {
                        return !1 === n
                          ? Promise.reject("hook 返回 false，终止跳转")
                          : e.callback.apply(e, t);
                      }));
                  };
                r.length;

              )
                i();
              return n;
            }),
            e
          );
        })();
      t.DmcRouterHook = a;
    },
    TRH1: function (e, t) {
      e.exports = {
        d: "appId;2;miniprogram;2;platformInfo;2",
        e: "login",
        l: "login;forceLogin;hasLogin;getUserInfo;getAppId;getAuthType;getPlatform;getHostApp",
        lc: "login;forceLogin;getUserInfo",
        li: "onAppShow;onAppLaunch",
      };
    },
    V3KO: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DmcDomainHook = void 0);
      var o = n("bb6g"),
        r = n("7vMp"),
        i = n("49xj"),
        a = (function () {
          function e() {
            this.readDomainHooks = [];
          }
          return (
            (e.prototype.useReadDomain = function (e) {
              var t = this;
              if (!i.isFunc(e))
                throw r.createError("useReadDomain 需要传入 callback 函数");
              var n = this.readDomainHooks.push({ callback: e }) - 1;
              return i.once(function () {
                t.readDomainHooks[n] = null;
              });
            }),
            (e.prototype.execReadDomainHooks = function (e, t) {
              for (
                var n = Promise.resolve(e),
                  r = o.__spreadArrays(this.readDomainHooks),
                  i = function () {
                    var e = r.shift();
                    e &&
                      (n = n.then(function (n) {
                        return e.callback(n, t);
                      }));
                  };
                r.length;

              )
                i();
              return n;
            }),
            e
          );
        })();
      t.DmcDomainHook = a;
    },
    XmI9: function (e, t) {
      e.exports = {
        d: "navHeight;2",
        w: "ShopNavWeapp;BottomTabbarBg",
        wc: "BottomTabbarBg",
        wd: "ShopNavWeapp",
      };
    },
    YIVt: function (e, t) {},
    YJen: function (e, t) {
      e.exports = {
        d: "CHAIN_BIZ_TYPE;0",
        p: "autoEnterShop;enterShopSelect;enterShopAfterLogin;setApplicationScene;getOrderEnterShopPolicy;handleUrlWithShopAutoEnter;setEnterShopCacheResult;getEnterShopCacheByBizType;getRetailShelfEnterShopConfig",
      };
    },
    Z5hk: function (e, t) {},
    ZEtj: function (e, t) {},
    atJT: function (e, t) {},
    dP9i: function (e, t) {},
    fFWL: function (e, t) {},
    gU0Q: function (e, t) {
      e.exports = {
        d: "appStyleConfig;2;themeCSS;4;themeColors;4;themeIcon;4;themeTag;4;themeRadius;4;shopStyleSettings;4;appStyleData;4",
        wd: "Main",
        pi: "updateAppStyle",
      };
    },
    ghWV: function (e, t) {},
    hrJ7: function (e, t) {},
    iBc5: function (e, t, n) {
      n.r(t),
        n.d(t, "titleMap", function () {
          return o;
        });
      var o = {
        "packages/card/detail/index": "权益卡",
        "packages/order/paid-v1/index": "付款详情",
        "packages/shop/goods/all/index": "全部商品",
        "packages/trade/cart-v1/index": "购物车",
        "packages/trade/order/list-native/index": "订单列表",
        "packages/ump/apps/cards/index": "刮刮乐",
        "packages/ump/apps/crazy/help/index": "疯狂猜",
        "packages/ump/apps/crazy/index": "疯狂猜",
        "packages/ump/apps/shake/index": "摇一摇",
        "packages/ump/apps/zodiac/index": "生肖翻翻看",
        "packages/ump/bargain-purchase/home/index": "砍价购",
        "packages/ump/blind-box/auth/index": "盲盒",
        "packages/ump/bundle-purchase/goods-list/index": "打包一口价",
        "packages/ump/collect-gift/home/index": "收藏有礼",
        "packages/ump/coupon-pack/fetch/index": "优惠券礼包",
        "packages/ump/discount-packages/index": "优惠套餐",
        "packages/ump/fission/index": "优惠券礼包",
        "packages/ump/gift/cart/index": "我要送礼",
        "packages/ump/gift/gift-list/index": "礼物记录",
        "packages/ump/gift/goods-list/index": "挑选礼物",
        "packages/ump/gift/open-gift/index": "抢礼物",
        "packages/ump/gift/share/index": "我要送礼",
        "packages/ump/gift/using-tips/instructions/index": "使用说明",
        "packages/ump/gift/using-tips/rules/index": "用户规则",
        "packages/ump/handsel-expand/index": "助力定金膨胀",
        "packages/ump/helpcut/extensions/helpcut/widgets/helpcut-block/index":
          "砍价购",
        "packages/ump/in-sourcing-fission/index": "活动首页",
        "packages/ump/meet-reduce-goods/index": "满减送",
        "packages/ump/membercard-groupon/index": "会员卡拼团",
        "packages/ump/new-lottery/extensions/casino/widgets/casino-block/index":
          "幸运大抽奖",
        "packages/ump/periodbuy-list/index": "周期购商品列表",
        "packages/ump/pintuan/playing-instruction/index": "多人拼团玩法",
        "packages/ump/plusbuy/index": "优惠换购",
        "packages/ump/presents/index": "我的赠品",
        "packages/ump/second-half-discount/index": "第2件半价",
        "packages/ump/share-benefit/index": "分享有礼",
        "packages/ump/split-coupon-friend/index": "好友瓜分券",
        "packages/ump/welike/index": "大家喜欢",
        "packages/ump/wine-tasting/activity/index": "活动详情",
        "packages/ump/wine-tasting/sign-in/index": "签到",
        "packages/user/coupon/detail/index": "优惠详情",
        "packages/user/coupon/list/index": "我的券码",
        "packages/trade-cart/cart/index": "购物车",
        "pages/goods/detail/index": "商品详情",
        "packages/ump/helpcut/index": "砍价购",
        "packages/ump/new-lottery/casino/index": "幸运大抽奖",
        "packages/trade/order-detail/index": "订单详情",
        "packages/trade-buy/order/buy/index": "确认订单",
        "packages/trade-pay/pay/index": "待付款的订单",
        "packages/usercenter/dashboard/index": "个人中心",
      };
    },
    ijuo: function (e, t) {},
    j1Zm: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("sgiA");
      Object.defineProperty(t, "DmcRoute", {
        enumerable: !0,
        get: function () {
          return o.DmcRoute;
        },
      });
    },
    jBAX: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRouteTargetItem =
          t.getRouteTargetList =
          t.checkValidTarget =
          t.boolRule =
          t.inRule =
          t.versionRule =
          t.grayRule =
            void 0);
      var o = n("bb6g"),
        r = n("ErI6"),
        i = n("JE2o"),
        a = { kdtId: s, version: u, hostApp: c, authType: c, bizEnv: c };
      function s(e, t, n) {
        void 0 === n && (n = {});
        var o = n.loose,
          r = e.notIn,
          i = e.in;
        if (void 0 === t) return !!o;
        if (r && r.indexOf(t) > -1) return !1;
        if (!i || !i.length) return !0;
        var a = i[0],
          s = "string" == typeof a ? parseFloat(a) : 0;
        return (s > 0 && t % 100 <= s) || i.indexOf(t) > -1;
      }
      function u(e, t, n) {
        void 0 === n && (n = {});
        var o = n.loose,
          r = e.min,
          a = e.max;
        return (
          "string" == typeof t && (t = i.parseVersion(t)),
          t && t.length
            ? (!r || -1 !== i.compareVersion(t, r)) &&
              (!a || 1 !== i.compareVersion(t, a))
            : !!o
        );
      }
      function c(e, t, n) {
        void 0 === n && (n = {});
        var o = n.loose,
          r = e.in;
        return void 0 === t ? !!o : r && r.includes("" + t);
      }
      function d(e, t, n) {
        void 0 === n && (n = {});
        var i = o.__assign(o.__assign({}, t), {
          hostApp: t.hostApp || r.DEFAULT_HOST_APP,
          authType: t.authType || r.DEFAULT_AUTH_TYPE,
        });
        return !e.some(function (e) {
          return !a[e.conditionKey](e.value, i[e.conditionKey], n);
        });
      }
      function p(e, t, n) {
        void 0 === n && (n = {});
        var o = [],
          r = null,
          i = !1;
        return (
          e.forEach(function (e) {
            var a = d(e.conditionList || [], t, n);
            !r && e.isDefault && (r = e),
              a && (o.push(e), e.isDefault && (i = !0));
          }),
          (o = o.sort(function (e, t) {
            return t.rankIndex - e.rankIndex;
          })),
          !i && r && o.push(r),
          o
        );
      }
      (t.grayRule = s),
        (t.versionRule = u),
        (t.inRule = c),
        (t.boolRule = function (e, t, n) {
          void 0 === n && (n = {});
          var o = n.loose,
            r = e.bool;
          return void 0 === t ? !!o : !!r == !!t;
        }),
        (t.checkValidTarget = d),
        (t.getRouteTargetList = p),
        (t.getRouteTargetItem = function (e, t, n) {
          void 0 === n && (n = {});
          var o = p(e, t, n);
          return o.length > 0 ? o[0] : {};
        });
    },
    jxHM: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("OCpF");
      Object.defineProperty(t, "DmcRouter", {
        enumerable: !0,
        get: function () {
          return o.DmcRouter;
        },
      });
    },
    kKRC: function (e, t) {},
    "l+0R": function (e, t) {
      e.exports = {
        d: "kdtId;4;cloudDesignConfig;4",
        w: "Main;Popup;CloudUserAuthorize",
        wc: "UserAuthorize;ProtocolContent",
        wd: "Pop",
        p: "invoke-protocol;invokeAuthCloud",
        pi: "mobileChange;invokeProtocolCloud",
        c: "UserAuthorizePopup",
      };
    },
    mfjW: function (e, t) {
      e.exports = { el: "login", li: "onPageShow" };
    },
    n9vS: function (e, t) {},
    oYCZ: function (e, t) {},
    orwW: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("bb6g"),
        r = n("pmzs");
      Object.defineProperty(t, "DmcBase", {
        enumerable: !0,
        get: function () {
          return r.DmcBase;
        },
      });
      var i = n("jxHM");
      Object.defineProperty(t, "DmcRouter", {
        enumerable: !0,
        get: function () {
          return i.DmcRouter;
        },
      });
      var a = n("j1Zm");
      Object.defineProperty(t, "DmcRoute", {
        enumerable: !0,
        get: function () {
          return a.DmcRoute;
        },
      });
      var s = n("znsT");
      Object.defineProperty(t, "DmcDomain", {
        enumerable: !0,
        get: function () {
          return s.DmcDomain;
        },
      });
      var u = n("wuMw");
      Object.defineProperty(t, "DmcClient", {
        enumerable: !0,
        get: function () {
          return u.DmcClient;
        },
      });
      var c = n("7vMp");
      Object.defineProperty(t, "createError", {
        enumerable: !0,
        get: function () {
          return c.createError;
        },
      }),
        Object.defineProperty(t, "isDmcError", {
          enumerable: !0,
          get: function () {
            return c.isDmcError;
          },
        }),
        Object.defineProperty(t, "ERROR_CODE", {
          enumerable: !0,
          get: function () {
            return c.ERROR_CODE;
          },
        }),
        o.__exportStar(n("49xj"), t),
        o.__exportStar(n("ErI6"), t);
    },
    pmzs: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DmcBase = void 0);
      var o = n("bb6g"),
        r = n("znsT"),
        i = n("j1Zm"),
        a = n("jxHM"),
        s = n("49xj"),
        u = (function () {
          function e(e, t, n, o, r) {
            (this.client = t),
              (this.adapter = n),
              (this.adapterRouter = o),
              (this.utils = {
                append: s.append,
                stringify: s.stringify,
                remove: s.remove,
                parse: s.parse,
              }),
              (this.adapter = n),
              (this.Logger = n.getLogger()),
              (this.client = t),
              (this.adapterRouter = o),
              this.setEnv(e),
              this._init(r);
          }
          return (
            Object.defineProperty(e.prototype, "config", {
              get: function () {
                return this.client.fetchLocalData();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.init = function () {
              throw new Error("Method not implemented.");
            }),
            (e.prototype._init = function (e) {
              var t = this;
              void 0 === e && (e = []);
              var n = this.client.initBizData();
              this._isReady = Promise.all(
                o.__spreadArrays(
                  e.map(function (e) {
                    return e(t.setEnv.bind(t));
                  }),
                  [n]
                )
              )
                .then(function () {
                  return !0;
                })
                .catch(function (e) {
                  return t.Logger.error("sdk 初始化异常", e, t.options), !1;
                });
              var s = function () {
                return t;
              };
              (this.router = new a.DmcRouter(s)),
                (this.route = new i.DmcRoute(s)),
                (this.domain = new r.DmcDomain(s));
            }),
            (e.prototype.refresh = function () {
              return this.client.refreshLocalData().then(function () {
                return !0;
              });
            }),
            (e.prototype.isReady = function () {
              return this._isReady;
            }),
            (e.prototype.setEnv = function (e) {
              void 0 === e && (e = {}),
                (this.options = s.initOptions(
                  o.__assign(o.__assign({}, this.options), e)
                )),
                this.client.setOptions(this.options);
            }),
            (e.prototype.setCustomConfig = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              (e = this.client).setCustomConfig.apply(e, t);
            }),
            (e.prototype.navigate = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.router).navigate.apply(e, t);
            }),
            (e.prototype.switchTab = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.router).switchTab.apply(e, t);
            }),
            (e.prototype.redirectTo = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.router).redirectTo.apply(e, t);
            }),
            (e.prototype.reLaunch = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.router).reLaunch.apply(e, t);
            }),
            (e.prototype.back = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.router).back.apply(e, t);
            }),
            (e.prototype.useBeforeLeave = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.router).useBeforeLeave.apply(e, t);
            }),
            (e.prototype.useAfterLeave = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.router).useAfterLeave.apply(e, t);
            }),
            (e.prototype.useReadDomain = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (e = this.domain).useReadDomain.apply(e, t);
            }),
            e
          );
        })();
      t.DmcBase = u;
    },
    qDwC: function (e, t) {},
    r1aO: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.jsonParse = void 0),
        (t.jsonParse = function (e, t) {
          try {
            return JSON.parse(e);
          } catch (e) {
            return t;
          }
        });
    },
    r8pP: function (e, t) {},
    sgiA: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DmcRoute = void 0);
      var o = n("bb6g"),
        r = n("49xj"),
        i = n("7vMp"),
        a = n("ErI6"),
        s = (function () {
          function e(e) {
            (this.$getInstance = e),
              (this.__routeListCache = {}),
              (this.__routeListCacheKeyList = [
                "biz",
                "hostApp",
                "authType",
                "bizEnv",
                "version",
                "kdtId",
              ]),
              (this.$getInstance = e);
          }
          return (
            (e.prototype.parseUrl = function (e, t) {
              var n = r.parseUrl(e),
                o = {
                  route: "",
                  scene: "",
                  path: n.pathname,
                  domain: n.hostname,
                  protocol: a.ROUTE_PROTOCOL.HTTPS,
                  url: e,
                  query: r.parse(n.query),
                  __absolute: !1,
                };
              return (
                r.isMiniAppURL(e) && (o.protocol = a.ROUTE_PROTOCOL.MINI_APP),
                o.domain
                  ? ((o.__absolute = !0), Promise.resolve(o))
                  : Promise.all([
                      this.$getInstance().domain.readDomain("", t),
                      this.createRouteURL(o, o.query),
                    ]).then(function (e) {
                      var t = e[0],
                        n = e[1];
                      return (o.domain = t.domain), (o.url = n), o;
                    })
              );
            }),
            (e.prototype.readRoute = function (e, t) {
              var n = this;
              return this.$getInstance()
                .isReady()
                .then(function () {
                  var a = n.$getInstance().options._version,
                    s = (t || {}).version;
                  return n.getRouteItems(e, t).then(function (u) {
                    var c = r.getRouteTargetItem(
                        u.targetList || [],
                        o.__assign(
                          o.__assign(
                            o.__assign({}, n.$getInstance().options),
                            t || {}
                          ),
                          { version: s || a }
                        )
                      ),
                      d = c.path,
                      p = c.protocol,
                      l = c.domainItem,
                      f = c.scene;
                    return d
                      ? n.getDomain(f, l, d).then(function (t) {
                          return {
                            route: e,
                            path: d,
                            protocol: p,
                            domain: t,
                            scene: f,
                          };
                        })
                      : Promise.reject(
                          i.createError(
                            e + " 路由不存在",
                            i.ERROR_CODE.NOT_FOUND
                          )
                        );
                  });
                });
            }),
            (e.prototype.createUrl = function (e, t, n) {
              var r = this;
              return e
                ? this.readRoute(e, n)
                    .then(function (e) {
                      return r.createRouteURL(e, t).then(function (t) {
                        return { route: e, url: t };
                      });
                    })
                    .then(function (e) {
                      var n = e.route,
                        r = e.url;
                      return o.__assign(o.__assign({}, n), {
                        url: r,
                        query: t || {},
                      });
                    })
                : Promise.reject(i.createError("routeName 不能为空"));
            }),
            (e.prototype.getRouteByUrl = function (e, t) {
              var n = this;
              if ((void 0 === t && (t = {}), !e))
                return Promise.reject(i.createError("url 不能为空"));
              var a = r.parseUrl(e),
                s = this.$getInstance(),
                u = s.config.routes,
                c = void 0 === u ? {} : u,
                d = s.options,
                p = o.__assign(o.__assign({}, d), t);
              return new Promise(function (e, t) {
                var o = r.getDmcOptionsKey(p, n.__routeListCacheKeyList),
                  i = n.__routeListCache[o];
                return i
                  ? e(i)
                  : r.different(d, p)
                  ? e(Object.values(c))
                  : n
                      .$getInstance()
                      .client.apiGetPlatformRouteList(p.biz, p)
                      .then(function (t) {
                        (n.__routeListCache[o] = t), e(t);
                      })
                      .catch(t);
              }).then(function (e) {
                var t = (
                  e.find(function (e) {
                    return e.targetList.find(function (e) {
                      return r.comparePath(e.path, a.pathname);
                    });
                  }) || {}
                ).route;
                return t ? n.readRoute(t, p) : null;
              });
            }),
            (e.prototype.getLinkParams = function (e, t) {
              var n = {};
              if (t.withoutLinkParams) return Promise.resolve(n);
              var o = this.$getInstance(),
                r = o.options,
                i = o.adapter,
                s =
                  ("function" == typeof t.setLinkParams
                    ? t.setLinkParams(r.linkParams)
                    : r.linkParams) || [];
              return i
                .getQueryParam()
                .then(function (e) {
                  return (
                    s.forEach(function (t) {
                      var o = e[t];
                      a.LINK_PARAMS.version === t
                        ? (o || r.version) && (n[t] = o || r.version)
                        : (o || r[t]) && (n[t] = o || r[t]);
                    }),
                    n
                  );
                })
                .catch(function () {
                  return n;
                });
            }),
            (e.prototype.createRouteURL = function (e, t, n) {
              return (
                void 0 === t && (t = {}),
                void 0 === n && (n = {}),
                this.getLinkParams(e, n).then(function (n) {
                  return r.createRouteURL(e, o.__assign(o.__assign({}, n), t));
                })
              );
            }),
            (e.prototype.getRouteItems = function (e, t) {
              var n = this;
              void 0 === t && (t = {});
              var a = this.$getInstance().options;
              return new Promise(function (s, u) {
                var c,
                  d = o.__assign(o.__assign({}, a), t),
                  p = r.getDmcOptionsKey(d, n.__routeListCacheKeyList),
                  l = n.__routeListCache[p];
                if (
                  (l &&
                    (c = l.find(function (t) {
                      return t.route === e;
                    })),
                  !c && !r.different(a, d))
                )
                  return n
                    .$getInstance()
                    .client.apiGetPlatformRoute(d.biz, e, d)
                    .then(s)
                    .catch(u);
                if (!(c = n.$getInstance().config.routes[e]))
                  throw i.createError(
                    e + " 路由不存在",
                    i.ERROR_CODE.NOT_FOUND
                  );
                return s(c);
              });
            }),
            (e.prototype.getDomain = function (e, t, n) {
              var o = this.$getInstance();
              return Promise.resolve()
                .then(function () {
                  return t
                    ? o.domain.execReadDomainHooks(t, n)
                    : o.domain.readDomain(e, { path: n });
                })
                .then(function (e) {
                  return e.domain || "";
                });
            }),
            e
          );
        })();
      t.DmcRoute = s;
    },
    v3uz: function (e, t) {},
    vCoL: function (e, t) {},
    vPrZ: function (e, t) {},
    wB7r: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.processConfigs = t.createRouteURL = void 0);
      var o = n("bb6g"),
        r = n("z5+1"),
        i = n("ErI6");
      (t.createRouteURL = function (e, t) {
        void 0 === t && (t = {});
        var n = r.append(e.path, t);
        return e.protocol
          ? "miniApp" === e.protocol
            ? n
            : e.protocol + "://" + e.domain + n
          : n;
      }),
        (t.processConfigs = function (e) {
          if (e.domainsMap && Object.keys(e.domainsMap).length) return e;
          var t = e.domains.reduce(function (e, t) {
            var n = t.scene;
            return n ? (e[n] = t) : (e[i.__default_domain_key] = t), e;
          }, {});
          return o.__assign(o.__assign({}, e), { domainsMap: t });
        });
    },
    wuMw: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DmcClient = void 0);
      var o = n("bb6g"),
        r = n("7vMp"),
        i = n("49xj"),
        a = (function () {
          function e(e, t) {
            (this.adapter = e),
              (this.maxRetry = 3),
              (this.customConfig = []),
              (this.config = { domains: [], domainsMap: {}, routes: {} }),
              (this.adapter = e),
              (this.dmcOptions = i.initOptions(t));
          }
          return (
            (e.prototype.setOptions = function (e) {
              this.dmcOptions = e;
            }),
            (e.prototype.setCustomConfig = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              (e = this.customConfig).push.apply(e, t);
            }),
            (e.prototype.initBizData = function () {
              var e = this;
              return this.createInitLoopTask().then(function (t) {
                return (e.config = e.mergeCustomConfig(t)), t;
              });
            }),
            (e.prototype.fetchLocalData = function () {
              return this.config;
            }),
            (e.prototype.getBaseUrl = function () {
              return this.maxRetry <= 1
                ? this.getStandByBaseUrl()
                : Promise.resolve(this.BASE_URL);
            }),
            (e.prototype.getStandByBaseUrl = function () {
              return Promise.resolve(this.BASE_URL);
            }),
            (e.prototype.fetchRemoteData = function () {
              var e = this;
              return (
                this.fetchRemoteDataPromise ||
                  (this.fetchRemoteDataPromise = this.getBaseUrl().then(
                    function (t) {
                      return e.adapter
                        .request({
                          url: t + "/biz/init.json",
                          method: "GET",
                          data: o.__assign({}, e.dmcOptions),
                        })
                        .then(function (t) {
                          return (
                            (e.fetchRemoteDataPromise = void 0),
                            i.processConfigs(t.data)
                          );
                        })
                        .catch(function (t) {
                          throw ((e.fetchRemoteDataPromise = void 0), t);
                        });
                    }
                  )),
                this.fetchRemoteDataPromise
              );
            }),
            (e.prototype.refreshLocalData = function () {
              var e = this;
              return this.fetchRemoteData().then(function (t) {
                return (e.config = e.mergeCustomConfig(t)), t;
              });
            }),
            (e.prototype.createInitLoopTask = function () {
              var e = this;
              return this.maxRetry < 1
                ? Promise.reject(r.createError("获取初始化数据失败"))
                : this.fetchRemoteData().catch(function (t) {
                    return (
                      e.maxRetry--,
                      e.adapter
                        .getLogger()
                        .warn(
                          "数据获取失败，开始重试第 " + e.maxRetry + "次",
                          t
                        ),
                      e.createInitLoopTask()
                    );
                  });
            }),
            (e.prototype.apiGetPlatformRouteList = function (e, t) {
              return this.adapter
                .request({
                  url: this.BASE_URL + "/route/list.json",
                  method: "GET",
                  data: t,
                })
                .then(function (e) {
                  return e.data;
                });
            }),
            (e.prototype.apiGetPlatformRoute = function (e, t, n) {
              return this.adapter
                .request({
                  url: this.BASE_URL + "/route/item.json",
                  method: "GET",
                  data: o.__assign({ route: t }, n),
                })
                .then(function (e) {
                  return e.data;
                });
            }),
            (e.prototype.apiGetPlatformDomain = function (e, t) {
              return this.adapter
                .request({
                  url: this.BASE_URL + "/domain/item.json",
                  method: "GET",
                  data: { biz: e, scene: t },
                })
                .then(function (e) {
                  return e.data;
                });
            }),
            (e.prototype.mergeCustomConfig = function (e) {
              return e;
            }),
            e
          );
        })();
      t.DmcClient = a;
    },
    y1RM: function (e, t) {},
    yEX5: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.routeReduction =
          t.domainReduction =
          t.routeCompression =
          t.domainCompression =
            void 0),
        (t.domainCompression = function (e) {
          return e.map(function (e) {
            return {
              d: e.domain,
              dd: e.defaultDomain,
              ds: e.scene,
              dsg: e.sceneGroup,
              dsb: e.standbyList,
            };
          });
        }),
        (t.routeCompression = function (e) {
          var t = {};
          return (
            Object.keys(e).forEach(function (n) {
              t[n] = {
                r: n,
                t: e[n].targetList.map(function (e) {
                  return {
                    p: e.path,
                    d: e.domain,
                    ds: e.scene,
                    a: e.isDefault,
                    r: e.rankIndex,
                    dp: e.protocol,
                    c:
                      e.conditionList &&
                      e.conditionList.map(function (e) {
                        return { k: e.conditionKey, v: e.value };
                      }),
                    th: e.hostApp,
                    ta: e.authType,
                  };
                }),
              };
            }),
            t
          );
        }),
        (t.domainReduction = function (e) {
          return e.length
            ? e[0].domain
              ? e
              : e.map(function (e) {
                  return {
                    domain: e.d,
                    defaultDomain: e.dd,
                    scene: e.ds,
                    sceneGroup: e.dsg,
                    standbyList: e.dsb,
                  };
                })
            : e;
        }),
        (t.routeReduction = function (e) {
          var t = {},
            n = Object.keys(e);
          return n.length
            ? e[n[0]].route
              ? e
              : (n.forEach(function (n) {
                  t[n] = {
                    route: n,
                    targetList: e[n].t.map(function (e) {
                      return {
                        path: e.p,
                        domain: e.d,
                        scene: e.ds,
                        isDefault: e.a,
                        rankIndex: e.r,
                        protocol: e.dp,
                        conditionList:
                          e.c &&
                          e.c.map(function (e) {
                            return { conditionKey: e.k, value: e.v };
                          }),
                        hostApp: e.th,
                        authType: e.ta,
                      };
                    }),
                  };
                }),
                t)
            : t;
        });
    },
    "z5+1": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.comparePath =
          t.parseUrl =
          t.isDmcRouteName =
          t.isMiniAppURL =
          t.isHttpURL =
          t.hasDomain =
          t.remove =
          t.append =
          t.parse =
          t.stringify =
            void 0);
      var o = n("bb6g"),
        r = o.__importDefault(n("y8O9")),
        i = o.__importDefault(n("w2Y9")),
        a = o.__importDefault(n("IIov"));
      (t.stringify = function (e) {
        return r.default.stringify(e);
      }),
        (t.parse = function (e) {
          return r.default.parseUrl(e).query;
        }),
        (t.append = function (e, t) {
          void 0 === t && (t = {});
          var n = o.__assign({}, t);
          return i.default.add(
            (function (e, t) {
              try {
                return e.replace(/:(\w+)/g, function (e, n) {
                  var o = t[n];
                  return delete t[n], o;
                });
              } catch (t) {
                return e;
              }
            })(e, n),
            n
          );
        }),
        (t.remove = function (e, t) {
          return t.reduce(function (e, t) {
            return i.default.remove(e, t);
          }, e);
        }),
        (t.hasDomain = function (e) {
          return 0 === e.indexOf("http") || 0 === e.indexOf("//");
        }),
        (t.isHttpURL = function (e) {
          return 0 === e.indexOf("http");
        }),
        (t.isMiniAppURL = function (e) {
          return /^(\/)?(pages|packages)\//.test(e);
        }),
        (t.isDmcRouteName = function (e) {
          return -1 === e.indexOf("/");
        }),
        (t.parseUrl = function (e) {
          return 0 === e.indexOf("//") && (e = "https:" + e), new a.default(e);
        }),
        (t.comparePath = function (e, t) {
          if (e.indexOf(":") < 0) return e === t;
          var n = e.split("/"),
            o = t.split("/");
          if (n.length !== o.length) return !1;
          for (var r = 0; r < n.length; r++)
            if (!n[r].startsWith(":") && n[r] !== o[r]) return !1;
          return !0;
        });
    },
    z70Z: function (e, t) {},
    zaUH: function (e, t) {
      e.exports = {
        d: "salesmanIdentityInfo;2;salesmanPromoteGoodsInfo;2;salesmanIdentityInfo;4;salesmanPromoteGoodsInfo;4;cloudDesignConfig;4",
        e: "salesman:get:feature:alias;salesman:share:popup:query;salesman:share:popup:optionMenu;salesman:share:popup:close;salesman:share:popup:show;salesman:check:isHalfScreen",
        el: "",
        w: "SalesmanSharePopup;CubeHeader;CubeTabContainer;CubeTabPoster;CubeTabPromote;CubeFooter;MainFrame;CloudSalesmanSharePopup;CloudSalesmanSharePopupHeader;CloudSalesmanSharePopupTabs;CloudSalesmanSharePopupCustomTabContent;CloudSalesmanSharePopupFooter",
        wc: "SalesmanSharePopup;CubeHeader;CubeTabContainer;CubeTabPoster;CubeTabPromote;CubeFooter;MainFrame;UserAuthorize;CloudSalesmanSharePopup;CloudSalesmanSharePopupHeader;CloudSalesmanSharePopupTabs;CloudSalesmanSharePopupCustomTabContent;CloudSalesmanSharePopupFooter",
        wd: "SalesmanSharePopup",
        l: "",
        lc: "",
        p: "setFeatureAlias;setUserInfo;setSalesmanSharePopupShareInfo;setNativeYunExtension;initSalesmanSharePageInfo;initSalesmanShareData;toggleSalesmanSharePopup;updateCloudData",
        pi: "toggleSalesmanSharePopup;updateCloudData",
        c: "",
        cc: "",
        li: "beforePageMount;onPageShow;onPageHide;pageDestroyed",
      };
    },
    znsT: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("P3TF");
      Object.defineProperty(t, "DmcDomain", {
        enumerable: !0,
        get: function () {
          return o.DmcDomain;
        },
      });
    },
  })
);
