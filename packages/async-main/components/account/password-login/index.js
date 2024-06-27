"use strict";
var r = require("~/r");
r(
  "E0Nm",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      E0Nm: function (t, e, o) {
        o.r(e);
        var a = o("Fcif"),
          i = o("NERQ"),
          n = o("8B9M"),
          s = o("HaEp"),
          r = Object(n.a)();
        Component({
          properties: {
            show: { type: Boolean, value: !1 },
            title: { type: String, value: "账号密码登录" },
            subTitle: {
              type: String,
              value: "为了你的账号安全，请用手机号登录",
            },
            redirectUrl: {
              type: String,
              value: "/packages/account/settings/index",
            },
            isFromAuthComponent: { type: Boolean, value: !1 },
          },
          data: {
            formData: {
              countryCode: "+86",
              mobile: "",
              wxMobile: "",
              captcha: "",
              captchaTime: null,
              password: "",
            },
            captcha: {
              text: "获取验证码",
              code: "",
              times: 1,
              countdown: 60,
              textStyle: "acc-code__btn--enabled",
              btnStyle: "",
              timer: null,
            },
            loginBtn: { text: "登录", disabled: !0, wxDisabled: !1 },
            isProtocolAgreed: !1,
          },
          methods: {
            changeLoginType() {
              this.triggerEvent("changeLoginType", { type: "sms" });
            },
            agreementChange(t) {
              var {
                formData: { password: e, mobile: o },
              } = this.data;
              this.setData({
                isProtocolAgreed: t.detail,
                "loginBtn.disabled": !(e && o && t.detail),
              });
            },
            _checkMobile: (t) => /^\d{11}$/.test(t),
            _checkPassword: (t) => t && t.length >= 6,
            login() {
              var { disabled: t } = this.data.loginBtn,
                { mobile: e, password: i, countryCode: n } = this.data.formData;
              if (!t) {
                if (!this._checkMobile(e))
                  return wx.showToast({
                    icon: "none",
                    title: "请输入正确的手机号",
                  });
                if (!this._checkPassword(i))
                  return wx.showToast({
                    icon: "none",
                    title: "请输入正确的密码",
                  });
                var c = { countryCode: n, mobile: e, password: i };
                o.e("packages/async-main/chunk")
                  .then(o.bind(null, "ORXP"))
                  .then((t) => {
                    var { default: e } = t;
                    e({
                      bizType: 10,
                      onSuccess: (t) => {
                        this._beforeLogin(),
                          s.a.loginByPassword(
                            Object(a.a)({}, c, { ticket: t }),
                            () => r.login().then(() => this._loginSuccess()),
                            (t) => {
                              if (135200018 === t.code || 135200019 === t.code)
                                return this.configDialog();
                              this.setData({ "loginBtn.disabled": !1 }),
                                wx.hideLoading(),
                                wx.showToast({
                                  icon: "none",
                                  title: t.msg || "服务请求出错，请稍后再试",
                                });
                            },
                            this
                          );
                      },
                    });
                  });
              }
            },
            _loginSuccess() {
              var t = {
                mb: this.data.formData.mobile,
                authPopType: "mobile",
                verifyType: 0,
                hasAuth: !0,
              };
              return (
                this.triggerEvent("loginSuccess", t, {}),
                this.setData({ show: !1 }),
                wx.hideLoading(),
                wx.showToast({ title: "登录成功", icon: "success", mask: !1 })
              );
            },
            bindMobileInput(t) {
              var {
                formData: { password: e },
                isProtocolAgreed: o,
              } = this.data;
              this.setData({
                "formData.mobile": t.detail,
                "loginBtn.disabled": !(t.detail && e && o),
              });
            },
            bindPasswordInput(t) {
              var {
                formData: { mobile: e },
                isProtocolAgreed: o,
              } = this.data;
              this.setData({
                "formData.password": t.detail,
                "loginBtn.disabled": !(t.detail && e && o),
              });
            },
            _beforeLogin() {
              this.loginLoading(), this.setData({ "loginBtn.disabled": !0 });
            },
            configDialog(t, e) {
              var o;
              if ((void 0 === t && (t = !1), void 0 === e && (e = {}), t)) {
                if (!e.mobile)
                  return wx.showToast({
                    icon: "none",
                    title: "授权获取手机号码失败，请重启小程序重新授权",
                  });
                o = e.mobile;
              } else {
                if (!this.data.formData.mobile)
                  return wx.showToast({
                    icon: "none",
                    title: "请正确填写手机号码",
                  });
                o = this.data.formData.mobile;
              }
              var a = [];
              a.push(o.substring(0, 3)), a.push("****"), a.push(o.substring(7));
              var n = "手机号" + a.join("") + "已与其他微信账号绑定";
              i.a
                .confirm({
                  message: n,
                  confirmButtonText: "继续登录",
                  cancelButtonText: "换个手机号",
                  context: this,
                  zIndex: 99999,
                })
                .then(() => {
                  this.confirmLogin(e);
                })
                .catch((t) => {});
            },
            confirmLogin(t) {
              void 0 === t && (t = {});
              var e = t.mobile || this.data.formData.mobile,
                o = t.countryCode || this.data.formData.countryCode,
                { redirectUrl: a } = this.data,
                i =
                  "/packages/account/to-bind/index?mobile=" +
                  e +
                  "&countryCode=" +
                  encodeURIComponent(o) +
                  "&redirectUrl=" +
                  encodeURIComponent(a);
              return wx.redirectTo({ url: i });
            },
            _countDownForCaptchaCode() {
              var { countdown: t } = this.data.captcha;
              0 !== t
                ? (t--,
                  this.setData({
                    "captcha.countdown": t,
                    "captcha.text": "已发送(" + t + "s)",
                  }),
                  (this.data.captcha.timer = setTimeout(() => {
                    this._countDownForCaptchaCode();
                  }, 1e3)))
                : this.setData({
                    "captcha.countdown": 60,
                    "captcha.text": "重新发送",
                    "captcha.btnStyle": "",
                    "captcha.textStyle": "acc-code__btn--enabled",
                  });
            },
            loginLoading(t) {
              void 0 === t && (t = "正在登录..."),
                wx.showLoading({ title: t, mask: !0 });
            },
          },
        });
      },
      NERQ: function (t, e, o) {
        var a = [],
          i = {
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
          n = Object.assign({}, i);
        var s = (t) => (
          (t = Object.assign(Object.assign({}, n), t)),
          new Promise((e, o) => {
            var i,
              n = (
                ("function" == typeof t.context ? t.context() : t.context) ||
                (i = getCurrentPages())[i.length - 1]
              ).selectComponent(t.selector);
            delete t.context,
              delete t.selector,
              n &&
                (n.setData(
                  Object.assign(
                    {
                      callback: (t, a) => {
                        "confirm" === t ? e(a) : o(a);
                      },
                    },
                    t
                  )
                ),
                wx.nextTick(() => {
                  n.setData({ show: !0 });
                }),
                a.push(n));
          })
        );
        (s.alert = (t) => s(t)),
          (s.confirm = (t) => s(Object.assign({ showCancelButton: !0 }, t))),
          (s.close = () => {
            a.forEach((t) => {
              t.close();
            }),
              (a = []);
          }),
          (s.stopLoading = () => {
            a.forEach((t) => {
              t.stopLoading();
            });
          }),
          (s.currentOptions = n),
          (s.defaultOptions = i),
          (s.setDefaultOptions = (t) => {
            (n = Object.assign(Object.assign({}, n), t)),
              (s.currentOptions = n);
          }),
          (s.resetDefaultOptions = () => {
            (n = Object.assign({}, i)), (s.currentOptions = n);
          }),
          s.resetDefaultOptions(),
          (e.a = s);
      },
      "a/Yq": function (t, e, o) {
        o.d(e, "a", function () {
          return a;
        });
        var a = (t) => {
          var e, o, a;
          if (!t) return {};
          var i =
            null != (e = null == (o = t.data) ? void 0 : o.isFromAuthComponent)
              ? e
              : null == (a = t.properties)
              ? void 0
              : a.isFromAuthComponent;
          return {
            header: { ppt: JSON.stringify({ cmp: i ? "native" : "" }) },
          };
        };
      },
    }
  )
);
