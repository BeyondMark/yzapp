"use strict";
var r = require("~/r");
r(
  "gE6N",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      NQ4s: function (e, t, i) {
        i.d(t, "a", function () {
          return s;
        }),
          i.d(t, "b", function () {
            return o;
          });
        var s = "+86",
          o =
            "https://www.youzan.com/intro/rule/detail?alias=14nykbyyf&pageType=rules";
      },
      gE6N: function (e, t, i) {
        i.r(t);
        var s = i("QxN7"),
          o = i("Kkd4"),
          n = i("P/w+"),
          a = i("NQ4s"),
          r = {
            name: "Sms",
            props: { loading: Boolean, theme: String },
            data: () => ({ mobile: "", code: "", countdown: 0, protocol: !1 }),
            computed: {
              smsEnable() {
                var { mobile: e, countdown: t } = this;
                return /^1\d{10}$/.test(e) && t <= 0;
              },
              smsBtnText() {
                var { countdown: e } = this;
                return e > 0 ? e + " s" : "获取验证码";
              },
              smsBtnClass() {
                return "captcha " + (this.smsEnable ? "" : "captcha--disable");
              },
              loginEnable() {
                var { mobile: e, code: t, loading: i } = this;
                return /^1\d{10}$/.test(e) && !i && /^\d{6}$/.test(t);
              },
            },
            created() {
              this.$_timer = null;
            },
            destroyed() {
              this.$_timer && clearTimeout(this.$_timer);
            },
            methods: {
              handleMobileInput(e) {
                this.mobile = e.value;
              },
              handleCodeInput(e) {
                this.code = e.value;
              },
              handleChangeMode() {
                this.$emit("on-change-mode");
              },
              handleViewAgreement() {
                this.$emit("on-view-agreement");
              },
              showToast(e) {
                this.$emit("on-toast", e);
              },
              handleChangeProtocol(e) {
                var { checked: t } = e || {};
                this.protocol = !!t;
              },
              handleSendSmsValidate() {
                this.smsEnable &&
                  (this.protocol
                    ? o.a.behaviorVerify(11).then((e) => {
                        this.sendSmsByAjax(e);
                      })
                    : this.showToast({ message: "请阅读并勾选协议" }));
              },
              sendSmsByAjax(e) {
                var { mobile: t } = this;
                Object(n.a)({ mobile: t, countryCode: a.a, ticket: e })
                  .then(() => {
                    (this.countdown = 60), this.triggerTimer();
                  })
                  .catch((e) => {
                    this.$emit("on-toast", {
                      type: "fail",
                      message: e && (e.msg || e.message || e),
                    });
                  });
              },
              triggerTimer() {
                this.$_timer = setTimeout(() => {
                  (this.countdown -= 1),
                    this.countdown > 0 && this.triggerTimer();
                }, 1e3);
              },
              handleSubmit() {
                var { loginEnable: e, mobile: t, code: i } = this;
                e &&
                  this.$emit("on-submit", {
                    mobile: t,
                    code: i,
                    verifyType: s.MobileVerifyType.Sms,
                  });
              },
            },
            ud: !0,
          },
          h = i("9ZMt");
        t.default = h.default.component(r);
      },
    }
  )
);
