"use strict";
var r = require("~/r");
r(
  "gEVE",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      gEVE: function (e, s, t) {
        t.r(s);
        var a = t("QxN7"),
          o = t("Kkd4"),
          n = {
            name: "Password",
            props: { loading: Boolean, theme: String },
            data: () => ({ mobile: "", password: "" }),
            computed: {
              loginEnable() {
                var { mobile: e, password: s, loading: t } = this;
                return /^1\d{10}$/.test(e) && !t && s;
              },
            },
            methods: {
              handleMobileInput(e) {
                this.mobile = e.value;
              },
              handlePasswordInput(e) {
                this.password = e.value;
              },
              handleChangeMode() {
                this.$emit("on-change-mode");
              },
              handleViewAgreement() {
                this.$emit("on-view-agreement");
              },
              handleToast(e) {
                this.$emit("on-toast", e);
              },
              passwordLevel(e) {
                var s = -1;
                return (
                  /\d+/.test(e) && s++,
                  /[a-zA-Z]+/.test(e) && s++,
                  /[^A-Za-z0-9]+/.test(e) && s++,
                  s
                );
              },
              handleSubmit() {
                var { loginEnable: e, mobile: s, password: n } = this;
                e &&
                  o.a.behaviorVerify(10).then((e) => {
                    t.e("packages/async-main/chunk")
                      .then(t.t.bind(null, "sbP3", 7))
                      .then((t) => {
                        this.$emit("on-submit", {
                          countryCode: "+86",
                          mobile: s,
                          verifyType: a.MobileVerifyType.Password,
                          password: t.aes.legacyEncrypt(n),
                          passwordLevel: this.passwordLevel(n),
                          passwordLength: this.password.length,
                          ticket: e,
                          sourceCode: "",
                        });
                      });
                  });
              },
            },
            ud: !0,
          },
          r = t("9ZMt");
        s.default = r.default.component(n);
      },
    }
  )
);
