"use strict";
var r = require("~/r");
r(
  "nVkq",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      NERQ: function (t, e, a) {
        var o = [],
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
        var c = (t) => (
          (t = Object.assign(Object.assign({}, n), t)),
          new Promise((e, a) => {
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
                      callback: (t, o) => {
                        "confirm" === t ? e(o) : a(o);
                      },
                    },
                    t
                  )
                ),
                wx.nextTick(() => {
                  n.setData({ show: !0 });
                }),
                o.push(n));
          })
        );
        (c.alert = (t) => c(t)),
          (c.confirm = (t) => c(Object.assign({ showCancelButton: !0 }, t))),
          (c.close = () => {
            o.forEach((t) => {
              t.close();
            }),
              (o = []);
          }),
          (c.stopLoading = () => {
            o.forEach((t) => {
              t.stopLoading();
            });
          }),
          (c.currentOptions = n),
          (c.defaultOptions = i),
          (c.setDefaultOptions = (t) => {
            (n = Object.assign(Object.assign({}, n), t)),
              (c.currentOptions = n);
          }),
          (c.resetDefaultOptions = () => {
            (n = Object.assign({}, i)), (c.currentOptions = n);
          }),
          c.resetDefaultOptions(),
          (e.a = c);
      },
      "a/Yq": function (t, e, a) {
        a.d(e, "a", function () {
          return o;
        });
        var o = (t) => {
          var e, a, o;
          if (!t) return {};
          var i =
            null != (e = null == (a = t.data) ? void 0 : a.isFromAuthComponent)
              ? e
              : null == (o = t.properties)
              ? void 0
              : o.isFromAuthComponent;
          return {
            header: { ppt: JSON.stringify({ cmp: i ? "native" : "" }) },
          };
        };
      },
      nVkq: function (t, e, a) {
        a.r(e);
        var o = a("NERQ"),
          i = a("8B9M"),
          n = a("NG5q"),
          c = Object(i.a)();
        Component({
          properties: {
            show: { type: Boolean, value: !1 },
            title: { type: String, value: "验证码登录" },
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
              agreement: "《用户使用协议》",
            },
            captcha: {
              text: "获取验证码",
              code: "",
              countdown: 60,
              textStyle: "acc-code__btn--enabled",
              btnStyle: "",
              timer: null,
            },
            loginBtn: { text: "登录", disabled: !0, wxDisabled: !1 },
            agreement: {
              text: "《用户使用协议》",
              url: "https://www.youzan.com/intro/rule/detail?alias=14nykbyyf&pageType=rules",
            },
            isProtocolAgreed: !1,
          },
          methods: {
            changeLoginType() {
              this.triggerEvent("changeLoginType", { type: "password" });
            },
            agreementChange(t) {
              var {
                formData: { captcha: e, mobile: a },
              } = this.data;
              this.setData({
                isProtocolAgreed: t.detail,
                "loginBtn.disabled": !(e && a && t.detail),
              });
            },
            fetchCaptcha() {
              var { captcha: t, formData: e } = this.data;
              60 === t.countdown &&
                this._checkMobile(e.mobile) &&
                this._checkProtocol() &&
                a
                  .e("packages/async-main/chunk")
                  .then(a.bind(null, "ORXP"))
                  .then((t) => {
                    var { default: a } = t;
                    a({
                      bizType: 11,
                      onSuccess: (t) => {
                        n.a.fetchCode(
                          { mobile: e.mobile, ticket: t },
                          () => {
                            this._countDownForCaptchaCode(),
                              this.setData({
                                "captcha.btnStyle": "countdown",
                                "captcha.textStyle": "acc-code__btn--disabled",
                              });
                          },
                          (t) => {
                            var e = t.msg || "服务请求失败，请稍后再试";
                            wx.showToast({ icon: "none", title: e });
                          },
                          this
                        );
                      },
                    });
                  });
            },
            checkFlag: (t, e) =>
              !!t || (e && wx.showToast({ icon: "none", title: e }), !1),
            _checkMobile(t) {
              return this.checkFlag(/^\d{11}$/.test(t), "请输入正确的手机号");
            },
            _checkCaptcha(t) {
              return this.checkFlag(
                /^\d{6}$/.test(t),
                "请正确输入收到的6位验证码"
              );
            },
            _checkProtocol() {
              return this.checkFlag(
                this.data.isProtocolAgreed,
                "请阅读并勾选协议"
              );
            },
            login() {
              var { disabled: t } = this.data.loginBtn,
                { mobile: e, captcha: a, countryCode: o } = this.data.formData;
              if (
                !t &&
                this._checkMobile(e) &&
                this._checkCaptcha(a) &&
                this._checkProtocol()
              ) {
                var i = { countryCode: o, mobile: e, captcha: a };
                this._beforeLogin(),
                  n.a.loginBySms(
                    i,
                    () => c.login().then(() => this._loginSuccess()),
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
              }
            },
            _loginSuccess() {
              this.setData({ show: !1 }),
                wx.hideLoading(),
                wx.showToast({ title: "登录成功", icon: "success", mask: !1 }),
                this.triggerEvent(
                  "loginSuccess",
                  {
                    mb: this.data.formData.mobile,
                    authPopType: "mobile",
                    verifyType: 1,
                    hasAuth: !0,
                  },
                  {}
                );
            },
            bindMobileInput(t) {
              var {
                formData: { captcha: e },
                isProtocolAgreed: a,
              } = this.data;
              this.setData({
                "formData.mobile": t.detail,
                "loginBtn.disabled": !(t.detail && e && a),
              });
            },
            bindCaptchaInput(t) {
              var {
                formData: { mobile: e },
                isProtocolAgreed: a,
              } = this.data;
              this.setData({
                "formData.captcha": t.detail,
                "loginBtn.disabled": !(t.detail && e && a),
              });
            },
            _beforeLogin() {
              this.loginLoading(), this.setData({ "loginBtn.disabled": !0 });
            },
            configDialog(t, e) {
              var a;
              if ((void 0 === t && (t = !1), void 0 === e && (e = {}), t)) {
                if (!e.mobile)
                  return wx.showToast({
                    icon: "none",
                    title: "授权获取手机号码失败，请重启小程序重新授权",
                  });
                a = e.mobile;
              } else {
                if (!this.data.formData.mobile)
                  return wx.showToast({
                    icon: "none",
                    title: "请正确填写手机号码",
                  });
                a = this.data.formData.mobile;
              }
              var i = [];
              i.push(a.substring(0, 3)), i.push("****"), i.push(a.substring(7));
              var n = "手机号" + i.join("") + "已与其他微信账号绑定";
              wx.hideLoading(),
                o.a
                  .confirm({
                    message: n,
                    confirmButtonText: "继续登录",
                    cancelButtonText: "换个账号",
                    context: this,
                    zIndex: 1e4,
                  })
                  .then(() => {
                    this.confirmLogin(e);
                  })
                  .catch(() => {});
            },
            confirmLogin(t) {
              void 0 === t && (t = {});
              var e = t.mobile || this.data.formData.mobile,
                a = t.countryCode || this.data.formData.countryCode,
                { redirectUrl: o } = this.data,
                i =
                  "/packages/account/to-bind/index?mobile=" +
                  e +
                  "&countryCode=" +
                  encodeURIComponent(a) +
                  "&redirectUrl=" +
                  encodeURIComponent(o);
              return wx.redirectTo({
                url: i,
                error: () => {
                  wx.showToast({
                    icon: "none",
                    title: "页面跳转失败，请重启小程序重新进入",
                  });
                },
              });
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
    }
  )
);
