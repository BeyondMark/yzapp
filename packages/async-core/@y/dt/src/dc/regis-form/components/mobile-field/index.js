"use strict";
var r = require("~/r");
r(
  "gHz1",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      gHz1: function (t, e, a) {
        a.r(e);
        var c = a("AGZf"),
          i = a("SkWJ"),
          s = {
            props: {
              fieldStyle: { type: String, default: "" },
              fieldInfo: {
                type: Object,
                default: () => ({
                  itemId: "",
                  feItemCustomName: "",
                  placeholder: "",
                  feNeedCaptcha: !1,
                }),
              },
              fieldValue: { type: String, default: "" },
            },
            data: () => ({
              smsStock: 0,
              smsCaptcha: "",
              phoneNumber: "",
              captchaTimeout: 0,
              isGetCaptcha: !1,
            }),
            computed: {
              fieldLabel() {
                var { fieldInfo: t } = this,
                  { hasChangedName: e, itemName: a, feItemCustomName: c } = t;
                return e ? c : a;
              },
            },
            created() {
              var { fieldInfo: t } = this;
              t.feNeedCaptcha && this.checkStock();
            },
            destroyed() {
              this.captchaTimer &&
                (clearTimeout(this.captchaTimer), (this.captchaTimer = null));
            },
            methods: {
              checkStock() {
                Object(i.a)()
                  .then((t) => {
                    this.smsStock = t || 0;
                  })
                  .catch((t) => {
                    c.a.fail(t.msg || "未知错误");
                  });
              },
              onInput(t) {
                var { fieldInfo: e, smsStock: a } = this,
                  { value: c } = t,
                  { smsCaptcha: i } = this;
                (this.phoneNumber = c),
                  this.$emit("change", {
                    id: e.itemId,
                    value: c,
                    captcha: i,
                    smsStock: a,
                  });
              },
              onInputSmsCaptcha(t) {
                var { fieldInfo: e, smsStock: a, phoneNumber: c } = this;
                (this.smsCaptcha = t.value),
                  this.$emit("change", {
                    id: e.itemId,
                    value: c,
                    captcha: t.value,
                    smsStock: a,
                  });
              },
              sendCaptcha() {
                var { captchaTimeout: t, fieldValue: e } = this;
                if (!(t > 0)) {
                  var a = e;
                  /^1\d{10}$/.test(a)
                    ? ((this.isGetCaptcha = !0),
                      Object(i.b)({ mobile: a })
                        .then(() => {
                          (this.isGetCaptcha = !1),
                            Object(c.a)("验证码已发送"),
                            this.captchaCountdown();
                        })
                        .catch((t) => {
                          Object(c.a)(t.msg || "验证码发送失败"),
                            (this.isGetCaptcha = !1);
                        }))
                    : Object(c.a)("请输入11位的手机号码");
                }
              },
              captchaCountdown(t) {
                void 0 === t && (t = 60),
                  this.captchaTimer &&
                    (clearTimeout(this.captchaTimer),
                    (this.captchaTimer = null)),
                  t <= 60 &&
                    t > 0 &&
                    ((this.captchaTimeout = t - 1),
                    (this.captchaTimer = setTimeout(
                      () => this.captchaCountdown(t - 1),
                      1e3
                    )));
              },
            },
            ud: !0,
          },
          h = a("9ZMt");
        e.default = h.default.component(s);
      },
    }
  )
);
