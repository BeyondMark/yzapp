"use strict";
var r = require("~/r");
r(
  "gEhn",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8P3R": function (e, t, i) {
      i.d(t, "c", function () {
        return m;
      }),
        i.d(t, "b", function () {
          return y;
        });
      var o = i("bb6g"),
        a = i("QxN7"),
        n = i("9ZMt"),
        r = i("z9IR"),
        s = i("AGZf"),
        c = i("CR7H"),
        u = i("oGZU"),
        l = i("eWMZ"),
        d = i("FkXz"),
        h = i("mQt2"),
        p = i("bmpj"),
        b = a.platform.authLogger;
      function g(e, t, i, c, u) {
        var p = (e && e.response) || e,
          g = Object(o.__assign)(Object(o.__assign)({}, p), {
            data: Object(o.__assign)(Object(o.__assign)({}, p.data), u),
            errMsg: Object(a.getErrorMsg)(p) || "登录失败，请稍后重试",
          });
        b.logAll({
          logName: "授权-手机号登录失败",
          logData: { err: g, type: t, env: n.default.getEnv() },
        });
        return (function () {
          if (g.code === d.a)
            return Object(h.a)().then(function (e) {
              return e.forceLogin().finally(function () {
                throw ((g.errMsg = "解密失败，请稍后重试"), g);
              });
            });
          if (-1 !== d.b.indexOf(g.code)) {
            var e = g.data;
            return a.platform.getConfig("name").then(function (t) {
              var o = e.mobile.replace(/^(\d{3})(\d{4})(.*)$/, "$1****$3");
              return (
                "function" == typeof c && c(),
                r.a
                  .confirm({
                    title: "",
                    message: "手机号" + o + "已与其他" + t + "账号绑定",
                    confirmButtonText: "继续登录",
                    cancelButtonText: "换个账号",
                    zIndex: 20009,
                  })
                  .then(function () {
                    throw (
                      (i(
                        "https://uic.youzan.com/passport/mobile/dispatch?&mobile=" +
                          e.mobile +
                          "&countryCode=" +
                          encodeURIComponent(e.countryCode || l.a)
                      ),
                      g)
                    );
                  })
              );
            });
          }
          return Promise.reject(g);
        })().catch(function (e) {
          throw (
            (e &&
              e.errMsg &&
              setTimeout(function () {
                s.a.clear(),
                  Object(s.a)({
                    message: e.errMsg,
                    type: "fail",
                    zIndex: 20010,
                    duration: 2e3,
                  });
              }, 200),
            e)
          );
        });
      }
      function f(e) {
        return a.platform.getConfig("source").then(function (t) {
          return Object(u.c)({
            mobile: e.mobile,
            captcha: e.code,
            countryCode: l.a,
            signed: e.signed || !1,
            source: t,
          });
        });
      }
      function m(e, t) {
        return (e.code ? f(e) : Object(u.b)(e))
          .then(function () {
            return { mobile: e.mobile };
          })
          .catch(function (i) {
            return g(i, "yz", t, null, e);
          });
      }
      function y(e) {
        var t = e.data,
          i = e.appId,
          r = e.open,
          s = e.hideLoading;
        return a.platform.getConfig("source").then(function (e) {
          return Object(c.a)(
            Object(o.__assign)(Object(o.__assign)({}, t), {
              platformName: n.default.getEnv(),
              source: e,
              signed: !0,
              appId: i,
              bizDataMap: Object(p.a)(t.bizDataMap),
            })
          ).catch(function (e) {
            return g(e, "native", r, s, t);
          });
        });
      }
      t.a = {
        loginByCode: f,
        loginByPassword: function (e) {
          return a.platform.getConfig("source").then(function (t) {
            return Object(u.b)(
              Object(o.__assign)(
                { countryCode: l.a, signed: !1, sourceCode: t },
                e
              )
            );
          });
        },
        loginByYouzan: m,
        loginByMpNative: y,
      };
    },
    FkXz: function (e, t, i) {
      i.d(t, "b", function () {
        return o;
      }),
        i.d(t, "a", function () {
          return a;
        });
      var o = [135200019, 135200018],
        a = 135000049;
    },
    gEhn: function (e, t, i) {
      i.r(t);
      var o = i("Fcif"),
        a = i("QxN7"),
        n = i("KrsW"),
        r = i("AGZf"),
        s = i("8P3R"),
        c = i("BILe"),
        { logNativeMobileClick: u } = a.platform.authLogger,
        l = {
          mixins: [n.b.externalClassesMixin(["custom-class"])],
          props: {
            customStyle: String,
            config: Object,
            appId: String,
            downgrade: Boolean,
            noMobileFallback: Boolean,
            needPlatformPrivacyAuth: { type: Boolean, value: !1 },
            bizDataMap: Object,
          },
          data: () => ({
            loading: !1,
            btnId: "native-mobile-btn_" + Date.now(),
          }),
          computed: {
            openType() {
              return this.loading
                ? ""
                : "getPhoneNumber" +
                    (this.needPlatformPrivacyAuth
                      ? "|agreePrivacyAuthorization"
                      : "");
            },
          },
          methods: {
            handleGetMobile(e) {
              clearTimeout(this.$_timer),
                a.platform
                  .nativeMobileCallback(
                    { detail: e },
                    { noMobileFallback: this.noMobileFallback }
                  )
                  .then((e) => {
                    var { detail: t } = e;
                    this.showLoading("正在登录..."),
                      Object(s.b)({
                        data: Object(o.a)({}, t, {
                          downgrade: this.downgrade,
                          bizDataMap: this.bizDataMap,
                        }),
                        appId: this.appId || Object(a.getAppId)(),
                        open: this.openWebview,
                        hideLoading: this.hideLoading,
                      })
                        .then((e) =>
                          this.success({
                            mobile: null == e ? void 0 : e.mobile,
                          })
                        )
                        .catch(() => this.fail({ forceFail: !0 }));
                  })
                  .catch((e) => {
                    var {
                      detail: t,
                      disagree: i,
                      errType: o,
                      noMobileFallback: n,
                    } = e;
                    i
                      ? this.fail()
                      : n
                      ? this.fail({
                          userDeny: !1,
                          cb: () => {
                            var e = o.noQuota
                              ? "手机号验证组件额度不足"
                              : Object(a.getErrorMsg)(t) ||
                                "手机号验证失败，请稍后重试";
                            this.$emit("toast", { message: e });
                          },
                        })
                      : (this.hideLoading(),
                        this.$emit("native-ability-change", { mobile: !1 }),
                        this.$emit("popup-show"));
                  });
            },
            success(e) {
              this.$emit("success", {
                type: a.AuthPopType.MOBILE,
                userAuthList: [a.AuthType.MOBILE],
                popupType: c.b.NATIVE,
                hasAuth: !0,
                data: Object(o.a)({}, e, {
                  verifyType: a.MobileVerifyType.Weapp,
                }),
                cb: () => this.hideLoading(),
                onError: () => this.hideLoading(),
              });
            },
            fail(e) {
              void 0 === e && (e = {}),
                this.$emit(
                  "fail",
                  Object(o.a)({}, e, {
                    data: { verifyType: a.MobileVerifyType.Weapp },
                    reasons: [a.AuthPopType.MOBILE],
                    authPopType: a.AuthPopType.MOBILE,
                    userAuthList: [a.AuthType.MOBILE],
                    popupType: c.b.NATIVE,
                    cb: () => {
                      this.hideLoading(), e.cb && e.cb();
                    },
                    onError: () => this.hideLoading(),
                  })
                );
            },
            openWebview(e) {
              this.$emit("on-open-webview", e);
            },
            handleClick() {
              var e = {
                authPopType: a.AuthPopType.MOBILE,
                popupType: c.b.NATIVE,
                loading: this.loading,
              };
              u(e),
                this.showLoading("", 1e3),
                this.$emit("auth-click", e),
                this.$emit("auth-popup-show", e);
            },
            showLoading(e, t) {
              void 0 === t && (t = 0),
                (this.loading = !0),
                r.a.clear(),
                this.$emit("toast", {
                  message: e,
                  duration: t,
                  type: "loading",
                  forbidClick: !0,
                  mask: !1,
                }),
                t > 0 &&
                  (clearTimeout(this.$_timer),
                  (this.$_timer = setTimeout(() => {
                    this.loading = !1;
                  }, t)));
            },
            hideLoading() {
              (this.loading = !1), r.a.clear();
            },
            handleAgreePrivacyAuth() {
              this.needPlatformPrivacyAuth &&
                a.platform.resolvePrivacyAuth(this.btnId);
            },
          },
          ud: !0,
        },
        d = i("9ZMt");
      t.default = d.default.component(l);
    },
  })
);
