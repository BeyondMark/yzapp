"use strict";
var r = require("~/r");
r(
  "t0AB",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "1I83": function (e) {
      e.exports = JSON.parse(
        '{"design":[{"type":"config","profile":{"protocolEcloudType":0,"shopPrivacyCode":["SHOP_USER_PRIVACY"],"theme":"#07c160","agreeBtn":"允许","bottomExtHeight":0,"buttonBorderRaduis":0,"showCancelButton":true,"showYouzanUserPrivacy":true,"showYouzanUserUse":true}}]}'
      );
    },
    jQ93: function (e, t, o) {
      var r = o("rmWm"),
        n = o.n(r).a,
        a = o("YIkY"),
        u = o.n(a).a;
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
      var i = function (e) {
        var t, o;
        return (
          !1 !== c(e) &&
          "function" == typeof (t = e.constructor) &&
          !1 !== c((o = t.prototype)) &&
          !1 !== o.hasOwnProperty("isPrototypeOf")
        );
      };
      t.a = function (e) {
        var t,
          o = u(e);
        if ("object" !== o && "array" !== o) return n(e);
        for (
          var r = [],
            a = [{ value: e, key: void 0, ctx: null }],
            c = function () {
              var e = a.shift(),
                { value: o, key: c, ctx: s } = e;
              r.forEach((e) => {
                if (e === o) throw new Error("Deep copy circular structure");
              });
              var { value: l, needCycle: p } = (function (e) {
                switch (u(e)) {
                  case "object":
                    return i(e)
                      ? { value: new e.constructor(), needCycle: !0 }
                      : { value: e, needCycle: !1 };
                  case "array":
                    return { value: new e.constructor(), needCycle: !0 };
                  default:
                    return { value: n(e), needCycle: !1 };
                }
              })(o);
              s ? (s[c] = l) : (t = l),
                p && r.push(o),
                p &&
                  Object.keys(o).forEach((e) => {
                    a.push({ value: o[e], key: e, ctx: l });
                  });
            };
          a.length > 0;

        )
          c();
        return t;
      };
    },
    rx2o: function (e, t, o) {
      o.d(t, "b", function () {
        return u;
      }),
        o.d(t, "c", function () {
          return c;
        }),
        o.d(t, "h", function () {
          return i;
        }),
        o.d(t, "a", function () {
          return s;
        }),
        o.d(t, "g", function () {
          return l;
        }),
        o.d(t, "e", function () {
          return p;
        }),
        o.d(t, "d", function () {
          return d;
        }),
        o.d(t, "f", function () {
          return h;
        }),
        o.d(t, "m", function () {
          return v;
        }),
        o.d(t, "i", function () {
          return f;
        }),
        o.d(t, "k", function () {
          return y;
        }),
        o.d(t, "j", function () {
          return m;
        }),
        o.d(t, "n", function () {
          return b;
        }),
        o.d(t, "l", function () {
          return C;
        }),
        o.d(t, "o", function () {
          return E;
        });
      var r = o("jQ93"),
        n = o("1I83"),
        a = () => getApp().resolveProtocol(),
        u = "PLATFORM_USER_PRIVACY",
        c = "PLATFORM_USER_USE",
        i = "SHOP_USER_PRIVACY",
        s = {
          NOT_BESPOKE: { code: 1001, msg: "该商家没有定制协议" },
          USER_DISAGREE: { code: 1002, msg: "用户拒绝签署协议" },
        },
        l = "app:account:authorize:custom-ui-protocol-show",
        p = "app:account:authorize:custom-ui-protocol-close",
        d = "app:account:authorize:custom-ui-protocol-agree",
        h = "app:account:authorize:custom-ui-protocol-disagree",
        g = () => {
          try {
            var { design: e = [] } = n || {};
            return Object(r.a)(e[0].profile || {});
          } catch (e) {
            return {};
          }
        },
        v = () => 1 === g().protocolEcloudType,
        f = () => {
          var {
            protocolEcloudType: e,
            shopPrivacyCode: t,
            showYouzanUserPrivacy: o,
            showYouzanUserUse: r,
          } = g();
          if (1 === e) {
            var n = Array.isArray(t) ? t : [t];
            return o && n.push(u), r && n.push(c), n;
          }
          return [];
        },
        y = function (e) {
          var { ignoreCache: t = !1 } = void 0 === e ? {} : e,
            { protocolEcloudType: o } = g();
          return 1 === o
            ? Promise.resolve(f())
            : a().then((e) => {
                var { getProtocolData: o } = e;
                return o(void 0, { ignoreCache: t }).then((e) => {
                  var { protocolCode: t } = e;
                  return t;
                });
              });
        },
        m = () =>
          new Promise((e) => {
            y().then((t) => {
              a().then((o) => {
                var { getProtocolData: r } = o;
                r(t).then((t) => {
                  var { protocolData: o } = t;
                  e(o);
                });
              });
            });
          }),
        b = () =>
          m().then((e) =>
            a().then((t) => {
              var { protocolSign: o } = t;
              return o(e.map((e) => e.agreementTplId));
            })
          ),
        C = (e) => {
          if (v()) {
            var {
              theme: t,
              agreeBtn: o,
              buttonBorderRaduis: r,
              showCancelButton: n,
              bottomExtHeight: a,
            } = g();
            (e.isUIComponent = !0),
              (e.theme = t),
              (e.yunBottomExtHeight = a || 0),
              (e.btnConfig.agreeBtn = o),
              (e.btnConfig.hideDisagree = !n),
              (e.btnConfig.customStyle = r
                ? "border-radius: " + r + "px !important;"
                : "");
          }
          return e;
        },
        E = function (e, t, o) {
          if ((void 0 === o && (o = []), v())) return e.triggerAsync(t, ...o);
        };
    },
    t0AB: function (e, t, o) {
      o.r(t);
      var r = o("DXKY"),
        n = o("z16c"),
        a = o("3tyi"),
        u = o("9ZMt"),
        c = o("8B9M"),
        i = o("rx2o"),
        s = Object(c.a)();
      Object(n.a)({
        options: { multipleSlots: !0 },
        properties: {
          popupCustomStyle: { type: String, value: "" },
          zIndex: { type: Number, value: 10100 },
          visible: { type: Boolean, value: !1 },
          useNativeSlot: { type: Boolean, value: !1 },
          needSkipSigned: { type: Boolean, value: !0 },
          duration: { type: Number, value: 300 },
        },
        data: Object(i.l)({
          theme: "#679FFF26",
          isUIComponent: !1,
          code: Object(i.i)(),
          btnConfig: {
            agreeBtn: "",
            disagreeBtn: "",
            hideDisagree: !1,
            customStyle: "",
          },
          yunBottomExtHeight: 0,
          agreeBtnDisabled: !1,
        }),
        attached() {
          u.default.setGlobal(
            "yun.account.protocol.config",
            Object(a.a)(this.data, [
              "isUIComponent",
              "theme",
              "yunBottomExtHeight",
              "btnConfig",
            ])
          ),
            r.a.trigger("yun.account.protocol.init");
        },
        methods: {
          handleAgree(e) {
            var t = () => {
              this.triggerEvent("agree", { protocol: !0 }),
                s.logger.log({
                  et: "click",
                  ei: "protocol_click",
                  en: "协议授权组件授权同意",
                });
            };
            if (this.data.isUIComponent) {
              var o = (t) => {
                e.detail && e.detail(t);
              };
              Object(i.o)(this, i.d)
                .then(() => Object(i.n)())
                .then(() => {
                  o({ success: !0 }), t();
                })
                .catch((e) => {
                  o({ success: !1, error: e });
                });
            } else t();
          },
          handleDisagree() {
            this.triggerEvent("disagree", { protocol: !0 }),
              Object(i.o)(this, i.f);
          },
          handlePopupBeforeEnter() {
            this.triggerEvent("open"),
              Object(i.o)(this, i.g),
              s.logger.log({
                et: "view",
                ei: "protocol_exposure",
                en: "协议授权组件曝光",
              });
          },
          handlePopupAfterLeave() {
            this.triggerEvent("close"), Object(i.o)(this, i.e);
          },
          handleAgreeDisableChanged(e) {
            this.data.isUIComponent &&
              this.setYZData({ agreeBtnDisabled: e.detail });
          },
        },
      });
    },
  })
);
