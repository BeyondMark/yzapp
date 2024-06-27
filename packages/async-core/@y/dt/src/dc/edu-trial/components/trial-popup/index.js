"use strict";
var r = require("~/r");
r(
  "dUdS",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      dUdS: function (t, e, i) {
        i.r(e);
        var a = i("9ZMt"),
          n = i("ZXqb"),
          o = i("2Dtx"),
          r = i("FTR+"),
          { useTpx: l } = a.default.style,
          s = /^1\d{10}$/,
          h = {
            props: {
              value: { type: Boolean, default: !1 },
              trialData: { type: Object, default: () => {} },
              mainColor: { type: String, default: "#00b389" },
              sendSuccessToast: { type: String, default: "发送验证码成功" },
              title: { type: String, default: "预约礼" },
              auditionTitle: { type: String, default: "免费试听" },
              giftTitle: { type: String, default: "到店礼" },
              collectText: {
                type: String,
                default: "预约后机构将通过电话联系您",
              },
              trialBtnText: { type: String, default: "确认预约" },
            },
            data: () => ({
              phone: "",
              verifyCode: "",
              captchaTimer: null,
              captchaTimeout: 0,
            }),
            computed: {
              auditionText() {
                var t;
                return (
                  (null == (t = this.trialData) ? void 0 : t.auditionText) || ""
                );
              },
              mainGift() {
                var t;
                return (
                  (null == (t = this.trialData) ? void 0 : t.mainGift) || ""
                );
              },
              minorGift() {
                var t;
                return (
                  (null == (t = this.trialData) ? void 0 : t.minorGift) || ""
                );
              },
              tags() {
                var t;
                return (null == (t = this.trialData) ? void 0 : t.tags) || [];
              },
              defaultPhone() {
                var t;
                return (
                  (null == (t = this.trialData) ? void 0 : t.defaultPhone) || ""
                );
              },
              giftStyle() {
                return Object(o.a)({
                  "background-color": Object(r.a)(this.mainColor, 0.1),
                });
              },
              bgStyle() {
                return Object(o.a)({ "background-color": this.mainColor });
              },
              mainTextStyle() {
                return Object(o.a)({ color: this.mainColor });
              },
              needVerifyCode() {
                return this.phone !== this.defaultPhone || !this.phone;
              },
              sendText() {
                return 0 === this.captchaTimeout
                  ? "发送验证码"
                  : this.captchaTimeout + "s后再次获取";
              },
              hasGift() {
                return this.mainGift || this.minorGift;
              },
              fieldStyle: () =>
                Object(o.a)({
                  background: "#f2f3f5",
                  "border-radius": l(44),
                  height: l(44),
                  width: "100%",
                }),
            },
            watch: {
              value(t) {
                t && this.initPhone();
              },
            },
            mounted() {
              this.initPhone();
            },
            methods: {
              hexToRgba(t) {
                var e = t.slice(1);
                return (
                  "rgba(" +
                  [
                    parseInt("0x" + e.slice(0, 2), 0),
                    parseInt("0x" + e.slice(2, 4), 0),
                    parseInt("0x" + e.slice(4, 6), 0),
                    0.1,
                  ].toString() +
                  ")"
                );
              },
              onPhoneChange(t) {
                this.phone = t.value;
              },
              onVerifyCodeChange(t) {
                this.verifyCode = t.value;
              },
              initPhone() {
                (this.phone = this.defaultPhone || ""), (this.verifyCode = "");
              },
              onClose() {
                this.$emit("onClose");
              },
              onSendClick() {
                this.captchaTimeout > 0 ||
                  (s.test(this.phone)
                    ? this.$emit("sendCaptcha", {
                        mobile: this.phone,
                        cbFn: (t, e) => {
                          t
                            ? (n.a.success(this.sendSuccessToast),
                              this.captchaCountDown())
                            : n.a.fail(e || "发送验证码失败");
                        },
                      })
                    : n.a.fail("请输入11位的手机号码"));
              },
              captchaCountDown(t) {
                void 0 === t && (t = 60),
                  this.captchaTimer && clearTimeout(this.captchaTimer),
                  t <= 60 &&
                    t > 0 &&
                    ((this.captchaTimeout = t - 1),
                    (this.captchaTimer = setTimeout(
                      () => this.captchaCountDown(t - 1),
                      1e3
                    )));
              },
              onTrialClick() {
                var {
                  phone: t,
                  defaultPhone: e,
                  verifyCode: i,
                  auditionText: a,
                  mainGift: o,
                  minorGift: r,
                  needVerifyCode: l,
                } = this;
                t
                  ? !l || i
                    ? this.$emit("trialClick", {
                        phone: t,
                        defaultPhone: e,
                        verifyCode: i,
                        auditionText: a,
                        mainGift: o,
                        minorGift: r,
                        needVerifyCode: l,
                      })
                    : n.a.fail("请输入验证码")
                  : n.a.fail("请输入手机号");
              },
            },
            ud: !0,
          };
        e.default = a.default.component(h);
      },
    }
  )
);
