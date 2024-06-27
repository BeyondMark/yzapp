"use strict";
var r = require("~/r");
r(
  "11g1",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "11g1": function (t, e, o) {
      o.r(e);
      var i = o("Fcif"),
        n = o("9ZMt"),
        s = o("QxN7"),
        h = o("DXKY"),
        u = o("BILe"),
        a = {
          props: {
            theme: String,
            visible: Boolean,
            zIndex: Number,
            privacyProtocol: Object,
            userProtocol: Object,
            popupCustomStyle: String,
            paddingBottom: { type: Number, default: 0 },
            kdtId: Number,
            appId: String,
            nativeAuthPopType: String,
            config: Object,
            hooks: Object,
            source: String,
            isCloudSlot: { type: Boolean, default: !1 },
            noMobileFallback: Boolean,
            bizDataMap: Object,
            downgrade: Boolean,
          },
          data: () => ({
            yunConfig: { isUIComponent: !1 },
            needPlatformPrivacyAuth: !1,
          }),
          computed: {
            needNativeMobileAuth() {
              return this.nativeAuthPopType === s.AuthPopType.MOBILE;
            },
            needNativeUserInfoAuth() {
              return (
                this.nativeAuthPopType === s.AuthPopType.NICKNAME_AND_AVATAR
              );
            },
            commonCustomStyle: () =>
              "display: block; width: 100%; height: 100%; background: transparent;",
            contentCustomStyle() {
              var { yunBottomExtHeight: t } = this.yunConfig;
              return (
                "padding-bottom: " + (this.paddingBottom + (+t || 0)) + "px"
              );
            },
            color() {
              return this.yunConfig.theme || this.theme;
            },
          },
          watch: {
            isCloudSlot() {
              this.updateYunConfig();
            },
            source(t) {
              t &&
                this.getProtocol().then((e) => {
                  e.setSource(t);
                });
            },
          },
          created() {
            this.initProtocol(),
              this.updateYunConfig(),
              (this.$_initYunConfig = () => this.updateYunConfig()),
              h.a.once("yun.account.protocol.init", this.$_initYunConfig);
          },
          destroyed() {
            this.getProtocol().then((t) => {
              t.off();
            }),
              h.a.off("yun.account.protocol.init", this.$_initYunConfig);
          },
          methods: {
            getProtocol() {
              return (
                this.$_protocolPs ||
                  (this.$_protocolPs = o
                    .e("packages/async-main/chunk")
                    .then(o.t.bind(null, "HsSF", 7))
                    .then((t) => {
                      var { InvokeProtocol: e } = t;
                      return new e({
                        source:
                          this.source || "@npm/auth/yz-protocol_" + Date.now(),
                      });
                    })
                    .catch((t) => {
                      throw ((this.$_protocolPs = null), t);
                    })),
                this.$_protocolPs
              );
            },
            initProtocol() {
              var t = this;
              this.getProtocol().then((e) => {
                e.on("close", function (o) {
                  var { excludeSource: i } = void 0 === o ? {} : o;
                  (i && i === e.source) || t.close();
                });
              });
            },
            updateYunConfig() {
              var t = {},
                e = n.default.getGlobal("yun.account.protocol.config");
              e && Object.assign(t, e),
                (t.isUIComponent = !(!t.isUIComponent && !this.isCloudSlot)),
                (this.yunConfig = t);
            },
            changeAuthStatus(t) {
              this.$emit("auth-status-change", { authorizing: t });
            },
            close() {
              this.$emit("close");
            },
            handleOpenWebview(t) {
              this.$emit("on-open-webview", t);
            },
            handleShowPrivacy() {
              this.$emit("on-open-webview", this.privacyProtocol.url);
            },
            handleShowUserAgreement() {
              this.$emit("on-open-webview", this.userProtocol.url);
            },
            handleNativeClick() {
              this.changeAuthStatus(!0);
            },
            handleNativeSuccess(t) {
              void 0 === t && (t = {}),
                this.$emit(
                  "success",
                  Object(i.a)({}, t, {
                    cb: () => {
                      t.cb && t.cb(), this.close();
                    },
                  })
                );
            },
            handleAgree(t) {
              void 0 === t && (t = {}), this.changeAuthStatus(!1);
              var e = this.needNativeMobileAuth || this.needNativeUserInfoAuth;
              this.$emit("success", {
                type: s.AuthPopType.PROTOCOL,
                userAuthList: [s.AuthType.PROTOCOL],
                popupType: u.b.YOUZAN,
                cb: () => {
                  t.callback && t.callback(), !e && this.close();
                },
              });
            },
            handleDisagree(t) {
              void 0 === t && (t = {}),
                this.changeAuthStatus(!1),
                this.close(),
                this.$emit(
                  "fail",
                  t.userAuthList
                    ? t
                    : {
                        reasons: [s.AuthPopType.PROTOCOL],
                        authPopType: s.AuthPopType.PROTOCOL,
                        userAuthList: [s.AuthType.PROTOCOL],
                        popupType: u.b.YOUZAN,
                      }
                );
            },
            handleShowToast(t) {
              this.$emit("toast", t);
            },
            handleShowPopup() {},
            handleAfterShow(t) {
              this.$emit("auth-popup-show", t);
            },
            handleBeforeShow() {
              this.getNeedPrivacyAuth(),
                this.getProtocol().then((t) => {
                  t.close({ immediately: !0, excludeSource: t.source });
                });
            },
            getNeedPrivacyAuth() {
              return s.platform.needPrivacyAuth().then((t) => {
                this.needPlatformPrivacyAuth = t;
              });
            },
          },
          ud: !0,
        };
      e.default = n.default.component(a);
    },
  })
);
