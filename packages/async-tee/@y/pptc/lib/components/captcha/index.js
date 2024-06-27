"use strict";
var r = require("~/r");
r(
  "XvpF",
  Object.assign({}, require("~/v.js").modules, {
    XvpF: function (e, t, n) {
      n.r(t);
      var a = n("Fcif"),
        o = n("AGZf"),
        i = {
          name: "LoginCaptcha",
          props: {
            show: Boolean,
            loading: Boolean,
            theme: String,
            zIndex: { type: Number, default: 9999 },
            customStyle: String,
            popupCustomStyle: String,
            contentCustomStyle: String,
            closeable: Boolean,
          },
          data: () => ({ mode: "sms" }),
          methods: {
            behaviorDidMount() {
              n.e("packages/async-main/chunk")
                .then(n.bind(null, "9RNk"))
                .then((e) => {
                  var { behaviorInit: t } = e;
                  t(this.$refs.behavior);
                });
            },
            handleClickOverlay() {
              this.$emit("click-overlay");
            },
            handleClose() {
              this.$emit("on-close");
            },
            handlePopupLeave() {
              this.$emit("on-after-leave");
            },
            handlePoupEnter() {
              this.$emit("on-fater-enter");
            },
            changeMode() {
              this.mode = "sms" === this.mode ? "password" : "sms";
            },
            handleViewAgreement() {
              this.$emit("on-agreement");
            },
            handleLogin(e) {
              this.$emit("on-submit", e);
            },
            handleToast(e) {
              Object(o.a)(
                Object(a.a)({}, "string" == typeof e ? { message: e } : e, {
                  zIndex: 99999,
                })
              );
            },
          },
          ud: !0,
        },
        s = n("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
