"use strict";
var r = require("~/r");
r(
  "Z+h+",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "Z+h+": function (e, t, p) {
      p.r(t);
      var o = p("B5ln"),
        s = p("QxN7"),
        u = p("BILe"),
        { logSkynet: h } = s.platform.authLogger,
        a = {
          props: {
            visible: Boolean,
            theme: String,
            zIndex: Number,
            kdtId: Number,
            popupCustomStyle: String,
            paddingBottom: { type: Number, default: 0 },
          },
          data: () => ({ isReady: !1, canSimpleLogin: !1 }),
          computed: {
            contentStyle() {
              return "padding-bottom: " + this.paddingBottom + "px";
            },
          },
          created() {
            this.isReady = !0;
          },
          methods: {
            handleAuthSuccess(e) {
              var { data: t, cb: p, hasAuth: s } = e;
              this.$emit("success", {
                type: o.AuthPopType.MOBILE,
                userAuthList: [o.AuthType.MOBILE],
                popupType: u.b.YOUZAN,
                hasAuth: s,
                data: t,
                cb: () => {
                  this.handleShowToast({
                    type: "success",
                    message: "登录成功",
                    forbidClick: !0,
                  }),
                    null == p || p();
                },
              });
            },
            handleAuthFail() {
              this.$emit("fail", {
                reasons: [o.AuthPopType.MOBILE],
                authPopType: o.AuthPopType.MOBILE,
                userAuthList: [o.AuthType.MOBILE],
                popupType: u.b.YOUZAN,
              });
            },
            handleAuthClose() {
              this.$emit("close");
            },
            handleShowToast(e) {
              this.$emit("toast", e);
            },
            handleOpenWebview(e) {
              this.$emit("on-open-webview", e);
            },
            handleAuthPopupShow() {
              this.$emit("auth-popup-show", {
                authPopType: o.AuthPopType.MOBILE,
                popupType: u.b.YOUZAN,
              });
            },
          },
          ud: !0,
        },
        i = p("9ZMt");
      t.default = i.default.component(a);
    },
  })
);
