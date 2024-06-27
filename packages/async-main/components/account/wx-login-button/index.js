"use strict";
var r = require("~/r");
r(
  "/atv",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "/atv": function (e, t, o) {
      o.r(t);
      var n = o("QxN7"),
        a = o("hHpg"),
        i = o("u8kV"),
        r = o("WRHT"),
        { authLogger: s } = n.platform,
        l = getApp();
      Object(i.c)({
        properties: {
          customStyle: String,
          autoShowYzLogin: Boolean,
          mobileQuotaToast: Boolean,
          isFromAuthComponent: { type: Boolean, value: !1 },
          needPlatformPrivacyAuth: { type: Boolean, value: !1 },
        },
        data: {
          showWxButton: Object(r.b)(),
          showYzLogin: !1,
          btnId: "native-mobile-btn_" + Date.now(),
          openType: "getPhoneNumber",
        },
        externalClasses: ["btn-class"],
        observers: {
          needPlatformPrivacyAuth(e) {
            this.setYZData({
              openType:
                "getPhoneNumber" + (e ? "|agreePrivacyAuthorization" : ""),
            });
          },
        },
        attached() {
          this.init();
        },
        methods: {
          init() {
            l.getAuthorizeData().then((e) => {
              e.mobileAuthDisabled &&
                this.setYZData({ showWxButton: !1 }, { immediate: !0 });
            });
          },
          handleClick() {
            s.logNativeMobileClick({}), this.showLoading("", 1e3);
          },
          showLoading(e, t) {
            void 0 === t && (t = 0),
              a.a.loading({
                message: e,
                duration: t,
                forbidClick: !0,
                mask: !0,
                zIndex: 20009,
              });
          },
          handleGetMobile(e) {
            this.triggerEvent("getMobile", e);
          },
          handleShowLogin() {
            this.setYZData({ showYzLogin: !0 });
          },
          handleCloseLogin() {
            this.setYZData({ showYzLogin: !1 });
          },
          handlePopupClose() {
            this.handleCloseLogin(), this.triggerEvent("onclose");
          },
          handleLoginYzSuccess(e) {
            this.handleCloseLogin(), this.triggerEvent("onSuccess", e.detail);
          },
          handleLoginYzFail(e) {
            this.triggerEvent("onFail", e.detail);
          },
          handleAgreePrivacyAuth() {
            this.data.needPlatformPrivacyAuth &&
              n.platform.resolvePrivacyAuth(this.data.btnId);
          },
        },
      });
    },
    WRHT: function (e, t, o) {
      o.d(t, "b", function () {
        return a;
      });
      var n = o("z24M");
      var a = () => {
        var e = getApp().getSystemInfoSync();
        return (
          !Object(n.a)("transactionWeappFlag") &&
          (!e.environment || "wxwork" !== e.environment || "ios" !== e.platform)
        );
      };
      t.a = function (e) {
        void 0 === e && (e = {});
        var t = getCurrentPages();
        e = Object.assign(
          {
            selector: "#account-wx-login",
            context: t.length ? t[t.length - 1] : null,
          },
          e
        );
        var { context: o } = e;
        if (!o || !o.selectComponent) throw new Error("context is required");
        var n = o.selectComponent(e.selector);
        if (!n) throw new Error("Can not find the selector " + e.selector);
        (e.selectComponent = n), n.wxLogin && n.wxLogin(e);
      };
    },
  })
);
