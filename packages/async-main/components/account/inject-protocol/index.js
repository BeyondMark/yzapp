"use strict";
var r = require("~/r");
r(
  "EYJL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "1I83": function (t) {
      t.exports = JSON.parse(
        '{"design":[{"type":"config","profile":{"protocolEcloudType":0,"shopPrivacyCode":["SHOP_USER_PRIVACY"],"theme":"#07c160","agreeBtn":"允许","bottomExtHeight":0,"buttonBorderRaduis":0,"showCancelButton":true,"showYouzanUserPrivacy":true,"showYouzanUserUse":true}}]}'
      );
    },
    EYJL: function (t, e, o) {
      o.r(e);
      var r = o("u8kV"),
        n = o("QxN7"),
        u = o("DXKY"),
        c = o("9ZMt"),
        a = o("rx2o"),
        i = getApp(),
        { logSkynet: s } = n.platform.authLogger,
        h = [a.h, a.c, a.b];
      Object(r.b)({
        properties: {
          noAutoAuth: { type: Boolean, value: !1 },
          zIndex: { type: Number, value: 10100 },
        },
        data: { showProtocol: !1, needSkipSigned: !0, popupDuration: 300 },
        attached() {
          this.initProtocol(), this.autoAuthProtocol();
        },
        detached() {
          this.getProtocol().then((t) => t.off({ source: t.source }));
        },
        pageLifetimes: {
          show() {
            this.autoAuthProtocol();
          },
        },
        methods: {
          getProtocol() {
            if (!this.$_protocolPs) {
              var t = "inject-protocol_" + Date.now();
              this.$_protocolPs = o
                .e("packages/async-main/chunk")
                .then(o.t.bind(null, "HsSF", 7))
                .then((e) => {
                  var { InvokeProtocol: o } = e;
                  return new o({ source: t });
                })
                .catch((e) => {
                  throw (
                    ((this.$_protocolPs = null),
                    s("Resolve passport-protocol failed", {
                      from: t,
                      error: e.message || e.msg || e,
                    }),
                    e)
                  );
                });
            }
            return this.$_protocolPs;
          },
          handleAgree() {
            i.refreshUserAuthData().finally(() => {
              Object(n.emitUserAuthSuccess)({
                authTypeList: ["protocol"],
                authPopTypeList: ["protocol"],
              });
            }),
              this.close(),
              this.getProtocol().then((t) => {
                t.trigger("agree");
              });
          },
          handleDisagree() {
            this.close();
          },
          close() {
            this.data.showProtocol &&
              u.a.trigger("account:user-authorize:behavior-finish"),
              this.setYZData({ showProtocol: !1 });
          },
          judgeIsBespokeProtocol: () =>
            Object(a.m)()
              ? Promise.resolve(!0)
              : Object(a.k)().then((t) => t.some((t) => !h.includes(t))),
          handleBespoke(t) {
            var { needSkipSigned: e = !1 } = t;
            this.judgeIsBespokeProtocol().then((t) => {
              t
                ? this.setYZData({ showProtocol: !0, needSkipSigned: e })
                : this.getProtocol().then((t) =>
                    t.trigger("disagree", a.a.NOT_BESPOKE)
                  );
            });
          },
          initProtocol() {
            var t = this;
            this.getProtocol().then((e) => {
              e.on(
                "show",
                function (o) {
                  if ((void 0 === o && (o = {}), "vip-bespoke" === o.bizType))
                    return t.handleBespoke(o);
                  i.resolveTeeAPI().then((o) => {
                    o.getUserPrivacy().then((o) => {
                      var { protocol: r } = o;
                      if (r) return t.close(), void e.trigger("agree");
                      t.setYZData({ showProtocol: !0, needSkipSigned: !0 });
                    });
                  });
                },
                { playback: !0 }
              ),
                e.on("disagree", () => {
                  c.default.setGlobal("PROTOCOL_DENIED", !0);
                }),
                e.on("close", function (o) {
                  var { immediately: r, excludeSource: n } =
                    void 0 === o ? {} : o;
                  if (t.data.showProtocol && (!n || n !== e.source)) {
                    var u = t.data.popupDuration,
                      c = { showProtocol: !1 };
                    r &&
                      ((c.popupDuration = 0),
                      setTimeout(() => {
                        t.setYZData({ popupDuration: u });
                      }, 300)),
                      t.setYZData(c);
                  }
                }),
                e.init(),
                this.triggerEvent("onProtocolInitListen");
            });
          },
          autoAuthProtocol() {
            this.properties.noAutoAuth ||
              c.default.getGlobal("PROTOCOL_DENIED") ||
              this.checkAutoAuth().then((t) => {
                t &&
                  i.resolveTeeAPI().then((t) => {
                    t.getUserPrivacy().then((t) => {
                      var { protocol: e } = t;
                      e ||
                        this.getProtocol().then((t) =>
                          t.auth({ bizType: "auto-auth" })
                        );
                    });
                  });
              });
          },
          checkAutoAuth() {
            var t = c.default.getGlobal("PROTOCOL_AUTO_AUTH");
            return "boolean" == typeof t
              ? Promise.resolve(t)
              : (this.__checkAuto ||
                  (this.__checkAuto = Object(n.request)({
                    origin: "passport",
                    path: "/api/authorize/protocol/can-auto-auth.json",
                  })
                    .then((t) => {
                      var { support: e } = t;
                      return (
                        (this.__checkAuto = null),
                        c.default.setGlobal("PROTOCOL_AUTO_AUTH", e),
                        e
                      );
                    })
                    .catch(() => ((this.__checkAuto = null), !1))),
                this.__checkAuto);
          },
        },
      });
    },
    jQ93: function (t, e, o) {
      var r = o("rmWm"),
        n = o.n(r).a,
        u = o("YIkY"),
        c = o.n(u).a;
      function a(t) {
        return (
          !0 ==
            (null != (e = t) &&
              "object" == typeof e &&
              !1 === Array.isArray(e)) &&
          "[object Object]" === Object.prototype.toString.call(t)
        );
        var e;
      }
      var i = function (t) {
        var e, o;
        return (
          !1 !== a(t) &&
          "function" == typeof (e = t.constructor) &&
          !1 !== a((o = e.prototype)) &&
          !1 !== o.hasOwnProperty("isPrototypeOf")
        );
      };
      e.a = function (t) {
        var e,
          o = c(t);
        if ("object" !== o && "array" !== o) return n(t);
        for (
          var r = [],
            u = [{ value: t, key: void 0, ctx: null }],
            a = function () {
              var t = u.shift(),
                { value: o, key: a, ctx: s } = t;
              r.forEach((t) => {
                if (t === o) throw new Error("Deep copy circular structure");
              });
              var { value: h, needCycle: l } = (function (t) {
                switch (c(t)) {
                  case "object":
                    return i(t)
                      ? { value: new t.constructor(), needCycle: !0 }
                      : { value: t, needCycle: !1 };
                  case "array":
                    return { value: new t.constructor(), needCycle: !0 };
                  default:
                    return { value: n(t), needCycle: !1 };
                }
              })(o);
              s ? (s[a] = h) : (e = h),
                l && r.push(o),
                l &&
                  Object.keys(o).forEach((t) => {
                    u.push({ value: o[t], key: t, ctx: h });
                  });
            };
          u.length > 0;

        )
          a();
        return e;
      };
    },
    rx2o: function (t, e, o) {
      o.d(e, "b", function () {
        return c;
      }),
        o.d(e, "c", function () {
          return a;
        }),
        o.d(e, "h", function () {
          return i;
        }),
        o.d(e, "a", function () {
          return s;
        }),
        o.d(e, "g", function () {
          return h;
        }),
        o.d(e, "e", function () {
          return l;
        }),
        o.d(e, "d", function () {
          return p;
        }),
        o.d(e, "f", function () {
          return d;
        }),
        o.d(e, "m", function () {
          return f;
        }),
        o.d(e, "i", function () {
          return v;
        }),
        o.d(e, "k", function () {
          return P;
        }),
        o.d(e, "j", function () {
          return y;
        }),
        o.d(e, "n", function () {
          return m;
        }),
        o.d(e, "l", function () {
          return A;
        }),
        o.d(e, "o", function () {
          return b;
        });
      var r = o("jQ93"),
        n = o("1I83"),
        u = () => getApp().resolveProtocol(),
        c = "PLATFORM_USER_PRIVACY",
        a = "PLATFORM_USER_USE",
        i = "SHOP_USER_PRIVACY",
        s = {
          NOT_BESPOKE: { code: 1001, msg: "该商家没有定制协议" },
          USER_DISAGREE: { code: 1002, msg: "用户拒绝签署协议" },
        },
        h = "app:account:authorize:custom-ui-protocol-show",
        l = "app:account:authorize:custom-ui-protocol-close",
        p = "app:account:authorize:custom-ui-protocol-agree",
        d = "app:account:authorize:custom-ui-protocol-disagree",
        g = () => {
          try {
            var { design: t = [] } = n || {};
            return Object(r.a)(t[0].profile || {});
          } catch (t) {
            return {};
          }
        },
        f = () => 1 === g().protocolEcloudType,
        v = () => {
          var {
            protocolEcloudType: t,
            shopPrivacyCode: e,
            showYouzanUserPrivacy: o,
            showYouzanUserUse: r,
          } = g();
          if (1 === t) {
            var n = Array.isArray(e) ? e : [e];
            return o && n.push(c), r && n.push(a), n;
          }
          return [];
        },
        P = function (t) {
          var { ignoreCache: e = !1 } = void 0 === t ? {} : t,
            { protocolEcloudType: o } = g();
          return 1 === o
            ? Promise.resolve(v())
            : u().then((t) => {
                var { getProtocolData: o } = t;
                return o(void 0, { ignoreCache: e }).then((t) => {
                  var { protocolCode: e } = t;
                  return e;
                });
              });
        },
        y = () =>
          new Promise((t) => {
            P().then((e) => {
              u().then((o) => {
                var { getProtocolData: r } = o;
                r(e).then((e) => {
                  var { protocolData: o } = e;
                  t(o);
                });
              });
            });
          }),
        m = () =>
          y().then((t) =>
            u().then((e) => {
              var { protocolSign: o } = e;
              return o(t.map((t) => t.agreementTplId));
            })
          ),
        A = (t) => {
          if (f()) {
            var {
              theme: e,
              agreeBtn: o,
              buttonBorderRaduis: r,
              showCancelButton: n,
              bottomExtHeight: u,
            } = g();
            (t.isUIComponent = !0),
              (t.theme = e),
              (t.yunBottomExtHeight = u || 0),
              (t.btnConfig.agreeBtn = o),
              (t.btnConfig.hideDisagree = !n),
              (t.btnConfig.customStyle = r
                ? "border-radius: " + r + "px !important;"
                : "");
          }
          return t;
        },
        b = function (t, e, o) {
          if ((void 0 === o && (o = []), f())) return t.triggerAsync(e, ...o);
        };
    },
  })
);
