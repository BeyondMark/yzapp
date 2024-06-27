"use strict";
var r = require("~/r");
r(
  "AexS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8P3R": function (e, t, n) {
      n.d(t, "c", function () {
        return m;
      }),
        n.d(t, "b", function () {
          return v;
        });
      var i = n("bb6g"),
        o = n("QxN7"),
        a = n("9ZMt"),
        r = n("z9IR"),
        c = n("AGZf"),
        s = n("CR7H"),
        u = n("oGZU"),
        l = n("eWMZ"),
        d = n("FkXz"),
        h = n("mQt2"),
        b = n("bmpj"),
        f = o.platform.authLogger;
      function p(e, t, n, s, u) {
        var b = (e && e.response) || e,
          p = Object(i.__assign)(Object(i.__assign)({}, b), {
            data: Object(i.__assign)(Object(i.__assign)({}, b.data), u),
            errMsg: Object(o.getErrorMsg)(b) || "登录失败，请稍后重试",
          });
        f.logAll({
          logName: "授权-手机号登录失败",
          logData: { err: p, type: t, env: a.default.getEnv() },
        });
        return (function () {
          if (p.code === d.a)
            return Object(h.a)().then(function (e) {
              return e.forceLogin().finally(function () {
                throw ((p.errMsg = "解密失败，请稍后重试"), p);
              });
            });
          if (-1 !== d.b.indexOf(p.code)) {
            var e = p.data;
            return o.platform.getConfig("name").then(function (t) {
              var i = e.mobile.replace(/^(\d{3})(\d{4})(.*)$/, "$1****$3");
              return (
                "function" == typeof s && s(),
                r.a
                  .confirm({
                    title: "",
                    message: "手机号" + i + "已与其他" + t + "账号绑定",
                    confirmButtonText: "继续登录",
                    cancelButtonText: "换个账号",
                    zIndex: 20009,
                  })
                  .then(function () {
                    throw (
                      (n(
                        "https://uic.youzan.com/passport/mobile/dispatch?&mobile=" +
                          e.mobile +
                          "&countryCode=" +
                          encodeURIComponent(e.countryCode || l.a)
                      ),
                      p)
                    );
                  })
              );
            });
          }
          return Promise.reject(p);
        })().catch(function (e) {
          throw (
            (e &&
              e.errMsg &&
              setTimeout(function () {
                c.a.clear(),
                  Object(c.a)({
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
      function g(e) {
        return o.platform.getConfig("source").then(function (t) {
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
        return (e.code ? g(e) : Object(u.b)(e))
          .then(function () {
            return { mobile: e.mobile };
          })
          .catch(function (n) {
            return p(n, "yz", t, null, e);
          });
      }
      function v(e) {
        var t = e.data,
          n = e.appId,
          r = e.open,
          c = e.hideLoading;
        return o.platform.getConfig("source").then(function (e) {
          return Object(s.a)(
            Object(i.__assign)(Object(i.__assign)({}, t), {
              platformName: a.default.getEnv(),
              source: e,
              signed: !0,
              appId: n,
              bizDataMap: Object(b.a)(t.bizDataMap),
            })
          ).catch(function (e) {
            return p(e, "native", r, c, t);
          });
        });
      }
      t.a = {
        loginByCode: g,
        loginByPassword: function (e) {
          return o.platform.getConfig("source").then(function (t) {
            return Object(u.b)(
              Object(i.__assign)(
                { countryCode: l.a, signed: !1, sourceCode: t },
                e
              )
            );
          });
        },
        loginByYouzan: m,
        loginByMpNative: v,
      };
    },
    AexS: function (e, t, n) {
      n.r(t);
      n("QxN7");
      var i = n("NQ4s"),
        o = n("8P3R"),
        a = {
          props: {
            theme: String,
            visible: Boolean,
            zIndex: Number,
            kdtId: Number,
            popupCustomStyle: String,
          },
          data: () => ({ loading: !1, captchaVisible: !1 }),
          watch: {
            visible(e) {
              this.updateVisible(e);
            },
          },
          created() {
            this.updateVisible(this.visible);
          },
          methods: {
            updateVisible(e) {
              this.captchaVisible = e || e;
            },
            handleCloseModal() {
              this.$emit("close");
            },
            handleShowToast(e) {
              this.$emit("toast", e);
            },
            handleSubmitByPhone(e) {
              this.loading ||
                ((this.loading = !0),
                Object(o.c)(e, this.openWebview)
                  .then(() => {
                    this.$emit("success", {
                      hasAuth: !0,
                      data: { mobile: e.mobile, verifyType: e.verifyType },
                      cb: () => {
                        (this.loading = !1), this.handleCloseModal();
                      },
                    });
                  })
                  .catch(() => {
                    this.loading = !1;
                  }));
            },
            handleAuthFail() {
              this.$emit("fail");
            },
            handleClickOverlay() {
              this.handleAuthFail(), this.handleCloseModal();
            },
            openWebview(e) {
              this.$emit("on-open-webview", e);
            },
            handleOpenWebview() {
              this.openWebview(i.b);
            },
            handlePoupEnterDone() {
              this.$emit("auth-popup-show");
            },
          },
          ud: !0,
        },
        r = n("9ZMt");
      t.default = r.default.component(a);
    },
    FkXz: function (e, t, n) {
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var i = [135200019, 135200018],
        o = 135000049;
    },
    NQ4s: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var i = "+86",
        o =
          "https://www.youzan.com/intro/rule/detail?alias=14nykbyyf&pageType=rules";
    },
  })
);
